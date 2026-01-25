import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
    {
        id: 1,
        title: "Pixel Arts VFX",
        category: "VFX, Animation, Post-production",
        description: "The Magic Behind the Screen - A compact digital lab specializing in high-end VFX services including Compositing, Matchmove, and Rotoscope.",
        image: "/vfx_studio_background.png",
        bgColor: "bg-black",
        bgImage: true,
        bgGradient: "from-black/60 via-transparent to-black/90",
        quote: null
    },
    {
        id: 2,
        title: "Jayasim Labs & AI Masterclass",
        category: "AI, Generative AI, Crypto, Automation, Digital Education",
        description: null,
        image: "/elearning_bg.png",
        bgColor: "bg-black",
        bgImage: true,
        bgGradient: "from-purple-900/80 to-indigo-900/80",
        quote: "“The AI Masterclass completely transformed my business strategy... the techniques boosted my productivity by 500% and gave me the edge I needed to scale. It’s practical, game-changing content that delivers an incredible ROI for any digital professional.”",
        logo: "JAYASIM LABS"
    },
    {
        id: 3,
        title: "Atma Yogalaya x Modern Transformation",
        category: "Vinyasa, Hatha, Meditation",
        description: "Expert-led yoga for physical strength and mental clarity.",
        image: "/yoga_bg.png",
        bgColor: "bg-black",
        bgImage: true,
        bgGradient: "from-stone-900/80 to-zinc-900/80",
        quote: null
    },
    // Page 2
    {
        id: 4,
        title: "Chase Away x Canine Wellness",
        category: "Natural Repellent, DEET-Free, Pet Health",
        description: "100% natural, chemical-free tick and insect repellent for pets and people.",
        image: "/dog_running_bg.png",
        bgColor: "bg-black",
        bgImage: true,
        bgGradient: "from-emerald-900/80 to-teal-900/80",
        quote: null
    },
    {
        id: 5,
        title: "Siruvani Estates",
        category: "Coffee, Tea, Spices, Sustainable Agriculture",
        description: null,
        image: "/coffee_drinking_bg.png",
        bgColor: "bg-black",
        bgImage: true,
        bgGradient: "from-green-900/80 to-emerald-900/80",
        quote: "“The freshness of the Arabica coffee and the rich aroma of the hand-picked tea are unmatched. It is rare to find a boutique estate that balances premium quality with such deep respect for the environment and tribal communities.”",
        logo: "SIRUVANI GROUP ESTATES"
    },
    {
        id: 6,
        title: "Jayasim x AI Advisory",
        category: "AI Strategy, Consulting, Automation",
        description: "Strategic AI implementation and digital transformation for global enterprises.",
        image: "/jayasim_text_bg.png",
        bgColor: "bg-white",
        bgImage: true,
        bgGradient: "from-white to-gray-100",
        textColor: "text-black",
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
        <section className="py-24 bg-black overflow-hidden relative">
            <div className="container mx-auto px-6 max-w-[1400px]">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-16 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="max-w-2xl"
                    >
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                            Featured Work
                        </h2>
                        <p className="text-white/60 text-lg md:text-xl font-light max-w-lg">
                            We help world-class companies solve their toughest product challenges.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                    >
                        <Link
                            to="/case-study"
                            className="group flex items-center gap-3 text-white border border-white/10 bg-white/5 backdrop-blur-sm px-8 py-4 rounded-full hover:bg-white hover:text-black transition-all duration-500 text-lg"
                        >
                            <span>Explore Our Work</span>
                            <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
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
            className={`relative rounded-2xl overflow-hidden group cursor-pointer ${project.bgColor} ${project.textColor || 'text-white'} h-full border border-white/5 hover:border-white/10 transition-colors duration-500`}
        >
            {/* Background Image logic */}
            {project.bgImage && (
                <div className="absolute inset-0">
                    {/* Fallback gradient if no image file */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.bgGradient}`} />
                    {project.image && (
                        <img
                            src={project.image}
                            alt={project.title}
                            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
                        />
                    )}
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
                        <p className={`text-xl font-medium mb-4 leading-tight ${project.bgImage && !project.textColor ? 'text-white' : ''}`}>
                            {project.description}
                        </p>
                    )}

                    <div className="space-y-1">
                        <h3 className={`text-lg font-bold ${project.bgImage && !project.textColor ? 'text-white' : ''}`}>
                            {project.title}
                        </h3>
                        <p className={`text-sm font-medium opacity-60 uppercase tracking-wide ${project.bgImage && !project.textColor ? 'text-white' : ''}`}>
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
