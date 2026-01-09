import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

const FloatingWhatsApp: React.FC = () => {
  const handleClick = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=Olá, gostaria de saber mais sobre os livros digitais!`, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-40 right-6 z-40 bg-[#25D366] text-white p-3 md:p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 flex items-center justify-center group"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle size={24} fill="white" />
      <span className="absolute right-full mr-3 bg-brand-darker border border-white/10 text-white px-3 py-1 rounded-lg text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none hidden md:block">
        Fale Conosco
      </span>
    </button>
  );
};

export default FloatingWhatsApp;