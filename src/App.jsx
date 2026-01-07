import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/home/Hero';
import Services from './components/home/Services';
import WhyChooseUs from './components/home/WhyChooseUs';
import Testimonials from './components/home/Testimonials';
// import Contact from './components/home/Contact';
import FloatingWhatsApp from './components/common/FloatingWhatsApp';

function App() {
  return (
    <div className="relative min-h-screen font-sans bg-gray-50">
      <Navbar />

      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Testimonials />
        {/* <Contact /> */}
      </main>

      <FloatingWhatsApp />

      <Footer />
    </div>
  );
}

export default App;
