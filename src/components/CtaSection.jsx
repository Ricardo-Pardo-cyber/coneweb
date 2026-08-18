import React from 'react';
import { MessageCircle, ArrowRight, Globe } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';

export default function CtaSection() {
  const handleCtaClick = () => {
    openWhatsApp("Olá! Quero digitalizar minha empresa! Gostaria de conversar com a equipe da Conexão Web.");
  };

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-600/15 rounded-full blur-[180px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-3xl p-8 sm:p-14 bg-gradient-to-tr from-blue-950/80 via-slate-900 to-indigo-950/80 border-2 border-blue-500/40 shadow-2xl text-center space-y-8 backdrop-blur-xl">
          
          <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center mx-auto text-blue-400">
            <Globe className="w-8 h-8" />
          </div>

          <div className="space-y-4 max-w-2xl mx-auto">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Vamos digitalizar sua empresa?
            </h2>
            <p className="text-base sm:text-xl text-slate-300 leading-relaxed">
              "Conte o que sua empresa precisa e descubra qual solução da Conexão Web é ideal para você."
            </p>
          </div>

          <div>
            <button
              onClick={handleCtaClick}
              id="cta-final-whatsapp-btn"
              className="inline-flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-white font-extrabold text-base sm:text-lg shadow-xl shadow-emerald-500/30 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <MessageCircle className="w-6 h-6" />
              <span>FALAR COM A CONEXÃO WEB NO WHATSAPP</span>
            </button>
          </div>

          <div className="pt-4 text-xs font-mono text-slate-400">
            Atendimento Rápido • Proposta Sem Compromisso
          </div>

        </div>
      </div>
    </section>
  );
}
