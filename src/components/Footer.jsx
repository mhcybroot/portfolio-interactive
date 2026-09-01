import React from 'react';
import { ArrowUp, Github, Linkedin, Heart, ShieldCheck, Terminal, FileText } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer({ onOpenTerminal, onOpenResume }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050811] border-t border-[#1f2e4d]/80 pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Brand & Tagline */}
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#00f5d4] to-[#3b82f6] p-[1.5px]">
              <div className="w-full h-full bg-[#080d1a] rounded-[6px] flex items-center justify-center font-mono font-bold text-xs text-[#00f5d4]">
                MH
              </div>
            </div>
            <span className="font-bold text-white text-base">Mahmudul Hasan</span>
          </div>
          <p className="text-xs text-slate-400 max-w-sm">
            Full-Stack Software & Systems Engineer specialized in Java 21 Spring Boot, Rust 2024, React 19, and IoT hardware protocols.
          </p>
        </div>

        {/* Quick Actions */}
        <div className="flex items-center flex-wrap justify-center gap-4 text-xs font-mono text-slate-400">
          <button
            onClick={onOpenTerminal}
            className="hover:text-[#00f5d4] transition-colors flex items-center gap-1.5"
          >
            <Terminal className="w-3.5 h-3.5 text-[#00f5d4]" />
            <span>CLI Terminal</span>
          </button>
          
          <button
            onClick={onOpenResume}
            className="hover:text-[#3b82f6] transition-colors flex items-center gap-1.5"
          >
            <FileText className="w-3.5 h-3.5 text-[#3b82f6]" />
            <span>Resume (PDF/DOCX)</span>
          </button>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1.5"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub Profile</span>
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#3b82f6] transition-colors flex items-center gap-1.5"
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </a>
        </div>

        {/* Back to top */}
        <div>
          <button
            onClick={scrollToTop}
            className="p-3 rounded-xl bg-[#0d1527] border border-[#1f2e4d] text-slate-300 hover:text-[#00f5d4] hover:border-[#00f5d4]/40 transition-all shadow-md"
            title="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-[#1f2e4d]/40 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-[11px] text-slate-500 font-mono">
        <div>
          © {new Date().getFullYear()} Mahmudul Hasan. All rights reserved.
        </div>
        <div>
          Engineered with <span className="text-cyan-400">React 19</span>, <span className="text-cyan-400">Vite</span>, <span className="text-cyan-400">Three.js</span> & <span className="text-cyan-400">Tailwind CSS</span>.
        </div>
      </div>
    </footer>
  );
}
