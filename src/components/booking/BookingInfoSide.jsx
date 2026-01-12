import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const BookingInfoSide = () => {
    return (
        <div className="flex flex-col justify-between h-full py-8 pr-8 lg:pr-12">
            <div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-[var(--color-accent)] font-medium mb-6 tracking-wide text-sm uppercase"
                >
                    Book a Call
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-4xl md:text-5xl font-bold text-white mb-8 leading-[1.1]"
                >
                    Ready to create impact<br />that lasts?
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-gray-400 mb-8 text-lg"
                >
                    Pick a moment that works for you. Together we'll uncover:
                </motion.p>

                <div className="space-y-6 mb-12">
                    {[
                        "The challenges currently slowing your business down",
                        "Where the opportunities lie for smarter, faster growth",
                        "How Hatamex can help you get there"
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                            className="flex items-start gap-4"
                        >
                            <div className="flex-shrink-0 w-6 h-6 bg-[var(--color-accent)] rounded flex items-center justify-center mt-1">
                                <Check className="w-4 h-4 text-white" strokeWidth={3} />
                            </div>
                            <span className="text-gray-300 text-lg leading-snug">{item}</span>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex items-center gap-4 mb-12"
                >
                    <div className="relative">
                        <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-700">
                            {/* Placeholder for Tarik Polat */}
                            <img src="https://ui-avatars.com/api/?name=Tarik+Polat&background=0D8ABC&color=fff" alt="Tarik Polat" className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-black rounded-full"></div>
                    </div>
                    <div>
                        <h3 className="text-white font-semibold text-lg">Tarik Polat, Founder</h3>
                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                            <span className="w-2 h-2 bg-green-500 rounded-full inline-block"></span>
                            Available now
                        </div>
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
            >
                <button className="group flex items-center gap-3 px-6 py-3 border border-gray-700 rounded-lg hover:border-gray-500 transition-colors text-gray-300 hover:text-white text-sm font-medium tracking-wide uppercase">
                    Reach out in another way
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
            </motion.div>
        </div>
    );
};

export default BookingInfoSide;
