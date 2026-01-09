import React, { useState, useEffect } from 'react';
import { RECENT_BUYERS, BOOKS } from '../constants';

const NotificationToast: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState({ name: '', book: '' });

  useEffect(() => {
    // Show first notification after 5 seconds
    const initialTimeout = setTimeout(() => {
      showRandomNotification();
    }, 5000);

    // Loop notifications every 20-40 seconds
    const interval = setInterval(() => {
      showRandomNotification();
    }, Math.random() * 20000 + 20000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  const showRandomNotification = () => {
    const randomBuyer = RECENT_BUYERS[Math.floor(Math.random() * RECENT_BUYERS.length)];
    const randomBook = BOOKS[Math.floor(Math.random() * BOOKS.length)].title;
    
    setData({ name: randomBuyer, book: randomBook });
    setVisible(true);

    setTimeout(() => {
      setVisible(false);
    }, 4000); // Hide after 4s
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-24 left-4 z-40 bg-white/90 backdrop-blur-sm text-brand-darker p-4 rounded-lg shadow-xl border-l-4 border-brand-green-500 max-w-xs animate-[slideIn_0.5s_ease-out]">
      <div className="flex gap-3 items-center">
        <div className="bg-green-100 p-2 rounded-full">
          <span className="text-xl">🛒</span>
        </div>
        <div>
          <p className="text-xs font-bold text-gray-500">Alguém comprou agora:</p>
          <p className="text-sm font-semibold">{data.name}</p>
          <p className="text-xs text-brand-purple truncate w-48">{data.book}</p>
        </div>
      </div>
    </div>
  );
};

export default NotificationToast;