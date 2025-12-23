import React from 'react';
import { motion } from 'framer-motion';
import { Cog, BarChart3, Headphones, Wrench, MessageSquare, Shield } from 'lucide-react';

const AIServicesSection = () => {
    const services = [
        {
            icon: Cog,
            title: "AI Automation for Operations & Workflows",
            description: "Streamline repetitive tasks and optimize business processes with intelligent automation."
        },
        {
            icon: BarChart3,
            title: "Decision Intelligence & Predictive Analytics",
            description: "Transform data into actionable insights for smarter, faster decision-making."
        },
        {
            icon: Headphones,
            title: "AI-Powered Customer Support & Sales",
            description: "Enhance customer experiences with intelligent chatbots and sales assistance tools."
        },
        {
            icon: Wrench,
            title: "Internal AI Tools for Teams",
            description: "Custom AI solutions that boost team productivity and collaboration."
        },
        {
            icon: MessageSquare,
            title: "Generative AI Integration",
            description: "Chatbots, assistants, and content engines powered by cutting-edge AI models."
        },
        {
            icon: Shield,
            title: "AI Governance & Security",
            description: "Implement AI responsibly with proper oversight, compliance, and security measures."
        }
    ];

    return (
        <section
            className="py-24 relative overflow-hidden"
            style={{
                background: 'linear-gradient(to bottom, #000000 0%, rgba(15,10,30,0.6) 50%, #000000 100%)'
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
                        What We Deliver
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        What We Help You{' '}
                        <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
                            Build
                        </span>
                    </h2>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group relative p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-purple-500/30 transition-all duration-300 hover:bg-white/8"
                        >
                            {/* Hover gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />

                            {/* Icon */}
                            <div className="relative z-10 inline-flex items-center justify-center w-12 h-12 mb-4 bg-gradient-to-br from-purple-500/20 to-violet-500/20 rounded-xl group-hover:from-purple-500/30 group-hover:to-violet-500/30 transition-colors">
                                <service.icon className="w-6 h-6 text-purple-400" />
                            </div>

                            {/* Content */}
                            <h3 className="relative z-10 text-lg font-semibold text-white mb-2 group-hover:text-purple-100 transition-colors">
                                {service.title}
                            </h3>
                            <p className="relative z-10 text-gray-400 text-sm leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Supporting Line */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-center text-gray-400 mt-12 text-lg"
                >
                    Every solution is designed for{' '}
                    <span className="text-purple-400 font-medium">adoption</span>,{' '}
                    <span className="text-purple-400 font-medium">security</span>, and{' '}
                    <span className="text-purple-400 font-medium">ROI</span>.
                </motion.p>
            </div>
        </section>
    );
};

export default AIServicesSection;
