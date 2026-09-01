import React, { useState } from 'react';
import { Server, Layout, Cpu, Network, ShieldCheck, Code, Sparkles, Terminal } from 'lucide-react';
import { skillsCategories } from '../data/portfolioData';

export default function PolyglotMatrix() {
  const [activeCategory, setActiveCategory] = useState(0);

  const iconMap = {
    Server: Server,
    Layout: Layout,
    Cpu: Cpu,
    Network: Network
  };

  const polyglotBreakdown = [
    { lang: "Java 21", usage: "35%", color: "bg-amber-500", desc: "Spring Boot 3.4/4.0, Spring Security, JPA Criteria, POI, OpenPDF" },
    { lang: "Rust 2024", usage: "25%", color: "bg-[#dea584]", desc: "Axum 0.8, Tokio async runtime, SeaORM, Argon2, JWT" },
    { lang: "TypeScript / React 19", usage: "22%", color: "bg-blue-500", desc: "Modern SPAs, Three.js 3D WebGL, Framer Motion, GSAP" },
    { lang: "Dart / Flutter", usage: "10%", color: "bg-cyan-400", desc: "Cross-platform cashier terminals with BLoC Clean Architecture" },
    { lang: "PostgreSQL & SQL", usage: "8%", color: "bg-indigo-400", desc: "Schema design, ACID transactions, migrations, indexing" }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0d1527] border border-[#1f2e4d] text-xs font-mono text-[#00f5d4] mb-3">
          <Code className="w-3.5 h-3.5" />
          <span>Technical Competencies</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          Polyglot & Systems <span className="cyber-gradient-text">Matrix</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto mt-2">
          Balanced expertise across systems-level concurrency, enterprise web frameworks, and edge IoT protocols.
        </p>
      </div>

      {/* Polyglot Codebase Distribution Bar */}
      <div className="glass-card rounded-2xl p-6 border border-[#1f2e4d] mb-12">
        <div className="flex items-center justify-between mb-3">
          <div className="text-xs font-mono text-slate-300 font-semibold uppercase tracking-wider">
            Verified Production Codebase Distribution:
          </div>
          <span className="text-[11px] font-mono text-emerald-400">10 Repositories Audited</span>
        </div>

        {/* Segmented Progress Bar */}
        <div className="h-3 w-full rounded-full bg-[#080d1a] overflow-hidden flex mb-4 border border-[#1f2e4d]">
          {polyglotBreakdown.map((item, idx) => (
            <div
              key={idx}
              className={`${item.color} h-full transition-all`}
              style={{ width: item.usage }}
              title={`${item.lang}: ${item.usage}`}
            />
          ))}
        </div>

        {/* Legend */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 pt-2">
          {polyglotBreakdown.map((item, idx) => (
            <div key={idx} className="p-2.5 rounded-xl bg-[#080d1a] border border-[#1f2e4d]">
              <div className="flex items-center gap-2 mb-1">
                <span className={`w-2.5 h-2.5 rounded-full ${item.color}`} />
                <span className="text-xs font-bold text-white">{item.lang}</span>
                <span className="text-[10px] font-mono text-slate-400 ml-auto">{item.usage}</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-tight">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Categorized Skills Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillsCategories.map((cat, idx) => {
          const Icon = iconMap[cat.icon] || Server;
          return (
            <div
              key={idx}
              className="glass-card rounded-2xl p-6 border border-[#1f2e4d] flex flex-col justify-between glass-card-hover"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2.5 rounded-xl bg-gradient-to-tr ${cat.color} text-slate-950 shadow-md`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white">
                    {cat.category}
                  </h3>
                </div>

                <div className="space-y-3">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx}>
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="text-slate-200 font-medium">{skill.name}</span>
                        <span className="font-mono text-[11px] text-slate-400">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 w-full rounded-full bg-[#080d1a] overflow-hidden">
                        <div
                          className={`h-full rounded-full bg-gradient-to-r ${cat.color}`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          );
        })}
      </div>

    </section>
  );
}
