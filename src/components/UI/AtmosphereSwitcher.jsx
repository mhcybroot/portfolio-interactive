import React, { useState } from 'react';
import { Sparkles, Image, Check, X, Layers, Eye } from 'lucide-react';
import { atmospheres } from '../../data/atmospheresData';
import { sound } from '../../utils/soundManager';

export default function AtmosphereSwitcher({ currentAtmosphere, onSelectAtmosphere }) {
  const [isOpen, setIsOpen] = useState(false);

  const activeTheme = atmospheres.find(a => a.id === currentAtmosphere) || atmospheres[0];

  return (
    <>
      {/* Floating Trigger Button in Bottom Left */}
      <div className="fixed bottom-5 left-5 z-40">
        <button
          type="button"
          onClick={() => {
            setIsOpen(!isOpen);
            sound.playClick();
          }}
          className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#0b1222]/90 hover:bg-[#101a30] border border-[#1f2e4d] hover:border-[#00f5d4]/60 text-xs font-mono text-slate-200 hover:text-white backdrop-blur-md shadow-xl shadow-black/60 transition-all cursor-pointer group"
          title="Customize Background Atmosphere"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#00f5d4] group-hover:rotate-45 transition-transform" />
          <span className="hidden sm:inline text-[11px] font-semibold">Theme:</span>
          <span className="text-[11px] text-[#00f5d4] font-bold truncate max-w-[120px]">
            {activeTheme.name.split(' ')[0]}
          </span>
        </button>
      </div>

      {/* Atmosphere Selection Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-150">
          <div className="w-full max-w-2xl bg-[#0b1222] border border-[#1f2e4d] rounded-2xl shadow-2xl shadow-[#00f5d4]/10 overflow-hidden flex flex-col max-h-[85vh]">
            
            {/* Header */}
            <div className="bg-[#101a30] px-5 py-3.5 border-b border-[#1f2e4d] flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Sparkles className="w-4 h-4 text-[#00f5d4]" />
                <div>
                  <h3 className="text-sm font-bold text-white">Atmosphere &amp; Background Engine</h3>
                  <p className="text-[10px] font-mono text-slate-400">Select from 10 high-concurrency developer backdrops</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-[#060a14] transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Grid of 10 Themes */}
            <div className="p-4 sm:p-5 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[60vh]">
              {atmospheres.map((atm) => {
                const isSelected = currentAtmosphere === atm.id;
                return (
                  <button
                    key={atm.id}
                    type="button"
                    onClick={() => {
                      onSelectAtmosphere(atm.id);
                      sound.playChime();
                      setIsOpen(false);
                    }}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? 'bg-[#101a30] border-[#00f5d4] shadow-lg shadow-[#00f5d4]/15 scale-[1.02]'
                        : 'bg-[#060a14] border-[#1f2e4d] hover:border-slate-500 hover:bg-[#080e1c]'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#101a30] text-slate-300 border border-[#1f2e4d]">
                          {atm.category}
                        </span>
                        {isSelected && (
                          <span className="flex items-center gap-1 text-[10px] font-mono text-[#00f5d4] font-bold">
                            <Check className="w-3 h-3 text-[#00f5d4]" />
                            <span>Active</span>
                          </span>
                        )}
                      </div>
                      <div className="text-xs font-bold text-white mb-1">
                        {atm.name}
                      </div>
                      <p className="text-[11px] text-slate-400 leading-tight line-clamp-2">
                        {atm.description}
                      </p>
                    </div>

                    <div className="mt-2.5 pt-2 border-t border-[#1f2e4d]/50 flex items-center justify-between text-[10px] font-mono text-slate-500">
                      <span>{atm.image ? 'Custom AI Art' : 'Pure CSS Mesh'}</span>
                      <span style={{ color: atm.accentColor }}>● Preset</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Footer */}
            <div className="bg-[#080d1a] px-5 py-2.5 border-t border-[#1f2e4d] flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>Selections are automatically saved to your browser session.</span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-[#00f5d4] hover:underline font-bold"
              >
                Done
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
