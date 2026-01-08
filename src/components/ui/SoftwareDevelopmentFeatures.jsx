import React from 'react';
import { motion } from 'framer-motion';

// --- Graphics Components ---

const GridGraphic = () => {
    // 3 rows, 5 columns pattern
    const rects = [];
    const rows = 3;
    const cols = 5;
    const boxSize = 30;
    const gap = 15;
    const startX = (300 - (cols * boxSize + (cols - 1) * gap)) / 2 + 30;
    const startY = 50;

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            const isRed = (r === 0 && c === 1) || (r === 2 && c === 0) || (r === 1 && c === 3);
            rects.push({
                x: startX + c * (boxSize + gap),
                y: startY + r * (boxSize + gap + 10),
                w: boxSize,
                h: boxSize * 1.4,
                isRed
            });
        }
    }

    return (
        <svg viewBox="0 0 300 250" className="w-full h-full absolute inset-0 opacity-40 pointer-events-none">
            {rects.map((rect, i) => (
                <motion.rect
                    key={i}
                    x={rect.x} y={rect.y} width={rect.w} height={rect.h} rx="6"
                    fill="none"
                    stroke={rect.isRed ? '#3b82f6' : 'rgba(255,255,255,0.2)'} // Changed red to blue for software dev feel
                    strokeWidth={rect.isRed ? 2 : 1.5}
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: rect.isRed ? [0.5, 0.8, 0.5] : [0.05, 0.15, 0.05],
                        y: [0, -5, 0]
                    }}
                    transition={{
                        opacity: { duration: 2, repeat: Infinity, delay: i * 0.1 },
                        y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.05 }
                    }}
                />
            ))}
        </svg>
    );
};

const BlueSwirlGraphic = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -right-10 -top-20 w-[150%] h-[150%] bg-gradient-to-bl from-blue-600/20 via-cyan-500/10 to-transparent blur-3xl opacity-40 rounded-full" />
        <svg viewBox="0 0 400 200" className="w-full h-full absolute inset-0 opacity-60">
            {[1, 2, 3].map((i) => (
                <motion.path
                    key={i}
                    d={`M -50 ${50 + i * 20} Q 200 ${-50 + i * 40} 450 ${100 + i * 10}`}
                    fill="none"
                    stroke="#3b82f6"
                    strokeOpacity={0.5}
                    strokeWidth={8 - i}
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: i * 0.2, ease: "easeInOut" }}
                />
            ))}
        </svg>
    </div>
);

const GoldSwirlGraphic = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-10 bottom-0 w-[150%] h-[150%] bg-gradient-to-tr from-yellow-500/20 via-yellow-600/10 to-transparent blur-3xl opacity-40 rounded-full" />
        <svg viewBox="0 0 400 250" className="w-full h-full absolute inset-0 opacity-60">
            {[1, 2, 3, 4].map((i) => (
                <motion.path
                    key={i}
                    d={`M -50 ${250 - i * 20} C 100 ${200 - i * 30}, 300 ${100 + i * 10}, 450 ${150 + i * 20}`}
                    fill="none"
                    stroke="#eab308"
                    strokeOpacity={0.5}
                    strokeWidth={2 + i}
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: i * 0.1, ease: "easeOut" }}
                />
            ))}
        </svg>
    </div>
);

const DataGraphGraphic = () => (
    <svg viewBox="0 0 300 150" className="w-full h-full absolute inset-0 opacity-50 bottom-0 pointer-events-none">
        <line x1="20" y1="130" x2="280" y2="130" stroke="rgba(255,255,255,0.1)" strokeDasharray="4 4" />
        <motion.path
            d="M 30 110 C 60 120, 90 90, 120 100 S 180 80, 210 90 S 260 60, 270 50"
            fill="none"
            stroke="#10b981"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        <motion.path
            d="M 30 110 C 60 120, 90 90, 120 100 S 180 80, 210 90 S 260 60, 270 50 L 270 150 L 30 150 Z"
            fill="url(#greenFill)"
            fillOpacity="0.2"
            stroke="none"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
        />
        <defs>
            <linearGradient id="greenFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10b981" />
                <stop offset="100%" stopColor="transparent" />
            </linearGradient>
        </defs>
    </svg>
);

const IconGraphicFeatures = () => (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-60">
        <svg width="60" height="60" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-white/80">
            <motion.rect x="3" y="3" width="18" height="18" rx="2" ry="2" initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ duration: 1 }} />
            <motion.path d="M9 10l-2 2 2 2" initial={{ opacity: 0, x: 5 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }} />
            <motion.path d="M15 10l2 2-2 2" initial={{ opacity: 0, x: -5 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }} />
            <motion.path d="M11 16l2-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.8 }} />
        </svg>
    </div>
);


const FeatureCard = ({ children, className, delay = 0 }) => {
    return (
        <motion.div
            className={`relative overflow-hidden bg-[#0a0a0a] border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-colors group ${className}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
};

const SoftwareDevelopmentFeatures = () => {
    return (
        <section className="min-h-screen w-full py-24 px-6 md:px-12 lg:px-24 text-white relative z-10">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    className="text-4xl md:text-6xl font-sans font-medium mb-20 max-w-3xl leading-tight tracking-tight text-white/90"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Custom software solutions solving complex limitations.
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[280px]">

                    {/* Card 1: Large Left - Grid (Area 1) */}
                    <FeatureCard className="md:col-span-2 lg:col-span-2 lg:row-span-2 flex flex-col justify-between relative bg-gradient-to-b from-[#0f0f12] to-[#0a0a0a]">
                        <div className="absolute inset-0 z-0">
                            <GridGraphic />
                        </div>

                        <div className="relative z-10 w-full">
                            <h3 className="text-blue-500 font-mono text-[10px] mb-3 tracking-widest uppercase">PERFORMANCE FOCUS</h3>
                            <h4 className="text-3xl font-medium mb-4 leading-snug">Robust Architecture,<br />Seamless Experience</h4>
                            <p className="text-white/50 text-sm max-w-sm leading-relaxed">
                                Build applications that handle high traffic effortlessly. We focus on scalable infrastructure, optimized code, and frictionless user experiences.
                            </p>
                        </div>

                        <div className="relative z-10 mt-12 bg-black/40 backdrop-blur-md self-start rounded-lg p-4 pr-8 border border-white/5 shadow-lg">
                            <span className="text-[10px] text-white/40 block mb-1 uppercase tracking-wider">TIME TO MARKET</span>
                            <div className="text-4xl font-light text-green-400 flex items-center gap-2">
                                -40% <ArrowDownSmall />
                            </div>
                        </div>
                    </FeatureCard>

                    {/* Card 2: Top Right - Blue Swirl */}
                    <FeatureCard className="md:col-span-2 lg:col-span-2 relative flex flex-col justify-end min-h-[280px]">
                        <BlueSwirlGraphic />
                        <div className="relative z-10 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-2 -m-2 rounded-b-xl">
                            <h3 className="text-white/40 font-mono text-[10px] mb-2 uppercase tracking-widest">SCALABILITY FIRST</h3>
                            <h4 className="text-2xl font-medium text-white/90">Future-proof applications built for growth</h4>
                            <p className="text-white/50 text-xs mt-2 max-w-sm">
                                Quantum Scripts designs software architectures that evolve with your business needs and user base.
                            </p>
                        </div>
                    </FeatureCard>

                    {/* Card 3: Mid Right - Icon */}
                    <FeatureCard className="md:col-span-1 lg:col-span-2 relative flex items-center justify-between min-h-[200px]">
                        <div className="relative z-10">
                            <h3 className="text-white/40 font-mono text-[10px] mb-2 uppercase tracking-widest">CORE STRENGTH</h3>
                            <h4 className="text-xl font-medium text-white/90">Clean Code &<br />Best Practices</h4>
                        </div>
                        <div className="relative w-16 h-16 opacity-80">
                            <IconGraphicFeatures />
                        </div>
                    </FeatureCard>

                    {/* Card 4: Bottom Left - Graph */}
                    <FeatureCard className="md:col-span-1 lg:col-span-2 relative">
                        <DataGraphGraphic />
                        <div className="relative z-10">
                            <h3 className="text-green-500 font-mono text-[10px] mb-2 uppercase tracking-widest">DATA-DRIVEN INSIGHTS</h3>
                            <h4 className="text-xl font-medium mb-2 text-white/90">Real-time monitoring &<br />user analytics</h4>
                            <p className="text-white/50 text-xs max-w-xs mt-3 leading-relaxed">
                                Track application performance, monitor usage patterns, and optimize based on real user data.
                            </p>
                        </div>
                    </FeatureCard>

                    {/* Card 5: Bottom Right - Gold Swirl - Large */}
                    <FeatureCard className="md:col-span-2 lg:col-span-2 relative overflow-hidden flex flex-col justify-center">
                        <div className="absolute right-[-20%] top-0 w-full h-full mix-blend-screen bg-no-repeat bg-center">
                            <GoldSwirlGraphic />
                        </div>
                        <div className="relative z-10 max-w-md bg-gradient-to-r from-black/60 to-transparent p-2 -m-2 rounded-l-xl">
                            <h3 className="text-yellow-500 font-mono text-[10px] mb-2 uppercase tracking-widest">DIGITAL IMPACT</h3>
                            <h4 className="text-2xl font-medium mb-3 text-white/90">High Performance,<br />Low Latency</h4>
                            <p className="text-white/50 text-sm mb-6 leading-relaxed">
                                Our optimized rapid development frameworks ensure your software launches faster and performs better than the competition.
                            </p>
                            <div className="inline-flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/5 backdrop-blur-sm">
                                <span className="text-[10px] text-white/40 uppercase tracking-widest">PERFORMANCE</span>
                                <div className="text-xl font-bold text-green-400 flex items-center gap-1">+50% <ArrowUpSmall /></div>
                            </div>
                        </div>
                    </FeatureCard>

                </div>
            </div>
        </section>
    );
};

const ArrowDownSmall = () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="translate-y-[2px]">
        <path d="M12 5v14M5 12l7 7 7-7" />
    </svg>
)

const ArrowUpSmall = () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="-translate-y-[1px]">
        <path d="M12 19V5M5 12l7-7 7 7" />
    </svg>
)

export default SoftwareDevelopmentFeatures;
