import React from 'react';
import { Book } from '../types';
import { Brain, Heart, DollarSign, RefreshCw, Feather, Cross } from 'lucide-react';

interface BookCoverProps {
  book: Book;
}

const BookCover: React.FC<BookCoverProps> = ({ book }) => {
  // Base container styles for the book spine/cover effect
  const containerClass = "w-full h-full relative overflow-hidden flex flex-col p-4 shadow-inner transition-transform duration-500";
  
  // Render specific cover designs based on ID
  const renderCoverContent = () => {
    switch (book.id) {
      case 'cafe-2026':
        return (
          <div className={`${containerClass} bg-gradient-to-b from-[#A06C3B] to-[#5D3A1A]`}>
            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/leather.png')]" />
            <div className="relative z-10 flex flex-col h-full items-center justify-between py-4 text-center">
              <div className="space-y-0 text-[#3E2712] font-black leading-[0.85] mix-blend-multiply opacity-80">
                <span className="block text-4xl">café</span>
                <span className="block text-lg font-bold my-1 tracking-widest text-white/90 drop-shadow-md">com</span>
                <span className="block text-5xl">DEUS</span>
                <span className="block text-5xl">PAI</span>
              </div>
              <div className="w-24 h-24 rounded-full border-4 border-[#3E2712]/30 shadow-xl overflow-hidden bg-[#3E2712] flex items-center justify-center">
                 <div className="w-20 h-20 rounded-full border border-white/20 bg-gradient-to-br from-[#8B5A2B] to-[#5D3A1A]" />
              </div>
              <p className="text-xs text-[#F5DEB3] uppercase tracking-widest font-bold">Junior Rostirola</p>
            </div>
          </div>
        );

      case 'cs-lewis':
        return (
          <div className={`${containerClass} bg-gradient-to-br from-red-950 to-black`}>
            <div className="absolute inset-2 border border-yellow-600/30" />
            <div className="relative z-10 flex flex-col h-full justify-between text-center py-6">
              <p className="text-yellow-600/80 text-xs tracking-[0.2em] uppercase">Clássicos da Fé</p>
              <div className="font-serif text-white text-3xl italic leading-tight">
                Cartas de um<br/>Diabo a seu<br/>Aprendiz
              </div>
              <div>
                <Feather className="w-8 h-8 text-red-700 mx-auto mb-2 opacity-80" />
                <p className="text-white font-bold tracking-widest text-sm uppercase">C.S. Lewis</p>
              </div>
            </div>
          </div>
        );

      case 'jesus-psicologo':
        return (
          <div className={`${containerClass} bg-gradient-to-b from-blue-500 to-blue-700`}>
             <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
             <div className="relative z-10 flex flex-col h-full justify-center items-center text-center">
                <h2 className="text-white font-serif text-4xl font-bold mb-1">JESUS</h2>
                <span className="text-blue-100 text-xs uppercase tracking-widest mb-4">O Maior Psicólogo</span>
                <div className="bg-white/20 p-3 rounded-full mb-6 backdrop-blur-sm">
                   <Cross className="w-6 h-6 text-white" />
                </div>
                <p className="text-white text-sm font-medium">Mark W. Baker</p>
             </div>
          </div>
        );

      case 'poder-habito':
        return (
          <div className={`${containerClass} bg-[#FFD700]`}>
             <div className="relative z-10 flex flex-col h-full justify-between items-center text-center py-8">
                <div className="text-black font-sans font-bold text-3xl leading-none tracking-tight">
                  O PODER<br/>DO<br/>HÁBITO
                </div>
                <div className="w-full flex justify-center">
                    <RefreshCw className="w-20 h-20 text-black stroke-[1.5] animate-spin-slow" style={{ animationDuration: '10s' }} />
                </div>
                <p className="text-black text-xs font-bold uppercase tracking-wider">Charles Duhigg</p>
             </div>
          </div>
        );

      case '5-feridas':
        return (
          <div className={`${containerClass} bg-gradient-to-tr from-cyan-500 to-blue-600`}>
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
             <div className="relative z-10 flex flex-col h-full justify-center items-start text-left px-2">
                <span className="text-white/80 text-6xl font-black -mb-4 opacity-50">5</span>
                <h2 className="text-white font-bold text-3xl leading-tight mb-2">FERIDAS<br/>EMOCIONAIS</h2>
                <div className="h-1 w-12 bg-yellow-400 mb-6" />
                <div className="absolute bottom-4 right-4 opacity-30">
                    <Heart className="w-24 h-24 text-white fill-white" />
                </div>
                <p className="text-white text-sm font-medium">Lise Bourbeau</p>
             </div>
          </div>
        );

      case 'assim-acaba':
        return (
          <div className={`${containerClass} bg-pink-300`}>
             {/* Marble effect */}
             <div className="absolute inset-0 bg-white/20 mix-blend-overlay" style={{backgroundImage: 'radial-gradient(circle at 50% 50%, transparent 20%, rgba(255,255,255,0.3) 21%, transparent 25%)', backgroundSize: '20px 20px'}} />
             
             <div className="relative z-10 flex flex-col h-full justify-center items-center text-center">
                <div className="border-4 border-white p-4 mb-4 rounded-lg bg-pink-400/50 backdrop-blur-sm">
                   <h2 className="text-white font-bold text-2xl uppercase tracking-tighter leading-none">É Assim<br/>Que<br/>Acaba</h2>
                </div>
                <div className="flex gap-2 mb-6">
                    <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    <span className="w-2 h-2 rounded-full bg-white animate-pulse delay-75" />
                    <span className="w-2 h-2 rounded-full bg-white animate-pulse delay-150" />
                </div>
                <p className="text-white font-bold uppercase tracking-widest text-xs">Colleen Hoover</p>
             </div>
          </div>
        );

      case 'verity':
        return (
          <div className={`${containerClass} bg-gray-900`}>
             <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <div className="w-[150%] h-[20px] bg-white rotate-45 blur-xl" />
             </div>
             <div className="relative z-10 flex flex-col h-full justify-center items-center text-center">
                <h2 className="text-transparent bg-clip-text bg-gradient-to-b from-yellow-200 to-yellow-600 font-serif font-black text-5xl tracking-widest uppercase" style={{textShadow: '0 2px 10px rgba(255,215,0,0.2)'}}>
                    Verity
                </h2>
                <p className="mt-8 text-gray-400 text-xs font-medium uppercase tracking-[0.3em]">Colleen Hoover</p>
             </div>
          </div>
        );

      case 'pai-rico':
        return (
          <div className={`${containerClass} bg-purple-900`}>
             <div className="absolute inset-0 bg-gradient-to-b from-purple-800 to-purple-950" />
             <div className="relative z-10 flex flex-col h-full justify-between items-center text-center py-6">
                <div className="text-yellow-400 font-bold text-2xl uppercase leading-none tracking-tight">
                    Pai Rico<br/><span className="text-white">Pai Pobre</span>
                </div>
                <div className="bg-yellow-400/20 p-4 rounded-full border border-yellow-400/50">
                    <DollarSign className="w-8 h-8 text-yellow-400" />
                </div>
                <p className="text-purple-200 text-xs font-bold uppercase">Robert Kiyosaki</p>
             </div>
          </div>
        );

      case 'mente-milionaria':
        return (
          <div className={`${containerClass} bg-gradient-to-br from-green-800 to-green-950`}>
             <div className="relative z-10 flex flex-col h-full justify-center items-center text-center px-2">
                <p className="text-orange-400 text-[10px] font-bold uppercase mb-2">Os Segredos da</p>
                <h2 className="text-white font-black text-2xl uppercase leading-tight mb-4">Mente<br/><span className="text-orange-400">Milionária</span></h2>
                <Brain className="w-12 h-12 text-white/20 absolute top-4 left-4" />
                <Brain className="w-16 h-16 text-white/10 absolute bottom-12 right-4" />
                <div className="mt-auto border-t border-white/20 pt-2 w-full">
                    <p className="text-white text-xs font-bold">T. Harv Eker</p>
                </div>
             </div>
          </div>
        );

      default:
        // Fallback generic cover
        return (
          <div className={`${containerClass} bg-gray-800 flex items-center justify-center`}>
            <div className="text-center p-4 border border-white/10">
                <h3 className="text-white font-bold text-xl mb-2">{book.title}</h3>
                <p className="text-gray-400 text-sm">{book.author}</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="w-full h-full relative group">
        {renderCoverContent()}
        {/* Shine overlay for all books */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none z-20" />
        {/* Spine shadow */}
        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-black/20 z-20" />
    </div>
  );
};

export default BookCover;