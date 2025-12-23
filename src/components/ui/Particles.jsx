import { useEffect, useRef } from 'react';

const Particles = ({
    particleColors = ['#ffffff', '#ffffff'],
    particleCount = 200,
    particleSpread = 10,
    speed = 0.1,
    particleBaseSize = 100,
    moveParticlesOnHover = true,
    alphaParticles = false,
    disableRotation = false,
}) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];
        let mouseX = 0;
        let mouseY = 0;

        const resizeCanvas = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        };

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.vx = (Math.random() - 0.5) * speed;
                this.vy = (Math.random() - 0.5) * speed;
                this.size = Math.random() * particleSpread + 1;
                this.color = particleColors[Math.floor(Math.random() * particleColors.length)];
                this.rotation = Math.random() * Math.PI * 2;
                this.rotationSpeed = (Math.random() - 0.5) * 0.02;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                if (!disableRotation) {
                    this.rotation += this.rotationSpeed;
                }

                if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
                if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

                if (moveParticlesOnHover) {
                    const dx = mouseX - this.x;
                    const dy = mouseY - this.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < particleBaseSize) {
                        this.x -= dx * 0.01;
                        this.y -= dy * 0.01;
                    }
                }
            }

            draw() {
                ctx.save();
                ctx.translate(this.x, this.y);
                ctx.rotate(this.rotation);
                ctx.globalAlpha = alphaParticles ? 0.5 : 1;
                ctx.fillStyle = this.color;
                ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
                ctx.restore();
            }
        }

        const init = () => {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach((particle) => {
                particle.update();
                particle.draw();
            });
            animationFrameId = requestAnimationFrame(animate);
        };

        const handleMouseMove = (e) => {
            const rect = canvas.getBoundingClientRect();
            mouseX = e.clientX - rect.left;
            mouseY = e.clientY - rect.top;
        };

        resizeCanvas();
        init();
        animate();

        window.addEventListener('resize', resizeCanvas);
        canvas.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            canvas.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, [particleColors, particleCount, particleSpread, speed, particleBaseSize, moveParticlesOnHover, alphaParticles, disableRotation]);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'auto',
            }}
        />
    );
};

export default Particles;
