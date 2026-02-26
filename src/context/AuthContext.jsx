import React, { createContext, useContext, useState, useEffect } from 'react';
import {
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    createUserWithEmailAndPassword
} from 'firebase/auth';
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '../lib/firebase';

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [userRole, setUserRole] = useState(null); // 'admin' | 'user'
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
            if (firebaseUser) {
                // Fetch user role from Firestore
                const userDoc = await getDoc(doc(db, 'users', firebaseUser.uid));
                if (userDoc.exists()) {
                    setUserRole(userDoc.data().role || 'user');
                } else {
                    // First-time sign in: create user record (default role = 'admin' if first user)
                    const isFirst = false; // Admin accounts are created manually
                    await setDoc(doc(db, 'users', firebaseUser.uid), {
                        uid: firebaseUser.uid,
                        email: firebaseUser.email,
                        role: isFirst ? 'admin' : 'user',
                        createdAt: serverTimestamp(),
                    });
                    setUserRole('user');
                }
                setUser(firebaseUser);
            } else {
                setUser(null);
                setUserRole(null);
            }
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    const login = async (email, password) => {
        const result = await signInWithEmailAndPassword(auth, email, password);
        return result.user;
    };

    const logout = async () => {
        await signOut(auth);
    };

    const createUser = async (email, password, role = 'user') => {
        // Save current admin user
        const currentUser = auth.currentUser;
        const result = await createUserWithEmailAndPassword(auth, email, password);
        await setDoc(doc(db, 'users', result.user.uid), {
            uid: result.user.uid,
            email,
            role,
            createdAt: serverTimestamp(),
        });
        // Sign back in as admin (re-login required after creating another user)
        return result.user;
    };

    const isAdmin = userRole === 'admin';

    const value = { user, userRole, isAdmin, loading, login, logout, createUser };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
