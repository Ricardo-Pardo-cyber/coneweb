import React from 'react';
import { MessageCircle, ArrowRight, Globe, Layout, Database, BarChart3, Music, CheckCircle2, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../config/constants';
import { openWhatsApp } from '../utils/whatsapp';

export default function Hero() {
  const handleHeroWhatsApp = () => {
    openWhatsApp("Olá! Vim pelo site da Conexão Web e gostaria de solicitar uma apresentação das soluções digitais para minha empresa.");
  };

  const handleScrollToSolutions = (e) => {
    e.preventDefault();
    const el = document.querySelector('#solucoes');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-slate-950">
      {/* Background Decorative Tech Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: TEXT CONTENT */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-8">
            
            {/* BADGE */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/90 border border-slate-800 shadow-sm text-xs sm:text-sm font-semibold text-blue-400 backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="uppercase tracking-wider font-mono text-[11px] sm:text-xs text-slate-300">
                {COMPANY_INFO.name} — {COMPANY_INFO.slogan}
              </span>
            </div>

            {/* MAIN HEADLINE */}
            <div className="space-y-4">
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
                Sua empresa mais <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-emerald-400 bg-clip-text text-transparent">
                  profissional, organizada e conectada.
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {COMPANY_INFO.positioning}
              </p>
            </div>

            {/* BENEFIT PILLS */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs sm:text-sm text-slate-400 pt-2">
              <div className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>100% Responsivo</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-blue-400" />
                <span>Sem Mensalidades Ocultas</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800">
                <ShieldCheck className="w-4 h-4 text-indigo-400" />
                <span>Entrega Garantida</span>
              </div>
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#solucoes"
                onClick={handleScrollToSolutions}
                id="hero-ver-solucoes-btn"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-base shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
              >
                <span>Ver Soluções</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <button
                onClick={handleHeroWhatsApp}
                id="hero-whatsapp-btn"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-base shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Falar no WhatsApp</span>
              </button>
            </div>

          </div>

          {/* RIGHT COLUMN: MODERN VISUAL COMPOSITION (TECH MOCKUPS & CARDS) */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* CENTRAL MAIN TECH CARD */}
              <div className="relative bg-gradient-to-br from-slate-900/90 via-slate-900/80 to-slate-950 p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-2xl backdrop-blur-xl">
                
                {/* Header bar fake window */}
                <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  </div>
                  <span className="text-xs font-mono text-slate-400 bg-slate-950 px-3 py-1 rounded-full border border-slate-800/80">
                    conexaoweb.app
                  </span>
                </div>

                {/* VISUAL CARDS GRID */}
                <div className="grid grid-cols-2 gap-4">
                  
                  {/* Card 1: Landing Page */}
                  <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-blue-500/40 transition-colors group">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-3 group-hover:scale-110 transition-transform">
                      <Layout className="w-5 h-5" />
                    </div>
                    <h3 className="text-xs sm:text-sm font-bold text-white mb-1">Landing Pages</h3>
                    <p className="text-[11px] text-slate-400 leading-tight">Sites focados em vendas no WhatsApp</p>
                  </div>

                  {/* Card 2: Sistemas */}
                  <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-indigo-500/40 transition-colors group">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-3 group-hover:scale-110 transition-transform">
                      <Database className="w-5 h-5" />
                    </div>
                    <h3 className="text-xs sm:text-sm font-bold text-white mb-1">Sistemas</h3>
                    <p className="text-[11px] text-slate-400 leading-tight">Cadastros e gestão simplificada</p>
                  </div>

                  {/* Card 3: Dashboards */}
                  <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-emerald-500/40 transition-colors group">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-3 group-hover:scale-110 transition-transform">
                      <BarChart3 className="w-5 h-5" />
                    </div>
                    <h3 className="text-xs sm:text-sm font-bold text-white mb-1">Dashboards</h3>
                    <p className="text-[11px] text-slate-400 leading-tight">Gráficos e métricas de decisão</p>
                  </div>

                  {/* Card 4: Jingles */}
                  <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-amber-500/40 transition-colors group">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 mb-3 group-hover:scale-110 transition-transform">
                      <Music className="w-5 h-5" />
                    </div>
                    <h3 className="text-xs sm:text-sm font-bold text-white mb-1">Músicas/Jingles</h3>
                    <p className="text-[11px] text-slate-400 leading-tight">Áudio exclusivo e vinhetas com IA</p>
                  </div>

                </div>

                {/* FLOATING BADGE 1: REALTIME STATUS */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-emerald-400" />
                    <span>Conexão direta ao WhatsApp</span>
                  </span>
                  <span className="text-emerald-400 font-semibold font-mono">100% Online</span>
                </div>

              </div>

              {/* FLOATING BADGE OUTSIDE CARD */}
              <div className="absolute -bottom-6 -left-6 bg-slate-900 border border-slate-800 p-3.5 rounded-2xl shadow-xl flex items-center gap-3 backdrop-blur-md hidden sm:flex">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-lg">
                  ⚡
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Alta Performance</div>
                  <div className="text-[10px] text-slate-400">Páginas ultra-rápidas</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
