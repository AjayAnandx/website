import { useState, useEffect } from 'react';

const ClickSpark = ({
    children,
    sparkColor = '#fff',
    sparkSize = 10,
    sparkRadius = 15,
    sparkCount = 8,
    duration = 400,
}) => {
    const [sparks, setSparks] = useState([]);

    useEffect(() => {
        const handleClick = (e) => {
            const sparkId = Date.now();
            const sparkElements = [];

            for (let i = 0; i < sparkCount; i++) {
                const angle = (360 / sparkCount) * i;
                const radian = (angle * Math.PI) / 180;

                sparkElements.push({
                    id: `${sparkId}-${i}`,
                    x: e.clientX,
                    y: e.clientY,
                    angle: radian,
                });
            }

            setSparks((prev) => [...prev, ...sparkElements]);

            setTimeout(() => {
                setSparks((prev) =>
                    prev.filter((spark) => !spark.id.startsWith(sparkId.toString()))
                );
            }, duration);
        };

        document.addEventListener('click', handleClick);
        return () => document.removeEventListener('click', handleClick);
    }, [sparkCount, duration]);

    return (
        <>
            {children}
            <div className="pointer-events-none fixed inset-0 z-[9999]">
                {sparks.map((spark) => {
                    const translateX = Math.cos(spark.angle) * sparkRadius;
                    const translateY = Math.sin(spark.angle) * sparkRadius;

                    return (
                        <div
                            key={spark.id}
                            className="absolute"
                            style={{
                                left: spark.x,
                                top: spark.y,
                                width: sparkSize,
                                height: sparkSize,
                                backgroundColor: sparkColor,
                                borderRadius: '50%',
                                animation: `sparkFade ${duration}ms ease-out forwards`,
                                transform: `translate(-50%, -50%) translate(${translateX}px, ${translateY}px)`,
                            }}
                        />
                    );
                })}
            </div>
            <style>{`
                @keyframes sparkFade {
                    0% {
                        opacity: 1;
                        transform: translate(-50%, -50%) scale(1);
                    }
                    100% {
                        opacity: 0;
                        transform: translate(-50%, -50%) scale(0);
                    }
                }
            `}</style>
        </>
    );
};

export default ClickSpark;
