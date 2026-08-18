import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { FAQ_ITEMS } from '../data/faq';
import { openWhatsApp } from '../utils/whatsapp';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const handleFaqWhatsApp = () => {
    openWhatsApp("Olá! Tenho uma dúvida que não encontrei no FAQ do site e gostaria de conversar com a Conexão Web.");
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-slate-900/60 border-t border-slate-800/80 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Tire Suas Dúvidas</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Perguntas Frequentes (FAQ)
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Respostas claras para as dúvidas mais comuns dos nossos clientes.
          </p>
        </div>

        {/* ACCORDION LIST */}
        <div className="space-y-4 mb-12">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-slate-950/90 rounded-2xl border border-slate-800/80 overflow-hidden transition-all duration-200"
                id={`faq-item-${idx}`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-heading font-bold text-base sm:text-lg text-white hover:text-blue-400 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  <div className={`w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center shrink-0 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-blue-600 text-white' : ''}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-sm text-slate-300 leading-relaxed border-t border-slate-900 pt-4 animate-fadeIn">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* EXTRA HELP BANNER */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-950/60 to-slate-950 border border-slate-800 text-center flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h3 className="font-heading text-lg font-bold text-white mb-1">Ainda tem alguma dúvida?</h3>
            <p className="text-xs sm:text-sm text-slate-400">Nossa equipe está pronta para te atender diretamente no WhatsApp.</p>
          </div>
          <button
            onClick={handleFaqWhatsApp}
            className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-sm shadow-lg shadow-emerald-500/20 flex items-center gap-2 shrink-0 cursor-pointer transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Falar com Atendimento</span>
          </button>
        </div>

      </div>
    </section>
  );
}
