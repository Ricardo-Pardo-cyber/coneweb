import React from 'react';
import { Check, Star, MessageCircle, Sparkles, Eye, ExternalLink } from 'lucide-react';
import { LANDING_PAGES_PLANS } from '../data/solutions';
import { openWhatsApp } from '../utils/whatsapp';

export default function LandingPagesSection({ onOpenDemo }) {
  const handleSelectPlan = (plan) => {
    openWhatsApp(plan.whatsappMessage);
  };

  return (
    <section id="sec-landing-pages" className="py-20 lg:py-28 bg-slate-950 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Presença Digital</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            LANDING PAGES
          </h2>
          <p className="text-lg text-slate-300">
            "Coloque sua empresa na internet com uma página profissional."
          </p>
        </div>

        {/* 4 PLANS CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-stretch">
          {LANDING_PAGES_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 ${
                plan.isPopular
                  ? 'bg-gradient-to-b from-blue-950/80 via-slate-900 to-slate-950 border-2 border-blue-500/80 shadow-2xl shadow-blue-500/15 scale-[1.02] z-20'
                  : 'bg-slate-900/60 border border-slate-800/80 hover:border-slate-700'
              }`}
              id={`plan-card-${plan.id}`}
            >
              {/* BADGE MAIS VENDIDA */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-extrabold text-[11px] uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                  <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
                  <span>{plan.badge}</span>
                </div>
              )}

              <div>
                {/* ICON & TITLE */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl p-2 rounded-2xl bg-slate-950 border border-slate-800/80">{plan.icon}</span>
                  <h3 className="font-heading text-xl font-bold text-white">
                    {plan.title}
                  </h3>
                </div>

                {/* PRICE */}
                <div className="mb-6 pb-6 border-b border-slate-800/80">
                  <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
                    {plan.price}
                  </div>
                  <div className="text-xs text-slate-400 mt-1 font-medium">Investimento único de desenvolvimento</div>
                  <div className="text-[11px] text-emerald-400 mt-1.5 font-mono flex items-center gap-1">
                    <span>• Manutenção mensal opcional: R$ 99/mês</span>
                  </div>
                </div>

                {/* DESCRIPTION */}
                <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                  "{plan.description}"
                </p>

                {/* FEATURES LIST */}
                <div className="space-y-3 mb-8">
                  <div className="text-xs font-mono uppercase font-bold text-slate-400 tracking-wider">
                    Recursos Inclusos:
                  </div>
                  <ul className="space-y-2.5">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <div className="mt-0.5 w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* IDEAL FOR */}
                <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800/80 mb-8">
                  <div className="text-[11px] font-semibold text-blue-400 uppercase tracking-wider mb-1">
                    Ideal para:
                  </div>
                  <div className="text-xs text-slate-300 leading-snug">
                    "{plan.idealFor}"
                  </div>
                </div>
              </div>

              {/* ACTION BUTTONS */}
              <div className="space-y-2.5">
                <button
                  onClick={() => handleSelectPlan(plan)}
                  id={`btn-select-lp-${plan.id}`}
                  className={`w-full py-3.5 px-4 rounded-xl font-bold text-sm shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-all ${
                    plan.isPopular
                      ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-blue-600/30'
                      : 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-600/20'
                  }`}
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Quero esta solução</span>
                </button>

                {/* PREVIEW DEMO BUTTON / LIVE DEMO LINK */}
                {plan.demoUrl ? (
                  <a
                    href={plan.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    id={`btn-live-demo-${plan.id}`}
                    className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-blue-600/90 to-cyan-600/90 hover:from-blue-500 hover:to-cyan-500 text-white text-xs font-bold border border-cyan-400/40 flex items-center justify-center gap-1.5 transition-all shadow-lg shadow-cyan-500/20 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>{plan.demoLabel || "Ver Modelo Online"}</span>
                  </a>
                ) : (
                  <button
                    onClick={() => onOpenDemo && onOpenDemo('landing-page', plan)}
                    className="w-full py-2 px-3 rounded-lg bg-slate-950 hover:bg-slate-800 text-slate-400 hover:text-white text-xs font-medium border border-slate-800 flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Ver Exemplo Interativo</span>
                  </button>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
