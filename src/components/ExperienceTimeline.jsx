import React from 'react';
import { Briefcase, GraduationCap, MapPin, Calendar, Award, CheckCircle2 } from 'lucide-react';
import { experienceTimeline } from '../data/portfolioData';

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0d1527] border border-[#1f2e4d] text-xs font-mono text-[#00f5d4] mb-3">
          <Briefcase className="w-3.5 h-3.5" />
          <span>Professional Track Record</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          Experience & <span className="cyber-gradient-text">Education</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mt-2">
          2.5+ years of production engineering experience paired with strong technical academic standing.
        </p>
      </div>

      {/* Vertical Timeline */}
      <div className="relative border-l-2 border-[#1f2e4d] ml-4 sm:ml-32 space-y-12">
        {experienceTimeline.map((item, idx) => (
          <div key={idx} className="relative pl-6 sm:pl-8 group">
            
            {/* Timeline Dot Icon */}
            <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-[#080d1a] border-2 border-[#00f5d4] flex items-center justify-center text-[#00f5d4] shadow-md shadow-[#00f5d4]/20 group-hover:scale-110 transition-transform">
              {item.type.includes('Education') || item.type.includes('Academic') ? (
                <GraduationCap className="w-4 h-4" />
              ) : (
                <Briefcase className="w-4 h-4" />
              )}
            </div>

            {/* Left Date Label for Desktop */}
            <div className="hidden sm:block absolute -left-36 top-2 text-right w-28 text-xs font-mono text-slate-400">
              {item.duration}
            </div>

            {/* Card Content */}
            <div className="glass-card rounded-2xl p-6 border border-[#1f2e4d] glass-card-hover">
              
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#00f5d4] transition-colors">
                    {item.role}
                  </h3>
                  <div className="text-sm font-semibold text-[#00f5d4]">
                    {item.company}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="sm:hidden text-xs font-mono text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {item.duration}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#121d36] border border-[#1f2e4d] text-[11px] font-mono text-slate-300">
                    {item.type}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-4">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                <span>{item.location}</span>
              </div>

              {/* Bullet Points */}
              <ul className="space-y-2">
                {item.points.map((pt, pIdx) => (
                  <li key={pIdx} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2.5 leading-relaxed">
                    <span className="text-[#00f5d4] mt-1 text-xs">▹</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>

            </div>

          </div>
        ))}
      </div>

    </section>
  );
}
