import React from 'react';
import { motion } from 'framer-motion';
import GlareHover from './GlareHover';

const caseStudies = [
    {
        id: '01',
        title: 'AI for Lead Qualification - SaaS Company',
        description: 'AI-driven lead scoring',
        highlight: 'boosted conversions by 40%',
        restDescription: 'for a SaaS company, reducing wasted time and doubling recurring revenue.',
        tags: ['Startup', 'E-commerce'],
        image: '/case-study-1.jpg',
        bgColor: 'from-black via-gray-900 to-white/10'
    },
    {
        id: '02',
        title: 'Custom AI Chatbot for Healthcare Provider',
        description: 'Intelligent chatbot integration',
        highlight: 'reduced response time by 60%',
        restDescription: 'for a healthcare provider, improving patient satisfaction and operational efficiency.',
        tags: ['Healthcare', 'Enterprise'],
        image: '/case-study-2.jpg',
        bgColor: 'from-gray-900 via-black to-white/5'
    },
    {
        id: '03',
        title: 'E-learning Platform with AI Recommendations',
        description: 'Personalized learning paths',
        highlight: 'increased engagement by 75%',
        restDescription: 'through AI-powered course recommendations and adaptive content delivery.',
        tags: ['EdTech', 'SaaS'],
        image: '/case-study-3.jpg',
        bgColor: 'from-white/5 via-black to-gray-900'
    },
    {
        id: '04',
        title: 'AI-Powered Inventory Management System',
        description: 'Smart inventory optimization',
        highlight: 'reduced costs by 35%',
        restDescription: 'for a retail chain, minimizing stockouts and overstock situations.',
        tags: ['Retail', 'Logistics'],
        image: '/case-study-4.jpg',
        bgColor: 'from-black via-white/10 to-gray-900'
    },
    {
        id: '05',
        title: 'AI Content Generation Platform for Marketing',
        description: 'Automated content creation',
        highlight: 'saved 50 hours per week',
        restDescription: 'for marketing teams, generating high-quality copy and social media content.',
        tags: ['Marketing', 'B2B'],
        image: '/case-study-5.jpg',
        bgColor: 'from-gray-900 via-black to-white/8'
    }
];

const CaseStudyCards = () => {
    return (
        <section className="py-24 relative overflow-visible -mt-32" style={{
            background: 'linear-gradient(to bottom, transparent 0%, #000000 15%, #000000 100%)'
        }}>
            {/* Gradient Overlay for smooth blend */}
            <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent via-black/50 to-black pointer-events-none z-0" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="space-y-8">
                    {caseStudies.map((study, index) => (
                        <motion.div
                            key={study.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group relative"
                        >
                            {/* Card Container with GlareHover */}
                            <GlareHover
                                width="100%"
                                height="100%"
                                background="transparent"
                                borderRadius="24px"
                                borderColor="transparent"
                                glareColor="#a855f7"
                                glareOpacity={0.3}
                                glareAngle={-45}
                                glareSize={300}
                                transitionDuration={800}
                                playOnce={false}
                                className="border-0"
                                style={{
                                    border: 'none'
                                }}
                            >
                                <div className={`relative h-full rounded-3xl border border-purple-500/30 bg-gradient-to-br ${study.bgColor} overflow-hidden hover:border-purple-500/50 transition-all duration-500`}>
                                    {/* Glow Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-violet-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    <div className="relative p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center">
                                        {/* Left Content */}
                                        <div className="space-y-6">
                                            {/* Number Badge */}
                                            <div className="inline-block">
                                                <span className="text-sm font-mono text-white/40 border border-white/10 px-3 py-1 rounded-full">
                                                    [{study.id}]
                                                </span>
                                            </div>

                                            {/* Title */}
                                            <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                                                {study.title}
                                            </h3>

                                            {/* Description */}
                                            <p className="text-white/70 text-lg leading-relaxed">
                                                {study.description}{' '}
                                                <span className="text-white font-semibold">
                                                    {study.highlight}
                                                </span>{' '}
                                                {study.restDescription}
                                            </p>

                                            {/* Tags */}
                                            <div className="flex flex-wrap gap-3">
                                                {study.tags.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="px-4 py-2 rounded-full border border-white/20 text-white/80 text-sm font-medium bg-white/5"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Right Image */}
                                        <div className="relative">
                                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-purple-900/20 to-violet-900/20 border border-white/10 shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500">
                                                {/* Placeholder for laptop mockup */}
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <div className="text-center space-y-4">
                                                        <div className="w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center">
                                                            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                            </svg>
                                                        </div>
                                                        <p className="text-white/60 text-sm">Project Screenshot</p>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Decorative glow */}
                                            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-violet-600/20 blur-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        </div>
                                    </div>
                                </div>
                            </GlareHover>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CaseStudyCards;
