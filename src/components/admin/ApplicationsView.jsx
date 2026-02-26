import React, { useEffect, useState } from 'react';
import { collection, getDocs, updateDoc, doc, orderBy, query } from 'firebase/firestore';
import { db } from '../../lib/firebase';

const statusColors = {
    pending: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20',
    reviewed: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
    rejected: 'text-red-400 bg-red-400/10 border-red-400/20',
    accepted: 'text-green-400 bg-green-400/10 border-green-400/20',
};

const ApplicationsView = () => {
    const [applications, setApplications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [expanded, setExpanded] = useState(null);

    const fetchApplications = async () => {
        setLoading(true);
        try {
            const q = query(collection(db, 'applications'), orderBy('createdAt', 'desc'));
            const snap = await getDocs(q);
            setApplications(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
        } catch {
            const snap = await getDocs(collection(db, 'applications'));
            setApplications(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => { fetchApplications(); }, []);

    const updateStatus = async (id, status) => {
        await updateDoc(doc(db, 'applications', id), { status });
        setApplications((prev) => prev.map((a) => a.id === id ? { ...a, status } : a));
    };

    if (loading) return <div className="text-gray-400 py-12 text-center">Loading applications...</div>;
    if (!applications.length) return <div className="text-gray-400 py-12 text-center">No applications yet.</div>;

    return (
        <div className="space-y-4">
            <h2 className="text-lg font-semibold text-white mb-4">Applications ({applications.length})</h2>
            <div className="space-y-3">
                {applications.map((a) => (
                    <div key={a.id} className="border border-white/10 rounded-xl overflow-hidden">
                        <div
                            className="flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-white/5 transition-colors"
                            onClick={() => setExpanded(expanded === a.id ? null : a.id)}
                        >
                            <div className="flex items-center gap-4">
                                <div>
                                    <p className="text-white font-medium">{a.full_name || a.fullName || '—'}</p>
                                    <p className="text-xs text-gray-400">{a.email} · {a.role_title || a.roleTitle || 'Unknown Role'}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className={`text-xs font-medium px-2 py-1 rounded-md border ${statusColors[a.status] || statusColors.pending}`}>
                                    {a.status || 'pending'}
                                </span>
                                <svg className={`w-4 h-4 text-gray-400 transition-transform ${expanded === a.id ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>

                        {expanded === a.id && (
                            <div className="border-t border-white/10 px-4 py-4 bg-white/2 space-y-4">
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                                    {[
                                        ['Email', a.email],
                                        ['Mobile', a.mobile],
                                        ['City', a.city],
                                        ['College', a.college],
                                        ['Degree', a.degree],
                                        ['Year', a.year],
                                        ['Mode', a.mode],
                                        ['Duration', a.duration],
                                        ['Start Date', a.start_date || a.startDate],
                                        ['Daily Availability', a.daily_availability || a.dailyAvailability],
                                    ].map(([label, value]) => value && (
                                        <div key={label}>
                                            <p className="text-gray-500 text-xs">{label}</p>
                                            <p className="text-white">{value}</p>
                                        </div>
                                    ))}
                                </div>
                                {a.resume_link && (
                                    <a href={a.resume_link} target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] text-sm underline">
                                        View Resume →
                                    </a>
                                )}
                                <div className="flex gap-2 pt-2">
                                    <button onClick={() => updateStatus(a.id, 'accepted')} className="text-xs text-green-400 px-3 py-1.5 rounded border border-green-500/20 hover:bg-green-500/10 transition-all">Accept</button>
                                    <button onClick={() => updateStatus(a.id, 'reviewed')} className="text-xs text-blue-400 px-3 py-1.5 rounded border border-blue-500/20 hover:bg-blue-500/10 transition-all">Mark Reviewed</button>
                                    <button onClick={() => updateStatus(a.id, 'rejected')} className="text-xs text-red-400 px-3 py-1.5 rounded border border-red-500/20 hover:bg-red-500/10 transition-all">Reject</button>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ApplicationsView;
