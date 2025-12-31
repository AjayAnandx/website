import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const greetings = [
    "Hello",
    "Bonjour",
    "Ciao",
    "Olà",
    "やあ",
    "Hallå",
    "Guten tag",
    "Hallo"
];

const HelloLoader = ({ onComplete }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index >= greetings.length - 1) {
            // After last greeting, wait a bit and then complete
            // Reduced wait time for snappier exit
            const timer = setTimeout(() => {
                onComplete?.();
            }, 800);
            return () => clearTimeout(timer);
        }

        // Uniform timing for all words "slowly and equal gap"
        const duration = 800;

        const timer = setTimeout(() => {
            setIndex((prev) => prev + 1);
        }, duration);

        return () => clearTimeout(timer);
    }, [index, onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
            initial={{ opacity: 1 }}
            exit={{
                opacity: 0,
                transition: { duration: 1.1, ease: [0.25, 1, 0.5, 1] } // Matches site reveal
            }}
        >
            <AnimatePresence mode="wait">
                {index < greetings.length && (
                    <motion.h1
                        key={greetings[index]}
                        className="text-4xl md:text-6xl font-medium text-white tracking-tight font-sans"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10, position: 'absolute' }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                        {greetings[index]}
                    </motion.h1>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default HelloLoader;
