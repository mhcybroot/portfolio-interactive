import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, Copy, Check, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { verifiedRepositories } from '../data/repositoriesData';

export default function InteractiveTerminal({ isOpen, onClose }) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: '⚡ Mahmudul Hasan Developer Terminal v2.4.0 (Linux x86_64)' },
    { type: 'system', text: 'Type "help" to view available commands or click quick action buttons below.' },
  ]);
  const [copied, setCopied] = useState(false);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmdStr) => {
    const rawCmd = cmdStr.trim();
    if (!rawCmd) return;

    const cmd = rawCmd.toLowerCase();
    const newHistory = [...history, { type: 'user', text: rawCmd }];

    if (cmd === 'help') {
      newHistory.push({
        type: 'output',
        text: `Available Commands:
  • cat architecture.md  : View Edge-to-Cloud IoT & Systems Architecture
  • cat skills.json       : Output verified technical skills matrix
  • ls repos              : List all 10 verified production repositories
  • git clone <repo_id>   : Copy git clone command for any repository
  • status --live         : View live production server status & client sites
  • contact               : Display direct contact & social communication links
  • download cv           : Download Master ATS CV (PDF / DOCX)
  • clear                 : Clear terminal console`
      });
    } else if (cmd === 'cat architecture.md') {
      newHistory.push({
        type: 'output',
        text: `SYSTEM ARCHITECTURE PIPELINE:
[Edge Hardware: ZKTeco Terminals / RTSP CCTV / Barcodes]
   ↓ (ADMS HTTP Push Protocol / RTSP Streams)
[Protocol Gateways: AdmsService.java / zk_adms_service.rs]
   ↓ (Async Tokio Runtime / Spring Security 6)
[Core Engines: Rust 2024 Axum & Java 21 Spring Boot]
   ↓ (SeaORM 1.1 / Spring Data JPA Criteria Specifications)
[Database Storage: PostgreSQL (Async Connection Pool)]
   ↓ (WebSockets / RESTful JSON APIs)
[Clients: React 19 Dashboards & Flutter BLoC Desktop/Mobile]`
      });
    } else if (cmd === 'cat skills.json') {
      newHistory.push({
        type: 'output',
        text: JSON.stringify({
          backend: ["Java 21 (Spring Boot 3.4/4.0)", "Rust 2024 (Axum, Tokio)", "PostgreSQL", "SeaORM"],
          frontend: ["React 19", "TypeScript", "Three.js", "Flutter BLoC", "Tailwind CSS"],
          iot_protocols: ["ZKTeco ADMS", "Frigate AI NVR", "RTSP / HTTP Video", "Barcode"],
          devops: ["MikroTik RouterOS", "Hostinger VPS", "Vicidial VoIP", "Docker", "Nginx"]
        }, null, 2)
      });
    } else if (cmd === 'ls repos') {
      const list = verifiedRepositories.map(r => `  • ${r.name.padEnd(28)} [${r.language}] -> ${r.repoUrl}`).join('\n');
      newHistory.push({
        type: 'output',
        text: `VERIFIED REPOSITORIES (${verifiedRepositories.length} Total):\n${list}`
      });
    } else if (cmd.startsWith('git clone')) {
      const parts = cmd.split(' ');
      const target = parts[2]?.toLowerCase();
      let repo = verifiedRepositories.find(r => r.name.toLowerCase().includes(target) || r.id.toLowerCase().includes(target));
      if (!repo) repo = verifiedRepositories[0];

      navigator.clipboard.writeText(repo.cloneCmd);
      newHistory.push({
        type: 'output',
        text: `✔ Copied to clipboard: ${repo.cloneCmd}\nRepository: ${repo.repoUrl}`
      });
    } else if (cmd === 'status --live') {
      newHistory.push({
        type: 'output',
        text: `LIVE PRODUCTION PLATFORMS STATUS:
  ✔ skylinkltd.ai            [200 OK] (React + GSAP Motion)
  ✔ finaraprosolutions.com   [200 OK] (React 19 + Three.js 3D)
  ✔ homesyncllc.org          [200 OK] (React 19 + 3D Canvas)
  ✔ dreamzonebuilders.com    [200 OK] (React + Base UI + Tailwind)
All systems operational with 99.9% uptime.`
      });
    } else if (cmd === 'contact') {
      newHistory.push({
        type: 'output',
        text: `CONTACT INFORMATION:
  • Name: Mahmudul Hasan
  • Location: Natun Bazar, Vatara, Dhaka, Bangladesh
  • Phone / WhatsApp: +880 1410-749454
  • Email: eng.mahmudulhasan.bd@gmail.com
  • GitHub: https://github.com/mhcybroot
  • LinkedIn: https://linkedin.com/in/mhcybroot`
      });
    } else if (cmd === 'download cv') {
      const link = document.createElement('a');
      link.href = personalInfo.cvPdf;
      link.download = 'MAHMUDUL_HASAN_CV.pdf';
      link.click();
      newHistory.push({
        type: 'output',
        text: `✔ Initiated download for MAHMUDUL_HASAN_CV.pdf`
      });
    } else if (cmd === 'clear') {
      setHistory([]);
      setInput('');
      return;
    } else {
      newHistory.push({
        type: 'error',
        text: `Command not found: "${rawCmd}". Type "help" for valid commands.`
      });
    }

    setHistory(newHistory);
    setInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(input);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="w-full max-w-4xl bg-[#080d1a] border border-[#1f2e4d] rounded-2xl shadow-2xl shadow-[#00f5d4]/10 overflow-hidden flex flex-col h-[560px]">
        
        {/* Terminal Title Bar */}
        <div className="bg-[#0d1527] px-4 py-3 border-b border-[#1f2e4d] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 mr-2">
              <button onClick={onClose} className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            </div>
            <TerminalIcon className="w-4 h-4 text-[#00f5d4]" />
            <span className="font-mono text-xs text-slate-300">
              mahmudul@systems-hub:~ (bash)
            </span>
          </div>
          
          <button
            onClick={onClose}
            className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-[#121d36] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Quick Command Action Pills */}
        <div className="bg-[#0b1222] px-4 py-2 border-b border-[#1f2e4d]/60 flex items-center gap-2 overflow-x-auto text-xs font-mono">
          <span className="text-slate-500 text-[11px]">Quick Run:</span>
          {[
            { label: 'cat architecture.md', cmd: 'cat architecture.md' },
            { label: 'ls repos', cmd: 'ls repos' },
            { label: 'status --live', cmd: 'status --live' },
            { label: 'cat skills.json', cmd: 'cat skills.json' },
            { label: 'download cv', cmd: 'download cv' },
            { label: 'clear', cmd: 'clear' },
          ].map((pill, i) => (
            <button
              key={i}
              onClick={() => handleCommand(pill.cmd)}
              className="px-2.5 py-1 rounded bg-[#121d36] border border-[#1f2e4d] text-slate-300 hover:text-[#00f5d4] hover:border-[#00f5d4]/40 transition-colors whitespace-nowrap text-[11px]"
            >
              {pill.label}
            </button>
          ))}
        </div>

        {/* Terminal Body */}
        <div 
          onClick={() => inputRef.current?.focus()}
          className="flex-1 p-4 font-mono text-xs sm:text-sm overflow-y-auto space-y-2 select-text"
        >
          {history.map((item, index) => (
            <div key={index}>
              {item.type === 'system' && (
                <div className="text-slate-400">{item.text}</div>
              )}
              {item.type === 'user' && (
                <div className="flex items-center gap-2 text-white">
                  <span className="text-[#00f5d4] font-bold">mahmudul@systems:~$</span>
                  <span>{item.text}</span>
                </div>
              )}
              {item.type === 'output' && (
                <pre className="text-emerald-400 whitespace-pre-wrap font-mono leading-relaxed bg-[#0b1222]/50 p-2.5 rounded-lg border border-[#1f2e4d]/40">
                  {item.text}
                </pre>
              )}
              {item.type === 'error' && (
                <div className="text-red-400">{item.text}</div>
              )}
            </div>
          ))}
          
          {/* Active Input Line */}
          <div className="flex items-center gap-2 text-white pt-1">
            <span className="text-[#00f5d4] font-bold">mahmudul@systems:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent text-white outline-none border-none font-mono text-xs sm:text-sm"
              autoFocus
            />
          </div>
          <div ref={bottomRef} />
        </div>

      </div>
    </div>
  );
}
