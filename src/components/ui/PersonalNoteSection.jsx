import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const PersonalNoteSection = () => {
    const sectionRef = useRef(null);

    // Track scroll progress of this section
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"]
    });

    // Transform values for morphing effect
    const opacity = useTransform(scrollYProgress, [0, 0.5, 0.8], [1, 0.8, 0]);
    const y = useTransform(scrollYProgress, [0, 0.8], [0, -100]);
    const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.95]);
    const blur = useTransform(scrollYProgress, [0, 0.8], [0, 10]);

    return (
        <section ref={sectionRef} className="py-20 bg-black relative overflow-hidden">
            {/* Light Streaks - Animated diagonal light rays */}
            <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{ opacity: useTransform(scrollYProgress, [0.5, 0.8], [0, 1]) }}
            >
                <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-purple-400/40 to-transparent rotate-12 blur-sm"></div>
                <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-pink-400/40 to-transparent -rotate-12 blur-sm"></div>
                <div className="absolute top-0 left-2/3 w-px h-full bg-gradient-to-b from-transparent via-blue-400/30 to-transparent rotate-6 blur-sm"></div>
            </motion.div>

            {/* Soft Shadow Overlay */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60 pointer-events-none"
                style={{
                    opacity: useTransform(scrollYProgress, [0.3, 0.8], [0, 0.8])
                }}
            ></motion.div>

            {/* Main Content with morph transition */}
            <motion.div
                className="container mx-auto px-6 relative z-10"
                style={{
                    opacity,
                    y,
                    scale,
                    filter: useTransform(blur, (value) => `blur(${value}px)`)
                }}
            >
                <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">

                    {/* Left Side - Content with Parallax */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                        style={{
                            y: useTransform(scrollYProgress, [0, 0.8], [0, -50])
                        }}
                        className="space-y-10"
                    >
                        {/* Main Title */}
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                                On a <span className="italic font-serif text-white/90">human</span> note
                            </h2>
                        </div>

                        {/* Section 1: We build with purpose */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                            className="space-y-3"
                        >
                            <h3 className="text-2xl font-semibold text-white drop-shadow-md">
                                We build with purpose and enjoy the process
                            </h3>
                            <p className="text-white/70 text-lg leading-relaxed">
                                At Quantum Scripts, curiosity and collaboration power everything we create. From whiteboard sessions to problem solving deep dives, we keep our work environment open, energetic, and forward-thinking.
                            </p>
                        </motion.div>

                        {/* Section 2: A team built on trust */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                            className="space-y-3"
                        >
                            <h3 className="text-2xl font-semibold text-white drop-shadow-md">
                                A team built on trust
                            </h3>
                            <p className="text-white/70 text-lg leading-relaxed">
                                We operate as one unit. Designers, developers, and AI engineers work closely to turn complex ideas into reliable digital systems. Clear communication, ownership, and mutual respect help us move fast and build better.
                            </p>
                        </motion.div>

                        {/* Section 3: Different minds, stronger solutions */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                            className="space-y-3"
                        >
                            <h3 className="text-2xl font-semibold text-white drop-shadow-md">
                                Different minds, stronger solutions
                            </h3>
                            <p className="text-white/70 text-lg leading-relaxed">
                                Diverse perspectives fuel innovation. Every team member brings a unique way of thinking whether it’s product logic, creative design, or system architecture. This mix allows us to craft smarter websites, AI solutions, course platforms, and software products.
                            </p>
                        </motion.div>

                        {/* Optional: Decorative element */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                            className="pt-6"
                        >
                            <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg shadow-purple-500/50"></div>
                        </motion.div>
                    </motion.div>

                    {/* Right Side - Image with Parallax */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                        style={{
                            y: useTransform(scrollYProgress, [0, 0.8], [0, -30])
                        }}
                        className="relative group"
                    >
                        <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-purple-900/30">
                            {/* Glow effect behind image */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>

                            <div className="relative">
                                <img
                                    src="/team-casual.jpg"
                                    alt="Happy team members collaborating in casual setting"
                                    className="w-full h-[500px] object-cover rounded-2xl"
                                />
                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-tl from-black/40 via-transparent to-pink-500/20 rounded-2xl"></div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </motion.div>
        </section>
    );
};

export default PersonalNoteSection;
