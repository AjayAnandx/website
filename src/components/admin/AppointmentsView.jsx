import React, { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import {
    Calendar,
    Clock,
    Mail,
    Phone,
    FileText,
    CheckCircle,
    XCircle,
    Trash2,
    Search,
    RefreshCcw,
    Download,
    Loader2
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AppointmentsView = () => {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterStatus, setFilterStatus] = useState('all');

    const fetchBookings = async () => {
        setLoading(true);
        try {
            const { data, error } = await supabase
                .from('bookings')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) throw error;
            setBookings(data || []);
        } catch (error) {
            console.error('Error fetching bookings:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBookings();
    }, []);

    const updateBookingStatus = async (id, newStatus) => {
        try {
            const { error } = await supabase
                .from('bookings')
                .update({ status: newStatus })
                .eq('id', id);

            if (error) throw error;

            // Optimistic update
            setBookings(bookings.map(b => b.id === id ? { ...b, status: newStatus } : b));
        } catch (error) {
            console.error('Error updating status:', error);
            alert('Failed to update status');
        }
    };

    const deleteBooking = async (id) => {
        if (!confirm('Are you sure you want to delete this booking?')) return;

        try {
            const { error } = await supabase
                .from('bookings')
                .delete()
                .eq('id', id);

            if (error) throw error;

            setBookings(bookings.filter(b => b.id !== id));
        } catch (error) {
            console.error('Error deleting booking:', error);
            alert('Failed to delete booking');
        }
    };

    const filteredBookings = bookings.filter(booking => {
        const matchesSearch =
            booking.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            booking.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            booking.subject?.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesStatus = filterStatus === 'all' || booking.status === filterStatus;

        return matchesSearch && matchesStatus;
    });

    const getStatusColor = (status) => {
        switch (status) {
            case 'confirmed': return 'text-green-400 bg-green-400/10 border-green-400/20';
            case 'pending': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
            case 'cancelled': return 'text-red-400 bg-red-400/10 border-red-400/20';
            default: return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
        }
    };

    return (
        <div className="p-6 md:p-8 w-full max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-1">Appointments</h1>
                    <p className="text-gray-400">Manage and track booking requests</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                        <input
                            type="text"
                            placeholder="Search bookings..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-9 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-[var(--color-accent)] w-full sm:w-64"
                        />
                    </div>
                    <select
                        value={filterStatus}
                        onChange={(e) => setFilterStatus(e.target.value)}
                        className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-[var(--color-accent)] outline-none"
                    >
                        <option value="all" className="bg-gray-900">All Status</option>
                        <option value="pending" className="bg-gray-900">Pending</option>
                        <option value="confirmed" className="bg-gray-900">Confirmed</option>
                        <option value="cancelled" className="bg-gray-900">Cancelled</option>
                    </select>
                    <button
                        onClick={fetchBookings}
                        className="p-2 bg-white/5 hover:bg-[var(--color-accent)]/20 hover:text-[var(--color-accent)] text-gray-400 rounded-lg transition-colors border border-white/10"
                        title="Refresh"
                    >
                        <RefreshCcw className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`} />
                    </button>
                </div>
            </div>

            {loading && bookings.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20 text-gray-500">
                    <Loader2 className="w-10 h-10 animate-spin mb-4" />
                    <p>Loading appointments...</p>
                </div>
            ) : filteredBookings.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20 text-gray-500 bg-white/5 rounded-2xl border border-white/5 border-dashed">
                    <Calendar className="w-12 h-12 mb-4 opacity-50" />
                    <p>No bookings found matching your criteria</p>
                </div>
            ) : (
                <div className="grid gap-4">
                    <AnimatePresence>
                        {filteredBookings.map((booking) => (
                            <motion.div
                                key={booking.id}
                                layout
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="glass-card p-6 rounded-xl border border-white/5 group hover:border-white/10"
                            >
                                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                                    <div className="space-y-4 lg:w-1/3">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary)] font-bold text-lg uppercase">
                                                {booking.name?.charAt(0) || 'U'}
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-white text-lg">{booking.name || 'Unknown User'}</h3>
                                                <div className="flex items-center gap-2 text-sm text-gray-400">
                                                    <Mail className="w-3.5 h-3.5" />
                                                    {booking.email || 'No email'}
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(booking.status)}`}>
                                            <div className="w-1.5 h-1.5 rounded-full bg-current" />
                                            {booking.status?.charAt(0).toUpperCase() + booking.status?.slice(1) || 'Pending'}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm lg:w-1/3">
                                        <div className="space-y-1">
                                            <p className="text-gray-500 flex items-center gap-2">
                                                <Calendar className="w-4 h-4" /> Date
                                            </p>
                                            <p className="text-gray-300 font-medium">
                                                {new Date(booking.date).toLocaleDateString()}
                                            </p>
                                        </div>
                                        <div className="space-y-1">
                                            <p className="text-gray-500 flex items-center gap-2">
                                                <Clock className="w-4 h-4" /> Time
                                            </p>
                                            <p className="text-gray-300 font-medium">
                                                {booking.time || 'Not specified'}
                                            </p>
                                        </div>
                                        <div className="space-y-1">
                                            <p className="text-gray-500 flex items-center gap-2">
                                                <Phone className="w-4 h-4" /> Phone
                                            </p>
                                            <p className="text-gray-300">
                                                {booking.phone || '-'}
                                            </p>
                                        </div>
                                        <div className="space-y-1">
                                            <p className="text-gray-500 flex items-center gap-2">
                                                <FileText className="w-4 h-4" /> Subject
                                            </p>
                                            <p className="text-gray-300 truncate" title={booking.subject}>
                                                {booking.subject || '-'}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3 lg:w-auto mt-4 lg:mt-0 pt-4 lg:pt-0 border-t lg:border-t-0 border-white/5">
                                        {booking.file_url && (
                                            <a
                                                href={booking.file_url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2 hover:bg-white/10 rounded-lg text-gray-400 hover:text-white transition-colors"
                                                title="View Attachment"
                                            >
                                                <Download className="w-5 h-5" />
                                            </a>
                                        )}

                                        {booking.status !== 'confirmed' && (
                                            <button
                                                onClick={() => updateBookingStatus(booking.id, 'confirmed')}
                                                className="flex-1 lg:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-green-500/10 hover:bg-green-500/20 text-green-400 border border-green-500/20 rounded-lg transition-colors text-sm font-medium"
                                            >
                                                <CheckCircle className="w-4 h-4" />
                                                Confirm
                                            </button>
                                        )}

                                        {booking.status !== 'cancelled' && (
                                            <button
                                                onClick={() => updateBookingStatus(booking.id, 'cancelled')}
                                                className="flex-1 lg:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 text-gray-300 border border-white/10 rounded-lg transition-colors text-sm font-medium"
                                            >
                                                <XCircle className="w-4 h-4" />
                                                Cancel
                                            </button>
                                        )}

                                        <button
                                            onClick={() => deleteBooking(booking.id)}
                                            className="p-2 hover:bg-red-500/10 text-gray-400 hover:text-red-400 rounded-lg transition-colors"
                                            title="Delete"
                                        >
                                            <Trash2 className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>

                                {/* Additional file info if available */}
                                {booking.file_url && (
                                    <div className="mt-4 p-3 bg-white/5 rounded-lg border border-white/5 flex items-center gap-3 text-sm">
                                        <div className="p-2 bg-[var(--color-primary)]/10 rounded-md">
                                            <FileText className="w-4 h-4 text-[var(--color-primary)]" />
                                        </div>
                                        <span className="text-gray-300 truncate flex-1">{booking.file_url}</span>
                                        <span className="text-xs text-[var(--color-accent)] font-medium">Attachment</span>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            )}
        </div>
    );
};

export default AppointmentsView;
