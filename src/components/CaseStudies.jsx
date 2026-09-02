import React, { useState } from 'react';
import { BookOpen, ShieldCheck, Zap, ArrowRight, CheckCircle2, ChevronRight, X, Layers, Cpu, Database, Server } from 'lucide-react';

export default function CaseStudies() {
  const [selectedCase, setSelectedCase] = useState(null);

  const caseStudies = [
    {
      id: "pms-v2",
      title: "Smart Parking Infrastructure: High-Concurrency Rust & Edge IoT Architecture",
      subtitle: "Eliminating vehicle gate latency and race conditions across multi-terminal parking facilities.",
      category: "Systems & IoT Architecture",
      image: "/images/pms-smart-parking.jpg",
      badgeText: "Live Edge Hardware",
      metrics: [
        { label: "Gate Response Latency", value: "< 1.8 ms", desc: "Zero GC pauses" },
        { label: "Duplicate Scans", value: "0%", desc: "Hardware debounce" },
        { label: "Uptime Across Gates", value: "99.98%", desc: "24/7 Edge deployment" },
      ],
      problem: "Traditional commercial parking systems in Bangladesh suffered from severe bottlenecks: slow gate response times (>3s), ticket collision across multi-cashier terminals during peak hours, and duplicate scans from impatient drivers causing data corruption.",
      constraints: "The edge hardware (low-power mini PCs and gate controllers) had strict memory limits and needed to run 24/7 without memory leaks. Network connectivity between cashier gates and the central database had to handle sudden disconnects gracefully.",
      tradeoffs: [
        {
          decision: "Rust (Axum + Tokio) over Node.js / Python",
          rationale: "Rust's zero-cost abstractions and lack of a Garbage Collector guarantee deterministic, sub-millisecond response times for gate barrier triggering. Memory usage stays strictly under 40MB."
        },
        {
          decision: "SeaORM Async Connection Pooling over Synchronous Drivers",
          rationale: "Enabled non-blocking asynchronous PostgreSQL transactions across multiple concurrent cashier terminals without thread starvation."
        },
        {
          decision: "Flutter (BLoC) over Web/Electron for Cashier Terminals",
          rationale: "Compiled to native machine code on Windows, reducing memory footprint by 80% compared to Chromium-based Electron apps while maintaining real-time reactive state."
        }
      ],
      architectureFlow: [
        "Vehicle triggers ZKTeco sensor / Barcode scanner at Gate Terminal",
        "Raw HTTP ADMS packet / RTSP video stream captured by zk_adms_service.rs",
        "Tokio async runtime validates anti-passback rule and computes duration tariff",
        "SeaORM executes atomic transaction in PostgreSQL connection pool",
        "Instant barrier open command dispatched + live BLoC UI state updated"
      ],
      impact: "Achieved instantaneous sub-millisecond gate barrier response, eliminated 100% of duplicate ticket collisions, and enabled seamless multi-terminal synchronization across commercial parking lanes."
    },
    {
      id: "skylink-hrms",
      title: "Enterprise ERP & Biometric Stream Ingestion Engine",
      subtitle: "Automating attendance and multi-tier payroll calculations for 50+ enterprise staff.",
      category: "Enterprise Full-Stack Architecture",
      image: "/images/database-cluster.jpg",
      badgeText: "High-Throughput ACID Core",
      metrics: [
        { label: "Payroll Processing Time", value: "98.6% ↓", desc: "3 days → 5 minutes" },
        { label: "Manual Calculation Errors", value: "0", desc: "Automated JPA engine" },
        { label: "Daily Active Staff", value: "50+", desc: "Real-time sync" },
      ],
      problem: "Company attendance was manually exported from ZKTeco biometric terminals via USB drives and reconciled on spreadsheets. This manual workflow took 3 full business days each month, was prone to human calculation errors, and created delays in staff payroll disbursements.",
      constraints: "Had to integrate directly with existing ZKTeco biometric hardware without purchasing expensive proprietary vendor cloud licenses. The server needed to support dynamic work shifts, holiday overrides, and custom role permissions (RBAC).",
      tradeoffs: [
        {
          decision: "Native ADMS HTTP Push Listener over Socket Polling",
          rationale: "Rather than polling the devices every few seconds (which saturated the office LAN), we engineered a push listener (AdmsService.java) that receives real-time attendance events the moment a finger is scanned."
        },
        {
          decision: "Spring Data JPA Criteria Specifications over Static Queries",
          rationale: "Allowed dynamic multi-parameter filtering (department, role, shift date ranges) without writing fragile concatenated SQL queries."
        },
        {
          decision: "OpenPDF + Apache POI Integration over Client-side Rendering",
          rationale: "Server-side PDF and Excel generation ensured consistent, verifiable legal pay slips and audit reports that cannot be tampered with in the browser."
        }
      ],
      architectureFlow: [
        "Employee scans fingerprint/RFID on on-premise ZKTeco terminal",
        "Terminal sends real-time HTTP POST payload to /iclock/cdata",
        "AdmsService.java parses payload, validates employee ID, and updates shift logs",
        "WebSocket broadcast updates administrative live monitoring dashboard",
        "Payroll computation engine dynamically applies deductions, bonuses, and generates PDF slips"
      ],
      impact: "Reduced monthly payroll calculation turnaround from 3 days to under 5 minutes, completely eliminated attendance discrepancies, and provided management with instant geospatial crew visibility."
    }
  ];

  return (
    <section id="case-studies" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0d1527] border border-[#1f2e4d] text-xs font-mono text-[#00f5d4] mb-3">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Deep-Dive Engineering Analysis</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          Architectural <span className="cyber-gradient-text">Case Studies</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto mt-2">
          Evidence of senior engineering judgment: Problem scoping, constraint mapping, architectural trade-offs, and measurable business outcomes.
        </p>
      </div>

      {/* Case Study Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {caseStudies.map((study) => (
          <div
            key={study.id}
            className="glass-card rounded-2xl overflow-hidden border border-[#1f2e4d] flex flex-col justify-between glass-card-hover group"
          >
            {/* Visual Header Banner */}
            <div className="relative h-48 sm:h-56 w-full overflow-hidden border-b border-[#1f2e4d]">
              <img
                src={study.image}
                alt={study.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1222] via-[#0b1222]/40 to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#080d1a]/90 backdrop-blur-md text-[#00f5d4] border border-[#00f5d4]/40 shadow-md">
                  {study.category}
                </span>
                <span className="text-[10px] font-mono text-slate-300 bg-[#060a14]/85 px-2.5 py-1 rounded-md border border-[#1f2e4d]">
                  {study.badgeText}
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-[#00f5d4] transition-colors mb-2 leading-snug">
                  {study.title}
                </h3>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                  {study.subtitle}
                </p>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-3 gap-2.5 p-3.5 rounded-xl bg-[#080d1a] border border-[#1f2e4d] mb-6">
                  {study.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="text-center">
                      <div className="font-mono text-base sm:text-lg font-extrabold text-[#00f5d4]">
                        {m.value}
                      </div>
                      <div className="text-[10px] font-semibold text-slate-200 mt-0.5">{m.label}</div>
                      <div className="text-[9px] font-mono text-slate-400">{m.desc}</div>
                    </div>
                  ))}
                </div>

                {/* The Problem & Solution Snippet */}
                <div className="space-y-3 text-xs text-slate-300 leading-relaxed">
                  <div>
                    <strong className="text-red-400 font-mono">The Problem:</strong> {study.problem.substring(0, 160)}...
                  </div>
                  <div>
                    <strong className="text-emerald-400 font-mono">The Impact:</strong> {study.impact.substring(0, 160)}...
                  </div>
                </div>
              </div>

              {/* Read Full Case Study Button */}
              <div className="pt-6 mt-6 border-t border-[#1f2e4d]/60">
                <button
                  type="button"
                  onClick={() => setSelectedCase(study)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#121d36] hover:bg-[#1f2e4d] border border-[#1f2e4d] hover:border-[#00f5d4]/40 text-xs font-bold text-white transition-all group-hover:text-[#00f5d4] cursor-pointer"
                >
                  <span>Read Full Engineering Breakdown</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        ))}
      </div>

      {/* Case Study Deep-Dive Modal */}
      {selectedCase && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="w-full max-w-4xl bg-[#0d1527] border border-[#1f2e4d] rounded-2xl shadow-2xl shadow-[#00f5d4]/10 overflow-hidden flex flex-col max-h-[88vh]">
            
            {/* Modal Header */}
            <div className="bg-[#121d36] px-6 py-4 border-b border-[#1f2e4d] flex items-center justify-between">
              <div>
                <span className="text-xs font-mono text-[#00f5d4] uppercase tracking-wider">
                  Case Study // {selectedCase.category}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white mt-0.5">
                  {selectedCase.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedCase(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-[#080d1a] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-slate-300 text-xs sm:text-sm leading-relaxed">
              
              {/* Visual Cover in Modal */}
              <div className="rounded-xl overflow-hidden border border-[#1f2e4d] max-h-64">
                <img
                  src={selectedCase.image}
                  alt={selectedCase.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Metrics Showcase */}
              <div className="grid grid-cols-3 gap-4 p-4 rounded-xl bg-[#080d1a] border border-[#1f2e4d]">
                {selectedCase.metrics.map((m, idx) => (
                  <div key={idx} className="text-center">
                    <div className="font-mono text-xl sm:text-2xl font-black text-[#00f5d4]">
                      {m.value}
                    </div>
                    <div className="text-xs font-semibold text-white mt-1">{m.label}</div>
                    <div className="text-[11px] font-mono text-slate-400">{m.desc}</div>
                  </div>
                ))}
              </div>

              {/* The Business Problem */}
              <div>
                <h4 className="text-sm font-bold text-red-400 uppercase font-mono tracking-wider mb-2 flex items-center gap-2">
                  <span>1. The Business Problem &amp; Pain Points</span>
                </h4>
                <p className="bg-[#080d1a] p-4 rounded-xl border border-red-500/20 text-slate-200">
                  {selectedCase.problem}
                </p>
              </div>

              {/* Constraints */}
              <div>
                <h4 className="text-sm font-bold text-amber-400 uppercase font-mono tracking-wider mb-2 flex items-center gap-2">
                  <span>2. Operational Constraints</span>
                </h4>
                <p className="bg-[#080d1a] p-4 rounded-xl border border-amber-500/20 text-slate-200">
                  {selectedCase.constraints}
                </p>
              </div>

              {/* Architectural Trade-offs */}
              <div>
                <h4 className="text-sm font-bold text-[#00f5d4] uppercase font-mono tracking-wider mb-3 flex items-center gap-2">
                  <span>3. Architectural Decisions &amp; Trade-Offs</span>
                </h4>
                <div className="space-y-3">
                  {selectedCase.tradeoffs.map((t, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-[#080d1a] border border-[#1f2e4d]">
                      <div className="font-bold text-white text-xs sm:text-sm mb-1 text-cyan-300">
                        Decision: {t.decision}
                      </div>
                      <p className="text-slate-300 text-xs">
                        {t.rationale}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* End-to-End System Flow */}
              <div>
                <h4 className="text-sm font-bold text-purple-400 uppercase font-mono tracking-wider mb-3 flex items-center gap-2">
                  <span>4. Execution &amp; Pipeline Flow</span>
                </h4>
                <div className="p-4 rounded-xl bg-[#080d1a] border border-[#1f2e4d] space-y-2">
                  {selectedCase.architectureFlow.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 font-mono text-xs text-slate-300">
                      <span className="text-[#00f5d4] font-bold">[{idx + 1}]</span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quantifiable Impact */}
              <div>
                <h4 className="text-sm font-bold text-emerald-400 uppercase font-mono tracking-wider mb-2 flex items-center gap-2">
                  <span>5. Verified Business Impact</span>
                </h4>
                <p className="bg-[#080d1a] p-4 rounded-xl border border-emerald-500/20 text-slate-200 font-medium">
                  {selectedCase.impact}
                </p>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="bg-[#121d36] px-6 py-3.5 border-t border-[#1f2e4d] flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedCase(null)}
                className="px-5 py-2 rounded-xl bg-gradient-to-r from-[#00f5d4] to-[#3b82f6] text-slate-950 font-bold text-xs cursor-pointer"
              >
                Close Case Study
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
