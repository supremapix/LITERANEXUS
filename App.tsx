import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Catalog from './components/Catalog';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import NotificationToast from './components/NotificationToast';
import CartDrawer from './components/CartDrawer';
import { Book } from './types';

function App() {
  const [cart, setCart] = useState<Book[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (book: Book) => {
    // Prevent duplicates for digital items
    if (!cart.find((item) => item.id === book.id)) {
      setCart([...cart, book]);
      setIsCartOpen(true); // Auto open cart to show confirmation
    }
  };

  const removeFromCart = (bookId: string) => {
    setCart(cart.filter((item) => item.id !== bookId));
  };

  return (
    <main className="min-h-screen bg-brand-darker text-white font-sans selection:bg-brand-teal selection:text-brand-darker">
      <Navbar 
        cartCount={cart.length} 
        onOpenCart={() => setIsCartOpen(true)} 
      />
      
      <Hero />
      <Features />
      
      <Catalog 
        addToCart={addToCart} 
      />
      
      <FAQ />
      <Footer />
      <FloatingWhatsApp />
      <NotificationToast />
      
      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cartItems={cart} 
        onRemoveItem={removeFromCart} 
      />
    </main>
  );
}

export default App;