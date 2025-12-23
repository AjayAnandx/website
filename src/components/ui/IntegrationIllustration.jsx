import { motion } from "framer-motion";

const IntegrationIllustration = () => {
    return (
        <div className="w-full h-full relative flex items-center justify-center p-4">
            {/* Connecting Lines */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                <motion.line
                    x1="50" y1="50" x2="20" y2="30"
                    stroke="rgba(255,255,255,0.2)"
                    strokeWidth="1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", repeatDelay: 1 }}
                />
                <motion.line
                    x1="50" y1="50" x2="80" y2="30"
                    stroke="rgba(255,255,255,0.2)"
                    strokeWidth="1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.5, repeat: Infinity, repeatType: "reverse", repeatDelay: 1 }}
                />
                <motion.line
                    x1="50" y1="50" x2="50" y2="80"
                    stroke="rgba(255,255,255,0.2)"
                    strokeWidth="1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 1, repeat: Infinity, repeatType: "reverse", repeatDelay: 1 }}
                />
            </svg>

            {/* Central Hub */}
            <motion.div
                animate={{ scale: [1, 1.1, 1], boxShadow: ["0 0 0px rgba(168, 85, 247, 0)", "0 0 20px rgba(168, 85, 247, 0.5)", "0 0 0px rgba(168, 85, 247, 0)"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 z-10 flex items-center justify-center border border-white/20"
            >
                <div className="w-4 h-4 rounded-full bg-white/50" />
            </motion.div>

            {/* Satellite Nodes */}
            <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-8 left-8 w-8 h-8 rounded-full bg-slate-700/80 backdrop-blur-sm border border-white/10 flex items-center justify-center"
            >
                <div className="w-2 h-2 rounded-full bg-blue-400" />
            </motion.div>

            <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 5, delay: 1, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-8 right-8 w-8 h-8 rounded-full bg-slate-700/80 backdrop-blur-sm border border-white/10 flex items-center justify-center"
            >
                <div className="w-2 h-2 rounded-full bg-green-400" />
            </motion.div>

            <motion.div
                animate={{ y: [-3, 3, -3] }}
                transition={{ duration: 4.5, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-700/80 backdrop-blur-sm border border-white/10 flex items-center justify-center"
            >
                <div className="w-2 h-2 rounded-full bg-purple-400" />
            </motion.div>

        </div>
    );
};

export default IntegrationIllustration;
