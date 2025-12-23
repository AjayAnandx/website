import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Card = ({ children, className = '' }) => {
    return (
        <div className={`w-full h-full ${className}`}>
            {children}
        </div>
    );
};

const CardSwap = ({
    children,
    cardDistance = 60,
    verticalDistance = 70,
    delay = 5000,
    pauseOnHover = false
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const childrenArray = Array.isArray(children) ? children : [children];
    const totalCards = childrenArray.length;

    useEffect(() => {
        if (isPaused && pauseOnHover) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % totalCards);
        }, delay);

        return () => clearInterval(interval);
    }, [delay, totalCards, isPaused, pauseOnHover]);

    const handleMouseEnter = () => {
        if (pauseOnHover) {
            setIsPaused(true);
        }
    };

    const handleMouseLeave = () => {
        if (pauseOnHover) {
            setIsPaused(false);
        }
    };

    return (
        <div
            className="relative w-full h-full"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Stack of cards */}
            <div className="relative w-full h-full">
                {childrenArray.map((child, index) => {
                    const position = (index - currentIndex + totalCards) % totalCards;
                    const isActive = position === 0;
                    const zIndex = totalCards - position;

                    // Calculate offset for stacked cards
                    const xOffset = position * cardDistance;
                    const yOffset = position * verticalDistance;
                    const scale = 1 - (position * 0.05);
                    const opacity = position < 3 ? 1 : 0;

                    return (
                        <motion.div
                            key={index}
                            className="absolute inset-0"
                            style={{
                                zIndex,
                            }}
                            initial={false}
                            animate={{
                                x: xOffset,
                                y: yOffset,
                                scale: scale,
                                opacity: opacity,
                            }}
                            transition={{
                                duration: 0.5,
                                ease: [0.32, 0.72, 0, 1],
                            }}
                        >
                            {child}
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default CardSwap;
