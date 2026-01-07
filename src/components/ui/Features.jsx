import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
    // Page 1
    {
        id: 1,
        title: "Jupiter",
        category: "AI, Data Science, Dashboards",
        description: "Using AI to assess weather patterns across 3 trillion data points.",
        image: "/project-weather.jpg", // Placeholder
        bgColor: "bg-black",
        bgImage: true,
        bgGradient: "from-blue-900/80 to-purple-900/80",
        quote: null
    },
    {
        id: 2,
        title: "Shirt App & Best Apps",
        category: "UI/UX, Mobile, Software, Data Science",
        description: null,
        image: null,
        bgColor: "bg-[#F3F0FF]", // Light lavender
        textColor: "text-black",
        bgImage: false,
        quote: "“Always well-staffed because of their team’s skill level... they bring in quality talent and maintain professionalism. We’ve had audits and advisors review the code, and everything is top-notch.”",
        logo: "SHIRT"
    },
    {
        id: 3,
        title: "Marmon x Berkshire Hathaway",
        category: "AI, Data Science",
        description: "AI-powered inventory management.",
        image: "/project-fruit.jpg", // Placeholder
        bgColor: "bg-black",
        bgImage: true,
        bgGradient: "from-orange-900/80 to-red-900/80",
        quote: null
    },
    // Page 2
    {
        id: 4,
        title: "HealthGuard AI",
        category: "Healthcare, ML, Compliance",
        description: "Predictive analytics for patient readmission risks.",
        image: "/project-health.jpg",
        bgColor: "bg-black",
        bgImage: true,
        bgGradient: "from-emerald-900/80 to-teal-900/80",
        quote: null
    },
    {
        id: 5,
        title: "EduFlow LMS",
        category: "EdTech, Platform, Scale",
        description: null,
        image: null,
        bgColor: "bg-[#E0F2FE]", // Light Blue
        textColor: "text-black",
        bgImage: false,
        quote: "“The platform easily handled our 10x growth spike. The architecture is solid and the user experience is flawless. Highly recommended partner.”",
        logo: "EDUFLOW"
    },
    {
        id: 6,
        title: "FinTech Secure",
        category: "Finance, Security, Blockchain",
        description: "Next-gen fraud detection system processing millions daily.",
        image: "/project-fintech.jpg",
        bgColor: "bg-black",
        bgImage: true,
        bgGradient: "from-indigo-900/80 to-blue-900/80",
        quote: null
    }
];

const Features = () => {
    // Desktop State
    const [page, setPage] = useState(0);
    const totalPages = Math.ceil(projects.length / 3);
    const currentProjects = projects.slice(page * 3, (page + 1) * 3);

    // Mobile State
    const [mobileIndex, setMobileIndex] = useState(0);

    // Mobile Auto-Slide
    useEffect(() => {
        const interval = setInterval(() => {
            setMobileIndex((prev) => (prev + 1) % projects.length);
        }, 3000); // 3 seconds duration
        return () => clearInterval(interval);
    }, []);

    const nextPage = () => {
        setPage((prev) => (prev + 1) % totalPages);
    };

    const prevPage = () => {
        setPage((prev) => (prev - 1 + totalPages) % totalPages);
    };

    return (
        <section className="py-16 bg-black overflow-hidden relative">
            <div className="container mx-auto px-6 max-w-[1400px]">

                {/* Header - Adjusted for Mobile Alignment */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-12 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="max-w-xl"
                    >
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6">
                            Our Work
                        </h2>
                        <p className="text-white/60 text-base md:text-lg">
                            Transforming industries with intelligent technology and design.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="self-start md:self-auto"
                    >
                        <Link
                            to="/case-study"
                            className="group flex items-center gap-2 text-white border border-white/20 px-5 py-2.5 md:px-6 md:py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 text-sm md:text-base"
                        >
                            <span>View Case Studies</span>
                            <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 group-hover:rotate-45 transition-transform" />
                        </Link>
                    </motion.div>
                </div>

                {/* DESKTOP VIEW: Grid of 3 */}
                <div className="hidden md:block relative">
                    {/* Navigation Buttons (Absolute) */}
                    <div className="absolute top-1/2 left-0 -translate-y-1/2 z-20">
                        <button
                            onClick={prevPage}
                            className="bg-black/50 hover:bg-white hover:text-black text-white p-3 rounded-full backdrop-blur-md border border-white/10 transition-all duration-300"
                        >
                            <ArrowLeft className="w-6 h-6" />
                        </button>
                    </div>

                    <div className="absolute top-1/2 right-0 -translate-y-1/2 z-20">
                        <button
                            onClick={nextPage}
                            className="bg-black/50 hover:bg-white hover:text-black text-white p-3 rounded-full backdrop-blur-md border border-white/10 transition-all duration-300"
                        >
                            <ArrowRight className="w-6 h-6" />
                        </button>
                    </div>

                    <div className="overflow-hidden min-h-[500px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={page}
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[500px]"
                            >
                                {currentProjects.map((project) => (
                                    <ProjectCard key={project.id} project={project} />
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Pagination Indicators */}
                    <div className="flex justify-center gap-2 mt-8">
                        {[...Array(totalPages)].map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setPage(i)}
                                className={`h-2 rounded-full transition-all duration-300 ${page === i ? "w-8 bg-white" : "w-2 bg-white/20"
                                    }`}
                            />
                        ))}
                    </div>
                </div>

                {/* MOBILE VIEW: Single Card Auto-Slider */}
                <div className="md:hidden relative min-h-[450px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={mobileIndex}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.5 }}
                            className="h-[450px]"
                        >
                            <ProjectCard project={projects[mobileIndex]} />
                        </motion.div>
                    </AnimatePresence>

                    {/* Mobile Indicators */}
                    <div className="flex justify-center gap-2 mt-6">
                        {projects.map((_, i) => (
                            <div
                                key={i}
                                className={`h-1.5 rounded-full transition-all duration-300 ${mobileIndex === i ? "w-6 bg-white" : "w-1.5 bg-white/20"
                                    }`}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

const ProjectCard = ({ project }) => {
    const cardContent = (
        <div
            className={`relative rounded-2xl overflow-hidden group cursor-pointer ${project.bgColor} ${project.textColor || 'text-white'} h-full`}
        >
            {/* Background Image logic */}
            {project.bgImage && (
                <div className="absolute inset-0">
                    {/* Fallback gradient if no image file */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.bgGradient}`} />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                </div>
            )}

            {/* Content Container */}
            <div className="relative z-10 h-full flex flex-col justify-between p-6">
                {/* Top Content (Logo/Quote) */}
                <div>
                    {project.logo && (
                        <div className="text-3xl font-black tracking-tighter mb-8 opacity-80 italic">
                            {project.logo}
                        </div>
                    )}

                    {project.quote && (
                        <blockquote className="text-lg leading-relaxed font-medium opacity-90">
                            {project.quote}
                        </blockquote>
                    )}
                </div>

                {/* Bottom Content */}
                <div className="mt-auto pt-6">
                    {project.description && (
                        <p className={`text-xl font-medium mb-4 leading-tight ${project.bgImage ? 'text-white' : ''}`}>
                            {project.description}
                        </p>
                    )}

                    <div className="space-y-1">
                        <h3 className={`text-lg font-bold ${project.bgImage ? 'text-white' : ''}`}>
                            {project.title}
                        </h3>
                        <p className={`text-sm font-medium opacity-60 uppercase tracking-wide ${project.bgImage ? 'text-white' : ''}`}>
                            {project.category}
                        </p>
                    </div>
                </div>
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/20 rounded-2xl transition-colors duration-300 pointer-events-none" />
        </div>
    );

    if (project.link) {
        return (
            <Link to={project.link} className="block h-full">
                {cardContent}
            </Link>
        );
    }

    return cardContent;
};

export default Features;
