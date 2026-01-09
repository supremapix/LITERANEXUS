import React from 'react';
import { ShoppingBag } from 'lucide-react';

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
      className={`
        fixed z-50 transition-all duration-300 group flex items-center justify-center gap-2
        
        /* Mobile Layout: Left side, Compact size */
        bottom-5 left-4 px-5 py-3
        
        /* Desktop Layout: Right side, Full size */
        md:bottom-6 md:right-6 md:left-auto md:px-8 md:py-4
        
        /* Visuals */
        rounded-full 
        bg-gradient-to-r from-brand-gold via-[#FFD700] to-orange-500 
        text-brand-darker 
        border border-white/30 backdrop-blur-sm
        
        /* Shadows & Glow */
        shadow-[0_4px_20px_rgba(255,215,0,0.4)]
        hover:shadow-[0_0_35px_rgba(255,215,0,0.7)]
        
        /* Interactions */
        hover:scale-105 active:scale-95 hover:-translate-y-1
        
        /* Animation */
        animate-pulse-glow
      `}
    >
      {/* Icon with internal glow effect */}
      <div className="relative">
        <ShoppingBag size={20} strokeWidth={2.8} className="md:w-5 md:h-5 relative z-10" />
        <div className="absolute inset-0 bg-white blur-md opacity-40 animate-pulse" />
      </div>

      <span className="font-black uppercase tracking-wider text-xs md:text-sm drop-shadow-sm">
        Comprar <span className="hidden md:inline ml-1">Agora</span>
      </span>
      
      {/* Shine effect overlay */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer_1s_infinite] overflow-hidden" />
    </button>
  );
};

export default FloatingBuyButton;