import React, { useState } from 'react';
import { Cpu, Server, Database, Activity, Zap, ExternalLink, Github, Sparkles, Layers, ArrowUpRight, Code, ShieldCheck, Terminal, Check } from 'lucide-react';
import TiltCard from './UI/TiltCard';
import AnimatedCounter from './UI/AnimatedCounter';
import { sound } from '../utils/soundManager';

export default function BentoShowcase() {
  const [pmsView, setPmsView] = useState('overview'); // 'overview' or 'code'

  const pmsCodeSnippet = `// Rust 2024 (Axum 0.8 + Tokio Runtime)
pub async fn handle_adms_barrier_trigger(
    State(state): State<Arc<AppState>>,
    Query(params): Query<AdmsQuery>,
    body: String,
) -> Result<impl IntoResponse, AppError> {
    let scan = parse_zk_payload(&body)?;
    let rate = state.tariff.calculate_fare(scan.duration).await?;
    state.gate_service.open_barrier(scan.gate_id).await?;
    Ok(StatusCode::OK)
}`;

  return (
    <section id="bento" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0b1222] border border-[#1f2e4d] text-xs font-mono text-[#00f5d4] mb-3 shadow-md">
          <Layers className="w-3.5 h-3.5" />
          <span>Modular Bento Grid Ecosystem</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Architectural <span className="cyber-gradient-text">Bento Showcase</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto mt-2 font-normal">
          A high-density visual breakdown of flagship systems, sub-millisecond edge telemetry, and verified commercial platforms.
        </p>
      </div>

      {/* Asymmetric Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        
        {/* BENTO TILE 1: Flagship System (PMS-V2) — Large 2x2 Span */}
        <TiltCard
          maxTilt={5}
          spotlightColor="rgba(0, 245, 212, 0.14)"
          className="md:col-span-2 lg:col-span-2 lg:row-span-2"
          innerClassName="p-6 sm:p-8 flex flex-col justify-between h-full"
        >
          <div>
            {/* Top Status & View Toggles */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
              <div className="flex items-center gap-2.5">
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-[11px] font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>FLAGSHIP SYSTEM</span>
                </span>
                <span className="text-xs font-mono text-slate-400">Rust 2024 • Axum • SeaORM</span>
              </div>

              {/* In-Card Overview vs Code Switcher with Guaranteed Clickability */}
              <div className="inline-flex items-center p-1 rounded-xl bg-[#060a14] border border-[#1f2e4d] text-xs font-mono relative z-20">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setPmsView('overview');
                    sound.playClick();
                  }}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg cursor-pointer transition-all ${
                    pmsView === 'overview'
                      ? 'bg-[#101a30] text-[#00f5d4] font-bold border border-[#1f2e4d] shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Layers className="w-3 h-3 pointer-events-none" />
                  <span className="pointer-events-none">Overview</span>
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setPmsView('code');
                    sound.playClick();
                  }}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg cursor-pointer transition-all ${
                    pmsView === 'code'
                      ? 'bg-[#101a30] text-[#00f5d4] font-bold border border-[#1f2e4d] shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Code className="w-3 h-3 pointer-events-none" />
                  <span className="pointer-events-none">Source Code</span>
                </button>
              </div>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 leading-tight tracking-tight">
              PMS-V2: Smart Parking Management System
            </h3>

            {pmsView === 'overview' ? (
              <div>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  High-concurrency parking architecture built with a zero-GC Rust Axum backend and reactive Flutter BLoC client. Handles multi-terminal cashier concurrency, real-time RTSP camera feeds, and ZKTeco ADMS barrier gate controllers with deterministic sub-millisecond response.
                </p>

                {/* Micro Metric Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-[#060a14] border border-[#1f2e4d] mb-6">
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Gate Latency</div>
                    <div className="text-xl font-bold font-mono text-[#00f5d4] mt-0.5">&lt; 1.8 ms</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Duplicate Scans</div>
                    <div className="text-xl font-bold font-mono text-emerald-400 mt-0.5">0% Collisions</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Memory Footprint</div>
                    <div className="text-xl font-bold font-mono text-blue-400 mt-0.5">&lt; 40 MB RSS</div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="mb-6">
                <div className="bg-[#060a14] p-4 rounded-xl border border-[#1f2e4d] overflow-x-auto">
                  <pre className="font-mono text-xs text-emerald-400 leading-relaxed">
                    <code>{pmsCodeSnippet}</code>
                  </pre>
                </div>
              </div>
            )}
          </div>

          <div className="pt-4 border-t border-[#1f2e4d]/60 flex flex-wrap items-center justify-between gap-3 relative z-20">
            <div className="flex flex-wrap gap-1.5">
              {["Rust 2024", "Axum 0.8", "Tokio", "SeaORM", "Flutter BLoC", "PostgreSQL"].map((t, i) => (
                <span key={i} className="tech-pill text-[11px]">{t}</span>
              ))}
            </div>

            {/* Guaranteed Clickable Pill Button for Repository */}
            <a
              href="https://github.com/mhcybroot/PMS-V2"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playClick()}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#060a14] border border-[#1f2e4d] hover:border-[#00f5d4]/60 text-xs font-mono font-semibold text-[#00f5d4] hover:shadow-md hover:shadow-[#00f5d4]/15 transition-all cursor-pointer"
            >
              <span>Repository</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </TiltCard>

        {/* BENTO TILE 2: Live Telemetry Pulse (1x1) */}
        <TiltCard
          maxTilt={8}
          spotlightColor="rgba(59, 130, 246, 0.15)"
          className="col-span-1"
          innerClassName="p-6 flex flex-col justify-between h-full"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">System Telemetry</span>
              <Activity className="w-4 h-4 text-blue-400 animate-pulse" />
            </div>
            <h4 className="text-lg font-bold text-white mb-1">Async Throughput</h4>
            <div className="font-mono text-3xl font-black text-blue-400 mb-2">
              <AnimatedCounter value="15400" /> <span className="text-sm font-normal text-slate-400">req/s</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Peak Tokio asynchronous socket capacity across distributed cashier gates.
            </p>
          </div>

          <div className="pt-4 border-t border-[#1f2e4d] flex items-center justify-between text-[11px] font-mono text-emerald-400">
            <span>● 99.98% Availability</span>
            <span>Zero GC Pauses</span>
          </div>
        </TiltCard>

        {/* BENTO TILE 3: Polyglot Distribution (1x1) */}
        <TiltCard
          maxTilt={8}
          spotlightColor="rgba(168, 85, 247, 0.15)"
          className="col-span-1"
          innerClassName="p-6 flex flex-col justify-between h-full"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">Tech Polyglot</span>
              <Code className="w-4 h-4 text-purple-400" />
            </div>
            <h4 className="text-lg font-bold text-white mb-3">Verified Languages</h4>
            
            <div className="space-y-2.5">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-amber-400">Java 21 (Spring)</span>
                <span className="font-semibold text-slate-300">35%</span>
              </div>
              <div className="flex justify-between text-xs font-mono">
                <span className="text-[#dea584]">Rust 2024 (Axum)</span>
                <span className="font-semibold text-slate-300">25%</span>
              </div>
              <div className="flex justify-between text-xs font-mono">
                <span className="text-blue-400">TypeScript / React</span>
                <span className="font-semibold text-slate-300">22%</span>
              </div>
              <div className="flex justify-between text-xs font-mono">
                <span className="text-cyan-400">Flutter / Dart</span>
                <span className="font-semibold text-slate-300">10%</span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-[#1f2e4d] text-[10px] font-mono text-slate-400 text-center">
            10 Production Repositories Audited
          </div>
        </TiltCard>

        {/* BENTO TILE 4: Enterprise HRMS & Biometric Ingestion (1x2 / col-span-1 lg:col-span-2) */}
        <TiltCard
          maxTilt={5}
          spotlightColor="rgba(245, 158, 11, 0.12)"
          className="md:col-span-2 lg:col-span-2"
          innerClassName="p-6 sm:p-8 flex flex-col justify-between h-full"
        >
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
              <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-[11px] font-semibold">
                ENTERPRISE ERP &amp; HRMS
              </span>
              <span className="text-xs font-mono text-slate-400">Java 21 • Spring Boot 3.4</span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">
              Skylink Enterprise HRMS &amp; Biometric Stream
            </h3>

            <p className="text-slate-300 text-sm leading-relaxed mb-5">
              Automated attendance extraction and multi-tier payroll calculation platform serving 50+ active daily employees. Native ZKTeco ADMS HTTP push stream listener cut monthly payroll processing turnaround from 3 days to under 5 minutes (<strong className="text-amber-400">98.6% faster</strong>).
            </p>
          </div>

          <div className="pt-4 border-t border-[#1f2e4d]/60 flex flex-wrap items-center justify-between gap-3 relative z-20">
            <div className="flex flex-wrap gap-1.5">
              {["Spring Boot 3.4", "ZKTeco ADMS", "OpenPDF", "Apache POI", "WebSockets", "JPA Criteria"].map((b, i) => (
                <span key={i} className="tech-pill text-[11px]">{b}</span>
              ))}
            </div>

            {/* Guaranteed Clickable Pill Button for Backend Repo */}
            <a
              href="https://github.com/mhcybroot/Skylink-custom-backend"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playClick()}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#060a14] border border-[#1f2e4d] hover:border-amber-400/60 text-xs font-mono font-semibold text-amber-400 hover:shadow-md hover:shadow-amber-400/15 transition-all cursor-pointer"
            >
              <span>View Backend Repo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </TiltCard>

        {/* BENTO TILE 5: Live Commercial Deployment Preview (1x1) */}
        <TiltCard
          maxTilt={8}
          spotlightColor="rgba(0, 245, 212, 0.15)"
          className="col-span-1"
          innerClassName="p-6 flex flex-col justify-between h-full"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">Live Client Platform</span>
              <ExternalLink className="w-4 h-4 text-[#00f5d4]" />
            </div>
            
            <h4 className="text-lg font-bold text-white mb-1.5">skylinkltd.ai</h4>
            <p className="text-xs text-slate-300 mb-4 leading-relaxed">
              Enterprise technology portal featuring GSAP scroll timelines, Framer Motion, and Tailwind CSS.
            </p>

            <div className="p-3 rounded-lg bg-[#060a14] border border-[#1f2e4d] text-[11px] font-mono text-[#00f5d4] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00f5d4] animate-pulse" />
              <span>HTTPS 200 OK • Live in Production</span>
            </div>
          </div>

          <div className="pt-4 border-t border-[#1f2e4d] flex items-center justify-between relative z-20">
            {/* Guaranteed Clickable Pill Button for Live Site */}
            <a
              href="https://skylinkltd.ai/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playClick()}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#060a14] border border-[#1f2e4d] hover:border-purple-400/60 text-xs font-mono font-semibold text-purple-400 hover:shadow-md hover:shadow-purple-400/15 transition-all cursor-pointer"
            >
              <span>Visit Website</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <span className="text-[10px] font-mono text-slate-500">React 18 / Vite</span>
          </div>
        </TiltCard>

      </div>

    </section>
  );
}
