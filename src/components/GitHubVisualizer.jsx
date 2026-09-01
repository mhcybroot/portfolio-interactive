import React, { useState } from 'react';
import { Github, ExternalLink, Code2, Copy, Check, Star, GitFork, Layers, Terminal, Sparkles, X, ChevronRight } from 'lucide-react';
import { verifiedRepositories } from '../data/repositoriesData';
import TiltCard from './UI/TiltCard';
import { sound } from '../utils/soundManager';

export default function GitHubVisualizer() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeRepo, setActiveRepo] = useState(null);
  const [copiedId, setCopiedId] = useState(null);

  const categories = ['All', 'Systems & IoT', 'Backend & Systems', 'Tools & Telemetry', 'Live Client Platforms'];

  const filteredRepos = selectedCategory === 'All'
    ? verifiedRepositories
    : verifiedRepositories.filter(r => r.category === selectedCategory);

  const handleCopyClone = (repo) => {
    navigator.clipboard.writeText(repo.cloneCmd);
    sound.playClick();
    setCopiedId(repo.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="repositories" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0b1222] border border-[#1f2e4d] text-xs font-mono text-[#00f5d4] mb-3">
            <Github className="w-3.5 h-3.5" />
            <span>Open Source & Production Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Verified <span className="cyber-gradient-text">GitHub Codebases</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-2">
            Explore 10 production repositories covering high-concurrency backends, biometric IoT protocols, and modern 3D web platforms.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                sound.playClick();
              }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-[#00f5d4] text-slate-950 font-bold shadow-md shadow-[#00f5d4]/20 scale-105'
                  : 'bg-[#0b1222] border border-[#1f2e4d] text-slate-300 hover:text-white hover:border-slate-500'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Repositories Grid with 3D Tilt Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRepos.map((repo) => (
          <TiltCard
            key={repo.id}
            maxTilt={8}
            spotlightColor="rgba(0, 245, 212, 0.1)"
            className="flex flex-col justify-between"
          >
            <div className="p-6 flex flex-col justify-between h-full">
              {/* Top Bar */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-3 h-3 rounded-full inline-block"
                      style={{ backgroundColor: repo.langColor }}
                    />
                    <span className="text-xs font-mono text-slate-300 font-semibold">
                      {repo.language}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {repo.liveUrl && (
                      <a
                        href={repo.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1 rounded-md bg-[#060a14] border border-[#1f2e4d] text-purple-400 hover:text-white text-xs flex items-center gap-1 px-2"
                        title="Open Live Production Website"
                      >
                        <ExternalLink className="w-3 h-3" />
                        <span>Live Site</span>
                      </a>
                    )}
                    <a
                      href={repo.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-[#060a14] border border-[#1f2e4d] text-slate-400 hover:text-white transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Repo Title */}
                <h3 className="text-lg font-bold text-white group-hover:text-[#00f5d4] transition-colors mb-2">
                  {repo.name}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-xs sm:text-sm line-clamp-3 mb-4 leading-relaxed">
                  {repo.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {repo.techBadges.slice(0, 4).map((badge, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-md bg-[#060a14] border border-[#1f2e4d]/70 text-[11px] font-mono text-slate-300"
                    >
                      {badge}
                    </span>
                  ))}
                  {repo.techBadges.length > 4 && (
                    <span className="px-2 py-0.5 rounded-md bg-[#060a14] border border-[#1f2e4d]/70 text-[11px] font-mono text-slate-500">
                      +{repo.techBadges.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-4 border-t border-[#1f2e4d]/60 flex items-center justify-between gap-2">
                <button
                  onClick={() => {
                    setActiveRepo(repo);
                    sound.playClick();
                  }}
                  className="flex items-center gap-1.5 text-xs font-mono text-[#00f5d4] hover:underline"
                >
                  <span>Inspect Architecture</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => handleCopyClone(repo)}
                  className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#060a14] border border-[#1f2e4d] hover:border-[#00f5d4]/40 text-[11px] font-mono text-slate-300 transition-colors"
                  title="Copy git clone command"
                >
                  {copiedId === repo.id ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3 text-slate-400" />
                      <span>Clone</span>
                    </>
                  )}
                </button>
              </div>
            </div>

          </TiltCard>
        ))}
      </div>

      {/* Codebase Inspection Drawer / Modal */}
      {activeRepo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="w-full max-w-3xl bg-[#0b1222] border border-[#1f2e4d] rounded-2xl shadow-2xl shadow-[#00f5d4]/10 overflow-hidden flex flex-col max-h-[85vh]">
            
            {/* Modal Header */}
            <div className="bg-[#101a30] px-6 py-4 border-b border-[#1f2e4d] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Github className="w-5 h-5 text-[#00f5d4]" />
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {activeRepo.fullName}
                  </h3>
                  <div className="text-xs font-mono text-slate-400">
                    Category: {activeRepo.category} | Primary Language: {activeRepo.language}
                  </div>
                </div>
              </div>
              <button
                onClick={() => setActiveRepo(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-[#060a14] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6">
              
              {/* Description */}
              <div>
                <div className="text-xs font-mono text-slate-400 uppercase mb-1">Overview</div>
                <p className="text-sm text-slate-200 leading-relaxed">
                  {activeRepo.description}
                </p>
              </div>

              {/* Verified Key Modules & Services */}
              <div>
                <div className="text-xs font-mono text-[#00f5d4] uppercase mb-2">Verified Core Modules:</div>
                <div className="space-y-2">
                  {activeRepo.keyModules.map((mod, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-[#060a14] border border-[#1f2e4d] flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                    >
                      <span className="font-mono text-xs text-amber-300 font-semibold">
                        {mod.file}
                      </span>
                      <span className="text-xs text-slate-300">
                        {mod.desc}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Architecture Pipeline if available */}
              {activeRepo.architecture && (
                <div>
                  <div className="text-xs font-mono text-purple-400 uppercase mb-2">Architectural Blueprint:</div>
                  <div className="p-4 rounded-xl bg-[#060a14] border border-[#1f2e4d] space-y-2 font-mono text-xs text-slate-300">
                    <div><span className="text-[#00f5d4]">Layer 1 (Ingestion):</span> {activeRepo.architecture.layer1}</div>
                    <div><span className="text-[#00f5d4]">Layer 2 (Gateways):</span> {activeRepo.architecture.layer2}</div>
                    <div><span className="text-[#00f5d4]">Layer 3 (Services):</span> {activeRepo.architecture.layer3}</div>
                    <div><span className="text-[#00f5d4]">Layer 4 (Database):</span> {activeRepo.architecture.layer4}</div>
                    {activeRepo.architecture.layer5 && (
                      <div><span className="text-[#00f5d4]">Layer 5 (Clients):</span> {activeRepo.architecture.layer5}</div>
                    )}
                  </div>
                </div>
              )}

              {/* Clone Terminal Bar */}
              <div>
                <div className="text-xs font-mono text-slate-400 uppercase mb-1.5">Clone Repository:</div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-[#060a14] border border-[#1f2e4d]">
                  <code className="text-xs font-mono text-emerald-400 overflow-x-auto">
                    {activeRepo.cloneCmd}
                  </code>
                  <button
                    onClick={() => handleCopyClone(activeRepo)}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#101a30] hover:bg-[#1f2e4d] text-xs font-mono text-slate-200 transition-colors ml-3 whitespace-nowrap"
                  >
                    {copiedId === activeRepo.id ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedId === activeRepo.id ? "Copied" : "Copy"}</span>
                  </button>
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="bg-[#101a30] px-6 py-3 border-t border-[#1f2e4d] flex items-center justify-between">
              {activeRepo.liveUrl ? (
                <a
                  href={activeRepo.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-semibold text-purple-400 hover:text-purple-300"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Launch Live Platform ({activeRepo.liveUrl})</span>
                </a>
              ) : <div />}
              <a
                href={activeRepo.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[#00f5d4] to-[#3b82f6] text-slate-950 font-bold text-xs"
              >
                <Github className="w-4 h-4" />
                <span>Open on GitHub</span>
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
