import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const processSteps = [
    {
        id: 1,
        stepNumber: "STEP 01",
        title: "Discovery & Planning.",
        description: "We begin by understanding your business goals, target audience, and project requirements to create a strategic roadmap for success."
    },
    {
        id: 2,
        stepNumber: "STEP 02",
        title: "Apply for role.",
        description: "Submit applications, knowing you're connecting with companies actively seeking remote tech talent like you."
    },
    {
        id: 3,
        stepNumber: "STEP 03",
        title: "Meet Talentify.",
        description: "Have a quick chat with our team to ensure your skills and career goals align with the best remote job opportunities."
    },
    {
        id: 4,
        stepNumber: "STEP 04",
        title: "Get hired.",
        description: "Land your dream remote tech job and start your journey with companies that value your expertise and skills."
    }
];

const ProcessSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const handleNext = () => {
        setDirection(1);
        setCurrentIndex((prevIndex) =>
            prevIndex === processSteps.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrev = () => {
        setDirection(-1);
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? processSteps.length - 1 : prevIndex - 1
        );
    };

    // Calculate visible cards (current and next)
    const getVisibleCards = () => {
        const cards = [];
        cards.push(processSteps[currentIndex]);

        const nextIndex = currentIndex === processSteps.length - 1 ? 0 : currentIndex + 1;
        cards.push(processSteps[nextIndex]);

        return cards;
    };

    const visibleCards = getVisibleCards();

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 500 : -500,
            opacity: 0
        }),
        center: {
            x: 0,
            opacity: 1
        },
        exit: (direction) => ({
            x: direction < 0 ? 500 : -500,
            opacity: 0
        })
    };

    return (
        <section className="py-24 bg-black relative overflow-hidden">
            <div className="container mx-auto px-6">
                {/* Header Section */}
                <div className="mb-16">
                    <p className="text-purple-500 text-sm font-semibold uppercase tracking-wider mb-4">
                        PROCESS
                    </p>
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                        <div className="max-w-2xl">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                                Your path to the perfect remote tech job.
                            </h2>
                            <p className="text-gray-400 text-lg">
                                Discover top remote tech opportunities and land your next role with ease, through our streamlined process.
                            </p>
                        </div>
                        <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 self-start lg:self-end">
                            View open roles
                        </button>
                    </div>
                </div>

                {/* Cards Carousel Section */}
                <div className="relative">
                    {/* Cards Container */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                        <AnimatePresence initial={false} custom={direction} mode="popLayout">
                            {visibleCards.map((step, idx) => (
                                <motion.div
                                    key={`${step.id}-${currentIndex}-${idx}`}
                                    custom={direction}
                                    variants={slideVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{
                                        x: { type: "spring", stiffness: 300, damping: 30 },
                                        opacity: { duration: 0.2 }
                                    }}
                                    className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-8 hover:border-purple-500 transition-all duration-300"
                                >
                                    <p className="text-purple-500 text-xs font-bold uppercase tracking-wider mb-4">
                                        {step.stepNumber}
                                    </p>
                                    <h3 className="text-3xl font-bold text-white mb-4">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-400 leading-relaxed">
                                        {step.description}
                                    </p>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {/* Navigation Controls */}
                    <div className="flex items-center justify-end gap-4">
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                            <span>Active cards</span>
                            <span className="text-white font-semibold">
                                {String(currentIndex + 1).padStart(2, '0')} - {String(currentIndex + 2 > processSteps.length ? 1 : currentIndex + 2).padStart(2, '0')}
                            </span>
                        </div>
                        <div className="flex gap-2">
                            <button
                                onClick={handlePrev}
                                className="w-12 h-12 rounded-full bg-purple-600 hover:bg-purple-700 flex items-center justify-center transition-colors duration-300 group"
                                aria-label="Previous"
                            >
                                <svg
                                    className="w-5 h-5 text-white transform group-hover:-translate-x-0.5 transition-transform"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button
                                onClick={handleNext}
                                className="w-12 h-12 rounded-full bg-purple-600 hover:bg-purple-700 flex items-center justify-center transition-colors duration-300 group"
                                aria-label="Next"
                            >
                                <svg
                                    className="w-5 h-5 text-white transform group-hover:translate-x-0.5 transition-transform"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;
