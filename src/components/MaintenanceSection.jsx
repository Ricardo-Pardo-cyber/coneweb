import React from 'react';
import { Wrench, Check, ShieldCheck, HelpCircle, MessageCircle, Sparkles, Clock, AlertCircle } from 'lucide-react';
import { MANUTENCAO_OPCIONAL } from '../data/solutions';
import { openWhatsApp } from '../utils/whatsapp';

export default function MaintenanceSection() {
  const handleSelectPlan = (plan) => {
    openWhatsApp(plan.whatsappMessage);
  };

  return (
    <section id="sec-manutencao" className="py-20 lg:py-28 bg-slate-900/80 border-t border-slate-800/80 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs font-bold uppercase tracking-wider">
            <Wrench className="w-3.5 h-3.5" />
            <span>Suporte & Atualizações</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Manutenção & Suporte Mensal
          </h2>
          <p className="text-lg text-slate-300">
            {MANUTENCAO_OPCIONAL.subtitle}
          </p>
        </div>

        {/* IMPORTANT DISCLAIMER BANNER (OBSERVAÇÃO DE OPCIONAL) */}
        <div className="max-w-4xl mx-auto mb-14 bg-gradient-to-r from-blue-950/80 via-slate-900 to-indigo-950/80 border-2 border-emerald-500/40 rounded-3xl p-5 sm:p-6 shadow-xl flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="bg-emerald-500 text-slate-950 text-xs font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                Importante
              </span>
              <h3 className="text-sm sm:text-base font-bold text-white font-heading">
                A mensalidade de manutenção é 100% OPCIONAL
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Ao criar seu site ou sistema, você paga o <strong>investimento único de desenvolvimento</strong>. Você só contrata a mensalidade de manutenção se quiser que nossa equipe fique responsável pelas alterações mensais, segurança e suporte técnico contínuo. <strong>Sem contrato de fidelidade — cancele quando quiser.</strong>
            </p>
          </div>
        </div>

        {/* 2 MAINTENANCE CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {MANUTENCAO_OPCIONAL.plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 ${
                plan.isPopular
                  ? 'bg-gradient-to-b from-blue-950/90 via-slate-900 to-slate-950 border-2 border-blue-500/80 shadow-2xl shadow-blue-500/15'
                  : 'bg-slate-950/90 border border-slate-800/90 hover:border-slate-700'
              }`}
              id={`maintenance-card-${plan.id}`}
            >
              {/* BADGE */}
              <div className="absolute -top-3.5 right-6 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-extrabold text-[11px] uppercase tracking-widest px-3.5 py-1 rounded-full shadow-md flex items-center gap-1.5">
                <Sparkles className="w-3 h-3" />
                <span>{plan.badge}</span>
              </div>

              <div>
                <div className="mb-4">
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                {/* PRICE */}
                <div className="mb-6 pb-6 border-b border-slate-800/80 flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight font-heading">
                    {plan.price}
                  </span>
                  <span className="text-slate-400 font-mono text-sm font-semibold">
                    {plan.period}
                  </span>
                  <span className="ml-auto text-[11px] bg-slate-800 text-slate-300 px-2.5 py-1 rounded-lg font-mono">
                    Opcional
                  </span>
                </div>

                {/* FEATURES LIST */}
                <div className="space-y-3 mb-8">
                  <div className="text-xs font-mono uppercase font-bold text-slate-400 tracking-wider">
                    O que está incluso:
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
              </div>

              {/* ACTION BUTTON */}
              <div className="pt-4 border-t border-slate-800/80">
                <button
                  onClick={() => handleSelectPlan(plan)}
                  id={`btn-select-maintenance-${plan.id}`}
                  className="w-full py-4 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-sm sm:text-base shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-3 cursor-pointer transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Contratar Manutenção Opcional</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM NOTE */}
        <div className="mt-12 text-center max-w-2xl mx-auto text-xs text-slate-400 font-mono flex items-center justify-center gap-2">
          <Clock className="w-4 h-4 text-blue-400" />
          <span>Precisa de alterações esporádicas sem mensalidade? Fazemos orçamentos avulsos por ajuste.</span>
        </div>

      </div>
    </section>
  );
}
