import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, X, ArrowUpRight } from 'lucide-react';

const ContactCTA = () => {
    const [open, setOpen] = useState(false);

    return (
        <section className="py-24 bg-black">
            <div className="container mx-auto px-6">
                {/* CTA Card */}
                <div className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden">
                    <div className="relative bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900 via-black to-black p-10 md:p-16 lg:p-20 text-center">
                        {/* Decorative Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />

                        {/* Content */}
                        <div className="relative z-10">
                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full mb-8 backdrop-blur-sm">
                                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                                <span className="text-white text-sm font-semibold">Join Us Now</span>
                            </div>

                            {/* Heading */}
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                                Each Project we Undertake
                                <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                                    is a Unique Opportunity.
                                </span>
                            </h2>

                            {/* Description */}
                            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-10">
                                Ready to take the next step? Join us now and start transforming your
                                <br className="hidden md:block" />
                                vision into reality with expert support.
                            </p>

                            {/* Buttons Row */}
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

                                {/* Book an Appointment */}
                                <Link to="/book-call">
                                    <motion.button
                                        className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white text-lg font-semibold rounded-full shadow-lg shadow-purple-500/25"
                                        whileHover={{ scale: 1.06 }}
                                        whileTap={{ scale: 0.97 }}
                                        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                                    >
                                        Book an Appointment
                                    </motion.button>
                                </Link>

                                {/* Contact Us + Popup */}
                                <div className="relative">
                                    <motion.button
                                        onClick={() => setOpen(o => !o)}
                                        className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black text-lg font-semibold rounded-full shadow-lg"
                                        whileHover={{ scale: 1.06 }}
                                        whileTap={{ scale: 0.97 }}
                                        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                                    >
                                        Contact Us
                                        <motion.span
                                            animate={{ x: open ? 4 : 0 }}
                                            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                                        >
                                            →
                                        </motion.span>
                                    </motion.button>

                                    <AnimatePresence>
                                        {open && (
                                            <motion.div
                                                key="cta-contact-card"
                                                initial={{ opacity: 0, y: 16, scale: 0.95 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: 16, scale: 0.95 }}
                                                transition={{ type: 'spring', stiffness: 320, damping: 26 }}
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
                                                <h3 className="text-white text-lg font-bold mb-1">Quantum Scripts</h3>
                                                <p className="text-white/50 text-sm mb-4">AI Automation · Web Development · Consulting</p>

                                                {/* Divider */}
                                                <div className="border-t border-white/10 mb-4" />

                                                {/* Email */}
                                                <a
                                                    href="mailto:sales@quantumscripts.in"
                                                    className="flex items-center gap-3 group mb-4"
                                                >
                                                    <span className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-full bg-white/10 border border-white/15 group-hover:bg-white/20 transition-colors">
                                                        <Mail size={15} className="text-white/70" />
                                                    </span>
                                                    <div className="min-w-0">
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
                                                    <div className="min-w-0">
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
                                                    <ArrowUpRight size={15} className="flex-shrink-0 ml-2" />
                                                </Link>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactCTA;
