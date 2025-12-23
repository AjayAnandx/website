import React from 'react';
import CoursePlatformHero from '../components/ui/CoursePlatformHero';
import CourseProblemSection from '../components/ui/CourseProblemSection';
import CoursePositioningSection from '../components/ui/CoursePositioningSection';
import CourseCredibilitySection from '../components/ui/CourseCredibilitySection';
import CourseCTASection from '../components/ui/CourseCTASection';

const CoursePlatformPage = () => {
    return (
        <div className="min-h-screen bg-black">
            <CoursePlatformHero />
            <CourseProblemSection />
            <CoursePositioningSection />
            <CourseCredibilitySection />
            <CourseCTASection />
        </div>
    );
};

export default CoursePlatformPage;
