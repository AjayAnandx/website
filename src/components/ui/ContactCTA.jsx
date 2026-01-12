import React from 'react';
import { Link } from 'react-router-dom';

const ContactCTA = () => {
    return (
        <section className="py-24 bg-black">
            <div className="container mx-auto px-6">
                {/* CTA Card */}
                <div className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden">
                    {/* Blue Gradient Background */}
                    {/* Blue Gradient Background */}
                    <div className="relative bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900 via-black to-black p-12 md:p-16 lg:p-20 text-center">
                        {/* Decorative Glow Effects */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />

                        {/* Content */}
                        <div className="relative z-10">
                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full mb-8 backdrop-blur-sm">
                                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                                <span className="text-white text-sm font-semibold">
                                    Join Us Now
                                </span>
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

                            {/* CTA Button */}
                            <Link to="/book-call">
                                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25">
                                    Book an Appointment
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactCTA;
