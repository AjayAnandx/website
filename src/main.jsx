import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import App from './App.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import CaseStudyPage from './pages/CaseStudyPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import AIConsultingPage from './pages/AIConsultingPage.jsx';
import CoursePlatformPage from './pages/CoursePlatformPage.jsx';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ClickSpark from './components/ui/ClickSpark';
import VisionLoader from './components/ui/VisionLoader';
import './index.css';

const MainApp = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  // Only show loader on homepage
  const isHomePage = location.pathname === '/';
  const showLoader = loading && isHomePage;

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {showLoader && (
          <VisionLoader key="loader" onComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {(!showLoader) && (
          <motion.div
            key="app-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <ClickSpark
              sparkColor='#8c15eeff'
              sparkSize={10}
              sparkRadius={15}
              sparkCount={8}
              duration={400}
            >
              <div className="min-h-screen bg-background text-foreground antialiased selection:bg-white/20">
                <Navbar />
                <Routes>
                  <Route path="/" element={<App />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/case-study" element={<CaseStudyPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/ai-consulting" element={<AIConsultingPage />} />
                  <Route path="/course-platform" element={<CoursePlatformPage />} />
                </Routes>
                <Footer />
              </div>
            </ClickSpark>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <MainApp />
    </BrowserRouter>
  </React.StrictMode>,
);

