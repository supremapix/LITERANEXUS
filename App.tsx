import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Catalog from './components/Catalog';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import NotificationToast from './components/NotificationToast';

function App() {
  return (
    <main className="min-h-screen bg-brand-darker text-white font-sans selection:bg-brand-teal selection:text-brand-darker">
      <Navbar />
      <Hero />
      <Features />
      <Catalog />
      <FAQ />
      <Footer />
      <FloatingWhatsApp />
      <NotificationToast />
    </main>
  );
}

export default App;