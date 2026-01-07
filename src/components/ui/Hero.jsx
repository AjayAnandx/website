import FloatingLines from './FloatingLines';
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "./Badge";
import Button from "./Button";
import { ChevronRight, Play, X } from "lucide-react";
import TextType from "./TextType";
import { useState } from 'react';

const Hero = () => {
    const [showVideo, setShowVideo] = useState(false);

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 overflow-hidden bg-black">
            {/* Spline 3D Background */}
            {/* FloatingLines Background */}
            <div className="absolute inset-0 z-0 w-full h-full opacity-40">
                <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                    <FloatingLines
                        enabledWaves={['top', 'middle', 'bottom']}
                        lineCount={[10, 15, 20]}
                        lineDistance={[8, 6, 4]}
                        bendRadius={5.0}
                        bendStrength={-0.5}
                        interactive={true}
                        parallax={true}
                    />
                </div>
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Badge className="mb-8">Vision for Future</Badge>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]"
                >
                    <TextType
                        text={["Built for Speed.", "Designed for Growth."]}
                        typingSpeed={75}
                        pauseDuration={1500}
                        showCursor={true}
                        cursorCharacter="|"
                    />
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg md:text-xl text-white/80 max-w-2xl mb-10"
                >
                    We empowers businesses to automate smarter, personalize deeper, and innovate faster.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center gap-4"
                >
                    <Button size="lg" className="w-full sm:w-auto group shadow-[0_0_30px_rgba(255,255,255,0.6)] md:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                        Get started
                        <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </Button>
                    <Button
                        variant="secondary"
                        size="lg"
                        className="w-full sm:w-auto group bg-white text-black border-white md:text-white md:bg-white/10 md:border-white/10 hover:bg-white/90 md:hover:bg-white/20"
                        onClick={() => setShowVideo(true)}
                    >
                        <Play className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform fill-black md:fill-white" />
                        Introduction
                    </Button>
                </motion.div>

                {/* Floating cards or visual elements could go here later */}
            </div>

            {/* Video Modal */}
            <AnimatePresence>
                {showVideo && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                        onClick={() => setShowVideo(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-4xl bg-black rounded-xl overflow-hidden shadow-2xl border border-white/10"
                        >
                            <button
                                onClick={() => setShowVideo(false)}
                                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-white/20 transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            <div className="relative pt-[56.25%] w-full">
                                <video
                                    src="/intro-video.mp4"
                                    controls
                                    autoPlay
                                    className="absolute top-0 left-0 w-full h-full object-cover"
                                ></video>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="absolute bottom-0 w-full h-32 md:h-96 bg-gradient-to-t from-black via-black/80 to-transparent z-10 pointer-events-none" />

        </section>
    );
};

export default Hero;
