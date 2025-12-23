import { motion } from "framer-motion";

const ChartIllustration = () => {
    // Animation variants for the bars
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const item = {
        hidden: { height: "10%" },
        show: {
            height: "100%",
            transition: {
                duration: 1.5,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 0.5
            }
        }
    };

    // Randomized heights for a more natural look (simulated as start points in animation or just different max heights)
    // For simplicity with the loop, we'll just vary the target height slightly or use the same generic pulse
    // To make it look like a "strategy/growth" chart, let's make them grow upwards.

    // Actually, let's define specific target heights for each bar to look like a growth trend.
    const bars = [40, 65, 45, 80, 55, 90];

    return (
        <div className="w-full h-full p-6 flex items-end justify-center gap-2">
            {bars.map((height, index) => (
                <motion.div
                    key={index}
                    initial={{ height: "10%", opacity: 0.5 }}
                    animate={{
                        height: `${height}%`,
                        opacity: 1
                    }}
                    transition={{
                        duration: 1.5,
                        ease: "easeOut",
                        delay: index * 0.2, // Stagger effect
                        repeat: Infinity,
                        repeatType: "reverse",
                        repeatDelay: 2
                    }}
                    className="w-4 bg-gradient-to-t from-purple-500 to-blue-400 rounded-t-sm"
                />
            ))}

            {/* Optional: Add a subtle line overlay or grid for more "chart" feel */}
            <div className="absolute inset-x-6 bottom-6 h-[1px] bg-white/20" />
            <div className="absolute inset-y-6 left-6 w-[1px] bg-white/20" />
        </div>
    );
};

export default ChartIllustration;
