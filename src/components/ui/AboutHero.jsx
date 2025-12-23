import React from 'react';
import { motion } from 'framer-motion';
import LightRays from './LightRays';

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
                        Helping you make a <br />
                        <span className="font-serif italic font-light">lasting</span> <span className="font-bold">impact online.</span>
                    </h1>

                    <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        We're here to craft more than just a website—our mission is to help you build a digital experience that connects, engages, and drives real results for your business.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutHero;
