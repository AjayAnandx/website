import React, { useRef } from 'react';
import { ReactLenis } from 'lenis/react';
import { useTransform, motion, useScroll } from 'framer-motion';

const caseStudies = [
    {
        id: '01',
        title: 'Software Development',
        description: 'We develop custom software tailored to your business needs focused on performance, security, and scalability. From internal tools to customer-facing applications, our software solutions are engineered to solve complex problems and evolve with your business.',
        image: '/software-dev.png',
        bgColor: 'from-blue-900 to-black',
        link: '/software-development',
        tags: ['Performance Optimized', 'Modern Tech', 'Scalability']
    },
    {
        id: '02',
        title: 'Website Development',
        description: 'We design and develop modern, high-performance websites that prioritize user experience, speed, and scalability. From brand-focused landing pages to full-scale platforms, our websites are built to convert visitors, support growth, and integrate seamlessly with your digital ecosystem.',
        image: '/website-dev.png',
        bgColor: 'from-orange-900 to-black',
        link: '/website-development',
        tags: ['UI/UX Design', 'Responsive Web', 'SEO-Ready']
    },
    {
        id: '03',
        title: 'AI & Automation',
        description: 'We build AI powered automation solutions that streamline workflows, eliminate repetitive tasks, and improve operational efficiency. By combining intelligent models with smart system integrations, we help businesses automate processes, make data driven decisions, and scale with confidence.',
        image: '/ai-app.png',
        bgColor: 'from-purple-900 to-black',
        link: '/ai-automation',
        tags: ['Automation', 'Modern Tech', 'Efficiency']
    },
    {
        id: '04',
        title: 'Course Launch Platforms',
        description: 'We create complete course launch platforms that handle content delivery, user management, payments, and automation in one seamless system. Our solutions are designed to help educators, creators, and businesses launch, manage, and grow online courses with ease.',
        image: '/course-launch.png',
        bgColor: 'from-green-900 to-black',
        link: '/course-platform',
        tags: ['Conversion Focused', 'SEO-Ready', 'User Management']
    }
];

const CaseStudyCards = () => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end'],
    });

    return (
        <ReactLenis root>
            <section className="bg-black relative z-10" ref={container}>
                <div className="h-[10vh] w-full grid place-content-center text-white pb-0">
                    <h1 className="text-4xl md:text-6xl font-bold text-center tracking-tight">
                        Our Case Studies
                    </h1>
                </div>

                <div className="w-full pb-40">
                    {caseStudies.map((project, i) => {
                        const targetScale = 1 - (caseStudies.length - i) * 0.05;
                        return (
                            <Card
                                key={project.id}
                                i={i}
                                {...project}
                                progress={scrollYProgress}
                                range={[i * 0.25, 1]}
                                targetScale={targetScale}
                            />
                        );
                    })}
                </div>
            </section>
        </ReactLenis>
    );
};

const Card = ({
    i,
    title,
    description,
    image,
    link,
    tags,
    bgColor,
    progress,
    range,
    targetScale,
}) => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'start start'],
    });

    const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        <div
            ref={container}
            className="h-screen flex items-start justify-center sticky top-0 pt-24"
        >
            <motion.div
                style={{
                    scale,
                    top: `calc(2vh + ${i * 25}px)`,
                }}
                className={`flex flex-col relative -top-[25%] h-[500px] w-[90%] md:w-[70%] rounded-3xl p-8 md:p-12 origin-top border border-white/10 bg-gradient-to-br ${bgColor} shadow-2xl overflow-hidden`}
            >
                <div className="grid md:grid-cols-2 gap-8 h-full">
                    {/* Text Section */}
                    <div className="flex flex-col justify-center gap-10 h-full relative z-20">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
                            <p className="text-white/70 text-lg leading-relaxed mb-6">{description}</p>

                            <div className="flex flex-wrap gap-3">
                                {tags && tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="border border-white/20 rounded-full px-3 py-1 text-xs font-medium text-white/80 uppercase tracking-wider bg-black/20 backdrop-blur-sm"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="flex items-center gap-2 pt-4">
                            <motion.a
                                href={link}
                                className="px-6 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-white font-medium cursor-pointer flex items-center gap-2 hover:bg-white hover:text-black transition-colors"
                                whileHover="hover"
                            >
                                Explore
                                <motion.span
                                    variants={{
                                        hover: { x: 4 }
                                    }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M5 12h14" />
                                        <path d="m12 5 7 7-7 7" />
                                    </svg>
                                </motion.span>
                            </motion.a>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="relative h-full w-full rounded-2xl overflow-hidden border border-white/10">
                        <motion.div
                            className="w-full h-full"
                            style={{ scale: imageScale }}
                        >
                            <img
                                src={image}
                                alt={title}
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default CaseStudyCards;
