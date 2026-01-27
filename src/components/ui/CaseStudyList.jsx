import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const categories = [
    "All Industries",
    "AI & Automation",
    "VFX & Animation",
    "Wellness & Health",
    "Agriculture",
    "Education"
];

const caseStudies = [
    {
        id: '01',
        company: 'Pixel Arts VFX',
        title: 'The Magic Behind the Screen',
        description: 'A compact digital lab specializing in high-end VFX services including Compositing, Matchmove, and Rotoscope for film and digital media.',
        tags: ['VFX', 'Animation', 'Post-Production'],
        image: '/vfx_studio_background.png',
        category: 'VFX & Animation'
    },
    {
        id: '02',
        company: 'Jayasim Labs',
        title: 'AI Masterclass & Digital Education',
        description: 'Transforming business strategies with Generative AI and automation techniques that boost productivity and deliver game-changing ROI.',
        tags: ['AI', 'EdTech', 'Automation'],
        image: '/elearning_bg.png',
        category: 'Education'
    },
    {
        id: '03',
        company: 'Atma Yogalaya',
        title: 'Modern Transformation through Yoga',
        description: 'Expert-led Vinyasa and Hatha yoga programs designed for physical strength, mental clarity, and holistic well-being.',
        tags: ['Wellness', 'Meditation', 'Health'],
        image: '/yoga_bg.png',
        category: 'Wellness & Health'
    },
    {
        id: '04',
        company: 'Chase Away',
        title: 'Natural Canine Wellness',
        description: '100% natural, chemical-free tick and insect repellent solutions ensuring safety and health for pets and their owners.',
        tags: ['Pet Health', 'Eco-Friendly', 'Product'],
        image: '/dog_running_bg.png',
        category: 'Wellness & Health'
    },
    {
        id: '05',
        company: 'Siruvani Estates',
        title: 'Sustainable Coffee & Tea',
        description: 'Boutique estate producing premium Arabica coffee and hand-picked tea with deep respect for the environment and tribal communities.',
        tags: ['Agriculture', 'Sustainable', 'FMCG'],
        image: '/coffee_drinking_bg.png',
        category: 'Agriculture'
    },
    {
        id: '06',
        company: 'Jayasim AI Advisory',
        title: 'Strategic AI Implementation',
        description: 'Digital transformation and strategic AI consulting for global enterprises to drive innovation and operational efficiency.',
        tags: ['AI Strategy', 'Consulting', 'Enterprise'],
        image: '/jayasim_text_bg.png',
        category: 'AI & Automation'
    }
];

const CaseStudyList = () => {
    const [activeId, setActiveId] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState("All Industries");

    const filteredStudies = selectedCategory === "All Industries"
        ? caseStudies
        : caseStudies.filter(study => study.category === selectedCategory);

    return (
        <section className="bg-black pt-48 pb-24 min-h-screen">
            <div className="container mx-auto px-6">

                {/* Header */}
                <div className="mb-24">
                    <h1 className="text-5xl md:text-7xl font-normal text-white mb-16 tracking-tight">
                        Building with the world’s best
                    </h1>

                    {/* Filters */}
                    <div className="flex flex-wrap gap-2">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-5 py-2 rounded-full text-sm transition-colors duration-300 ${selectedCategory === cat
                                    ? 'bg-zinc-800 text-white'
                                    : 'text-zinc-500 hover:text-white'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* List */}
                <div className="space-y-0">
                    {filteredStudies.map((study) => (
                        <motion.div
                            key={study.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            onMouseEnter={() => setActiveId(study.id)}
                            onMouseLeave={() => setActiveId(null)}
                            className="group border-t border-white/10 py-12 transition-colors duration-300"
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                                {/* Company Name / Logo Area (Cols 1-2) */}
                                <div className="lg:col-span-2">
                                    <h3 className="text-2xl font-bold text-white">{study.company}</h3>
                                </div>

                                {/* Description (Cols 3-6) */}
                                <div className="lg:col-span-4">
                                    <p className="text-lg text-zinc-500 leading-relaxed group-hover:text-zinc-400 transition-colors duration-300">
                                        <span className="text-zinc-300 block mb-1">{study.title}</span>
                                        {study.description}
                                    </p>
                                </div>

                                {/* Hover Image Area (Cols 7-9) */}
                                <div className="lg:col-span-3 flex justify-center items-center h-auto lg:h-24 relative">
                                    <AnimatePresence>
                                        {activeId === study.id && (
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.95 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0.95 }}
                                                transition={{ duration: 0.2 }}
                                                className="relative lg:absolute w-full lg:w-96 h-auto aspect-video rounded-lg overflow-hidden shadow-2xl border border-white/10 z-10 bg-neutral-900"
                                            >
                                                <img
                                                    src={study.image}
                                                    alt={study.company}
                                                    className="w-full h-full object-cover"
                                                    onError={(e) => { e.target.style.display = 'none' }}
                                                />
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                {/* Tags (Col 10-11) */}
                                <div className="lg:col-span-1 flex flex-col gap-2 items-start justify-center">
                                    {study.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 border border-white/20 rounded-full text-[10px] uppercase tracking-wider font-medium text-white/70">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Button (Col 12) */}
                                <div className="lg:col-span-2 flex justify-end">
                                    <motion.button
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{
                                            opacity: activeId === study.id ? 1 : 0,
                                            x: activeId === study.id ? 0 : -10
                                        }}
                                        className="flex items-center gap-2 text-white text-sm font-medium group/btn border border-white/20 px-4 py-2 rounded-full hover:bg-white hover:text-black transition-all"
                                    >
                                        See Case Study
                                        <ArrowRight className="w-4 h-4" />
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                    {/* Bottom Border for last item */}
                    <div className="border-t border-white/10" />
                </div>
            </div>
        </section>
    );
};

export default CaseStudyList;
