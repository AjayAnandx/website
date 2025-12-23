import React from 'react';
import { motion } from 'framer-motion';
import { Presentation, CalendarCheck } from 'lucide-react';
import LightRays from './LightRays';

const CourseCTASection = () => {
    return (
        <section id="cta" className="min-h-screen flex items-center py-12 bg-transparent relative overflow-hidden">
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
                    {/* LightRays Background */}
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

                    {/* Gradient Overlay at Bottom */}
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-purple-600/30 to-transparent" />

                    {/* Decorative Elements */}
                    <div className="absolute top-10 left-10 w-3 h-3 bg-white rounded-full opacity-60" />
                    <div className="absolute top-32 left-8 w-2 h-2 bg-white rounded-full opacity-40" />
                    <div className="absolute bottom-20 left-12 w-2 h-2 bg-white rounded-full opacity-50" />
                    <div className="absolute top-20 right-10 w-2 h-2 bg-white rounded-full opacity-50" />
                    <div className="absolute bottom-32 right-16 w-3 h-3 bg-white rounded-full opacity-40" />

                    {/* Content */}
                    <div className="relative z-10 py-12 px-6 md:py-16 md:px-12 text-center">
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
                        >
                            <div className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center">
                                <Presentation className="w-2.5 h-2.5 text-white" />
                            </div>
                            <span className="text-white text-xs font-medium">
                                See the Full Vision
                            </span>
                        </motion.div>

                        {/* Heading */}
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 leading-tight"
                        >
                            See How the Platform Works
                        </motion.h2>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-base text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed"
                        >
                            The full platform vision, architecture, pricing, and delivery model are covered in our Custom LMS Pitch.
                            <br className="hidden md:block" />
                            <span className="text-white font-medium">If you're considering a serious learning business, this will give you clarity.</span>
                        </motion.p>

                        {/* Dual CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="flex flex-col sm:flex-row items-center justify-center gap-4"
                        >
                            <motion.a
                                href="#"
                                className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-full transition-all duration-300"
                                style={{
                                    background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 50%, #c084fc 100%)',
                                    boxShadow: '0 8px 32px rgba(124, 58, 237, 0.4)'
                                }}
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: '0 12px 40px rgba(124, 58, 237, 0.5)'
                                }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <span>👉</span>
                                <span>View the Full Pitch Deck</span>
                            </motion.a>

                            <motion.a
                                href="/contact"
                                className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-full bg-white/10 border border-white/20 transition-all duration-300 hover:bg-white/20"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <CalendarCheck className="w-4 h-4" />
                                <span>Book a Strategy Call</span>
                            </motion.a>
                        </motion.div>

                        {/* Closing Micro-Copy */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                            className="mt-6 text-gray-400 text-xs"
                        >
                            Built for creators who plan to scale.
                        </motion.p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CourseCTASection;
