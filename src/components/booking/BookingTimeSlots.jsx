import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../lib/firebase';

const TIME_SLOTS = [
    "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
    "14:00", "14:30", "15:00", "15:30", "16:00", "16:30",
    "17:00", "17:30", "18:00", "18:30", "19:00", "19:30"
];

const BookingTimeSlots = ({ selectedDate, onTimeSelect }) => {
    const [is24Hour, setIs24Hour] = useState(false);
    const [bookedSlots, setBookedSlots] = useState([]);
    const [loading, setLoading] = useState(false);

    // Fetch booked times from Firestore for the selected date
    useEffect(() => {
        if (!selectedDate) return;
        const fetchBooked = async () => {
            setLoading(true);
            try {
                const dateStr = selectedDate.toISOString().split('T')[0];
                const q = query(
                    collection(db, 'bookings'),
                    where('date', '==', dateStr),
                    where('status', '!=', 'cancelled')
                );
                const snap = await getDocs(q);
                setBookedSlots(snap.docs.map(d => d.data().time).filter(Boolean));
            } catch (err) {
                console.error('Error fetching booked slots:', err);
            } finally {
                setLoading(false);
            }
        };
        fetchBooked();
    }, [selectedDate]);

    const formatTime = (time) => {
        if (is24Hour) return time;
        const [hours, minutes] = time.split(':');
        const h = parseInt(hours, 10);
        const ampm = h >= 12 ? 'pm' : 'am';
        const h12 = h % 12 || 12;
        return `${h12}:${minutes}${ampm}`;
    };

    const formattedDate = selectedDate ? selectedDate.toLocaleDateString('en-US', {
        weekday: 'short',
        day: 'numeric'
    }) : '';

    return (
        <div className="w-full pl-0 lg:pl-8 mt-8 lg:mt-0">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-sm font-bold text-gray-800 dark:text-white flex items-center gap-1 uppercase">
                    {formattedDate}
                </h3>

                {/* 12h/24h Toggle */}
                <div className="bg-white/5 p-0.5 rounded flex text-[10px] font-semibold border border-white/10">
                    <button
                        onClick={() => setIs24Hour(false)}
                        className={`px-3 py-1.5 rounded transition-all ${!is24Hour ? 'bg-[var(--color-accent)] text-white shadow-sm' : 'text-gray-400 hover:text-white'}`}
                    >
                        12h
                    </button>
                    <button
                        onClick={() => setIs24Hour(true)}
                        className={`px-3 py-1.5 rounded transition-all ${is24Hour ? 'bg-[var(--color-accent)] text-white shadow-sm' : 'text-gray-400 hover:text-white'}`}
                    >
                        24h
                    </button>
                </div>
            </div>

            {loading ? (
                <div className="flex justify-center py-8">
                    <div className="w-5 h-5 border-2 border-[var(--color-accent)] border-t-transparent rounded-full animate-spin" />
                </div>
            ) : (
                <div className="space-y-2 max-h-[360px] overflow-y-auto pr-2 custom-scrollbar">
                    {TIME_SLOTS.map((time, index) => {
                        const isBooked = bookedSlots.includes(time);
                        return (
                            <motion.button
                                key={time}
                                onClick={() => !isBooked && onTimeSelect && onTimeSelect(time)}
                                disabled={isBooked}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: isBooked ? 0.5 : 1, x: 0 }}
                                transition={{ delay: index * 0.03 }}
                                whileHover={!isBooked ? { scale: 1.02, borderColor: 'var(--color-accent)', backgroundColor: 'rgba(255, 255, 255, 0.05)' } : {}}
                                whileTap={!isBooked ? { scale: 0.98 } : {}}
                                className={`w-full text-center px-4 py-2 rounded-md border text-[11px] font-medium transition-all
                                    ${isBooked
                                        ? 'border-white/5 bg-white/5 text-gray-500 cursor-not-allowed line-through'
                                        : 'border-white/10 bg-transparent text-gray-300 hover:text-[var(--color-accent)] hover:shadow-lg hover:shadow-[var(--color-accent)]/10'
                                    }`}
                            >
                                {formatTime(time)} {isBooked && '(Booked)'}
                            </motion.button>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default BookingTimeSlots;



