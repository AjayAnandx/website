import React from 'react';
import { motion } from 'framer-motion';
import { Aperture, Triangle, Hexagon, Circle, Square, Command, Zap, Layers } from 'lucide-react';

const LogoItem = ({ Icon, text }) => (
    <div className="flex items-center gap-2 group cursor-default opacity-50 hover:opacity-100 transition-opacity duration-300">
        <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
        <span className="text-xl font-bold text-white tracking-tight">{text}</span>
    </div>
);

const logos = [
    { icon: Aperture, text: "Ipsum" },
    { icon: Triangle, text: "Logoipsum" },
    { icon: Hexagon, text: "Brand" },
    { icon: Circle, text: "Circle" },
    { icon: Square, text: "Square" },
    { icon: Command, text: "Command" },
    { icon: Zap, text: "FastTech" },
    { icon: Layers, text: "Layers" },
];

const AboutLogos = () => {
    return (
        <section className="py-20 bg-black/50 overflow-hidden relative border-t border-white/5">
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
