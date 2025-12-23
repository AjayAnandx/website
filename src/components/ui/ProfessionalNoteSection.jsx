import { motion } from "framer-motion";

const ProfessionalNoteSection = () => {
    return (
        <section className="py-20 bg-black relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">

                    {/* Left Side - Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative group"
                    >
                        <div className="relative overflow-hidden rounded-2xl">
                            {/* Glow effect behind image */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>

                            <div className="relative">
                                <img
                                    src="/office-workspace.jpg"
                                    alt="Professional team working in modern office"
                                    className="w-full h-[500px] object-cover rounded-2xl"
                                />
                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-purple-500/20 rounded-2xl"></div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-10"
                    >
                        {/* Main Title */}
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                                On a <span className="italic font-serif text-white/90">professional</span> note
                            </h2>
                        </div>

                        {/* Section 1: Passionate about digital excellence */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="space-y-3"
                        >
                            <h3 className="text-2xl font-semibold text-white">
                                We're passionate about digital excellence
                            </h3>
                            <p className="text-white/70 text-lg leading-relaxed">
                                Our team is driven by a shared mission to create visually stunning,
                                high-performing websites. We stay ahead of trends and use cutting-edge
                                techniques to help your brand stand out.
                            </p>
                        </motion.div>

                        {/* Section 2: Quality at the forefront */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="space-y-3"
                        >
                            <h3 className="text-2xl font-semibold text-white">
                                Quality at the forefront
                            </h3>
                            <p className="text-white/70 text-lg leading-relaxed">
                                Every project is crafted with attention to detail and a commitment to
                                deliver exceptional results that not only look great but also drive
                                performance.
                            </p>
                        </motion.div>

                        {/* Section 3: Focus on measurable impact */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="space-y-3"
                        >
                            <h3 className="text-2xl font-semibold text-white">
                                Focus on measurable impact
                            </h3>
                            <p className="text-white/70 text-lg leading-relaxed">
                                We design strategies that prioritize growth. Our focus is on delivering
                                tangible results that move the needle for your business and create
                                lasting value.
                            </p>
                        </motion.div>

                        {/* Optional: Decorative element */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="pt-6"
                        >
                            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default ProfessionalNoteSection;
