import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import WebsiteDevelopmentHero from '../components/ui/WebsiteDevelopmentHero';
import WebsiteDevelopmentFeatures from '../components/ui/WebsiteDevelopmentFeatures';
import WebsiteDevelopmentFoundation from '../components/ui/WebsiteDevelopmentFoundation';
import WebsiteDevelopmentProcess from '../components/ui/WebsiteDevelopmentProcess';

const WebsiteDevelopmentPage = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Seamless background transition
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
            <WebsiteDevelopmentHero />
            <WebsiteDevelopmentFeatures />
            <WebsiteDevelopmentFoundation />
            <WebsiteDevelopmentProcess />

            {/* Footer placeholder padding */}
            <div className="h-20" />
        </motion.main>
    );
};

export default WebsiteDevelopmentPage;
