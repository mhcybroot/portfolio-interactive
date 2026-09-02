import React, { useState, useEffect } from 'react';
import { atmospheres } from '../../data/atmospheresData';

export default function AmbientBackground({ currentAtmosphere = 'cyber-aurora' }) {
  const [cursorPos, setCursorPos] = useState({ x: -500, y: -500 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('pointermove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('pointermove', handleMouseMove);
  }, []);

  const activeTheme = atmospheres.find(a => a.id === currentAtmosphere) || atmospheres[0];

  return (
    <div className="fixed inset-0 pointer-events-none -z-20 overflow-hidden bg-[#060a14] transition-colors duration-700">
      
      {/* 1. Base Image Layer (Rendered when Theme has custom AI background) */}
      {activeTheme.image && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out opacity-20 mix-blend-screen scale-105"
          style={{
            backgroundImage: `url(${activeTheme.image})`,
          }}
        />
      )}

      {/* 2. Cyber Blueprint Dot-Matrix & Grid Pattern */}
      <div className="absolute inset-0 bg-cyber-grid opacity-60" />

      {/* 3. Multi-Layered Aurora Mesh Gradient Blooms */}
      
      {/* Aurora Bloom 1: Top-Left */}
      <div 
        className="absolute -top-32 -left-32 w-[550px] h-[550px] rounded-full blur-[140px] animate-aurora-1 transition-all duration-700"
        style={{
          background: `radial-gradient(circle, ${activeTheme.accentColor}25 0%, #00b4d815 60%, transparent 100%)`
        }}
      />

      {/* Aurora Bloom 2: Mid-Right */}
      <div className="absolute top-[35%] -right-40 w-[650px] h-[650px] rounded-full bg-gradient-to-bl from-[#3b82f6]/12 via-[#6366f1]/10 to-transparent blur-[160px] animate-aurora-2" />

      {/* Aurora Bloom 3: Bottom-Left */}
      <div className="absolute bottom-10 left-[15%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#a855f7]/10 via-[#ec4899]/5 to-transparent blur-[150px] animate-aurora-3" />

      {/* 4. Global Ambient Cursor Tracking Halo */}
      <div
        className="absolute w-[450px] h-[450px] rounded-full bg-gradient-to-r from-[#00f5d4]/[0.04] to-[#3b82f6]/[0.04] blur-[120px] transition-transform duration-100 ease-out will-change-transform"
        style={{
          transform: `translate3d(${cursorPos.x - 225}px, ${cursorPos.y - 225}px, 0)`,
        }}
      />

      {/* 5. Dark Contrast Mask to Guarantee WCAG AAA Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#060a14]/60 via-transparent to-[#060a14]/80" />

      {/* 6. Microscopic Film Grain Texture Overlay */}
      <div
        className="absolute inset-0 opacity-[0.025] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

    </div>
  );
}
