import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, Star, Zap, Globe, Layout, Target, Medal } from 'lucide-react';

const LogoItem = ({ Icon, text }) => (
    <div className="flex items-center gap-2 group cursor-default opacity-50 hover:opacity-100 transition-opacity duration-300">
        <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
        <span className="text-xl font-bold text-white tracking-tight">{text}</span>
    </div>
);

const logos = [
    { icon: Award, text: "Awwwards" },
    { icon: Trophy, text: "CSS Design Awards" },
    { icon: Star, text: "Godly" },
    { icon: Zap, text: "FWA" },
    { icon: Globe, text: "SiteInspire" },
    { icon: Layout, text: "Behance" },
    { icon: Target, text: "Lapa Ninja" },
    { icon: Medal, text: "One Page Love" },
];

const AboutLogos = () => {
    return (
        <section className="py-20 bg-black overflow-hidden relative">
            <div className="container mx-auto px-6 text-center mb-12">
                <p className="text-sm font-medium text-white/50">Our designs are featured on:</p>
            </div>

            <div className="relative flex w-full">
                {/* Scroll Container */}
                <div className="flex animate-scroll whitespace-nowrap gap-16 md:gap-32 w-max">
                    {/* Duplicate list 3 times to ensure smooth infinite scroll */}
                    {[...logos, ...logos, ...logos].map((logo, i) => (
                        <LogoItem key={i} Icon={logo.icon} text={logo.text} />
                    ))}
                </div>

                {/* Gradient Masks */}
                <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-black via-black/80 to-transparent pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-black via-black/80 to-transparent pointer-events-none" />
            </div>
        </section>
    );
};

export default AboutLogos;
