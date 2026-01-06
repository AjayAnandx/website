import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Phone } from "lucide-react";
import Silk from "./Silk";

const AboutCTASection = () => {
    const sectionRef = useRef(null);

    // Track scroll progress for emergence effect
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "start start"]
    });

    // Transform values for emergence effect
    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6], [0, 0.5, 1]);
    const y = useTransform(scrollYProgress, [0, 0.6], [150, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.6], [0.9, 1]);

    return (
        <section ref={sectionRef} className="py-32 bg-black relative overflow-hidden">
            {/* Silk Shader Background */}
            <motion.div
                className="absolute inset-0"
                style={{ opacity: useTransform(scrollYProgress, [0, 0.4], [0, 1]) }}
            >
                <Silk
                    speed={3}
                    scale={1.2}
                    color="#9333EA"
                    noiseIntensity={2}
                    rotation={0.3}
                />
                {/* Purple overlay gradient for depth */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/15 mix-blend-overlay pointer-events-none"></div>
            </motion.div>

            {/* Light Streaks - Emerging from bottom */}
            <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{ opacity: useTransform(scrollYProgress, [0, 0.5], [0, 0.6]) }}
            >
                <div className="absolute bottom-0 left-1/4 w-px h-full bg-gradient-to-t from-purple-400/50 via-purple-400/20 to-transparent rotate-12 blur-sm"></div>
                <div className="absolute bottom-0 right-1/3 w-px h-full bg-gradient-to-t from-blue-400/50 via-blue-400/20 to-transparent -rotate-12 blur-sm"></div>
                <div className="absolute bottom-0 left-2/3 w-px h-full bg-gradient-to-t from-pink-400/40 via-pink-400/15 to-transparent rotate-6 blur-sm"></div>
            </motion.div>

            {/* Main Content with emergence animation */}
            <motion.div
                className="container mx-auto px-6 relative z-10"
                style={{
                    opacity,
                    y,
                    scale
                }}
            >
                <div className="max-w-4xl mx-auto text-center">

                    {/* Urgency Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-black/40 backdrop-blur-sm rounded-full border border-green-500/30 shadow-lg shadow-green-500/10"
                    >
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50"></span>
                        <span className="text-sm text-white/90">Limited availability for new projects.</span>
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-2xl"
                    >
                        Are you <span className="italic font-serif text-white/95">ready?</span>
                    </motion.h2>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="text-xl md:text-2xl text-white/70 mb-12 drop-shadow-lg"
                    >
                        This could be the start of something big.
                    </motion.p>

                    {/* CTA Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
                    >
                        <motion.button
                            className="group relative px-8 py-3 text-base font-semibold text-white rounded-full overflow-hidden transition-all duration-500 hover:scale-105 shadow-2xl shadow-purple-600/30 flex items-center justify-center gap-2 mx-auto"
                            initial="initial"
                            whileHover="hover"
                        >
                            {/* Gradient background */}
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600"></div>

                            {/* Hover overlay */}
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            {/* Animated shine effect */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                            </div>

                            {/* Button text */}
                            <motion.span
                                className="relative z-10"
                                variants={{
                                    initial: { x: 0 },
                                    hover: { x: -4 }
                                }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            >
                                Book a call
                            </motion.span>

                            {/* Icon */}
                            <motion.span
                                className="relative z-10"
                                variants={{
                                    initial: { opacity: 0, x: 10, width: 0 },
                                    hover: { opacity: 1, x: 0, width: "auto" }
                                }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            >
                                <Phone className="w-4 h-4" />
                            </motion.span>

                            {/* Glow effect */}
                            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-600 to-blue-600 blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </motion.button>
                    </motion.div>

                </div>
            </motion.div>
        </section>
    );
};

export default AboutCTASection;
