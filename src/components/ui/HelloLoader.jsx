import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const greetings = [
    "Hello",        // English (Priority)
    "Annyeong",     // Korean
    "Bonjour",      // French
    "Ciao",         // Italian
    "Hallå",        // Swedish
    "Hallo",        // German
    "Hola",         // Spanish
    "Konnichiwa",   // Japanese
    "Namaste",      // Hindi
    "Ni hao",       // Chinese (Simplified Pinyin)
    "Olá"           // Portuguese
];

const HelloLoader = ({ onComplete }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        // Show each greeting for a short duration
        // The total duration should feel snappy but readable

        if (index >= greetings.length) {
            // After last greeting, wait a bit and then complete
            const timer = setTimeout(() => {
                onComplete?.();
            }, 600); // Slight pause on the last word
            return () => clearTimeout(timer);
        }

        // Apple's "Hello" animation varies speed. Starts slow, gets fast, ends slow.
        // Simplified dynamic timing:
        // First word: long
        // Last word: long
        // Middle words: fast
        let duration = 180; // Standard fast pulse for middle words
        if (index === 0) duration = 1000; // Initial "Hello"
        else if (index === greetings.length - 1) duration = 1000; // Final word

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
