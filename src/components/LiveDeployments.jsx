import React from 'react';
import { Globe, ExternalLink, Github, Sparkles, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { livePlatforms } from '../data/portfolioData';
import SpotlightCard from './UI/SpotlightCard';

export default function LiveDeployments() {
  return (
    <section id="deployments" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0d1527] border border-[#1f2e4d] text-xs font-mono text-purple-400 mb-3">
          <Globe className="w-3.5 h-3.5" />
          <span>Production Web Properties</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          Live Commercial <span className="cyber-gradient-text">Deployments</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto mt-2">
          Real client web applications deployed in production environments featuring 3D WebGL scenes, advanced motion, and responsive performance.
        </p>
      </div>

      {/* Browser Mockups Grid with Spotlight Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {livePlatforms.map((platform, idx) => (
          <SpotlightCard
            key={idx}
            spotlightColor="rgba(59, 130, 246, 0.12)"
            className="flex flex-col justify-between group"
          >
            {/* Desktop Browser Chrome */}
            <div className="bg-[#0d1527] px-4 py-3 border-b border-[#1f2e4d] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <div className="ml-3 px-3 py-1 rounded-md bg-[#080d1a] border border-[#1f2e4d] text-[11px] font-mono text-slate-300 flex items-center gap-1.5 max-w-[200px] sm:max-w-xs truncate">
                  <span className="text-emerald-400">https://</span>
                  <span className="truncate">{platform.domain}</span>
                </div>
              </div>

              <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[#121d36] text-purple-400 border border-purple-500/20">
                {platform.category}
              </span>
            </div>

            {/* Preview Banner / Body */}
            <div className="p-6">
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-xl font-bold text-white group-hover:text-[#00f5d4] transition-colors">
                  {platform.name}
                </h3>
                <a
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-gradient-to-tr from-[#00f5d4] to-[#3b82f6] text-slate-950 hover:opacity-90 transition-opacity shadow-md shadow-[#00f5d4]/20"
                  title="Launch live website"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                {platform.description}
              </p>

              <div className="p-3 rounded-xl bg-[#080d1a] border border-[#1f2e4d] mb-4">
                <div className="text-[11px] font-mono text-slate-400 mb-1">Tech Stack:</div>
                <div className="text-xs font-semibold text-[#00f5d4]">
                  {platform.tech}
                </div>
              </div>
            </div>

            {/* Card Footer Actions */}
            <div className="bg-[#0b1222] px-6 py-3.5 border-t border-[#1f2e4d]/60 flex items-center justify-between">
              <a
                href={platform.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Source Code</span>
              </a>

              <a
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-bold text-purple-400 hover:text-purple-300 transition-colors"
              >
                <span>Visit Live Platform</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </SpotlightCard>
        ))}
      </div>

    </section>
  );
}
