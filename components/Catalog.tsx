import React, { useState } from 'react';
import { BOOKS } from '../constants';
import { Category, Book } from '../types';
import { BookOpen, Sparkles, Filter, Facebook, Twitter, Link2, Share2, X, ShoppingBag, MessageCircle, CheckCircle2 } from 'lucide-react';
import BookCover from './BookCover';

interface CatalogProps {
  addToCart: (book: Book) => void;
}

const Catalog: React.FC<CatalogProps> = ({ addToCart }) => {
  const [activeCategory, setActiveCategory] = useState<Category | 'Todos'>('Todos');
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const categories = ['Todos', ...Object.values(Category)];

  const filteredBooks = activeCategory === 'Todos' 
    ? BOOKS 
    : BOOKS.filter(book => book.category === activeCategory);

  const shareBook = (e: React.MouseEvent, platform: 'whatsapp' | 'facebook' | 'twitter' | 'copy', book: Book) => {
    e.stopPropagation(); // Prevent opening modal
    const url = window.location.href; 
    const text = `Confira o livro "${book.title}" na Literanexus!`;
    
    switch (platform) {
      case 'whatsapp':
        window.open(`https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`, '_blank');
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'copy':
        navigator.clipboard.writeText(`${text} ${url}`);
        alert('Link copiado!');
        break;
    }
  };

  const handleAddToCart = (e: React.MouseEvent, book: Book) => {
    e.stopPropagation();
    addToCart(book);
    setSelectedBook(null); // Close modal if open
  };

  return (
    <section id="catalog" className="py-24 bg-brand-darker relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-teal/20 to-transparent" />
      
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
            Catálogo <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-brand-purple">Premium</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg font-light">
            Explore nossa coleção curada de obras digitais. <br/>Conhecimento e inspiração a um clique de distância.
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat as any)}
              className={`
                px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border
                ${activeCategory === cat 
                  ? 'bg-brand-teal text-brand-darker border-brand-teal shadow-[0_0_15px_rgba(0,206,209,0.3)] transform scale-105' 
                  : 'bg-transparent border-white/10 text-gray-400 hover:border-brand-teal/50 hover:text-white'}
              `}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredBooks.map((book) => (
            <div 
              key={book.id} 
              onClick={() => setSelectedBook(book)}
              className="group relative bg-brand-card/30 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden hover:border-brand-teal/40 transition-all duration-500 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] flex flex-col cursor-pointer"
            >
              {/* Cover */}
              <div className="relative aspect-[2/3] overflow-hidden bg-gray-900 shadow-inner">
                <BookCover book={book} />
                {book.bestseller && (
                  <div className="absolute top-0 right-0 bg-brand-gold/90 backdrop-blur text-brand-darker text-[10px] font-bold px-3 py-1.5 rounded-bl-xl shadow-lg flex items-center gap-1 z-30">
                    <Sparkles size={10} /> BESTSELLER
                  </div>
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 z-20 pointer-events-none" />
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md border border-white/10 text-brand-teal text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider z-30">
                  {book.category.split('&')[0]}
                </div>
                
                {/* Overlay Hint */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30 pointer-events-none">
                    <span className="bg-black/70 backdrop-blur text-white px-4 py-2 rounded-full text-sm font-bold border border-white/20 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                        Ver Detalhes
                    </span>
                </div>
              </div>

              {/* Content */}
              <div className="relative p-6 flex flex-col flex-grow bg-gradient-to-b from-brand-card/50 to-brand-card/80">
                <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-1 leading-tight line-clamp-2 min-h-[3.2rem] group-hover:text-brand-teal transition-colors">
                        {book.title}
                    </h3>
                    <p className="text-gray-400 text-sm font-medium">{book.author}</p>
                </div>

                {/* Social Sharing */}
                <div className="flex items-center gap-2 mb-4 pt-2 border-t border-white/5" onClick={e => e.stopPropagation()}>
                  <span className="text-[10px] text-gray-500 uppercase font-bold mr-auto">Compartilhar:</span>
                  <button onClick={(e) => shareBook(e, 'whatsapp', book)} className="text-gray-400 hover:text-green-500 transition-colors p-1" title="WhatsApp"><MessageCircle size={14} /></button>
                  <button onClick={(e) => shareBook(e, 'facebook', book)} className="text-gray-400 hover:text-blue-500 transition-colors p-1" title="Facebook"><Facebook size={14} /></button>
                  <button onClick={(e) => shareBook(e, 'twitter', book)} className="text-gray-400 hover:text-sky-400 transition-colors p-1" title="Twitter"><Twitter size={14} /></button>
                </div>
                
                <div className="mt-auto space-y-4">
                  <div className="flex items-end gap-2">
                    <span className="text-3xl font-serif font-bold text-white tracking-tight">{book.priceEUR}€</span>
                    <span className="text-sm text-gray-500 mb-1.5 font-medium border-l border-gray-700 pl-2 ml-1">{book.priceKZ} Kz</span>
                  </div>
                  
                  <button 
                    onClick={(e) => handleAddToCart(e, book)}
                    className="w-full py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-brand-teal hover:border-brand-teal hover:text-brand-darker text-white font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-[0_0_15px_rgba(0,206,209,0.2)]"
                  >
                    <span>ADICIONAR</span>
                    <BookOpen size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* DETAILS MODAL */}
        {selectedBook && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={() => setSelectedBook(null)} />
                
                <div className="relative w-full max-w-5xl bg-brand-darker border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row animate-[scaleIn_0.3s_ease-out] max-h-[90vh]">
                    <button 
                        onClick={() => setSelectedBook(null)}
                        className="absolute top-4 right-4 z-50 p-2 bg-black/50 rounded-full text-white hover:bg-white hover:text-black transition-colors"
                    >
                        <X size={24} />
                    </button>

                    {/* Left: Cover */}
                    <div className="w-full md:w-2/5 h-64 md:h-auto bg-gray-900 relative">
                        <BookCover book={selectedBook} />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-darker to-transparent md:hidden" />
                    </div>

                    {/* Right: Info */}
                    <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col overflow-y-auto">
                        <div className="mb-2">
                            <span className="text-brand-teal text-xs font-bold uppercase tracking-widest border border-brand-teal/30 px-2 py-1 rounded">
                                {selectedBook.category}
                            </span>
                        </div>
                        
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-2 leading-tight">
                            {selectedBook.title}
                        </h2>
                        <p className="text-gray-400 font-medium text-lg mb-6">por {selectedBook.author}</p>
                        
                        <div className="prose prose-invert prose-sm mb-6 text-gray-300 leading-relaxed">
                            <p>{selectedBook.description}</p>
                        </div>

                        {/* EXPANDED BENEFITS SECTION */}
                        {selectedBook.benefits && selectedBook.benefits.length > 0 && (
                          <div className="mb-8 bg-brand-card/30 rounded-xl p-5 border border-white/5">
                            <h4 className="text-white font-bold mb-4 flex items-center gap-2 uppercase text-sm tracking-wider">
                              <Sparkles className="text-brand-gold w-4 h-4" />
                              O que você vai descobrir:
                            </h4>
                            <ul className="grid grid-cols-1 gap-3">
                              {selectedBook.benefits.map((benefit, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-gray-300 text-sm leading-snug group">
                                  <CheckCircle2 className="text-brand-teal w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                                  <span className="group-hover:text-white transition-colors">{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Social Buttons in Modal */}
                        <div className="flex items-center gap-4 mb-6 pt-4 border-t border-white/5">
                            <span className="text-xs text-gray-500 font-bold uppercase tracking-wider">Compartilhar:</span>
                            <div className="flex gap-2">
                                <button onClick={(e) => shareBook(e, 'whatsapp', selectedBook)} className="p-2 rounded-full bg-white/5 hover:bg-[#25D366] hover:text-white text-gray-400 transition-all duration-300" title="WhatsApp">
                                    <MessageCircle size={16} />
                                </button>
                                <button onClick={(e) => shareBook(e, 'facebook', selectedBook)} className="p-2 rounded-full bg-white/5 hover:bg-[#1877F2] hover:text-white text-gray-400 transition-all duration-300" title="Facebook">
                                    <Facebook size={16} />
                                </button>
                                <button onClick={(e) => shareBook(e, 'twitter', selectedBook)} className="p-2 rounded-full bg-white/5 hover:bg-[#1DA1F2] hover:text-white text-gray-400 transition-all duration-300" title="Twitter">
                                    <Twitter size={16} />
                                </button>
                                <button onClick={(e) => shareBook(e, 'copy', selectedBook)} className="p-2 rounded-full bg-white/5 hover:bg-gray-600 hover:text-white text-gray-400 transition-all duration-300" title="Copiar Link">
                                    <Link2 size={16} />
                                </button>
                            </div>
                        </div>

                        <div className="mt-auto pt-4 border-t border-white/10 sticky bottom-0 bg-brand-darker/95 backdrop-blur py-4 -mb-4 md:static md:bg-transparent md:py-0 md:mb-0">
                            <div className="flex flex-col md:flex-row items-center gap-6 justify-between">
                                <div>
                                    <span className="block text-xs text-gray-500 uppercase">Preço Digital</span>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-4xl font-bold text-white">{selectedBook.priceEUR}€</span>
                                        <span className="text-lg text-gray-500 font-medium">/ {selectedBook.priceKZ} Kz</span>
                                    </div>
                                </div>
                                
                                <button 
                                    onClick={(e) => handleAddToCart(e, selectedBook)}
                                    className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-brand-gold to-orange-500 text-brand-darker font-black text-lg rounded-xl shadow-[0_0_25px_rgba(255,215,0,0.4)] hover:shadow-[0_0_40px_rgba(255,215,0,0.6)] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 animate-pulse-glow group"
                                >
                                    <ShoppingBag size={22} strokeWidth={3} className="group-hover:rotate-12 transition-transform" />
                                    ADICIONAR AGORA
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )}

      </div>
    </section>
  );
};

export default Catalog;