import React from 'react';
import { Rocket, Smartphone, ShieldCheck, Zap, Target, Users } from 'lucide-react';

export default function DifferentialsSection() {
  const differentials = [
    {
      icon: Rocket,
      title: "Soluções personalizadas",
      description: "Cada projeto é desenvolvido de acordo com a necessidade da empresa.",
      color: "text-blue-400 bg-blue-500/10 border-blue-500/20"
    },
    {
      icon: Smartphone,
      title: "Responsivo",
      description: "Seu projeto funciona em celulares, tablets e computadores.",
      color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
    },
    {
      icon: ShieldCheck,
      title: "Segurança",
      description: "Projetos preparados para utilização segura na internet.",
      color: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Sites rápidos e otimizados.",
      color: "text-amber-400 bg-amber-500/10 border-amber-500/20"
    },
    {
      icon: Target,
      title: "Foco no negócio",
      description: "A tecnologia deve resolver problemas reais da empresa.",
      color: "text-purple-400 bg-purple-500/10 border-purple-500/20"
    },
    {
      icon: Users,
      title: "Atendimento",
      description: "Comunicação direta durante o desenvolvimento.",
      color: "text-teal-400 bg-teal-500/10 border-teal-500/20"
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-slate-950 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-emerald-400 font-mono bg-emerald-500/10 px-4 py-1.5 rounded-full border border-emerald-500/20">
            Diferenciais Conexão Web
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Por que escolher a Conexão Web?
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Trabalhamos com compromisso, qualidade técnica e foco total no retorno para o seu negócio.
          </p>
        </div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {differentials.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-slate-900/60 rounded-3xl p-6 sm:p-8 border border-slate-800 hover:border-slate-700 transition-all duration-300 hover:-translate-y-1 shadow-lg"
                id={`diff-card-${idx}`}
              >
                <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center ${item.color} mb-6 shadow-inner`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="font-heading text-xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
