import React from 'react';
import { motion } from 'framer-motion';
import { UserX, PaintbrushVertical, TrendingUp, Building2 } from 'lucide-react';

const CourseProblemSection = () => {
    const painTriggers = [
        {
            icon: UserX,
            text: "Your platform doesn't feel truly yours"
        },
        {
            icon: PaintbrushVertical,
            text: "Branding flexibility hits a ceiling"
        },
        {
            icon: TrendingUp,
            text: "Growth requires workarounds"
        },
        {
            icon: Building2,
            text: "You're building on rented infrastructure"
        }
    ];

    return (
        <section
            className="min-h-screen flex items-center relative overflow-hidden py-12"
            style={{
                background: 'linear-gradient(to bottom, #000000 0%, rgba(20, 10, 35, 0.6) 50%, #000000 100%)'
            }}
        >
            <div className="container mx-auto px-6 max-w-4xl">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-10"
                >
                    <span className="inline-block px-3 py-1 mb-4 text-xs font-medium text-amber-400 bg-amber-500/10 rounded-full border border-amber-500/20">
                        The Reality
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                        Selling Courses Is Easy.
                        <br />
                        <span className="text-white/50">Building a Learning Brand Is Not.</span>
                    </h2>
                    <p className="text-base text-gray-400 max-w-xl mx-auto leading-relaxed">
                        Most creators start on generic platforms. Over time, those platforms begin to feel limiting —
                        <span className="text-gray-300"> visually, technically, and strategically.</span>
                    </p>
                </motion.div>

                {/* Pain Triggers Grid */}
                <div className="grid grid-cols-2 gap-4 mb-10">
                    {painTriggers.map((trigger, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-amber-500/30 transition-all duration-300"
                        >
                            {/* Icon */}
                            <div className="inline-flex items-center justify-center w-10 h-10 mb-3 bg-amber-500/10 rounded-lg group-hover:bg-amber-500/20 transition-colors">
                                <trigger.icon className="w-5 h-5 text-amber-400" />
                            </div>

                            {/* Content */}
                            <p className="text-sm text-white font-medium">
                                {trigger.text}
                            </p>

                            {/* Hover gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none" />
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
                    <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-500/10 via-purple-500/20 to-purple-500/10 rounded-full border border-purple-500/20">
                        <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                        <span className="text-base text-white font-medium">
                            At a certain stage, creators outgrow tools.
                        </span>
                        <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CourseProblemSection;
