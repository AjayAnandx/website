import { motion } from "framer-motion";

const companies = [
    "Acme Corp", "Quantum", "Nebula", "Cyberdyne", "Wayne Ent", "Globex", "Initech", "Umbrella"
];

const TrustedBy = () => {
    return (
        <section className="py-20 border-t border-white/5 bg-black">
            <div className="container mx-auto px-6 text-center mb-10">
                <p className="text-sm font-medium text-white/40 uppercase tracking-widest">Trusted by industry leaders</p>
            </div>

            <div className="relative flex overflow-x-hidden group">
                <div className="animate-scroll whitespace-nowrap flex gap-20">
                    {[...companies, ...companies, ...companies].map((company, i) => (
                        <span key={i} className="text-xl font-bold text-white/30 uppercase tracking-tighter hover:text-white/60 transition-colors cursor-default">
                            {company}
                        </span>
                    ))}
                </div>

                <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black to-transparent" />
                <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black to-transparent" />
            </div>
        </section>
    );
};

export default TrustedBy;
