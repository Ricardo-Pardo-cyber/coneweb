import React from 'react';
import { Globe, MessageCircle, Instagram, Facebook, Youtube, Video } from 'lucide-react';
import { COMPANY_INFO, SOCIAL_LINKS } from '../config/constants';
import { openWhatsApp } from '../utils/whatsapp';

export default function Footer() {
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFooterWhatsApp = () => {
    openWhatsApp("Olá! Vim pelo rodapé do site da Conexão Web.");
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800/80 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* BRAND COLUMN */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-emerald-500 p-0.5 shadow-md">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <Globe className="w-5 h-5 text-blue-400" />
                </div>
              </div>
              <span className="font-heading text-xl font-extrabold text-white">
                {COMPANY_INFO.name}
              </span>
            </div>
            
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              {COMPANY_INFO.positioning}
            </p>

            <div className="text-xs text-slate-500 space-y-1 pt-2 font-mono">
              <div>📍 {COMPANY_INFO.location}</div>
              <div>🕒 {COMPANY_INFO.hours}</div>
              <div className="text-emerald-400 font-semibold">📱 WhatsApp: {COMPANY_INFO.phone}</div>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="space-y-4">
            <h3 className="font-heading text-sm font-bold text-white uppercase tracking-wider font-mono">
              Navegação
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#inicio" onClick={(e) => handleNavClick(e, '#inicio')} className="hover:text-blue-400 transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#solucoes" onClick={(e) => handleNavClick(e, '#solucoes')} className="hover:text-blue-400 transition-colors">
                  Soluções
                </a>
              </li>
              <li>
                <a href="#portfolio" onClick={(e) => handleNavClick(e, '#portfolio')} className="hover:text-blue-400 transition-colors">
                  Portfólio
                </a>
              </li>
              <li>
                <a href="#como-funciona" onClick={(e) => handleNavClick(e, '#como-funciona')} className="hover:text-blue-400 transition-colors">
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="#faq" onClick={(e) => handleNavClick(e, '#faq')} className="hover:text-blue-400 transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contato" onClick={(e) => handleNavClick(e, '#contato')} className="hover:text-blue-400 transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* SOLUÇÕES */}
          <div className="space-y-4">
            <h3 className="font-heading text-sm font-bold text-white uppercase tracking-wider font-mono">
              Serviços
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li><a href="#sec-landing-pages" onClick={(e) => handleNavClick(e, '#sec-landing-pages')} className="hover:text-blue-400 transition-colors">Landing Pages Express</a></li>
              <li><a href="#sec-landing-pages" onClick={(e) => handleNavClick(e, '#sec-landing-pages')} className="hover:text-blue-400 transition-colors">Landing Pages Premium</a></li>
              <li><a href="#sec-sistemas" onClick={(e) => handleNavClick(e, '#sec-sistemas')} className="hover:text-blue-400 transition-colors">Sistemas de Cadastro</a></li>
              <li><a href="#sec-dashboards" onClick={(e) => handleNavClick(e, '#sec-dashboards')} className="hover:text-blue-400 transition-colors">Dashboards de Indicadores</a></li>
              <li><a href="#sec-manutencao" onClick={(e) => handleNavClick(e, '#sec-manutencao')} className="hover:text-blue-400 transition-colors text-emerald-400 font-medium">Manutenção & Suporte (Opcional)</a></li>
              <li><a href="#sec-musicas" onClick={(e) => handleNavClick(e, '#sec-musicas')} className="hover:text-blue-400 transition-colors">Músicas & Jingles</a></li>
            </ul>
          </div>

          {/* SOCIAL MEDIA */}
          <div className="space-y-4">
            <h3 className="font-heading text-sm font-bold text-white uppercase tracking-wider font-mono">
              Redes Sociais
            </h3>
            <div className="flex flex-col gap-2.5 text-xs sm:text-sm">
              <button 
                onClick={handleFooterWhatsApp}
                className="flex items-center gap-2.5 text-slate-300 hover:text-emerald-400 transition-colors cursor-pointer text-left"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp</span>
              </button>

              <a 
                href={SOCIAL_LINKS.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-slate-300 hover:text-pink-400 transition-colors"
              >
                <Instagram className="w-4 h-4 text-pink-400" />
                <span>Instagram</span>
              </a>

              <a 
                href={SOCIAL_LINKS.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-slate-300 hover:text-blue-400 transition-colors"
              >
                <Facebook className="w-4 h-4 text-blue-400" />
                <span>Facebook</span>
              </a>

              <a 
                href={SOCIAL_LINKS.tiktok} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-slate-300 hover:text-purple-400 transition-colors"
              >
                <Video className="w-4 h-4 text-purple-400" />
                <span>TikTok</span>
              </a>

              <a 
                href={SOCIAL_LINKS.youtube} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-slate-300 hover:text-red-400 transition-colors"
              >
                <Youtube className="w-4 h-4 text-red-400" />
                <span>YouTube</span>
              </a>
            </div>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div>
            © 2026 Conexão Web. Todos os direitos reservados.
          </div>
          <div>
            Soluções Digitais para Empresas
          </div>
        </div>

      </div>
    </footer>
  );
}
