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

const SoftwareDevelopmentFoundation = () => {
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
                        <span className="text-blue-500 font-mono text-xs uppercase tracking-[0.2em] mb-4 block">SOFTWARE DEVELOPMENT FOUNDATION</span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-tight leading-[1.1] max-w-4xl">
                            The engineering excellence behind every application we build
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
                            We don’t just write code—we engineer robust, scalable software ecosystems that drive efficiency, user engagement, and business growth. Discover how we help organizations build better software.
                        </p>
                    </motion.div>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Row 1 */}
                    <FoundationCard
                        label="Strategic Architecture"
                        title="Clarity"
                        description="We analyze your requirements to define a clear technical architecture that ensures scalability, security, and performance from day one."
                        icon={<IconClarity />}
                        delay={0.1}
                        className="lg:col-span-2 min-h-[280px]"
                    />
                    <FoundationCard
                        label="Collaborative Development"
                        title="Partnership"
                        description="We work as an extension of your product team, aligning technical decisions with your business goals for seamless delivery."
                        icon={<IconPartnership />}
                        delay={0.2}
                        className="lg:col-span-1 min-h-[280px]"
                    />

                    {/* Row 2 */}
                    <FoundationCard
                        label="Precision Engineering"
                        title="Quality"
                        description="We write clean, maintainable code with automated testing and continuous integration to ensure high availability and low technical debt."
                        icon={<IconEngineering />}
                        delay={0.3}
                        className="lg:col-span-1 min-h-[280px]"
                    />
                    <FoundationCard
                        label="Agile Evolution"
                        title="Agility"
                        description="Our development process creates software that adapts—iterating quickly based on user feedback and changing market needs."
                        icon={<IconEvolution />}
                        delay={0.4}
                        className="lg:col-span-1 min-h-[280px]"
                    />
                    <FoundationCard
                        label="Technical Leadership"
                        title="Innovation"
                        description="We stay ahead of emerging technologies to provide you with a competitive edge through modern, efficient software solutions."
                        icon={<IconLeadership />}
                        delay={0.5}
                        className="lg:col-span-1 min-h-[280px]"
                    />
                </div>
            </div>
        </section>
    );
};

// Icons
const IconClarity = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter">
        <path d="M21 12H3M21 12L14 5M21 12L14 19" />
    </svg>
);

const IconPartnership = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter">
        <circle cx="12" cy="12" r="10" />
        <path d="M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z" />
    </svg>
);

const IconEngineering = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" />
        <path d="M2 17L12 22L22 17" />
        <path d="M2 12L12 17L22 12" />
    </svg>
);

const IconEvolution = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter">
        <path d="M12 4V20" />
        <path d="M4 12H20" />
        <path d="M16 8L20 12L16 16" />
        <path d="M8 16L4 12L8 8" />
    </svg>
);

const IconLeadership = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter">
        <path d="M6 9H18V21H6V9Z" />
        <path d="M12 3L6 9H18L12 3Z" />
    </svg>
);

export default SoftwareDevelopmentFoundation;
