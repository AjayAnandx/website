import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, CheckCircle, Layers, Sparkles, ChevronRight, ChevronLeft, X, ArrowRight, Monitor, Palette, Building2, Users, Server, Code2, Paintbrush, Zap, Brain, FileText, Rocket } from 'lucide-react';
import Particles from './Particles';

// Pitch slides data
const pitchSlides = [
    {
        id: 1,
        title: "From Selling Courses to Building a Learning Brand",
        subtitle: "The Shift",
        description: "Why serious creators are moving beyond generic LMS platforms",
        color: "from-purple-500 to-violet-600",
        isOpeningSlide: true,
        visual: {
            before: {
                label: "Course Page",
                icon: Monitor,
                items: ["Generic templates", "Limited branding", "Platform restrictions"]
            },
            after: {
                label: "Branded Platform",
                icon: Palette,
                items: ["Your identity", "Complete control", "Scalable foundation"]
            }
        },
        contextLine: "Context setting, not selling yet."
    },
    {
        id: 2,
        title: "The Course Market Is Exploding — Platforms Haven't Evolved",
        subtitle: "Market Reality",
        description: "The demand for online courses is growing rapidly, but most creators are still using tools built for marketplaces, not brands.",
        color: "from-cyan-500 to-blue-600",
        isMarketSlide: true,
        lineGraph: {
            title: "Global Online Learning Market Size",
            caption: "Online learning market growing at ~14–15% CAGR globally",
            data: [
                { year: "2020", value: 250, label: "Remote learning boom" },
                { year: "2021", value: 290 },
                { year: "2022", value: 340 },
                { year: "2023", value: 395, label: "Creator-led education rise" },
                { year: "2024", value: 455 },
                { year: "2025", value: 520 },
                { year: "2026", value: 600 },
                { year: "2027", value: 690, label: "Subscription & cohort models" },
                { year: "2028", value: 790 },
                { year: "2029", value: 900 }
            ]
        },
        donutChart: {
            title: "Creator Platform Dependency",
            insight: "Most creators grow on platforms they don't own.",
            data: [
                { label: "Generic / Marketplace LMS", value: 65, color: "from-gray-500 to-gray-600" },
                { label: "Semi-custom tools", value: 25, color: "from-blue-500 to-indigo-500" },
                { label: "Fully branded platforms", value: 10, color: "from-purple-500 to-violet-500", highlight: true }
            ]
        },
        insights: [
            "Rapid market growth",
            "Creators scaling faster than platform flexibility",
            "Ownership gap is widening"
        ],
        goalLine: "Create urgency + problem awareness using data."
    },
    {
        id: 3,
        title: "Brand Ownership Directly Impacts Revenue & Engagement",
        subtitle: "Brand & Business Impact",
        description: "Brand control is not cosmetic — it changes trust, engagement, and income.",
        color: "from-emerald-500 to-teal-600",
        isBrandSlide: true,
        barChart: {
            title: "Engagement Comparison",
            insight: "Branded platforms consistently show higher learner engagement & completion",
            data: [
                { metric: "Course Completion Rate", generic: 35, branded: 72 },
                { metric: "Learner Return Rate", generic: 22, branded: 58 }
            ]
        },
        flowDiagram: {
            title: "Revenue Retention Flow",
            caption: "Marketplace fees quietly cap creator income.",
            flows: [
                {
                    label: "Generic Platform",
                    steps: ["Course Price", "Platform Fees", "Marketing Cuts", "Creator Payout"],
                    values: [100, 70, 45, 30],
                    color: "gray"
                },
                {
                    label: "Custom LMS",
                    steps: ["Course Price", "Payment Gateway", "Creator Revenue"],
                    values: [100, 97, 95],
                    color: "emerald"
                }
            ]
        },
        comparisonTable: {
            headers: ["Aspect", "Generic LMS", "Custom LMS"],
            rows: [
                { aspect: "Branding", generic: "Platform-owned", custom: "Creator-owned" },
                { aspect: "Data Access", generic: "Limited", custom: "Full" },
                { aspect: "Revenue Control", generic: "Shared", custom: "100%" },
                { aspect: "Long-Term Asset", generic: "❌", custom: "✅" }
            ]
        },
        goalLine: "Make branding a business decision, not a design choice."
    },
    {
        id: 4,
        title: "What a Custom LMS Actually Unlocks",
        subtitle: "The Solution",
        description: "Build a platform that grows with your brand, not against it.",
        color: "from-violet-500 to-purple-600",
        isSolutionSlide: true,
        unlocks: [
            { icon: "Building2", label: "Platform Ownership", description: "Your domain, your brand, your rules" },
            { icon: "Layers", label: "Flexible Course Models", description: "Cohorts, subscriptions, bundles - your way" },
            { icon: "Users", label: "Direct Audience Relationship", description: "Own your student data & communications" },
            { icon: "Server", label: "Scalable Infrastructure", description: "Grow without platform limitations" }
        ],
        visualBlocks: [
            { label: "Courses", color: "purple" },
            { label: "Payments", color: "violet" },
            { label: "Analytics", color: "indigo" },
            { label: "Branding", color: "fuchsia" },
            { label: "Community", color: "pink" },
            { label: "Marketing", color: "rose" }
        ],
        goalLine: "Position Custom LMS as the next logical step."
    },
    {
        id: 5,
        title: "Built Like Software. Delivered for Creators.",
        subtitle: "Why QuantumScript",
        description: "We don't build templates. We engineer learning platforms.",
        color: "from-orange-500 to-amber-600",
        isWhyUsSlide: true,
        differentiators: [
            { icon: "Code2", label: "Software-Grade Architecture", description: "Enterprise-level code, creator-friendly experience" },
            { icon: "Paintbrush", label: "White-Label by Default", description: "Your brand front and center, always" },
            { icon: "Zap", label: "25-Day Sprint Execution", description: "Fast delivery without cutting corners" },
            { icon: "Brain", label: "Built by AI & Product Engineers", description: "Smart automation meets product expertise" }
        ],
        visual: {
            crossed: "Template",
            highlighted: "Product Architecture"
        },
        goalLine: "Build trust through differentiation."
    },
    {
        id: 6,
        title: "24-Day Sprint: From Vision to Launch",
        subtitle: "Execution Timeline",
        description: "A proven process that delivers results, not excuses.",
        color: "from-sky-500 to-blue-600",
        isTimelineSlide: true,
        phases: [
            {
                name: "Strategy & Platform Blueprint",
                days: "Days 1–4",
                duration: 4,
                color: "sky",
                icon: "FileText",
                tasks: ["Business & course model alignment", "Platform architecture planning", "Branding & UX direction"]
            },
            {
                name: "Design & Experience Layer",
                days: "Days 5–9",
                duration: 5,
                color: "violet",
                icon: "Palette",
                tasks: ["Custom UI/UX design", "Learner & admin journey mapping", "Brand system applied"]
            },
            {
                name: "Core Development Sprint",
                days: "Days 10–18",
                duration: 9,
                color: "emerald",
                icon: "Code2",
                tasks: ["LMS core build", "Course logic & integrations", "Payment, auth & analytics"]
            },
            {
                name: "QA, Refinement & Launch",
                days: "Days 19–24",
                duration: 6,
                color: "orange",
                icon: "Rocket",
                tasks: ["Testing & optimization", "Performance & security checks", "Deployment & handover"]
            }
        ],
        whyItWorks: [
            "Proven LMS foundation",
            "Parallel design & development",
            "Sprint-based execution",
            "No template shortcuts"
        ],
        trustLine: "Built and shipped by a software engineering team.",
        goalLine: "Show process credibility with execution clarity."
    }
];

// Slide transition variants for smooth spring animations
const slideVariants = {
    enter: (direction) => ({
        x: direction > 0 ? 300 : -300,
        opacity: 0,
        scale: 0.95
    }),
    center: {
        x: 0,
        opacity: 1,
        scale: 1
    },
    exit: (direction) => ({
        x: direction < 0 ? 300 : -300,
        opacity: 0,
        scale: 0.95
    })
};

const slideTransition = {
    type: "spring",
    visualDuration: 0.4,
    bounce: 0.15
};

const CoursePlatformHero = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

    const valueSignals = [
        { icon: CheckCircle, text: "Fully white-labeled LMS" },
        { icon: Layers, text: "Built as a software product" },
        { icon: Sparkles, text: "Designed for serious creators & coaches" }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % pitchSlides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + pitchSlides.length) % pitchSlides.length);
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
            className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
            style={{
                background: 'linear-gradient(to bottom, #000000 0%, #1a0a2e 30%, #2d1054 50%, #1a0a2e 70%, #000000 100%)'
            }}
        >
            {/* Particles Background */}
            <div className="absolute inset-0 w-full h-full opacity-40">
                <Particles
                    particleColors={['#a855f7', '#c084fc']}
                    particleCount={100}
                    particleSpread={8}
                    speed={0.08}
                    particleBaseSize={80}
                    moveParticlesOnHover={true}
                    alphaParticles={true}
                    disableRotation={false}
                />
            </div>

            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80" />

            <div className="container mx-auto px-6 relative z-10 text-center py-12">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl mx-auto space-y-6"
                >
                    {/* Badge */}
                    <motion.div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md border border-purple-500/30"
                        style={{
                            background: 'linear-gradient(90deg, rgba(124, 58, 237, 0.3) 0%, rgba(168, 85, 247, 0.2) 100%)'
                        }}
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="p-1.5 bg-purple-500/30 rounded-full">
                            <GraduationCap className="w-4 h-4 text-purple-300" />
                        </div>
                        <span className="text-purple-200 text-xs font-medium tracking-wide">
                            Custom LMS Platform
                        </span>
                    </motion.div>

                    {/* Main Headline */}
                    <motion.h1
                        className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <span className="text-white">Build a Learning Platform</span>
                        <br />
                        <span
                            className="bg-clip-text text-transparent"
                            style={{
                                backgroundImage: 'linear-gradient(135deg, #c084fc 0%, #a855f7 30%, #7c3aed 60%, #6d28d9 100%)'
                            }}
                        >
                            That Carries Your Name.
                        </span>
                    </motion.h1>

                    {/* Sub-headline */}
                    <motion.p
                        className="text-base md:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        We help creators and coaches launch custom, white-label learning platforms
                        designed to scale their knowledge into a real brand.
                    </motion.p>

                    {/* Value Signals */}
                    <motion.div
                        className="flex flex-wrap justify-center gap-3 pt-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        {valueSignals.map((signal, index) => (
                            <motion.div
                                key={index}
                                className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                            >
                                <signal.icon className="w-4 h-4 text-purple-400" />
                                <span className="text-sm text-gray-300 font-medium">{signal.text}</span>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Primary CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        className="pt-6"
                    >
                        <motion.button
                            onClick={openModal}
                            className="inline-flex items-center gap-2 px-8 py-4 text-white font-semibold rounded-full transition-all duration-300 cursor-pointer"
                            style={{
                                background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 50%, #c084fc 100%)',
                                boxShadow: '0 8px 32px rgba(124, 58, 237, 0.4), 0 0 80px rgba(168, 85, 247, 0.2)'
                            }}
                            whileHover={{
                                scale: 1.05,
                                boxShadow: '0 12px 40px rgba(124, 58, 237, 0.5), 0 0 100px rgba(168, 85, 247, 0.3)'
                            }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <span>👉</span>
                            <span>Request the Full Platform Pitch</span>
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />

            {/* Pitch Modal */}
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
                                            {/* Opening Slide Layout */}
                                            {pitchSlides[currentSlide].isOpeningSlide && (
                                                <div className="max-w-5xl mx-auto px-4">
                                                    {/* Header */}
                                                    <div className="text-center mb-8">
                                                        <motion.span
                                                            className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-purple-400 bg-purple-500/10 rounded-full border border-purple-500/20"
                                                            initial={{ opacity: 0, y: -10 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            transition={{ delay: 0.1 }}
                                                        >
                                                            {pitchSlides[currentSlide].subtitle}
                                                        </motion.span>
                                                        <motion.h3
                                                            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4"
                                                            initial={{ opacity: 0, y: 20 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            transition={{ delay: 0.2 }}
                                                        >
                                                            {pitchSlides[currentSlide].title}
                                                        </motion.h3>
                                                        <motion.p
                                                            className="text-lg text-gray-400 max-w-2xl mx-auto"
                                                            initial={{ opacity: 0 }}
                                                            animate={{ opacity: 1 }}
                                                            transition={{ delay: 0.3 }}
                                                        >
                                                            {pitchSlides[currentSlide].description}
                                                        </motion.p>
                                                    </div>

                                                    {/* Visual Transition: Before → After */}
                                                    <div className="flex items-center justify-center gap-6 md:gap-12">
                                                        {/* Before Card */}
                                                        <motion.div
                                                            className="flex-1 max-w-xs p-6 bg-white/5 rounded-2xl border border-white/10"
                                                            initial={{ opacity: 0, x: -50 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: 0.4, type: "spring", bounce: 0.15 }}
                                                        >
                                                            <div className="flex items-center gap-3 mb-4">
                                                                <div className="p-2 bg-gray-500/20 rounded-lg">
                                                                    <Monitor className="w-6 h-6 text-gray-400" />
                                                                </div>
                                                                <h4 className="text-white font-semibold">
                                                                    {pitchSlides[currentSlide].visual.before.label}
                                                                </h4>
                                                            </div>
                                                            <ul className="space-y-2">
                                                                {pitchSlides[currentSlide].visual.before.items.map((item, idx) => (
                                                                    <motion.li
                                                                        key={idx}
                                                                        className="flex items-center gap-2 text-gray-400 text-sm"
                                                                        initial={{ opacity: 0, x: -20 }}
                                                                        animate={{ opacity: 1, x: 0 }}
                                                                        transition={{ delay: 0.5 + idx * 0.1 }}
                                                                    >
                                                                        <span className="w-1.5 h-1.5 rounded-full bg-gray-500" />
                                                                        {item}
                                                                    </motion.li>
                                                                ))}
                                                            </ul>
                                                        </motion.div>

                                                        {/* Arrow */}
                                                        <motion.div
                                                            className="flex-shrink-0"
                                                            initial={{ opacity: 0, scale: 0 }}
                                                            animate={{ opacity: 1, scale: 1 }}
                                                            transition={{ delay: 0.6 }}
                                                        >
                                                            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-violet-500 flex items-center justify-center">
                                                                <ArrowRight className="w-6 h-6 text-white" />
                                                            </div>
                                                        </motion.div>

                                                        {/* After Card */}
                                                        <motion.div
                                                            className="flex-1 max-w-xs p-6 bg-gradient-to-br from-purple-500/10 to-violet-500/10 rounded-2xl border border-purple-500/30"
                                                            initial={{ opacity: 0, x: 50 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: 0.4, type: "spring", bounce: 0.15 }}
                                                        >
                                                            <div className="flex items-center gap-3 mb-4">
                                                                <div className="p-2 bg-purple-500/20 rounded-lg">
                                                                    <Palette className="w-6 h-6 text-purple-400" />
                                                                </div>
                                                                <h4 className="text-white font-semibold">
                                                                    {pitchSlides[currentSlide].visual.after.label}
                                                                </h4>
                                                            </div>
                                                            <ul className="space-y-2">
                                                                {pitchSlides[currentSlide].visual.after.items.map((item, idx) => (
                                                                    <motion.li
                                                                        key={idx}
                                                                        className="flex items-center gap-2 text-purple-300 text-sm"
                                                                        initial={{ opacity: 0, x: 20 }}
                                                                        animate={{ opacity: 1, x: 0 }}
                                                                        transition={{ delay: 0.5 + idx * 0.1 }}
                                                                    >
                                                                        <CheckCircle className="w-4 h-4 text-purple-400" />
                                                                        {item}
                                                                    </motion.li>
                                                                ))}
                                                            </ul>
                                                        </motion.div>
                                                    </div>

                                                    {/* Context Line */}
                                                    <motion.p
                                                        className="text-center text-gray-500 text-sm mt-8 italic"
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                        transition={{ delay: 0.8 }}
                                                    >
                                                        {pitchSlides[currentSlide].contextLine}
                                                    </motion.p>
                                                </div>
                                            )}

                                            {/* Market Slide Layout - Data Visualization */}
                                            {pitchSlides[currentSlide].isMarketSlide && (
                                                <div className="max-w-5xl mx-auto px-2">
                                                    {/* Header */}
                                                    <div className="text-center mb-4">
                                                        <motion.span
                                                            className="inline-block px-3 py-1 mb-2 text-xs font-medium text-cyan-400 bg-cyan-500/10 rounded-full border border-cyan-500/20"
                                                            initial={{ opacity: 0, y: -10 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            transition={{ delay: 0.1 }}
                                                        >
                                                            {pitchSlides[currentSlide].subtitle}
                                                        </motion.span>
                                                        <motion.h3
                                                            className="text-xl md:text-2xl lg:text-3xl font-bold text-white leading-tight mb-2"
                                                            initial={{ opacity: 0, y: 20 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            transition={{ delay: 0.2 }}
                                                        >
                                                            {pitchSlides[currentSlide].title}
                                                        </motion.h3>
                                                        <motion.p
                                                            className="text-sm text-gray-400 max-w-2xl mx-auto"
                                                            initial={{ opacity: 0 }}
                                                            animate={{ opacity: 1 }}
                                                            transition={{ delay: 0.3 }}
                                                        >
                                                            {pitchSlides[currentSlide].description}
                                                        </motion.p>
                                                    </div>

                                                    {/* Charts Grid */}
                                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                                        {/* Line Graph - Market Growth */}
                                                        <motion.div
                                                            className="bg-white/5 rounded-xl p-4 border border-white/10"
                                                            initial={{ opacity: 0, x: -30 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: 0.4, type: "spring", bounce: 0.15 }}
                                                        >
                                                            <h5 className="text-white text-xs font-semibold mb-2">
                                                                {pitchSlides[currentSlide].lineGraph.title}
                                                            </h5>
                                                            <div className="relative h-36">
                                                                <svg viewBox="0 0 400 160" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
                                                                    <defs>
                                                                        <linearGradient id="marketLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                                                            <stop offset="0%" stopColor="#06b6d4" />
                                                                            <stop offset="100%" stopColor="#3b82f6" />
                                                                        </linearGradient>
                                                                        <linearGradient id="marketAreaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                                                            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.3" />
                                                                            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
                                                                        </linearGradient>
                                                                    </defs>

                                                                    {/* Grid Lines */}
                                                                    <line x1="40" y1="20" x2="380" y2="20" stroke="#374151" strokeWidth="0.5" strokeDasharray="2" />
                                                                    <line x1="40" y1="60" x2="380" y2="60" stroke="#374151" strokeWidth="0.5" strokeDasharray="2" />
                                                                    <line x1="40" y1="100" x2="380" y2="100" stroke="#374151" strokeWidth="0.5" strokeDasharray="2" />

                                                                    {/* Area Fill */}
                                                                    <motion.path
                                                                        d="M50,130 L85,122 L120,110 L155,96 L190,80 L225,64 L260,46 L295,28 L330,18 L365,8 L365,130 L50,130 Z"
                                                                        fill="url(#marketAreaGradient)"
                                                                        initial={{ opacity: 0 }}
                                                                        animate={{ opacity: 1 }}
                                                                        transition={{ delay: 0.8, duration: 0.5 }}
                                                                    />

                                                                    {/* Line Path */}
                                                                    <motion.path
                                                                        d="M50,130 L85,122 L120,110 L155,96 L190,80 L225,64 L260,46 L295,28 L330,18 L365,8"
                                                                        fill="none"
                                                                        stroke="url(#marketLineGradient)"
                                                                        strokeWidth="3"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        initial={{ pathLength: 0 }}
                                                                        animate={{ pathLength: 1 }}
                                                                        transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                                                                    />

                                                                    {/* Data Points with Labels */}
                                                                    {[
                                                                        { x: 50, y: 130, year: "2020", label: "Remote learning boom" },
                                                                        { x: 155, y: 96, year: "2023", label: "Creator-led rise" },
                                                                        { x: 295, y: 28, year: "2027", label: "Subscription models" },
                                                                        { x: 365, y: 8, year: "2029" }
                                                                    ].map((point, idx) => (
                                                                        <g key={idx}>
                                                                            <motion.circle
                                                                                cx={point.x}
                                                                                cy={point.y}
                                                                                r="5"
                                                                                fill="#06b6d4"
                                                                                stroke="white"
                                                                                strokeWidth="2"
                                                                                initial={{ scale: 0, opacity: 0 }}
                                                                                animate={{ scale: 1, opacity: 1 }}
                                                                                transition={{ delay: 0.7 + idx * 0.2 }}
                                                                            />
                                                                            {point.label && (
                                                                                <motion.text
                                                                                    x={point.x}
                                                                                    y={point.y - 12}
                                                                                    fill="#9ca3af"
                                                                                    fontSize="8"
                                                                                    textAnchor="middle"
                                                                                    initial={{ opacity: 0, y: 5 }}
                                                                                    animate={{ opacity: 1, y: 0 }}
                                                                                    transition={{ delay: 1 + idx * 0.2 }}
                                                                                >
                                                                                    {point.label}
                                                                                </motion.text>
                                                                            )}
                                                                            <text x={point.x} y="145" fill="#6b7280" fontSize="8" textAnchor="middle">{point.year}</text>
                                                                        </g>
                                                                    ))}
                                                                </svg>
                                                            </div>
                                                            <p className="text-gray-500 text-[10px] mt-1 text-center">
                                                                {pitchSlides[currentSlide].lineGraph.caption}
                                                            </p>
                                                        </motion.div>

                                                        {/* Donut Chart - Platform Dependency */}
                                                        <motion.div
                                                            className="bg-white/5 rounded-xl p-4 border border-white/10"
                                                            initial={{ opacity: 0, x: 30 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: 0.4, type: "spring", bounce: 0.15 }}
                                                        >
                                                            <h5 className="text-white text-xs font-semibold mb-2">
                                                                {pitchSlides[currentSlide].donutChart.title}
                                                            </h5>
                                                            <div className="flex items-center gap-4">
                                                                {/* Donut Chart SVG */}
                                                                <div className="relative w-28 h-28 flex-shrink-0">
                                                                    <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                                                                        {/* 65% - Generic LMS */}
                                                                        <motion.circle
                                                                            cx="18" cy="18" r="15.915"
                                                                            fill="transparent"
                                                                            stroke="#6b7280"
                                                                            strokeWidth="4"
                                                                            strokeDasharray="65 100"
                                                                            strokeDashoffset="0"
                                                                            initial={{ strokeDasharray: "0 100" }}
                                                                            animate={{ strokeDasharray: "65 100" }}
                                                                            transition={{ duration: 1, delay: 0.6 }}
                                                                        />
                                                                        {/* 25% - Semi-custom */}
                                                                        <motion.circle
                                                                            cx="18" cy="18" r="15.915"
                                                                            fill="transparent"
                                                                            stroke="#3b82f6"
                                                                            strokeWidth="4"
                                                                            strokeDasharray="25 100"
                                                                            strokeDashoffset="-65"
                                                                            initial={{ strokeDasharray: "0 100" }}
                                                                            animate={{ strokeDasharray: "25 100" }}
                                                                            transition={{ duration: 1, delay: 0.8 }}
                                                                        />
                                                                        {/* 10% - Fully branded (highlighted) */}
                                                                        <motion.circle
                                                                            cx="18" cy="18" r="15.915"
                                                                            fill="transparent"
                                                                            stroke="url(#donutHighlight)"
                                                                            strokeWidth="5"
                                                                            strokeDasharray="10 100"
                                                                            strokeDashoffset="-90"
                                                                            initial={{ strokeDasharray: "0 100" }}
                                                                            animate={{ strokeDasharray: "10 100" }}
                                                                            transition={{ duration: 1, delay: 1 }}
                                                                        />
                                                                        <defs>
                                                                            <linearGradient id="donutHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
                                                                                <stop offset="0%" stopColor="#8b5cf6" />
                                                                                <stop offset="100%" stopColor="#a855f7" />
                                                                            </linearGradient>
                                                                        </defs>
                                                                    </svg>
                                                                </div>

                                                                {/* Legend */}
                                                                <div className="space-y-2 flex-1">
                                                                    {pitchSlides[currentSlide].donutChart.data.map((item, idx) => (
                                                                        <motion.div
                                                                            key={idx}
                                                                            className="flex items-center gap-2"
                                                                            initial={{ opacity: 0, x: 20 }}
                                                                            animate={{ opacity: 1, x: 0 }}
                                                                            transition={{ delay: 0.8 + idx * 0.15 }}
                                                                        >
                                                                            <div className={`w-2.5 h-2.5 rounded-full ${item.highlight ? 'bg-gradient-to-r from-purple-500 to-violet-500' : idx === 0 ? 'bg-gray-500' : 'bg-blue-500'}`} />
                                                                            <span className="text-gray-300 text-[10px] flex-1">{item.label}</span>
                                                                            <span className={`text-xs font-semibold ${item.highlight ? 'text-purple-400' : 'text-gray-400'}`}>
                                                                                {item.value}%
                                                                            </span>
                                                                        </motion.div>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                            <motion.p
                                                                className="text-cyan-400 text-xs font-medium mt-3 text-center"
                                                                initial={{ opacity: 0 }}
                                                                animate={{ opacity: 1 }}
                                                                transition={{ delay: 1.2 }}
                                                            >
                                                                "{pitchSlides[currentSlide].donutChart.insight}"
                                                            </motion.p>
                                                        </motion.div>
                                                    </div>

                                                    {/* Supporting Insights */}
                                                    <motion.div
                                                        className="flex flex-wrap justify-center gap-3 mt-4"
                                                        initial={{ opacity: 0, y: 20 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: 1.3 }}
                                                    >
                                                        {pitchSlides[currentSlide].insights.map((insight, idx) => (
                                                            <div
                                                                key={idx}
                                                                className="flex items-center gap-1.5 px-3 py-1.5 bg-cyan-500/10 rounded-full border border-cyan-500/20"
                                                            >
                                                                <div className="w-1 h-1 rounded-full bg-cyan-400" />
                                                                <span className="text-cyan-300 text-xs">{insight}</span>
                                                            </div>
                                                        ))}
                                                    </motion.div>

                                                    {/* Goal Line */}
                                                    <motion.p
                                                        className="text-center text-gray-500 text-[10px] mt-3 italic"
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                        transition={{ delay: 1.5 }}
                                                    >
                                                        {pitchSlides[currentSlide].goalLine}
                                                    </motion.p>
                                                </div>
                                            )}

                                            {/* Brand Slide Layout - Bar Chart + Flow + Table */}
                                            {pitchSlides[currentSlide].isBrandSlide && (
                                                <div className="max-w-5xl mx-auto px-2">
                                                    {/* Header */}
                                                    <div className="text-center mb-3">
                                                        <motion.span
                                                            className="inline-block px-3 py-1 mb-2 text-xs font-medium text-emerald-400 bg-emerald-500/10 rounded-full border border-emerald-500/20"
                                                            initial={{ opacity: 0, y: -10 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            transition={{ delay: 0.1 }}
                                                        >
                                                            {pitchSlides[currentSlide].subtitle}
                                                        </motion.span>
                                                        <motion.h3
                                                            className="text-lg md:text-xl lg:text-2xl font-bold text-white leading-tight mb-1"
                                                            initial={{ opacity: 0, y: 20 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            transition={{ delay: 0.2 }}
                                                        >
                                                            {pitchSlides[currentSlide].title}
                                                        </motion.h3>
                                                        <motion.p
                                                            className="text-xs text-gray-400 max-w-xl mx-auto"
                                                            initial={{ opacity: 0 }}
                                                            animate={{ opacity: 1 }}
                                                            transition={{ delay: 0.3 }}
                                                        >
                                                            {pitchSlides[currentSlide].description}
                                                        </motion.p>
                                                    </div>

                                                    {/* Charts Row */}
                                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mb-3">
                                                        {/* Bar Chart - Engagement Comparison */}
                                                        <motion.div
                                                            className="bg-white/5 rounded-xl p-3 border border-white/10"
                                                            initial={{ opacity: 0, x: -30 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: 0.4, type: "spring", bounce: 0.15 }}
                                                        >
                                                            <h5 className="text-white text-xs font-semibold mb-2">
                                                                {pitchSlides[currentSlide].barChart.title}
                                                            </h5>
                                                            <div className="space-y-3">
                                                                {pitchSlides[currentSlide].barChart.data.map((item, idx) => (
                                                                    <div key={idx} className="space-y-1">
                                                                        <span className="text-gray-400 text-[10px]">{item.metric}</span>
                                                                        <div className="flex gap-2 items-center">
                                                                            {/* Generic Bar */}
                                                                            <div className="flex-1 h-5 bg-gray-800 rounded-full overflow-hidden relative">
                                                                                <motion.div
                                                                                    className="h-full bg-gradient-to-r from-gray-500 to-gray-600 rounded-full"
                                                                                    initial={{ width: 0 }}
                                                                                    animate={{ width: `${item.generic}%` }}
                                                                                    transition={{ duration: 0.8, delay: 0.5 + idx * 0.2 }}
                                                                                />
                                                                                <motion.span
                                                                                    className="absolute right-2 top-1/2 -translate-y-1/2 text-[9px] text-gray-300 font-medium"
                                                                                    initial={{ opacity: 0 }}
                                                                                    animate={{ opacity: 1 }}
                                                                                    transition={{ delay: 1 + idx * 0.2 }}
                                                                                >
                                                                                    {item.generic}%
                                                                                </motion.span>
                                                                            </div>
                                                                            {/* Branded Bar */}
                                                                            <div className="flex-1 h-5 bg-gray-800 rounded-full overflow-hidden relative">
                                                                                <motion.div
                                                                                    className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"
                                                                                    style={{ boxShadow: '0 0 15px rgba(16, 185, 129, 0.4)' }}
                                                                                    initial={{ width: 0 }}
                                                                                    animate={{ width: `${item.branded}%` }}
                                                                                    transition={{ duration: 1, delay: 0.7 + idx * 0.2 }}
                                                                                />
                                                                                <motion.span
                                                                                    className="absolute right-2 top-1/2 -translate-y-1/2 text-[9px] text-white font-semibold"
                                                                                    initial={{ opacity: 0 }}
                                                                                    animate={{ opacity: 1 }}
                                                                                    transition={{ delay: 1.2 + idx * 0.2 }}
                                                                                >
                                                                                    {item.branded}%
                                                                                </motion.span>
                                                                            </div>
                                                                        </div>
                                                                        <div className="flex justify-between text-[8px]">
                                                                            <span className="text-gray-500">Generic LMS</span>
                                                                            <span className="text-emerald-400">Branded LMS</span>
                                                                        </div>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                            <motion.p
                                                                className="text-emerald-400 text-[9px] mt-2 text-center font-medium"
                                                                initial={{ opacity: 0 }}
                                                                animate={{ opacity: 1 }}
                                                                transition={{ delay: 1.5 }}
                                                            >
                                                                {pitchSlides[currentSlide].barChart.insight}
                                                            </motion.p>
                                                        </motion.div>

                                                        {/* Flow Diagram - Revenue Retention */}
                                                        <motion.div
                                                            className="bg-white/5 rounded-xl p-3 border border-white/10"
                                                            initial={{ opacity: 0, x: 30 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: 0.4, type: "spring", bounce: 0.15 }}
                                                        >
                                                            <h5 className="text-white text-xs font-semibold mb-2">
                                                                {pitchSlides[currentSlide].flowDiagram.title}
                                                            </h5>
                                                            <div className="space-y-2">
                                                                {pitchSlides[currentSlide].flowDiagram.flows.map((flow, fIdx) => (
                                                                    <div key={fIdx} className="space-y-1">
                                                                        <span className={`text-[9px] font-medium ${flow.color === 'emerald' ? 'text-emerald-400' : 'text-gray-400'}`}>
                                                                            {flow.label}
                                                                        </span>
                                                                        <div className="flex items-center gap-1">
                                                                            {flow.steps.map((step, sIdx) => (
                                                                                <React.Fragment key={sIdx}>
                                                                                    <motion.div
                                                                                        className={`flex-1 py-1 px-1 text-center text-[8px] rounded ${flow.color === 'emerald'
                                                                                            ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                                                                                            : 'bg-gray-700/50 text-gray-400 border border-gray-600/30'
                                                                                            }`}
                                                                                        initial={{ opacity: 0, scale: 0.8 }}
                                                                                        animate={{ opacity: 1, scale: 1 }}
                                                                                        transition={{ delay: 0.6 + fIdx * 0.3 + sIdx * 0.1 }}
                                                                                    >
                                                                                        <div>{step}</div>
                                                                                        <div className={`text-[7px] font-semibold ${flow.color === 'emerald' ? 'text-emerald-400' : 'text-gray-500'}`}>
                                                                                            {flow.values[sIdx]}%
                                                                                        </div>
                                                                                    </motion.div>
                                                                                    {sIdx < flow.steps.length - 1 && (
                                                                                        <motion.div
                                                                                            className={`text-[10px] ${flow.color === 'emerald' ? 'text-emerald-500' : 'text-gray-600'}`}
                                                                                            initial={{ opacity: 0 }}
                                                                                            animate={{ opacity: 1 }}
                                                                                            transition={{ delay: 0.8 + fIdx * 0.3 + sIdx * 0.1 }}
                                                                                        >
                                                                                            →
                                                                                        </motion.div>
                                                                                    )}
                                                                                </React.Fragment>
                                                                            ))}
                                                                        </div>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                            <motion.p
                                                                className="text-gray-500 text-[9px] mt-2 text-center italic"
                                                                initial={{ opacity: 0 }}
                                                                animate={{ opacity: 1 }}
                                                                transition={{ delay: 1.5 }}
                                                            >
                                                                {pitchSlides[currentSlide].flowDiagram.caption}
                                                            </motion.p>
                                                        </motion.div>
                                                    </div>

                                                    {/* Comparison Table */}
                                                    <motion.div
                                                        className="bg-white/5 rounded-xl p-3 border border-white/10"
                                                        initial={{ opacity: 0, y: 20 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: 1.2 }}
                                                    >
                                                        <table className="w-full text-[10px]">
                                                            <thead>
                                                                <tr className="border-b border-white/10">
                                                                    {pitchSlides[currentSlide].comparisonTable.headers.map((header, idx) => (
                                                                        <th key={idx} className={`py-1 px-2 text-left font-semibold ${idx === 0 ? 'text-gray-400' : idx === 1 ? 'text-gray-500' : 'text-emerald-400'}`}>
                                                                            {header}
                                                                        </th>
                                                                    ))}
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {pitchSlides[currentSlide].comparisonTable.rows.map((row, idx) => (
                                                                    <motion.tr
                                                                        key={idx}
                                                                        className="border-b border-white/5"
                                                                        initial={{ opacity: 0, x: -10 }}
                                                                        animate={{ opacity: 1, x: 0 }}
                                                                        transition={{ delay: 1.3 + idx * 0.1 }}
                                                                    >
                                                                        <td className="py-1 px-2 text-gray-300">{row.aspect}</td>
                                                                        <td className="py-1 px-2 text-gray-500">{row.generic}</td>
                                                                        <td className="py-1 px-2 text-emerald-300 font-medium">{row.custom}</td>
                                                                    </motion.tr>
                                                                ))}
                                                            </tbody>
                                                        </table>
                                                    </motion.div>

                                                    {/* Goal Line */}
                                                    <motion.p
                                                        className="text-center text-gray-500 text-[10px] mt-2 italic"
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                        transition={{ delay: 1.8 }}
                                                    >
                                                        {pitchSlides[currentSlide].goalLine}
                                                    </motion.p>
                                                </div>
                                            )}

                                            {/* Solution Slide Layout - Icon Cards + Modular Blocks */}
                                            {pitchSlides[currentSlide].isSolutionSlide && (
                                                <div className="max-w-5xl mx-auto px-2">
                                                    {/* Header */}
                                                    <div className="text-center mb-4">
                                                        <motion.span
                                                            className="inline-block px-3 py-1 mb-2 text-xs font-medium text-violet-400 bg-violet-500/10 rounded-full border border-violet-500/20"
                                                            initial={{ opacity: 0, y: -10 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            transition={{ delay: 0.1 }}
                                                        >
                                                            {pitchSlides[currentSlide].subtitle}
                                                        </motion.span>
                                                        <motion.h3
                                                            className="text-xl md:text-2xl lg:text-3xl font-bold text-white leading-tight mb-2"
                                                            initial={{ opacity: 0, y: 20 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            transition={{ delay: 0.2 }}
                                                        >
                                                            {pitchSlides[currentSlide].title}
                                                        </motion.h3>
                                                        <motion.p
                                                            className="text-sm text-gray-400 max-w-xl mx-auto"
                                                            initial={{ opacity: 0 }}
                                                            animate={{ opacity: 1 }}
                                                            transition={{ delay: 0.3 }}
                                                        >
                                                            {pitchSlides[currentSlide].description}
                                                        </motion.p>
                                                    </div>

                                                    {/* Unlock Cards Grid */}
                                                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
                                                        {pitchSlides[currentSlide].unlocks.map((item, idx) => {
                                                            const IconComponent = item.icon === 'Building2' ? Building2
                                                                : item.icon === 'Layers' ? Layers
                                                                    : item.icon === 'Users' ? Users
                                                                        : Server;
                                                            return (
                                                                <motion.div
                                                                    key={idx}
                                                                    className="bg-gradient-to-br from-violet-500/10 to-purple-500/10 rounded-xl p-3 border border-violet-500/20 text-center"
                                                                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                                                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                                                    transition={{
                                                                        delay: 0.4 + idx * 0.15,
                                                                        type: "spring",
                                                                        bounce: 0.2
                                                                    }}
                                                                >
                                                                    <div className="w-10 h-10 mx-auto mb-2 rounded-xl bg-violet-500/20 flex items-center justify-center">
                                                                        <IconComponent className="w-5 h-5 text-violet-400" />
                                                                    </div>
                                                                    <h6 className="text-white text-xs font-semibold mb-1">{item.label}</h6>
                                                                    <p className="text-gray-400 text-[9px] leading-tight">{item.description}</p>
                                                                </motion.div>
                                                            );
                                                        })}
                                                    </div>

                                                    {/* Modular Blocks Visual */}
                                                    <motion.div
                                                        className="bg-white/5 rounded-xl p-4 border border-white/10"
                                                        initial={{ opacity: 0, y: 20 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: 1 }}
                                                    >
                                                        <h5 className="text-white text-xs font-semibold mb-3 text-center">
                                                            Your Unified Platform
                                                        </h5>
                                                        <div className="flex flex-wrap justify-center gap-2">
                                                            {pitchSlides[currentSlide].visualBlocks.map((block, idx) => {
                                                                const colorClasses = {
                                                                    purple: 'from-purple-500/30 to-purple-600/30 border-purple-500/40',
                                                                    violet: 'from-violet-500/30 to-violet-600/30 border-violet-500/40',
                                                                    indigo: 'from-indigo-500/30 to-indigo-600/30 border-indigo-500/40',
                                                                    fuchsia: 'from-fuchsia-500/30 to-fuchsia-600/30 border-fuchsia-500/40',
                                                                    pink: 'from-pink-500/30 to-pink-600/30 border-pink-500/40',
                                                                    rose: 'from-rose-500/30 to-rose-600/30 border-rose-500/40'
                                                                };
                                                                return (
                                                                    <motion.div
                                                                        key={idx}
                                                                        className={`px-4 py-2 rounded-lg bg-gradient-to-br ${colorClasses[block.color]} border backdrop-blur-sm`}
                                                                        initial={{ opacity: 0, scale: 0, rotate: -10 }}
                                                                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                                                        transition={{
                                                                            delay: 1.2 + idx * 0.1,
                                                                            type: "spring",
                                                                            bounce: 0.3
                                                                        }}
                                                                        whileHover={{ scale: 1.05, y: -2 }}
                                                                    >
                                                                        <span className="text-white text-xs font-medium">{block.label}</span>
                                                                    </motion.div>
                                                                );
                                                            })}
                                                        </div>
                                                        {/* Center Platform Icon */}
                                                        <motion.div
                                                            className="flex justify-center mt-3"
                                                            initial={{ opacity: 0, scale: 0 }}
                                                            animate={{ opacity: 1, scale: 1 }}
                                                            transition={{ delay: 1.8, type: "spring", bounce: 0.4 }}
                                                        >
                                                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-lg shadow-violet-500/30">
                                                                <Sparkles className="w-6 h-6 text-white" />
                                                            </div>
                                                        </motion.div>
                                                        <motion.p
                                                            className="text-violet-300 text-[10px] text-center mt-2 font-medium"
                                                            initial={{ opacity: 0 }}
                                                            animate={{ opacity: 1 }}
                                                            transition={{ delay: 2 }}
                                                        >
                                                            All modules connected. One branded experience.
                                                        </motion.p>
                                                    </motion.div>

                                                    {/* Goal Line */}
                                                    <motion.p
                                                        className="text-center text-gray-500 text-[10px] mt-3 italic"
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                        transition={{ delay: 2.2 }}
                                                    >
                                                        {pitchSlides[currentSlide].goalLine}
                                                    </motion.p>
                                                </div>
                                            )}

                                            {/* Why Us Slide Layout - Differentiators + Template vs Product */}
                                            {pitchSlides[currentSlide].isWhyUsSlide && (
                                                <div className="max-w-5xl mx-auto px-2">
                                                    {/* Header */}
                                                    <div className="text-center mb-4">
                                                        <motion.span
                                                            className="inline-block px-3 py-1 mb-2 text-xs font-medium text-orange-400 bg-orange-500/10 rounded-full border border-orange-500/20"
                                                            initial={{ opacity: 0, y: -10 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            transition={{ delay: 0.1 }}
                                                        >
                                                            {pitchSlides[currentSlide].subtitle}
                                                        </motion.span>
                                                        <motion.h3
                                                            className="text-xl md:text-2xl lg:text-3xl font-bold text-white leading-tight mb-2"
                                                            initial={{ opacity: 0, y: 20 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            transition={{ delay: 0.2 }}
                                                        >
                                                            {pitchSlides[currentSlide].title}
                                                        </motion.h3>
                                                        <motion.p
                                                            className="text-sm text-gray-400 max-w-xl mx-auto"
                                                            initial={{ opacity: 0 }}
                                                            animate={{ opacity: 1 }}
                                                            transition={{ delay: 0.3 }}
                                                        >
                                                            {pitchSlides[currentSlide].description}
                                                        </motion.p>
                                                    </div>

                                                    {/* Differentiator Cards Grid */}
                                                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
                                                        {pitchSlides[currentSlide].differentiators.map((item, idx) => {
                                                            const IconComponent = item.icon === 'Code2' ? Code2
                                                                : item.icon === 'Paintbrush' ? Paintbrush
                                                                    : item.icon === 'Zap' ? Zap
                                                                        : Brain;
                                                            return (
                                                                <motion.div
                                                                    key={idx}
                                                                    className="bg-gradient-to-br from-orange-500/10 to-amber-500/10 rounded-xl p-3 border border-orange-500/20 text-center"
                                                                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                                                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                                                    transition={{
                                                                        delay: 0.4 + idx * 0.15,
                                                                        type: "spring",
                                                                        bounce: 0.2
                                                                    }}
                                                                >
                                                                    <div className="w-10 h-10 mx-auto mb-2 rounded-xl bg-orange-500/20 flex items-center justify-center">
                                                                        <IconComponent className="w-5 h-5 text-orange-400" />
                                                                    </div>
                                                                    <h6 className="text-white text-xs font-semibold mb-1">{item.label}</h6>
                                                                    <p className="text-gray-400 text-[9px] leading-tight">{item.description}</p>
                                                                </motion.div>
                                                            );
                                                        })}
                                                    </div>

                                                    {/* Template vs Product Architecture Visual */}
                                                    <motion.div
                                                        className="bg-white/5 rounded-xl p-4 border border-white/10"
                                                        initial={{ opacity: 0, y: 20 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: 1 }}
                                                    >
                                                        <div className="flex items-center justify-center gap-6">
                                                            {/* Template - Crossed Out */}
                                                            <motion.div
                                                                className="relative"
                                                                initial={{ opacity: 0, x: -30 }}
                                                                animate={{ opacity: 1, x: 0 }}
                                                                transition={{ delay: 1.2 }}
                                                            >
                                                                <div className="px-6 py-3 bg-gray-700/50 rounded-lg border border-gray-600/30 relative">
                                                                    <span className="text-gray-400 text-sm font-medium">
                                                                        {pitchSlides[currentSlide].visual.crossed}
                                                                    </span>
                                                                    {/* Strikethrough line */}
                                                                    <motion.div
                                                                        className="absolute inset-0 flex items-center justify-center"
                                                                        initial={{ scaleX: 0 }}
                                                                        animate={{ scaleX: 1 }}
                                                                        transition={{ delay: 1.5, duration: 0.4 }}
                                                                    >
                                                                        <div className="w-full h-0.5 bg-red-500/70 rotate-[-6deg]" />
                                                                    </motion.div>
                                                                </div>
                                                            </motion.div>

                                                            {/* Arrow */}
                                                            <motion.div
                                                                initial={{ opacity: 0, scale: 0 }}
                                                                animate={{ opacity: 1, scale: 1 }}
                                                                transition={{ delay: 1.7 }}
                                                            >
                                                                <ArrowRight className="w-6 h-6 text-orange-400" />
                                                            </motion.div>

                                                            {/* Product Architecture - Highlighted */}
                                                            <motion.div
                                                                className="px-6 py-3 bg-gradient-to-r from-orange-500/20 to-amber-500/20 rounded-lg border border-orange-500/40 relative overflow-hidden"
                                                                initial={{ opacity: 0, x: 30 }}
                                                                animate={{ opacity: 1, x: 0 }}
                                                                transition={{ delay: 1.2 }}
                                                            >
                                                                <motion.div
                                                                    className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent"
                                                                    initial={{ x: '-100%' }}
                                                                    animate={{ x: '100%' }}
                                                                    transition={{ delay: 1.9, duration: 0.8 }}
                                                                />
                                                                <span className="text-orange-300 text-sm font-semibold relative z-10">
                                                                    {pitchSlides[currentSlide].visual.highlighted}
                                                                </span>
                                                            </motion.div>
                                                        </div>

                                                        <motion.p
                                                            className="text-orange-400 text-[10px] text-center mt-3 font-medium"
                                                            initial={{ opacity: 0 }}
                                                            animate={{ opacity: 1 }}
                                                            transition={{ delay: 2.2 }}
                                                        >
                                                            We build products, not pages.
                                                        </motion.p>
                                                    </motion.div>

                                                    {/* Goal Line */}
                                                    <motion.p
                                                        className="text-center text-gray-500 text-[10px] mt-3 italic"
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                        transition={{ delay: 2.4 }}
                                                    >
                                                        {pitchSlides[currentSlide].goalLine}
                                                    </motion.p>
                                                </div>
                                            )}

                                            {/* Timeline Slide Layout - 24-Day Sprint */}
                                            {pitchSlides[currentSlide].isTimelineSlide && (
                                                <div className="max-w-5xl mx-auto px-4">
                                                    {/* Header */}
                                                    <div className="text-center mb-6">
                                                        <motion.span
                                                            className="inline-block px-4 py-1.5 mb-3 text-sm font-medium text-sky-400 bg-sky-500/10 rounded-full border border-sky-500/20"
                                                            initial={{ opacity: 0, y: -10 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            transition={{ delay: 0.1 }}
                                                        >
                                                            {pitchSlides[currentSlide].subtitle}
                                                        </motion.span>
                                                        <motion.h3
                                                            className="text-2xl md:text-3xl font-bold text-white leading-tight mb-2"
                                                            initial={{ opacity: 0, y: 20 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            transition={{ delay: 0.2 }}
                                                        >
                                                            {pitchSlides[currentSlide].title}
                                                        </motion.h3>
                                                        <motion.p
                                                            className="text-sm text-gray-400 max-w-xl mx-auto"
                                                            initial={{ opacity: 0 }}
                                                            animate={{ opacity: 1 }}
                                                            transition={{ delay: 0.3 }}
                                                        >
                                                            {pitchSlides[currentSlide].description}
                                                        </motion.p>
                                                    </div>

                                                    {/* Horizontal Timeline Bar */}
                                                    <motion.div
                                                        className="mb-6"
                                                        initial={{ opacity: 0, y: 20 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: 0.4 }}
                                                    >
                                                        <div className="h-4 bg-gray-800 rounded-full overflow-hidden flex shadow-inner">
                                                            {pitchSlides[currentSlide].phases.map((phase, idx) => {
                                                                const widthPercent = (phase.duration / 24) * 100;
                                                                const colorClasses = {
                                                                    sky: 'from-sky-400 to-sky-600',
                                                                    violet: 'from-violet-400 to-violet-600',
                                                                    emerald: 'from-emerald-400 to-emerald-600',
                                                                    orange: 'from-orange-400 to-orange-600'
                                                                };
                                                                return (
                                                                    <motion.div
                                                                        key={idx}
                                                                        className={`h-full bg-gradient-to-r ${colorClasses[phase.color]} relative`}
                                                                        style={{ width: `${widthPercent}%` }}
                                                                        initial={{ scaleX: 0 }}
                                                                        animate={{ scaleX: 1 }}
                                                                        transition={{
                                                                            duration: 0.5,
                                                                            delay: 0.5 + idx * 0.25,
                                                                            ease: "easeOut"
                                                                        }}
                                                                    />
                                                                );
                                                            })}
                                                        </div>
                                                        <div className="flex justify-between mt-2 text-xs text-gray-400 font-medium">
                                                            <span>Day 1</span>
                                                            <span>Day 24</span>
                                                        </div>
                                                    </motion.div>

                                                    {/* Phase Cards - Simplified */}
                                                    <div className="grid grid-cols-4 gap-3 mb-5">
                                                        {pitchSlides[currentSlide].phases.map((phase, idx) => {
                                                            const IconComponent = phase.icon === 'FileText' ? FileText
                                                                : phase.icon === 'Palette' ? Palette
                                                                    : phase.icon === 'Code2' ? Code2
                                                                        : Rocket;
                                                            const colorClasses = {
                                                                sky: { bg: 'from-sky-500/20 to-sky-600/10', border: 'border-sky-500/40', text: 'text-sky-400' },
                                                                violet: { bg: 'from-violet-500/20 to-violet-600/10', border: 'border-violet-500/40', text: 'text-violet-400' },
                                                                emerald: { bg: 'from-emerald-500/20 to-emerald-600/10', border: 'border-emerald-500/40', text: 'text-emerald-400' },
                                                                orange: { bg: 'from-orange-500/20 to-orange-600/10', border: 'border-orange-500/40', text: 'text-orange-400' }
                                                            };
                                                            const colors = colorClasses[phase.color];
                                                            return (
                                                                <motion.div
                                                                    key={idx}
                                                                    className={`bg-gradient-to-br ${colors.bg} rounded-xl p-4 border ${colors.border} text-center`}
                                                                    initial={{ opacity: 0, y: 30 }}
                                                                    animate={{ opacity: 1, y: 0 }}
                                                                    transition={{ delay: 0.7 + idx * 0.15, type: "spring", bounce: 0.2 }}
                                                                >
                                                                    <div className={`w-10 h-10 mx-auto mb-2 rounded-lg ${colors.text.replace('text-', 'bg-')}/20 flex items-center justify-center`}>
                                                                        <IconComponent className={`w-5 h-5 ${colors.text}`} />
                                                                    </div>
                                                                    <div className={`text-xs font-bold ${colors.text} mb-1`}>{phase.days}</div>
                                                                    <h6 className="text-white text-sm font-semibold leading-tight">{phase.name}</h6>
                                                                </motion.div>
                                                            );
                                                        })}
                                                    </div>

                                                    {/* Why It Works + Trust Line */}
                                                    <motion.div
                                                        className="text-center"
                                                        initial={{ opacity: 0, y: 10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: 1.4 }}
                                                    >
                                                        <div className="flex flex-wrap justify-center gap-3 mb-3">
                                                            {pitchSlides[currentSlide].whyItWorks.map((item, idx) => (
                                                                <div
                                                                    key={idx}
                                                                    className="flex items-center gap-1.5 px-3 py-1.5 bg-sky-500/10 rounded-full border border-sky-500/30"
                                                                >
                                                                    <CheckCircle className="w-3 h-3 text-sky-400" />
                                                                    <span className="text-sky-300 text-xs">{item}</span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                        <p className="text-sky-400 text-sm font-medium">
                                                            {pitchSlides[currentSlide].trustLine}
                                                        </p>
                                                    </motion.div>
                                                </div>
                                            )}
                                        </motion.div>
                                    </AnimatePresence>
                                </div>

                                {/* Navigation Controls */}
                                <div className="absolute bottom-6 left-0 right-0 flex items-center justify-center gap-4">
                                    {/* Prev Button */}
                                    <button
                                        onClick={prevSlide}
                                        disabled={pitchSlides.length <= 1}
                                        className="p-3 bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed rounded-full transition-all duration-300 group"
                                    >
                                        <ChevronLeft className="w-5 h-5 text-white group-hover:-translate-x-0.5 transition-transform" />
                                    </button>

                                    {/* Dot Indicators */}
                                    <div className="flex items-center gap-2">
                                        {pitchSlides.map((_, index) => (
                                            <button
                                                key={index}
                                                onClick={() => goToSlide(index)}
                                                className={`w-2 h-2 rounded-full transition-all duration-300 ${currentSlide === index
                                                    ? 'bg-purple-500 w-6'
                                                    : 'bg-white/30 hover:bg-white/50'
                                                    }`}
                                            />
                                        ))}
                                    </div>

                                    {/* Next Button */}
                                    <button
                                        onClick={nextSlide}
                                        disabled={pitchSlides.length <= 1}
                                        className="p-3 bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed rounded-full transition-all duration-300 group"
                                    >
                                        <ChevronRight className="w-5 h-5 text-white group-hover:translate-x-0.5 transition-transform" />
                                    </button>
                                </div>

                                {/* Slide Counter */}
                                <div className="absolute bottom-6 right-6 text-gray-500 text-sm">
                                    {currentSlide + 1} / {pitchSlides.length}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default CoursePlatformHero;
