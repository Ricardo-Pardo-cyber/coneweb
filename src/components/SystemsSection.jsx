import React from 'react';
import { Check, X, MessageCircle, Database, Shield, Smartphone, HardDrive, Cloud, Eye, ExternalLink } from 'lucide-react';
import { SISTEMAS_CADASTRO, SISTEMAS_COMPARISON } from '../data/solutions';
import { openWhatsApp } from '../utils/whatsapp';

export default function SystemsSection({ onOpenDemo }) {
  const handleSelectSystem = (system) => {
    openWhatsApp(system.whatsappMessage);
  };

  return (
    <section id="sec-sistemas" className="py-20 lg:py-28 bg-slate-900/60 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-mono text-xs font-bold uppercase tracking-wider">
            <Database className="w-3.5 h-3.5" />
            <span>Organização e Cadastros</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            SISTEMAS DE CADASTRO
          </h2>
          <p className="text-lg text-slate-300">
            "Organize as informações da sua empresa em um sistema desenvolvido para sua necessidade."
          </p>
        </div>

        {/* 2 COMPARATIVE CARDS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
          {SISTEMAS_CADASTRO.map((system) => (
            <div
              key={system.id}
              className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 ${
                system.isPopular
                  ? 'bg-gradient-to-b from-indigo-950/90 via-slate-900 to-slate-950 border-2 border-indigo-500/80 shadow-2xl shadow-indigo-500/15'
                  : 'bg-slate-950/80 border border-slate-800 hover:border-slate-700'
              }`}
              id={`system-card-${system.id}`}
            >
              {/* BADGE */}
              {system.badge && (
                <div className="absolute -top-4 right-8 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-extrabold text-[11px] uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
                  {system.badge}
                </div>
              )}

              <div>
                {/* ICON & TITLE */}
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl p-3 rounded-2xl bg-slate-900 border border-slate-800">{system.icon}</span>
                  <div>
                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
                      {system.title}
                    </h3>
                    <div className="text-3xl font-extrabold text-indigo-400 tracking-tight font-heading mt-1">
                      {system.price}
                    </div>
                    <div className="text-xs text-slate-400 mt-1 font-medium">Investimento único de desenvolvimento</div>
                    <div className="text-[11px] text-emerald-400 mt-0.5 font-mono">
                      • Manutenção mensal opcional: R$ 99 a R$ 180/mês
                    </div>
                  </div>
                </div>

                <p className="text-sm text-slate-300 my-6 leading-relaxed bg-slate-900/60 p-4 rounded-2xl border border-slate-800/80">
                  "{system.description}"
                </p>

                {/* FEATURES LIST */}
                <div className="space-y-3 mb-8">
                  <div className="text-xs font-mono uppercase font-bold text-slate-400 tracking-wider">
                    Funcionalidades e Benefícios:
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {system.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                        <div className="mt-0.5 w-4 h-4 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0">
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
                  onClick={() => handleSelectSystem(system)}
                  id={`btn-select-system-${system.id}`}
                  className={`w-full py-4 px-6 rounded-xl font-bold text-base shadow-lg flex items-center justify-center gap-3 cursor-pointer transition-all ${
                    system.isPopular
                      ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-600/30'
                      : 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-600/20'
                  }`}
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Quero esta solução</span>
                </button>

                {system.demoUrl ? (
                  <a
                    href={system.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    id={`btn-live-demo-system-${system.id}`}
                    className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-indigo-600/90 to-blue-600/90 hover:from-indigo-500 hover:to-blue-500 text-white text-xs font-bold border border-indigo-400/40 flex items-center justify-center gap-2 transition-all shadow-lg shadow-indigo-500/20 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>{system.demoLabel || "Ver Modelo Online (Sistema SB)"}</span>
                  </a>
                ) : (
                  <button
                    onClick={() => onOpenDemo && onOpenDemo('sistema', system)}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-semibold border border-slate-800 flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <Eye className="w-4 h-4 text-indigo-400" />
                    <span>Testar Demonstração do Sistema</span>
                  </button>
                )}
              </div>

            </div>
          ))}
        </div>

        {/* COMPARISON TABLE */}
        <div className="max-w-4xl mx-auto bg-slate-950/90 rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl">
          <h3 className="font-heading text-xl font-bold text-white mb-2 text-center">
            Tabela Comparativa de Recursos
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 text-center mb-6">
            Compare rapidamente os recursos entre o Sistema Local e o Sistema em Nuvem.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm text-slate-300">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 uppercase font-mono text-[11px]">
                  <th className="py-3 px-4 font-bold">Recurso / Funcionalidade</th>
                  <th className="py-3 px-4 font-bold text-center">Sem Banco de Dados</th>
                  <th className="py-3 px-4 font-bold text-center text-indigo-400">Com Banco de Dados</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {SISTEMAS_COMPARISON.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-900/40 transition-colors">
                    <td className="py-3.5 px-4 font-medium text-white">{row.feature}</td>
                    <td className="py-3.5 px-4 text-center">
                      {row.local ? (
                        <Check className="w-5 h-5 text-emerald-400 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-slate-600 mx-auto" />
                      )}
                    </td>
                    <td className="py-3.5 px-4 text-center bg-indigo-950/20">
                      {row.cloud ? (
                        <Check className="w-5 h-5 text-indigo-400 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-slate-600 mx-auto" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
