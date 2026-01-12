import React from 'react';
import { Link } from 'react-router-dom';

const ContactHero = () => {
    return (
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900 via-black to-black pt-24">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Gradient Orbs */}
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-pulse-slow" />
                <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] animate-pulse-slow" />
            </div>

            {/* Content */}
            <div className="relative z-30 container mx-auto px-6 text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8 backdrop-blur-sm">
                    <span className="px-2 py-0.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold rounded">
                        24/7
                    </span>
                    <span className="text-white text-sm font-semibold">
                        Let's Work Together
                    </span>
                </div>

                {/* Main Heading */}
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 max-w-5xl mx-auto leading-tight">
                    Any Questions Rising?
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                        We are All Here.
                    </span>
                </h1>

                {/* Description */}
                <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                    Whether you have a question, need assistance,
                    <br />
                    or want to start a new project, our team is here to help.
                </p>

                {/* CTA Button */}
                <Link to="/book-call">
                    <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25">
                        Fill The Form Out!
                    </button>
                </Link>
            </div>

            {/* Gradient Fade to Bottom Section */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none" />
        </section>
    );
};

export default ContactHero;
