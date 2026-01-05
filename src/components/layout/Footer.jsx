import { Link } from "react-router-dom";
import ShinyText from "../ui/ShinyText";

const Footer = () => {
    const navigationLinks = [
        { name: "Services", href: "#services", isRoute: false },
        { name: "Results", href: "#results", isRoute: false },
        { name: "Plans", href: "#plans", isRoute: false },
        { name: "Reviews", href: "#reviews", isRoute: false },
        { name: "Why Us", href: "#whyus", isRoute: false },
        { name: "Team", href: "#team", isRoute: false },
    ];

    const legalLinks = [
        { name: "Terms of service", href: "#terms" },
        { name: "Privacy Policy", href: "#privacy" },
        { name: "Thank You", href: "#thankyou" },
        { name: "404 Page", href: "#404" },
    ];

    const socialLinks = [
        { name: "X/Twitter", href: "#twitter" },
        { name: "LinkedIn", href: "#linkedin" },
        { name: "YouTube", href: "#youtube" },
    ];

    return (
        <footer className="relative py-20 bg-black overflow-hidden">
            {/* Purple Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 via-purple-800/20 to-transparent" />

            {/* Large Background Text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden px-6">
                <h2 className="text-[18vw] md:text-[12vw] lg:text-[10vw] font-bold text-white/5 text-center leading-none w-full">
                    <ShinyText
                        text="Vision for Future"
                        disabled={false}
                        speed={5}
                        className=""
                    />
                </h2>
            </div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10">

                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

                    {/* Brand Column */}
                    <div className="md:col-span-1">
                        <div className="flex items-center mb-4">
                            <img src="/quantum_logo.png" alt="QuantumScripts Logo" className="w-14 h-14 object-contain -mr-2 translate-y-1" />
                            <span className="text-xl font-bold">uantumScripts</span>
                        </div>
                        <p className="text-white/60 text-sm leading-relaxed">
                            Quantum Scripts is a premium AI automation agency helping businesses build scalable, intelligent systems through modern web and generative AI solutions.
                        </p>
                    </div>

                    {/* Navigation Column */}
                    <div>
                        <h3 className="text-sm font-semibold mb-4">Navigation</h3>
                        <ul className="space-y-3">
                            {navigationLinks.map((link) => (
                                <li key={link.name}>
                                    {link.isRoute ? (
                                        <Link
                                            to={link.href}
                                            className="text-white/60 hover:text-white text-sm transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    ) : (
                                        <a
                                            href={link.href}
                                            className="text-white/60 hover:text-white text-sm transition-colors"
                                        >
                                            {link.name}
                                        </a>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legals Column */}
                    <div>
                        <h3 className="text-sm font-semibold mb-4">Legals</h3>
                        <ul className="space-y-3">
                            {legalLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-white/60 hover:text-white text-sm transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Column */}
                    <div>
                        <h3 className="text-sm font-semibold mb-4">Social</h3>
                        <ul className="space-y-3">
                            {socialLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-white/60 hover:text-white text-sm transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

                {/* Bottom Section */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
                    <p>© 2025 Quantum Scripts. All rights reserved.</p>
                    <div className="flex gap-4">
                        <span>Built with React</span>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
