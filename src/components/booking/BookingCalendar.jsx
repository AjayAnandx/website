import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const DAYS = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
const MONTHS = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];

const BookingCalendar = ({ selectedDate, onDateSelect }) => {
    const [currentDate, setCurrentDate] = useState(new Date(2026, 0, 1)); // Start at Jan 2026 as per design

    const getDaysInMonth = (date) => {
        return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    };

    const getFirstDayOfMonth = (date) => {
        // 0 = Sunday, 1 = Monday, etc.
        let day = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
        // Adjust so 0 = Monday, 6 = Sunday to match design array
        return day === 0 ? 6 : day - 1;
    };

    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);

    const prevMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    };

    const nextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    };

    const isSelected = (day) => {
        if (!selectedDate) return false;
        return (
            selectedDate.getDate() === day &&
            selectedDate.getMonth() === currentDate.getMonth() &&
            selectedDate.getFullYear() === currentDate.getFullYear()
        );
    };

    const handleDateClick = (day) => {
        onDateSelect(new Date(currentDate.getFullYear(), currentDate.getMonth(), day));
    };

    return (
        <div className="w-full">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl font-bold text-gray-800 dark:text-gray-900">
                    {MONTHS[currentDate.getMonth()]} <span className="text-gray-400 font-normal">{currentDate.getFullYear()}</span>
                </h2>
                <div className="flex gap-1">
                    <button onClick={prevMonth} className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors">
                        <ChevronLeft className="w-4 h-4 text-gray-300" />
                    </button>
                    <button onClick={nextMonth} className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors">
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                    </button>
                </div>
            </div>

            {/* Days Header */}
            <div className="grid grid-cols-7 mb-4">
                {DAYS.map((day) => (
                    <div key={day} className="text-center text-[11px] font-bold text-gray-500 tracking-widest">
                        {day}
                    </div>
                ))}
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-y-4 gap-x-2">
                {/* Empty cells for offset */}
                {Array.from({ length: firstDay }).map((_, i) => (
                    <div key={`empty-${i}`} className="h-10 w-full" />
                ))}

                {/* Days */}
                {Array.from({ length: daysInMonth }).map((_, i) => {
                    const day = i + 1;
                    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
                    const dayOfWeek = date.getDay(); // 0 = Sunday, 6 = Saturday
                    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;

                    const selected = isSelected(day);

                    // Logic to match the image's "Available Block" pattern:
                    // In the image, dates 13, 14, 15, 16, 19, 20... are blocks.
                    // 12 is text. 
                    // This creates a visual logic of: Future Weekdays are Blocks.
                    const isFuture = day > 12; // Hardcoding "today" as 12th for visual match to image
                    const isAvailable = isFuture && !isWeekend;

                    return (
                        <div key={day} className="flex flex-col items-center justify-center">
                            <motion.button
                                whileHover={isAvailable || selected ? { scale: 1.05 } : {}}
                                whileTap={isAvailable || selected ? { scale: 0.95 } : {}}
                                onClick={() => handleDateClick(day)}
                                disabled={!isAvailable && !selected} // Disable if not a block/selected
                                className={`
                                    relative h-12 w-12 flex items-center justify-center rounded-lg text-sm transition-all duration-200
                                    ${selected
                                        ? 'bg-[var(--color-accent)] text-white shadow-lg shadow-[var(--color-accent)]/20 font-bold z-10'
                                        : isAvailable
                                            ? 'bg-white/5 text-gray-200 font-semibold hover:bg-white/10'
                                            : 'text-gray-600 font-medium cursor-default bg-transparent'
                                    }
                                `}
                            >
                                {day}
                                {selected && (
                                    <div className="absolute bottom-1 w-0.5 h-0.5 bg-white rounded-full"></div>
                                )}
                            </motion.button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default BookingCalendar;
