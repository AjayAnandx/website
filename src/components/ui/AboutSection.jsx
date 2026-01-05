import { motion } from "framer-motion";
import Particles from "./Particles";

const AboutSection = () => {
    const teamAvatars = [
        "https://i.pravatar.cc/150?img=1",
        "https://i.pravatar.cc/150?img=2",
        "https://i.pravatar.cc/150?img=3",
        "https://i.pravatar.cc/150?img=4",
    ];

    return (
        <section className="py-32 bg-black relative overflow-hidden">
            {/* Particles Background */}
            <div className="absolute inset-0 z-0">
                <Particles
                    particleColors={['#ffffff', '#ffffff']}
                    particleCount={200}
                    particleSpread={10}
                    speed={0.1}
                    particleBaseSize={100}
                    moveParticlesOnHover={true}
                    alphaParticles={false}
                    disableRotation={false}
                />
            </div>

            <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">

                {/* Team Avatars */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center justify-center mb-12"
                >
                    <div className="flex items-center -space-x-3">
                        {teamAvatars.map((avatar, index) => (
                            <div
                                key={index}
                                className="w-12 h-12 rounded-full border-2 border-black overflow-hidden bg-white/10"
                            >
                                <img
                                    src={avatar}
                                    alt={`Team member ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                        <div className="w-12 h-12 rounded-full border-2 border-black bg-white/10 flex items-center justify-center">
                            <span className="text-sm font-bold text-white">+</span>
                        </div>
                    </div>
                </motion.div>

                {/* Main Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
                >
                    We empower brands to grow smarter with AI automation,{" "}
                    <span className="text-white/50">
                        building{" "}
                    </span>
                    <span className="text-white">scalable, intelligent systems</span>
                    <span className="text-white/50">
                        {" "}that work seamlessly across operations.
                    </span>
                </motion.h2>

            </div>
        </section>
    );
};

export default AboutSection;
