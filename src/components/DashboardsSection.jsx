import React from 'react';
import { Check, MessageCircle, BarChart3, TrendingUp, PieChart, FileSpreadsheet, Eye, ExternalLink } from 'lucide-react';
import { DASHBOARDS } from '../data/solutions';
import { openWhatsApp } from '../utils/whatsapp';

export default function DashboardsSection({ onOpenDemo }) {
  const handleSelectDashboard = (dash) => {
    openWhatsApp(dash.whatsappMessage);
  };

  return (
    <section id="sec-dashboards" className="py-20 lg:py-28 bg-slate-950 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs font-bold uppercase tracking-wider">
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Métricas e Decisão</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            DASHBOARDS
          </h2>
          <p className="text-lg text-slate-300">
            "Transforme dados em informações para tomar decisões melhores."
          </p>
        </div>

        {/* 2 CARDS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {DASHBOARDS.map((dash) => (
            <div
              key={dash.id}
              className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 ${
                dash.isPopular
                  ? 'bg-gradient-to-b from-emerald-950/90 via-slate-900 to-slate-950 border-2 border-emerald-500/80 shadow-2xl shadow-emerald-500/15'
                  : 'bg-slate-900/60 border border-slate-800 hover:border-slate-700'
              }`}
              id={`dash-card-${dash.id}`}
            >
              {/* BADGE */}
              {dash.badge && (
                <div className="absolute -top-4 right-8 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-extrabold text-[11px] uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
                  {dash.badge}
                </div>
              )}

              <div>
                {/* ICON & TITLE */}
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl p-3 rounded-2xl bg-slate-950 border border-slate-800/80">{dash.icon}</span>
                  <div>
                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
                      {dash.title}
                    </h3>
                    <div className="text-3xl font-extrabold text-emerald-400 tracking-tight font-heading mt-1">
                      {dash.price}
                    </div>
                    <div className="text-xs text-slate-400 mt-1 font-medium">Investimento único de desenvolvimento</div>
                    <div className="text-[11px] text-emerald-400 mt-0.5 font-mono">
                      • Manutenção mensal opcional: R$ 99 a R$ 180/mês
                    </div>
                  </div>
                </div>

                <p className="text-sm text-slate-300 my-6 leading-relaxed bg-slate-950/80 p-4 rounded-2xl border border-slate-800">
                  "{dash.description}"
                </p>

                {/* FEATURES LIST */}
                <div className="space-y-3 mb-8">
                  <div className="text-xs font-mono uppercase font-bold text-slate-400 tracking-wider">
                    Recursos Inclusos:
                  </div>
                  <ul className="space-y-2.5">
                    {dash.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <div className="mt-0.5 w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* ACTION BUTTONS */}
              <div className="space-y-3 pt-4 border-t border-slate-800/80">
                <button
                  onClick={() => handleSelectDashboard(dash)}
                  id={`btn-select-dash-${dash.id}`}
                  className="w-full py-4 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base shadow-lg shadow-emerald-600/25 flex items-center justify-center gap-3 cursor-pointer transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Quero esta solução</span>
                </button>

                {dash.demoUrl ? (
                  <a
                    href={dash.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    id={`btn-live-demo-dash-${dash.id}`}
                    className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600/90 to-teal-600/90 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold border border-emerald-400/40 flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-500/20 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>{dash.demoLabel || "Ver Modelo Online (DashWeb)"}</span>
                  </a>
                ) : (
                  <button
                    onClick={() => onOpenDemo && onOpenDemo('dashboard', dash)}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-300 text-xs font-semibold border border-slate-800 flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <Eye className="w-4 h-4 text-emerald-400" />
                    <span>Visualizar Dashboard Interativo</span>
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
