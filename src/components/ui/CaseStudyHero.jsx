import React from 'react';
import { motion } from 'framer-motion';

const CaseStudyHero = () => {
    return (
        <section
            className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pb-0"
            style={{
                background: 'linear-gradient(to bottom, #000000 0%, #1a0a2e 40%, #2d1b4e 70%, #000000 100%)'
            }}
        >
            <div className="container mx-auto px-6 relative z-10 text-center py-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-5xl mx-auto space-y-8"
                >
                    {/* Badge */}
                    <motion.div
                        className="inline-flex items-center gap-3 px-5 py-2 rounded-full backdrop-blur-sm border border-white/10"
                        style={{
                            background: 'rgba(255, 255, 255, 0.05)'
                        }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <span className="px-4 py-1 bg-purple-600 text-white text-sm font-bold rounded-md">
                            2025
                        </span>
                        <span className="text-gray-300 text-sm font-medium">
                            Explore Our Portfolio
                        </span>
                    </motion.div>

                    {/* Heading */}
                    <motion.h1
                        className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        Check Out Some<br />
                        Extra-Ordinary Work.
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        From startups to established brands, we create<br className="hidden md:block" />
                        tailored solutions that drive success and make a real impact.
                    </motion.p>

                    {/* CTA Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        <a
                            href="#contact"
                            className="inline-block px-10 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/50"
                        >
                            Build Your Product
                        </a>
                    </motion.div>
                </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] animate-pulse-slow" />
            <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-violet-600/15 rounded-full blur-[100px] animate-pulse-slow" />
        </section>
    );
};

export default CaseStudyHero;
