import React from 'react';
import { Facebook, Instagram, Mail, BookOpen } from 'lucide-react';
import { EMAIL_ADDRESS, INSTAGRAM_HANDLE, WHATSAPP_NUMBER } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-400 py-12 border-t border-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 text-white font-serif text-2xl font-bold mb-4">
              <BookOpen className="text-brand-teal" />
              LITERANEXUS
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Digital Library & Beyond. Transformando vidas através da leitura e crescimento espiritual.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#hero" className="hover:text-brand-teal transition-colors">Início</a></li>
              <li><a href="#benefits" className="hover:text-brand-teal transition-colors">Benefícios</a></li>
              <li><a href="#catalog" className="hover:text-brand-teal transition-colors">Catálogo</a></li>
              <li><a href="#faq" className="hover:text-brand-teal transition-colors">Perguntas Frequentes</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4">Contato</h4>
            <div className="space-y-3 text-sm">
              <a href={`https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}`} className="flex items-center gap-2 hover:text-white transition-colors">
                <span>WhatsApp:</span> {WHATSAPP_NUMBER}
              </a>
              <a href={`mailto:${EMAIL_ADDRESS}`} className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail size={16} /> {EMAIL_ADDRESS}
              </a>
              <div className="flex gap-4 mt-4">
                <a href={`https://instagram.com/${INSTAGRAM_HANDLE.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-full hover:bg-brand-purple transition-colors text-white">
                  <Instagram size={20} />
                </a>
                <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors text-white">
                  <Facebook size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center pt-8 border-t border-gray-900 text-xs text-gray-600 flex flex-col items-center gap-2">
          <p>&copy; 2026 Literanexus. Todos os direitos reservados.</p>
          <p className="flex items-center justify-center gap-1">
            Desenvolvido <span className="text-red-500 animate-pulse text-base">❤️</span> por 
            <a 
              href="https://supremasite.com.br" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-bold hover:text-brand-teal transition-colors ml-0.5"
            >
              Suprema Sites Express
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;