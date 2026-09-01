import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ArchitectureFlow from './components/ArchitectureFlow';
import GitHubVisualizer from './components/GitHubVisualizer';
import LiveDeployments from './components/LiveDeployments';
import PolyglotMatrix from './components/PolyglotMatrix';
import ExperienceTimeline from './components/ExperienceTimeline';
import ContactSection from './components/ContactSection';
import InteractiveTerminal from './components/InteractiveTerminal';
import ResumeModal from './components/ResumeModal';
import Footer from './components/Footer';

export default function App() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#080d1a] text-slate-100 flex flex-col font-sans selection:bg-[#00f5d4] selection:text-black">
      
      {/* Navigation */}
      <Navbar
        onOpenTerminal={() => setIsTerminalOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          onOpenTerminal={() => setIsTerminalOpen(true)}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        <ArchitectureFlow />

        <GitHubVisualizer />

        <LiveDeployments />

        <PolyglotMatrix />

        <ExperienceTimeline />

        <ContactSection />
      </main>

      {/* Modals & Overlays */}
      <InteractiveTerminal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* Footer */}
      <Footer
        onOpenTerminal={() => setIsTerminalOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
      />

    </div>
  );
}
