import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const VisionLoader = ({ onComplete }) => {
    const [phase, setPhase] = useState(0);
    // Phase 0: Typing text
    // Phase 1: Loading bar filling
    // Phase 2: O zoom transition
    // Phase 3: Exit to homepage

    const [typedText, setTypedText] = useState('');
    const [loadingProgress, setLoadingProgress] = useState(0);
    const [showLoadingBar, setShowLoadingBar] = useState(false);
    const fullText = 'Vision for Future';

    // Typing effect
    useEffect(() => {
        if (phase !== 0) return;

        let currentIndex = 0;
        const typingInterval = setInterval(() => {
            if (currentIndex <= fullText.length) {
                setTypedText(fullText.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(typingInterval);
                setShowLoadingBar(true);
                setPhase(1);
            }
        }, 30); // Faster typing speed

        return () => clearInterval(typingInterval);
    }, [phase]);

    // Loading bar progress
    useEffect(() => {
        if (phase !== 1) return;

        const startTime = Date.now();
        const duration = 1200; // 1.2 seconds to fill

        const progressInterval = setInterval(() => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            setLoadingProgress(progress);

            if (progress >= 1) {
                clearInterval(progressInterval);
                setTimeout(() => setPhase(2), 200);
            }
        }, 16);

        return () => clearInterval(progressInterval);
    }, [phase]);

    // O zoom and exit
    useEffect(() => {
        if (phase === 2) {
            const timer = setTimeout(() => setPhase(3), 800);
            return () => clearTimeout(timer);
        }
        if (phase === 3) {
            const timer = setTimeout(() => onComplete?.(), 600);
            return () => clearTimeout(timer);
        }
    }, [phase, onComplete]);

    // Split text into characters with special handling for "O"
    const renderText = () => {
        const words = fullText.split(' ');
        let charIndex = 0;

        return words.map((word, wordIndex) => (
            <span key={wordIndex} className="inline-block">
                {word.split('').map((char, i) => {
                    const currentCharIndex = charIndex;
                    charIndex++;
                    const isTyped = currentCharIndex < typedText.length;
                    const isO = word === 'Vision' && char === 'O';

                    if (isO && phase >= 2) {
                        return (
                            <motion.span
                                key={i}
                                className="inline-block text-white"
                                initial={{ opacity: 1 }}
                                animate={{ opacity: 0 }}
                                transition={{
                                    duration: 0.5,
                                    ease: 'easeOut',
                                }}
                            >
                                O
                            </motion.span>
                        );
                    }

                    return (
                        <motion.span
                            key={i}
                            className="inline-block"
                            initial={{ opacity: 0, y: 10, filter: 'blur(10px)' }}
                            animate={{
                                opacity: isTyped ? 1 : 0,
                                y: isTyped ? 0 : 10,
                                filter: isTyped ? 'blur(0px)' : 'blur(10px)'
                            }}
                            transition={{
                                duration: 0.4,
                                ease: 'easeOut',
                            }}
                        >
                            {char}
                        </motion.span>
                    );
                })}
                {wordIndex < words.length - 1 && (
                    <span className="inline-block w-2" />
                )}
            </span>
        ));
    };

    return (
        <AnimatePresence>
            {phase < 3 && (
                <motion.div
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black perspective-1000"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                >

                    {/* Glass Container */}
                    <motion.div
                        className="relative z-10 text-center p-12 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_50px_-12px_rgba(255,255,255,0.1)]"
                        initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
                        animate={phase >= 2
                            ? { opacity: 0, scale: 0.8, rotateX: 0 }
                            : { opacity: 1, scale: 1, rotateX: 0 }
                        }
                        transition={{
                            duration: 0.6,
                            type: "spring",
                            stiffness: 100,
                            damping: 20
                        }}
                    >
                        {/* Main Text */}
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6 drop-shadow-lg">
                            {renderText()}
                        </h1>

                        {/* Loading Bar */}
                        <motion.div
                            className="relative w-64 md:w-80 mx-auto h-[4px] bg-white/5 rounded-full overflow-hidden backdrop-blur-sm border border-white/5"
                            initial={{ opacity: 0, scaleX: 0 }}
                            animate={{
                                opacity: showLoadingBar ? 1 : 0,
                                scaleX: showLoadingBar ? 1 : 0
                            }}
                            transition={{ duration: 0.3, ease: 'easeOut' }}
                        >
                            {/* Progress Fill */}
                            <motion.div
                                className="absolute inset-y-0 left-0 rounded-full"
                                style={{
                                    width: `${loadingProgress * 100}%`,
                                    background: 'linear-gradient(90deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,0.8) 100%)',
                                    boxShadow: '0 0 20px rgba(255,255,255,0.5)',
                                }}
                            />
                        </motion.div>

                        {/* Loading Percentage */}
                        <motion.p
                            className="mt-4 text-white/60 text-sm font-mono tracking-widest"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: showLoadingBar ? 1 : 0 }}
                            transition={{ duration: 0.3, delay: 0.2 }}
                        >
                            {Math.round(loadingProgress * 100)}%
                        </motion.p>
                    </motion.div>

                    {/* Decorative elements */}
                    <motion.div
                        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{
                            opacity: phase < 2 ? 0.5 : 0,
                            y: phase < 2 ? 0 : 20
                        }}
                        transition={{ duration: 0.4, delay: 0.5 }}
                    >
                        <div className="w-1 h-1 rounded-full bg-purple-500" />
                        <div className="w-1 h-1 rounded-full bg-white/30" />
                        <div className="w-1 h-1 rounded-full bg-white/30" />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default VisionLoader;
