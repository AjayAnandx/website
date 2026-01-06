import React from 'react';
import { motion } from 'framer-motion';
import LightRays from './LightRays';
import RotatingText from './RotatingText';

const AboutHero = () => {
    return (
        <section className="relative w-full py-32 flex items-center justify-center bg-black overflow-hidden">
            {/* LightRays Background */}
            <div className="absolute inset-0 w-full h-full">
                <LightRays
                    raysOrigin="top-center"
                    raysColor="#a855f7"
                    raysSpeed={0.5}
                    lightSpread={1.2}
                    rayLength={1.5}
                    pulsating={true}
                    fadeDistance={1.2}
                    saturation={0.9}
                    followMouse={true}
                    mouseInfluence={0.15}
                    noiseAmount={0.1}
                    distortion={0.3}
                />
            </div>

            {/* Purple Gradient Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[300px] bg-purple-900/40 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl mx-auto"
                >
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium text-white mb-8 leading-tight tracking-tight">
                        Helping brands build, launch, <br />
                        and scale with <RotatingText
                            texts={['Websites', 'AI', 'Courses', 'Software', 'Systems']}
                            mainClassName="inline-flex px-2 sm:px-2 md:px-3 text-purple-400 overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg font-serif italic font-light"
                            staggerFrom={"last"}
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "-120%" }}
                            staggerDuration={0.025}
                            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                            transition={{ type: "spring", damping: 30, stiffness: 400 }}
                            rotationInterval={2000}
                        />
                    </h1>

                    <p className="text-white/60 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                        We go beyond design and development. Quantum Scripts delivers high performance websites, custom AI solutions, course launch platforms, and scalable software engineered to drive growth, engagement, and long-term impact.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutHero;
