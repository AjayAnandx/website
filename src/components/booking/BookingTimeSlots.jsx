import React, { useState } from 'react';
import { motion } from 'framer-motion';

const BookingTimeSlots = ({ selectedDate, onTimeSelect }) => {
    const [is24Hour, setIs24Hour] = useState(false);

    // Example available times
    const timeSlots = [
        "17:30", "18:00", "18:30", "19:00", "19:30", "20:00"
    ];

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
                <h3 className="text-sm font-bold text-gray-800 dark:text-gray-900 flex items-center gap-1 uppercase">
                    {formattedDate}
                </h3>

                {/* 12h/24h Toggle */}
                <div className="bg-gray-100 p-0.5 rounded flex text-[10px] font-semibold">
                    <button
                        onClick={() => setIs24Hour(false)}
                        className={`px-3 py-1.5 rounded transition-all ${!is24Hour
                            ? 'bg-white text-black shadow-sm'
                            : 'text-gray-400 hover:text-gray-600'
                            }`}
                    >
                        12h
                    </button>
                    <button
                        onClick={() => setIs24Hour(true)}
                        className={`px-3 py-1.5 rounded transition-all ${is24Hour
                            ? 'bg-white text-black shadow-sm'
                            : 'text-gray-400 hover:text-gray-600'
                            }`}
                    >
                        24h
                    </button>
                </div>
            </div>

            <div className="space-y-2 max-h-[360px] overflow-y-auto pr-2 custom-scrollbar">
                {timeSlots.map((time, index) => (
                    <motion.button
                        key={time}
                        onClick={() => onTimeSelect && onTimeSelect(time)}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ scale: 1.02, borderColor: 'var(--color-accent)', backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full text-center px-4 py-2 rounded-md border border-white/10 
                                 bg-transparent text-gray-300 font-medium text-[11px]
                                 hover:text-[var(--color-accent)] hover:shadow-lg hover:shadow-[var(--color-accent)]/10 transition-all group"
                    >
                        {formatTime(time)}
                    </motion.button>
                ))}
            </div>
        </div>
    );
};

export default BookingTimeSlots;


