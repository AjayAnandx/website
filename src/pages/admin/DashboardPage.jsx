import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { collection, onSnapshot, updateDoc, deleteDoc, doc, query, orderBy, getDocs } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import { motion } from 'framer-motion';
import {
    CalendarCheck, FileText, Users, Clock, CheckCircle,
    LogOut, RefreshCw, Shield, Trash2
} from 'lucide-react';
import UsersView from '../../components/admin/UsersView';

// ─── Badge ────────────────────────────────────────────────────────────────────
const STATUS_CLS = {
    pending: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20',
    confirmed: 'text-green-400 bg-green-400/10 border-green-400/20',
    cancelled: 'text-red-400 bg-red-400/10 border-red-400/20',
    accepted: 'text-green-400 bg-green-400/10 border-green-400/20',
    reviewed: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
    rejected: 'text-red-400 bg-red-400/10 border-red-400/20',
};
const Badge = ({ status }) => (
    <span className={`px-2 py-0.5 rounded text-[11px] font-semibold border ${STATUS_CLS[status] || STATUS_CLS.pending}`}>
        {status || 'pending'}
    </span>
);

// ─── Stat card ────────────────────────────────────────────────────────────────
const StatCard = ({ icon: Icon, label, value, color, loading }) => (
    <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/5 border border-white/10 rounded-xl p-4"
    >
        <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-3 ${color}`}>
            <Icon className="w-4 h-4" />
        </div>
        <p className="text-2xl font-bold text-white">{loading ? '—' : value}</p>
        <p className="text-[11px] text-gray-400 mt-0.5">{label}</p>
    </motion.div>
);

// ─── Dashboard ────────────────────────────────────────────────────────────────
const DashboardPage = () => {
    const { user, userRole, isAdmin, logout } = useAuth();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('bookings');
    const [bookings, setBookings] = useState([]);
    const [applications, setApplications] = useState([]);
    const [usersCount, setUsersCount] = useState(0);
    const [loading, setLoading] = useState(true);
    const [expandedApp, setExpandedApp] = useState(null);

    // ─── Real-time listeners ──────────────────────────────────────────────────
    useEffect(() => {
        const fallback = async (col, setter) => {
            const snap = await getDocs(collection(db, col));
            setter(snap.docs.map(d => ({ id: d.id, ...d.data() })));
        };

        const unB = onSnapshot(
            query(collection(db, 'bookings'), orderBy('createdAt', 'desc')),
            snap => { setBookings(snap.docs.map(d => ({ id: d.id, ...d.data() }))); setLoading(false); },
            () => fallback('bookings', setBookings)
        );

        const unA = onSnapshot(
            query(collection(db, 'applications'), orderBy('createdAt', 'desc')),
            snap => setApplications(snap.docs.map(d => ({ id: d.id, ...d.data() }))),
            () => fallback('applications', setApplications)
        );

        const unU = onSnapshot(collection(db, 'users'),
            snap => setUsersCount(snap.size), () => { });

        return () => { unB(); unA(); unU(); };
    }, []);

    const updateBooking = async (id, status) => {
        if (!isAdmin) return;
        await updateDoc(doc(db, 'bookings', id), { status });
    };

    const deleteBooking = async (id) => {
        if (!isAdmin) return;
        if (!window.confirm('Delete this booking?')) return;
        await deleteDoc(doc(db, 'bookings', id));
    };

    const updateApp = async (id, status) => {
        if (!isAdmin) return;
        await updateDoc(doc(db, 'applications', id), { status });
    };

    const deleteApp = async (id) => {
        if (!isAdmin) return;
        if (!window.confirm('Delete this application?')) return;
        await deleteDoc(doc(db, 'applications', id));
    };

    const handleLogout = async () => { await logout(); navigate('/admin/login'); };

    // ─── Stats ────────────────────────────────────────────────────────────────
    const stats = [
        { icon: CalendarCheck, label: 'Total Bookings', value: bookings.length, color: 'bg-blue-500/20 text-blue-400' },
        { icon: Clock, label: 'Pending Bookings', value: bookings.filter(b => (b.status || 'pending') === 'pending').length, color: 'bg-yellow-500/20 text-yellow-400' },
        { icon: CheckCircle, label: 'Confirmed', value: bookings.filter(b => b.status === 'confirmed').length, color: 'bg-green-500/20 text-green-400' },
        { icon: FileText, label: 'Total Applications', value: applications.length, color: 'bg-purple-500/20 text-purple-400' },
        { icon: Clock, label: 'Pending Applications', value: applications.filter(a => (a.status || 'pending') === 'pending').length, color: 'bg-orange-500/20 text-orange-400' },
        { icon: Users, label: 'System Users', value: usersCount, color: 'bg-pink-500/20 text-pink-400' },
    ];

    const tabs = [
        { id: 'bookings', label: `Bookings (${bookings.length})`, icon: CalendarCheck },
        { id: 'applications', label: `Applications (${applications.length})`, icon: FileText },
        { id: 'users', label: `Users (${usersCount})`, icon: Users },
    ];

    return (
        <div className="min-h-screen bg-[#080808] text-white">

            {/* ── Header ── */}
            <header className="sticky top-0 z-10 bg-[#080808]/90 backdrop-blur border-b border-white/10 px-6 py-4 flex items-center justify-between">
                <div>
                    <h1 className="text-xl font-bold">Quantum Scripts</h1>
                    <div className="flex items-center gap-2 mt-0.5">
                        <p className="text-xs text-gray-400">{user?.email}</p>
                        <span className={`flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-bold border ${isAdmin ? 'text-[var(--color-accent)] bg-[var(--color-accent)]/10 border-[var(--color-accent)]/20' : 'text-blue-400 bg-blue-400/10 border-blue-400/20'}`}>
                            {isAdmin ? <Shield className="w-2.5 h-2.5" /> : null}
                            {userRole || 'user'}
                        </span>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <button onClick={() => navigate('/')}
                        className="flex items-center gap-2 text-sm text-gray-400 hover:text-white px-3 py-1.5 rounded-lg border border-white/10 hover:bg-white/5 transition-all">
                        ← Back to Site
                    </button>
                    <button onClick={handleLogout}
                        className="flex items-center gap-2 text-sm text-red-400 hover:text-red-300 px-3 py-1.5 rounded-lg border border-red-500/20 hover:bg-red-500/10 transition-all">
                        <LogOut className="w-4 h-4" /> Logout
                    </button>
                </div>
            </header>

            <main className="p-6 space-y-8 max-w-7xl mx-auto">

                {/* ── Stats ── */}
                <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Overview</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                        {stats.map((s, i) => (
                            <motion.div key={s.label} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
                                className="bg-white/5 border border-white/10 rounded-xl p-4">
                                <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-3 ${s.color}`}>
                                    <s.icon className="w-4 h-4" />
                                </div>
                                <p className="text-2xl font-bold text-white">{loading ? '—' : s.value}</p>
                                <p className="text-[11px] text-gray-400 mt-0.5">{s.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* ── Tabs ── */}
                <div>
                    <div className="flex gap-1 border-b border-white/10 mb-6">
                        {tabs.map(tab => (
                            <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-all ${activeTab === tab.id ? 'border-[var(--color-accent)] text-[var(--color-accent)]' : 'border-transparent text-gray-400 hover:text-white'}`}>
                                <tab.icon className="w-4 h-4" />{tab.label}
                            </button>
                        ))}
                    </div>

                    {loading && activeTab !== 'users' ? (
                        <div className="flex items-center justify-center py-20">
                            <RefreshCw className="w-6 h-6 text-gray-500 animate-spin" />
                        </div>
                    ) : activeTab === 'users' ? (
                        <UsersView />

                    ) : activeTab === 'bookings' ? (
                        /* ── BOOKINGS TABLE ── */
                        bookings.length === 0
                            ? <div className="text-center py-20 text-gray-500">No bookings yet.</div>
                            : (
                                <div className="overflow-x-auto rounded-xl border border-white/10">
                                    <table className="w-full text-sm">
                                        <thead>
                                            <tr className="border-b border-white/10 bg-white/3">
                                                {['Name', 'Email', 'Phone', 'Subject', 'Date', 'Time', 'Status', ...(isAdmin ? ['Actions'] : [])].map(h => (
                                                    <th key={h} className="text-left px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">{h}</th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {bookings.map((b, i) => (
                                                <motion.tr key={b.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.02 }}
                                                    className="border-b border-white/5 hover:bg-white/3 transition-colors">
                                                    <td className="px-4 py-3 text-white font-medium">{b.name || '—'}</td>
                                                    <td className="px-4 py-3 text-gray-300">{b.email || '—'}</td>
                                                    <td className="px-4 py-3 text-gray-300">{b.phone || '—'}</td>
                                                    <td className="px-4 py-3 text-gray-300 max-w-[160px] truncate">{b.subject || '—'}</td>
                                                    <td className="px-4 py-3 text-gray-300">{b.date || '—'}</td>
                                                    <td className="px-4 py-3 text-gray-300">{b.time || '—'}</td>
                                                    <td className="px-4 py-3"><Badge status={b.status} /></td>
                                                    {isAdmin && (
                                                        <td className="px-4 py-3">
                                                            <div className="flex gap-1.5 flex-wrap">
                                                                {b.status !== 'confirmed' && (
                                                                    <button onClick={() => updateBooking(b.id, 'confirmed')}
                                                                        className="text-[11px] text-green-400 px-2 py-1 rounded border border-green-500/20 hover:bg-green-500/10 transition-all">Confirm</button>
                                                                )}
                                                                {b.status !== 'cancelled' && (
                                                                    <button onClick={() => updateBooking(b.id, 'cancelled')}
                                                                        className="text-[11px] text-yellow-400 px-2 py-1 rounded border border-yellow-500/20 hover:bg-yellow-500/10 transition-all">Cancel</button>
                                                                )}
                                                                <button onClick={() => deleteBooking(b.id)}
                                                                    className="text-[11px] text-red-400 px-2 py-1 rounded border border-red-500/20 hover:bg-red-500/10 transition-all">
                                                                    <Trash2 className="w-3 h-3" />
                                                                </button>
                                                            </div>
                                                        </td>
                                                    )}
                                                </motion.tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )
                    ) : (
                        /* ── APPLICATIONS LIST ── */
                        applications.length === 0
                            ? <div className="text-center py-20 text-gray-500">No applications yet.</div>
                            : (
                                <div className="space-y-3">
                                    {applications.map((a, i) => (
                                        <motion.div key={a.id} initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.03 }}
                                            className="border border-white/10 rounded-xl overflow-hidden">
                                            <div className="flex items-center justify-between px-5 py-4 cursor-pointer hover:bg-white/3 transition-colors"
                                                onClick={() => setExpandedApp(expandedApp === a.id ? null : a.id)}>
                                                <div className="flex items-center gap-3">
                                                    <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white font-semibold text-sm">
                                                        {(a.full_name || '?')[0]?.toUpperCase()}
                                                    </div>
                                                    <div>
                                                        <p className="text-white font-medium text-sm">{a.full_name || '—'}</p>
                                                        <p className="text-xs text-gray-400">{a.email} · <span className="text-[var(--color-accent)]">{a.role_title || 'Unknown'}</span></p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <Badge status={a.status} />
                                                    <svg className={`w-4 h-4 text-gray-400 transition-transform ${expandedApp === a.id ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                </div>
                                            </div>

                                            {expandedApp === a.id && (
                                                <div className="border-t border-white/10 px-5 py-5 bg-white/2 space-y-4">
                                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                                                        {[['Mobile', a.mobile], ['City', a.city], ['College', a.college], ['Degree', a.degree],
                                                        ['Year', a.year], ['Reg. No', a.registration_no], ['Mode', a.mode], ['Duration', a.duration],
                                                        ['Start Date', a.start_date], ['Daily Hours', a.daily_availability]
                                                        ].map(([label, val]) => val && (
                                                            <div key={label}>
                                                                <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">{label}</p>
                                                                <p className="text-white">{val}</p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                    {a.resume_link && (
                                                        <a href={a.resume_link} target="_blank" rel="noopener noreferrer"
                                                            className="inline-flex items-center gap-1 text-[var(--color-accent)] text-sm hover:underline">
                                                            <FileText className="w-4 h-4" /> View Resume →
                                                        </a>
                                                    )}
                                                    {isAdmin && (
                                                        <div className="flex flex-wrap gap-2 pt-1">
                                                            {[
                                                                { label: 'Accept', status: 'accepted', cls: 'text-green-400 border-green-500/20 hover:bg-green-500/10' },
                                                                { label: 'Reviewed', status: 'reviewed', cls: 'text-blue-400 border-blue-500/20 hover:bg-blue-500/10' },
                                                                { label: 'Reject', status: 'rejected', cls: 'text-red-400 border-red-500/20 hover:bg-red-500/10' },
                                                            ].map(({ label, status, cls }) => (
                                                                <button key={status} onClick={() => updateApp(a.id, status)}
                                                                    disabled={a.status === status}
                                                                    className={`text-xs px-3 py-1.5 rounded border transition-all disabled:opacity-40 ${cls}`}>
                                                                    {label}
                                                                </button>
                                                            ))}
                                                            <button onClick={() => deleteApp(a.id)}
                                                                className="text-xs px-3 py-1.5 rounded border text-red-400 border-red-500/20 hover:bg-red-500/10 transition-all flex items-center gap-1">
                                                                <Trash2 className="w-3 h-3" /> Delete
                                                            </button>
                                                        </div>
                                                    )}
                                                    {!isAdmin && (
                                                        <p className="text-xs text-gray-500">View only — contact an admin to update this application.</p>
                                                    )}
                                                </div>
                                            )}
                                        </motion.div>
                                    ))}
                                </div>
                            )
                    )}
                </div>
            </main>
        </div>
    );
};

export default DashboardPage;
