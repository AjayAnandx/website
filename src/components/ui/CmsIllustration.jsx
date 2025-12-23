import { motion } from "framer-motion";

const CmsIllustration = () => {
    return (
        <div className="w-full h-full flex items-center justify-center bg-black/20">
            <motion.div
                initial={{ opacity: 0.5, textShadow: "0px 0px 10px rgba(168, 85, 247, 0.2)" }}
                animate={{
                    opacity: [0.8, 1, 0.8],
                    textShadow: [
                        "0px 0px 10px rgba(168, 85, 247, 0.2)",
                        "0px 0px 30px rgba(168, 85, 247, 0.8)",
                        "0px 0px 10px rgba(168, 85, 247, 0.2)"
                    ]
                }}
                transition={{
                    duration: 2,
                    ease: "easeInOut",
                    repeat: Infinity,
                }}
                className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
            >
                CMS
            </motion.div>

            {/* Ambient background glow */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                    duration: 4,
                    ease: "easeInOut",
                    repeat: Infinity,
                }}
                className="absolute w-32 h-32 bg-purple-500/20 rounded-full blur-[40px] -z-10"
            />
        </div>
    );
};

export default CmsIllustration;
