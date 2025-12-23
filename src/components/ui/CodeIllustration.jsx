import { motion } from "framer-motion";

const CodeIllustration = () => {
    return (
        <div className="w-full h-full p-6 flex flex-col justify-center">
            {/* Terminal Window Controls */}
            <div className="flex gap-2 mb-4 opacity-50">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
            </div>

            {/* Code Lines Container */}
            <div className="space-y-2.5">
                <CodeLine width="60%" color="bg-purple-400" delay={0} />
                <CodeLine width="75%" color="bg-blue-400" delay={0.2} />

                <div className="pl-4 space-y-2.5">
                    <CodeLine width="90%" color="bg-slate-400/60" delay={0.5} />
                    <CodeLine width="65%" color="bg-slate-400/60" delay={0.7} />
                    <CodeLine width="80%" color="bg-slate-400/60" delay={0.9} />
                </div>

                <CodeLine width="45%" color="bg-purple-400" delay={1.2} />

                <div className="pl-4 space-y-2.5">
                    <CodeLine width="70%" color="bg-blue-300" delay={1.5} />
                </div>
            </div>

            {/* Blinking Cursor */}
            <motion.div
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "steps(2)" }}
                className="w-2 h-4 bg-white/50 mt-2 ml-4"
            />
        </div>
    );
};

const CodeLine = ({ width, color, delay }) => (
    <motion.div
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: width, opacity: 1 }}
        transition={{
            duration: 1.2,
            delay,
            ease: "easeOut",
            repeat: Infinity,
            repeatDelay: 3,
            repeatType: "reverse"
        }}
        className={`h-2 rounded-full ${color} origin-left`}
    />
);

export default CodeIllustration;
