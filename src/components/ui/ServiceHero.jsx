import React from 'react';
import { motion } from 'framer-motion';

const ServiceHero = () => {
    return (
        <section className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden pb-0" style={{
            background: 'linear-gradient(to bottom, #000000 0%, #1a0a2e 40%, #0f0520 70%, #000000 100%)'
        }}>
            <div className="container mx-auto px-6 relative z-10 text-center pt-48 pb-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl mx-auto space-y-8"
                >
                    {/* Badge */}
                    <motion.div
                        className="inline-flex items-center gap-3 px-5 py-2 rounded-full backdrop-blur-sm border border-white/10"
                        style={{
                            background: 'linear-gradient(90deg, rgba(124, 58, 237, 0.3) 0%, rgba(124, 58, 237, 0.1) 100%)'
                        }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <span className="px-3 py-1 bg-purple-600 text-white text-sm font-semibold rounded-full">
                            2025
                        </span>
                        <span className="text-gray-300 text-sm font-medium">
                            Browse Our Work
                        </span>
                    </motion.div>

                    {/* Heading */}
                    <motion.h1
                        className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight relative"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        style={{
                            color: 'rgba(255, 255, 255, 0.9)',
                            textShadow: '0 8px 32px rgba(124, 58, 237, 0.3), 0 2px 8px rgba(255, 255, 255, 0.2)',
                            WebkitTextStroke: '1px rgba(255, 255, 255, 0.1)',
                        }}
                    >
                        <span className="relative inline-block">
                            Explore Our Most
                            <span
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-sm"
                                style={{
                                    WebkitMaskImage: 'linear-gradient(transparent, white, transparent)',
                                    maskImage: 'linear-gradient(transparent, white, transparent)',
                                    animation: 'glass-shine 4s ease-in-out infinite'
                                }}
                            />
                        </span>
                        <br />
                        <span className="relative inline-block">
                            Remarkable Projects.
                            <span
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-sm"
                                style={{
                                    WebkitMaskImage: 'linear-gradient(transparent, white, transparent)',
                                    maskImage: 'linear-gradient(transparent, white, transparent)',
                                    animation: 'glass-shine 4s ease-in-out infinite',
                                    animationDelay: '0.5s'
                                }}
                            />
                        </span>
                    </motion.h1>
                    <style>{`
                        @keyframes glass-shine {
                            0%, 100% {
                                opacity: 0;
                                transform: translateX(-100%);
                            }
                            50% {
                                opacity: 1;
                                transform: translateX(100%);
                            }
                        }
                    `}</style>

                    {/* Description */}
                    <motion.p
                        className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        We craft customized solutions that empower both startups and<br className="hidden md:block" />
                        established brands, driving success and delivering real impact.
                    </motion.p>

                    {/* CTA Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        <a
                            href="#contact"
                            className="inline-block px-8 py-4 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50"
                            style={{
                                background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 50%, #c084fc 100%)',
                                backgroundSize: '200% 200%',
                                animation: 'gradient-shift 3s ease infinite'
                            }}
                        >
                            Build Your Product
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default ServiceHero;
