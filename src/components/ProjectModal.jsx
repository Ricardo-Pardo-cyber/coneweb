import React from 'react';
import { X, MessageCircle, ExternalLink, CheckCircle2, Tag } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  const handleWhatsAppOrder = () => {
    const msg = project.whatsappMessage || `Olá! Tenho interesse em um projeto do tipo "${project.title}" (${project.category}).`;
    openWhatsApp(msg);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-slate-950/80 text-slate-400 hover:text-white hover:bg-slate-950 transition-colors cursor-pointer"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* IMAGE */}
        <div className="relative h-56 sm:h-72 w-full overflow-hidden bg-slate-950">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
          <div className="absolute bottom-4 left-6">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-600 text-white font-mono text-xs font-bold uppercase tracking-wider mb-2">
              {project.category}
            </span>
            <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-white">
              {project.title}
            </h3>
          </div>
        </div>

        {/* BODY */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto">
          <div>
            <h4 className="text-xs font-mono uppercase text-slate-400 font-bold mb-2">Sobre este projeto:</h4>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* TAGS */}
          {project.tags && project.tags.length > 0 && (
            <div>
              <h4 className="text-xs font-mono uppercase text-slate-400 font-bold mb-2">Tecnologias & Recursos:</h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span key={i} className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-950 text-slate-300 text-xs border border-slate-800">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                    <span>{tag}</span>
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row gap-3 items-center justify-between">
            <div className="text-xs text-slate-400 text-center sm:text-left">
              Gostou desse estilo? Podemos criar uma solução similar para sua empresa.
            </div>

            <div className="flex flex-col sm:flex-row gap-2.5 w-full sm:w-auto">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="modal-live-demo-btn"
                  className="w-full sm:w-auto py-3.5 px-5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-600/25 flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Ver Site Online</span>
                </a>
              )}

              <button
                onClick={handleWhatsAppOrder}
                id="modal-whatsapp-btn"
                className="w-full sm:w-auto py-3.5 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-sm shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2 cursor-pointer transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Quero uma solução como esta</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
