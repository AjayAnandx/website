import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../ui/Button";
import { cn } from "../../utils/cn";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import GooeyNav from "../ui/GooeyNav";

const navLinks = [
    { name: "Home", href: "/", isRoute: true },
    { name: "About", href: "/about", isRoute: true },
    { name: "Service", href: "/services", isRoute: true },
    { name: "Case Study", href: "/case-study", isRoute: true },
    { name: "Careers", href: "/careers", isRoute: true },
    { name: "Contact", href: "/contact", isRoute: true },
];

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <nav
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
                    isScrolled
                        ? "bg-black/50 backdrop-blur-md border-white/5 py-4"
                        : "bg-transparent border-transparent py-5"
                )}
            >
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                    <div className="flex items-center">
                        <img src="/quantum_logo.png" alt="QuantumScripts Logo" className="w-14 h-14 object-contain -mr-2 translate-y-1" />
                        <span className="font-bold text-xl tracking-tight">uantumscripts</span>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:block">
                        <GooeyNav
                            items={navLinks.map(link => ({ label: link.name, href: link.href }))}
                            particleCount={15}
                            particleDistances={[90, 10]}
                            particleR={100}
                            initialActiveIndex={0}
                            animationTime={600}
                            timeVariance={300}
                            colors={[1, 2, 3, 1, 2, 3, 1, 4]}
                        />
                    </div>

                    <div className="hidden md:flex items-center gap-4">
                        <motion.button
                            className="group relative px-6 py-2.5 text-base font-bold text-black rounded-full overflow-hidden transition-all duration-500 hover:scale-105 shadow-lg shadow-white/10 hover:shadow-purple-600/20 flex items-center justify-center gap-2"
                            initial="initial"
                            whileHover="hover"
                            layout
                        >
                            {/* White background (Always) */}
                            <div className="absolute inset-0 bg-white"></div>

                            {/* Animated shine effect - distinct violet for visibility on white */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-violet-600/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                            </div>

                            {/* Button text */}
                            <motion.span
                                className="relative z-10"
                                variants={{
                                    initial: { x: 0 },
                                    hover: { x: -4 }
                                }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            >
                                Book a Call
                            </motion.span>

                            {/* Icon - Explicitly black */}
                            <motion.span
                                className="relative z-10 text-black"
                                variants={{
                                    initial: { opacity: 0, x: 10, width: 0 },
                                    hover: { opacity: 1, x: 0, width: "auto" }
                                }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            >
                                <Phone className="w-4 h-4" />
                            </motion.span>

                            {/* Glow effect */}
                            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-600 to-blue-600 blur-xl opacity-40 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </motion.button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-white/70 hover:text-white"
                        onClick={() => setIsMobileMenuOpen(true)}
                    >
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "tween", duration: 0.3 }}
                        className="fixed inset-0 z-[60] bg-black md:hidden flex flex-col p-6"
                    >
                        <div className="flex items-center justify-between mb-8">
                            <span className="font-semibold text-lg">Menu</span>
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="p-2 bg-white/5 rounded-full"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="flex flex-col gap-6">
                            {navLinks.map((link) => (
                                link.isRoute ? (
                                    <Link
                                        key={link.name}
                                        to={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="text-xl font-medium text-white/80 hover:text-white"
                                    >
                                        {link.name}
                                    </Link>
                                ) : (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="text-xl font-medium text-white/80 hover:text-white"
                                    >
                                        {link.name}
                                    </a>
                                )
                            ))}
                            <hr className="border-white/10" />
                            <Button size="lg" className="w-full">Book a Call</Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
