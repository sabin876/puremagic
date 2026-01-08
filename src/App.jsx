import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FloatingWhatsApp from './components/common/FloatingWhatsApp';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <div className="relative min-h-screen font-sans bg-gray-50">
      <Navbar />

      {/* Add padding-top to compensate for fixed navbar */}
      <main className="pt-[120px] sm:pt-[130px] md:pt-[140px]">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      <FloatingWhatsApp />

      <Footer />
    </div>
  );
}

export default App;
