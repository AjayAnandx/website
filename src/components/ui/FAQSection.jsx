import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className="border-b border-gray-800">
            <button
                onClick={onClick}
                className="w-full flex items-center justify-between py-5 px-6 text-left hover:bg-gray-900/30 transition-colors duration-200 rounded-lg"
            >
                <span className="text-lg text-gray-200 font-medium pr-8">
                    {question}
                </span>
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                    <motion.div
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <svg
                            className="w-6 h-6 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 4v16m8-8H4"
                            />
                        </svg>
                    </motion.div>
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <div className="px-6 pb-5 text-gray-400 leading-relaxed">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "How can AI automation help my business?",
            answer: "Our AI-driven automation eliminates busywork, streamlines your operations, and helps your business grow, without extra effort. It increases efficiency, reduces costs, and allows your team to focus on strategic initiatives."
        },
        {
            question: "Is AI difficult to integrate into my current system?",
            answer: "Not at all! We specialize in seamless AI integration that works with your existing infrastructure. Our team handles the entire implementation process, ensuring minimal disruption to your current operations while maximizing the benefits of AI technology."
        },
        {
            question: "What industries can benefit from AI automation?",
            answer: "AI automation can benefit virtually any industry, from e-commerce and healthcare to finance, manufacturing, and retail. We customize our solutions to meet the unique needs and challenges of your specific industry."
        },
        {
            question: "What's the difference between your pricing plans?",
            answer: "Our pricing plans are tailored to different business needs and scales. We offer flexible options ranging from starter packages for small businesses to enterprise solutions for large organizations. Each plan includes different levels of support, features, and customization options."
        },
        {
            question: "How long does AI setup take?",
            answer: "Setup time varies depending on the complexity of your needs. Simple integrations can be completed in 2-4 weeks, while more complex custom solutions may take 2-3 months. We provide a detailed timeline during our initial consultation."
        },
        {
            question: "Can I request a custom AI solution?",
            answer: "Absolutely! We specialize in creating custom AI solutions tailored to your specific business requirements. Our team will work closely with you to understand your needs and develop a solution that perfectly fits your workflow and objectives."
        }
    ];

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-20 bg-transparent relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                    {/* Left Side - Heading and Description */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:sticky lg:top-24"
                    >
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                            FAQ
                        </h2>
                        <p className="text-lg text-gray-400 leading-relaxed">
                            Our AI-driven automation eliminates busywork, streamlines your operations, and helps your business grow, without extra effort.
                        </p>
                    </motion.div>

                    {/* Right Side - FAQ Accordion Items */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-2"
                    >
                        {faqs.map((faq, index) => (
                            <FAQItem
                                key={index}
                                question={faq.question}
                                answer={faq.answer}
                                isOpen={openIndex === index}
                                onClick={() => handleToggle(index)}
                            />
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
