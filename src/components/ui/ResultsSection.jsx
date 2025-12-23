import { motion } from "framer-motion";
import CountUp from "./CountUp";

const stats = [
    {
        numericValue: 150,
        suffix: "+",
        title: "Project success",
        description: "Delivered across 20+ countries—from startups to top corporations."
    },
    {
        numericValue: 100,
        suffix: "%",
        title: "Client efficiency",
        description: "Clients reporting enhanced efficiency with our custom strategies."
    },
    {
        numericValue: 300,
        suffix: "+",
        title: "AI innovation",
        description: "Hours spent crafting smart AI tools to optimize workflows across key industries."
    },
    {
        numericValue: 75,
        suffix: "+",
        title: "Industry recognition",
        description: "Recognized for design, tech, and sustainability—past five years."
    }
];

const ResultsSection = () => {
    return (
        <section className="py-32 bg-black relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-5xl md:text-6xl lg:text-7xl font-bold"
                    >
                        Our Results
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-white/60 max-w-md text-sm md:text-base leading-relaxed"
                    >
                        Tangible results, not empty claims — we build efficient AI tools that scale, optimize, and save valuable hours.
                    </motion.p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="relative bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group overflow-hidden"
                        >
                            {/* Liquid Glass Background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-500" />

                            {/* Animated Gradient Orb */}
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />

                            {/* Shimmer Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                            {/* Glass Reflection */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Content */}
                            <div className="relative z-10">
                                <div className="text-5xl md:text-6xl font-bold mb-6 group-hover:scale-105 transition-transform">
                                    <CountUp
                                        from={0}
                                        to={stat.numericValue}
                                        separator=","
                                        direction="up"
                                        duration={2}
                                        suffix={stat.suffix}
                                        className="count-up-text"
                                    />
                                </div>
                                <h3 className="text-xl font-semibold mb-3">
                                    {stat.title}
                                </h3>
                                <p className="text-white/50 text-sm leading-relaxed">
                                    {stat.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ResultsSection;
