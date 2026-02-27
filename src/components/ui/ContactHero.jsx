import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, X, ArrowUpRight } from 'lucide-react';

const ContactHero = () => {
    const [open, setOpen] = useState(false);
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900 via-black to-black pt-24">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Gradient Orbs */}
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-pulse-slow" />
                <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] animate-pulse-slow" />
            </div>

            {/* Content */}
            <div className="relative z-30 container mx-auto px-6 text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8 backdrop-blur-sm">
                    <span className="px-2 py-0.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold rounded">
                        24/7
                    </span>
                    <span className="text-white text-sm font-semibold">
                        Let's Work Together
                    </span>
                </div>

                {/* Main Heading */}
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 max-w-5xl mx-auto leading-tight">
                    Any Questions Rising?
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                        We are All Here.
                    </span>
                </h1>

                {/* Description */}
                <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                    Whether you have a question, need assistance,
                    <br />
                    or want to start a new project, our team is here to help.
                </p>

                {/* CTA Buttons Row */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-2">

                    {/* --- Contact Us Button + Popup Card --- */}
                    <div className="relative inline-block">
                        <motion.button
                            onClick={() => setOpen(o => !o)}
                            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black text-lg font-semibold rounded-full shadow-lg"
                            whileHover={{ scale: 1.06 }}
                            whileTap={{ scale: 0.97 }}
                            transition={{ type: "spring", stiffness: 400, damping: 20 }}
                        >
                            Contact Us
                            <motion.span
                                className="text-lg"
                                animate={{ x: open ? 4 : 0 }}
                                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                            >
                                →
                            </motion.span>
                        </motion.button>

                        <AnimatePresence>
                            {open && (
                                <motion.div
                                    key="contact-card"
                                    initial={{ opacity: 0, y: 16, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 16, scale: 0.95 }}
                                    transition={{ type: "spring", stiffness: 320, damping: 26 }}
                                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 z-50
                                               w-[calc(100vw-2rem)] max-w-xs sm:max-w-sm
                                               rounded-2xl border border-white/15 backdrop-blur-xl
                                               bg-white/10 shadow-2xl p-5 text-left"
                                >
                                    {/* Close */}
                                    <button
                                        onClick={() => setOpen(false)}
                                        className="absolute top-3 right-3 text-white/50 hover:text-white transition-colors"
                                    >
                                        <X size={16} />
                                    </button>

                                    {/* Header */}
                                    <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-1">Get in touch</p>
                                    <h3 className="text-white text-xl font-bold mb-1">Quantum Scripts</h3>
                                    <p className="text-white/50 text-sm mb-5">AI Automation · Web Development · Consulting</p>

                                    {/* Divider */}
                                    <div className="border-t border-white/10 mb-5" />

                                    {/* Email */}
                                    <a
                                        href="mailto:sales@quantumscripts.in"
                                        className="flex items-center gap-3 group mb-4"
                                    >
                                        <span className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 border border-white/15 group-hover:bg-white/20 transition-colors">
                                            <Mail size={15} className="text-white/70" />
                                        </span>
                                        <div>
                                            <p className="text-white/40 text-xs">Email us</p>
                                            <p className="text-white text-sm font-medium group-hover:text-blue-300 transition-colors truncate">
                                                sales@quantumscripts.in
                                            </p>
                                        </div>
                                    </a>

                                    {/* Phone */}
                                    <a
                                        href="tel:+919444242048"
                                        className="flex items-center gap-3 group mb-4"
                                    >
                                        <span className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-full bg-white/10 border border-white/15 group-hover:bg-white/20 transition-colors">
                                            <Phone size={15} className="text-white/70" />
                                        </span>
                                        <div>
                                            <p className="text-white/40 text-xs">Call Us</p>
                                            <p className="text-white text-sm font-medium group-hover:text-blue-300 transition-colors">
                                                +91 9444242048
                                            </p>
                                        </div>
                                    </a>

                                    {/* Email us link */}
                                    <Link
                                        to="/contact"
                                        onClick={() => setOpen(false)}
                                        className="flex items-center justify-between w-full px-4 py-3 rounded-xl bg-white text-black text-sm font-semibold hover:bg-gray-100 transition-colors"
                                    >
                                        Email us
                                        <ArrowUpRight size={15} />
                                    </Link>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* --- Book an Appointment Button --- */}
                    <Link to="/book-call">
                        <motion.button
                            className="inline-flex items-center gap-3 px-8 py-4 border border-white/30 text-white text-lg font-semibold rounded-full backdrop-blur-sm"
                            whileHover={{ scale: 1.06, borderColor: "rgba(255,255,255,0.6)" }}
                            whileTap={{ scale: 0.97 }}
                            transition={{ type: "spring", stiffness: 400, damping: 20 }}
                        >
                            {/* Animated SVG Calendar — text-to-svg style */}
                            <motion.svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="22" height="22"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 1 }}
                                transition={{ duration: 1.2, ease: "easeInOut" }}
                                whileHover={{ rotate: [0, -8, 8, 0], scale: 1.15 }}
                            >
                                <motion.rect
                                    x="3" y="4" width="18" height="18" rx="2"
                                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                                    transition={{ duration: 1, delay: 0 }}
                                />
                                <motion.line x1="16" y1="2" x2="16" y2="6"
                                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                                    transition={{ duration: 0.4, delay: 0.8 }}
                                />
                                <motion.line x1="8" y1="2" x2="8" y2="6"
                                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                                    transition={{ duration: 0.4, delay: 0.9 }}
                                />
                                <motion.line x1="3" y1="10" x2="21" y2="10"
                                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                                    transition={{ duration: 0.5, delay: 1 }}
                                />
                            </motion.svg>
                            Book an Appointment
                        </motion.button>
                    </Link>

                </div>

            </div>

            {/* Gradient Fade to Bottom Section */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none" />
        </section>
    );
};

export default ContactHero;
