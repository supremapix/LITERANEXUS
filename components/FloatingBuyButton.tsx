import React from 'react';
import { ShoppingBag, ArrowUp } from 'lucide-react';

const FloatingBuyButton: React.FC = () => {
  const handleClick = () => {
    const catalogSection = document.getElementById('catalog');
    if (catalogSection) {
      catalogSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-brand-gold text-brand-darker px-6 py-4 rounded-full shadow-[0_0_20px_rgba(255,215,0,0.4)] hover:shadow-[0_0_30px_rgba(255,215,0,0.6)] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group border-2 border-brand-darker font-bold uppercase tracking-wider animate-pulse-glow"
    >
      <ShoppingBag size={20} strokeWidth={2.5} />
      <span className="hidden md:inline">Comprar Agora</span>
      <span className="md:hidden">Comprar</span>
    </button>
  );
};

export default FloatingBuyButton;