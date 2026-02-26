import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, User, Mail, Phone, Link as LinkIcon, CheckCircle2, ChevronDown } from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import Button from '../ui/Button';

const ApplicationModal = ({ isOpen, onClose, role }) => {
    const [formData, setFormData] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    // Initialize form data when role changes or modal opens
    useEffect(() => {
        if (isOpen && role) {
            setFormData({
                // Standard Personal Details
                fullName: '',
                email: '',
                mobile: '',
                city: '',
                college: '',
                degree: '',
                year: '',
                registrationNo: '',

                // Internship Info
                mode: 'Hybrid',
                duration: '3 Months',
                startDate: '',
                dailyAvailability: '',

                // Dynamic fields will be added as user types
            });
        }
    }, [isOpen, role]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            await addDoc(collection(db, 'applications'), {
                full_name: formData.fullName,
                email: formData.email,
                mobile: formData.mobile,
                city: formData.city,
                college: formData.college,
                degree: formData.degree,
                year: formData.year,
                registration_no: formData.registrationNo,
                mode: formData.mode,
                duration: formData.duration,
                start_date: formData.startDate,
                daily_availability: formData.dailyAvailability,
                role_title: role.title,
                resume_link: formData.resumeLink,
                status: 'pending',
                createdAt: serverTimestamp(),
            });
            setIsSuccess(true);
            setTimeout(() => {
                onClose();
                setIsSuccess(false);
                setFormData({});
            }, 3000);
        } catch (err) {
            console.error('Error submitting application:', err);
            alert('Failed to submit. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === 'checkbox') {
            setFormData(prev => {
                const currentValues = prev[name] || [];
                if (checked) {
                    return { ...prev, [name]: [...currentValues, value] };
                } else {
                    return { ...prev, [name]: currentValues.filter(v => v !== value) };
                }
            });
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    if (!role) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-md"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative flex h-[90vh] w-[95vw] max-w-[1600px] overflow-hidden rounded-2xl border border-white/10 bg-[#0A0A0A] shadow-2xl"
                    >
                        <button
                            onClick={onClose}
                            className="absolute right-4 top-4 z-20 rounded-full bg-black/50 p-2 text-gray-400 transition-colors hover:bg-white/10 hover:text-white"
                        >
                            <X size={20} />
                        </button>

                        {/* Left Column: Descriptions (60%) */}
                        <div className="hidden md:block w-[60%] overflow-y-auto border-r border-white/10 bg-white/5 p-10 custom-scrollbar">
                            <div className="mb-8 pt-6">
                                <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-500/20 text-violet-400 mb-6">
                                    <role.icon size={32} />
                                </div>
                                <h2 className="text-4xl font-bold text-white mb-2">{role.title}</h2>
                                <p className="text-violet-400 font-medium text-base">Internship Program • Remote / Hybrid</p>
                            </div>

                            <div className="space-y-10">
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-4">About the Role</h3>
                                    <p className="text-gray-400 leading-relaxed text-base">
                                        {role.longDescription}
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-4">Key Responsibilities</h3>
                                    <ul className="space-y-4">
                                        {role.responsibilities?.map((item, index) => (
                                            <li key={index} className="flex gap-4 text-base text-gray-400 leading-relaxed">
                                                <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-4">Requirements</h3>
                                    <ul className="space-y-4">
                                        {role.requirements?.map((item, index) => (
                                            <li key={index} className="flex gap-4 text-base text-gray-400 leading-relaxed">
                                                <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Form (40%) */}
                        <div className="w-full md:w-[40%] overflow-y-auto p-6 md:p-8 custom-scrollbar bg-[#0A0A0A]">
                            {!isSuccess ? (
                                <div className="max-w-md mx-auto">
                                    <h2 className="mb-2 text-2xl font-bold text-white">Application Form</h2>
                                    <p className="mb-6 text-sm text-gray-400">Please answer all questions truthfully.</p>

                                    <form onSubmit={handleSubmit} className="space-y-6">

                                        {/* Section 1: Personal Details */}
                                        <div className="space-y-4">
                                            <h3 className="text-sm font-semibold uppercase tracking-wider text-violet-400">Personal Details</h3>
                                            <InputGroup label="Full Name *" name="fullName" value={formData.fullName} onChange={handleChange} required />
                                            <InputGroup label="Email *" name="email" type="email" value={formData.email} onChange={handleChange} required />
                                            <InputGroup label="Mobile Number *" name="mobile" type="tel" value={formData.mobile} onChange={handleChange} required />
                                            <div className="grid grid-cols-2 gap-4">
                                                <InputGroup label="City / State *" name="city" value={formData.city} onChange={handleChange} required />
                                                <InputGroup label="Year of Study *" name="year" value={formData.year} onChange={handleChange} required />
                                            </div>
                                            <InputGroup label="College Name *" name="college" value={formData.college} onChange={handleChange} required />
                                            <div className="grid grid-cols-2 gap-4">
                                                <InputGroup label="Degree / Dept *" name="degree" value={formData.degree} onChange={handleChange} required />
                                                <InputGroup label="Reg. Number" name="registrationNo" value={formData.registrationNo} onChange={handleChange} />
                                            </div>
                                        </div>

                                        <div className="h-px bg-white/10 my-4" />

                                        {/* Section 2: Internship Info */}
                                        <div className="space-y-4">
                                            <h3 className="text-sm font-semibold uppercase tracking-wider text-violet-400">Internship Info</h3>

                                            <div className="grid grid-cols-2 gap-4">
                                                <SelectGroup
                                                    label="Mode"
                                                    name="mode"
                                                    options={['Remote', 'On-site', 'Hybrid']}
                                                    value={formData.mode}
                                                    onChange={handleChange}
                                                />
                                                <SelectGroup
                                                    label="Duration"
                                                    name="duration"
                                                    options={['1 Month', '2 Months', '3 Months']}
                                                    value={formData.duration}
                                                    onChange={handleChange}
                                                />
                                            </div>

                                            <div className="grid grid-cols-2 gap-4">
                                                <InputGroup label="Start Date *" name="startDate" type="date" value={formData.startDate} onChange={handleChange} required />
                                                <InputGroup label="Daily Availability *" name="dailyAvailability" placeholder="e.g 4-5 hours" value={formData.dailyAvailability} onChange={handleChange} required />
                                            </div>
                                        </div>

                                        <div className="h-px bg-white/10 my-4" />

                                        {/* Section 3: Role Specific Questions */}
                                        <div className="space-y-5">
                                            <h3 className="text-sm font-semibold uppercase tracking-wider text-violet-400">Role Specifics</h3>
                                            {role.formConfig?.map((field) => (
                                                <div key={field.id}>
                                                    {field.type === 'select' ? (
                                                        <SelectGroup
                                                            label={field.label}
                                                            name={field.id}
                                                            options={field.options}
                                                            value={formData[field.id] || field.options[0]}
                                                            onChange={handleChange}
                                                        />
                                                    ) : field.type === 'checkbox' ? (
                                                        <div className="space-y-2">
                                                            <label className="block text-xs font-medium text-gray-400">{field.label}</label>
                                                            <div className="flex flex-wrap gap-2">
                                                                {field.options.map(opt => (
                                                                    <label key={opt} className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 cursor-pointer hover:bg-white/10">
                                                                        <input
                                                                            type="checkbox"
                                                                            name={field.id}
                                                                            value={opt}
                                                                            checked={formData[field.id]?.includes(opt) || false}
                                                                            onChange={handleChange}
                                                                            className="accent-violet-500 h-4 w-4"
                                                                        />
                                                                        <span className="text-sm text-gray-300">{opt}</span>
                                                                    </label>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    ) : field.type === 'textarea' ? (
                                                        <div className="space-y-1">
                                                            <label className="block text-xs font-medium text-gray-400">{field.label}</label>
                                                            <textarea
                                                                name={field.id}
                                                                rows="3"
                                                                value={formData[field.id] || ''}
                                                                onChange={handleChange}
                                                                className="w-full rounded-lg border border-white/10 bg-white/5 p-3 text-sm text-white placeholder-gray-500 focus:border-violet-500 focus:outline-none"
                                                            />
                                                        </div>
                                                    ) : (
                                                        <InputGroup
                                                            label={field.label}
                                                            name={field.id}
                                                            type={field.type || 'text'}
                                                            value={formData[field.id] || ''}
                                                            onChange={handleChange}
                                                        />
                                                    )}
                                                </div>
                                            ))}
                                        </div>

                                        <div className="h-px bg-white/10 my-4" />

                                        {/* Section 4: Resume */}
                                        <div className="space-y-4">
                                            <h3 className="text-sm font-semibold uppercase tracking-wider text-violet-400">Documentation</h3>
                                            <InputGroup label="Resume Link (Google Drive / PDF) *" name="resumeLink" type="url" placeholder="https://..." value={formData.resumeLink} onChange={handleChange} required />
                                        </div>

                                        <div className="pt-4 pb-10">
                                            <Button className="w-full justify-center py-4 text-base" type="submit" disabled={isSubmitting}>
                                                {isSubmitting ? (
                                                    'Sending Application...'
                                                ) : (
                                                    <>
                                                        Submit Application
                                                        <Send className="ml-2 h-4 w-4" />
                                                    </>
                                                )}
                                            </Button>
                                        </div>
                                    </form>
                                </div>
                            ) : (
                                <div className="flex h-full flex-col items-center justify-center p-8 text-center bg-[#0A0A0A]">
                                    <motion.div
                                        initial={{ scale: 0, rotate: -45 }}
                                        animate={{ scale: 1, rotate: 0 }}
                                        type="spring"
                                        className="mb-6 rounded-full bg-green-500/10 p-4 ring-1 ring-green-500/20"
                                    >
                                        <CheckCircle2 size={48} className="text-green-500" />
                                    </motion.div>
                                    <h3 className="mb-2 text-3xl font-bold text-white">Application Sent!</h3>
                                    <p className="text-gray-400 max-w-xs mx-auto mb-8">
                                        Thanks for applying to the <span className="text-white font-medium">{role.title}</span> position. We will review your application and get back to you shortly.
                                    </p>
                                    <button onClick={onClose} className="text-sm text-gray-500 hover:text-white underline">Close Window</button>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

// Helper Components
const InputGroup = ({ label, name, type = "text", value, onChange, required, placeholder }) => (
    <div className="space-y-1">
        <label className="block text-xs font-medium text-gray-400">{label}</label>
        <input
            type={type}
            name={name}
            value={value || ''}
            onChange={onChange}
            required={required}
            placeholder={placeholder}
            className="w-full rounded-lg border border-white/10 bg-white/5 p-2.5 text-sm text-white placeholder-gray-500 focus:border-violet-500 focus:outline-none transition-colors"
        />
    </div>
);

const SelectGroup = ({ label, name, options, value, onChange }) => (
    <div className="space-y-1">
        <label className="block text-xs font-medium text-gray-400">{label}</label>
        <div className="relative">
            <select
                name={name}
                value={value}
                onChange={onChange}
                className="w-full appearance-none rounded-lg border border-white/10 bg-white/5 p-2.5 text-sm text-white focus:border-violet-500 focus:outline-none transition-colors"
            >
                {options.map(opt => (
                    <option key={opt} value={opt} className="bg-neutral-900">{opt}</option>
                ))}
            </select>
            <ChevronDown className="absolute right-3 top-3 text-gray-500 pointer-events-none" size={14} />
        </div>
    </div>
);

export default ApplicationModal;
