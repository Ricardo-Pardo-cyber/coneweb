import React, { useState } from 'react';
import { Send, MessageCircle, Sparkles, Building, User, Phone, FileText } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';

export default function BudgetFormSection() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    whatsapp: '',
    service: 'Landing Page Personalizada',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.company) {
      alert("Por favor, preencha pelo menos seu nome e o nome da empresa.");
      return;
    }

    const compiledMessage = `Olá! Meu nome é ${formData.name}, sou da empresa ${formData.company} e gostaria de solicitar um orçamento para ${formData.service}.\n\nMensagem:\n${formData.message || 'Gostaria de saber mais informações e valores.'}`;

    openWhatsApp(compiledMessage);
  };

  return (
    <section id="contato" className="py-20 lg:py-28 bg-slate-950 border-t border-slate-800/80 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Orçamento Sob Medida</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Não encontrou exatamente o que procura?
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Preencha os dados abaixo e monte seu projeto personalizado em instantes no WhatsApp.
          </p>
        </div>

        {/* FORM CARD */}
        <div className="bg-slate-900/80 rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl backdrop-blur-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* NOME */}
              <div className="space-y-2">
                <label className="text-xs font-mono font-bold uppercase text-slate-300 flex items-center gap-2">
                  <User className="w-4 h-4 text-blue-400" />
                  <span>Seu Nome *</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Ex: João Silva"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-blue-500 focus:outline-none transition-colors"
                  id="budget-input-name"
                />
              </div>

              {/* EMPRESA */}
              <div className="space-y-2">
                <label className="text-xs font-mono font-bold uppercase text-slate-300 flex items-center gap-2">
                  <Building className="w-4 h-4 text-blue-400" />
                  <span>Nome da Sua Empresa *</span>
                </label>
                <input
                  type="text"
                  name="company"
                  required
                  placeholder="Ex: Mercado e Cia"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-blue-500 focus:outline-none transition-colors"
                  id="budget-input-company"
                />
              </div>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* WHATSAPP */}
              <div className="space-y-2">
                <label className="text-xs font-mono font-bold uppercase text-slate-300 flex items-center gap-2">
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>Seu WhatsApp</span>
                </label>
                <input
                  type="text"
                  name="whatsapp"
                  placeholder="Ex: (11) 99999-8888"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-blue-500 focus:outline-none transition-colors"
                  id="budget-input-whatsapp"
                />
              </div>

              {/* SERVIÇO DESEJADO */}
              <div className="space-y-2">
                <label className="text-xs font-mono font-bold uppercase text-slate-300 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-indigo-400" />
                  <span>Serviço Desejado</span>
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-blue-500 focus:outline-none transition-colors"
                  id="budget-select-service"
                >
                  <option value="Landing Page Personalizada">🌐 Landing Page Personalizada</option>
                  <option value="Sistema de Cadastro Web">💻 Sistema de Cadastro Web</option>
                  <option value="Dashboard de Indicadores">📊 Dashboard de Indicadores</option>
                  <option value="Manutenção & Suporte Mensal (Opcional - R$ 99/mês)">🔧 Manutenção & Suporte Mensal (Opcional - R$ 99/mês)</option>
                  <option value="Música / Jingle Comercial">🎵 Música / Jingle Comercial</option>
                  <option value="Projeto Especial Personalizado">🚀 Projeto Especial Personalizado</option>
                </select>
              </div>

            </div>

            {/* MENSAGEM */}
            <div className="space-y-2">
              <label className="text-xs font-mono font-bold uppercase text-slate-300">
                Sua Mensagem / Detalhes do Projeto
              </label>
              <textarea
                name="message"
                rows="4"
                placeholder="Descreva brevemente o que você precisa ou como podemos ajudar sua empresa..."
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-blue-500 focus:outline-none transition-colors resize-none"
                id="budget-textarea-message"
              ></textarea>
            </div>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              id="budget-submit-btn"
              className="w-full py-4 px-8 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-extrabold text-base shadow-xl shadow-emerald-500/25 flex items-center justify-center gap-3 cursor-pointer transition-all hover:scale-[1.01] active:scale-[0.99]"
            >
              <MessageCircle className="w-5 h-5 text-white" />
              <span>Enviar Solicitação pelo WhatsApp</span>
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}
