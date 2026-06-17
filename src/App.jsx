import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/common/Navbar.jsx';
import Footer from './components/common/Footer.jsx';
import ScrollProgress from './components/common/ScrollProgress.jsx';
import WhatsAppFloat from './components/common/WhatsAppFloat.jsx';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import ProjectsPage from './pages/ProjectsPage.jsx';
import CertificationsPage from './pages/CertificationsPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import { useDarkMode } from './hooks/useDarkMode.js';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function AppContent() {
  const [isDark, setIsDark] = useDarkMode();
  return (
    <div className={isDark ? 'dark' : ''}>
      <ScrollProgress />
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      <main>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/certifications" element={<CertificationsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
