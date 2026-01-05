import { motion } from "framer-motion";
import { X } from "lucide-react";

const testimonials = [
    {
        quote: "The best investment solution for our business! AI technologies not only save time, but also increase efficiency.",
        name: "Rajesh Kumar",
        role: "CEO & FOUNDER",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rajesh"
    },
    {
        quote: "Thanks to their team, our internal processes were optimized, resulting in significant better results for my work.",
        name: "Priya Sharma",
        role: "CUSTOMER SUCCESS MANAGER",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya"
    },
    {
        quote: "The best investment solution for our business! AI technologies not only save time, but also increase efficiency.",
        name: "Amit Patel",
        role: "HEAD OF CONTENT",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amit"
    },
    {
        quote: "Thanks to their team, our internal processes were optimized, resulting in significant savings and better outcomes.",
        name: "Rahul Singh",
        role: "HEAD OF ENGINEERING",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul"
    },
    {
        quote: "The platform transformed how we approach AI integration. Exceptional support and powerful features.",
        name: "Anjali Gupta",
        role: "CTO",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Anjali"
    },
    {
        quote: "Outstanding results! The AI solutions have revolutionized our workflow and boosted productivity significantly.",
        name: "Vikram Malhotra",
        role: "OPERATIONS DIRECTOR",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Vikram"
    },
    {
        quote: "Incredible ROI and seamless integration. This is exactly what our company needed to scale efficiently.",
        name: "Sneha Reddy",
        role: "PRODUCT MANAGER",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sneha"
    },
    {
        quote: "The AI tools are intuitive and powerful. Our team adapted quickly and saw immediate improvements.",
        name: "Arjun Rao",
        role: "TECH LEAD",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun"
    },
    {
        quote: "Game-changing technology! The automation capabilities have freed up countless hours for strategic work.",
        name: "Neha Verma",
        role: "VP OF MARKETING",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Neha"
    },
    {
        quote: "Exceptional service and cutting-edge AI solutions. Highly recommend for any business looking to innovate.",
        name: "Suresh Nair",
        role: "FOUNDER & CEO",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Suresh"
    }
];

const OurClientsSection = () => {
    // Duplicate testimonials for seamless infinite scroll
    const duplicatedTestimonials = [...testimonials, ...testimonials];

    return (
        <section className="py-32 bg-black relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl mb-16">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-5xl md:text-6xl lg:text-7xl font-bold"
                    >
                        Our Clients
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-white/60 max-w-md text-sm md:text-base leading-relaxed"
                    >
                        Tangible results, not vague claims — we build efficient AI tools that scale, optimize, and save valuable hours.
                    </motion.p>
                </div>
            </div>

            {/* Infinite Scrolling Testimonials */}
            <div className="relative w-full overflow-hidden">
                <motion.div
                    className="flex gap-6"
                    animate={{
                        x: [0, -1 * (350 + 24) * testimonials.length]
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 40,
                            ease: "linear"
                        }
                    }}
                >
                    {duplicatedTestimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-[350px]"
                        >
                            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full hover:bg-white/10 transition-all duration-300 group">

                                {/* Quote Icon */}
                                <div className="text-6xl text-white/20 mb-4 font-serif">"</div>

                                {/* Quote Text */}
                                <p className="text-white/90 text-base leading-relaxed mb-8 min-h-[120px]">
                                    {testimonial.quote}
                                </p>

                                {/* Author Info */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <img
                                            src={testimonial.avatar}
                                            alt={testimonial.name}
                                            className="w-12 h-12 rounded-full bg-white/10"
                                        />
                                        <div>
                                            <p className="text-white font-semibold text-sm">
                                                {testimonial.name}
                                            </p>
                                            <p className="text-white/50 text-xs uppercase tracking-wide">
                                                {testimonial.role}
                                            </p>
                                        </div>
                                    </div>

                                    {/* X Icon */}
                                    <X className="w-5 h-5 text-white/40 group-hover:text-white/60 transition-colors" />
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>

        </section>
    );
};

export default OurClientsSection;
