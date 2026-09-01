import React, { useState, useEffect, useRef } from 'react';
import { Search, Terminal, Download, FileText, ExternalLink, Github, Code, BookOpen, Globe, Mail, Phone, ArrowRight, X } from 'lucide-react';
import { personalInfo, livePlatforms } from '../data/portfolioData';
import { verifiedRepositories } from '../data/repositoriesData';
import { sound } from '../utils/soundManager';

export default function CommandPalette({ isOpen, onClose, onOpenTerminal, onOpenResume }) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery('');
      setSelectedIndex(0);
      sound.playChime();
    }
  }, [isOpen]);

  const allItems = [
    // Actions
    { id: 'cv-pdf', type: 'Action', title: 'Download Master CV (PDF)', icon: Download, action: () => {
      const link = document.createElement('a');
      link.href = personalInfo.cvPdf;
      link.download = 'MAHMUDUL_HASAN_CV.pdf';
      link.click();
      onClose();
    }},
    { id: 'cv-docx', type: 'Action', title: 'Download Master CV (Word .docx)', icon: Download, action: () => {
      const link = document.createElement('a');
      link.href = personalInfo.cvDocx;
      link.download = 'MAHMUDUL_HASAN_CV.docx';
      link.click();
      onClose();
    }},
    { id: 'preview-cv', type: 'Action', title: 'Preview Resume in Modal', icon: FileText, action: () => {
      onClose();
      onOpenResume();
    }},
    { id: 'open-cli', type: 'Action', title: 'Launch Interactive Developer CLI Terminal', icon: Terminal, action: () => {
      onClose();
      onOpenTerminal();
    }},
    { id: 'copy-email', type: 'Action', title: `Copy Email (${personalInfo.email})`, icon: Mail, action: () => {
      navigator.clipboard.writeText(personalInfo.email);
      alert('Copied email to clipboard!');
      onClose();
    }},
    { id: 'whatsapp', type: 'Action', title: 'Direct WhatsApp Chat (+880 1410-749454)', icon: Phone, action: () => {
      window.open(personalInfo.whatsapp, '_blank');
      onClose();
    }},
    // Repositories
    ...verifiedRepositories.map(repo => ({
      id: `repo-${repo.id}`,
      type: 'Repository',
      title: `${repo.name} [${repo.language}]`,
      subtitle: repo.description,
      icon: Github,
      action: () => {
        window.open(repo.repoUrl, '_blank');
        onClose();
      }
    })),
    // Live Platforms
    ...livePlatforms.map(site => ({
      id: `live-${site.domain}`,
      type: 'Live Site',
      title: `${site.name} (${site.domain})`,
      subtitle: site.tech,
      icon: Globe,
      action: () => {
        window.open(site.url, '_blank');
        onClose();
      }
    })),
    // Sections
    { id: 'nav-case-studies', type: 'Navigation', title: 'Jump to: Architectural Case Studies', icon: BookOpen, action: () => {
      document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' });
      onClose();
    }},
    { id: 'nav-decision-matrix', type: 'Navigation', title: 'Jump to: Architectural Decision Matrix', icon: Code, action: () => {
      document.getElementById('decision-matrix')?.scrollIntoView({ behavior: 'smooth' });
      onClose();
    }},
    { id: 'nav-simulator', type: 'Navigation', title: 'Jump to: Live Edge-to-Cloud Simulator', icon: Terminal, action: () => {
      document.getElementById('simulator')?.scrollIntoView({ behavior: 'smooth' });
      onClose();
    }},
  ];

  const filteredItems = query.trim() === ''
    ? allItems
    : allItems.filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase()) || 
        (item.subtitle && item.subtitle.toLowerCase().includes(query.toLowerCase())) ||
        item.type.toLowerCase().includes(query.toLowerCase())
      );

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % filteredItems.length);
      sound.playClick();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
      sound.playClick();
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredItems[selectedIndex]) {
        filteredItems[selectedIndex].action();
      }
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-150">
      <div className="w-full max-w-2xl bg-[#0d1527] border border-[#1f2e4d] rounded-2xl shadow-2xl shadow-[#00f5d4]/10 overflow-hidden flex flex-col">
        
        {/* Search Input Bar */}
        <div className="bg-[#121d36] px-4 py-3.5 border-b border-[#1f2e4d] flex items-center gap-3">
          <Search className="w-5 h-5 text-[#00f5d4]" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleKeyDown}
            placeholder="Search projects, skills, case studies, or type a command..."
            className="flex-1 bg-transparent text-white placeholder-slate-400 text-sm outline-none font-sans"
          />
          <kbd className="hidden sm:inline-block px-2 py-0.5 rounded bg-[#080d1a] border border-[#1f2e4d] text-[10px] font-mono text-slate-400">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-2 space-y-1">
          {filteredItems.length === 0 ? (
            <div className="p-8 text-center text-xs font-mono text-slate-400">
              No matching results found for "{query}"
            </div>
          ) : (
            filteredItems.map((item, idx) => {
              const Icon = item.icon;
              const isSelected = selectedIndex === idx;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    item.action();
                    sound.playClick();
                  }}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`w-full flex items-center justify-between p-3 rounded-xl text-left transition-colors ${
                    isSelected ? 'bg-[#1a2744] text-white border border-[#00f5d4]/30' : 'text-slate-300 hover:bg-[#121d36]'
                  }`}
                >
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className={`p-2 rounded-lg ${isSelected ? 'bg-[#00f5d4] text-slate-950' : 'bg-[#080d1a] text-[#00f5d4]'}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <div className="text-xs sm:text-sm font-semibold truncate">
                        {item.title}
                      </div>
                      {item.subtitle && (
                        <div className="text-[11px] text-slate-400 truncate">
                          {item.subtitle}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 ml-3 flex-shrink-0">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#080d1a] border border-[#1f2e4d] text-slate-400">
                      {item.type}
                    </span>
                    {isSelected && <ArrowRight className="w-3.5 h-3.5 text-[#00f5d4]" />}
                  </div>
                </button>
              );
            })
          )}
        </div>

        {/* Footer info */}
        <div className="bg-[#0b1222] px-4 py-2.5 border-t border-[#1f2e4d] flex items-center justify-between text-[11px] font-mono text-slate-400">
          <div className="flex items-center gap-3">
            <span>↑↓ Navigate</span>
            <span>↵ Select</span>
            <span>ESC Close</span>
          </div>
          <span className="text-[#00f5d4]">{filteredItems.length} items</span>
        </div>

      </div>
    </div>
  );
}
