import React, { useEffect, useRef, useState } from 'react';
import { Terminal, Download, ArrowRight, ShieldCheck, Sparkles, Code2, Layers, Globe } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import AnimatedCounter from './UI/AnimatedCounter';
import MagneticButton from './UI/MagneticButton';
import SpotlightCard from './UI/SpotlightCard';

// Canvas 3D particle constellation background
function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const numParticles = Math.min(Math.floor((width * height) / 18000), 75);
    const particles = [];

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        radius: Math.random() * 2 + 1,
        color: i % 3 === 0 ? '#00f5d4' : i % 3 === 1 ? '#3b82f6' : '#818cf8',
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 245, 212, ${0.18 * (1 - dist / 130)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none opacity-40 z-0"
    />
  );
}

export default function Hero({ onOpenTerminal, onOpenResume }) {
  const roles = [
    "Full-Stack Software Engineer",
    "Java 21 & Spring Boot Architect",
    "Rust 2024 & Tokio Systems Specialist",
    "IoT & ZKTeco Hardware Integrator",
    "Creative 3D & React 19 Developer"
  ];
  
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 35 : 75;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentRole.substring(0, displayedText.length + 1));
        if (displayedText === currentRole) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayedText(currentRole.substring(0, displayedText.length - 1));
        if (displayedText === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Background visualizer */}
      <ParticleCanvas />
      
      {/* Ambient Radial Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#00f5d4]/10 via-[#3b82f6]/10 to-[#a855f7]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0d1527]/90 border border-[#1f2e4d] backdrop-blur-md mb-6 shadow-lg shadow-black/40">
          <span className="w-2.5 h-2.5 rounded-full bg-[#00f5d4] animate-pulse" />
          <span className="text-xs font-mono text-slate-300">
            {personalInfo.status}
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-4">
          Engineering Resilient <br />
          <span className="cyber-gradient-text">Systems & Software</span>
        </h1>

        {/* Dynamic Typing Title */}
        <div className="h-10 sm:h-12 flex items-center justify-center mb-6">
          <div className="font-mono text-lg sm:text-2xl text-slate-300 flex items-center gap-1">
            <span className="text-[#00f5d4] font-bold">&gt;</span>
            <span>{displayedText}</span>
            <span className="w-2.5 h-6 bg-[#00f5d4] animate-pulse inline-block ml-1" />
          </div>
        </div>

        {/* Value Proposition Description */}
        <p className="max-w-3xl mx-auto text-sm sm:text-base text-slate-300/90 leading-relaxed mb-10">
          Bridging high-concurrency backends (<strong className="text-white">Java 21 Spring Boot</strong>, <strong className="text-white">Rust 2024 Axum</strong>), 
          native edge IoT protocols (<strong className="text-cyan-300">ZKTeco ADMS, Frigate AI, RTSP CCTV</strong>), and responsive 3D web platforms (<strong className="text-white">React 19, Three.js</strong>). 
          Proven track record with 10 verified production repositories and 4 live commercial deployments.
        </p>

        {/* Magnetic Action CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <MagneticButton
            href="#repositories"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#00f5d4] to-[#3b82f6] text-slate-950 font-bold text-sm shadow-lg shadow-[#00f5d4]/20 hover:shadow-[#00f5d4]/40"
          >
            <span className="mr-2">Explore Codebases</span>
            <ArrowRight className="w-4 h-4" />
          </MagneticButton>

          <MagneticButton
            onClick={onOpenTerminal}
            className="px-6 py-3 rounded-xl bg-[#0d1527] border border-[#1f2e4d] text-slate-200 hover:text-[#00f5d4] hover:border-[#00f5d4]/50 font-mono text-sm shadow-md"
          >
            <Terminal className="w-4 h-4 text-[#00f5d4] mr-2" />
            <span>Launch CLI Terminal</span>
          </MagneticButton>

          <MagneticButton
            href="#deployments"
            className="px-6 py-3 rounded-xl bg-[#0d1527]/80 border border-[#1f2e4d] text-slate-300 hover:text-white font-medium text-sm"
          >
            <Globe className="w-4 h-4 text-purple-400 mr-2" />
            <span>Live Sites</span>
          </MagneticButton>
        </div>

        {/* Metric Counter Badges with Spotlight & Animated Counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {personalInfo.metrics.map((metric, idx) => (
            <SpotlightCard
              key={idx}
              className="p-4 text-center group"
            >
              <div className="font-mono text-2xl sm:text-3xl font-extrabold text-[#00f5d4] group-hover:scale-110 transition-transform">
                <AnimatedCounter value={metric.value} />
                {metric.value.includes('+') && '+'}
              </div>
              <div className="text-xs font-semibold text-slate-200 mt-1">
                {metric.label}
              </div>
              <div className="text-[10px] font-mono text-slate-400 mt-0.5">
                {metric.unit}
              </div>
            </SpotlightCard>
          ))}
        </div>

      </div>
    </section>
  );
}
