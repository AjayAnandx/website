import React, { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import {
    User,
    Mail,
    Phone,
    Briefcase,
    Calendar,
    Search,
    RefreshCcw,
    Trash2,
    CheckCircle,
    XCircle,
    Eye,
    Download,
    Loader2,
    ExternalLink
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ApplicationsView = () => {
    const [applications, setApplications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterStatus, setFilterStatus] = useState('all');
    const [selectedApplication, setSelectedApplication] = useState(null);

    const fetchApplications = async () => {
        setLoading(true);
        try {
            const { data, error } = await supabase
                .from('applications')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) throw error;
            setApplications(data || []);
        } catch (error) {
            console.error('Error fetching applications:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchApplications();
    }, []);

    const updateApplicationStatus = async (id, newStatus) => {
        try {
            const { error } = await supabase
                .from('applications')
                .update({ status: newStatus })
                .eq('id', id);

            if (error) throw error;

            setApplications(applications.map(app => app.id === id ? { ...app, status: newStatus } : app));
        } catch (error) {
            console.error('Error updating status:', error);
            alert('Failed to update status');
        }
    };

    const deleteApplication = async (id) => {
        if (!confirm('Are you sure you want to delete this application?')) return;

        try {
            const { error } = await supabase
                .from('applications')
                .delete()
                .eq('id', id);

            if (error) throw error;

            setApplications(applications.filter(app => app.id !== id));
        } catch (error) {
            console.error('Error deleting application:', error);
            alert('Failed to delete application');
        }
    };

    const filteredApplications = applications.filter(app => {
        const matchesSearch =
            app.full_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            app.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            app.role_title?.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesStatus = filterStatus === 'all' || app.status === filterStatus;

        return matchesSearch && matchesStatus;
    });

    const getStatusColor = (status) => {
        switch (status) {
            case 'accepted': return 'text-green-400 bg-green-400/10 border-green-400/20';
            case 'pending': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
            case 'rejected': return 'text-red-400 bg-red-400/10 border-red-400/20';
            default: return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
        }
    };

    return (
        <div className="p-6 md:p-8 w-full max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-1">Job Applications</h1>
                    <p className="text-gray-400">Review and manage candidates</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                        <input
                            type="text"
                            placeholder="Search applicants..."
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
                        <option value="accepted" className="bg-gray-900">Accepted</option>
                        <option value="rejected" className="bg-gray-900">Rejected</option>
                    </select>
                    <button
                        onClick={fetchApplications}
                        className="p-2 bg-white/5 hover:bg-[var(--color-accent)]/20 hover:text-[var(--color-accent)] text-gray-400 rounded-lg transition-colors border border-white/10"
                        title="Refresh"
                    >
                        <RefreshCcw className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`} />
                    </button>
                </div>
            </div>

            {loading && applications.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20 text-gray-500">
                    <Loader2 className="w-10 h-10 animate-spin mb-4" />
                    <p>Loading applications...</p>
                </div>
            ) : filteredApplications.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20 text-gray-500 bg-white/5 rounded-2xl border border-white/5 border-dashed">
                    <Briefcase className="w-12 h-12 mb-4 opacity-50" />
                    <p>No applications found matching your criteria</p>
                </div>
            ) : (
                <div className="grid gap-4">
                    <AnimatePresence>
                        {filteredApplications.map((app) => (
                            <motion.div
                                key={app.id}
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
                                                {app.full_name?.charAt(0) || 'U'}
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-white text-lg">{app.full_name}</h3>
                                                <div className="flex items-center gap-2 text-sm text-gray-400">
                                                    <Briefcase className="w-3.5 h-3.5" />
                                                    {app.role_title}
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(app.status)}`}>
                                            <div className="w-1.5 h-1.5 rounded-full bg-current" />
                                            {app.status?.charAt(0).toUpperCase() + app.status?.slice(1) || 'Pending'}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm lg:w-1/3">
                                        <div className="space-y-1">
                                            <p className="text-gray-500 flex items-center gap-2">
                                                <Mail className="w-4 h-4" /> Email
                                            </p>
                                            <p className="text-gray-300 font-medium truncate">{app.email}</p>
                                        </div>
                                        <div className="space-y-1">
                                            <p className="text-gray-500 flex items-center gap-2">
                                                <Phone className="w-4 h-4" /> Phone
                                            </p>
                                            <p className="text-gray-300 font-medium">{app.mobile}</p>
                                        </div>
                                        <div className="space-y-1">
                                            <p className="text-gray-500 flex items-center gap-2">
                                                <Calendar className="w-4 h-4" /> Applied On
                                            </p>
                                            <p className="text-gray-300">
                                                {new Date(app.created_at).toLocaleDateString()}
                                            </p>
                                        </div>
                                        <div className="space-y-1">
                                            <p className="text-gray-500 flex items-center gap-2">
                                                <Download className="w-4 h-4" /> Resume
                                            </p>
                                            <a
                                                href={app.resume_link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-[var(--color-accent)] hover:underline flex items-center gap-1"
                                            >
                                                View Link <ExternalLink className="w-3 h-3" />
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3 lg:w-auto mt-4 lg:mt-0 pt-4 lg:pt-0 border-t lg:border-t-0 border-white/5">
                                        <button
                                            onClick={() => setSelectedApplication(app)}
                                            className="p-2 hover:bg-white/10 rounded-lg text-gray-400 hover:text-white transition-colors"
                                            title="View Details"
                                        >
                                            <Eye className="w-5 h-5" />
                                        </button>

                                        {app.status !== 'accepted' && (
                                            <button
                                                onClick={() => updateApplicationStatus(app.id, 'accepted')}
                                                className="flex-1 lg:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-green-500/10 hover:bg-green-500/20 text-green-400 border border-green-500/20 rounded-lg transition-colors text-sm font-medium"
                                            >
                                                <CheckCircle className="w-4 h-4" />
                                                Accept
                                            </button>
                                        )}

                                        {app.status !== 'rejected' && (
                                            <button
                                                onClick={() => updateApplicationStatus(app.id, 'rejected')}
                                                className="flex-1 lg:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 text-gray-300 border border-white/10 rounded-lg transition-colors text-sm font-medium"
                                            >
                                                <XCircle className="w-4 h-4" />
                                                Reject
                                            </button>
                                        )}

                                        <button
                                            onClick={() => deleteApplication(app.id)}
                                            className="p-2 hover:bg-red-500/10 text-gray-400 hover:text-red-400 rounded-lg transition-colors"
                                            title="Delete"
                                        >
                                            <Trash2 className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            )}

            {/* Application Detail Modal */}
            <AnimatePresence>
                {selectedApplication && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="bg-neutral-900 border border-white/10 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl"
                        >
                            <div className="p-6 border-b border-white/10 flex items-center justify-between bg-white/5">
                                <div>
                                    <h2 className="text-2xl font-bold text-white">{selectedApplication.full_name}</h2>
                                    <p className="text-[var(--color-accent)]">{selectedApplication.role_title}</p>
                                </div>
                                <button
                                    onClick={() => setSelectedApplication(null)}
                                    className="p-2 hover:bg-white/10 rounded-full text-gray-400 hover:text-white transition-colors"
                                >
                                    <XCircle className="w-6 h-6" />
                                </button>
                            </div>

                            <div className="p-8 overflow-y-auto custom-scrollbar space-y-8">
                                <div className="grid grid-cols-2 gap-6">
                                    <DetailItem label="Email" value={selectedApplication.email} icon={<Mail size={16} />} />
                                    <DetailItem label="Mobile" value={selectedApplication.mobile} icon={<Phone size={16} />} />
                                    <DetailItem label="Location" value={selectedApplication.city} />
                                    <DetailItem label="College" value={selectedApplication.college} />
                                    <DetailItem label="Degree" value={selectedApplication.degree} />
                                    <DetailItem label="Year of Study" value={selectedApplication.year} />
                                    <DetailItem label="Reg No." value={selectedApplication.registration_no} />
                                    <DetailItem label="Mode" value={selectedApplication.mode} />
                                    <DetailItem label="Duration" value={selectedApplication.duration} />
                                    <DetailItem label="Start Date" value={selectedApplication.start_date} />
                                    <DetailItem label="Availability" value={selectedApplication.daily_availability} />
                                </div>

                                {selectedApplication.resume_link && (
                                    <div className="p-4 bg-[var(--color-accent)]/10 rounded-xl border border-[var(--color-accent)]/20">
                                        <h4 className="text-sm font-semibold text-[var(--color-accent)] mb-2">Resume</h4>
                                        <a
                                            href={selectedApplication.resume_link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-white hover:underline flex items-center gap-2 text-lg"
                                        >
                                            View Resume <ExternalLink size={20} />
                                        </a>
                                    </div>
                                )}

                                {selectedApplication.answers && Object.keys(selectedApplication.answers).length > 0 && (
                                    <div className="space-y-4">
                                        <h4 className="text-lg font-semibold text-white border-b border-white/10 pb-2">Role Specific Answers</h4>
                                        <div className="space-y-4">
                                            {Object.entries(selectedApplication.answers).map(([key, value]) => (
                                                <div key={key} className="space-y-1">
                                                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                                                    <p className="text-gray-300 bg-white/5 p-3 rounded-lg border border-white/5">
                                                        {Array.isArray(value) ? value.join(', ') : value}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

const DetailItem = ({ label, value, icon }) => (
    <div className="space-y-1">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider flex items-center gap-1.5">
            {icon} {label}
        </p>
        <p className="text-white font-medium">{value || 'N/A'}</p>
    </div>
);

export default ApplicationsView;
