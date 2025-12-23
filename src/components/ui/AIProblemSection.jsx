import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, DollarSign, Database, Shield } from 'lucide-react';

const AIProblemSection = () => {
    const painPoints = [
        {
            icon: MapPin,
            title: "No Clear AI Roadmap",
            description: "Investments in AI without a strategic connection to business outcomes lead to wasted resources."
        },
        {
            icon: DollarSign,
            title: "Expensive Tools, Low Adoption",
            description: "Costly AI solutions that teams struggle to use effectively, resulting in poor ROI."
        },
        {
            icon: Database,
            title: "Disconnected Data & Systems",
            description: "Siloed data and fragmented systems prevent AI from delivering meaningful insights."
        },
        {
            icon: Shield,
            title: "Automation Without Governance",
            description: "Scaling AI without proper oversight creates compliance risks and operational chaos."
        }
    ];

    return (
        <section
            className="py-24 relative overflow-hidden"
            style={{
                background: 'linear-gradient(to bottom, #000000 0%, rgba(20,10,35,0.6) 50%, #000000 100%)'
            }}
        >
            <div className="container mx-auto px-6 max-w-6xl">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-purple-400 bg-purple-500/10 rounded-full border border-purple-500/20">
                        The Challenge
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        Why Most AI Initiatives{' '}
                        <span className="text-white/50">Fail</span>
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        Many companies invest in AI tools but fail to see real impact.
                        The problem isn't the technology — it's the lack of strategy.
                    </p>
                </motion.div>

                {/* Pain Points Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                    {painPoints.map((point, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group relative p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-red-500/30 transition-all duration-300"
                        >
                            {/* Icon */}
                            <div className="inline-flex items-center justify-center w-12 h-12 mb-4 bg-red-500/10 rounded-xl group-hover:bg-red-500/20 transition-colors">
                                <point.icon className="w-6 h-6 text-red-400" />
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-semibold text-white mb-2">
                                {point.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                                {point.description}
                            </p>

                            {/* Hover gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
                        </motion.div>
                    ))}
                </div>

                {/* Transition Line */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center"
                >
                    <div className="inline-flex items-center gap-4 px-6 py-3 bg-gradient-to-r from-purple-500/10 via-purple-500/20 to-purple-500/10 rounded-full border border-purple-500/20">
                        <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                        <span className="text-lg text-white font-medium">
                            AI works only when strategy comes first.
                        </span>
                        <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AIProblemSection;
