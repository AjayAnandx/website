import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { LogOut, ArrowLeft } from 'lucide-react';
import DashboardSidebar from '../../components/admin/DashboardSidebar';
import AppointmentsView from '../../components/admin/AppointmentsView';
import ApplicationsView from '../../components/admin/ApplicationsView';
import UsersView from '../../components/admin/UsersView';

const DashboardPage = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('appointments');

    const handleLogout = () => {
        logout();
        navigate('/admin/login');
    };

    const renderContent = () => {
        switch (activeTab) {
            case 'appointments':
                return <AppointmentsView />;
            case 'applications':
                return <ApplicationsView />;
            case 'users':
                return <UsersView />;
            case 'settings':
                return (
                    <div className="p-8 text-center text-gray-500">
                        <h2 className="text-2xl font-bold text-white mb-2">Settings</h2>
                        <p>System configuration options will appear here.</p>
                    </div>
                );
            default:
                return <AppointmentsView />;
        }
    };

    return (
        <div className="min-h-screen bg-background flex flex-col">
            {/* Minimal Top Navbar */}
            <header className="h-16 border-b border-white/5 bg-background/50 backdrop-blur-xl flex items-center justify-between px-6 sticky top-0 z-50">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--color-accent)] to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-[var(--color-accent)]/20">
                        Q
                    </div>
                    <span className="font-bold text-lg tracking-tight text-white">
                        Quantum Scripts
                    </span>
                </div>

                <Link
                    to="/"
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors px-3 py-1.5 rounded-lg hover:bg-white/5"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Site
                </Link>
            </header>

            {/* Main Content Area */}
            <div className="flex flex-1">
                {/* Sidebar */}
                <DashboardSidebar
                    activeTab={activeTab}
                    onTabChange={setActiveTab}
                    onLogout={handleLogout}
                />

                {/* Dynamic View */}
                <main className="flex-1 overflow-y-auto h-[calc(100vh-4rem)] bg-gradient-to-br from-background to-black">
                    {renderContent()}
                </main>
            </div>
        </div>
    );
};

export default DashboardPage;
