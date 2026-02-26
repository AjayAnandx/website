
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Upload, X, Check, ArrowRight, Loader2 } from 'lucide-react';


const BookingForm = ({ onComplete, onBack, selectedDate, selectedTime }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
    });
    const [file, setFile] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(0);
    const fileInputRef = useRef(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            setFile(e.dataTransfer.files[0]);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            // Pass form data up to BookCallPage which writes to Firestore
            await onComplete({
                ...formData,
                file_url: file ? file.name : null
            });
        } catch (err) {
            console.error('Booking submit error:', err);
            alert('Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-2xl mx-auto"
        >
            <div className="mb-8 text-center">
                <h2 className="text-3xl font-bold text-white mb-2">Almost There!</h2>
                <p className="text-gray-400">
                    You're booking for <span className="text-[var(--color-accent)] font-semibold">{selectedDate?.toLocaleDateString()}</span> at <span className="text-[var(--color-accent)] font-semibold">{selectedTime}</span>.
                </p>
                <p className="text-gray-500 text-sm mt-1">Tell us a bit more about your needs, or skip to book instantly.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] transition-all"
                            placeholder="Your Name"
                        />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] transition-all"
                            placeholder="john@example.com"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Phone */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300">Phone</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] transition-all"
                            placeholder="+1 (555) 000-0000"
                        />
                    </div>

                    {/* Subject */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300">Subject</label>
                        <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] transition-all"
                            placeholder="Project Inquiry"
                        />
                    </div>
                </div>

                {/* File Upload */}
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Attach File (Optional)</label>
                    <div
                        className={`relative border-2 border-dashed border-white/10 rounded-xl p-8 transition-all text-center cursor-pointer hover:border-[var(--color-accent)]/50 hover:bg-white/5 group ${file ? 'border-[var(--color-accent)] bg-[var(--color-accent)]/5' : ''}`}
                        onDragOver={(e) => { e.preventDefault(); e.stopPropagation(); }}
                        onDrop={handleDrop}
                        onClick={() => fileInputRef.current?.click()}
                    >
                        <input
                            type="file"
                            ref={fileInputRef}
                            className="hidden"
                            onChange={handleFileChange}
                            accept=".pdf,.doc,.docx,.txt,.md"
                        />

                        {file ? (
                            <div className="flex items-center justify-center gap-3 text-[var(--color-accent)]">
                                <Check className="w-6 h-6" />
                                <span className="font-medium truncate max-w-[200px]">{file.name}</span>
                                <button
                                    onClick={(e) => { e.stopPropagation(); setFile(null); }}
                                    className="p-1 hover:bg-white/10 rounded-full transition-colors"
                                >
                                    <X className="w-4 h-4 text-gray-400 hover:text-white" />
                                </button>
                            </div>
                        ) : (
                            <div className="space-y-2">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                                    <Upload className="w-6 h-6 text-gray-400 group-hover:text-[var(--color-accent)] transition-colors" />
                                </div>
                                <div className="text-sm text-gray-300 font-medium">
                                    Click to upload or drag and drop
                                </div>
                                <div className="text-xs text-gray-500">
                                    PDF, Word, TXT, Markdown (max 5MB)
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-4">
                    <button
                        type="button"
                        onClick={onBack}
                        className="text-gray-400 hover:text-white text-sm font-medium transition-colors px-4 py-2"
                        disabled={isSubmitting}
                    >
                        Back
                    </button>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex items-center gap-2 bg-[var(--color-accent)] hover:bg-[var(--color-accent)]/90 text-white px-8 py-3 rounded-xl font-semibold transition-all shadow-lg shadow-[var(--color-accent)]/20 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? (
                            <>
                                <Loader2 className="w-5 h-5 animate-spin" />
                                Booking...
                            </>
                        ) : (
                            <>
                                Confirm Booking
                                <ArrowRight className="w-5 h-5" />
                            </>
                        )}
                    </button>
                </div>
            </form>
        </motion.div>
    );
};

export default BookingForm;
