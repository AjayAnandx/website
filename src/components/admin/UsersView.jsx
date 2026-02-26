import React, { useState, useEffect } from 'react';
import { collection, getDocs, updateDoc, deleteDoc, doc, onSnapshot, query, orderBy } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import { useAuth } from '../../context/AuthContext';
import { motion } from 'framer-motion';
import { Shield, User, Trash2, UserPlus, X, Eye, EyeOff } from 'lucide-react';

const ROLE_COLORS = {
    admin: 'text-[var(--color-accent)] bg-[var(--color-accent)]/10 border-[var(--color-accent)]/20',
    user: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
};

const UsersView = () => {
    const { user: currentUser, isAdmin, createUser } = useAuth();
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showCreateForm, setShowCreateForm] = useState(false);
    const [form, setForm] = useState({ email: '', password: '', role: 'user' });
    const [showPass, setShowPass] = useState(false);
    const [creating, setCreating] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const q = query(collection(db, 'users'), orderBy('createdAt', 'desc'));
        const unsub = onSnapshot(q, (snap) => {
            setUsers(snap.docs.map(d => ({ id: d.id, ...d.data() })));
            setLoading(false);
        }, async () => {
            const snap = await getDocs(collection(db, 'users'));
            setUsers(snap.docs.map(d => ({ id: d.id, ...d.data() })));
            setLoading(false);
        });
        return () => unsub();
    }, []);

    const changeRole = async (uid, role) => {
        await updateDoc(doc(db, 'users', uid), { role });
    };

    const deleteUser = async (uid) => {
        if (!window.confirm('Remove this user from the system?')) return;
        await deleteDoc(doc(db, 'users', uid));
    };

    const handleCreate = async (e) => {
        e.preventDefault();
        setError('');
        setCreating(true);
        try {
            await createUser(form.email, form.password, form.role);
            setForm({ email: '', password: '', role: 'user' });
            setShowCreateForm(false);
        } catch (err) {
            setError(err.message || 'Failed to create user.');
        } finally {
            setCreating(false);
        }
    };

    if (loading) return <div className="text-gray-400 py-12 text-center">Loading users...</div>;

    return (
        <div className="space-y-5">
            {/* Header row */}
            <div className="flex items-center justify-between">
                <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                    System Users ({users.length})
                </h2>
                {isAdmin && (
                    <button
                        onClick={() => setShowCreateForm(!showCreateForm)}
                        className="flex items-center gap-2 text-sm text-[var(--color-accent)] px-3 py-1.5 rounded-lg border border-[var(--color-accent)]/20 hover:bg-[var(--color-accent)]/10 transition-all"
                    >
                        {showCreateForm ? <X className="w-4 h-4" /> : <UserPlus className="w-4 h-4" />}
                        {showCreateForm ? 'Cancel' : 'Add User'}
                    </button>
                )}
            </div>

            {/* Create user form */}
            {isAdmin && showCreateForm && (
                <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white/5 border border-white/10 rounded-xl p-5"
                >
                    <h3 className="text-sm font-semibold text-white mb-4">Create New User</h3>
                    <form onSubmit={handleCreate} className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <input
                            type="email"
                            placeholder="Email address"
                            value={form.email}
                            onChange={e => setForm({ ...form, email: e.target.value })}
                            required
                            className="px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[var(--color-accent)] transition-all"
                        />
                        <div className="relative">
                            <input
                                type={showPass ? 'text' : 'password'}
                                placeholder="Password"
                                value={form.password}
                                onChange={e => setForm({ ...form, password: e.target.value })}
                                required
                                minLength={6}
                                className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[var(--color-accent)] transition-all pr-10"
                            />
                            <button type="button" onClick={() => setShowPass(!showPass)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                                {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                            </button>
                        </div>
                        <div className="flex gap-3">
                            <select
                                value={form.role}
                                onChange={e => setForm({ ...form, role: e.target.value })}
                                className="flex-1 px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-[var(--color-accent)] transition-all"
                            >
                                <option value="user" className="bg-[#080808]">User</option>
                                <option value="admin" className="bg-[#080808]">Admin</option>
                            </select>
                            <button
                                type="submit"
                                disabled={creating}
                                className="px-5 py-2.5 bg-[var(--color-accent)] hover:bg-[var(--color-accent)]/90 text-white text-sm font-semibold rounded-lg transition-all disabled:opacity-50"
                            >
                                {creating ? 'Creating...' : 'Create'}
                            </button>
                        </div>
                    </form>
                    {error && <p className="text-red-400 text-xs mt-3">{error}</p>}
                </motion.div>
            )}

            {/* Users table */}
            <div className="overflow-x-auto rounded-xl border border-white/10">
                <table className="w-full text-sm">
                    <thead>
                        <tr className="border-b border-white/10 bg-white/3">
                            {['User', 'Email', 'Role', ...(isAdmin ? ['Actions'] : [])].map(h => (
                                <th key={h} className="text-left px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">{h}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((u, i) => (
                            <motion.tr
                                key={u.id}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: i * 0.04 }}
                                className={`border-b border-white/5 transition-colors hover:bg-white/3 ${u.uid === currentUser?.uid ? 'bg-white/2' : ''}`}
                            >
                                {/* Avatar + name */}
                                <td className="px-4 py-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-white">
                                            {u.email?.[0]?.toUpperCase()}
                                        </div>
                                        <div>
                                            {u.uid === currentUser?.uid && (
                                                <span className="text-[10px] text-[var(--color-accent)] font-semibold">You</span>
                                            )}
                                        </div>
                                    </div>
                                </td>

                                {/* Email */}
                                <td className="px-4 py-3 text-gray-300">{u.email}</td>

                                {/* Role badge */}
                                <td className="px-4 py-3">
                                    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold border ${ROLE_COLORS[u.role] || ROLE_COLORS.user}`}>
                                        {u.role === 'admin' ? <Shield className="w-3 h-3" /> : <User className="w-3 h-3" />}
                                        {u.role || 'user'}
                                    </span>
                                </td>

                                {/* Actions (admin only) */}
                                {isAdmin && (
                                    <td className="px-4 py-3">
                                        <div className="flex items-center gap-2">
                                            {/* Role toggle */}
                                            {u.uid !== currentUser?.uid && (
                                                <>
                                                    <button
                                                        onClick={() => changeRole(u.uid || u.id, u.role === 'admin' ? 'user' : 'admin')}
                                                        className="text-xs px-2.5 py-1 rounded border border-white/10 text-gray-300 hover:text-white hover:border-white/20 transition-all"
                                                    >
                                                        Make {u.role === 'admin' ? 'User' : 'Admin'}
                                                    </button>
                                                    <button
                                                        onClick={() => deleteUser(u.uid || u.id)}
                                                        className="text-xs px-2 py-1 rounded border border-red-500/20 text-red-400 hover:bg-red-500/10 transition-all"
                                                    >
                                                        <Trash2 className="w-3.5 h-3.5" />
                                                    </button>
                                                </>
                                            )}
                                            {u.uid === currentUser?.uid && (
                                                <span className="text-[11px] text-gray-500">Current session</span>
                                            )}
                                        </div>
                                    </td>
                                )}
                            </motion.tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UsersView;
