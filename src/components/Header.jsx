import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Globe, ChevronRight } from 'lucide-react';
import { COMPANY_INFO } from '../config/constants';
import { openWhatsApp } from '../utils/whatsapp';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Soluções', href: '#solucoes' },
    { name: 'Portfólio', href: '#portfolio' },
    { name: 'Como Funciona', href: '#como-funciona' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contato', href: '#contato' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleHeaderWhatsApp = () => {
    openWhatsApp("Olá! Vim pelo site da Conexão Web e gostaria de conversar sobre as soluções digitais para minha empresa.");
  };

  return (
    <header 
      id="header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-xl shadow-slate-950/50' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* LOGO */}
          <a 
            href="#inicio" 
            onClick={(e) => handleNavClick(e, '#inicio')}
            className="flex items-center gap-3 group focus:outline-none"
            id="header-logo-link"
          >
            <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-emerald-500 p-0.5 shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Globe className="w-6 h-6 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <span className="absolute -bottom-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
            </div>
            
            <div className="flex flex-col">
              <span className="font-heading text-xl font-extrabold tracking-tight text-white group-hover:text-blue-400 transition-colors">
                {COMPANY_INFO.name}
              </span>
              <span className="text-[10px] tracking-wider uppercase text-slate-400 font-medium">
                {COMPANY_INFO.slogan}
              </span>
            </div>
          </a>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 shadow-inner">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/80 rounded-full transition-all duration-200"
                id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* RIGHT ACTION BUTTON (WHATSAPP) */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={handleHeaderWhatsApp}
              id="header-whatsapp-btn"
              className="relative group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold text-sm shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-emerald-100 group-hover:rotate-12 transition-transform" />
              <span>Falar no WhatsApp</span>
            </button>
          </div>

          {/* MOBILE MENU TOGGLE BUTTON */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={handleHeaderWhatsApp}
              className="sm:hidden flex items-center justify-center p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
              aria-label="WhatsApp rápido"
              id="header-mobile-wa-quick"
            >
              <MessageCircle className="w-5 h-5" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Abrir menu"
              id="mobile-menu-toggle-btn"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-blue-400" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/98 backdrop-blur-xl border-b border-slate-800 px-4 pt-4 pb-6 mt-3 shadow-2xl transition-all animate-fadeIn">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="flex items-center justify-between px-4 py-3 text-base font-semibold text-slate-200 hover:text-white hover:bg-slate-900 rounded-xl transition-all"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-600" />
              </a>
            ))}

            <div className="pt-4 mt-2 border-t border-slate-800/80">
              <button
                onClick={handleHeaderWhatsApp}
                id="mobile-menu-whatsapp-btn"
                className="w-full flex items-center justify-center gap-3 py-3.5 px-4 rounded-xl bg-emerald-500 text-white font-bold shadow-lg shadow-emerald-500/25 active:scale-95 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Falar no WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
