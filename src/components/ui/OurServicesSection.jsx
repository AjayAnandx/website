import { motion } from "framer-motion";
import { ArrowRight, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import GlareHover from "./GlareHover";

const services = [
    {
        title: "Software Development",
        description: "Build robust software solutions from the ground up. Our team crafts scalable applications and enterprise systems tailored to your business needs.",
        tags: ["Software Dev", "Full-Stack", "Custom Apps"],
        image: "/software-dev.jpg",
        accentColor: "blue",
        link: "/software-development"
    },
    {
        title: "Website Development",
        description: "Design stunning, high-performance websites that drive results. We deliver modern web experiences with seamless functionality and user-centric design.",
        tags: ["Web Dev", "Responsive", "E-commerce"],
        image: "/website-dev.jpg",
        accentColor: "orange",
        link: "/services"
    },
    {
        title: "AI & Automation",
        description: "Create bespoke AI applications that transform your operations. Our experts build custom machine learning models and intelligent automations aligned with your goals.",
        tags: ["AI Strategy", "ML Models", "Automation"],
        image: "/ai-app.jpg",
        accentColor: "purple",
        link: "/ai-consulting"
    },
    {
        title: "Course Platform",
        description: "Launch successful online courses with end-to-end support. We handle platform setup, content optimization, and marketing to maximize reach and conversions.",
        tags: ["Course Launch", "LMS Setup", "Marketing"],
        image: "/course-launch.jpg",
        accentColor: "green",
        link: "/course-platform"
    }
];

const serviceColors = {
    blue: "#3b82f6",
    orange: "#f97316",
    purple: "#a855f7",
    green: "#22c55e"
};

// Circuit Board SVG for Software Development
const CircuitBoardGraphic = () => (
    <svg viewBox="0 0 400 200" className="w-full h-full absolute inset-0 opacity-80">
        <defs>
            <linearGradient id="circuitGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(59,130,246,0.2)" />
                <stop offset="50%" stopColor="rgba(59,130,246,0.6)" />
                <stop offset="100%" stopColor="rgba(59,130,246,0.2)" />
            </linearGradient>
        </defs>

        {/* Circuit Paths */}
        <g stroke="rgba(59,130,246,0.3)" strokeWidth="1.5" fill="none">
            {[
                "M 40 100 L 80 100 L 100 80 L 180 80",
                "M 40 140 L 90 140 L 110 160 L 220 160",
                "M 360 60 L 300 60 L 280 80 L 200 80",
                "M 360 120 L 320 120 L 300 140 L 240 140",
                "M 200 40 L 200 80",
                "M 200 160 L 200 180"
            ].map((path, i) => (
                <motion.path
                    key={i}
                    d={path}
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: i * 0.1, ease: "easeOut" }}
                />
            ))}
        </g>

        {/* Pulsing Data Packets */}
        {[
            "M 40 100 L 80 100 L 100 80 L 180 80",
            "M 40 140 L 90 140 L 110 160 L 220 160"
        ].map((path, i) => (
            <motion.circle
                key={`p1-${i}`}
                r="3"
                fill="#60a5fa"
                initial={{ offsetDistance: "0%" }}
                animate={{ offsetDistance: "100%" }}
                style={{ offsetPath: `path('${path}')` }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: i * 0.5 }}
            />
        ))}

        {/* Central Chip / Processor */}
        <motion.g
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
        >
            <rect x="180" y="70" width="40" height="40" rx="4" stroke="rgba(59,130,246,0.6)" strokeWidth="2" fill="rgba(59,130,246,0.1)" />
            <rect x="190" y="80" width="20" height="20" rx="2" fill="rgba(59,130,246,0.4)" />

            {/* Chip glow */}
            <motion.rect
                x="180" y="70" width="40" height="40" rx="4"
                stroke="rgba(59,130,246,0.8)" strokeWidth="2" fill="none"
                animate={{ strokeOpacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2, repeat: Infinity }}
            />
        </motion.g>
    </svg>
);

// Browser Interface SVG for Website Development
const BrowserInterfaceGraphic = () => (
    <svg viewBox="0 0 400 200" className="w-full h-full absolute inset-0 opacity-80">
        {/* Browser Window */}
        <motion.rect
            x="60" y="30" width="280" height="150" rx="8"
            fill="none" stroke="rgba(249,115,22,0.4)" strokeWidth="1.5"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
        />

        {/* Window controls circles */}
        <g fill="rgba(249,115,22,0.4)">
            <circle cx="80" cy="45" r="3" />
            <circle cx="95" cy="45" r="3" />
            <circle cx="110" cy="45" r="3" />
        </g>

        {/* Header Bar */}
        <motion.line
            x1="60" y1="60" x2="340" y2="60"
            stroke="rgba(249,115,22,0.2)" strokeWidth="1"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
        />

        {/* UI Elements Loading In */}
        <g fill="rgba(249,115,22,0.15)">
            {/* Hero section */}
            <motion.rect
                x="80" y="80" width="140" height="60" rx="4"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
            />

            {/* Sidebar / Secondary */}
            <motion.rect
                x="240" y="80" width="80" height="60" rx="4"
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
            />

            {/* Bottom cards */}
            {[0, 1, 2].map((i) => (
                <motion.rect
                    key={i}
                    x={80 + (i * 85)} y="155" width="70" height="15" rx="2"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.7 + (i * 0.1) }}
                />
            ))}
        </g>

        {/* Scanning line animation */}
        <motion.rect
            x="60" y="30" width="280" height="2"
            fill="rgba(249,115,22,0.5)"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: [30, 180, 30], opacity: [0, 1, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 1 }}
        />
    </svg>
);

// AI Neural Network SVG
const NeuralNetworkGraphic = () => (
    <svg viewBox="0 0 400 200" className="w-full h-full absolute inset-0 opacity-60">
        <g stroke="rgba(147,51,234,0.3)" strokeWidth="1">
            {/* Connections with moving particles */}
            {[
                { x1: 68, y1: 50, x2: 133, y2: 40 }, { x1: 68, y1: 50, x2: 133, y2: 80 },
                { x1: 68, y1: 100, x2: 133, y2: 80 }, { x1: 68, y1: 100, x2: 133, y2: 120 },
                { x1: 68, y1: 150, x2: 133, y2: 120 }, { x1: 68, y1: 150, x2: 133, y2: 160 },
                { x1: 147, y1: 40, x2: 213, y2: 60 }, { x1: 147, y1: 80, x2: 213, y2: 60 },
                { x1: 147, y1: 80, x2: 213, y2: 100 }, { x1: 147, y1: 120, x2: 213, y2: 100 },
                { x1: 147, y1: 120, x2: 213, y2: 140 }, { x1: 147, y1: 160, x2: 213, y2: 140 },
                { x1: 227, y1: 60, x2: 292, y2: 80 }, { x1: 227, y1: 100, x2: 292, y2: 80 },
                { x1: 227, y1: 100, x2: 292, y2: 120 }, { x1: 227, y1: 140, x2: 292, y2: 120 }
            ].map((line, i) => (
                <g key={i}>
                    <line x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2} />
                    <motion.circle r="2" fill="white"
                        initial={{ offsetDistance: "0%" }}
                        animate={{ offsetDistance: "100%" }}
                        style={{ offsetPath: `path('M${line.x1} ${line.y1} L${line.x2} ${line.y2}')` }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: Math.random() * 2 }}
                    />
                    {/* Fallback for offsetPath not fully supported in all SVG contexts perfectly, using simple translation or opacity as backup visual */}
                    <motion.line
                        x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2}
                        stroke="rgba(147,51,234,0.8)" strokeWidth="1.5"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: [0, 1, 0], opacity: [0, 1, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: Math.random() * 2 }}
                    />

                </g>
            ))}
        </g>

        {/* Layers */}
        {[
            { x: 60, ys: [50, 100, 150] },
            { x: 140, ys: [40, 80, 120, 160] },
            { x: 220, ys: [60, 100, 140] },
            { x: 300, ys: [80, 120] }
        ].map((layer, li) => (
            <g key={li} fill={`rgba(147,51,234,${0.6 - li * 0.1})`} stroke="rgba(147,51,234,0.8)">
                {layer.ys.map((y, yi) => (
                    <motion.circle
                        key={yi}
                        cx={layer.x}
                        cy={y}
                        r="8"
                        animate={{ fill: ["rgba(147,51,234,0.6)", "rgba(255,255,255,0.8)", "rgba(147,51,234,0.6)"] }}
                        transition={{ duration: 2, repeat: Infinity, delay: (li + yi) * 0.2 }}
                    />
                ))}
            </g>
        ))}
    </svg>
);

// Rocket Graphic for Course Launch
const RocketGraphic = () => (
    <svg viewBox="0 0 400 200" className="w-full h-full absolute inset-0 opacity-80">
        <g stroke="rgba(34,197,94,0.4)" strokeWidth="1" fill="none">
            {/* Stars / Speed lines */}
            {[
                { x: 50, y: 50, d: 2 }, { x: 350, y: 30, d: 1 }, { x: 20, y: 150, d: 3 },
                { x: 300, y: 180, d: 1.5 }, { x: 150, y: 20, d: 2.5 }
            ].map((star, i) => (
                <motion.line
                    key={i}
                    x1={star.x} y1={star.y} x2={star.x} y2={star.y + 20}
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: [0, 200], opacity: [0, 1, 0] }}
                    transition={{
                        duration: star.d,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    stroke="rgba(255,255,255,0.3)"
                />
            ))}
        </g>

        {/* Rocket Ship */}
        <motion.g
            initial={{ y: 0 }}
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
            {/* Body */}
            <path
                d="M 200 60 Q 220 100 220 140 L 180 140 Q 180 100 200 60 Z"
                fill="none"
                stroke="rgba(34,197,94,0.8)"
                strokeWidth="2"
            />
            {/* Window */}
            <circle cx="200" cy="90" r="8" stroke="rgba(34,197,94,0.8)" strokeWidth="1.5" fill="none" />
            {/* Fins */}
            <path d="M 180 120 L 160 150 L 180 140" stroke="rgba(34,197,94,0.8)" strokeWidth="1.5" fill="none" />
            <path d="M 220 120 L 240 150 L 220 140" stroke="rgba(34,197,94,0.8)" strokeWidth="1.5" fill="none" />

            {/* Flame */}
            <motion.path
                d="M 190 140 Q 200 180 210 140"
                stroke="rgba(34,197,94,0.6)"
                strokeWidth="1.5"
                fill="rgba(34,197,94,0.2)"
                animate={{ d: ["M 190 140 Q 200 160 210 140", "M 190 140 Q 200 190 210 140", "M 190 140 Q 200 160 210 140"] }}
                transition={{ duration: 0.2, repeat: Infinity }}
            />
        </motion.g>
    </svg>
);

const graphicComponents = [CircuitBoardGraphic, BrowserInterfaceGraphic, NeuralNetworkGraphic, RocketGraphic];

const OurServicesSection = () => {
    return (
        <section id="service" className="pt-32 pb-8 bg-black relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-6xl">

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
                        Comprehensive solutions designed to accelerate your digital transformation
                    </p>
                </motion.div>

                {/* Services Grid - 2 columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service, index) => {
                        const GraphicComponent = graphicComponents[index];
                        const glareColor = serviceColors[service.accentColor];

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.15,
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 15
                                }}
                                whileHover={{ y: -5 }} // Subtle hover up effect
                                className="group relative"
                            >
                                <Link to={service.link} className="block h-full">
                                    <GlareHover
                                        width="100%"
                                        height="100%"
                                        background="transparent"
                                        borderRadius="24px"
                                        borderColor="transparent"
                                        glareColor={glareColor}
                                        glareOpacity={0.2}
                                        glareAngle={-45}
                                        glareSize={200}
                                        transitionDuration={600}
                                        className="h-full"
                                    >
                                        {/* Card Content - Wrapped in a normal div inside GlareHover */}
                                        <div className="h-full flex flex-col bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden relative group-hover:border-white/20 transition-all duration-300 shadow-lg group-hover:shadow-2xl">

                                            {/* Visual/Graphic Area */}
                                            <div className="relative h-48 md:h-56 overflow-hidden">
                                                {/* SVG Graphic (Animated) */}
                                                <motion.div
                                                    className="absolute inset-0"
                                                    initial={{ opacity: 0.6, scale: 1 }}
                                                    whileHover={{ opacity: 1, scale: 1.1 }}
                                                    transition={{ duration: 0.5 }}
                                                >
                                                    <GraphicComponent />
                                                </motion.div>

                                                {/* View Button Overlay - Controlled by CSS group-hover from parent */}
                                                <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                    <div className="flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 rounded-full text-white font-medium backdrop-blur-md transform scale-90 translate-y-2 group-hover:scale-100 group-hover:translate-y-0 transition-all duration-300">
                                                        <Eye className="w-5 h-5" />
                                                        <span>View Details</span>
                                                    </div>
                                                </div>

                                                {/* Bottom Gradient Fade */}
                                                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
                                            </div>

                                            {/* Content */}
                                            <div className="p-6 pt-4 flex flex-col flex-1">
                                                {/* Title */}
                                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:translate-x-1 transition-transform duration-300">
                                                    {service.title}
                                                </h3>

                                                {/* Description */}
                                                <p className="text-white/50 text-sm leading-relaxed mb-6 flex-1 group-hover:opacity-75 transition-opacity duration-300">
                                                    {service.description}
                                                </p>

                                                {/* Tags with arrows */}
                                                <div className="flex items-center gap-2 flex-wrap text-white/60 text-sm">
                                                    {service.tags.map((tag, tagIndex) => (
                                                        <span
                                                            key={tagIndex}
                                                            className="flex items-center gap-2 group/tag"
                                                        >
                                                            <span className="group-hover/tag:text-white transition-colors cursor-default">
                                                                {tag}
                                                            </span>
                                                            <ArrowRight className="w-3 h-3 group-hover/tag:translate-x-1 transition-transform duration-200" />
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Background Glow Effect */}
                                            <div className={`absolute -inset-1 bg-gradient-to-r from-${service.accentColor}-600/10 to-white/5 blur-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                                        </div>
                                    </GlareHover>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default OurServicesSection;
