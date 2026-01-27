import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, User } from "lucide-react";
import { generateResponse } from "../../lib/chatbot";
import { Link } from "react-router-dom";
import Loader from "./Loader";




const TypewriterText = ({ text }) => {
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (displayText.length < text.length) {
                    setDisplayText(text.slice(0, displayText.length + 1));
                } else {
                    // Pause before deleting
                    setTimeout(() => setIsDeleting(true), 2000);
                    return;
                }
            } else {
                if (displayText.length > 0) {
                    setDisplayText(text.slice(0, displayText.length - 1));
                } else {
                    setIsDeleting(false);
                }
            }
        }, isDeleting ? 50 : 150);

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, text]);

    return (
        <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent whitespace-nowrap">
            {displayText}
            <span className="text-purple-400 animate-pulse ml-0.5">|</span>
        </span>
    );
};

const AIChatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            id: 1,
            text: "Hi there! I'm your AI assistant. Ask me about our services or how we can help your business grow.",
            sender: "bot"
        }
    ]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const handleSend = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMsg = { id: Date.now(), text: input, sender: "user" };
        setMessages(prev => [...prev, userMsg]);
        setInput("");
        setIsTyping(true);

        try {
            const response = await generateResponse(userMsg.text);
            const botMsg = {
                id: Date.now() + 1,
                text: response.text,
                sender: "bot",
                action: response.action,
                actionLabel: response.actionLabel,
                actionLink: response.actionLink,
                serviceLink: response.serviceLink
            };
            setMessages(prev => [...prev, botMsg]);
        } catch (error) {
            console.error("Chatbot Error:", error);
            setMessages(prev => [...prev, { id: Date.now() + 1, text: "My circuits are a bit crossed. Try again?", sender: "bot" }]);
        } finally {
            setIsTyping(false);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 flex flex-col items-end pointer-events-none">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                        className="bg-black/80 backdrop-blur-2xl border border-white/10 fixed inset-0 z-50 w-full h-[100dvh] md:static md:w-96 md:h-[500px] md:mb-4 rounded-none md:rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden pointer-events-auto"
                    >
                        {/* Header */}
                        <div className="p-4 border-b border-white/10 flex justify-between items-center bg-gradient-to-r from-blue-900/20 to-purple-900/20">
                            <div className="flex items-center gap-2">
                                <div className="p-2 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg border border-white/5">
                                    <img src="/icons8-ai-3d-fluency-120.png" alt="Quantum AI" className="w-5 h-5 object-contain" />
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold text-sm tracking-wide">Quantum AI</h3>
                                    <p className="text-xs flex items-center gap-1 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent font-medium">
                                        <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse shadow-[0_0_8px_rgba(168,85,247,0.5)]" />
                                        Online
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2 hover:bg-white/10 rounded-full text-white/60 hover:text-white transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4">
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={`flex items-start gap-3 ${msg.sender === "user" ? "flex-row-reverse" : ""}`}
                                >
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.sender === "user" ? "bg-white/10" : "bg-blue-600/20"
                                        }`}>
                                        {msg.sender === "user" ? <User className="w-4 h-4 text-white" /> : <img src="/icons8-ai-3d-fluency-120.png" alt="Bot" className="w-6 h-6 object-contain" />}
                                    </div>
                                    <div className={`max-w-[80%] rounded-2xl p-3 text-sm leading-relaxed backdrop-blur-md border ${msg.sender === "user"
                                        ? "bg-white/10 text-white border-white/20 shadow-lg"
                                        : "bg-black/40 text-white/90 border-white/5 shadow-inner"
                                        }`}>
                                        <p dangerouslySetInnerHTML={{ __html: msg.text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />

                                        {/* Dynamic Action Button */}
                                        {msg.action === "dynamic_button" && msg.actionLabel && msg.actionLink && (
                                            <Link
                                                to={msg.actionLink}
                                                onClick={() => setIsOpen(false)}
                                                className="mt-3 block text-center py-2 px-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-medium transition-colors"
                                            >
                                                {msg.actionLabel}
                                            </Link>
                                        )}

                                        {/* Legacy/Fallback Actions */}
                                        {msg.action === "book_call" && (
                                            <Link to="/book-call" onClick={() => setIsOpen(false)} className="mt-3 block text-center py-2 px-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-medium transition-colors">
                                                Schedule Consultation
                                            </Link>
                                        )}
                                        {msg.action === "show_service" && msg.serviceLink && (
                                            <Link to={msg.serviceLink} onClick={() => setIsOpen(false)} className="mt-3 block text-center py-2 px-4 bg-white/10 hover:bg-white/20 text-white rounded-lg text-xs font-medium transition-colors">
                                                View Service Details
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            ))}

                            {isTyping && (
                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-full bg-blue-600/20 flex items-center justify-center shrink-0">
                                        <img src="/icons8-ai-3d-fluency-120.png" alt="Bot" className="w-6 h-6 object-contain" />
                                    </div>
                                    <div className="bg-white/10 rounded-2xl p-4 backdrop-blur-md border border-white/10">
                                        <Loader />
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <form onSubmit={handleSend} className="p-4 border-t border-white/10 bg-black/50">
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Type your message..."
                                    className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all placeholder:text-white/20"
                                />
                                <button
                                    type="submit"
                                    disabled={!input.trim() || isTyping}
                                    className="p-2 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl text-white transition-colors"
                                >
                                    <Send className="w-5 h-5" />
                                </button>
                            </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Toggle Button with Attraction Text */}
            <div className={`flex items-center gap-4 transition-all duration-300 pointer-events-auto ${isOpen ? "hidden md:flex" : "flex"}`}>
                {!isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="hidden md:flex bg-white/10 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl text-white text-sm font-medium shadow-lg"
                    >
                        <TypewriterText text="Ask AI" />
                    </motion.div>
                )}

                <motion.button
                    onClick={() => setIsOpen(!isOpen)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-0 rounded-full shadow-[0_0_30px_rgba(168,85,247,0.3)] backdrop-blur-xl border border-white/10 transition-all duration-300 relative overflow-hidden group ${isOpen ? "w-12 h-12 bg-white/5" : "w-16 h-16 bg-black/40"
                        }`}
                >
                    {/* Live Purple Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/80 via-blue-600/80 to-purple-800/80 opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Inner Glass */}
                    <div className="absolute inset-[1px] rounded-full bg-black/20 backdrop-blur-sm z-0" />

                    <div className="relative z-10 flex items-center justify-center w-full h-full">
                        {isOpen ? (
                            <X className="w-6 h-6 text-white" />
                        ) : (
                            <img src="/icons8-ai-3d-fluency-120.png" alt="Chat" className="w-8 h-8 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] object-contain" />
                        )}
                    </div>

                    {/* Notification Badge if closed */}
                    {!isOpen && (
                        <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-black"></span>
                    )}
                </motion.button>
            </div>
        </div>
    );
};

export default AIChatbot;
