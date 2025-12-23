import { motion } from "framer-motion";
import { Zap, Shield, Brain, Globe, Cpu, BarChart3 } from "lucide-react";
import CardSwap, { Card } from "./CardSwap";
import Particles from "./Particles";

const features = [
    {
        title: "Real-time Processing",
        description: "Analyze data streams as they happen with sub-millisecond latency.",
        icon: Zap,
    },
    {
        title: "Enterprise Security",
        description: "Bank-grade encryption and compliance built-in from day one.",
        icon: Shield,
    },
    {
        title: "Cognitive Intelligence",
        description: "Our models understand context, nuance, and intent better than any API.",
        icon: Brain,
    },
    {
        title: "Global Edge Network",
        description: "Deployed on 300+ edge locations for instant response times anywhere.",
        icon: Globe,
    },
    {
        title: "Custom Models",
        description: "Fine-tune our base models on your specific dataset securely.",
        icon: Cpu,
    },
    {
        title: "Deep Analytics",
        description: "Gain actionable insights with our integrated dashboard.",
        icon: BarChart3,
    },
];

const Features = () => {
    return (
        <section className="relative py-32 bg-black overflow-hidden">

            {/* Particles Background */}
            <div className="absolute inset-0 w-full h-full">
                <Particles
                    particleColors={['#ffffff', '#ffffff']}
                    particleCount={200}
                    particleSpread={10}
                    speed={0.1}
                    particleBaseSize={100}
                    moveParticlesOnHover={true}
                    alphaParticles={false}
                    disableRotation={false}
                />
            </div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Side - Content */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                                Powerful Features
                            </h2>
                            <p className="text-white/60 text-lg leading-relaxed mb-8">
                                Everything you need to build intelligent applications at scale. Our platform combines cutting-edge AI technology with enterprise-grade reliability.
                            </p>
                            <p className="text-white/60 text-base leading-relaxed">
                                From real-time processing to deep analytics, we provide the tools and infrastructure to power your next generation of AI applications.
                            </p>
                        </motion.div>
                    </div>

                    {/* Right Side - Card Swap */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: .06, delay: 0.2 }}
                    >
                        <div style={{ height: '600px', width: '100%', position: 'relative' }}>
                            <CardSwap
                                cardDistance={60}
                                verticalDistance={70}
                                delay={3000}
                                pauseOnHover={true}
                            >
                                {features.map((feature, index) => (
                                    <Card key={index}>
                                        <div className="relative bg-purple-900/30 backdrop-blur-sm border border-purple-500/20 rounded-3xl p-10 h-full hover:bg-purple-800/40 transition-all duration-300 group">

                                            {/* Gradient Background */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

                                            {/* Content - Left Aligned */}
                                            <div className="relative z-10 flex flex-col h-full">
                                                {/* Title and Description at Top Left */}
                                                <div className="mb-auto">
                                                    <h3 className="text-3xl font-semibold mb-4 text-white">
                                                        {feature.title}
                                                    </h3>

                                                    <p className="text-white/60 text-lg leading-relaxed">
                                                        {feature.description}
                                                    </p>
                                                </div>

                                                {/* Icon at Bottom */}
                                                <div className="mt-8 self-start">
                                                    <div className="p-6 bg-white/5 rounded-2xl group-hover:bg-white/10 transition-colors inline-block">
                                                        <feature.icon className="w-16 h-16 text-white/80" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                ))}
                            </CardSwap>
                        </div>
                    </motion.div>

                </div>

            </div>
        </section>
    );
};

export default Features;
