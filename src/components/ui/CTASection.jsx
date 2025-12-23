import React from 'react';
import { motion } from 'framer-motion';
import LightRays from './LightRays';

const CTASection = () => {
    return (
        <section className="py-20 bg-transparent relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative rounded-3xl overflow-hidden backdrop-blur-2xl border border-white/30 shadow-2xl"
                    style={{
                        background: 'transparent',
                        boxShadow: '0 8px 32px 0 rgba(124, 58, 237, 0.37)'
                    }}
                >
                    {/* LightRays Background - Inside Card */}
                    <div className="absolute inset-0 w-full h-full pointer-events-none opacity-85">
                        <LightRays
                            raysOrigin="center"
                            raysColor="#7c3aed"
                            raysSpeed={0.4}
                            lightSpread={2.0}
                            rayLength={3.5}
                            pulsating={true}
                            fadeDistance={2.5}
                            saturation={0.9}
                            followMouse={true}
                            mouseInfluence={0.3}
                            noiseAmount={0}
                            distortion={0}
                        />
                    </div>

                    {/* Small Purple Gradient at Bottom */}
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-purple-600/30 to-transparent"></div>

                    {/* Decorative Elements */}
                    <div className="absolute top-10 left-10 w-3 h-3 bg-white rounded-full opacity-60"></div>
                    <div className="absolute top-32 left-8 w-2 h-2 bg-white rounded-full opacity-40"></div>
                    <div className="absolute bottom-20 left-12 w-2 h-2 bg-white rounded-full opacity-50"></div>

                    {/* Content */}
                    <div className="relative z-10 py-16 px-8 md:py-20 md:px-16 text-center">
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
                        >
                            <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                                <svg
                                    className="w-3 h-3 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </div>
                            <span className="text-white text-sm font-medium">
                                Become a Part of Us
                            </span>
                        </motion.div>

                        {/* Heading */}
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight"
                        >
                            Ready to Elevate Your Brand<br />
                            <span className="text-gray-300">
                                with Next-Gen Innovation?
                            </span>
                        </motion.h2>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-lg text-gray-200 mb-8 max-w-3xl mx-auto"
                        >
                            Ready to take the next step? Join us now and start transforming your<br className="hidden md:block" />
                            vision into reality with expert support.
                        </motion.p>

                        {/* CTA Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                        >
                            <a
                                href="#contact"
                                className="inline-block px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg"
                            >
                                Book an Appointment
                            </a>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CTASection;
