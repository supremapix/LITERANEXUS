import React, { useState } from 'react';
import { BOOKS } from '../constants';
import { Category, Book } from '../types';
import { BookOpen, Sparkles, Filter, Facebook, Twitter, Link2, Share2 } from 'lucide-react';
import BookCover from './BookCover';

interface CatalogProps {
  addToCart: (book: Book) => void;
}

const Catalog: React.FC<CatalogProps> = ({ addToCart }) => {
  const [activeCategory, setActiveCategory] = useState<Category | 'Todos'>('Todos');

  const categories = ['Todos', ...Object.values(Category)];

  const filteredBooks = activeCategory === 'Todos' 
    ? BOOKS 
    : BOOKS.filter(book => book.category === activeCategory);

  const shareBook = (platform: 'whatsapp' | 'facebook' | 'twitter' | 'copy', book: Book) => {
    const url = window.location.href; // In a real app, this would be the specific book URL
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

  return (
    <section id="catalog" className="py-24 bg-brand-darker relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-teal/20 to-transparent" />
      
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
            Catálogo <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-brand-purple">Premium</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg font-light">
            Explore nossa coleção curada de obras digitais. <br/>Conhecimento e inspiração a um clique de distância.
          </p>
        </div>

        {/* Category Filter */}
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
              className="group relative bg-brand-card/30 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden hover:border-brand-teal/40 transition-all duration-500 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] flex flex-col"
            >
              
              {/* Cover Area (Replaces Image) */}
              <div className="relative aspect-[2/3] overflow-hidden bg-gray-900 shadow-inner">
                {/* Visual Emulation Component */}
                <BookCover book={book} />
                
                {book.bestseller && (
                  <div className="absolute top-0 right-0 bg-brand-gold/90 backdrop-blur text-brand-darker text-[10px] font-bold px-3 py-1.5 rounded-bl-xl shadow-lg flex items-center gap-1 z-30">
                    <Sparkles size={10} /> BESTSELLER
                  </div>
                )}

                {/* Overlay gradient for hover effect */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 z-20 pointer-events-none" />
                
                {/* Floating Category Tag */}
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md border border-white/10 text-brand-teal text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider z-30">
                  {book.category.split('&')[0]}
                </div>
              </div>

              {/* Content Area */}
              <div className="relative p-6 flex flex-col flex-grow bg-gradient-to-b from-brand-card/50 to-brand-card/80">
                <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-1 leading-tight line-clamp-2 min-h-[3.2rem] group-hover:text-brand-teal transition-colors">
                        {book.title}
                    </h3>
                    <p className="text-gray-400 text-sm font-medium">{book.author}</p>
                </div>

                {/* Social Sharing Row */}
                <div className="flex items-center gap-2 mb-4 pt-2 border-t border-white/5">
                  <span className="text-[10px] text-gray-500 uppercase font-bold mr-auto">Compartilhar:</span>
                  <button onClick={() => shareBook('whatsapp', book)} className="text-gray-400 hover:text-green-500 transition-colors p-1" title="WhatsApp">
                    <Share2 size={14} />
                  </button>
                  <button onClick={() => shareBook('facebook', book)} className="text-gray-400 hover:text-blue-500 transition-colors p-1" title="Facebook">
                    <Facebook size={14} />
                  </button>
                  <button onClick={() => shareBook('twitter', book)} className="text-gray-400 hover:text-sky-400 transition-colors p-1" title="X (Twitter)">
                    <Twitter size={14} />
                  </button>
                  <button onClick={() => shareBook('copy', book)} className="text-gray-400 hover:text-white transition-colors p-1" title="Copiar Link">
                    <Link2 size={14} />
                  </button>
                </div>
                
                <div className="mt-auto space-y-4">
                  <div className="flex items-end gap-2">
                    <span className="text-3xl font-serif font-bold text-white tracking-tight">{book.priceEUR}€</span>
                    <span className="text-sm text-gray-500 mb-1.5 font-medium border-l border-gray-700 pl-2 ml-1">{book.priceKZ} Kz</span>
                  </div>
                  
                  <button 
                    onClick={() => addToCart(book)}
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

        {filteredBooks.length === 0 && (
          <div className="text-center py-20 bg-white/5 rounded-3xl border border-white/5 border-dashed">
            <Filter className="w-12 h-12 mx-auto mb-4 text-gray-600" />
            <p className="text-gray-400">Nenhum livro encontrado nesta categoria.</p>
            <button onClick={() => setActiveCategory('Todos')} className="text-brand-teal mt-2 hover:underline">Ver todos os livros</button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Catalog;