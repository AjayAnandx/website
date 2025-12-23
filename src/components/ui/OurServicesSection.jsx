import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Code, Brain, Rocket, BookOpen, Zap } from "lucide-react";
import ChartIllustration from "./ChartIllustration";
import CodeIllustration from "./CodeIllustration";
import IntegrationIllustration from "./IntegrationIllustration";
import CmsIllustration from "./CmsIllustration";
import WebsiteIllustration from "./WebsiteIllustration";

const services = [
    {
        icon: Brain,
        title: "AI Strategy & Consulting",
        description: "Transform your business with tailored AI strategies. We analyze your needs and design intelligent solutions that drive measurable results.",
        visual: ChartIllustration,
        link: "/ai-consulting"
    },
    {
        icon: Code,
        title: "Custom AI Development",
        description: "Build powerful AI applications from scratch. Our team develops custom machine learning models and intelligent systems specific to your requirements.",
        visual: CodeIllustration
    },
    {
        icon: Rocket,
        title: "AI Integration & Deployment",
        description: "Seamlessly integrate AI into your existing infrastructure. We ensure smooth deployment and optimal performance across your tech stack.",
        visual: IntegrationIllustration
    },
    {
        icon: BookOpen,
        title: "Custom Course Learning Platform",
        description: "Protect your AI systems with enterprise-grade security. We implement robust safeguards and ensure compliance with industry standards.",
        visual: CmsIllustration,
        link: "/course-platform"
    },
    {
        icon: Zap,
        title: "Website Development",
        description: "Create stunning, high-performance websites. We build responsive and scalable web solutions tailored to your brand's unique identity.",
        visual: WebsiteIllustration
    }
];

const OurServicesSection = () => {
    return (
        <section id="service" className="py-32 bg-black relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-5xl">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                        Our Services
                    </h2>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto">
                        Comprehensive AI solutions designed to accelerate your digital transformation
                    </p>
                </motion.div>

                {/* Services List with Normal Animations */}
                <div className="space-y-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="relative group"
                        >
                            {/* Glassmorphic Card */}
                            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 overflow-hidden">

                                {/* Gradient Background */}
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Content */}
                                <div className="relative z-10 flex flex-col md:flex-row gap-6">
                                    {/* Left Side - Icon and Text */}
                                    <div className="flex-1 flex gap-6">
                                        {/* Icon */}
                                        <div className="flex-shrink-0 p-4 bg-white/5 rounded-xl group-hover:bg-white/10 transition-colors h-fit">
                                            <service.icon className="w-8 h-8 text-white/80" />
                                        </div>

                                        {/* Text Content */}
                                        <div className="flex-1">
                                            <h3 className="text-2xl font-semibold mb-3 text-white">
                                                {service.title}
                                            </h3>
                                            <p className="text-white/60 leading-relaxed mb-6">
                                                {service.description}
                                            </p>

                                            {/* Button */}
                                            {service.link ? (
                                                <Link
                                                    to={service.link}
                                                    className="inline-block px-6 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-sm font-medium transition-all duration-300 group/btn"
                                                >
                                                    <span className="flex items-center gap-2">
                                                        Learn More
                                                        <svg
                                                            className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            stroke="currentColor"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth={2}
                                                                d="M9 5l7 7-7 7"
                                                            />
                                                        </svg>
                                                    </span>
                                                </Link>
                                            ) : (
                                                <button className="px-6 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-sm font-medium transition-all duration-300 group/btn">
                                                    <span className="flex items-center gap-2">
                                                        Learn More
                                                        <svg
                                                            className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            stroke="currentColor"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth={2}
                                                                d="M9 5l7 7-7 7"
                                                            />
                                                        </svg>
                                                    </span>
                                                </button>
                                            )}
                                        </div>
                                    </div>

                                    {/* Right Side - Image or Visual */}
                                    <div className="flex-shrink-0 w-full md:w-48 h-48 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl overflow-hidden relative">
                                        {service.visual ? (
                                            <service.visual />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-white/20">
                                                <service.icon className="w-20 h-20" />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default OurServicesSection;
