import React from 'react';
import { X, Trash2, ShoppingCart, ArrowRight } from 'lucide-react';
import { Book } from '../types';
import { WHATSAPP_NUMBER } from '../constants';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: Book[];
  onRemoveItem: (id: string) => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, cartItems, onRemoveItem }) => {
  const totalEUR = cartItems.reduce((acc, item) => acc + item.priceEUR, 0);
  const totalKZ = cartItems.reduce((acc, item) => acc + item.priceKZ, 0);

  const handleCheckout = () => {
    if (cartItems.length === 0) return;

    const itemsList = cartItems.map(item => `- ${item.title} (${item.priceEUR}€ / ${item.priceKZ}Kz)`).join('\n');
    const message = `Olá Literanexus! Gostaria de finalizar a compra dos seguintes livros digitais:\n\n${itemsList}\n\n*Total: ${totalEUR.toFixed(2)}€ / ${totalKZ} Kz*\n\nAguardo as instruções de pagamento.`;
    
    window.open(`https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div 
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-brand-dark border-l border-white/10 shadow-2xl z-[70] transform transition-transform duration-300 ease-in-out flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex justify-between items-center bg-brand-darker">
          <div className="flex items-center gap-3">
            <ShoppingCart className="text-brand-teal" />
            <h2 className="text-xl font-bold text-white font-serif">Seu Carrinho</h2>
            <span className="bg-brand-teal/20 text-brand-teal text-xs px-2 py-0.5 rounded-full font-bold">
              {cartItems.length}
            </span>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center opacity-50 space-y-4">
              <ShoppingCart size={48} className="text-gray-600" />
              <p className="text-gray-400">Seu carrinho está vazio.</p>
              <button onClick={onClose} className="text-brand-teal hover:underline text-sm">
                Voltar ao catálogo
              </button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="flex gap-4 bg-white/5 p-3 rounded-xl border border-white/5 hover:border-brand-teal/30 transition-colors animate-fade-in-up">
                {/* Thumbnail - using the real image URL for clarity in cart small size */}
                <div className="w-16 h-20 flex-shrink-0 bg-gray-800 rounded-md overflow-hidden">
                   <img src={item.image} alt={item.title} className="w-full h-full object-cover opacity-80" />
                </div>
                
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-white line-clamp-2">{item.title}</h3>
                    <p className="text-xs text-gray-400">{item.author}</p>
                  </div>
                  <div className="flex justify-between items-end mt-2">
                    <div className="text-sm font-bold text-brand-gold">
                      {item.priceEUR}€ <span className="text-xs text-gray-500 font-normal">({item.priceKZ} Kz)</span>
                    </div>
                    <button 
                      onClick={() => onRemoveItem(item.id)}
                      className="text-gray-500 hover:text-red-400 transition-colors p-1"
                      title="Remover"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer / Checkout */}
        {cartItems.length > 0 && (
          <div className="p-6 bg-brand-darker border-t border-white/10">
            <div className="flex justify-between items-center mb-6">
              <span className="text-gray-400 uppercase text-sm tracking-wider">Total</span>
              <div className="text-right">
                <div className="text-2xl font-bold text-white">{totalEUR.toFixed(2)}€</div>
                <div className="text-sm text-gray-500">{totalKZ} Kz</div>
              </div>
            </div>
            
            <button 
              onClick={handleCheckout}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-brand-teal to-brand-tealDark text-brand-darker font-bold text-lg hover:shadow-[0_0_20px_rgba(0,206,209,0.4)] transition-all duration-300 flex items-center justify-center gap-2 group animate-pulse-glow"
            >
              <span>FINALIZAR COMPRA</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <p className="text-center text-[10px] text-gray-500 mt-3">
              Você será redirecionado para o WhatsApp para concluir o pagamento.
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;