import React, { useState } from 'react';
import { Cpu, Server, Database, Monitor, ShieldCheck, ArrowRight, Activity, Radio, Video, Zap, Network, ExternalLink } from 'lucide-react';

export default function ArchitectureFlow() {
  const [activeStep, setActiveStep] = useState(2); // Default to Core Backend

  const stages = [
    {
      id: 0,
      title: "1. Edge & Hardware Layer",
      icon: Cpu,
      badge: "Physical Edge",
      color: "from-amber-500 to-orange-500",
      image: "/images/biometric-scan.jpg",
      description: "On-premise biometric controllers, video feeds, and barcode terminals capturing live transactions.",
      technologies: ["ZKTeco Biometric Devices", "IP CCTV Cameras (RTSP/HTTP)", "Barcode Scanners", "PoE Network Infrastructure"],
      codeSnippet: `// Edge Protocol Capture
POST /iclock/cdata?SN=ZK98234&table=ATTLOG
Content-Type: text/plain
101\t2026-09-01 08:30:15\t1\t1\t0\t0`
    },
    {
      id: 1,
      title: "2. Protocol Ingestion Gateways",
      icon: Radio,
      badge: "Protocol Handler",
      color: "from-purple-500 to-indigo-500",
      image: "/images/network-routing-gateway.jpg",
      description: "High-throughput listeners decoding ADMS HTTP push streams, RTSP video proxies, and REST webhooks.",
      technologies: ["AdmsService.java (Spring Boot)", "zk_adms_service.rs (Rust)", "cctv_service.rs (RTSP Video)", "Frigate AI Webhooks"],
      codeSnippet: `// Rust Axum ADMS Ingestion Handler
pub async fn handle_adms_push(
    Query(params): Query<AdmsQuery>,
    body: String
) -> impl IntoResponse {
    let punches = parse_adms_payload(&body);
    ticket_service::process_batch(punches).await
}`
    },
    {
      id: 2,
      title: "3. Core Backend Engines",
      icon: Server,
      badge: "Async Core",
      color: "from-[#00f5d4] to-blue-500",
      image: "/images/tokio-async-concurrency.jpg",
      description: "Concurrent async business logic engines for tariff calculations, payroll rules, RBAC, and WebSocket event broadcasts.",
      technologies: ["Rust 2024 (Axum 0.8 + Tokio)", "Java 21 (Spring Boot 3.4)", "Spring Security 6 (JWT + Argon2)", "WebSockets / Web Push"],
      codeSnippet: `// Concurrency & Tariff Calculator (SeaORM)
let duration = (exit_time - entry_time).num_seconds();
let rate = category_service::get_rate(&category_id).await?;
let total_fee = calculate_dynamic_fare(duration, rate);`
    },
    {
      id: 3,
      title: "4. Data Persistence & Cache",
      icon: Database,
      badge: "ACID Storage",
      color: "from-emerald-400 to-teal-500",
      image: "/images/database-cluster.jpg",
      description: "Optimized relational database storage, dynamic JPA Criteria Specifications, and async connection pooling.",
      technologies: ["PostgreSQL", "SeaORM (sqlx-postgres)", "Spring Data JPA / Hibernate", "H2 Embedded Test DB"],
      codeSnippet: `// JPA Specification Dynamic Filter
public static Specification<PaymentRequest> filterByDept(String dept) {
    return (root, query, cb) -> cb.equal(root.get("department"), dept);
}`
    },
    {
      id: 4,
      title: "5. Real-Time Presentation Clients",
      icon: Monitor,
      badge: "Reactive UI",
      color: "from-pink-500 to-rose-500",
      image: "/images/flutter-mobile-app.jpg",
      description: "Interactive single-page applications and desktop cashiers receiving real-time state updates.",
      technologies: ["React 19 & TypeScript", "Flutter (BLoC Clean Architecture)", "Three.js 3D Viewports", "Tailwind CSS v4"],
      codeSnippet: `// Flutter BLoC Real-Time Occupancy State
on<UpdateOccupancyEvent>((event, emit) {
  emit(SlotOccupiedState(slotId: event.id, vehicle: event.plate));
});`
    }
  ];

  return (
    <section id="architecture" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0d1527] border border-[#1f2e4d] text-xs font-mono text-[#00f5d4] mb-3">
          <Zap className="w-3.5 h-3.5" />
          <span>System Design &amp; Flow</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          Edge-to-Cloud <span className="cyber-gradient-text">Architecture Pipeline</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto mt-2">
          How real edge IoT hardware, high-concurrency Rust/Java backends, and reactive clients connect end-to-end.
        </p>
      </div>

      {/* Visual Distributed Microservices Topology Master Banner */}
      <div className="glass-card rounded-2xl overflow-hidden border border-[#1f2e4d] mb-10 relative shadow-2xl group">
        <div className="relative h-64 sm:h-72 md:h-80 w-full overflow-hidden">
          <img
            src="/images/microservices-topology.jpg"
            alt="Distributed Microservices Mesh & Interconnected Cloud Nodes"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060a14] via-[#060a14]/30 to-transparent" />
          
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
            <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[#00f5d4] border border-[#00f5d4]/40 shadow-lg flex items-center gap-1.5">
              <Network className="w-3.5 h-3.5 text-[#00f5d4]" />
              <span>GLOBAL DISTRIBUTED TOPOLOGY</span>
            </span>
            <span className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-[#080d1a]/80 backdrop-blur-md text-emerald-400 border border-emerald-500/30">
              ● Multi-Tier Edge to Cloud
            </span>
          </div>

          <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2">
            <div className="bg-black/80 backdrop-blur-md px-3.5 py-2 rounded-xl border border-[#1f2e4d]">
              <span className="text-[10px] font-mono uppercase text-slate-400 block">Mesh Architecture</span>
              <span className="text-xs sm:text-sm font-bold text-white font-mono">
                Interconnected Asynchronous Edge Nodes &amp; PostgreSQL Shards
              </span>
            </div>
            <span className="text-xs font-mono text-cyan-300 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-cyan-500/30">
              Sub-1.8ms Ingestion Latency
            </span>
          </div>
        </div>
      </div>

      {/* Interactive Step Navigator */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-2.5 mb-8">
        {stages.map((stage) => {
          const Icon = stage.icon;
          const isActive = activeStep === stage.id;
          return (
            <button
              key={stage.id}
              type="button"
              onClick={() => setActiveStep(stage.id)}
              className={`p-3.5 rounded-xl text-left transition-all border cursor-pointer ${
                isActive
                  ? 'bg-[#121d36] border-[#00f5d4] shadow-lg shadow-[#00f5d4]/10 scale-[1.02]'
                  : 'bg-[#0d1527]/70 border-[#1f2e4d] hover:border-slate-500 text-slate-400'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className={`p-2 rounded-lg bg-gradient-to-tr ${stage.color} text-slate-950`}>
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#080d1a] border border-[#1f2e4d] text-slate-300">
                  {stage.badge}
                </span>
              </div>
              <div className={`text-xs font-bold ${isActive ? 'text-white' : 'text-slate-300'}`}>
                {stage.title}
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Stage Deep-Dive Card */}
      <div className="glass-card rounded-2xl p-6 sm:p-8 border border-[#1f2e4d]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Details & Tech Stack (6 Cols) */}
          <div className="lg:col-span-6">
            <div className="inline-block px-3 py-1 rounded-md bg-[#080d1a] border border-[#1f2e4d] text-xs font-mono text-[#00f5d4] mb-3">
              Active Pipeline Stage {activeStep + 1} of 5
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">
              {stages[activeStep].title}
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              {stages[activeStep].description}
            </p>

            <div className="space-y-3">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                Integrated Technologies &amp; Protocols:
              </div>
              <div className="flex flex-wrap gap-2">
                {stages[activeStep].technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-[#080d1a] border border-[#1f2e4d] text-xs font-medium text-slate-200"
                  >
                    ✔ {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Stage Image & Code Snippet (6 Cols) */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Stage Visual Image Preview with Generous Height */}
            <div className="rounded-xl overflow-hidden border border-[#1f2e4d] relative h-48 sm:h-56 w-full shadow-lg group">
              <img
                src={stages[activeStep].image}
                alt={stages[activeStep].title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080d1a] via-[#080d1a]/30 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-black/80 backdrop-blur-md text-[#00f5d4] border border-[#00f5d4]/40">
                  {stages[activeStep].badge}
                </span>
                <span className="text-[10px] font-mono text-slate-300 bg-black/70 px-2.5 py-1 rounded border border-[#1f2e4d]">
                  Live Architectural Node
                </span>
              </div>
            </div>

            {/* Code Snippet Box */}
            <div className="bg-[#080d1a] rounded-xl border border-[#1f2e4d] overflow-hidden shadow-xl">
              <div className="bg-[#0d1527] px-4 py-2 border-b border-[#1f2e4d] flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="text-[#00f5d4]">implementation_snapshot</span>
                <span>Verified Module</span>
              </div>
              <pre className="p-4 font-mono text-xs text-emerald-400 overflow-x-auto leading-relaxed">
                <code>{stages[activeStep].codeSnippet}</code>
              </pre>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
