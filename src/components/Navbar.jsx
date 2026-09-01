import React, { useState, useEffect } from 'react';
import { Download, Terminal, Github, Linkedin, ExternalLink, Menu, X, FileText, ChevronDown, Search, Volume2, VolumeX } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { sound } from '../utils/soundManager';

export default function Navbar({ onOpenResume, onOpenTerminal, onOpenPalette }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cvDropdownOpen, setCvDropdownOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(sound.isMuted());

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const nextState = !isMuted;
    sound.setMuted(nextState);
    setIsMuted(nextState);
    if (!nextState) {
      sound.playChime();
    }
  };

  const navLinks = [
    { name: "Overview", href: "#hero" },
    { name: "Case Studies", href: "#case-studies" },
    { name: "Simulator", href: "#simulator" },
    { name: "Trade-offs", href: "#decision-matrix" },
    { name: "Architecture", href: "#architecture" },
    { name: "Repositories", href: "#repositories" },
    { name: "Endorsements", href: "#endorsements" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#080d1a]/85 backdrop-blur-md border-b border-[#1f2e4d]/80 py-2.5 shadow-lg shadow-black/20' 
        : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#00f5d4] to-[#3b82f6] p-[1.5px] shadow-lg shadow-[#00f5d4]/20 group-hover:shadow-[#00f5d4]/40 transition-all">
            <div className="w-full h-full bg-[#080d1a] rounded-[10px] flex items-center justify-center">
              <span className="font-mono font-bold text-base text-[#00f5d4]">MH</span>
            </div>
          </div>
          <div>
            <div className="font-bold text-sm sm:text-base text-slate-100 group-hover:text-[#00f5d4] transition-colors leading-tight">
              Mahmudul Hasan
            </div>
            <div className="text-[10px] font-mono text-slate-400">
              Full-Stack & Systems
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-medium text-slate-300 hover:text-[#00f5d4] transition-colors hover:scale-105"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Center */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          
          {/* Quick Search / Cmd+K Button */}
          <button
            onClick={onOpenPalette}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0d1527] border border-[#1f2e4d] text-slate-300 hover:text-[#00f5d4] hover:border-[#00f5d4]/40 text-xs font-mono transition-all"
            title="Search (Ctrl + K)"
          >
            <Search className="w-3.5 h-3.5 text-[#00f5d4]" />
            <span className="hidden md:inline text-[11px] text-slate-400">Search...</span>
            <kbd className="hidden sm:inline-block px-1.5 py-0.5 rounded bg-[#080d1a] border border-[#1f2e4d] text-[9px] text-slate-400">
              Ctrl+K
            </kbd>
          </button>

          {/* Sound Toggle */}
          <button
            onClick={toggleSound}
            className="p-2 rounded-lg bg-[#0d1527] border border-[#1f2e4d] text-slate-400 hover:text-white transition-colors"
            title={isMuted ? "Enable Sound Effects" : "Mute Sound Effects"}
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-[#00f5d4]" />}
          </button>

          {/* Quick Terminal Trigger */}
          <button
            onClick={onOpenTerminal}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0d1527] border border-[#1f2e4d] text-slate-300 hover:text-[#00f5d4] text-xs font-mono transition-all"
            title="Open Interactive Terminal"
          >
            <Terminal className="w-3.5 h-3.5 text-[#00f5d4]" />
            <span className="hidden lg:inline">CLI</span>
          </button>

          {/* CV Download Dropdown */}
          <div className="relative">
            <button
              onClick={() => setCvDropdownOpen(!cvDropdownOpen)}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-gradient-to-r from-[#00f5d4] to-[#3b82f6] text-slate-950 font-semibold text-xs transition-all shadow-md shadow-[#00f5d4]/20 hover:opacity-95"
            >
              <FileText className="w-3.5 h-3.5" />
              <span className="hidden xs:inline">CV</span>
              <ChevronDown className={`w-3 h-3 transition-transform ${cvDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {cvDropdownOpen && (
              <div 
                className="absolute right-0 mt-2 w-48 rounded-xl bg-[#0d1527] border border-[#1f2e4d] p-1.5 shadow-2xl shadow-black/80 z-50 animate-in fade-in zoom-in-95 duration-150"
                onMouseLeave={() => setCvDropdownOpen(false)}
              >
                <a
                  href={personalInfo.cvPdf}
                  download="MAHMUDUL_HASAN_CV.pdf"
                  onClick={() => setCvDropdownOpen(false)}
                  className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium text-slate-200 hover:bg-[#121d36] hover:text-[#00f5d4] transition-colors"
                >
                  <Download className="w-3.5 h-3.5 text-[#00f5d4]" />
                  <span>Master CV (PDF)</span>
                </a>
                <a
                  href={personalInfo.cvDocx}
                  download="MAHMUDUL_HASAN_CV.docx"
                  onClick={() => setCvDropdownOpen(false)}
                  className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium text-slate-200 hover:bg-[#121d36] hover:text-[#3b82f6] transition-colors"
                >
                  <Download className="w-3.5 h-3.5 text-[#3b82f6]" />
                  <span>Master CV (Word .docx)</span>
                </a>
                <button
                  onClick={() => {
                    setCvDropdownOpen(false);
                    onOpenResume();
                  }}
                  className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium text-slate-200 hover:bg-[#121d36] hover:text-purple-400 transition-colors text-left border-t border-[#1f2e4d]/50 mt-1 pt-2"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-purple-400" />
                  <span>Preview in Modal</span>
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center xl:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#0d1527] border border-[#1f2e4d] text-slate-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#080d1a]/95 backdrop-blur-xl border-b border-[#1f2e4d] px-4 pt-3 pb-6 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-1.5 rounded-lg text-xs font-medium text-slate-200 hover:bg-[#0d1527] hover:text-[#00f5d4]"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-[#1f2e4d] flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPalette();
              }}
              className="flex items-center justify-center gap-2 w-full py-2 rounded-lg bg-[#0d1527] border border-[#1f2e4d] text-slate-200 text-xs font-mono"
            >
              <Search className="w-3.5 h-3.5 text-[#00f5d4]" />
              <span>Search & Command Palette (Ctrl+K)</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTerminal();
              }}
              className="flex items-center justify-center gap-2 w-full py-2 rounded-lg bg-[#0d1527] border border-[#1f2e4d] text-slate-200 text-xs font-mono"
            >
              <Terminal className="w-3.5 h-3.5 text-[#00f5d4]" />
              <span>Launch CLI Terminal</span>
            </button>
            <a
              href={personalInfo.cvPdf}
              download="MAHMUDUL_HASAN_CV.pdf"
              className="flex items-center justify-center gap-2 w-full py-2 rounded-lg bg-gradient-to-r from-[#00f5d4] to-[#3b82f6] text-slate-950 font-bold text-xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Master CV (PDF)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
