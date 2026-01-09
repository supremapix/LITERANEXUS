import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-800 last:border-0">
      <button 
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`text-lg font-medium transition-colors duration-300 ${isOpen ? 'text-brand-teal' : 'text-gray-200 group-hover:text-brand-teal'}`}>
          {question}
        </span>
        {isOpen ? <ChevronUp className="text-brand-teal" /> : <ChevronDown className="text-gray-500 group-hover:text-brand-teal" />}
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-gray-400 text-sm leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "Como recebo o livro digital (PDF)?",
      answer: "Após a confirmação do pagamento, enviamos o arquivo PDF de alta qualidade imediatamente para o seu e-mail ou WhatsApp cadastrado. O processo é rápido e 100% digital."
    },
    {
      question: "Quais são as formas de pagamento?",
      answer: "Aceitamos pagamentos via MB WAY (para clientes em Portugal), Multicaixa Express (para clientes em Angola) e Transferência Bancária. Todas as transações são seguras."
    },
    {
      question: "Posso ler no celular?",
      answer: "Sim! O formato PDF é compatível com celulares, tablets, computadores e leitores digitais como Kindle. Você pode levar sua leitura para qualquer lugar."
    },
    {
      question: "Existe garantia de satisfação?",
      answer: "Sim. Acreditamos tanto no poder transformador dos nossos livros que oferecemos suporte dedicado para garantir que você tenha a melhor experiência de leitura possível."
    }
  ];

  return (
    // Added id="faq" so the navbar link works, and scroll-mt-24 to handle fixed header overlap
    <section id="faq" className="py-20 bg-brand-darker border-t border-gray-900 scroll-mt-24">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">Perguntas Frequentes</h2>
          <div className="w-16 h-1 bg-brand-teal mx-auto rounded-full" />
        </div>
        
        <div className="bg-brand-dark border border-gray-800 rounded-2xl p-6 md:p-8 shadow-xl shadow-brand-purple/5">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;