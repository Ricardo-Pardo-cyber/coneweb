import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  const handleClick = () => {
    openWhatsApp("Olá! Vim pelo botão do WhatsApp no site da Conexão Web.");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 pointer-events-auto">
      
      {/* QUICK TOOLTIP POPUP */}
      {showTooltip && (
        <div className="relative bg-slate-900 text-white text-xs py-2 px-3.5 rounded-2xl shadow-2xl border border-slate-700 flex items-center gap-2 max-w-[200px] animate-bounce">
          <span className="font-semibold text-emerald-400">Atendimento 100% Online</span>
          <button 
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-white p-0.5"
            aria-label="Fechar dica"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* MAIN FLOATING BUTTON */}
      <button
        onClick={handleClick}
        id="floating-whatsapp-btn"
        className="relative group w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center shadow-2xl shadow-emerald-500/50 hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
        aria-label="Falar no WhatsApp com a Conexão Web"
      >
        {/* Ripple Ping Pulse Animation */}
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60"></span>

        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-white text-emerald-500 relative z-10 group-hover:rotate-12 transition-transform" />
      </button>

    </div>
  );
}
