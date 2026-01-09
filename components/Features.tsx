import React from 'react';
import { Smartphone, Zap, ShieldCheck, Heart } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Smartphone className="w-8 h-8 text-brand-teal" />,
      title: "100% Digital",
      desc: "Acesse seus livros imediatamente no celular, tablet ou computador."
    },
    {
      icon: <Zap className="w-8 h-8 text-brand-gold" />,
      title: "Entrega Imediata",
      desc: "Receba o link de download no seu e-mail ou WhatsApp logo após o pagamento."
    },
    {
      icon: <Heart className="w-8 h-8 text-brand-purple" />,
      title: "Conteúdo Transformador",
      desc: "Livros selecionados para edificação espiritual e crescimento pessoal."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-green-400" />,
      title: "Compra Segura",
      desc: "Pagamentos via MB WAY, Multicaixa Express ou Transferência Bancária."
    }
  ];

  return (
    <section id="benefits" className="py-24 bg-brand-dark relative z-20 -mt-10 rounded-t-[3rem] shadow-[0_-20px_50px_rgba(0,0,0,0.5)] border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-200 uppercase tracking-widest text-sm mb-2">Por que escolher a Literanexus?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="group flex flex-col items-center text-center p-8 bg-brand-darker rounded-2xl border border-white/5 hover:border-brand-teal/30 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-5 rounded-2xl mb-6 shadow-inner group-hover:from-brand-teal/20 group-hover:to-brand-purple/20 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-teal transition-colors">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;