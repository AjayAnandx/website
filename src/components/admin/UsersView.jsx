import React from 'react';
import { Users, UserPlus } from 'lucide-react';

const UsersView = () => {
    return (
        <div className="p-6 md:p-8 w-full max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-1">Users</h1>
                    <p className="text-gray-400">Manage system users and verify accounts</p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-[var(--color-accent)] hover:opacity-90 text-white rounded-lg transition-colors text-sm font-medium">
                    <UserPlus className="w-4 h-4" />
                    Add User
                </button>
            </div>

            <div className="flex flex-col items-center justify-center py-20 text-gray-500 bg-white/5 rounded-2xl border border-white/5 border-dashed">
                <Users className="w-16 h-16 mb-4 opacity-50" />
                <h3 className="text-xl font-bold text-gray-300 mb-2">User Management Coming Soon</h3>
                <p className="max-w-md text-center">
                    This module is currently under development. You will be able to manage registered users, roles, and permissions here.
                </p>
            </div>
        </div>
    );
};

export default UsersView;
