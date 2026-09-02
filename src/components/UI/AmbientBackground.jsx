import React, { useState, useEffect } from 'react';

export default function AmbientBackground() {
  const [cursorPos, setCursorPos] = useState({ x: -500, y: -500 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('pointermove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('pointermove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none -z-20 overflow-hidden bg-[#060a14]">
      
      {/* 1. Cyber Blueprint Dot-Matrix & Grid Pattern */}
      <div className="absolute inset-0 bg-cyber-grid opacity-60" />

      {/* 2. Multi-Layered Aurora Mesh Gradient Blooms */}
      
      {/* Aurora Bloom 1: Cyan / Emerald (Top-Left) */}
      <div className="absolute -top-32 -left-32 w-[550px] h-[550px] rounded-full bg-gradient-to-br from-[#00f5d4]/15 via-[#00b4d8]/10 to-transparent blur-[140px] animate-aurora-1" />

      {/* Aurora Bloom 2: Royal Blue / Indigo (Mid-Right) */}
      <div className="absolute top-[35%] -right-40 w-[650px] h-[650px] rounded-full bg-gradient-to-bl from-[#3b82f6]/12 via-[#6366f1]/10 to-transparent blur-[160px] animate-aurora-2" />

      {/* Aurora Bloom 3: Cyber Purple / Violet (Bottom-Left) */}
      <div className="absolute bottom-10 left-[15%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#a855f7]/10 via-[#ec4899]/5 to-transparent blur-[150px] animate-aurora-3" />

      {/* 3. Global Ambient Cursor Tracking Halo */}
      <div
        className="absolute w-[450px] h-[450px] rounded-full bg-gradient-to-r from-[#00f5d4]/[0.04] to-[#3b82f6]/[0.04] blur-[120px] transition-transform duration-100 ease-out will-change-transform"
        style={{
          transform: `translate3d(${cursorPos.x - 225}px, ${cursorPos.y - 225}px, 0)`,
        }}
      />

      {/* 4. Microscopic Film Grain Texture Overlay */}
      <div
        className="absolute inset-0 opacity-[0.025] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

    </div>
  );
}
