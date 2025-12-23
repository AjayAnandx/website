import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../ui/Button";
import { cn } from "../../utils/cn";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "Home", href: "/", isRoute: true },
    { name: "About", href: "/about", isRoute: true },
    { name: "Service", href: "/services", isRoute: true },
    { name: "Case Study", href: "/case-study", isRoute: true },
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
                    <div className="flex items-center gap-2">
                        <span className="font-bold text-xl tracking-tight">Quantumscripts</span>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            link.isRoute ? (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className="text-sm font-medium text-white/70 hover:text-white transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ) : (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-sm font-medium text-white/70 hover:text-white transition-colors"
                                >
                                    {link.name}
                                </a>
                            )
                        ))}
                    </div>

                    <div className="hidden md:flex items-center gap-4">
                        <Button size="sm">Book a Call</Button>
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
