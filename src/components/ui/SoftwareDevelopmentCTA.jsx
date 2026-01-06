import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const WaveformGraphic = () => (
    <div className="absolute inset-0 w-full h-full flex items-center justify-center opacity-40 pointer-events-none">
        <svg viewBox="0 0 1000 200" className="w-full h-full min-w-[1000px]">
            {/* Yellow Waveform Line */}
            <motion.path
                d="M0,100 
                   L50,100 L60,90 L70,110 L80,100 
                   L150,100 L160,60 L170,140 L180,90 L190,100 
                   L350,100 L360,40 L370,160 L380,80 L390,100 
                   L550,100 L560,20 L570,180 L580,70 L590,100 
                   L750,100 L760,50 L770,150 L780,90 L790,100
                   L850,100 L860,85 L870,115 L880,100
                   L950,100 L1000,100"
                fill="none"
                stroke="#eab308" // yellow-500
                strokeWidth="1.5"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
            />
            {/* Echo/Ghost Line for depth */}
            <motion.path
                d="M0,105 
                   L50,105 L60,95 L70,115 L80,105 
                   L150,105 L160,65 L170,145 L180,95 L190,105 
                   L350,105 L360,45 L370,165 L380,85 L390,105 
                   L550,105 L560,25 L570,185 L580,75 L590,105 
                   L750,105 L760,55 L770,155 L780,95 L790,105
                   L850,105 L860,90 L870,120 L880,105
                   L950,105 L1000,105"
                fill="none"
                stroke="#eab308"
                strokeWidth="1"
                strokeOpacity="0.3"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2.5, delay: 0.2, ease: "easeInOut" }}
            />
            {/* Glow Filter */}
            <defs>
                <filter id="glow-gold">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>
        </svg>
    </div>
);

const SoftwareDevelopmentCTA = () => {
    return (
        <section className="w-full px-6 md:px-12 lg:px-24 pb-32 text-white relative z-10">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    className="relative w-full min-h-[300px] bg-[#0c0c0c] border border-yellow-500/30 rounded-2xl overflow-hidden flex flex-col md:flex-row items-center justify-between p-8 md:p-16 lg:p-20"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Background Waveform */}
                    <WaveformGraphic />

                    {/* Left Content: Text */}
                    <div className="relative z-10 max-w-2xl text-center md:text-left mb-8 md:mb-0">
                        <motion.h2
                            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            Turn complexity into<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-600">
                                intelligent automation.
                            </span>
                        </motion.h2>
                        <motion.p
                            className="text-white/60 text-lg md:text-xl"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            Let AI handle the heavy lifting—so your business can move faster.
                        </motion.p>
                    </div>

                    {/* Right Content: Buttons */}
                    <div className="relative z-10 flex flex-col sm:flex-row gap-4">
                        <motion.button
                            className="group relative px-8 py-3 bg-white text-black font-semibold rounded-lg overflow-hidden hover:bg-yellow-400 transition-colors duration-300"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Start Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </motion.button>

                        <motion.button
                            className="px-8 py-3 bg-transparent border border-white/20 text-white font-medium rounded-lg hover:border-yellow-500/50 hover:text-yellow-400 transition-colors duration-300"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                        >
                            Let’s Talk
                        </motion.button>
                    </div>

                </motion.div>
            </div>
        </section>
    );
};

export default SoftwareDevelopmentCTA;
