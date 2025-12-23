import { useRef, useEffect, useState } from 'react';

const DotGrid = ({
    dotSize = 10,
    gap = 15,
    baseColor = "#5227FF",
    activeColor = "#5227FF",
    proximity = 120,
    shockRadius = 250,
    shockStrength = 5,
    resistance = 750,
    returnDuration = 1.5
}) => {
    const canvasRef = useRef(null);
    const dotsRef = useRef([]);
    const mouseRef = useRef({ x: 0, y: 0 });
    const animationFrameRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        const rect = canvas.getBoundingClientRect();

        // Set canvas size
        canvas.width = rect.width;
        canvas.height = rect.height;

        // Initialize dots
        const dots = [];
        const cols = Math.floor(canvas.width / (dotSize + gap));
        const rows = Math.floor(canvas.height / (dotSize + gap));

        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                dots.push({
                    x: col * (dotSize + gap) + dotSize / 2,
                    y: row * (dotSize + gap) + dotSize / 2,
                    originalX: col * (dotSize + gap) + dotSize / 2,
                    originalY: row * (dotSize + gap) + dotSize / 2,
                    vx: 0,
                    vy: 0,
                    opacity: 0.3
                });
            }
        }

        dotsRef.current = dots;

        // Mouse move handler
        const handleMouseMove = (e) => {
            const rect = canvas.getBoundingClientRect();
            mouseRef.current = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            };
        };

        canvas.addEventListener('mousemove', handleMouseMove);

        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            dotsRef.current.forEach(dot => {
                const dx = mouseRef.current.x - dot.x;
                const dy = mouseRef.current.y - dot.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                // Proximity effect
                if (distance < proximity) {
                    dot.opacity = 1;
                } else {
                    dot.opacity = Math.max(0.3, dot.opacity - 0.02);
                }

                // Shock wave effect
                if (distance < shockRadius) {
                    const force = (shockRadius - distance) / shockRadius;
                    const angle = Math.atan2(dy, dx);
                    dot.vx -= Math.cos(angle) * force * shockStrength;
                    dot.vy -= Math.sin(angle) * force * shockStrength;
                }

                // Apply velocity
                dot.x += dot.vx;
                dot.y += dot.vy;

                // Return to original position
                const returnX = (dot.originalX - dot.x) / resistance;
                const returnY = (dot.originalY - dot.y) / resistance;
                dot.vx += returnX * returnDuration;
                dot.vy += returnY * returnDuration;

                // Apply resistance
                dot.vx *= 0.95;
                dot.vy *= 0.95;

                // Draw dot
                ctx.fillStyle = distance < proximity ? activeColor : baseColor;
                ctx.globalAlpha = dot.opacity;
                ctx.beginPath();
                ctx.arc(dot.x, dot.y, dotSize / 2, 0, Math.PI * 2);
                ctx.fill();
            });

            ctx.globalAlpha = 1;
            animationFrameRef.current = requestAnimationFrame(animate);
        };

        animate();

        // Cleanup
        return () => {
            canvas.removeEventListener('mousemove', handleMouseMove);
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [dotSize, gap, baseColor, activeColor, proximity, shockRadius, shockStrength, resistance, returnDuration]);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full"
            style={{ pointerEvents: 'auto' }}
        />
    );
};

export default DotGrid;
