import React, { useState } from 'react';
import { Play, RotateCcw, Check, Sparkles, Cpu, Server, Database, Monitor, ShieldCheck, ArrowRight, Video } from 'lucide-react';
import { sound } from '../utils/soundManager';

export default function InteractiveSimulator() {
  const [activeTab, setActiveTab] = useState('parking'); // 'parking' or 'biometric'
  const [isRunning, setIsRunning] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [simLog, setSimLog] = useState([]);

  const runSimulation = () => {
    if (isRunning) return;
    setIsRunning(true);
    setCurrentStep(1);
    setSimLog([]);
    sound.playClick();

    if (activeTab === 'parking') {
      const steps = [
        { step: 1, text: "[EDGE] Plate DHA-METRO-5421 detected at Gate-01 RTSP Camera." },
        { step: 2, text: "[GATEWAY] Rust Axum `zk_adms_service.rs` ingested scan packet in 0.8ms." },
        { step: 3, text: "[ENGINE] Tokio async executor validated anti-passback & computed tariff ($0.00 entry grace)." },
        { step: 4, text: "[DB] SeaORM committed ticket record #84920 to PostgreSQL connection pool." },
        { step: 5, text: "[CLIENT] Barrier OPEN signal dispatched + Flutter BLoC Slot A-14 marked OCCUPIED." }
      ];

      steps.forEach((s, idx) => {
        setTimeout(() => {
          setCurrentStep(s.step);
          setSimLog((prev) => [...prev, s.text]);
          sound.playClick();
          if (idx === steps.length - 1) {
            setIsRunning(false);
            sound.playChime();
          }
        }, (idx + 1) * 700);
      });
    } else {
      const steps = [
        { step: 1, text: "[EDGE] Biometric Fingerprint scan verified on ZKTeco Device SN:ZK98234 (User #104)." },
        { step: 2, text: "[GATEWAY] HTTP POST /iclock/cdata payload parsed by Spring Boot `AdmsService.java`." },
        { step: 3, text: "[ENGINE] Shift lifecycle service matched dynamic Morning Shift (09:00 - 18:00)." },
        { step: 4, text: "[DB] Spring Data JPA saved attendance entity with timestamp 2026-09-01 08:58:12." },
        { step: 5, text: "[BROADCAST] WebSocket pushed instant attendance alert to Admin React Dashboard." }
      ];

      steps.forEach((s, idx) => {
        setTimeout(() => {
          setCurrentStep(s.step);
          setSimLog((prev) => [...prev, s.text]);
          sound.playClick();
          if (idx === steps.length - 1) {
            setIsRunning(false);
            sound.playChime();
          }
        }, (idx + 1) * 700);
      });
    }
  };

  const resetSimulation = () => {
    setIsRunning(false);
    setCurrentStep(0);
    setSimLog([]);
    sound.playClick();
  };

  return (
    <section id="simulator" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0d1527] border border-[#1f2e4d] text-xs font-mono text-[#00f5d4] mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Live Interactive Sandbox</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          Interactive <span className="cyber-gradient-text">Systems Simulator</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto mt-2">
          Test real-time packet transmission across edge hardware, async ingestion gateways, and database pipelines.
        </p>
      </div>

      <div className="glass-card rounded-2xl p-6 sm:p-8 border border-[#1f2e4d]">
        
        {/* Simulator Selector Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-[#1f2e4d]">
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setActiveTab('parking');
                resetSimulation();
              }}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                activeTab === 'parking'
                  ? 'bg-gradient-to-r from-[#00f5d4] to-[#3b82f6] text-slate-950 font-bold'
                  : 'bg-[#080d1a] border border-[#1f2e4d] text-slate-300 hover:text-white'
              }`}
            >
              Simulate Smart Parking (Rust/Axum)
            </button>

            <button
              onClick={() => {
                setActiveTab('biometric');
                resetSimulation();
              }}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                activeTab === 'biometric'
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold'
                  : 'bg-[#080d1a] border border-[#1f2e4d] text-slate-300 hover:text-white'
              }`}
            >
              Simulate Biometric ADMS (Java/Spring)
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={runSimulation}
              disabled={isRunning}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs transition-all shadow-lg ${
                isRunning
                  ? 'bg-slate-700 text-slate-400 cursor-not-allowed'
                  : 'bg-emerald-400 hover:bg-emerald-300 text-slate-950 shadow-emerald-400/20 hover:scale-105'
              }`}
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>{isRunning ? "Simulating Pipeline..." : "Trigger Live Simulation"}</span>
            </button>

            <button
              onClick={resetSimulation}
              className="p-2.5 rounded-xl bg-[#080d1a] border border-[#1f2e4d] text-slate-400 hover:text-white transition-colors"
              title="Reset Sandbox"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 5-Stage Live Visual Pipeline Nodes */}
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 mb-8">
          {[
            { step: 1, name: "1. Edge Trigger", icon: Cpu, desc: activeTab === 'parking' ? "RTSP / Sensor" : "Fingerprint Scan" },
            { step: 2, name: "2. Protocol Ingest", icon: Server, desc: activeTab === 'parking' ? "zk_adms_service.rs" : "AdmsService.java" },
            { step: 3, name: "3. Async Core", icon: Sparkles, desc: activeTab === 'parking' ? "Tokio Tariff Calc" : "Shift Matcher" },
            { step: 4, name: "4. ACID Storage", icon: Database, desc: activeTab === 'parking' ? "SeaORM / Postgres" : "Spring Data JPA" },
            { step: 5, name: "5. Client Dispatch", icon: Monitor, desc: activeTab === 'parking' ? "Barrier Opened" : "WebSocket Broadcast" }
          ].map((node) => {
            const Icon = node.icon;
            const isPassed = currentStep >= node.step;
            const isCurrent = currentStep === node.step;

            return (
              <div
                key={node.step}
                className={`p-4 rounded-xl border text-center transition-all ${
                  isCurrent
                    ? 'bg-[#121d36] border-[#00f5d4] scale-105 shadow-lg shadow-[#00f5d4]/20'
                    : isPassed
                    ? 'bg-[#0d1527] border-emerald-500/40 text-emerald-400'
                    : 'bg-[#080d1a] border-[#1f2e4d] opacity-50'
                }`}
              >
                <div className="flex justify-center mb-2">
                  <div className={`p-2 rounded-lg ${isCurrent ? 'bg-[#00f5d4] text-slate-950 animate-bounce' : isPassed ? 'bg-emerald-500/20 text-emerald-400' : 'bg-[#121d36] text-slate-400'}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <div className="text-xs font-bold text-white mb-0.5">{node.name}</div>
                <div className="text-[10px] font-mono text-slate-400">{node.desc}</div>
              </div>
            );
          })}
        </div>

        {/* Real-time Sandbox Console */}
        <div className="bg-[#080d1a] rounded-xl border border-[#1f2e4d] p-4 font-mono text-xs overflow-hidden">
          <div className="flex items-center justify-between text-slate-500 border-b border-[#1f2e4d] pb-2 mb-3">
            <span>SANDBOX PROTOCOL CONSOLE</span>
            <span className="text-[#00f5d4]">STATUS: {isRunning ? "PROCESSING" : currentStep === 5 ? "SUCCESS (200 OK)" : "IDLE"}</span>
          </div>

          <div className="space-y-1.5 min-h-[100px]">
            {simLog.length === 0 ? (
              <div className="text-slate-500 italic">Click "Trigger Live Simulation" to dispatch an edge event through the pipeline...</div>
            ) : (
              simLog.map((log, idx) => (
                <div key={idx} className="flex items-center gap-2 text-emerald-400 animate-in fade-in">
                  <span className="text-slate-500">[{idx + 1}]</span>
                  <span>{log}</span>
                </div>
              ))
            )}
          </div>
        </div>

      </div>

    </section>
  );
}
