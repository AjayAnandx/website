import { useState, useEffect } from 'react';

const TextType = ({
    text = [],
    typingSpeed = 75,
    pauseDuration = 1500,
    showCursor = true,
    cursorCharacter = "|"
}) => {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        if (text.length === 0) return;

        const currentText = text[currentIndex];

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                // Typing
                if (charIndex < currentText.length) {
                    setDisplayText(currentText.substring(0, charIndex + 1));
                    setCharIndex(charIndex + 1);
                } else {
                    // Finished typing, pause then start deleting
                    setTimeout(() => setIsDeleting(true), pauseDuration);
                }
            } else {
                // Deleting
                if (charIndex > 0) {
                    setDisplayText(currentText.substring(0, charIndex - 1));
                    setCharIndex(charIndex - 1);
                } else {
                    // Finished deleting, move to next text
                    setIsDeleting(false);
                    setCurrentIndex((currentIndex + 1) % text.length);
                }
            }
        }, isDeleting ? typingSpeed / 2 : typingSpeed);

        return () => clearTimeout(timeout);
    }, [charIndex, currentIndex, isDeleting, text, typingSpeed, pauseDuration]);

    return (
        <span className="inline-block">
            {displayText}
            {showCursor && (
                <span className="animate-pulse ml-1">{cursorCharacter}</span>
            )}
        </span>
    );
};

export default TextType;
