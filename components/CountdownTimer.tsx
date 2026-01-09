import React, { useState, useEffect } from 'react';

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 23, minutes: 59, seconds: 59 }; // Reset loop
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const format = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="flex gap-4 text-center justify-center my-6">
      <div className="bg-brand-dark/80 border border-brand-teal/30 p-3 rounded-lg min-w-[70px]">
        <div className="text-2xl font-bold text-brand-teal">{format(timeLeft.hours)}</div>
        <div className="text-xs text-gray-400 uppercase">Horas</div>
      </div>
      <div className="bg-brand-dark/80 border border-brand-teal/30 p-3 rounded-lg min-w-[70px]">
        <div className="text-2xl font-bold text-brand-teal">{format(timeLeft.minutes)}</div>
        <div className="text-xs text-gray-400 uppercase">Min</div>
      </div>
      <div className="bg-brand-dark/80 border border-brand-teal/30 p-3 rounded-lg min-w-[70px]">
        <div className="text-2xl font-bold text-brand-gold">{format(timeLeft.seconds)}</div>
        <div className="text-xs text-gray-400 uppercase">Seg</div>
      </div>
    </div>
  );
};

export default CountdownTimer;