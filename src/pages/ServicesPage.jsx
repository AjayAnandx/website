import React from 'react';
import ServiceHero from '../components/ui/ServiceHero';
import CaseStudyCards from '../components/ui/CaseStudyCards';
import TechStack from '../components/ui/TechStack';
import FAQSection from '../components/ui/FAQSection';
import CTASection from '../components/ui/CTASection';

const ServicesPage = () => {
    return (
        <>
            <ServiceHero />
            <CaseStudyCards />
            <TechStack />
            <FAQSection />
            <CTASection />
        </>
    );
};

export default ServicesPage;
