import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import AIAutomationHero from '../components/ui/AIAutomationHero';
import AIAutomationFeatures from '../components/ui/AIAutomationFeatures';
import AIAutomationFoundation from '../components/ui/AIAutomationFoundation';
import AIAutomationProcess from '../components/ui/AIAutomationProcess';
import AIAutomationCTA from '../components/ui/AIAutomationCTA';

const AIAutomationPage = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Seamless background transition
    // 0 -> 0.2 (Hero): Deep Blue/Black
    // 0.2 -> 0.5 (Features): Darker Carbon/Black
    const backgroundColor = useTransform(
        scrollYProgress,
        [0, 0.2, 0.8],
        ["#000000", "#050505", "#000000"]
    );

    return (
        <motion.main
            ref={containerRef}
            className="min-h-[200vh]"
            style={{ backgroundColor }}
        >
            <AIAutomationHero />
            <AIAutomationFeatures />
            <AIAutomationFoundation />
            <AIAutomationProcess />

            {/* Footer placeholder padding */}
            <div className="h-20" />
        </motion.main>
    );
};

export default AIAutomationPage;
