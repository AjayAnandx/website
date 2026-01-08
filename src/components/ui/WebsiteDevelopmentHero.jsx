import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowLeft } from 'lucide-react';

const WebsiteDevelopmentHero = () => {
    const { scrollY } = useScroll();

    // Parallax effect for text container
    const yText = useTransform(scrollY, [0, 500], [0, 100]);
    const opacityText = useTransform(scrollY, [0, 300], [1, 0]);

    const text = "We craft stunning, high-performance websites that captivate audiences and define your digital presence.";

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.03,
                delayChildren: 0.5,
            },
        },
    };

    const letterVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    return (
        <section className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-[#050505] via-[#111420] to-[#2a3555] flex flex-col justify-center px-8 md:px-20 lg:px-32">

            {/* Back Button */}
            <Link to="/#service" className="absolute top-32 left-8 md:left-20 lg:left-32 z-50 flex items-center gap-2 text-white/60 hover:text-white transition-colors group">
                <div className="p-2 border border-white/20 rounded-full group-hover:border-white/50 transition-colors">
                    <ArrowLeft className="w-4 h-4" />
                </div>
                <span className="text-xs font-medium tracking-[0.2em] uppercase">Back</span>
            </Link>

            {/* Ambient Background Glow */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[40%] h-[40%] bg-purple-900/10 blur-[150px] rounded-full mix-blend-screen" />
            </div>

            <motion.div
                className="max-w-4xl z-10"
                style={{ y: yText, opacity: opacityText }}
            >
                <motion.h1
                    className="text-3xl md:text-5xl lg:text-6xl font-serif leading-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-200 to-gray-400 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] tracking-wide pb-2"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {text.split("").map((char, index) => (
                        <motion.span key={index} variants={letterVariants}>
                            {char}
                        </motion.span>
                    ))}
                </motion.h1>
            </motion.div>

            {/* Scroll Button */}
            <motion.button
                className="absolute bottom-12 left-8 md:left-20 lg:left-32 flex items-center gap-3 text-white/60 hover:text-white transition-colors group"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.5, duration: 1 }}
                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            >
                <div className="p-2 border border-white/20 rounded-full group-hover:border-white/50 transition-colors">
                    <ArrowDown className="w-4 h-4" />
                </div>
                <span className="text-xs font-medium tracking-[0.2em] uppercase">Scroll</span>
            </motion.button>
        </section>
    );
};

export default WebsiteDevelopmentHero;
