import React from 'react';
import AboutHero from "../components/ui/AboutHero";
import AboutLogos from "../components/ui/AboutLogos";
import ProfessionalNoteSection from "../components/ui/ProfessionalNoteSection";
import PersonalNoteSection from "../components/ui/PersonalNoteSection";
import AboutCTASection from "../components/ui/AboutCTASection";


const AboutPage = () => {
    return (
        <div className="min-h-screen bg-black">
            <AboutHero />
            <AboutLogos />
            <ProfessionalNoteSection />
            <PersonalNoteSection />
            <AboutCTASection />
        </div>
    );
};

export default AboutPage;
