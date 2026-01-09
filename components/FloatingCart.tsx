import React from 'react';
import { ShoppingCart } from 'lucide-react';

interface FloatingCartProps {
  itemCount: number;
  onClick: () => void;
}

const FloatingCart: React.FC<FloatingCartProps> = ({ itemCount, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-24 right-6 z-40 bg-brand-teal text-brand-darker p-3 md:p-4 rounded-full shadow-[0_0_15px_rgba(0,206,209,0.3)] hover:scale-110 transition-all duration-300 flex items-center justify-center group border border-white/20"
      aria-label="Abrir carrinho"
    >
      <ShoppingCart size={24} strokeWidth={2.5} />
      {itemCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-white text-brand-darker text-[10px] font-black w-5 h-5 flex items-center justify-center rounded-full border border-brand-darker">
          {itemCount}
        </span>
      )}
      
      {/* Tooltip */}
      <span className="absolute right-full mr-3 bg-brand-darker border border-white/10 text-white px-3 py-1 rounded-lg text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none hidden md:block">
        Ver Carrinho
      </span>
    </button>
  );
};

export default FloatingCart;