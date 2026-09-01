import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Check, Copy, MessageSquare, Github, Linkedin, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0d1527] border border-[#1f2e4d] text-xs font-mono text-[#00f5d4] mb-3">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Get in Touch</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          Let’s Build <span className="cyber-gradient-text">High-Impact Systems</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mt-2">
          Available for full-stack, backend architecture, and IoT systems engineering opportunities.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        {/* Left Column: Direct Action Triggers */}
        <div className="space-y-6">
          <div className="glass-card rounded-2xl p-6 sm:p-8 border border-[#1f2e4d]">
            <h3 className="text-xl font-bold text-white mb-2">
              Contact Information
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm mb-6 leading-relaxed">
              Reach out directly for engineering roles, technical consultation, or project collaborations.
            </p>

            <div className="space-y-4">
              
              {/* Email Trigger */}
              <div className="p-4 rounded-xl bg-[#080d1a] border border-[#1f2e4d] flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#121d36] text-[#00f5d4]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400">Email Address</div>
                    <div className="text-xs sm:text-sm font-semibold text-white truncate max-w-[200px] sm:max-w-xs">
                      {personalInfo.email}
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-[#121d36] hover:bg-[#1f2e4d] text-slate-200 text-xs flex items-center gap-1.5 transition-colors font-mono"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-slate-400" />}
                  <span className="hidden sm:inline">{copiedEmail ? "Copied" : "Copy"}</span>
                </button>
              </div>

              {/* Phone & WhatsApp Trigger */}
              <div className="p-4 rounded-xl bg-[#080d1a] border border-[#1f2e4d] flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#121d36] text-emerald-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400">Phone & WhatsApp</div>
                    <div className="text-xs sm:text-sm font-semibold text-white">
                      {personalInfo.phone}
                    </div>
                  </div>
                </div>

                <a
                  href={personalInfo.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-xs font-semibold hover:bg-emerald-500/30 transition-colors"
                >
                  WhatsApp
                </a>
              </div>

              {/* Location */}
              <div className="p-4 rounded-xl bg-[#080d1a] border border-[#1f2e4d] flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#121d36] text-purple-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400">Location</div>
                  <div className="text-xs sm:text-sm font-semibold text-white">
                    {personalInfo.location}
                  </div>
                </div>
              </div>

            </div>

            {/* Social Links */}
            <div className="mt-8 pt-6 border-t border-[#1f2e4d] flex items-center gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#080d1a] border border-[#1f2e4d] hover:border-[#00f5d4]/40 text-xs font-mono text-slate-200 transition-colors"
              >
                <Github className="w-4 h-4 text-[#00f5d4]" />
                <span>github.com/mhcybroot</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#080d1a] border border-[#1f2e4d] hover:border-[#3b82f6]/40 text-xs font-mono text-slate-200 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-[#3b82f6]" />
                <span>linkedin.com/in/mhcybroot</span>
              </a>
            </div>

          </div>
        </div>

        {/* Right Column: Direct Message Form */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 border border-[#1f2e4d]">
          <h3 className="text-xl font-bold text-white mb-2">
            Send a Direct Message
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm mb-6 leading-relaxed">
            Fill in the details below to dispatch an inquiry directly.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-mono text-slate-400 mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. John Doe"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#080d1a] border border-[#1f2e4d] text-white text-xs outline-none focus:border-[#00f5d4] transition-colors"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono text-slate-400 mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@company.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#080d1a] border border-[#1f2e4d] text-white text-xs outline-none focus:border-[#00f5d4] transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-mono text-slate-400 mb-1">Subject</label>
              <input
                type="text"
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="Full-Stack / Systems Role Inquiry"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#080d1a] border border-[#1f2e4d] text-white text-xs outline-none focus:border-[#00f5d4] transition-colors"
              />
            </div>

            <div>
              <label className="block text-[11px] font-mono text-slate-400 mb-1">Message</label>
              <textarea
                rows="4"
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Let's discuss an engineering project or role..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#080d1a] border border-[#1f2e4d] text-white text-xs outline-none focus:border-[#00f5d4] transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-[#00f5d4] to-[#3b82f6] text-slate-950 font-bold text-xs shadow-lg shadow-[#00f5d4]/20 hover:opacity-95 transition-all"
            >
              {formSubmitted ? (
                <>
                  <Check className="w-4 h-4 text-slate-950" />
                  <span>Message Dispatched! Thank You.</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>

        </div>

      </div>

    </section>
  );
}
