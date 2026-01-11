import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FloatingWhatsApp from './components/common/FloatingWhatsApp';
import HomePage from './pages/HomePage';
import ScrollToTop from './components/common/ScrollToTop';
import ChatWidget from './components/common/ChatWidget';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import ServicePage from './pages/ServicePage';

function App() {
  return (
    <div className="relative min-h-screen font-sans bg-gray-50">
      <ScrollToTop />
      <Navbar />

      {/* Add padding-top to compensate for fixed navbar */}
      <main className="pt-[120px] sm:pt-[130px] md:pt-[140px]">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services/:serviceId" element={<ServicePage />} />
        </Routes>
      </main>

      <ChatWidget />
      <FloatingWhatsApp />

      <Footer />
    </div>
  );
}

export default App;
