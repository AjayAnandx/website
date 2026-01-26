export const services = [
    {
        title: "Software Development",
        description: "Build robust software solutions from the ground up. Our team crafts scalable applications and enterprise systems tailored to your business needs.",
        tags: ["Software Dev", "Full-Stack", "Custom Apps"],
        image: "/software-dev.jpg",
        accentColor: "blue",
        link: "/software-development",
        keywords: ["software", "development", "application", "app", "code", "coding", "program"]
    },
    {
        title: "Website Development",
        description: "Design stunning, high-performance websites that drive results. We deliver modern web experiences with seamless functionality and user-centric design.",
        tags: ["Web Dev", "Responsive", "E-commerce"],
        image: "/website-dev.jpg",
        accentColor: "orange",
        link: "/website-development",
        keywords: ["website", "web", "site", "design", "frontend", "ui", "ux"]
    },
    {
        title: "AI & Automation",
        description: "Create bespoke AI applications that transform your operations. Our experts build custom machine learning models and intelligent automations aligned with your goals.",
        tags: ["AI Strategy", "ML Models", "Automation"],
        image: "/ai-app.jpg",
        accentColor: "purple",
        link: "/ai-automation",
        keywords: ["ai", "artificial intelligence", "automation", "bot", "ml", "machine learning"]
    },
    {
        title: "Course Platform",
        description: "Launch successful online courses with end-to-end support. We handle platform setup, content optimization, and marketing to maximize reach and conversions.",
        tags: ["Course Launch", "LMS Setup", "Marketing"],
        image: "/course-launch.jpg",
        accentColor: "green",
        link: "/course-platform",
        keywords: ["course", "learning", "lms", "education", "platform", "teach"]
    }
];

export const getServiceInfo = (query) => {
    const lowerQuery = query.toLowerCase();

    // Direct match check
    const match = services.find(service =>
        service.keywords.some(keyword => lowerQuery.includes(keyword)) ||
        service.title.toLowerCase().includes(lowerQuery)
    );

    if (match) {
        return {
            found: true,
            service: match,
            response: `We specialize in **${match.title}**. ${match.description} Would you like to discuss a ${match.title} project?`
        };
    }

    return {
        found: false,
        response: "I can help you with Software Development, Website Creation, AI Solutions, and Course Platforms. Which one interests you?"
    };
};
