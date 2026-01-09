import React, { useState, useEffect } from 'react';
import { BookOpen, Menu, X, ShoppingCart } from 'lucide-react';

interface NavbarProps {
  cartCount?: number;
  onOpenCart?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount = 0, onOpenCart }) => {
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
          
          <div className="flex items-center gap-4 border-l border-white/10 pl-6">
            <button 
              onClick={onOpenCart}
              className="relative p-2 text-gray-300 hover:text-brand-teal transition-colors group"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-brand-gold text-brand-darker text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>
            
            <button 
              onClick={() => scrollTo('catalog')}
              className="px-5 py-2 rounded-full bg-brand-teal/10 border border-brand-teal/50 text-brand-teal text-sm font-bold hover:bg-brand-teal hover:text-brand-darker transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,206,209,0.4)]"
            >
              LOJA
            </button>
          </div>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-4 md:hidden">
            <button 
              onClick={onOpenCart}
              className="relative p-2 text-white"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-brand-gold text-brand-darker text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
            
            <button className="text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
        </div>
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