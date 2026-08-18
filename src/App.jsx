import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import NeedsSection from './components/NeedsSection';
import LandingPagesSection from './components/LandingPagesSection';
import SystemsSection from './components/SystemsSection';
import DashboardsSection from './components/DashboardsSection';
import MusicSection from './components/MusicSection';
import MaintenanceSection from './components/MaintenanceSection';
import PortfolioSection from './components/PortfolioSection';
import ProjectModal from './components/ProjectModal';
import InteractiveDemoModal from './components/InteractiveDemoModal';
import HowItWorksSection from './components/HowItWorksSection';
import DifferentialsSection from './components/DifferentialsSection';
import FaqSection from './components/FaqSection';
import BudgetFormSection from './components/BudgetFormSection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [demoState, setDemoState] = useState({ isOpen: false, type: null, planData: null });

  const handleOpenDemo = (demoType, planData) => {
    setDemoState({ isOpen: true, type: demoType, planData });
  };

  const handleCloseDemo = () => {
    setDemoState({ isOpen: false, type: null, planData: null });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-600 selection:text-white flex flex-col antialiased">
      {/* HEADER */}
      <Header />

      <main className="flex-grow">
        {/* HERO / CAPA */}
        <Hero />

        {/* O QUE SUA EMPRESA PRECISA? */}
        <NeedsSection />

        {/* LANDING PAGES */}
        <LandingPagesSection onOpenDemo={handleOpenDemo} />

        {/* SISTEMAS DE CADASTRO */}
        <SystemsSection onOpenDemo={handleOpenDemo} />

        {/* DASHBOARDS */}
        <DashboardsSection onOpenDemo={handleOpenDemo} />

        {/* MÚSICAS & JINGLES */}
        <MusicSection />

        {/* MANUTENÇÃO & SUPORTE (OPCIONAL) */}
        <MaintenanceSection />

        {/* PORTFÓLIO DE PROJETOS */}
        <PortfolioSection onOpenProjectModal={(proj) => setSelectedProject(proj)} />

        {/* COMO FUNCIONA */}
        <HowItWorksSection />

        {/* DIFERENCIAIS */}
        <DifferentialsSection />

        {/* FAQ */}
        <FaqSection />

        {/* FORMULÁRIO DE ORÇAMENTO */}
        <BudgetFormSection />

        {/* CTA FINAL */}
        <CtaSection />
      </main>

      {/* RODAPÉ */}
      <Footer />

      {/* FLOATING WHATSAPP BUTTON */}
      <FloatingWhatsApp />

      {/* PORTFOLIO PROJECT DETAIL MODAL */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}

      {/* INTERACTIVE DEMO MODAL */}
      {demoState.isOpen && (
        <InteractiveDemoModal 
          demoType={demoState.type} 
          planData={demoState.planData} 
          onClose={handleCloseDemo} 
        />
      )}
    </div>
  );
}
