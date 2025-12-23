import React from 'react';
import { motion } from 'framer-motion';
import { Search, Lightbulb, Settings, Rocket, ChevronRight } from 'lucide-react';

const AISolutionSection = () => {
    const steps = [
        {
            number: "01",
            icon: Search,
            title: "Business & Data Audit",
            description: "We analyze workflows, data readiness, and growth bottlenecks to understand your current state."
        },
        {
            number: "02",
            icon: Lightbulb,
            title: "AI Opportunity Mapping",
            description: "Identify high-impact AI use cases across operations, sales, marketing, and customer support."
        },
        {
            number: "03",
            icon: Settings,
            title: "Strategy & Architecture Design",
            description: "Define tools, models, integrations, and governance tailored to your unique business needs."
        },
        {
            number: "04",
            icon: Rocket,
            title: "Execution & Optimization",
            description: "From pilot to scale — continuous optimization with measurable KPIs and real results."
        }
    ];

    return (
        <section
            id="approach"
            className="py-24 relative overflow-hidden"
            style={{
                background: 'linear-gradient(to bottom, #000000 0%, rgba(25,15,45,0.5) 50%, #000000 100%)'
            }}
        >
            {/* Background decoration */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[150px] -translate-y-1/2" />
            <div className="absolute top-1/2 right-0 w-96 h-96 bg-violet-600/10 rounded-full blur-[150px] -translate-y-1/2" />

            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-purple-400 bg-purple-500/10 rounded-full border border-purple-500/20">
                        Our Approach
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        Our AI Strategy{' '}
                        <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
                            Framework
                        </span>
                    </h2>
                </motion.div>

                {/* Steps */}
                <div className="relative">
                    {/* Connecting Line */}
                    <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                className="relative group"
                            >
                                {/* Step Number Circle */}
                                <div className="relative z-10 mb-6">
                                    <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-purple-600 to-violet-600 rounded-full text-white font-bold text-lg shadow-lg shadow-purple-500/30 group-hover:shadow-purple-500/50 transition-shadow">
                                        {step.number}
                                    </div>
                                </div>

                                {/* Card */}
                                <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-purple-500/30 transition-all duration-300 h-full">
                                    {/* Icon */}
                                    <div className="inline-flex items-center justify-center w-10 h-10 mb-4 bg-purple-500/10 rounded-lg">
                                        <step.icon className="w-5 h-5 text-purple-400" />
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-xl font-semibold text-white mb-3">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>

                                {/* Arrow to next step (hidden on last item) */}
                                {index < steps.length - 1 && (
                                    <div className="hidden lg:flex absolute top-6 -right-4 w-8 h-8 items-center justify-center text-purple-500/50">
                                        <ChevronRight className="w-6 h-6" />
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-center mt-16"
                >
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600/80 via-purple-500/80 to-violet-500/80 hover:from-purple-500 hover:via-purple-400 hover:to-violet-400 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl shadow-purple-500/30 backdrop-blur-sm border border-purple-400/30"
                    >
                        Get Your Custom AI Roadmap
                        <ChevronRight className="w-5 h-5" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default AISolutionSection;
