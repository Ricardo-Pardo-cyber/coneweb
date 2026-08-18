import React, { useState } from 'react';
import { X, MessageCircle, Play, Plus, Search, Trash2, CheckCircle2, BarChart2, ExternalLink } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';

export default function InteractiveDemoModal({ demoType, planData, onClose }) {
  if (!demoType) return null;

  // Mock State for System Demo
  const [records, setRecords] = useState([
    { id: 1, name: "Maria Silva", phone: "(11) 98888-7777", category: "Cliente Premium" },
    { id: 2, name: "Empresa Alfa Ltda", phone: "(11) 97777-6666", category: "Fornecedor" },
    { id: 3, name: "Carlos Oliveira", phone: "(21) 99999-1234", category: "Cliente Regular" },
  ]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  // Mock State for Dashboard Demo
  const [filterPeriod, setFilterPeriod] = useState("mes");

  const handleAddRecord = (e) => {
    e.preventDefault();
    if (!newName) return;
    setRecords([
      ...records,
      { id: Date.now(), name: newName, phone: newPhone || "(11) 90000-0000", category: "Novo Cadastro" }
    ]);
    setNewName("");
    newPhone && setNewPhone("");
  };

  const handleDeleteRecord = (id) => {
    setRecords(records.filter(r => r.id !== id));
  };

  const filteredRecords = records.filter(r => 
    r.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    r.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleWhatsAppContact = () => {
    const title = planData?.title || demoType;
    openWhatsApp(`Olá! Testei a demonstração interativa de "${title}" no site da Conexão Web e quero solicitar um orçamento.`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* HEADER */}
        <div className="p-6 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{planData?.icon || '⚡'}</span>
            <div>
              <div className="text-xs font-mono uppercase text-blue-400 font-bold">Demonstração Interativa</div>
              <h3 className="text-lg font-bold text-white">{planData?.title || 'Preview do Sistema'}</h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* DEMO CONTENT AREA */}
        <div className="p-6 overflow-y-auto space-y-6">

          {/* 1. DEMO SISTEMA DE CADASTRO */}
          {demoType === 'sistema' && (
            <div className="space-y-6">
              <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 text-xs text-slate-300">
                💡 <strong>Ambiente de Teste:</strong> Experimente adicionar um novo cadastro ou pesquisar abaixo. Em nossos sistemas reais, tudo é super rápido e responsivo.
              </div>

              {/* Form Input */}
              <form onSubmit={handleAddRecord} className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <input 
                  type="text" 
                  placeholder="Nome do Cliente / Empresa"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  className="px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:border-blue-500 focus:outline-none"
                  required
                />
                <input 
                  type="text" 
                  placeholder="Telefone / WhatsApp"
                  value={newPhone}
                  onChange={(e) => setNewPhone(e.target.value)}
                  className="px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:border-blue-500 focus:outline-none"
                />
                <button 
                  type="submit"
                  className="py-2.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>Cadastrar Registro</span>
                </button>
              </form>

              {/* Search Bar */}
              <div className="relative">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                <input 
                  type="text"
                  placeholder="Pesquisar nos registros..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:border-blue-500 focus:outline-none"
                />
              </div>

              {/* Records List */}
              <div className="bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden">
                <div className="p-3 bg-slate-900 border-b border-slate-800 text-[11px] font-mono text-slate-400 uppercase font-bold flex justify-between">
                  <span>Cadastros Ativos ({filteredRecords.length})</span>
                  <span>Ações</span>
                </div>
                <div className="divide-y divide-slate-800/60 max-h-48 overflow-y-auto">
                  {filteredRecords.length === 0 ? (
                    <div className="p-6 text-center text-xs text-slate-500">
                      Nenhum registro encontrado. Cadastre um novo acima!
                    </div>
                  ) : (
                    filteredRecords.map((r) => (
                      <div key={r.id} className="p-3.5 flex items-center justify-between text-xs hover:bg-slate-900/50 transition-colors">
                        <div>
                          <div className="font-bold text-white">{r.name}</div>
                          <div className="text-slate-400 text-[11px]">{r.phone} • <span className="text-indigo-400">{r.category}</span></div>
                        </div>
                        <button 
                          onClick={() => handleDeleteRecord(r.id)}
                          className="p-1.5 rounded-lg text-rose-400 hover:bg-rose-500/10 transition-colors"
                          title="Excluir registro"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))
                  )}
                </div>
              </div>

              {planData?.demoUrl && (
                <div className="p-4 rounded-2xl bg-gradient-to-r from-indigo-950/80 to-slate-900 border border-indigo-500/40 text-center space-y-3">
                  <div className="text-xs font-semibold text-indigo-300">
                    🌐 Modelo Real Disponível: <strong>{planData.demoLabel || 'Sistema SB'}</strong>
                  </div>
                  <a
                    href={planData.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow-lg shadow-indigo-600/30 transition-all cursor-pointer"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Acessar {planData.demoUrl}</span>
                  </a>
                </div>
              )}
            </div>
          )}

          {/* 2. DEMO DASHBOARD */}
          {demoType === 'dashboard' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="text-xs font-mono uppercase text-slate-400 font-bold">
                  Indicadores Financeiros Simulado
                </div>
                <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs">
                  {['semana', 'mes', 'ano'].map((period) => (
                    <button
                      key={period}
                      onClick={() => setFilterPeriod(period)}
                      className={`px-3 py-1 rounded-lg capitalize font-medium transition-colors ${
                        filterPeriod === period ? 'bg-emerald-600 text-white font-bold' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {period}
                    </button>
                  ))}
                </div>
              </div>

              {/* KPI Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800">
                  <div className="text-[11px] text-slate-400 font-mono">Faturamento Total</div>
                  <div className="text-xl font-extrabold text-emerald-400 font-heading mt-1">
                    {filterPeriod === 'semana' ? 'R$ 8.450' : filterPeriod === 'mes' ? 'R$ 34.200' : 'R$ 412.000'}
                  </div>
                  <div className="text-[10px] text-emerald-500 mt-1">↑ +14% vs período anterior</div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800">
                  <div className="text-[11px] text-slate-400 font-mono">Novos Clientes</div>
                  <div className="text-xl font-extrabold text-blue-400 font-heading mt-1">
                    {filterPeriod === 'semana' ? '12' : filterPeriod === 'mes' ? '48' : '520'}
                  </div>
                  <div className="text-[10px] text-blue-400 mt-1">100% Leads Qualificados</div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800">
                  <div className="text-[11px] text-slate-400 font-mono">Ticket Médio</div>
                  <div className="text-xl font-extrabold text-indigo-400 font-heading mt-1">
                    R$ 712,50
                  </div>
                  <div className="text-[10px] text-slate-400 mt-1">Cálculo automatizado</div>
                </div>
              </div>

              {/* Visual Bars Simulation */}
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800">
                <div className="text-xs font-bold text-white mb-4 flex items-center justify-between">
                  <span>Desempenho por Categoria</span>
                  <BarChart2 className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-xs text-slate-300 mb-1">
                      <span>Vendas de Serviços</span>
                      <span className="font-bold text-emerald-400">72%</span>
                    </div>
                    <div className="w-full h-2.5 bg-slate-900 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-500 rounded-full transition-all duration-500" style={{ width: '72%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs text-slate-300 mb-1">
                      <span>Produtos / Peças</span>
                      <span className="font-bold text-blue-400">54%</span>
                    </div>
                    <div className="w-full h-2.5 bg-slate-900 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 rounded-full transition-all duration-500" style={{ width: '54%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {planData?.demoUrl && (
                <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-950/80 to-slate-900 border border-emerald-500/40 text-center space-y-3">
                  <div className="text-xs font-semibold text-emerald-300">
                    🌐 Modelo Real Disponível: <strong>{planData.demoLabel || 'DashWeb'}</strong>
                  </div>
                  <a
                    href={planData.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-lg shadow-emerald-600/30 transition-all cursor-pointer"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Acessar {planData.demoUrl}</span>
                  </a>
                </div>
              )}
            </div>
          )}

          {/* 3. DEMO LANDING PAGE */}
          {demoType === 'landing-page' && (
            <div className="space-y-4 text-center py-4">
              <div className="w-16 h-16 rounded-2xl bg-blue-500/10 text-blue-400 flex items-center justify-center mx-auto text-3xl">
                🚀
              </div>
              <h4 className="font-heading text-xl font-bold text-white">Design Moderno & Alta Conversão</h4>
              <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                Nossas Landing Pages contam com layout ultra-otimizado, carregamento instantâneo no celular e botões estratégicos direcionados ao seu WhatsApp para você fechar mais negócios.
              </p>
              {planData?.demoUrl && (
                <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-950/80 to-slate-900 border border-blue-500/40 text-center space-y-3">
                  <div className="text-xs font-semibold text-blue-300">
                    🌐 Modelo Real Disponível: <strong>{planData.demoLabel || 'Modelo Online'}</strong>
                  </div>
                  <a
                    href={planData.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold shadow-lg shadow-blue-600/30 transition-all cursor-pointer"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Acessar {planData.demoUrl}</span>
                  </a>
                </div>
              )}
            </div>
          )}

        </div>

        {/* FOOTER CTA */}
        <div className="p-6 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-400 text-center sm:text-left">
            Gostou da demonstração? Desenvolvemos sua versão personalizada!
          </div>

          <button
            onClick={handleWhatsAppContact}
            className="w-full sm:w-auto py-3 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-sm shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Quero esta solução para minha empresa</span>
          </button>
        </div>

      </div>
    </div>
  );
}
