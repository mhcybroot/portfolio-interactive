import React, { useState } from 'react';
import { Scale, Check, X, ShieldAlert, Cpu, Layers, Sparkles, ArrowRightLeft } from 'lucide-react';

export default function DecisionMatrix() {
  const [activeTab, setActiveTab] = useState(0);

  const decisions = [
    {
      title: "Edge Gate Concurrency: Rust (Axum/Tokio) vs Node.js",
      domain: "IoT & Parking Infrastructure",
      selected: "Rust 2024 (Axum + Tokio)",
      rejected: "Node.js (Express / Fastify)",
      selectedPros: [
        "Deterministic sub-millisecond execution with zero Garbage Collection pauses.",
        "Strict memory footprint (<40MB RSS) suitable for 24/7 edge mini-PCs.",
        "Compile-time memory safety preventing segmentation faults and concurrency race conditions."
      ],
      rejectedCons: [
        "V8 engine GC pauses can introduce unpredictable 20-100ms latency spikes during barrier triggering.",
        "High memory overhead (200MB+) over long continuous runtime.",
        "Node event loop bottlenecks under dense asynchronous TCP/RTSP camera socket streams."
      ],
      summary: "For physical barrier gates and cashier terminals where hardware failure blocks traffic, Rust provides unmatched determinism and reliability."
    },
    {
      title: "Enterprise ERP Engine: Java 21 Spring Boot vs Express.js",
      domain: "Enterprise HRMS & Payroll",
      selected: "Java 21 (Spring Boot 3.4)",
      rejected: "Node.js (Express.js / NestJS)",
      selectedPros: [
        "Spring Security 6 provides robust Role-Based Access Control (RBAC) across financial and payroll endpoints.",
        "JPA Criteria Specifications enable type-safe, multi-parameter dynamic reporting without SQL injection risks.",
        "Rich mature reporting ecosystem (OpenPDF, Apache POI) for legally binding server-rendered pay slips."
      ],
      rejectedCons: [
        "Express requires stitching together dozens of disparate third-party libraries for auth, ORM, and validation.",
        "Lack of standardized multi-tenancy and transactional rollback mechanisms in light JS backends."
      ],
      summary: "Spring Boot’s battle-tested transactional integrity and enterprise security make it the optimal choice for payroll and personnel data."
    },
    {
      title: "Cashier Desktop UI: Flutter BLoC vs Electron",
      domain: "Multi-Terminal Cashier Software",
      selected: "Flutter (BLoC Clean Architecture)",
      rejected: "Electron (Chromium Desktop)",
      selectedPros: [
        "Compiles directly to native C++ machine code on Windows/Linux with instant bootup.",
        "BLoC pattern strictly enforces unidirectional state flow, preventing UI state desynchronization.",
        "Lightweight (<80MB RAM vs 500MB+ for Electron instances)."
      ],
      rejectedCons: [
        "Electron bundles full Chromium and Node runtimes, causing heavy CPU/RAM consumption on low-cost POS terminals.",
        "Complex IPC bridge communication for direct hardware barcode and receipt printer communication."
      ],
      summary: "Flutter provides near-instant native responsiveness and rock-solid state isolation on dedicated hardware."
    },
    {
      title: "Client 3D Showcases: React 19 + Three.js vs 2D DOM",
      domain: "Modern Web Deployments",
      selected: "React 19 + Three.js / React Three Fiber",
      rejected: "Traditional 2D DOM Templates",
      selectedPros: [
        "Interactive WebGL canvas increases user engagement and time-on-page by 300%+.",
        "Declarative 3D scene composition via React Three Fiber matches component-driven architecture.",
        "Optimized GPU rendering maintaining 60 FPS across desktop and mobile browsers."
      ],
      rejectedCons: [
        "Traditional 2D templates fail to deliver high-converting spatial and product visualization for real estate/IoT clients."
      ],
      summary: "Incorporating Three.js elevates client websites from static brochures to memorable interactive digital products."
    }
  ];

  return (
    <section id="decision-matrix" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0d1527] border border-[#1f2e4d] text-xs font-mono text-purple-400 mb-3">
          <Scale className="w-3.5 h-3.5" />
          <span>Engineering Trade-Offs</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          Architectural <span className="cyber-gradient-text">Decision Matrix</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto mt-2">
          Senior engineering is defined by making the right technical trade-offs for real-world business constraints.
        </p>
      </div>

      {/* Decision Selector Tabs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {decisions.map((dec, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTab(idx)}
            className={`p-3.5 rounded-xl text-left transition-all border ${
              activeTab === idx
                ? 'bg-[#121d36] border-[#00f5d4] shadow-lg shadow-[#00f5d4]/10 scale-[1.02]'
                : 'bg-[#0d1527]/70 border-[#1f2e4d] hover:border-slate-500 text-slate-400'
            }`}
          >
            <div className="text-[10px] font-mono text-[#00f5d4] mb-1">
              Case 0{idx + 1} // {dec.domain}
            </div>
            <div className={`text-xs font-bold ${activeTab === idx ? 'text-white' : 'text-slate-300'} line-clamp-2`}>
              {dec.title}
            </div>
          </button>
        ))}
      </div>

      {/* Active Comparison Matrix */}
      <div className="glass-card rounded-2xl p-6 sm:p-8 border border-[#1f2e4d]">
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
          {decisions[activeTab].title}
        </h3>
        <p className="text-xs font-mono text-slate-400 mb-6">
          Domain: {decisions[activeTab].domain}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          
          {/* Selected Approach */}
          <div className="p-5 rounded-xl bg-[#080d1a] border border-emerald-500/30">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm mb-3">
              <Check className="w-4 h-4 text-emerald-400" />
              <span>Chosen Stack: {decisions[activeTab].selected}</span>
            </div>
            <ul className="space-y-2">
              {decisions[activeTab].selectedPros.map((pro, pIdx) => (
                <li key={pIdx} className="text-xs text-slate-300 flex items-start gap-2 leading-relaxed">
                  <span className="text-emerald-400 font-bold mt-0.5">✔</span>
                  <span>{pro}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Rejected Approach */}
          <div className="p-5 rounded-xl bg-[#080d1a] border border-red-500/20">
            <div className="flex items-center gap-2 text-red-400 font-bold text-sm mb-3">
              <X className="w-4 h-4 text-red-400" />
              <span>Alternative Considered: {decisions[activeTab].rejected}</span>
            </div>
            <ul className="space-y-2">
              {decisions[activeTab].rejectedCons.map((con, cIdx) => (
                <li key={cIdx} className="text-xs text-slate-300 flex items-start gap-2 leading-relaxed">
                  <span className="text-red-400 font-bold mt-0.5">✘</span>
                  <span>{con}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Strategic Takeaway */}
        <div className="p-4 rounded-xl bg-[#121d36] border border-[#1f2e4d] flex items-center gap-3">
          <Sparkles className="w-5 h-5 text-[#00f5d4] flex-shrink-0" />
          <div className="text-xs sm:text-sm text-slate-200">
            <strong className="text-white font-mono">Senior Engineering Takeaway:</strong> {decisions[activeTab].summary}
          </div>
        </div>

      </div>

    </section>
  );
}
