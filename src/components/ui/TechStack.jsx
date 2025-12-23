import React from 'react';
import LogoLoop from './LogoLoop';

const TechIcon = ({ icon, name }) => (
    <div className="flex items-center gap-3">
        {icon}
        <span className="text-white font-bold text-2xl">{name}</span>
    </div>
);

const techLogos = [
    { node: <TechIcon icon={<svg className="w-10 h-10 text-[#61DAFB]" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="2" /><path d="M12 2c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2s2-.9 2-2V4c0-1.1-.9-2-2-2zm6.5 4.5c-.8-.8-2-.8-2.8 0l-2.8 2.8c-.8.8-.8 2 0 2.8.8.8 2 .8 2.8 0l2.8-2.8c.8-.8.8-2 0-2.8z" /></svg>} name="React" /> },
    { node: <TechIcon icon={<svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M11.5 0l-1.5 1.5v9l1.5 1.5h9L22 10.5v-9L20.5 0h-9zm4.5 4.5h3v3h-3v-3zm-6 6h3v3h-3v-3z" /></svg>} name="Next.js" /> },
    { node: <TechIcon icon={<svg className="w-10 h-10 text-[#339933]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" /></svg>} name="Node.js" /> },
    { node: <TechIcon icon={<svg className="w-10 h-10 text-[#3776AB]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.2L19.8 8 12 11.8 4.2 8 12 4.2zM4 9.5l7 3.5v7l-7-3.5v-7zm9 10.5v-7l7-3.5v7l-7 3.5z" /></svg>} name="Python" /> },
    { node: <TechIcon icon={<svg className="w-10 h-10 text-[#FF6F00]" fill="currentColor" viewBox="0 0 24 24"><rect x="4" y="4" width="7" height="7" /><rect x="13" y="4" width="7" height="7" /><rect x="4" y="13" width="7" height="7" /><rect x="13" y="13" width="7" height="7" /></svg>} name="TensorFlow" /> },
    { node: <TechIcon icon={<svg className="w-10 h-10 text-[#EE4C2C]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>} name="PyTorch" /> },
    { node: <TechIcon icon={<svg className="w-10 h-10 text-[#47A248]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v3c-3.31-.48-6-3.17-6.5-6.5h3c.45 2.1 2.05 3.7 4.15 4.15zm0-9c-2.1.45-3.7 2.05-4.15 4.15h-3c.48-3.31 3.17-6 6.5-6.5v3zm2 0v-3c3.31.48 6 3.17 6.5 6.5h-3c-.45-2.1-2.05-3.7-4.15-4.15z" /></svg>} name="MongoDB" /> },
    { node: <TechIcon icon={<svg className="w-10 h-10 text-[#336791]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" /></svg>} name="PostgreSQL" /> },
    { node: <TechIcon icon={<svg className="w-10 h-10 text-[#FF9900]" fill="currentColor" viewBox="0 0 24 24"><path d="M6 2L2 6v12l4 4h12l4-4V6l-4-4H6zm6 2.5L18.5 12 12 19.5 5.5 12 12 4.5z" /></svg>} name="AWS" /> },
    { node: <TechIcon icon={<svg className="w-10 h-10 text-[#2496ED]" fill="currentColor" viewBox="0 0 24 24"><rect x="5" y="7" width="6" height="10" rx="1" /><rect x="13" y="7" width="6" height="10" rx="1" /></svg>} name="Docker" /> },
    { node: <TechIcon icon={<svg className="w-10 h-10 text-[#326CE5]" fill="currentColor" viewBox="0 0 24 24"><path d="M10 2v4h4V2h-4zm0 6v4h4V8h-4zm-6 0v4h4V8H4zm6 6v4h4v-4h-4zm6-6v4h4V8h-4z" /></svg>} name="Kubernetes" /> },
    { node: <TechIcon icon={<svg className="w-10 h-10 text-[#3178C6]" fill="currentColor" viewBox="0 0 24 24"><path d="M2 4h20v16H2V4zm2 2v12h16V6H4zm3 3h10v2H7V9zm0 4h7v2H7v-2z" /></svg>} name="TypeScript" /> },
    { node: <TechIcon icon={<svg className="w-10 h-10 text-[#E10098]" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" /><path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 4l6 3-6 3-6-3 6-3z" /></svg>} name="GraphQL" /> },
    { node: <TechIcon icon={<svg className="w-10 h-10 text-[#DC382D]" fill="currentColor" viewBox="0 0 24 24"><rect x="4" y="4" width="7" height="7" /><rect x="13" y="4" width="7" height="7" /><rect x="4" y="13" width="7" height="7" /><rect x="13" y="13" width="7" height="7" /></svg>} name="Redis" /> },
    { node: <TechIcon icon={<svg className="w-10 h-10 text-[#06B6D4]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>} name="Tailwind" /> }
];

const TechStack = () => {
    return (
        <section className="py-20 bg-transparent relative overflow-hidden">
            {/* Title Section */}
            <div className="container mx-auto px-6 mb-12 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                    Our Tech Stack
                </h2>
            </div>

            {/* Full-Width Logo Loop */}
            <div className="w-full">
                <LogoLoop
                    logos={techLogos}
                    speed={60}
                    direction="left"
                    logoHeight={48}
                    gap={80}
                    pauseOnHover={true}
                    fadeOut={false}
                    scaleOnHover={false}
                    ariaLabel="Technology stack"
                />
            </div>
        </section>
    );
};

export default TechStack;
