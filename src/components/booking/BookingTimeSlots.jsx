import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '../../lib/supabase';

const BookingTimeSlots = ({ selectedDate, onTimeSelect }) => {
    const [is24Hour, setIs24Hour] = useState(false);
    const [bookedSlots, setBookedSlots] = useState([]);
    const [loading, setLoading] = useState(false);

    // Example available times
    const timeSlots = [
        "17:30", "18:00", "18:30", "19:00", "19:30", "20:00"
    ];

    React.useEffect(() => {
        const fetchAvailability = async () => {
            if (!selectedDate) return;

            setLoading(true);
            try {
                // Create start and end of day in ISO format
                // Note: supabase stores as ISO string.
                // We'll simplisticly check for 'date' column matching or range.
                // Assuming 'date' column is just the date part or ISO. 
                // Based on BookCallPage, it saves as `selectedDate.toISOString()`.
                // So we need to query based on range for the whole day to be safe, 
                // OR if we just want to match the exact "time" slot which is stored separately in 'time' column.
                // The most robust is to query:
                // SELECT time FROM bookings WHERE date::date = selectedDate::date AND status != 'cancelled'

                // For simplicity with Client Side filtering of the "time" column:
                // We'll match the date string. 
                // Since toISOString() includes time, we should probably filter by a range.

                const startOfDay = new Date(selectedDate);
                startOfDay.setHours(0, 0, 0, 0);

                const endOfDay = new Date(selectedDate);
                endOfDay.setHours(23, 59, 59, 999);

                const { data, error } = await supabase
                    .from('bookings')
                    .select('time')
                    .gte('date', startOfDay.toISOString())
                    .lte('date', endOfDay.toISOString())
                    .neq('status', 'cancelled');

                if (error) throw error;

                const occupied = data.map(b => b.time);
                setBookedSlots(occupied);
            } catch (error) {
                console.error("Error fetching availability:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchAvailability();
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
                        className={`px-3 py-1.5 rounded transition-all ${!is24Hour
                            ? 'bg-[var(--color-accent)] text-white shadow-sm'
                            : 'text-gray-400 hover:text-white'
                            }`}
                    >
                        12h
                    </button>
                    <button
                        onClick={() => setIs24Hour(true)}
                        className={`px-3 py-1.5 rounded transition-all ${is24Hour
                            ? 'bg-[var(--color-accent)] text-white shadow-sm'
                            : 'text-gray-400 hover:text-white'
                            }`}
                    >
                        24h
                    </button>
                </div>
            </div>

            <div className="space-y-2 max-h-[360px] overflow-y-auto pr-2 custom-scrollbar">
                {timeSlots.map((time, index) => {
                    const isBooked = bookedSlots.includes(time);
                    return (
                        <motion.button
                            key={time}
                            onClick={() => !isBooked && onTimeSelect && onTimeSelect(time)}
                            disabled={isBooked}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: isBooked ? 0.5 : 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={!isBooked ? { scale: 1.02, borderColor: 'var(--color-accent)', backgroundColor: 'rgba(255, 255, 255, 0.05)' } : {}}
                            whileTap={!isBooked ? { scale: 0.98 } : {}}
                            className={`w-full text-center px-4 py-2 rounded-md border text-[11px] font-medium transition-all group
                                ${isBooked
                                    ? 'border-white/5 bg-white/5 text-gray-500 cursor-not-allowed decoration-slice line-through'
                                    : 'border-white/10 bg-transparent text-gray-300 hover:text-[var(--color-accent)] hover:shadow-lg hover:shadow-[var(--color-accent)]/10'
                                }`}
                        >
                            {formatTime(time)} {isBooked && '(Booked)'}
                        </motion.button>
                    );
                })}
            </div>
        </div>
    );
};

export default BookingTimeSlots;


