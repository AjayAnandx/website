import React from 'react';
import { motion } from 'framer-motion';
import { Server, GitBranch, Gauge, Shield } from 'lucide-react';

const CourseCredibilitySection = () => {
    const credibilitySignals = [
        {
            icon: Server,
            title: "Software-grade architecture",
            description: "Enterprise-level infrastructure built for reliability and scale."
        },
        {
            icon: GitBranch,
            title: "Structured delivery approach",
            description: "Clear milestones, transparent process, and predictable timelines."
        },
        {
            icon: Gauge,
            title: "Built for performance & scale",
            description: "Optimized for speed, handling thousands of concurrent users."
        }
    ];

    return (
        <section
            className="min-h-screen flex items-center py-12 relative overflow-hidden"
            style={{
                background: 'linear-gradient(to bottom, #000000 0%, rgba(20, 10, 35, 0.5) 50%, #000000 100%)'
            }}
        >
            <div className="container mx-auto px-6 max-w-4xl">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-8"
                >
                    <span className="inline-block px-3 py-1 mb-4 text-xs font-medium text-emerald-400 bg-emerald-500/10 rounded-full border border-emerald-500/20">
                        Why Trust Us
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                        Built by a{' '}
                        <span className="bg-clip-text text-transparent" style={{
                            backgroundImage: 'linear-gradient(135deg, #34d399 0%, #10b981 50%, #059669 100%)'
                        }}>
                            Software Engineering Team
                        </span>
                    </h2>
                    <p className="text-base text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        QuantumScript is an AI and product engineering company.
                        We approach learning platforms the same way we approach software products —
                        <span className="text-gray-300"> with scalability, security, and longevity in mind.</span>
                    </p>
                </motion.div>

                {/* Credibility Signals Grid */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                    {credibilitySignals.map((signal, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative p-5 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-xl border border-white/10 hover:border-emerald-500/30 transition-all duration-300"
                        >
                            {/* Icon */}
                            <div className="inline-flex items-center justify-center w-10 h-10 mb-3 bg-emerald-500/10 rounded-lg group-hover:bg-emerald-500/20 transition-colors">
                                <signal.icon className="w-5 h-5 text-emerald-400" />
                            </div>

                            {/* Content */}
                            <h3 className="text-base font-semibold text-white mb-2">
                                {signal.title}
                            </h3>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                {signal.description}
                            </p>

                            {/* Hover gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none" />
                        </motion.div>
                    ))}
                </div>

                {/* Bridge Line */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center"
                >
                    <div className="inline-flex flex-col items-center gap-1 px-6 py-4 bg-gradient-to-r from-emerald-500/10 via-emerald-500/15 to-emerald-500/10 rounded-xl border border-emerald-500/20">
                        <p className="text-base text-white font-semibold">
                            This is not an LMS project.
                        </p>
                        <p className="text-sm text-emerald-400 font-medium">
                            It's a product build.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CourseCredibilitySection;
