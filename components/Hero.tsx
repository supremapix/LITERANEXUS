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
    <section id="hero" className="relative min-h-[105vh] flex items-center pt-28 pb-20 overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 bg-brand-darker">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-teal/10 blur-[150px] rounded-full translate-x-1/3 -translate-y-1/3 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-purple/15 blur-[150px] rounded-full -translate-x-1/3 translate-y-1/3" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />
      </div>

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
        
        {/* Text Content - Order 2 on Mobile, Order 1 on Desktop */}
        <div className="space-y-6 md:space-y-8 z-10 text-center lg:text-left animate-fade-in-up order-2 lg:order-1">
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
          
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light border-l-2 border-transparent lg:border-brand-teal/30 lg:pl-6">
            Um devocional diário que fortalece a fé, traz paz e direção espiritual para cada manhã do seu ano. A jornada para uma vida plena começa agora.
          </p>

          {/* Benefits Mini-list */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start text-sm text-gray-300 font-medium">
            <div className="flex items-center gap-2 bg-brand-card/50 px-4 py-2 rounded-lg border border-white/5 justify-center sm:justify-start">
              <CheckCircle2 className="text-brand-gold w-5 h-5 flex-shrink-0" />
              <span>Entrega Imediata (PDF)</span>
            </div>
            <div className="flex items-center gap-2 bg-brand-card/50 px-4 py-2 rounded-lg border border-white/5 justify-center sm:justify-start">
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

        {/* Hero Image / 3D Mockup - Order 1 on Mobile, Order 2 on Desktop */}
        <div className="relative z-10 flex justify-center perspective-1000 lg:h-[600px] items-center lg:mt-0 order-1 lg:order-2 mb-4 lg:mb-0">
          <div className="relative w-56 md:w-80 lg:w-[420px] aspect-[2/3] animate-float group cursor-pointer" onClick={handleBuy}>
            
            {/* Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-[#8B5A2B]/40 to-[#CD853F]/40 blur-[80px] rounded-full opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
            
            {/* The Book 3D Container */}
            <div 
              className="relative w-full h-full transform transition-transform duration-500 ease-out group-hover:scale-105"
              style={{
                transformStyle: 'preserve-3d',
                transform: 'rotateY(-15deg) rotateX(5deg)',
              }}
            >
              {/* Spine (Left side) */}
              <div className="absolute left-0 top-0 bottom-0 w-10 bg-[#5D3A1A] transform -translate-x-full origin-right skew-y-[20deg] brightness-75 rounded-l-sm border-r border-[#3E2712]" />
              
              {/* Pages (Right side) */}
              <div className="absolute right-0 top-0 bottom-0 w-12 bg-[#F5F5F5] transform translate-x-[1px] rotate-y-90 origin-right flex flex-col justify-between py-2 border-l border-gray-300 shadow-inner">
                 {[...Array(25)].map((_, i) => (
                    <div key={i} className="w-full h-px bg-gray-200" />
                 ))}
              </div>

              {/* === COVER EMULATION === */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#A06C3B] to-[#5D3A1A] rounded-r-md rounded-l-sm shadow-[10px_10px_30px_rgba(0,0,0,0.5)] flex flex-col items-center justify-between p-4 md:p-6 overflow-hidden border-l border-white/10">
                
                {/* Texture overlay */}
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/leather.png')]" />

                {/* Best Seller Seal */}
                <div className="absolute top-4 right-4 md:top-6 md:right-6 z-20">
                    <div className="relative w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#CD853F] to-[#8B4513] rounded-full flex items-center justify-center shadow-lg border-2 border-[#DEB887] animate-pulse">
                        <div className="text-center text-[#3E2712] font-bold leading-none">
                            <span className="block text-[6px] md:text-[8px] uppercase tracking-wide">Mais de</span>
                            <span className="block text-lg md:text-xl">5</span>
                            <span className="block text-[6px] md:text-[8px] uppercase tracking-wide">Milhões</span>
                            <span className="block text-[6px] md:text-[7px] uppercase mt-0.5 border-t border-[#3E2712] pt-0.5">Vendidos</span>
                        </div>
                        {/* Ribbon tail effect */}
                        <div className="absolute -bottom-2 w-4 h-4 bg-[#5D3A1A] rotate-45 -z-10" />
                    </div>
                </div>

                {/* Title */}
                <div className="mt-8 md:mt-12 text-center z-10 relative">
                    <h2 className="text-[#3E2712] font-black text-5xl md:text-6xl leading-[0.8] tracking-tighter mix-blend-multiply opacity-80" style={{ fontFamily: 'Inter, sans-serif' }}>
                        café
                    </h2>
                    <h3 className="text-[#3E2712] font-bold text-xl md:text-2xl tracking-widest my-1 opacity-90">
                        com
                    </h3>
                    <h2 className="text-[#000] font-black text-6xl md:text-7xl leading-[0.8] tracking-tighter" style={{ fontFamily: 'Inter, sans-serif' }}>
                        DEUS
                    </h2>
                    <h2 className="text-[#000] font-black text-6xl md:text-7xl leading-[0.8] tracking-tighter" style={{ fontFamily: 'Inter, sans-serif' }}>
                        PAI
                    </h2>
                    <p className="text-[#F5DEB3] text-[8px] md:text-[10px] tracking-[0.3em] uppercase mt-4 font-semibold border-t border-white/20 pt-2 inline-block">
                        Porções Diárias de Transformação
                    </p>
                </div>

                {/* Central Coffee Cup Image */}
                <div className="relative w-36 h-36 md:w-48 md:h-48 rounded-full border-4 border-[#8B4513] shadow-2xl overflow-hidden z-10 my-4 group-hover:scale-110 transition-transform duration-700">
                    <img 
                        src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=600&auto=format&fit=crop" 
                        alt="Coffee Cup"
                        className="w-full h-full object-cover opacity-90 sepia-[0.3]"
                    />
                    {/* Inner shadow for depth */}
                    <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.6)] rounded-full pointer-events-none" />
                </div>

                {/* Author Name */}
                <div className="text-center z-10 mb-4 md:mb-6">
                    <p className="text-white text-xs md:text-sm font-bold tracking-[0.3em] uppercase">
                        Junior Rostirola
                    </p>
                </div>

                {/* Lighting Sheen */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent z-20 pointer-events-none" />
              </div>
              
              {/* === END COVER EMULATION === */}

            </div>

            {/* Floating Price Badge */}
            <div className="absolute -bottom-6 -right-6 md:-right-12 bg-white/10 backdrop-blur-md border border-brand-gold/30 text-white p-3 md:p-4 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] transform rotate-6 animate-pulse-glow flex flex-col items-center justify-center min-w-[100px] md:min-w-[120px] z-30">
              <span className="text-[10px] md:text-xs text-brand-gold uppercase font-bold tracking-wider">Promoção</span>
              <div className="text-xl md:text-2xl font-serif font-bold">{mainBook.priceEUR}€</div>
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