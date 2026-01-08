import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const steps = [
    {
        number: "1",
        title: "STRATEGY",
        description: "We start by understanding your brand, audience, and goals to define a site map and user journey that creates impact."
    },
    {
        number: "2",
        title: "DESIGN",
        description: "We craft high-fidelity mockups and interactive prototypes, focusing on aesthetics, usability, and brand consistency."
    },
    {
        number: "3",
        title: "DEVELOPMENT",
        description: "We bring designs to life with clean code, ensuring your site is responsive, fast, and optimized for search engines."
    },
    {
        number: "4",
        title: "CONTENT",
        description: "We integrate your content, optimizing images and copy to tell your story effectively and engage your visitors."
    },
    {
        number: "5",
        title: "LAUNCH",
        description: "We perform rigorous testing across devices and browsers before launching your site to the world, ensuring a flawless debut."
    }
];

const ProcessStep = ({ step, index, total }) => {
    return (
        <motion.div
            className="relative flex gap-8 mb-16 last:mb-0 group"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            {/* Number Column */}
            <div className="flex flex-col items-center">
                <div
                    className="w-12 h-12 rounded-full border-2 border-violet-600/30 text-violet-500 font-mono font-bold flex items-center justify-center bg-black z-10 
                    group-hover:border-violet-500 group-hover:bg-violet-600 group-hover:text-white transition-all duration-300"
                >
                    {step.number}
                </div>
                {index !== total - 1 && (
                    <div className="w-[2px] h-full bg-white/10 absolute top-12 left-[23px] -z-0">
                        <div className="w-full h-full bg-violet-600/50 origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-700 ease-in-out" />
                    </div>
                )}
            </div>

            {/* Content Column */}
            <div className="pt-2 pb-8 max-w-lg">
                <h3 className="text-xl font-bold text-white mb-3 tracking-wide uppercase">{step.title}</h3>
                <p className="text-white/60 leading-relaxed text-base">{step.description}</p>
            </div>
        </motion.div>
    );
};

const WebsiteDevelopmentProcess = () => {
    const containerRef = useRef(null);

    return (
        <section className="w-full bg-black text-white py-24 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">

                {/* Left Side - Sticky Content */}
                <div className="lg:w-1/2 lg:sticky lg:top-32 h-fit">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-xs font-mono uppercase tracking-[0.2em] text-white/50 mb-6 block">OUR WEB DEVELOPMENT PROCESS</span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1] mb-8">
                            A creative framework for digital success
                        </h2>
                        <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-xl">
                            From the first sketch to the final click, our process is designed to deliver websites that not only look beautiful but perform exceptionally. We blend creativity with technical precision to build your digital home.
                        </p>

                        <motion.button
                            className="bg-violet-600 text-white px-8 py-4 rounded-sm font-semibold text-sm tracking-wider uppercase flex items-center gap-2 hover:bg-violet-500 transition-colors"
                            whileHover={{ x: 5 }}
                        >
                            Build Your Website
                            <ArrowRight className="w-4 h-4" />
                        </motion.button>
                    </motion.div>
                </div>

                {/* Right Side - Timeline */}
                <div className="lg:w-1/2 pt-8">
                    <div className="relative">
                        {steps.map((step, index) => (
                            <ProcessStep
                                key={index}
                                step={step}
                                index={index}
                                total={steps.length}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default WebsiteDevelopmentProcess;
