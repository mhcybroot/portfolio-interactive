import React from 'react';
import { Award, Quote, CheckCircle2, Building, GraduationCap, Phone, ShieldCheck } from 'lucide-react';

export default function Endorsements() {
  const endorsements = [
    {
      name: "Engr. Niger Sultana",
      title: "Head of Department (HOD), Computer Science & Technology",
      institution: "Dhaka Polytechnic Institute (DPI)",
      phone: "+880 1812-112664",
      badge: "Academic Authority",
      quote: "Mahmudul has consistently demonstrated exceptional technical capability and analytical precision throughout his 4-year diploma. Achieving a 3.75 CGPA places him in the top tier of graduates from Dhaka Polytechnic, combining strong foundational principles with deep practical problem-solving.",
      verifiedType: "Academic Verification"
    },
    {
      name: "Nazrul Hasan Raju",
      title: "Managing Director",
      institution: "Nexus Netro Ltd",
      phone: "+880 1713-403833",
      badge: "Industry Executive",
      quote: "Mahmudul possesses a rare hybrid engineering skill set: he bridges high-concurrency software development with deep network routing and telecommunications infrastructure (MikroTik, Vicidial PBX, Linux VPS). His ability to design, deploy, and maintain mission-critical systems is outstanding.",
      verifiedType: "Industry Verification"
    }
  ];

  return (
    <section id="endorsements" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0d1527] border border-[#1f2e4d] text-xs font-mono text-[#00f5d4] mb-3">
          <Award className="w-3.5 h-3.5" />
          <span>Professional References & Endorsements</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          Verified <span className="cyber-gradient-text">Recommendations</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto mt-2">
          Formal references from academic leadership and corporate executive management.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {endorsements.map((item, idx) => (
          <div
            key={idx}
            className="glass-card rounded-2xl p-6 sm:p-8 border border-[#1f2e4d] flex flex-col justify-between glass-card-hover group relative overflow-hidden"
          >
            {/* Ambient Background Watermark */}
            <Quote className="absolute right-4 bottom-4 w-24 h-24 text-white/[0.03] pointer-events-none" />

            <div>
              {/* Badge */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#080d1a] border border-[#00f5d4]/30 text-[11px] font-mono text-[#00f5d4]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#00f5d4]" />
                  <span>{item.badge}</span>
                </span>

                <span className="text-[10px] font-mono text-slate-400">
                  {item.verifiedType}
                </span>
              </div>

              {/* Quote */}
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed italic mb-6">
                "{item.quote}"
              </p>
            </div>

            {/* Author Details */}
            <div className="pt-4 border-t border-[#1f2e4d]/60 flex items-center justify-between">
              <div>
                <h4 className="text-sm font-bold text-white group-hover:text-[#00f5d4] transition-colors">
                  {item.name}
                </h4>
                <div className="text-xs text-slate-400">
                  {item.title}
                </div>
                <div className="text-[11px] font-semibold text-[#00f5d4] mt-0.5">
                  {item.institution}
                </div>
              </div>

              <div className="text-right">
                <div className="inline-flex items-center gap-1 text-[11px] font-mono text-slate-300 px-2.5 py-1 rounded-lg bg-[#080d1a] border border-[#1f2e4d]">
                  <Phone className="w-3 h-3 text-[#00f5d4]" />
                  <span>{item.phone}</span>
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}
