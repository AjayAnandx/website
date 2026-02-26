import React, { useEffect, useState } from 'react';
import { collection, getDocs, updateDoc, doc, orderBy, query } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import { CheckCircle, XCircle, Clock } from 'lucide-react';

const statusColors = {
    pending: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20',
    confirmed: 'text-green-400 bg-green-400/10 border-green-400/20',
    cancelled: 'text-red-400 bg-red-400/10 border-red-400/20',
};

const AppointmentsView = () => {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchBookings = async () => {
        setLoading(true);
        try {
            const q = query(collection(db, 'bookings'), orderBy('createdAt', 'desc'));
            const snap = await getDocs(q);
            setBookings(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
        } catch (err) {
            // fallback without ordering if index not ready
            const snap = await getDocs(collection(db, 'bookings'));
            setBookings(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => { fetchBookings(); }, []);

    const updateStatus = async (id, status) => {
        await updateDoc(doc(db, 'bookings', id), { status });
        setBookings((prev) => prev.map((b) => b.id === id ? { ...b, status } : b));
    };

    if (loading) return <div className="text-gray-400 py-12 text-center">Loading bookings...</div>;
    if (!bookings.length) return <div className="text-gray-400 py-12 text-center">No bookings yet.</div>;

    return (
        <div className="space-y-4">
            <h2 className="text-lg font-semibold text-white mb-4">Bookings ({bookings.length})</h2>
            <div className="overflow-x-auto rounded-xl border border-white/10">
                <table className="w-full text-sm">
                    <thead>
                        <tr className="border-b border-white/10 text-gray-400">
                            <th className="text-left px-4 py-3 font-medium">Name</th>
                            <th className="text-left px-4 py-3 font-medium">Email</th>
                            <th className="text-left px-4 py-3 font-medium">Date</th>
                            <th className="text-left px-4 py-3 font-medium">Time</th>
                            <th className="text-left px-4 py-3 font-medium">Subject</th>
                            <th className="text-left px-4 py-3 font-medium">Status</th>
                            <th className="text-left px-4 py-3 font-medium">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map((b) => (
                            <tr key={b.id} className="border-b border-white/5 hover:bg-white/2 transition-colors">
                                <td className="px-4 py-3 text-white font-medium">{b.name || '—'}</td>
                                <td className="px-4 py-3 text-gray-300">{b.email || '—'}</td>
                                <td className="px-4 py-3 text-gray-300">{b.date || '—'}</td>
                                <td className="px-4 py-3 text-gray-300">{b.time || '—'}</td>
                                <td className="px-4 py-3 text-gray-300 max-w-[200px] truncate">{b.subject || '—'}</td>
                                <td className="px-4 py-3">
                                    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium border ${statusColors[b.status] || statusColors.pending}`}>
                                        {b.status === 'confirmed' && <CheckCircle className="w-3 h-3" />}
                                        {b.status === 'cancelled' && <XCircle className="w-3 h-3" />}
                                        {b.status === 'pending' && <Clock className="w-3 h-3" />}
                                        {b.status || 'pending'}
                                    </span>
                                </td>
                                <td className="px-4 py-3">
                                    <div className="flex gap-2">
                                        {b.status !== 'confirmed' && (
                                            <button onClick={() => updateStatus(b.id, 'confirmed')} className="text-xs text-green-400 hover:text-green-300 px-2 py-1 rounded border border-green-500/20 hover:bg-green-500/10 transition-all">Confirm</button>
                                        )}
                                        {b.status !== 'cancelled' && (
                                            <button onClick={() => updateStatus(b.id, 'cancelled')} className="text-xs text-red-400 hover:text-red-300 px-2 py-1 rounded border border-red-500/20 hover:bg-red-500/10 transition-all">Cancel</button>
                                        )}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AppointmentsView;
