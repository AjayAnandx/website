import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Zap, TrendingUp, ChevronRight, ChevronLeft, X, Target, Lightbulb, Rocket, BarChart3, AlertTriangle, XCircle } from 'lucide-react';
import LightRays from './LightRays';

// Approach slides data
const approachSlides = [
    {
        id: 1,
        title: "Why Most AI Initiatives Fail",
        subtitle: "The Problem",
        description: "AI fails when strategy is missing — not technology.",
        icon: AlertTriangle,
        color: "from-red-500 to-orange-600",
        points: ["AI tools without business strategy", "Automation that stays siloed", "Data without actionable insights", "No ownership, governance, or ROI"],
        isNegative: true
    },
    {
        id: 2,
        title: "Our Consulting Strategy Approach",
        subtitle: "A business-first framework for AI execution",
        color: "from-violet-500 to-purple-600",
        isStrategicDiagram: true,
        core: {
            title: "AI Strategy Core",
            desc: "Align AI initiatives with business outcomes."
        },
        pillars: [
            {
                position: "top",
                title: "Governance & Scale",
                desc: "Security, compliance, and scalability from day one.",
                points: ["AI governance", "Risk management", "Long-term scalability"]
            },
            {
                position: "left",
                title: "Business Alignment",
                desc: "AI initiatives mapped directly to revenue, efficiency, and growth goals.",
                points: ["Business KPIs", "Workflow priorities", "Ownership clarity"]
            },
            {
                position: "right",
                title: "Technology Architecture",
                desc: "Right models, tools, and integrations — no overengineering.",
                points: ["AI models & tools", "System integrations", "Data pipelines"]
            },
            {
                position: "bottom",
                title: "Execution & Adoption",
                desc: "AI embedded into real workflows with team adoption in mind.",
                points: ["Automation delivery", "User enablement", "Change management"]
            }
        ],
        bottomLine: "We don't start with tools. We start with outcomes."
    },
    {
        id: 3,
        title: "AI Workflow Adoption Across Industries",
        subtitle: "2020–2025",
        color: "from-blue-500 to-cyan-600",
        isDataViz: true,
        insights: [
            { num: "01", title: "AI has moved from experimentation to core workflows", desc: "By 2025, 78% of companies globally use AI in at least one business workflow." },
            { num: "02", title: "Adoption varies sharply by industry maturity", desc: "Technology and finance sectors lead, while healthcare and manufacturing lag." },
            { num: "03", title: "Enterprises are scaling, not testing", desc: "Over 82% of large enterprises have deployed or are piloting AI in operations." },
            { num: "04", title: "Strategy is the key adoption differentiator", desc: "Organizations with a defined AI roadmap scale 2–3× faster." }
        ],
        barChart: {
            title: "AI Workflow Adoption by Sector (2025)",
            data: [
                { label: "Technology", value: 90 },
                { label: "Finance", value: 59 },
                { label: "Retail & E-commerce", value: 55 },
                { label: "Telecommunications", value: 37 },
                { label: "Manufacturing", value: 29 },
                { label: "Healthcare", value: 22 }
            ]
        },
        pieChart: {
            title: "Global AI Workflow Adoption Status",
            data: [
                { label: "Actively Deployed", value: 42, highlight: true },
                { label: "Piloting / Experimenting", value: 40 },
                { label: "Not Yet Adopted", value: 18 }
            ]
        }
    },
    {
        id: 4,
        title: "Business Impact of AI-Driven Workflow Transformation",
        subtitle: "Measured gains from strategy-led AI execution (2020–2025)",
        color: "from-purple-500 to-indigo-600",
        isBusinessImpact: true,
        metrics: [
            { value: "+45%", label: "Overall Operational Performance", desc: "AI-driven automation improves end-to-end workflows." },
            { value: "2.5×", label: "Faster Decision Cycles", desc: "Real-time insights replace delayed reporting." },
            { value: "25-30%", label: "Cost Optimization", desc: "Predictive systems reduce inefficiencies." },
            { value: "+30%", label: "Workforce Productivity", desc: "AI copilots augment teams at scale." }
        ],
        insightLine: "Strategy-led AI adoption consistently outperforms tool-led implementation.",
        lineGraph: {
            title: "Overall Business Performance Index After AI Workflow Adoption",
            data: [
                { year: "2020", value: 100 },
                { year: "2021", value: 108 },
                { year: "2022", value: 118 },
                { year: "2023", value: 130 },
                { year: "2024", value: 140 },
                { year: "2025", value: 145 }
            ]
        },
        footer: "Based on global enterprise AI workflow adoption benchmarks (2020–2025)"
    }
];

const AIConsultingHero = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

    const highlights = [
        { icon: Brain, text: "AI Roadmaps aligned with business goals" },
        { icon: Zap, text: "Practical automation, not hype" },
        { icon: TrendingUp, text: "Measurable ROI in weeks, not years" },
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % approachSlides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + approachSlides.length) % approachSlides.length);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const openModal = (e) => {
        e.preventDefault();
        setIsModalOpen(true);
        setCurrentSlide(0);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <section
            className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-16 pb-8"
            style={{
                background: 'linear-gradient(to bottom, #000000 0%, #0a0a1a 30%, #1a0a2e 60%, #0f0520 80%, #000000 100%)'
            }}
        >
            {/* Light Rays Background */}
            <div className="absolute inset-0 w-full h-full opacity-40">
                <LightRays
                    raysOrigin="top-center"
                    raysColor="#7c3aed"
                    raysSpeed={0.3}
                    lightSpread={1.5}
                    rayLength={2}
                    pulsating={true}
                    fadeDistance={1.5}
                    saturation={0.8}
                    followMouse={true}
                    mouseInfluence={0.1}
                />
            </div>

            {/* Gradient Orbs */}
            <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-purple-600/20 rounded-full blur-[100px] animate-pulse-slow" />
            <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-violet-600/15 rounded-full blur-[100px] animate-pulse-slow" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="max-w-4xl mx-auto space-y-5"
                >
                    {/* Badge */}
                    <motion.div
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full backdrop-blur-sm border border-white/10"
                        style={{
                            background: 'linear-gradient(90deg, rgba(124, 58, 237, 0.3) 0%, rgba(124, 58, 237, 0.1) 100%)'
                        }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <span className="px-2.5 py-0.5 bg-purple-600 text-white text-xs font-semibold rounded-full">
                            AI Strategy
                        </span>
                        <span className="text-gray-300 text-xs font-medium">
                            Transform Your Business
                        </span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        style={{
                            color: 'rgba(255, 255, 255, 0.95)',
                        }}
                    >
                        AI-Driven Strategy for{' '}
                        <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-purple-300 bg-clip-text text-transparent">
                            Scalable Business Growth
                        </span>
                    </motion.h1>

                    {/* Sub-headline */}
                    <motion.p
                        className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        We help businesses design, implement, and scale AI strategies that drive
                        efficiency, revenue, and long-term competitive advantage.
                    </motion.p>

                    {/* Key Highlights */}
                    <motion.div
                        className="flex flex-wrap justify-center gap-3 pt-2"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        {highlights.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 backdrop-blur-sm rounded-full border border-white/10"
                            >
                                <item.icon className="w-3.5 h-3.5 text-purple-400" />
                                <span className="text-xs text-gray-300">{item.text}</span>
                            </div>
                        ))}
                    </motion.div>

                    {/* CTAs */}
                    <motion.div
                        className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        <a
                            href="#contact"
                            className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600/80 via-purple-500/80 to-violet-500/80 hover:from-purple-500 hover:via-purple-400 hover:to-violet-400 text-white text-sm font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/30 backdrop-blur-sm border border-purple-400/30"
                        >
                            Book a Strategy Call
                            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <button
                            onClick={openModal}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 text-white text-sm font-medium rounded-full transition-all duration-300 border border-white/10 hover:border-purple-500/30 backdrop-blur-sm cursor-pointer"
                        >
                            View Our Approach
                        </button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent pointer-events-none" />

            {/* Approach Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Backdrop */}
                        <motion.div
                            className="absolute inset-0 bg-black/90 backdrop-blur-xl"
                            onClick={closeModal}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        />

                        {/* Modal Content */}
                        <motion.div
                            className="relative w-[95vw] h-[90vh] max-w-7xl bg-gradient-to-br from-gray-900/95 via-purple-900/20 to-gray-900/95 rounded-3xl border border-purple-500/20 overflow-hidden shadow-2xl shadow-purple-500/10"
                            initial={{ scale: 0.8, opacity: 0, y: 50 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.8, opacity: 0, y: 50 }}
                            transition={{
                                type: "spring",
                                damping: 25,
                                stiffness: 300,
                                duration: 0.5
                            }}
                        >
                            {/* Close Button */}
                            <button
                                onClick={closeModal}
                                className="absolute top-6 right-6 z-20 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 group"
                            >
                                <X className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-300" />
                            </button>

                            {/* Slides Container */}
                            <div className="relative h-full pt-8 pb-20 px-6 md:px-12 overflow-hidden">
                                <div className="relative h-full flex items-center">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={currentSlide}
                                            className="w-full"
                                            initial={{ x: 100, opacity: 0, scale: 0.98 }}
                                            animate={{ x: 0, opacity: 1, scale: 1 }}
                                            exit={{ x: -100, opacity: 0, scale: 0.98 }}
                                            transition={{
                                                type: "spring",
                                                visualDuration: 0.5,
                                                bounce: 0.15,
                                            }}
                                        >
                                            {/* Conditional Layout */}
                                            {approachSlides[currentSlide].isStrategicDiagram ? (
                                                /* Strategic Diagram Layout - Central Core + 4 Pillars */
                                                <div className="max-w-4xl mx-auto px-4">
                                                    {/* Header */}
                                                    <div className="text-center mb-4">
                                                        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white leading-tight">
                                                            {approachSlides[currentSlide].title}
                                                        </h3>
                                                        <p className="text-violet-400 text-xs md:text-sm font-medium mt-1">
                                                            {approachSlides[currentSlide].subtitle}
                                                        </p>
                                                    </div>

                                                    {/* Diamond Diagram - Compact */}
                                                    <div className="grid grid-cols-3 gap-2 md:gap-3 items-center justify-items-center">
                                                        {/* Top Pillar - Governance */}
                                                        <div className="col-span-3 flex justify-center">
                                                            <motion.div
                                                                className="bg-white/5 border border-white/10 rounded-lg p-2.5 w-full max-w-[220px] text-center hover:border-violet-500/40 transition-all duration-300"
                                                                initial={{ opacity: 0, y: -15 }}
                                                                animate={{ opacity: 1, y: 0 }}
                                                                transition={{ type: "spring", visualDuration: 0.4, bounce: 0.15, delay: 0.1 }}
                                                            >
                                                                <h5 className="text-white text-xs font-semibold">{approachSlides[currentSlide].pillars?.[0]?.title}</h5>
                                                                <div className="flex flex-wrap justify-center gap-1 mt-1.5">
                                                                    {approachSlides[currentSlide].pillars?.[0]?.points.map((p, i) => (
                                                                        <span key={i} className="px-1.5 py-0.5 text-[10px] bg-violet-500/10 text-violet-400 rounded-full">{p}</span>
                                                                    ))}
                                                                </div>
                                                            </motion.div>
                                                        </div>

                                                        {/* Connector Line - Top to Center */}
                                                        <motion.div
                                                            className="col-span-3 flex justify-center py-1"
                                                            initial={{ scaleY: 0 }}
                                                            animate={{ scaleY: 1 }}
                                                            transition={{ delay: 0.3 }}
                                                        >
                                                            <div className="w-0.5 h-4 bg-gradient-to-b from-violet-500/40 to-violet-500" />
                                                        </motion.div>

                                                        {/* Middle Row: Left - Core - Right */}
                                                        {/* Left Pillar - Business */}
                                                        <motion.div
                                                            className="bg-white/5 border border-white/10 rounded-lg p-2 w-full text-center hover:border-violet-500/40 transition-all duration-300"
                                                            initial={{ opacity: 0, x: -15 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ type: "spring", visualDuration: 0.4, bounce: 0.15, delay: 0.2 }}
                                                        >
                                                            <h5 className="text-white text-[10px] md:text-xs font-semibold">{approachSlides[currentSlide].pillars?.[1]?.title}</h5>
                                                            <div className="flex flex-wrap justify-center gap-0.5 mt-1">
                                                                {approachSlides[currentSlide].pillars?.[1]?.points.map((p, i) => (
                                                                    <span key={i} className="px-1 py-0.5 text-[9px] md:text-[10px] bg-violet-500/10 text-violet-400 rounded-full">{p}</span>
                                                                ))}
                                                            </div>
                                                        </motion.div>

                                                        {/* Center Core - Main Element */}
                                                        <motion.div
                                                            className="relative bg-gradient-to-br from-violet-500/20 to-purple-600/20 border-2 border-violet-500 rounded-xl p-3 w-full text-center shadow-lg shadow-violet-500/20"
                                                            initial={{ opacity: 0, scale: 0.9 }}
                                                            animate={{ opacity: 1, scale: 1 }}
                                                            transition={{ type: "spring", visualDuration: 0.5, bounce: 0.2, delay: 0 }}
                                                        >
                                                            <h4 className="text-white text-sm md:text-base font-bold">{approachSlides[currentSlide].core?.title}</h4>
                                                            <p className="text-violet-300 text-[10px] md:text-xs mt-0.5">{approachSlides[currentSlide].core?.desc}</p>
                                                        </motion.div>

                                                        {/* Right Pillar - Technology */}
                                                        <motion.div
                                                            className="bg-white/5 border border-white/10 rounded-lg p-2 w-full text-center hover:border-violet-500/40 transition-all duration-300"
                                                            initial={{ opacity: 0, x: 15 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ type: "spring", visualDuration: 0.4, bounce: 0.15, delay: 0.2 }}
                                                        >
                                                            <h5 className="text-white text-[10px] md:text-xs font-semibold">{approachSlides[currentSlide].pillars?.[2]?.title}</h5>
                                                            <div className="flex flex-wrap justify-center gap-0.5 mt-1">
                                                                {approachSlides[currentSlide].pillars?.[2]?.points.map((p, i) => (
                                                                    <span key={i} className="px-1 py-0.5 text-[9px] md:text-[10px] bg-violet-500/10 text-violet-400 rounded-full">{p}</span>
                                                                ))}
                                                            </div>
                                                        </motion.div>

                                                        {/* Connector Line - Center to Bottom */}
                                                        <motion.div
                                                            className="col-span-3 flex justify-center py-1"
                                                            initial={{ scaleY: 0 }}
                                                            animate={{ scaleY: 1 }}
                                                            transition={{ delay: 0.4 }}
                                                        >
                                                            <div className="w-0.5 h-4 bg-gradient-to-b from-violet-500 to-violet-500/40" />
                                                        </motion.div>

                                                        {/* Bottom Pillar - Execution */}
                                                        <div className="col-span-3 flex justify-center">
                                                            <motion.div
                                                                className="bg-white/5 border border-white/10 rounded-lg p-2.5 w-full max-w-[220px] text-center hover:border-violet-500/40 transition-all duration-300"
                                                                initial={{ opacity: 0, y: 15 }}
                                                                animate={{ opacity: 1, y: 0 }}
                                                                transition={{ type: "spring", visualDuration: 0.4, bounce: 0.15, delay: 0.3 }}
                                                            >
                                                                <h5 className="text-white text-xs font-semibold">{approachSlides[currentSlide].pillars?.[3]?.title}</h5>
                                                                <div className="flex flex-wrap justify-center gap-1 mt-1.5">
                                                                    {approachSlides[currentSlide].pillars?.[3]?.points.map((p, i) => (
                                                                        <span key={i} className="px-1.5 py-0.5 text-[10px] bg-violet-500/10 text-violet-400 rounded-full">{p}</span>
                                                                    ))}
                                                                </div>
                                                            </motion.div>
                                                        </div>
                                                    </div>

                                                    {/* Bottom Line */}
                                                    <motion.p
                                                        className="text-center text-gray-500 text-xs mt-4 italic"
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                        transition={{ delay: 0.6 }}
                                                    >
                                                        {approachSlides[currentSlide].bottomLine}
                                                    </motion.p>
                                                </div>
                                            ) : approachSlides[currentSlide].isDataViz ? (
                                                /* Data Visualization Layout - 60/40 Split */
                                                <div className="max-w-6xl mx-auto">
                                                    {/* Header */}
                                                    <div className="text-center mb-6">
                                                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                                                            {approachSlides[currentSlide].title}
                                                        </h3>
                                                        <p className="text-cyan-400 text-sm md:text-base font-medium mt-1">
                                                            {approachSlides[currentSlide].subtitle}
                                                        </p>
                                                    </div>

                                                    {/* 60/40 Split Layout */}
                                                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
                                                        {/* Left Side - Insights (60%) */}
                                                        <div className="lg:col-span-3 space-y-3">
                                                            {approachSlides[currentSlide].insights?.map((insight, idx) => (
                                                                <motion.div
                                                                    key={idx}
                                                                    className="flex gap-4 p-3 bg-white/5 rounded-xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
                                                                    initial={{ opacity: 0, x: -30 }}
                                                                    animate={{ opacity: 1, x: 0 }}
                                                                    transition={{
                                                                        type: "spring",
                                                                        visualDuration: 0.4,
                                                                        bounce: 0.15,
                                                                        delay: idx * 0.1
                                                                    }}
                                                                >
                                                                    <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent flex-shrink-0">
                                                                        {insight.num}
                                                                    </span>
                                                                    <div>
                                                                        <h4 className="text-white text-sm md:text-base font-semibold leading-tight">
                                                                            {insight.title}
                                                                        </h4>
                                                                        <p className="text-gray-400 text-xs md:text-sm mt-0.5">
                                                                            {insight.desc}
                                                                        </p>
                                                                    </div>
                                                                </motion.div>
                                                            ))}
                                                        </div>

                                                        {/* Right Side - Charts (40%) */}
                                                        <div className="lg:col-span-2 space-y-4">
                                                            {/* Bar Chart */}
                                                            <motion.div
                                                                className="bg-white/5 rounded-xl p-4 border border-white/10"
                                                                initial={{ opacity: 0, y: 20 }}
                                                                animate={{ opacity: 1, y: 0 }}
                                                                transition={{ delay: 0.3 }}
                                                            >
                                                                <h5 className="text-white text-xs font-semibold mb-3">
                                                                    {approachSlides[currentSlide].barChart?.title}
                                                                </h5>
                                                                <div className="space-y-2">
                                                                    {approachSlides[currentSlide].barChart?.data.map((item, idx) => (
                                                                        <div key={idx} className="flex items-center gap-2">
                                                                            <span className="text-gray-400 text-xs w-24 truncate flex-shrink-0">
                                                                                {item.label}
                                                                            </span>
                                                                            <div className="flex-1 h-4 bg-gray-800 rounded-full overflow-hidden">
                                                                                <motion.div
                                                                                    className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                                                                                    initial={{ width: 0 }}
                                                                                    animate={{ width: `${item.value}%` }}
                                                                                    transition={{
                                                                                        type: "spring",
                                                                                        visualDuration: 0.8,
                                                                                        bounce: 0.1,
                                                                                        delay: idx * 0.1 + 0.4
                                                                                    }}
                                                                                />
                                                                            </div>
                                                                            <span className="text-cyan-400 text-xs font-semibold w-8 text-right">
                                                                                {item.value}%
                                                                            </span>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </motion.div>

                                                            {/* Pie Chart */}
                                                            <motion.div
                                                                className="bg-white/5 rounded-xl p-4 border border-white/10"
                                                                initial={{ opacity: 0, y: 20 }}
                                                                animate={{ opacity: 1, y: 0 }}
                                                                transition={{ delay: 0.5 }}
                                                            >
                                                                <h5 className="text-white text-xs font-semibold mb-3">
                                                                    {approachSlides[currentSlide].pieChart?.title}
                                                                </h5>
                                                                <div className="flex items-center gap-4">
                                                                    {/* Pie Visual */}
                                                                    <div className="relative w-20 h-20 flex-shrink-0">
                                                                        <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                                                                            {/* Actively Deployed - 42% */}
                                                                            <motion.circle
                                                                                cx="18" cy="18" r="15.915"
                                                                                fill="transparent"
                                                                                stroke="url(#pieGradient1)"
                                                                                strokeWidth="5"
                                                                                strokeDasharray="42 100"
                                                                                strokeDashoffset="0"
                                                                                initial={{ strokeDasharray: "0 100" }}
                                                                                animate={{ strokeDasharray: "42 100" }}
                                                                                transition={{ duration: 1, delay: 0.6 }}
                                                                            />
                                                                            {/* Piloting - 40% */}
                                                                            <motion.circle
                                                                                cx="18" cy="18" r="15.915"
                                                                                fill="transparent"
                                                                                stroke="#6366f1"
                                                                                strokeWidth="5"
                                                                                strokeDasharray="40 100"
                                                                                strokeDashoffset="-42"
                                                                                initial={{ strokeDasharray: "0 100" }}
                                                                                animate={{ strokeDasharray: "40 100" }}
                                                                                transition={{ duration: 1, delay: 0.8 }}
                                                                            />
                                                                            {/* Not Adopted - 18% */}
                                                                            <motion.circle
                                                                                cx="18" cy="18" r="15.915"
                                                                                fill="transparent"
                                                                                stroke="#4b5563"
                                                                                strokeWidth="5"
                                                                                strokeDasharray="18 100"
                                                                                strokeDashoffset="-82"
                                                                                initial={{ strokeDasharray: "0 100" }}
                                                                                animate={{ strokeDasharray: "18 100" }}
                                                                                transition={{ duration: 1, delay: 1 }}
                                                                            />
                                                                            <defs>
                                                                                <linearGradient id="pieGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                                                                                    <stop offset="0%" stopColor="#06b6d4" />
                                                                                    <stop offset="100%" stopColor="#3b82f6" />
                                                                                </linearGradient>
                                                                            </defs>
                                                                        </svg>
                                                                    </div>
                                                                    {/* Legend */}
                                                                    <div className="space-y-1.5 flex-1">
                                                                        {approachSlides[currentSlide].pieChart?.data.map((item, idx) => (
                                                                            <div key={idx} className="flex items-center gap-2">
                                                                                <div className={`w-2.5 h-2.5 rounded-full ${item.highlight ? 'bg-gradient-to-r from-cyan-500 to-blue-500' :
                                                                                    idx === 1 ? 'bg-indigo-500' : 'bg-gray-600'
                                                                                    }`} />
                                                                                <span className="text-gray-300 text-xs flex-1">{item.label}</span>
                                                                                <span className={`text-xs font-semibold ${item.highlight ? 'text-cyan-400' : 'text-gray-400'}`}>
                                                                                    {item.value}%
                                                                                </span>
                                                                            </div>
                                                                        ))}
                                                                    </div>
                                                                </div>
                                                            </motion.div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ) : approachSlides[currentSlide].isBusinessImpact ? (
                                                /* Business Impact Layout - 45/55 Split with Line Graph */
                                                <div className="max-w-5xl mx-auto px-4">
                                                    {/* Header */}
                                                    <div className="text-center mb-4">
                                                        <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white leading-tight">
                                                            {approachSlides[currentSlide].title}
                                                        </h3>
                                                        <p className="text-purple-400 text-xs font-medium mt-1">
                                                            {approachSlides[currentSlide].subtitle}
                                                        </p>
                                                    </div>

                                                    {/* 45/55 Split Layout */}
                                                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
                                                        {/* Left Side - Metrics (45%) */}
                                                        <div className="lg:col-span-5 space-y-2.5">
                                                            {approachSlides[currentSlide].metrics?.map((metric, idx) => (
                                                                <motion.div
                                                                    key={idx}
                                                                    className="flex items-start gap-3 p-2.5 bg-white/5 rounded-lg border border-white/10 hover:border-purple-500/30 transition-all"
                                                                    initial={{ opacity: 0, x: -20 }}
                                                                    animate={{ opacity: 1, x: 0 }}
                                                                    transition={{ type: "spring", visualDuration: 0.4, bounce: 0.15, delay: idx * 0.1 }}
                                                                >
                                                                    <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent flex-shrink-0 w-16 md:w-20">
                                                                        {metric.value}
                                                                    </span>
                                                                    <div className="flex-1 min-w-0">
                                                                        <h5 className="text-white text-xs font-semibold leading-tight">{metric.label}</h5>
                                                                        <p className="text-gray-400 text-[10px] mt-0.5">{metric.desc}</p>
                                                                    </div>
                                                                </motion.div>
                                                            ))}
                                                            {/* Insight Line */}
                                                            <motion.p
                                                                className="text-purple-400 text-[10px] font-semibold pt-1 italic"
                                                                initial={{ opacity: 0 }}
                                                                animate={{ opacity: 1 }}
                                                                transition={{ delay: 0.5 }}
                                                            >
                                                                {approachSlides[currentSlide].insightLine}
                                                            </motion.p>
                                                        </div>

                                                        {/* Right Side - Line Graph (55%) */}
                                                        <div className="lg:col-span-7">
                                                            <motion.div
                                                                className="bg-white/5 rounded-xl p-3 md:p-4 border border-white/10"
                                                                initial={{ opacity: 0, y: 15 }}
                                                                animate={{ opacity: 1, y: 0 }}
                                                                transition={{ delay: 0.3 }}
                                                            >
                                                                <h5 className="text-white text-[10px] md:text-xs font-semibold mb-3 text-center">
                                                                    {approachSlides[currentSlide].lineGraph?.title}
                                                                </h5>
                                                                {/* SVG Line Graph */}
                                                                <div className="relative h-36 md:h-44">
                                                                    <svg viewBox="0 0 320 140" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
                                                                        <defs>
                                                                            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                                                                <stop offset="0%" stopColor="#8b5cf6" />
                                                                                <stop offset="100%" stopColor="#6366f1" />
                                                                            </linearGradient>
                                                                            <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                                                                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.3" />
                                                                                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
                                                                            </linearGradient>
                                                                        </defs>

                                                                        {/* Subtle Grid Lines */}
                                                                        <line x1="40" y1="20" x2="300" y2="20" stroke="#374151" strokeWidth="0.5" strokeDasharray="2" />
                                                                        <line x1="40" y1="60" x2="300" y2="60" stroke="#374151" strokeWidth="0.5" strokeDasharray="2" />
                                                                        <line x1="40" y1="100" x2="300" y2="100" stroke="#374151" strokeWidth="0.5" strokeDasharray="2" />

                                                                        {/* Y-Axis Labels */}
                                                                        <text x="35" y="24" fill="#9ca3af" fontSize="8" textAnchor="end">145</text>
                                                                        <text x="35" y="64" fill="#9ca3af" fontSize="8" textAnchor="end">120</text>
                                                                        <text x="35" y="104" fill="#9ca3af" fontSize="8" textAnchor="end">100</text>

                                                                        {/* Area Fill */}
                                                                        <motion.path
                                                                            d="M50,100 L95,85 L140,62 L185,42 L230,28 L275,20 L275,100 L50,100 Z"
                                                                            fill="url(#areaGradient)"
                                                                            initial={{ opacity: 0 }}
                                                                            animate={{ opacity: 1 }}
                                                                            transition={{ delay: 0.8, duration: 0.5 }}
                                                                        />

                                                                        {/* Line Path */}
                                                                        <motion.path
                                                                            d="M50,100 L95,85 L140,62 L185,42 L230,28 L275,20"
                                                                            fill="none"
                                                                            stroke="url(#lineGradient)"
                                                                            strokeWidth="2.5"
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                            initial={{ pathLength: 0 }}
                                                                            animate={{ pathLength: 1 }}
                                                                            transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
                                                                        />

                                                                        {/* Data Points */}
                                                                        {[
                                                                            { x: 50, y: 100, year: "2020", value: 100 },
                                                                            { x: 95, y: 85, year: "2021", value: 108 },
                                                                            { x: 140, y: 62, year: "2022", value: 118 },
                                                                            { x: 185, y: 42, year: "2023", value: 130 },
                                                                            { x: 230, y: 28, year: "2024", value: 140 },
                                                                            { x: 275, y: 20, year: "2025", value: 145 }
                                                                        ].map((point, idx) => (
                                                                            <g key={idx}>
                                                                                <motion.circle
                                                                                    cx={point.x}
                                                                                    cy={point.y}
                                                                                    r="4"
                                                                                    fill="#8b5cf6"
                                                                                    stroke="white"
                                                                                    strokeWidth="1.5"
                                                                                    initial={{ scale: 0, opacity: 0 }}
                                                                                    animate={{ scale: 1, opacity: 1 }}
                                                                                    transition={{ delay: 0.6 + idx * 0.15 }}
                                                                                />
                                                                                {/* X-Axis Labels */}
                                                                                <text x={point.x} y="118" fill="#9ca3af" fontSize="7" textAnchor="middle">{point.year}</text>
                                                                            </g>
                                                                        ))}
                                                                    </svg>
                                                                </div>
                                                            </motion.div>
                                                        </div>
                                                    </div>

                                                    {/* Footer */}
                                                    <motion.p
                                                        className="text-center text-gray-600 text-[9px] mt-3"
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                        transition={{ delay: 0.8 }}
                                                    >
                                                        {approachSlides[currentSlide].footer}
                                                    </motion.p>
                                                </div>
                                            ) : (
                                                /* Standard Two-Column Layout */
                                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-5xl mx-auto">
                                                    {/* Left - Content */}
                                                    <div className="space-y-4">
                                                        {/* Step Number & Subtitle */}
                                                        <div className="flex items-center gap-3">
                                                            <span className={`text-5xl md:text-6xl font-bold bg-gradient-to-r ${approachSlides[currentSlide].color} bg-clip-text text-transparent opacity-60`}>
                                                                0{approachSlides[currentSlide].id}
                                                            </span>
                                                            <div className="h-px flex-1 bg-gradient-to-r from-purple-500/50 to-transparent" />
                                                        </div>

                                                        {/* Title */}
                                                        <div>
                                                            <p className="text-purple-400 text-xs md:text-sm font-medium uppercase tracking-wider mb-1">
                                                                {approachSlides[currentSlide].subtitle}
                                                            </p>
                                                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                                                                {approachSlides[currentSlide].title}
                                                            </h3>
                                                        </div>

                                                        {/* Description */}
                                                        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                                                            {approachSlides[currentSlide].description}
                                                        </p>

                                                        {/* Key Points */}
                                                        {approachSlides[currentSlide].points && (
                                                            <ul className="space-y-3 pt-2">
                                                                {approachSlides[currentSlide].points.map((point, idx) => (
                                                                    <motion.li
                                                                        key={idx}
                                                                        className="flex items-center gap-3 text-gray-300 text-sm"
                                                                        initial={{ opacity: 0, x: -15, scale: 0.95 }}
                                                                        animate={{ opacity: 1, x: 0, scale: 1 }}
                                                                        transition={{
                                                                            type: "spring",
                                                                            visualDuration: 0.4,
                                                                            bounce: 0.2,
                                                                            delay: idx * 0.08 + 0.15
                                                                        }}
                                                                    >
                                                                        {approachSlides[currentSlide].isNegative ? (
                                                                            <XCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                                                                        ) : (
                                                                            <div className="w-1.5 h-1.5 rounded-full bg-purple-500 flex-shrink-0" />
                                                                        )}
                                                                        {point}
                                                                    </motion.li>
                                                                ))}
                                                            </ul>
                                                        )}
                                                    </div>

                                                    {/* Right - Icon Display */}
                                                    <div className="flex items-center justify-center">
                                                        <motion.div
                                                            className={`w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-2xl bg-gradient-to-br ${approachSlides[currentSlide].color} p-0.5`}
                                                            initial={{ scale: 0.8, rotate: -10 }}
                                                            animate={{ scale: 1, rotate: 0 }}
                                                            transition={{ type: "spring", damping: 20 }}
                                                        >
                                                            <div className="w-full h-full rounded-2xl bg-gray-900/90 flex items-center justify-center">
                                                                {React.createElement(approachSlides[currentSlide].icon, {
                                                                    className: "w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 text-white/80"
                                                                })}
                                                            </div>
                                                        </motion.div>
                                                    </div>
                                                </div>
                                            )}
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                            </div>

                            {/* Navigation */}
                            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 pt-2 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent">
                                <div className="flex items-center justify-between max-w-5xl mx-auto">
                                    {/* Prev Button */}
                                    <button
                                        onClick={prevSlide}
                                        className="flex items-center gap-1.5 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 group"
                                    >
                                        <ChevronLeft className="w-4 h-4 text-white group-hover:-translate-x-1 transition-transform" />
                                        <span className="text-white text-sm font-medium hidden sm:inline">Previous</span>
                                    </button>

                                    {/* Dots Indicator */}
                                    <div className="flex items-center gap-3">
                                        {approachSlides.map((_, index) => (
                                            <button
                                                key={index}
                                                onClick={() => goToSlide(index)}
                                                className={`transition-all duration-300 rounded-full ${index === currentSlide
                                                    ? 'w-10 h-3 bg-gradient-to-r from-purple-500 to-violet-500'
                                                    : 'w-3 h-3 bg-white/30 hover:bg-white/50'
                                                    }`}
                                            />
                                        ))}
                                    </div>

                                    {/* Next Button */}
                                    <button
                                        onClick={nextSlide}
                                        className="flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 rounded-full transition-all duration-300 group"
                                    >
                                        <span className="text-white text-sm font-medium hidden sm:inline">Next</span>
                                        <ChevronRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>

                            {/* Progress Bar */}
                            <div className="absolute top-0 left-0 right-0 h-1 bg-white/10">
                                <motion.div
                                    className="h-full bg-gradient-to-r from-purple-500 to-violet-500"
                                    initial={{ width: '0%' }}
                                    animate={{ width: `${((currentSlide + 1) / approachSlides.length) * 100}%` }}
                                    transition={{ duration: 0.3 }}
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section >
    );
};

export default AIConsultingHero;

