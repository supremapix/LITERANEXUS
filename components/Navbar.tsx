import React, { useState, useEffect } from 'react';
import { BookOpen, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3 border-b border-white/5 shadow-lg' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center gap-2 text-white font-serif text-xl md:text-2xl font-bold cursor-pointer" onClick={() => scrollTo('hero')}>
          <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-tr from-brand-teal to-brand-purple rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(0,206,209,0.3)]">
             <BookOpen className="text-white w-5 h-5 md:w-6 md:h-6" />
          </div>
          <span className="tracking-tight">LITERANEXUS</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollTo('hero')} className="text-sm font-medium text-gray-300 hover:text-brand-teal transition-colors">Início</button>
          <button onClick={() => scrollTo('benefits')} className="text-sm font-medium text-gray-300 hover:text-brand-teal transition-colors">Benefícios</button>
          <button onClick={() => scrollTo('catalog')} className="text-sm font-medium text-gray-300 hover:text-brand-teal transition-colors">Catálogo</button>
          <button onClick={() => scrollTo('faq')} className="text-sm font-medium text-gray-300 hover:text-brand-teal transition-colors">FAQ</button>
          
          <button 
            onClick={() => scrollTo('catalog')}
            className="px-5 py-2 rounded-full bg-brand-teal/10 border border-brand-teal/50 text-brand-teal text-sm font-bold hover:bg-brand-teal hover:text-brand-darker transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,206,209,0.4)]"
          >
            COMPRAR AGORA
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-brand-darker border-b border-gray-800 p-4 flex flex-col gap-4 shadow-2xl animate-[fadeIn_0.2s_ease-out]">
          <button onClick={() => scrollTo('hero')} className="text-left text-gray-300 hover:text-brand-teal py-2">Início</button>
          <button onClick={() => scrollTo('benefits')} className="text-left text-gray-300 hover:text-brand-teal py-2">Benefícios</button>
          <button onClick={() => scrollTo('catalog')} className="text-left text-gray-300 hover:text-brand-teal py-2">Catálogo</button>
          <button onClick={() => scrollTo('faq')} className="text-left text-gray-300 hover:text-brand-teal py-2">FAQ</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;