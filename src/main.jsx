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
import './index.css';

const MainApp = () => {
  const location = useLocation();
  // Initialize loading state: only true if on homepage
  const [loading, setLoading] = useState(location.pathname === '/');
  // Track if we started with loading to determine animation
  const [startedWithLoader] = useState(location.pathname === '/');

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  const [isRevealComplete, setIsRevealComplete] = useState(false);

  return (
    <>
      <AuthProvider>
        <AnimatePresence mode="wait">
          {loading && (
            <HelloLoader key="loader" onComplete={handleLoadingComplete} />
          )}
        </AnimatePresence>

        <motion.div
          key="content"
          initial={startedWithLoader ? { opacity: 0, scale: 0.99 } : { opacity: 0 }}
          animate={{
            opacity: loading ? 0 : 1,
            scale: loading ? 0.99 : 1,
            transition: {
              duration: 1.2,
              ease: [0.25, 1, 0.5, 1],
              delay: loading ? 0 : 0.1 // minimal delay to let loader exit start
            }
          }}
          className="w-full"
        >
          <div className="">
            {!location.pathname.startsWith('/admin') && <Navbar />}
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

              {/* Admin Routes */}
              <Route path="/admin/login" element={<LoginPage />} />
              <Route path="/admin/dashboard" element={
                <ProtectedRoute>
                  <DashboardPage />
                </ProtectedRoute>
              } />
            </Routes>
            {!location.pathname.startsWith('/admin') && <Footer />}
            <ClickSpark />
          </div>
        </motion.div>
      </AuthProvider>
    </>
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
