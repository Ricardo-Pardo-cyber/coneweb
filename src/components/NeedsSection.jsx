import React from 'react';
import { ArrowRight, Layout, Database, BarChart3, Music } from 'lucide-react';

export default function NeedsSection() {
  const needsCards = [
    {
      id: "sec-landing",
      targetId: "#sec-landing-pages",
      icon: "🌐",
      LucideIcon: Layout,
      tag: "DIVULGAR MINHA EMPRESA",
      title: "Landing Pages",
      description: "Tenha uma presença profissional na internet e receba clientes diretamente pelo WhatsApp.",
      buttonText: "Ver Landing Pages",
      colorGradient: "from-blue-500/20 to-indigo-500/10",
      borderColor: "hover:border-blue-500/50",
      btnColor: "bg-blue-600 hover:bg-blue-500",
    },
    {
      id: "sec-sistemas",
      targetId: "#sec-sistemas",
      icon: "💻",
      LucideIcon: Database,
      tag: "ORGANIZAR MEUS CADASTROS",
      title: "Sistemas de Cadastro",
      description: "Cadastre, pesquise, edite e gerencie as informações da sua empresa.",
      buttonText: "Ver Sistemas",
      colorGradient: "from-indigo-500/20 to-purple-500/10",
      borderColor: "hover:border-indigo-500/50",
      btnColor: "bg-indigo-600 hover:bg-indigo-500",
    },
    {
      id: "sec-dashboards",
      targetId: "#sec-dashboards",
      icon: "📊",
      LucideIcon: BarChart3,
      tag: "CONTROLAR MEUS NÚMEROS",
      title: "Dashboards",
      description: "Transforme seus dados em indicadores e gráficos para tomar decisões melhores.",
      buttonText: "Ver Dashboards",
      colorGradient: "from-emerald-500/20 to-teal-500/10",
      borderColor: "hover:border-emerald-500/50",
      btnColor: "bg-emerald-600 hover:bg-emerald-500",
    },
    {
      id: "sec-musicas",
      targetId: "#sec-musicas",
      icon: "🎵",
      LucideIcon: Music,
      tag: "DIVULGAR MINHA MARCA",
      title: "Músicas & Jingles",
      description: "Crie uma música exclusiva para sua empresa, produto ou campanha.",
      buttonText: "Ver Músicas",
      colorGradient: "from-amber-500/20 to-orange-500/10",
      borderColor: "hover:border-amber-500/50",
      btnColor: "bg-amber-600 hover:bg-amber-500",
    },
  ];

  const handleCardClick = (targetId) => {
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="solucoes" className="py-20 lg:py-28 bg-slate-900/60 border-y border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-blue-400 font-mono bg-blue-500/10 px-4 py-1.5 rounded-full border border-blue-500/20">
            Nossas Soluções
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            O que sua empresa precisa?
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Escolha uma solução e descubra como podemos ajudar seu negócio.
          </p>
        </div>

        {/* 4 CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {needsCards.map((card) => {
            const Icon = card.LucideIcon;
            return (
              <div
                key={card.id}
                onClick={() => handleCardClick(card.targetId)}
                className={`group relative rounded-3xl p-6 bg-gradient-to-b ${card.colorGradient} bg-slate-950/80 border border-slate-800/80 ${card.borderColor} transition-all duration-300 hover:-translate-y-2 cursor-pointer flex flex-col justify-between shadow-lg hover:shadow-2xl`}
                id={`needs-card-${card.id}`}
              >
                <div>
                  {/* CARD HEADER ICON & BADGE */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-2xl shadow-inner group-hover:scale-110 transition-transform">
                      {card.icon}
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider font-extrabold text-slate-400 bg-slate-900/90 px-3 py-1 rounded-full border border-slate-800">
                      {card.tag}
                    </span>
                  </div>

                  {/* TITLE & DESCRIPTION */}
                  <h3 className="font-heading text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-8">
                    "{card.description}"
                  </p>
                </div>

                {/* BUTTON */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCardClick(card.targetId);
                  }}
                  id={`needs-btn-${card.id}`}
                  className={`w-full py-3 px-4 rounded-xl ${card.btnColor} text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 group-hover:gap-3 transition-all cursor-pointer`}
                >
                  <span>{card.buttonText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
