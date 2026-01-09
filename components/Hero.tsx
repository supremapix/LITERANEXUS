import React from 'react';
import PremiumButton from './PremiumButton';
import CountdownTimer from './CountdownTimer';
import { BOOKS } from '../constants';
import { CheckCircle2, Star } from 'lucide-react';

const Hero: React.FC = () => {
  const mainBook = BOOKS[0]; // Café com Deus Pai

  const handleBuy = () => {
    const section = document.getElementById('catalog');
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-[105vh] flex items-center pt-32 pb-20 overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 bg-brand-darker">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-teal/10 blur-[150px] rounded-full translate-x-1/3 -translate-y-1/3 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-purple/15 blur-[150px] rounded-full -translate-x-1/3 translate-y-1/3" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />
      </div>

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Text Content */}
        <div className="space-y-8 z-10 text-center lg:text-left animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-brand-teal/30 backdrop-blur-sm text-brand-teal px-5 py-2 rounded-full text-xs md:text-sm font-bold tracking-widest uppercase shadow-[0_0_20px_rgba(0,206,209,0.15)]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-teal opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-teal"></span>
            </span>
            Edição Limitada 2026
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold leading-[1.1] text-white drop-shadow-xl tracking-tight">
            Transforme Seus Dias com <br className="hidden lg:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-white to-brand-gold animate-shimmer bg-[length:200%_auto]">
              Café com Deus Pai
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light border-l-2 border-brand-teal/30 pl-6">
            Um devocional diário que fortalece a fé, traz paz e direção espiritual para cada manhã do seu ano. A jornada para uma vida plena começa agora.
          </p>

          {/* Benefits Mini-list */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start text-sm text-gray-300 font-medium">
            <div className="flex items-center gap-2 bg-brand-card/50 px-4 py-2 rounded-lg border border-white/5">
              <CheckCircle2 className="text-brand-gold w-5 h-5 flex-shrink-0" />
              <span>Entrega Imediata (PDF)</span>
            </div>
            <div className="flex items-center gap-2 bg-brand-card/50 px-4 py-2 rounded-lg border border-white/5">
              <CheckCircle2 className="text-brand-gold w-5 h-5 flex-shrink-0" />
              <span>Compatível com Celular/Tablet</span>
            </div>
          </div>

          <CountdownTimer />

          <div className="flex flex-col items-center lg:items-start gap-4">
            <PremiumButton text="QUERO TRANSFORMAR MINHA VIDA" onClick={handleBuy} size="xl" icon="arrow" />
            <div className="flex items-center gap-2 text-xs text-gray-500 uppercase tracking-widest mt-2">
              <Star className="w-3 h-3 text-brand-gold fill-brand-gold" />
              <span>Mais de 5.000 cópias vendidas</span>
            </div>
          </div>
        </div>

        {/* Hero Image / 3D Mockup */}
        <div className="relative z-10 flex justify-center perspective-1000 lg:h-[600px] items-center">
          <div className="relative w-64 md:w-80 lg:w-[420px] aspect-[2/3] animate-float group cursor-pointer" onClick={handleBuy}>
            
            {/* Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-brand-teal/30 to-brand-purple/30 blur-[60px] rounded-full opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
            
            {/* The Book */}
            <div 
              className="relative w-full h-full transform transition-transform duration-500 ease-out group-hover:scale-105"
              style={{
                transformStyle: 'preserve-3d',
                transform: 'rotateY(-15deg) rotateX(5deg)',
              }}
            >
              {/* Spine */}
              <div className="absolute left-0 top-0 bottom-0 w-8 bg-gray-200 transform -translate-x-full origin-right skew-y-[20deg] brightness-75 rounded-l-sm" />
              
              {/* Pages side */}
              <div className="absolute right-0 top-0 bottom-0 w-12 bg-white transform translate-x-[1px] rotate-y-90 origin-right flex flex-col justify-between py-2 border-l border-gray-300">
                 {/* Page lines effect */}
                 {[...Array(20)].map((_, i) => (
                    <div key={i} className="w-full h-px bg-gray-200" />
                 ))}
              </div>

              <img 
                src={mainBook.image} 
                alt={mainBook.title}
                className="w-full h-full object-cover rounded-r-md rounded-l-sm shadow-[25px_25px_50px_rgba(0,0,0,0.6)] border-l border-white/20 relative z-10"
              />
              
              {/* Cover Shine/Reflection */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent z-20 pointer-events-none rounded-r-md" />
            </div>

            {/* Floating Price Badge */}
            <div className="absolute -bottom-6 -right-6 md:-right-12 bg-white/10 backdrop-blur-md border border-brand-gold/30 text-white p-4 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] transform rotate-6 animate-pulse-glow flex flex-col items-center justify-center min-w-[120px] z-30">
              <span className="text-xs text-brand-gold uppercase font-bold tracking-wider">Promoção</span>
              <div className="text-2xl font-serif font-bold">{mainBook.priceEUR}€</div>
              <div className="text-[10px] text-gray-300">({mainBook.priceKZ} Kz)</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce opacity-50 hidden md:block">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;