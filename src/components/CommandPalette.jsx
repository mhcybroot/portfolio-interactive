import React, { useState, useEffect, useRef } from 'react';
import { Search, Terminal, Download, FileText, ExternalLink, Github, Code, BookOpen, Globe, Mail, Phone, ArrowRight, X, History, Sparkles, Flame, Check } from 'lucide-react';
import { personalInfo, livePlatforms } from '../data/portfolioData';
import { verifiedRepositories } from '../data/repositoriesData';
import { searchCollection } from '../utils/fuzzySearch';
import { sound } from '../utils/soundManager';

export default function CommandPalette({ isOpen, onClose, onOpenTerminal, onOpenResume, initialQuery = '' }) {
  const [query, setQuery] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [recentSearches, setRecentSearches] = useState([]);
  const inputRef = useRef(null);

  // Load recent searches from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('portfolio_recent_searches');
      if (saved) setRecentSearches(JSON.parse(saved).slice(0, 4));
    } catch (e) {}
  }, []);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      if (initialQuery) {
        setQuery(initialQuery);
      }
      setSelectedIndex(0);
      sound.playChime();
    }
  }, [isOpen, initialQuery]);

  // Sync with URL query parameter
  const updateQueryWithUrl = (newQuery) => {
    setQuery(newQuery);
    setSelectedIndex(0);
    const url = new URL(window.location.href);
    if (newQuery.trim()) {
      url.searchParams.set('q', newQuery);
    } else {
      url.searchParams.delete('q');
    }
    window.history.replaceState({}, '', url.toString());
  };

  const saveRecentSearch = (term) => {
    if (!term || term.trim() === '') return;
    const clean = term.trim();
    const updated = [clean, ...recentSearches.filter(s => s.toLowerCase() !== clean.toLowerCase())].slice(0, 4);
    setRecentSearches(updated);
    try {
      localStorage.setItem('portfolio_recent_searches', JSON.stringify(updated));
    } catch (e) {}
  };

  const allItems = [
    // Actions
    { 
      id: 'cv-pdf', 
      type: 'Action', 
      title: 'Download Master CV (PDF)', 
      subtitle: 'ATS-compliant vector PDF format',
      tags: ['cv', 'resume', 'pdf', 'download', 'ats'],
      icon: Download, 
      action: () => {
        const link = document.createElement('a');
        link.href = personalInfo.cvPdf;
        link.download = 'MAHMUDUL_HASAN_CV.pdf';
        link.click();
        saveRecentSearch('Download CV (PDF)');
        onClose();
      }
    },
    { 
      id: 'cv-docx', 
      type: 'Action', 
      title: 'Download Master CV (Word .docx)', 
      subtitle: 'ATS-friendly Microsoft Word document',
      tags: ['cv', 'resume', 'docx', 'word', 'download'],
      icon: Download, 
      action: () => {
        const link = document.createElement('a');
        link.href = personalInfo.cvDocx;
        link.download = 'MAHMUDUL_HASAN_CV.docx';
        link.click();
        saveRecentSearch('Download CV (DOCX)');
        onClose();
      }
    },
    { 
      id: 'preview-cv', 
      type: 'Action', 
      title: 'Preview Resume in Modal', 
      subtitle: 'In-app clean resume viewer with 1-click downloads',
      tags: ['preview', 'cv', 'resume', 'experience'],
      icon: FileText, 
      action: () => {
        saveRecentSearch('Preview Resume');
        onClose();
        onOpenResume();
      }
    },
    { 
      id: 'open-cli', 
      type: 'Action', 
      title: 'Launch Developer CLI Terminal', 
      subtitle: 'Run `cat architecture.md`, `git clone`, `status --live`',
      tags: ['terminal', 'cli', 'bash', 'console', 'developer'],
      icon: Terminal, 
      action: () => {
        saveRecentSearch('CLI Terminal');
        onClose();
        onOpenTerminal();
      }
    },
    { 
      id: 'copy-email', 
      type: 'Action', 
      title: `Copy Email (${personalInfo.email})`, 
      subtitle: 'Click to copy direct contact email to clipboard',
      tags: ['email', 'contact', 'hire', 'reach out'],
      icon: Mail, 
      action: () => {
        navigator.clipboard.writeText(personalInfo.email);
        alert('Copied email to clipboard!');
        saveRecentSearch('Email Copy');
        onClose();
      }
    },
    { 
      id: 'whatsapp', 
      type: 'Action', 
      title: 'Direct WhatsApp Chat (+880 1410-749454)', 
      subtitle: 'Instant mobile messaging chat trigger',
      tags: ['whatsapp', 'phone', 'call', 'message'],
      icon: Phone, 
      action: () => {
        window.open(personalInfo.whatsapp, '_blank');
        saveRecentSearch('WhatsApp');
        onClose();
      }
    },
    // Case Studies
    {
      id: 'case-pms-v2',
      type: 'Case Study',
      title: 'Case Study: Smart Parking Architecture (PMS-V2)',
      subtitle: 'High-concurrency Rust Axum + Tokio backend with sub-millisecond gate barrier response.',
      tags: ['rust', 'axum', 'tokio', 'parking', 'iot', 'zkteco', 'rtsp', 'cctv', 'seaorm', 'flutter', 'pms'],
      icon: BookOpen,
      action: () => {
        document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' });
        saveRecentSearch('Smart Parking Case Study');
        onClose();
      }
    },
    {
      id: 'case-skylink',
      type: 'Case Study',
      title: 'Case Study: Enterprise HRMS & Biometric ADMS Stream (Skylink)',
      subtitle: 'Java 21 Spring Boot 3.4 push protocol ingestion cutting payroll calculation by 98.6%.',
      tags: ['java', 'spring boot', 'adms', 'zkteco', 'biometric', 'payroll', 'hrms', 'attendance', 'websockets'],
      icon: BookOpen,
      action: () => {
        document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' });
        saveRecentSearch('Enterprise HRMS Case Study');
        onClose();
      }
    },
    // Repositories
    ...verifiedRepositories.map(repo => ({
      id: `repo-${repo.id}`,
      type: 'Repository',
      title: `${repo.name} [${repo.language}]`,
      subtitle: repo.description,
      tags: [repo.language.toLowerCase(), ...repo.techBadges.map(b => b.toLowerCase()), repo.category.toLowerCase()],
      icon: Github,
      action: () => {
        window.open(repo.repoUrl, '_blank');
        saveRecentSearch(repo.name);
        onClose();
      }
    })),
    // Live Platforms
    ...livePlatforms.map(site => ({
      id: `live-${site.domain}`,
      type: 'Live Site',
      title: `${site.name} (${site.domain})`,
      subtitle: `${site.category} • ${site.tech}`,
      tags: ['live', 'website', site.domain, ...site.tech.toLowerCase().split(/[\s,]+/)],
      icon: Globe,
      action: () => {
        window.open(site.url, '_blank');
        saveRecentSearch(site.domain);
        onClose();
      }
    }))
  ];

  // Apply Faceted Category Filter
  const categoryFiltered = selectedCategory === 'All'
    ? allItems
    : allItems.filter(item => {
        if (selectedCategory === 'Repositories') return item.type === 'Repository';
        if (selectedCategory === 'Case Studies') return item.type === 'Case Study';
        if (selectedCategory === 'Live Sites') return item.type === 'Live Site';
        if (selectedCategory === 'Actions') return item.type === 'Action';
        return true;
      });

  // Apply Typo-Tolerant Weighted Fuzzy Search
  const filteredItems = searchCollection(categoryFiltered, query);

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

  const trendingQueries = [
    { label: '🔥 Rust 2024', query: 'Rust' },
    { label: '☕ Spring Boot 3.4', query: 'Spring' },
    { label: '📟 ZKTeco ADMS', query: 'ADMS' },
    { label: '🌐 3D WebGL', query: 'Three.js' },
    { label: '📄 Download CV', query: 'CV' },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-20 p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-150">
      <div className="w-full max-w-2xl bg-[#0b1222] border border-[#1f2e4d] rounded-2xl shadow-2xl shadow-[#00f5d4]/15 overflow-hidden flex flex-col">
        
        {/* Search Input Bar */}
        <div className="bg-[#101a30] px-4 py-3.5 border-b border-[#1f2e4d] flex items-center gap-3">
          <Search className="w-5 h-5 text-[#00f5d4]" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => updateQueryWithUrl(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search projects, skills, case studies, or type a command..."
            className="flex-1 bg-transparent text-white placeholder-slate-400 text-sm outline-none font-sans"
          />
          {query && (
            <button
              onClick={() => updateQueryWithUrl('')}
              className="p-1 rounded text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="hidden sm:inline-block px-2 py-0.5 rounded bg-[#060a14] border border-[#1f2e4d] text-[10px] font-mono text-slate-400">
            ESC
          </kbd>
        </div>

        {/* Faceted Category Tabs */}
        <div className="bg-[#080d1a] px-4 py-2 border-b border-[#1f2e4d]/70 flex items-center gap-2 overflow-x-auto text-xs">
          {['All', 'Repositories', 'Case Studies', 'Live Sites', 'Actions'].map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setSelectedIndex(0);
                sound.playClick();
              }}
              className={`px-3 py-1 rounded-lg font-mono text-[11px] whitespace-nowrap transition-colors ${
                selectedCategory === cat
                  ? 'bg-[#00f5d4] text-slate-950 font-bold'
                  : 'bg-[#101a30] text-slate-300 hover:text-white border border-[#1f2e4d]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Trending & Recent Search Chips (Shown when input is empty) */}
        {!query && (
          <div className="bg-[#080d1a]/60 px-4 py-2.5 border-b border-[#1f2e4d]/40 flex flex-wrap items-center gap-2 text-xs">
            <span className="text-slate-500 font-mono text-[10px] uppercase">Trending:</span>
            {trendingQueries.map((t, idx) => (
              <button
                key={idx}
                onClick={() => updateQueryWithUrl(t.query)}
                className="px-2.5 py-0.5 rounded-full bg-[#101a30] hover:bg-[#1a2744] border border-[#1f2e4d] text-slate-300 text-[11px] font-mono transition-colors"
              >
                {t.label}
              </button>
            ))}
          </div>
        )}

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-2 space-y-1">
          {filteredItems.length === 0 ? (
            <div className="p-8 text-center text-xs font-mono text-slate-400">
              No matching results found for "{query}". Try searching for <span className="text-[#00f5d4]">"Rust"</span>, <span className="text-[#00f5d4]">"Spring Boot"</span>, or <span className="text-[#00f5d4]">"ADMS"</span>.
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
                    isSelected ? 'bg-[#1a2744] text-white border border-[#00f5d4]/40 shadow-sm' : 'text-slate-300 hover:bg-[#101a30]'
                  }`}
                >
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className={`p-2 rounded-lg ${isSelected ? 'bg-[#00f5d4] text-slate-950' : 'bg-[#060a14] text-[#00f5d4]'}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <div className="text-xs sm:text-sm font-semibold truncate text-white">
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
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#060a14] border border-[#1f2e4d] text-slate-400">
                      {item.type}
                    </span>
                    {isSelected && <ArrowRight className="w-3.5 h-3.5 text-[#00f5d4]" />}
                  </div>
                </button>
              );
            })
          )}
        </div>

        {/* Footer Info */}
        <div className="bg-[#080d1a] px-4 py-2.5 border-t border-[#1f2e4d] flex items-center justify-between text-[11px] font-mono text-slate-400">
          <div className="flex items-center gap-3">
            <span>↑↓ Navigate</span>
            <span>↵ Select</span>
            <span>ESC Close</span>
          </div>
          <span className="text-[#00f5d4]">{filteredItems.length} matches</span>
        </div>

      </div>
    </div>
  );
}
