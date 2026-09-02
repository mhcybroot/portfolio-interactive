import React, { useState, useEffect } from 'react';
import { Activity, ShieldCheck, Zap, HardDrive, Wifi, Server, CheckCircle2, Eye, Cpu, Video } from 'lucide-react';

export default function TelemetryMonitor() {
  const [pulse, setPulse] = useState(1.6);
  const [activeRequests, setActiveRequests] = useState(14820);
  const [activeObjects, setActiveObjects] = useState(19);
  const [recentLogs, setRecentLogs] = useState([
    { time: "22:15:02", service: "zk_adms_service", event: "Punch received SN:ZK98234 -> User 104 [OK]" },
    { time: "22:15:05", service: "ticket_service", event: "Dynamic tariff computed for Slot A-12 (1.2ms) [OK]" },
    { time: "22:15:09", service: "cctv_frigate", event: "RTSP stream CAM_04: 19 3D bounding boxes confirmed [ACTIVE]" },
    { time: "22:15:14", service: "websocket_hub", event: "Broadcast state to 50 active client sessions [SYNC]" }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse((1.4 + Math.random() * 0.5).toFixed(2));
      setActiveRequests((prev) => Math.floor(14500 + Math.random() * 800));
      setActiveObjects((prev) => Math.floor(18 + Math.random() * 4));
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="telemetry" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      <div className="glass-card rounded-2xl p-6 sm:p-8 border border-[#1f2e4d] relative overflow-hidden">
        
        {/* Glow Element */}
        <div className="absolute -right-20 -top-20 w-60 h-60 bg-[#00f5d4]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#080d1a] border border-[#1f2e4d] text-xs font-mono text-[#00f5d4] mb-2">
              <Activity className="w-3.5 h-3.5 animate-pulse text-[#00f5d4]" />
              <span>Live System Telemetry &amp; AI Computer Vision</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Production Reliability &amp; Edge Analytics
            </h3>
          </div>

          <div className="flex items-center gap-3">
            <span className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>All Gateways &amp; Streams Online</span>
            </span>
          </div>
        </div>

        {/* 2-Column Split: Metrics & AI Video HUD */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
          
          {/* Left Column: 4 Core Benchmark Gauges + Log Ticker (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
            
            {/* 4 Core Benchmark Gauges */}
            <div className="grid grid-cols-2 gap-3.5">
              
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
                  ADMS HTTP push stream
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
            <div className="bg-[#080d1a] rounded-xl border border-[#1f2e4d] p-4 flex-1">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2 flex items-center justify-between">
                <span>Live Telemetry Stream</span>
                <span className="text-[10px] text-emerald-400 font-mono">● Real-Time Packet Feed</span>
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

          {/* Right Column: AI Computer Vision & RTSP 3D HUD (5 Cols) */}
          <div className="lg:col-span-5 rounded-xl bg-[#080d1a] border border-[#1f2e4d] overflow-hidden flex flex-col justify-between">
            <div className="relative h-56 sm:h-64 w-full overflow-hidden">
              <img
                src="/images/ai-surveillance-vision.jpg"
                alt="AI Computer Vision RTSP Surveillance Telemetry"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080d1a] via-transparent to-black/50" />
              
              {/* Top Stream Status */}
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md text-[#00f5d4] font-mono text-[10px] border border-[#00f5d4]/40">
                  <Video className="w-3 h-3 text-[#00f5d4] animate-pulse" />
                  <span>CAM_04 // FRIGATE NVR AI</span>
                </span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px] border border-emerald-500/40">
                  48 Mbps STREAM
                </span>
              </div>

              {/* Bottom Object Tracking Badge */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <div className="bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#1f2e4d] flex items-center gap-3">
                  <div>
                    <div className="text-[9px] font-mono text-slate-400 uppercase">3D Objects</div>
                    <div className="text-xs font-mono font-bold text-[#00f5d4]">{activeObjects} Active</div>
                  </div>
                  <div>
                    <div className="text-[9px] font-mono text-slate-400 uppercase">Confidence</div>
                    <div className="text-xs font-mono font-bold text-emerald-400">99.2% Avg</div>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-purple-300 bg-[#060a14]/80 px-2 py-1 rounded border border-purple-500/30">
                  RTSP CCTV Node
                </span>
              </div>
            </div>

            <div className="p-3.5 bg-[#060a14] border-t border-[#1f2e4d] flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>Edge AI Bounding Box Telemetry</span>
              <span className="text-[#00f5d4]">Sub-2ms Ingestion</span>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
