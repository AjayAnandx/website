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

const CoursePlatformFoundation = () => {
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
                        <span className="text-blue-500 font-mono text-xs uppercase tracking-[0.2em] mb-4 block">PLATFORM FOUNDATION</span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-tight leading-[1.1] max-w-4xl">
                            The infrastructure that powers successful academies
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
                            We build course platforms that go beyond video hosting. Our focus is on engagement, scalability, and providing a premium learning experience that builds your authority and brand.
                        </p>
                    </motion.div>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Row 1 */}
                    <FoundationCard
                        label="Student Success"
                        title="Engagement"
                        description="Interactive tools, community features, and gamification elements that keep students motivated and coming back for more."
                        icon={<IconEngagement />}
                        delay={0.1}
                        className="lg:col-span-2 min-h-[280px]"
                    />
                    <FoundationCard
                        label="Infrastructure"
                        title="Scalability"
                        description="Cloud-based architecture that handles thousands of concurrent users and unlimited media storage without missing a beat."
                        icon={<IconScalability />}
                        delay={0.2}
                        className="lg:col-span-1 min-h-[280px]"
                    />

                    {/* Row 2 */}
                    <FoundationCard
                        label="Data Protection"
                        title="Security"
                        description="Enterprise-grade security to protect your intellectual property, student data, and transactions."
                        icon={<IconSecurity />}
                        delay={0.3}
                        className="lg:col-span-1 min-h-[280px]"
                    />
                    <FoundationCard
                        label="Workflow Efficiency"
                        title="Automation"
                        description="Automate enrollment, emails, certificate generation, and more to save time and focus on teaching."
                        icon={<IconAutomation />}
                        delay={0.4}
                        className="lg:col-span-1 min-h-[280px]"
                    />
                    <FoundationCard
                        label="Platform Agility"
                        title="Integration"
                        description="Seamlessly connect with your existing marketing tools, CRMs, and payment gateways for a unified ecosystem."
                        icon={<IconIntegration />}
                        delay={0.5}
                        className="lg:col-span-1 min-h-[280px]"
                    />
                </div>
            </div>
        </section>
    );
};

// Icons
const IconEngagement = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
);

const IconScalability = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
);

const IconSecurity = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
);

const IconAutomation = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
    </svg>
); // Simplified clock/cycle

const IconIntegration = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter">
        <circle cx="18" cy="18" r="3" />
        <circle cx="6" cy="6" r="3" />
        <path d="M13 6h3a2 2 0 0 1 2 2v7" />
        <path d="M6 9v7a2 2 0 0 0 2 2h3" />
    </svg>
);

export default CoursePlatformFoundation;
