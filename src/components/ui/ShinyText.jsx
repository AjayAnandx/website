import { CSSProperties } from 'react';

const ShinyText = ({
    text = "Shiny Text",
    disabled = false,
    speed = 3,
    className = ''
}) => {
    const animationDuration = `${speed}s`;

    const shimmerStyle = {
        background: disabled
            ? 'transparent'
            : 'linear-gradient(110deg, transparent 33%, rgba(255, 255, 255, 0.3) 50%, transparent 66%)',
        backgroundSize: '200% 100%',
        animation: disabled ? 'none' : `shimmer ${animationDuration} linear infinite`,
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
    };

    return (
        <>
            <span
                className={`inline-block ${className}`}
                style={shimmerStyle}
            >
                {text}
            </span>
            <style>{`
                @keyframes shimmer {
                    0% {
                        background-position: 200% 0;
                    }
                    100% {
                        background-position: -200% 0;
                    }
                }
            `}</style>
        </>
    );
};

export default ShinyText;
