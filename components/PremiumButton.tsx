import React from 'react';
import { ShoppingCart, ArrowRight } from 'lucide-react';

interface PremiumButtonProps {
  text: string;
  onClick?: () => void;
  fullWidth?: boolean;
  size?: 'md' | 'lg' | 'xl';
  icon?: 'cart' | 'arrow';
}

const PremiumButton: React.FC<PremiumButtonProps> = ({ 
  text, 
  onClick, 
  fullWidth = false, 
  size = 'lg',
  icon = 'cart'
}) => {
  const sizeClasses = {
    md: 'py-3 px-6 text-base',
    lg: 'py-4 px-8 text-lg',
    xl: 'py-5 px-10 text-xl font-bold'
  };

  return (
    <button
      onClick={onClick}
      className={`
        relative group overflow-hidden rounded-full
        bg-gradient-to-r from-brand-gold to-orange-500
        text-brand-darker font-bold tracking-wide
        shadow-[0_0_20px_rgba(255,215,0,0.3)]
        hover:shadow-[0_0_40px_rgba(255,215,0,0.6)]
        hover:-translate-y-1 transition-all duration-300
        animate-pulse-glow
        flex items-center justify-center gap-3
        ${fullWidth ? 'w-full' : ''}
        ${sizeClasses[size]}
      `}
    >
      {/* Shine effect overlay */}
      <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent z-10 w-full h-full" />
      
      <span className="relative z-20">{text}</span>
      
      {icon === 'cart' && (
        <ShoppingCart className="w-5 h-5 relative z-20 group-hover:translate-x-1 transition-transform" />
      )}
      {icon === 'arrow' && (
        <ArrowRight className="w-5 h-5 relative z-20 group-hover:translate-x-1 transition-transform" />
      )}
    </button>
  );
};

export default PremiumButton;