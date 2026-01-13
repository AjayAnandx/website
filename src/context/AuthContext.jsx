import React, { createContext, useState, useContext, useEffect } from 'react';
import { supabase } from '../lib/supabase';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check active session
        const getSession = async () => {
            try {
                const { data: { session }, error } = await supabase.auth.getSession();
                if (error) throw error;

                if (session?.user) {
                    await fetchProfile(session.user);
                } else {
                    setLoading(false);
                }
            } catch (error) {
                console.error('Error checking session:', error);
                setLoading(false);
            }
        };

        getSession();

        const { data: { subscription } } = supabase.auth.onAuthStateChange(async (_event, session) => {
            if (session?.user) {
                await fetchProfile(session.user);
            } else {
                setUser(null);
                setLoading(false);
            }
        });

        return () => subscription.unsubscribe();
    }, []);

    const fetchProfile = async (currentUser) => {
        try {
            console.log('Fetching profile for:', currentUser.id);
            // Create a timeout for the profile fetch
            const timeoutPromise = new Promise((_, reject) =>
                setTimeout(() => reject(new Error('Profile fetch timeout')), 3000)
            );

            // Race the query against the timeout
            const queryPromise = supabase
                .from('profiles')
                .select('*')
                .eq('id', currentUser.id)
                .single();

            const { data, error } = await Promise.race([queryPromise, timeoutPromise]);

            if (error && error.code !== 'PGRST116') {
                console.error('Error fetching profile:', error);
            }

            console.log('Profile fetched:', data);
            setUser({ ...currentUser, ...data });
        } catch (error) {
            console.error('Error in fetchProfile:', error);
            setUser(currentUser); // Fallback to basic auth user
        } finally {
            setLoading(false);
        }
    };

    const login = async (email, password) => {
        console.log('Attempting login for:', email);
        try {
            // Create a timeout promise to prevent hanging
            const timeoutPromise = new Promise((resolve) =>
                setTimeout(() => resolve({ timeout: true }), 5000)
            );

            // Race the actual sign in against the timeout
            const result = await Promise.race([
                supabase.auth.signInWithPassword({ email, password }),
                timeoutPromise
            ]);

            // Handle timeout case
            if (result.timeout) {
                console.warn('Login timed out, checking session...');
                // Check if session was actually established despite timeout
                const { data: { session }, error: sessionError } = await supabase.auth.getSession();

                if (session && !sessionError) {
                    console.log('Session found after timeout');
                    // Manually ensure profile is fetched
                    await fetchProfile(session.user);
                    return { success: true, data: { session } };
                }

                return {
                    success: false,
                    error: 'Connection timed out. Please check your network or try again.'
                };
            }

            // Handle normal response
            const { data, error } = result;

            if (error) {
                console.error('Login failed:', error.message);
                return { success: false, error: error.message };
            }

            console.log('Login successful');
            return { success: true, data };
        } catch (error) {
            console.error('Login error:', error);
            return { success: false, error: 'An unexpected error occurred' };
        }
    };

    const logout = async () => {
        await supabase.auth.signOut();
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
