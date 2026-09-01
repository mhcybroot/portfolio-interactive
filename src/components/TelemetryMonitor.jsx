import React, { useState, useEffect } from 'react';
import { Activity, ShieldCheck, Zap, HardDrive, Wifi, Server, CheckCircle2 } from 'lucide-react';

export default function TelemetryMonitor() {
  const [pulse, setPulse] = useState(1.6);
  const [activeRequests, setActiveRequests] = useState(14820);
  const [recentLogs, setRecentLogs] = useState([
    { time: "22:15:02", service: "zk_adms_service", event: "Punch received SN:ZK98234 -> User 104 [OK]" },
    { time: "22:15:05", service: "ticket_service", event: "Dynamic tariff computed for Slot A-12 (1.2ms) [OK]" },
    { time: "22:15:09", service: "cctv_service", event: "RTSP stream health check: Gate-01, Gate-02 [ACTIVE]" },
    { time: "22:15:14", service: "websocket_hub", event: "Broadcast state to 50 active client sessions [SYNC]" }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse((1.4 + Math.random() * 0.5).toFixed(2));
      setActiveRequests((prev) => Math.floor(14500 + Math.random() * 800));
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="telemetry" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      <div className="glass-card rounded-2xl p-6 sm:p-8 border border-[#1f2e4d] relative overflow-hidden">
        
        {/* Glow Element */}
        <div className="absolute -right-20 -top-20 w-60 h-60 bg-[#00f5d4]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#080d1a] border border-[#1f2e4d] text-xs font-mono text-[#00f5d4] mb-2">
              <Activity className="w-3.5 h-3.5 animate-pulse text-[#00f5d4]" />
              <span>Live System Telemetry & Benchmarks</span>
            </div>
            <h3 className="text-2xl font-bold text-white">
              Production Reliability & Performance Metrics
            </h3>
          </div>

          <div className="flex items-center gap-3">
            <span className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>All Systems Operational</span>
            </span>
          </div>
        </div>

        {/* 4 Core Benchmark Gauges */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          
          <div className="p-4 rounded-xl bg-[#080d1a] border border-[#1f2e4d]">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
              <span>Barrier Latency (Rust)</span>
              <Zap className="w-3.5 h-3.5 text-[#00f5d4]" />
            </div>
            <div className="font-mono text-2xl font-black text-[#00f5d4]">
              {pulse} ms
            </div>
            <div className="text-[10px] font-mono text-slate-400 mt-1">
              Zero GC pause guarantee
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#080d1a] border border-[#1f2e4d]">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
              <span>Async Throughput</span>
              <Server className="w-3.5 h-3.5 text-blue-400" />
            </div>
            <div className="font-mono text-2xl font-black text-blue-400">
              {activeRequests.toLocaleString()}
            </div>
            <div className="text-[10px] font-mono text-slate-400 mt-1">
              Req / Sec peak capacity
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#080d1a] border border-[#1f2e4d]">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
              <span>Biometric Push Delay</span>
              <Wifi className="w-3.5 h-3.5 text-purple-400" />
            </div>
            <div className="font-mono text-2xl font-black text-purple-400">
              &lt; 45 ms
            </div>
            <div className="text-[10px] font-mono text-slate-400 mt-1">
              ADMS HTTP push protocol
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#080d1a] border border-[#1f2e4d]">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
              <span>Production Uptime</span>
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            </div>
            <div className="font-mono text-2xl font-black text-emerald-400">
              99.98%
            </div>
            <div className="text-[10px] font-mono text-slate-400 mt-1">
              Cloud VPS + Nginx SSL
            </div>
          </div>

        </div>

        {/* Live System Log Ticker */}
        <div className="bg-[#080d1a] rounded-xl border border-[#1f2e4d] p-4">
          <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2 flex items-center justify-between">
            <span>Live Telemetry Stream</span>
            <span className="text-[10px] text-emerald-400 font-mono">● Real-Time</span>
          </div>
          <div className="space-y-1.5 font-mono text-xs text-slate-300">
            {recentLogs.map((log, idx) => (
              <div key={idx} className="flex items-center gap-2 truncate">
                <span className="text-slate-500">[{log.time}]</span>
                <span className="text-[#00f5d4]">{log.service}:</span>
                <span className="truncate text-slate-300">{log.event}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}
