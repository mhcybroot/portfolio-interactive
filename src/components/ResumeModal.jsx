import React, { useState } from 'react';
import { X, Download, FileText, Check, Copy, ExternalLink, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="w-full max-w-3xl bg-[#0d1527] border border-[#1f2e4d] rounded-2xl shadow-2xl shadow-[#00f5d4]/10 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="bg-[#121d36] px-6 py-4 border-b border-[#1f2e4d] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-[#080d1a] border border-[#1f2e4d] text-[#00f5d4]">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">
                Master ATS Resume Preview
              </h3>
              <div className="text-xs font-mono text-slate-400">
                100% Code-Verified & Bangladesh HR Compliant
              </div>
            </div>
          </div>
          
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-[#080d1a] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Action Downloads Bar */}
        <div className="bg-[#080d1a] px-6 py-3.5 border-b border-[#1f2e4d] flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs font-mono text-slate-300">Available Formats:</span>
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.cvPdf}
              download="MAHMUDUL_HASAN_CV.pdf"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[#00f5d4] to-[#3b82f6] text-slate-950 font-bold text-xs shadow-md shadow-[#00f5d4]/20 hover:opacity-95"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <a
              href={personalInfo.cvDocx}
              download="MAHMUDUL_HASAN_CV.docx"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#121d36] border border-[#1f2e4d] hover:border-[#3b82f6]/50 text-slate-200 font-semibold text-xs transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-[#3b82f6]" />
              <span>Download Word (.docx)</span>
            </a>
          </div>
        </div>

        {/* Document Preview Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-200 font-sans text-xs sm:text-sm leading-relaxed bg-[#080d1a]/50">
          
          {/* Header */}
          <div className="text-center pb-4 border-b border-[#1f2e4d]">
            <h2 className="text-xl font-bold text-white uppercase tracking-wide">MAHMUDUL HASAN</h2>
            <div className="text-xs font-semibold text-[#00f5d4] mt-1">{personalInfo.title}</div>
            <div className="text-[11px] text-slate-400 mt-1">
              Natun Bazar, Vatara, Dhaka, Bangladesh | +880 1410-749454 | eng.mahmudulhasan.bd@gmail.com
            </div>
          </div>

          {/* Summary */}
          <div>
            <div className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">Professional Summary</div>
            <p className="text-xs text-slate-300/90 text-justify">
              High-impact Full-Stack Software & Systems Engineer with 2.5+ years of production experience architecting concurrent backends (Java 21 Spring Boot, Rust 2024 Axum), reactive cross-platform applications (React 19/TypeScript, Flutter BLoC), and hardware-level IoT integrations. Proven track record in building enterprise ERP/HRMS suites, smart parking architectures, and native protocol handlers (ZKTeco ADMS, Frigate AI NVR, RTSP/HTTP CCTV). Graduated with top honors (3.75 CGPA) from Dhaka Polytechnic Institute and currently pursuing AMIE (IEB) B.Sc. engineering equivalence.
            </p>
          </div>

          {/* Experience */}
          <div>
            <div className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Professional Experience</div>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between font-bold text-white text-xs">
                  <span>IT Executive / Software & Systems Engineer — Skylink Innovations Ltd</span>
                  <span className="font-mono text-slate-400 text-[11px]">Oct 2025 – Present</span>
                </div>
                <ul className="list-disc list-inside text-[11px] text-slate-300 space-y-1 mt-1">
                  <li>Designed and deployed enterprise ERP/HRMS portal (Java 21 Spring Boot 3.4, React, PostgreSQL) for 50+ staff.</li>
                  <li>Integrated native ZKTeco ADMS push communication for automated real-time attendance logging.</li>
                  <li>Built zero-error payroll computation module with OpenPDF, Apache POI, and JPA Criteria API.</li>
                  <li>Administered MikroTik core routing, managed switches, and Vicidial BPO VoIP telephony cluster.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between font-bold text-white text-xs">
                  <span>Software Executive / IoT & Systems Engineer — SPY Security Solutions</span>
                  <span className="font-mono text-slate-400 text-[11px]">Mar 2024 – Oct 2025</span>
                </div>
                <ul className="list-disc list-inside text-[11px] text-slate-300 space-y-1 mt-1">
                  <li>Architected Smart Parking Management System (PMS-V2) with Rust (Axum + Tokio) and Flutter (BLoC).</li>
                  <li>Integrated ZKTeco barrier controllers via ADMS, live CCTV over RTSP/HTTP, and barcode scanners.</li>
                  <li>Built dynamic tariff calculator and anti-passback rule enforcement using SeaORM on PostgreSQL.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education & References */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-[#1f2e4d]">
            <div>
              <div className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">Education</div>
              <div className="text-[11px] text-slate-200 font-semibold">B.Sc. in Engineering (Equivalence) — Section A</div>
              <div className="text-[10px] text-slate-400">IEB AMIE (Enrolled 2026 | In Progress)</div>
              <div className="text-[11px] text-slate-200 font-semibold mt-1">Diploma in CST (CGPA: 3.75 / 4.00)</div>
              <div className="text-[10px] text-slate-400">Dhaka Polytechnic Institute (2021–2022)</div>
            </div>

            <div>
              <div className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">References</div>
              <div className="text-[11px] text-slate-200"><strong>Engr. Niger Sultana</strong> (HOD, CST, DPI)</div>
              <div className="text-[10px] text-slate-400">📞 +880 1812-112664</div>
              <div className="text-[11px] text-slate-200 mt-1"><strong>Nazrul Hasan Raju</strong> (MD, Nexus Netro Ltd)</div>
              <div className="text-[10px] text-slate-400">📞 +880 1713-403833</div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
