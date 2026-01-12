import React from 'react';
import { LayoutDashboard, Users, Settings, LogOut } from 'lucide-react';
import { motion } from 'framer-motion';

const DashboardSidebar = ({ activeTab, onTabChange, onLogout }) => {
    const mainNavItems = [
        { id: 'appointments', label: 'Appointments', icon: LayoutDashboard },
        { id: 'users', label: 'Manage Users', icon: Users },
    ];

    const bottomNavItems = [
        { id: 'settings', label: 'Settings', icon: Settings },
    ];

    const NavItem = ({ item, onClick, isActive, isDanger = false }) => (
        <button
            onClick={onClick}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group relative overflow-hidden
                ${isActive
                    ? 'text-white font-medium'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }
                ${isDanger ? 'hover:bg-red-500/10 hover:text-red-400' : ''}
            `}
        >
            {isActive && (
                <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-white/10 border border-white/5 rounded-xl"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
            )}
            <item.icon className={`w-5 h-5 relative z-10 ${isActive ? 'text-[var(--color-accent)]' : ''}`} />
            <span className="relative z-10">{item.label}</span>
        </button>
    );

    return (
        <div className="w-64 h-[calc(100vh-4rem)] sticky top-16 flex flex-col border-r border-white/5 bg-background/50 backdrop-blur-xl p-4">
            <div className="space-y-1">
                <div className="px-4 py-2 text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Main Menu</div>
                {mainNavItems.map((item) => (
                    <NavItem
                        key={item.id}
                        item={item}
                        isActive={activeTab === item.id}
                        onClick={() => onTabChange(item.id)}
                    />
                ))}
            </div>

            <div className="mt-auto space-y-1">
                <div className="px-4 py-2 text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">System</div>
                {bottomNavItems.map((item) => (
                    <NavItem
                        key={item.id}
                        item={item}
                        isActive={activeTab === item.id}
                        onClick={() => onTabChange(item.id)}
                    />
                ))}

                <div className="pt-4 mt-4 border-t border-white/5">
                    <NavItem
                        item={{ label: 'Logout', icon: LogOut }}
                        onClick={onLogout}
                        isActive={false}
                        isDanger={true}
                    />
                </div>
            </div>
        </div>
    );
};

export default DashboardSidebar;
