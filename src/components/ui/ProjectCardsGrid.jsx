import React from 'react';
import { motion } from 'framer-motion';

const projects = [
    {
        id: 1,
        name: 'Way Fields',
        year: '2024',
        category: 'Technology',
        image: '/project-1.jpg',
        bgColor: 'from-gray-900 to-black'
    },
    {
        id: 2,
        name: 'Raven Studio',
        year: '2025',
        category: 'Business',
        image: '/project-2.jpg',
        bgColor: 'from-gray-800 to-gray-900'
    },
    {
        id: 3,
        name: 'Nexus Design',
        year: '2024',
        category: 'Creative',
        image: '/project-3.jpg',
        bgColor: 'from-black to-gray-900'
    },
    {
        id: 4,
        name: 'Apex Solutions',
        year: '2025',
        category: 'Enterprise',
        image: '/project-4.jpg',
        bgColor: 'from-gray-900 to-black'
    }
];

const ProjectCardsGrid = () => {
    return (
        <section className="py-24 relative overflow-hidden -mt-32" style={{
            background: 'linear-gradient(to bottom, transparent 0%, #000000 15%, #000000 100%)'
        }}>
            {/* Gradient Overlay for smooth blend */}
            <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent via-black/50 to-black pointer-events-none z-0" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className="group relative"
                        >
                            {/* Card Container */}
                            <div className={`relative rounded-3xl overflow-hidden bg-gradient-to-br ${project.bgColor} border border-white/10 hover:border-white/20 transition-all duration-500`}>
                                {/* Image Section */}
                                <div className="relative aspect-[16/10] bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                                    {/* Placeholder Image */}
                                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-800/50 to-black/50">
                                        <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-purple-600 to-violet-600 flex items-center justify-center opacity-40 group-hover:opacity-60 transition-opacity">
                                            <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* View Now Button */}
                                    <motion.div
                                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <button className="px-8 py-3 bg-white text-black font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300">
                                            View Now
                                        </button>
                                    </motion.div>

                                    {/* Category Badge */}
                                    {project.category && (
                                        <div className="absolute top-4 right-4">
                                            <span className="px-4 py-2 bg-black/50 backdrop-blur-sm text-white text-sm font-medium rounded-full border border-white/10">
                                                {project.category}
                                            </span>
                                        </div>
                                    )}
                                </div>

                                {/* Info Section */}
                                <div className="p-6 bg-gradient-to-b from-purple-950/50 to-black/80 backdrop-blur-sm">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-2xl font-bold text-white">
                                            {project.name}
                                        </h3>
                                        <span className="text-white/60 text-lg font-medium">
                                            {project.year}
                                        </span>
                                    </div>
                                </div>

                                {/* Hover Glow Effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/10 to-violet-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectCardsGrid;
