import React from 'react';
import { motion } from 'framer-motion';

const FoundationCard = ({ icon, label, title, description, delay = 0, className = "" }) => {
    return (
        <motion.div
            className={`bg-white border border-gray-200 rounded-2xl p-8 flex flex-col justify-between hover:border-gray-300 transition-all duration-300 hover:shadow-xl group ${className}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: delay, ease: [0.25, 0.1, 0.25, 1.0] }}
        >
            <div className="flex justify-between items-start mb-6">
                <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-black/60 mb-3 block">{label}</span>
                    <span className="text-2xl md:text-3xl font-medium tracking-tight text-black block">{title}</span>
                </div>
                {icon && <div className="p-3 bg-black text-white rounded-lg opacity-100 shadow-sm">{icon}</div>}
            </div>
            <div className="mt-auto">
                <p className="text-black text-sm leading-relaxed font-medium">{description}</p>
            </div>
        </motion.div>
    );
};

const WebsiteDevelopmentFoundation = () => {
    return (
        <section className="w-full py-24 px-6 md:px-12 lg:px-24 bg-black relative z-10">
            <div className="max-w-7xl mx-auto">
                {/* Header - Centered */}
                <div className="flex flex-col items-center text-center mb-20 gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-blue-500 font-mono text-xs uppercase tracking-[0.2em] mb-4 block">WEBSITE DEVELOPMENT FOUNDATION</span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-tight leading-[1.1] max-w-4xl">
                            The principles behind every digital experience we craft
                        </h2>
                    </motion.div>
                    <motion.div
                        className="max-w-2xl"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <p className="text-[#a1a1aa] text-lg leading-relaxed">
                            A great website is more than just code—it’s a blend of strategy, design, and performance. We build digital foundations that support your brand's growth and connect with your audience.
                        </p>
                    </motion.div>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Row 1 */}
                    <FoundationCard
                        label="User-Centric Design"
                        title="Experience"
                        description="We design with the user in mind, crafting intuitive interfaces and journeys that guide visitors effortlessly towards your goals."
                        icon={<IconExperience />}
                        delay={0.1}
                        className="lg:col-span-2 min-h-[280px]"
                    />
                    <FoundationCard
                        label="Brand Identity"
                        title="Aesthetics"
                        description="We translate your brand values into visual elements, ensuring your website is a true and compelling reflection of your business."
                        icon={<IconAesthetics />}
                        delay={0.2}
                        className="lg:col-span-1 min-h-[280px]"
                    />

                    {/* Row 2 */}
                    <FoundationCard
                        label="Technical Excellence"
                        title="Performance"
                        description="We build on modern stacks that ensure fast load times, security, and scalability, providing a solid technical foundation."
                        icon={<IconPerformance />}
                        delay={0.3}
                        className="lg:col-span-1 min-h-[280px]"
                    />
                    <FoundationCard
                        label="Search Visibility"
                        title="Discovery"
                        description="Our websites are architected for search engines, helping you get found by the right audience through organic search."
                        icon={<IconDiscovery />}
                        delay={0.4}
                        className="lg:col-span-1 min-h-[280px]"
                    />
                    <FoundationCard
                        label="Conversion Focus"
                        title="Growth"
                        description="Every element is optimized for conversion, turning casual visitors into leads and customers to drive tangible business results."
                        icon={<IconGrowth />}
                        delay={0.5}
                        className="lg:col-span-1 min-h-[280px]"
                    />
                </div>
            </div>
        </section>
    );
};

// Icons
const IconExperience = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
        <path d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14" />
        <path d="M9 9H9.01" />
        <path d="M15 9H15.01" />
    </svg>
);

const IconAesthetics = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter">
        <path d="M12 19L19 12L22 15L15 22L12 19Z" />
        <path d="M2 12L5 9M19 5L22 2" />
        <path d="M22 22L2 2" />
    </svg>
); // Abstract pencil/design tool

const IconPerformance = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter">
        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" />
    </svg>
);

const IconDiscovery = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter">
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21L16.65 16.65" />
    </svg>
);

const IconGrowth = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter">
        <path d="M23 6L13.5 15.5L8.5 10.5L1 18" />
        <path d="M17 6H23V12" />
    </svg>
);

export default WebsiteDevelopmentFoundation;
