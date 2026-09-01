import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CaseStudies from './components/CaseStudies';
import InteractiveSimulator from './components/InteractiveSimulator';
import DecisionMatrix from './components/DecisionMatrix';
import ArchitectureFlow from './components/ArchitectureFlow';
import TelemetryMonitor from './components/TelemetryMonitor';
import GitHubVisualizer from './components/GitHubVisualizer';
import LiveDeployments from './components/LiveDeployments';
import PolyglotMatrix from './components/PolyglotMatrix';
import ExperienceTimeline from './components/ExperienceTimeline';
import Endorsements from './components/Endorsements';
import ContactSection from './components/ContactSection';
import InteractiveTerminal from './components/InteractiveTerminal';
import ResumeModal from './components/ResumeModal';
import CommandPalette from './components/CommandPalette';
import ScrollProgressBar from './components/UI/ScrollProgressBar';
import AmbientBackground from './components/UI/AmbientBackground';
import Footer from './components/Footer';

export default function App() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen relative text-slate-100 flex flex-col font-sans selection:bg-[#00f5d4] selection:text-black">
      
      {/* 2026 Aurora, Cyber Blueprint Grid, & Tactile Grain Background */}
      <AmbientBackground />

      {/* Top Cyber Glowing Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Navigation Header */}
      <Navbar
        onOpenTerminal={() => setIsTerminalOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenPalette={() => setIsPaletteOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1 space-y-4 sm:space-y-8 relative z-10">
        <Hero
          onOpenTerminal={() => setIsTerminalOpen(true)}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        <CaseStudies />

        <InteractiveSimulator />

        <DecisionMatrix />

        <ArchitectureFlow />

        <TelemetryMonitor />

        <GitHubVisualizer />

        <LiveDeployments />

        <PolyglotMatrix />

        <ExperienceTimeline />

        <Endorsements />

        <ContactSection />
      </main>

      {/* Global Modals & Command Overlays */}
      <CommandPalette
        isOpen={isPaletteOpen}
        onClose={() => setIsPaletteOpen(false)}
        onOpenTerminal={() => setIsTerminalOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
      />

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
