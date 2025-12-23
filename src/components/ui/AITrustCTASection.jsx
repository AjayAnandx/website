import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Award, Target, ChevronRight } from 'lucide-react';

const AITrustCTASection = () => {
    const trustElements = [
        {
            icon: CheckCircle,
            text: "Proven frameworks used by growing businesses"
        },
        {
            icon: Award,
            text: "Experience across startups & enterprises"
        },
        {
            icon: Target,
            text: "Focus on execution, not experimentation"
        }
    ];

    return (
        <section
            id="contact"
            className="py-24 relative overflow-hidden"
            style={{
                background: 'linear-gradient(to bottom, #000000 0%, rgba(30,15,50,0.4) 50%, #000000 100%)'
            }}
        >
            {/* Background decoration */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-purple-600/20 rounded-full blur-[150px]" />

            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    {/* Section Header */}
                    <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-purple-400 bg-purple-500/10 rounded-full border border-purple-500/20">
                        Get Started
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
                        Turn AI Into a{' '}
                        <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-purple-300 bg-clip-text text-transparent">
                            Competitive Advantage
                        </span>
                    </h2>

                    {/* Trust Elements */}
                    <div className="flex flex-wrap justify-center gap-6 mb-12">
                        {trustElements.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                                className="flex items-center gap-2 text-gray-300"
                            >
                                <item.icon className="w-5 h-5 text-purple-400" />
                                <span className="text-sm md:text-base">{item.text}</span>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="relative p-8 md:p-12 bg-gradient-to-br from-purple-900/40 via-violet-900/30 to-purple-900/20 backdrop-blur-xl rounded-3xl border border-purple-500/20 shadow-2xl shadow-purple-500/10"
                    >
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent rounded-3xl" />

                        <div className="relative z-10">
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                Ready to Build an AI-First Strategy?
                            </h3>

                            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                                Schedule a free consultation to explore how AI can accelerate your business growth.
                            </p>

                            {/* CTA Button */}
                            <motion.a
                                href="mailto:contact@visionforfuture.com"
                                className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-purple-600 via-purple-500 to-violet-500 hover:from-purple-500 hover:via-purple-400 hover:to-violet-400 text-white text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl shadow-purple-500/40"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Schedule a Free Consultation
                                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </motion.a>

                            {/* Micro-copy */}
                            <p className="mt-6 text-sm text-gray-500">
                                No sales pitch. Just clarity on how AI can grow your business.
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default AITrustCTASection;
