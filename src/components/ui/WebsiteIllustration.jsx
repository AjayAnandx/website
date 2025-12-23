import { motion } from "framer-motion";

const WebsiteIllustration = () => {
    return (
        <div className="w-full h-full flex items-center justify-center p-4">
            {/* Browser Window */}
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full max-w-[160px] aspect-[4/3] bg-slate-900 rounded-lg border border-white/10 overflow-hidden flex flex-col shadow-2xl"
            >
                {/* Header */}
                <div className="h-4 bg-slate-800 border-b border-white/5 flex items-center gap-1.5 px-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                </div>

                {/* Body */}
                <div className="flex-1 p-3 flex flex-col gap-2">
                    {/* Hero Section */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="w-full h-12 bg-white/5 rounded-md mb-1"
                    />

                    {/* Content Grid */}
                    <div className="flex gap-2">
                        <motion.div
                            initial={{ x: -10, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                            className="flex-1 h-16 bg-white/5 rounded-md"
                        />
                        <motion.div
                            initial={{ x: 10, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.7, duration: 0.5 }}
                            className="flex-1 h-16 bg-white/5 rounded-md"
                        />
                    </div>
                </div>
            </motion.div>

            {/* Mouse Cursor Animation */}
            <motion.div
                initial={{ x: 40, y: 40, opacity: 0 }}
                animate={{
                    x: [40, 0, 0],
                    y: [40, 0, 0],
                    opacity: [0, 1, 1]
                }}
                transition={{
                    duration: 1.5,
                    times: [0, 0.6, 1],
                    repeat: Infinity,
                    repeatDelay: 2
                }}
                className="absolute bottom-6 right-6"
            >
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="drop-shadow-lg"
                >
                    <path
                        d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z"
                        fill="white"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinejoin="round"
                    />
                </svg>
            </motion.div>
        </div>
    );
};

export default WebsiteIllustration;
