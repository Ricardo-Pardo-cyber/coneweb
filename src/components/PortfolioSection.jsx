import React, { useState } from 'react';
import { ExternalLink, Sparkles, FolderGit2 } from 'lucide-react';
import { PORTFOLIO_CATEGORIES, PORTFOLIO_PROJECTS } from '../data/portfolio';

export default function PortfolioSection({ onOpenProjectModal }) {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredProjects = selectedCategory === "Todos"
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter(p => p.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-slate-950 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-xs font-bold uppercase tracking-wider">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Portfólio Conexão Web</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            PROJETOS
          </h2>
          <p className="text-lg text-slate-300">
            "Conheça alguns exemplos de soluções que podemos desenvolver."
          </p>
        </div>

        {/* CATEGORIES FILTER TABS */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {PORTFOLIO_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 scale-105'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* PROJECTS CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onOpenProjectModal(project)}
              className="group relative rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-blue-500/40 overflow-hidden transition-all duration-300 hover:-translate-y-2 cursor-pointer flex flex-col justify-between shadow-xl"
              id={`portfolio-card-${project.id}`}
            >
              <div>
                {/* IMAGE */}
                <div className="relative h-52 w-full overflow-hidden bg-slate-950">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-800 text-blue-400 text-[11px] font-mono font-bold uppercase">
                    {project.category}
                  </span>
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  {/* TAGS */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.tags.slice(0, 3).map((tag, i) => (
                      <span key={i} className="text-[10px] px-2.5 py-1 rounded-md bg-slate-950 text-slate-400 font-mono border border-slate-800/80">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* FOOTER BUTTON */}
              <div className="p-6 pt-0">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenProjectModal(project);
                  }}
                  id={`btn-view-project-${project.id}`}
                  className="w-full py-3 px-4 rounded-xl bg-slate-950 hover:bg-blue-600 text-slate-300 hover:text-white font-bold text-xs border border-slate-800 hover:border-blue-600 flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <span>Ver Projeto</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
