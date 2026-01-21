import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/layout/Navbar';
import Particles from '../components/ui/Particles';
import ApplicationModal from '../components/careers/ApplicationModal';
import { Badge } from '../components/ui/Badge';
import { ArrowRight, Code, Megaphone, Settings } from 'lucide-react';

const CareersPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedRole, setSelectedRole] = useState(null);

    const openModal = (role) => {
        setSelectedRole(role);
        setIsModalOpen(true);
    };

    const roles = [
        {
            id: 'marketing',
            title: 'Marketing Intern',
            icon: Megaphone,
            description: 'Join our growth team to craft compelling stories and drive brand awareness.',
            longDescription: 'As a Marketing Intern, you will be an integral part of our growth team. You will drive lead generation, manage social media, and support our sales outreach. We are looking for a creative storyteller who is resilient and data-driven.',
            responsibilities: [
                'Drive lead generation and follow-up with potential clients.',
                'Manage social media platforms (LinkedIn, Instagram) and engage with the community.',
                'Execute email marketing campaigns and WhatsApp outreach.',
                'Conduct cold calling and client communication.',
                'Analyze campaign performance and suggest improvements.'
            ],
            requirements: [
                'Excellent communication and interpersonal skills.',
                'Familiarity with LinkedIn, Instagram, and Email marketing tools.',
                'Willingness to learn lead generation strategies.',
                'Resilient attitude towards sales and follow-ups.',
                'Student or recent graduate in Marketing or Business.'
            ],
            formConfig: [
                { id: 'client_comm', label: 'Comfortable with client communication?', type: 'select', options: ['Yes', 'No'] },
                { id: 'lead_gen', label: 'Interested in lead generation & follow-ups?', type: 'select', options: ['Yes', 'No'] },
                { id: 'prev_exp', label: 'Previous sales / marketing experience?', type: 'select', options: ['Yes', 'No'] },
                { id: 'social_platforms', label: 'Platforms you have worked on', type: 'checkbox', options: ['LinkedIn', 'Instagram', 'Email Marketing', 'Cold Calling', 'WhatsApp Outreach'] },
                { id: 'key_strengths', label: 'Key Strengths', type: 'text' },
                { id: 'motivation', label: 'Why do you want to work in sales/marketing?', type: 'textarea' },
                { id: 'portfolio', label: 'Portfolio / Social Media Page', type: 'url' }
            ],
            tags: ['Social Media', 'Sales', 'Content']
        },
        {
            id: 'technical',
            title: 'Technical Intern',
            icon: Code,
            description: 'Build scalable software solutions and learn modern tech stacks alongside senior engineers.',
            longDescription: 'Our Technical Internship program is designed for students who want to build real-world applications. You will work with modern technologies like React, Node.js, and AI models. We value problem-solving skills and a passion for coding.',
            responsibilities: [
                'Develop and maintain web applications using HTML, CSS, JavaScript, and React.',
                'Work on AI/ML integration and automation projects.',
                'Collaborate with the team using Git and GitHub.',
                'Debug code and document technical implementations.',
                'Participate in code reviews and architectural discussions.'
            ],
            requirements: [
                'Strong foundation in computer science and programming.',
                'Proficiency in HTML, CSS, JavaScript.',
                'Experience with React, Node.js, or Python is a plus.',
                'Knowledge of Git and version control.',
                'Eagerness to learn new technologies like AI/ML.'
            ],
            formConfig: [
                { id: 'tech_skills', label: 'Technical Skills', type: 'checkbox', options: ['HTML / CSS', 'JavaScript', 'React', 'Python', 'AI / ML', 'Automation', 'Database'] },
                { id: 'other_skill', label: 'Other Skills (Specify)', type: 'text' },
                { id: 'github', label: 'GitHub / Portfolio Link', type: 'url' },
                { id: 'has_projects', label: 'Have you completed any projects before?', type: 'select', options: ['Yes', 'No'] },
                { id: 'best_project', label: 'Describe your best project', type: 'textarea' },
                { id: 'tools_known', label: 'Tools Known (VS Code, Git, Figma, APIs, etc.)', type: 'text' },
                { id: 'project_files', label: 'Project Files Link (Optional)', type: 'url' }
            ],
            tags: ['React', 'Node.js', 'AI/ML']
        },
        {
            id: 'operation',
            title: 'Operation Intern',
            icon: Settings,
            description: 'Streamline business processes and optimize day-to-day operations for maximum efficiency.',
            longDescription: 'The Operation Intern will ensure our business runs smoothly. You will handle documentation, coordinate between teams, and assist with reporting. This role requires high organization and attention to detail.',
            responsibilities: [
                'Assist with documentation, reporting, and maintaining internal databases.',
                'Coordinate with various teams and clients to ensure smooth workflow.',
                'Handle data entry and management in Excel/Google Sheets.',
                'Support administrative tasks and operational planning.',
                'Identify process bottlenecks and suggest improvements.'
            ],
            requirements: [
                'Highly organized with strong attention to detail.',
                'Proficiency in Microsoft Excel / Google Sheets is strong plus.',
                'Good written and verbal communication skills.',
                'Ability to handle multiple tasks simultaneously.',
                'Degree in Business, Management, or related field.'
            ],
            formConfig: [
                { id: 'documentation', label: 'Comfortable with documentation and reporting?', type: 'select', options: ['Yes', 'No'] },
                { id: 'excel_exp', label: 'Experience with Excel / Google Sheets?', type: 'select', options: ['Yes', 'No'] },
                { id: 'coordination', label: 'Can you handle coordination with teams and clients?', type: 'select', options: ['Yes', 'No'] },
                { id: 'admin_exp', label: 'Any prior admin/operations experience?', type: 'textarea' },
                { id: 'key_skills', label: 'Key Skills', type: 'text' },
                { id: 'tools_known', label: 'Tools Known (Excel, Sheets, CRM, Notion, etc.)', type: 'text' },
                { id: 'college_id', label: 'College ID Link (Optional)', type: 'url' }
            ],
            tags: ['Management', 'Data', 'Ops']
        }
    ];

    return (
        <div className="min-h-screen bg-black font-sans text-white relative overflow-hidden flex flex-col">
            <div className='fixed w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10'>
                <Navbar />
            </div>

            {/* Particles Background */}
            <div className="absolute inset-0 z-0 w-full h-full opacity-30 pointer-events-none">
                <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                    <Particles
                        particleColors={["#ffffff"]}
                        particleCount={700}
                        particleSpread={10}
                        speed={0.1}
                        particleBaseSize={100}
                        moveParticlesOnHover
                        alphaParticles={false}
                        disableRotation={false}
                        pixelRatio={1}
                    />
                </div>
            </div>

            <main className="flex-grow flex items-center justify-center relative z-10 px-6 pt-20">
                <div className="w-full max-w-6xl">
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <Badge className="mb-6">Join the Team</Badge>
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-white"
                        >
                            Start your career with us
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-white/60 max-w-2xl mx-auto"
                        >
                            We are looking for passionate individuals to join our internship program. select a role below to apply.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {roles.map((role, index) => (
                            <motion.div
                                key={role.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 + index * 0.1 }}
                                className="group relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/20 hover:scale-[1.02]"
                            >
                                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-violet-500/20 text-violet-400 group-hover:bg-violet-500 group-hover:text-white transition-colors duration-300">
                                    <role.icon size={24} />
                                </div>

                                <h3 className="mb-3 text-2xl font-bold text-white">{role.title}</h3>
                                <p className="mb-6 text-gray-400 leading-relaxed">
                                    {role.description}
                                </p>

                                <div className="mb-8 flex flex-wrap gap-2">
                                    {role.tags.map(tag => (
                                        <span key={tag} className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-gray-300">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <button
                                    onClick={() => openModal(role)}
                                    className="group/btn flex w-full items-center justify-center gap-2 rounded-xl bg-white/10 py-3 font-semibold text-white transition-all hover:bg-white hover:text-black"
                                >
                                    Apply Now
                                    <ArrowRight size={18} className="transition-transform group-hover/btn:translate-x-1" />
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </main>

            <ApplicationModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                role={selectedRole}
            />
        </div>
    );
};

export default CareersPage;
