import React, { useState, useEffect } from 'react';
import { Users, UserPlus, Trash2, Key, Loader2, Shield } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import { useAuth } from '../../context/AuthContext';
import UserModal from './UserModal';

const UsersView = () => {
    const { user: currentUser } = useAuth();
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [modal, setModal] = useState({ isOpen: false, mode: 'add', user: null });
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const { data, error } = await supabase.functions.invoke('manage-users', {
                method: 'GET'
            });
            if (error) throw error;
            setUsers(data.users || []);
        } catch (error) {
            console.error('Error fetching users:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleAddUser = async (formData) => {
        const { data, error } = await supabase.functions.invoke('manage-users', {
            method: 'POST',
            body: formData
        });
        if (error) {
            const errorBody = await error.context.json().catch(() => ({}));
            throw new Error(errorBody.error || error.message);
        }
        await fetchUsers();
    };

    const handleUpdatePassword = async (formData) => {
        const { error } = await supabase.functions.invoke('manage-users', {
            method: 'PUT',
            body: { id: formData.id, password: formData.password }
        });
        if (error) {
            const errorBody = await error.context.json().catch(() => ({}));
            throw new Error(errorBody.error || error.message);
        }
        // No need to refetch users for password change
    };

    const handleDeleteUser = async (userId) => {
        if (!confirm('Are you sure you want to delete this user? This action cannot be undone.')) return;

        setIsSubmitting(true);
        try {
            const { error } = await supabase.functions.invoke(`manage-users?id=${userId}`, {
                method: 'DELETE'
            });
            if (error) throw error;
            setUsers(prev => prev.filter(u => u.id !== userId));
        } catch (error) {
            console.error('Error deleting user:', error);
            alert('Failed to delete user');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleSave = async (data) => {
        if (modal.mode === 'add') {
            await handleAddUser(data);
        } else {
            await handleUpdatePassword(data);
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-full">
                <Loader2 className="w-8 h-8 animate-spin text-[var(--color-accent)]" />
            </div>
        );
    }

    return (
        <div className="p-6 md:p-8 w-full max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-1">Users</h1>
                    <p className="text-gray-400">Manage system users and verify accounts</p>
                </div>
                {currentUser?.role === 'admin' && (
                    <button
                        onClick={() => setModal({ isOpen: true, mode: 'add', user: null })}
                        className="flex items-center gap-2 px-4 py-2 bg-[var(--color-accent)] hover:opacity-90 text-white rounded-lg transition-colors text-sm font-medium"
                    >
                        <UserPlus className="w-4 h-4" />
                        Add User
                    </button>
                )}
            </div>

            <div className="bg-white/5 rounded-2xl border border-white/5 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-white/5 bg-white/5">
                                <th className="p-4 text-sm font-medium text-gray-400">User</th>
                                <th className="p-4 text-sm font-medium text-gray-400">Role</th>
                                <th className="p-4 text-sm font-medium text-gray-400">Created At</th>
                                <th className="p-4 text-sm font-medium text-gray-400 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr key={user.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                    <td className="p-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center text-white font-medium">
                                                {user.email?.[0].toUpperCase()}
                                            </div>
                                            <div>
                                                <div className="text-white font-medium">{user.email}</div>
                                                <div className="text-xs text-gray-500">ID: {user.id.slice(0, 8)}...</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        <div className="flex items-center gap-2">
                                            {user.profile?.role === 'admin' ? (
                                                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20">
                                                    <Shield className="w-3 h-3" />
                                                    Admin
                                                </span>
                                            ) : (
                                                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-gray-500/10 text-gray-400 border border-gray-500/20">
                                                    User
                                                </span>
                                            )}
                                        </div>
                                    </td>
                                    <td className="p-4 text-gray-400 text-sm">
                                        {new Date(user.created_at).toLocaleDateString()}
                                    </td>
                                    <td className="p-4">
                                        <div className="flex items-center justify-end gap-2">
                                            <button
                                                onClick={() => setModal({ isOpen: true, mode: 'edit-password', user })}
                                                className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                                                title="Change Password"
                                            >
                                                <Key className="w-4 h-4" />
                                            </button>
                                            {currentUser?.id !== user.id && (
                                                <button
                                                    onClick={() => handleDeleteUser(user.id)}
                                                    disabled={isSubmitting}
                                                    className="p-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-colors"
                                                    title="Delete User"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            {users.length === 0 && (
                                <tr>
                                    <td colSpan="4" className="p-8 text-center text-gray-500">
                                        No users found
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            <UserModal
                isOpen={modal.isOpen}
                onClose={() => setModal({ ...modal, isOpen: false })}
                mode={modal.mode}
                selectedUser={modal.user}
                onSave={handleSave}
            />
        </div>
    );
};

export default UsersView;
