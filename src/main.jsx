import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import ErrorBoundary from './components/ui/ErrorBoundary';
import App from './App.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import CaseStudyPage from './pages/CaseStudyPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import AIConsultingPage from './pages/AIConsultingPage.jsx';
import CoursePlatformPage from './pages/CoursePlatformPage.jsx';
import AIAutomationPage from './pages/AIAutomationPage.jsx';
import SoftwareDevelopmentPage from './pages/SoftwareDevelopmentPage.jsx';
import WebsiteDevelopmentPage from './pages/WebsiteDevelopmentPage.jsx';
import BookCallPage from './pages/BookCallPage.jsx';
import LoginPage from './pages/admin/LoginPage.jsx';
import DashboardPage from './pages/admin/DashboardPage.jsx';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/auth/ProtectedRoute.jsx';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ClickSpark from './components/ui/ClickSpark';
import HelloLoader from './components/ui/HelloLoader';
import CareersPage from './pages/CareersPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import AIChatbot from './components/ui/AIChatbot';
import './index.css';

const MainApp = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(location.pathname === '/');
  const [startedWithLoader] = useState(location.pathname === '/');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleLoadingComplete = () => setLoading(false);

  const isAdmin = location.pathname.startsWith('/admin');

  return (
    <AuthProvider>
      <AnimatePresence mode="wait">
        {loading && <HelloLoader key="loader" onComplete={handleLoadingComplete} />}
      </AnimatePresence>

      <motion.div
        key="content"
        initial={startedWithLoader ? { opacity: 0, scale: 0.99 } : { opacity: 0 }}
        animate={{
          opacity: loading ? 0 : 1,
          scale: loading ? 0.99 : 1,
          transition: { duration: 1.2, ease: [0.25, 1, 0.5, 1], delay: loading ? 0 : 0.1 }
        }}
        className="w-full"
      >
        <div>
          {!isAdmin && <Navbar />}
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/case-study" element={<CaseStudyPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/ai-consulting" element={<AIConsultingPage />} />
            <Route path="/course-platform" element={<CoursePlatformPage />} />
            <Route path="/ai-automation" element={<AIAutomationPage />} />
            <Route path="/software-development" element={<SoftwareDevelopmentPage />} />
            <Route path="/website-development" element={<WebsiteDevelopmentPage />} />
            <Route path="/book-call" element={<BookCallPage />} />
            <Route path="/careers" element={<CareersPage />} />
            {/* Admin Routes */}
            <Route path="/admin/login" element={<LoginPage />} />
            <Route path="/admin/dashboard" element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            } />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          {!isAdmin && <Footer />}
          <ClickSpark />
          <AIChatbot />
        </div>
      </motion.div>
    </AuthProvider>
  );
};



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <MainApp />
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>,
);
