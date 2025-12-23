import React from 'react';
import AIConsultingHero from '../components/ui/AIConsultingHero';
import AIProblemSection from '../components/ui/AIProblemSection';
import AISolutionSection from '../components/ui/AISolutionSection';
import AIServicesSection from '../components/ui/AIServicesSection';
import AITrustCTASection from '../components/ui/AITrustCTASection';

const AIConsultingPage = () => {
    return (
        <div className="min-h-screen bg-black">
            <AIConsultingHero />
            <AIProblemSection />
            <AISolutionSection />
            <AIServicesSection />
            <AITrustCTASection />
        </div>
    );
};

export default AIConsultingPage;
