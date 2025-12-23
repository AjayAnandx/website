import { motion } from "framer-motion";
import { MessageSquare, Phone, MapPin } from "lucide-react";

const contactMethods = [
    {
        icon: MessageSquare,
        title: "Chat to sales",
        description: "Contact our sales team.",
        contact: "sales@etery.com"
    },
    {
        icon: Phone,
        title: "Call Us",
        description: "Get instant help.",
        contact: "+359 88 777 980"
    },
    {
        icon: MapPin,
        title: "Office:",
        description: "Reach out to us any time for questions, support, or inquiries.",
        contact: "100 Georgi S. Rakovski Street, Sofia, Bulgaria",
        isAddress: true
    }
];

const ContactSection = () => {
    return (
        <section className="py-20 bg-black relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">

                {/* Header */}
                <div className="flex flex-col items-center text-center mb-16 gap-6">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-5xl md:text-6xl lg:text-7xl font-bold"
                    >
                        Contact Us
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-white/60 max-w-2xl text-lg md:text-xl leading-relaxed"
                    >
                        No delays, no vague replies — we respond within 24 hours to schedule your personalized discovery call.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                    {/* Left: Contact Methods */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {contactMethods.map((method, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className={`bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 ${method.isAddress ? 'md:col-span-2' : ''
                                    }`}
                            >
                                <div className="mb-6">
                                    <method.icon className="w-8 h-8 text-white/80" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">
                                    {method.title}
                                </h3>
                                <p className="text-white/50 text-sm mb-4">
                                    {method.description}
                                </p>
                                <p className="text-white font-medium">
                                    {method.contact}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="bg-white/5 border border-white/10 rounded-2xl p-8"
                    >
                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Your name"
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-white/30 transition-colors"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    placeholder="Enter Your Email"
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-white/30 transition-colors"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    More Info
                                </label>
                                <textarea
                                    placeholder="Enter Your Message"
                                    rows={5}
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-white/30 transition-colors resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-full font-semibold text-white transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40"
                            >
                                Send the message
                            </button>
                        </form>
                    </motion.div>

                </div>

            </div>
        </section>
    );
};

export default ContactSection;
