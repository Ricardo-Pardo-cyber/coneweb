import React, { useState } from 'react';
import { Check, MessageCircle, Music, Volume2, Play, Pause, Sparkles } from 'lucide-react';
import { MUSIC_SERVICES } from '../data/solutions';
import { openWhatsApp } from '../utils/whatsapp';

export default function MusicSection() {
  const [isPlayingDemo, setIsPlayingDemo] = useState(false);

  const handleSelectMusic = (service) => {
    openWhatsApp(service.whatsappMessage);
  };

  return (
    <section id="sec-musicas" className="py-20 lg:py-28 bg-slate-900/60 border-t border-slate-800/80 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 font-mono text-xs font-bold uppercase tracking-wider">
            <Music className="w-3.5 h-3.5" />
            <span>Produção Musical Digital</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            MÚSICAS & JINGLES
          </h2>
          <p className="text-lg text-slate-300">
            "Transforme ideias, histórias e marcas em música."
          </p>
        </div>

        {/* 2 CARDS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {MUSIC_SERVICES.map((service) => (
            <div
              key={service.id}
              className="relative rounded-3xl p-8 bg-slate-950/80 border border-slate-800 hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between shadow-xl"
              id={`music-card-${service.id}`}
            >
              {/* BADGE */}
              <div className="absolute -top-4 right-8 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-extrabold text-[11px] uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
                {service.badge}
              </div>

              <div>
                {/* ICON & TITLE */}
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl p-3 rounded-2xl bg-slate-900 border border-slate-800">{service.icon}</span>
                  <div>
                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
                      {service.title}
                    </h3>
                    <div className="text-2xl font-extrabold text-amber-400 tracking-tight font-heading mt-1">
                      {service.price}
                    </div>
                  </div>
                </div>

                <p className="text-sm text-slate-300 my-6 leading-relaxed bg-slate-900/60 p-4 rounded-2xl border border-slate-800/80">
                  "{service.description}"
                </p>

                {/* IDEAL FOR LIST */}
                <div className="space-y-3 mb-8">
                  <div className="text-xs font-mono uppercase font-bold text-slate-400 tracking-wider">
                    Ideal para:
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {service.idealFor.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                        <div className="w-2 h-2 rounded-full bg-amber-400 shrink-0"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* ACTION BUTTON */}
              <div className="pt-4 border-t border-slate-800/80">
                <button
                  onClick={() => handleSelectMusic(service)}
                  id={`btn-select-music-${service.id}`}
                  className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-extrabold text-base shadow-lg shadow-amber-500/20 flex items-center justify-center gap-3 cursor-pointer transition-all"
                >
                  <MessageCircle className="w-5 h-5 text-slate-950" />
                  <span>{service.id === 'musica-personalizada' ? 'Quero uma música' : 'Quero meu Jingle'}</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* DEMO WAVEFORM SIMULATOR CARD */}
        <div className="max-w-3xl mx-auto bg-slate-950/90 rounded-2xl p-6 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsPlayingDemo(!isPlayingDemo)}
              className="w-12 h-12 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 flex items-center justify-center shadow-lg transition-transform active:scale-90 cursor-pointer"
              title="Ouvir demonstração áudio"
            >
              {isPlayingDemo ? <Pause className="w-6 h-6 fill-slate-950" /> : <Play className="w-6 h-6 fill-slate-950 ml-0.5" />}
            </button>
            <div>
              <div className="text-sm font-bold text-white flex items-center gap-2">
                <span>Amostra de Jingle Comercial Conexão Web</span>
                <Sparkles className="w-4 h-4 text-amber-400" />
              </div>
              <div className="text-xs text-slate-400">
                {isPlayingDemo ? "▶ Reproduzindo demonstração..." : "Clique no play para testar a experiência de áudio"}
              </div>
            </div>
          </div>

          {/* Animated Waveform Lines */}
          <div className="flex items-center gap-1.5 h-8">
            {[40, 75, 30, 90, 60, 100, 45, 80, 50, 95, 35, 70, 85, 40].map((h, i) => (
              <div
                key={i}
                className={`w-1 bg-amber-400 rounded-full transition-all duration-300 ${
                  isPlayingDemo ? 'animate-pulse' : 'opacity-40'
                }`}
                style={{ height: isPlayingDemo ? `${Math.max(20, (h * Math.random()) + 20)}%` : `${h}%` }}
              ></div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
