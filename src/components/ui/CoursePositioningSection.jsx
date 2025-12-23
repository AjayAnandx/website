import React from 'react';
import { motion } from 'framer-motion';
import { Fingerprint, Palette, Rocket, Code2 } from 'lucide-react';

const CoursePositioningSection = () => {
    const differentiators = [
        "We don't sell templates.",
        "We don't resell SaaS.",
        "We engineer platforms."
    ];

    const benefits = [
        {
            icon: Fingerprint,
            title: "Ownership over experience",
            description: "Complete control over every aspect of your learning platform."
        },
        {
            icon: Palette,
            title: "Freedom in design & structure",
            description: "No constraints on how you present your content and brand."
        },
        {
            icon: Rocket,
            title: "A platform that evolves",
            description: "Built to grow and adapt with your business needs."
        }
    ];

    return (
        <section
            className="min-h-screen flex items-center py-12 relative overflow-hidden"
            style={{
                background: 'linear-gradient(to bottom, #000000 0%, #0f0520 50%, #000000 100%)'
            }}
        >
            {/* Decorative gradient orb */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-purple-700/10 blur-3xl pointer-events-none" />

            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-8"
                >
                    <span className="inline-block px-3 py-1 mb-4 text-xs font-medium text-purple-400 bg-purple-500/10 rounded-full border border-purple-500/20">
                        What We Do
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                        We Build the Platform Behind{' '}
                        <span className="bg-clip-text text-transparent" style={{
                            backgroundImage: 'linear-gradient(135deg, #c084fc 0%, #a855f7 50%, #7c3aed 100%)'
                        }}>
                            Serious Creators
                        </span>
                    </h2>
                    <p className="text-base text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        QuantumScript builds custom LMS platforms that act as the foundation for long-term education brands.
                    </p>
                </motion.div>

                {/* Differentiators */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-3 mb-8"
                >
                    {differentiators.map((item, index) => (
                        <motion.div
                            key={index}
                            className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10"
                            whileHover={{ scale: 1.05, borderColor: 'rgba(168, 85, 247, 0.3)' }}
                        >
                            <Code2 className="w-3 h-3 text-purple-400" />
                            <span className="text-sm text-white font-medium">{item}</span>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative p-5 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-xl border border-white/10 hover:border-purple-500/30 transition-all duration-300"
                        >
                            {/* Icon */}
                            <div className="inline-flex items-center justify-center w-10 h-10 mb-3 bg-purple-500/10 rounded-lg group-hover:bg-purple-500/20 transition-colors">
                                <benefit.icon className="w-5 h-5 text-purple-400" />
                            </div>

                            {/* Content */}
                            <h3 className="text-base font-semibold text-white mb-2">
                                {benefit.title}
                            </h3>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                {benefit.description}
                            </p>

                            {/* Hover gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none" />
                        </motion.div>
                    ))}
                </div>

                {/* Intent Line */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center"
                >
                    <p className="text-base text-gray-400 italic">
                        "The difference becomes clear when you see the system."
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default CoursePositioningSection;
