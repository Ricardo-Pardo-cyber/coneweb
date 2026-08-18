import React from 'react';
import { MessageSquare, Target, Code, Eye, Rocket } from 'lucide-react';

export default function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Você explica sua necessidade.",
      description: "Conversamos pelo WhatsApp ou formulário para entender exatamente o objetivo da sua empresa.",
      icon: MessageSquare,
      color: "text-blue-400 bg-blue-500/10 border-blue-500/30"
    },
    {
      number: "02",
      title: "Definimos a melhor solução.",
      description: "Apresentamos a opção ideal (Landing Page, Sistema, Dashboard ou Música) e combinamos o investimento.",
      icon: Target,
      color: "text-indigo-400 bg-indigo-500/10 border-indigo-500/30"
    },
    {
      number: "03",
      title: "Desenvolvemos seu projeto.",
      description: "Nossa equipe cria a estrutura, design, funcionalidades e integrações com total atenção aos detalhes.",
      icon: Code,
      color: "text-purple-400 bg-purple-500/10 border-purple-500/30"
    },
    {
      number: "04",
      title: "Você acompanha a evolução.",
      description: "Enviamos links de prévia para você testar no celular e solicitar os ajustes finais necessários.",
      icon: Eye,
      color: "text-teal-400 bg-teal-500/10 border-teal-500/30"
    },
    {
      number: "05",
      title: "Entregamos sua solução digital.",
      description: "Publicamos seu projeto pronto para receber clientes e impulsionar os resultados do seu negócio.",
      icon: Rocket,
      color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30"
    }
  ];

  return (
    <section id="como-funciona" className="py-20 lg:py-28 bg-slate-900/60 border-t border-slate-800/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-blue-400 font-mono bg-blue-500/10 px-4 py-1.5 rounded-full border border-blue-500/20">
            Processo Simples e Transparente
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Como funciona?
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Do primeiro contato até a entrega final, garantimos agilidade, clareza e acompanhamento contínuo.
          </p>
        </div>

        {/* STEPS PROCESS CONTAINER */}
        <div className="relative">
          
          {/* HORIZONTAL CONNECTING LINE FOR DESKTOP */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-500 -translate-y-8 z-0"></div>

          {/* 5 STEPS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div 
                  key={idx}
                  className="relative group bg-slate-950/90 rounded-3xl p-6 border border-slate-800 hover:border-slate-700 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between"
                  id={`how-step-${step.number}`}
                >
                  <div>
                    {/* NUMBER & ICON */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-heading text-3xl font-extrabold text-slate-600 group-hover:text-white transition-colors font-mono">
                        {step.number}
                      </span>
                      <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center ${step.color} shadow-lg`}>
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>

                    {/* TITLE */}
                    <h3 className="font-heading text-base sm:text-lg font-bold text-white mb-3">
                      {step.title}
                    </h3>

                    {/* DESCRIPTION */}
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800/80 text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                    Etapa {idx + 1} de 5
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
