import React, { useState } from 'react';
import BookingInfoSide from '../components/booking/BookingInfoSide';
import BookingCalendar from '../components/booking/BookingCalendar';
import BookingTimeSlots from '../components/booking/BookingTimeSlots';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const BookCallPage = () => {
    const [selectedDate, setSelectedDate] = useState(new Date(2026, 0, 13)); // Default selected as per design

    return (
        <div className="min-h-screen bg-background text-foreground selection:bg-[var(--color-accent)]/30">
            <div className="max-w-[1400px] mx-auto min-h-screen p-4 md:p-8 flex items-center justify-center">
                <div className="w-full bg-background rounded-3xl overflow-hidden shadow-2xl border border-white/5 md:border-none">
                    <div className="flex flex-col xl:flex-row gap-8 xl:gap-0">

                        {/* Left Side: Info */}
                        <div className="w-full xl:w-5/12 p-6 md:p-12 xl:border-r border-white/10">
                            <BookingInfoSide />
                        </div>

                        {/* Right Side: Booking Interface */}
                        <div className="w-full xl:w-7/12 p-6 md:p-8 text-white relative flex flex-col justify-center">

                            {/* Top Bar (Optional if needed or just let visual flow) */}

                            {/* Header Section from Design */}
                            <div className="mb-6">
                                <div className="flex flex-col gap-4">
                                    <div className="flex flex-col gap-2">
                                        <img
                                            src="https://ui-avatars.com/api/?name=Tarik+Polat&background=0D8ABC&color=fff"
                                            alt="Tarik Polat"
                                            className="w-10 h-10 rounded-full object-cover shadow-sm ring-2 ring-white/10"
                                        />
                                        <div className="space-y-0.5">
                                            <p className="text-gray-400 font-medium text-[10px] uppercase tracking-wider">Tarik Polat</p>
                                            <h1 className="text-xl font-bold text-white">30-Minute Strategy Call</h1>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-4 text-gray-400 text-xs font-medium">
                                        <div className="flex items-center gap-1.5">
                                            <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            30m
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <svg className="w-4 h-4 text-gray-500" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                                            </svg>
                                            Google Meet
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            Asia/Kolkata
                                        </div>
                                    </div>
                                </div>
                                <div className="h-px bg-white/10 w-1/2 mx-auto mt-6"></div>
                            </div>

                            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                                {/* Calendar Column */}
                                <div className="w-full md:w-1/2">
                                    <BookingCalendar selectedDate={selectedDate} onDateSelect={setSelectedDate} />
                                </div>

                                {/* Time Slots Column */}
                                <div className="w-full md:w-1/2 border-t md:border-t-0 md:border-l border-white/10 pl-0 md:pl-6 pt-6 md:pt-0">
                                    <BookingTimeSlots selectedDate={selectedDate} />
                                </div>
                            </div>

                            <div className="hidden md:block absolute bottom-4 right-4 text-gray-400">
                                <ChevronDown className="w-4 h-4 animate-bounce" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookCallPage;
