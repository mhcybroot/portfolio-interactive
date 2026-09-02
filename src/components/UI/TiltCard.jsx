import React, { useRef } from 'react';

export default function TiltCard({
  children,
  className = '',
  innerClassName = 'p-6 sm:p-7 flex flex-col justify-between h-full',
  maxTilt = 6,
  spotlightColor = 'rgba(0, 245, 212, 0.12)',
  ...props
}) {
  const cardRef = useRef(null);
  const innerRef = useRef(null);
  const spotlightRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    const centerX = width / 2;
    const centerY = height / 2;

    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    if (innerRef.current) {
      innerRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }
    if (spotlightRef.current) {
      spotlightRef.current.style.opacity = '1';
      spotlightRef.current.style.background = `radial-gradient(450px circle at ${x}px ${y}px, ${spotlightColor}, transparent 70%)`;
    }
  };

  const handleMouseLeave = () => {
    if (innerRef.current) {
      innerRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    }
    if (spotlightRef.current) {
      spotlightRef.current.style.opacity = '0';
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative ${className}`}
      {...props}
    >
      <div
        ref={innerRef}
        style={{
          transition: 'transform 0.15s ease-out, border-color 0.3s ease, box-shadow 0.3s ease',
          transformStyle: 'flat',
        }}
        className="w-full h-full rounded-2xl overflow-hidden glass-card border border-[#1f2e4d] relative hover:border-[#00f5d4]/40 hover:shadow-2xl hover:shadow-[#00f5d4]/10 flex flex-col"
      >
        {/* Dynamic Cursor Spotlight Radial Glow */}
        <div
          ref={spotlightRef}
          className="pointer-events-none absolute -inset-px transition-opacity duration-300 opacity-0 z-0"
        />
        
        {/* Inner Card Content with Guaranteed Pointer Events */}
        <div className={`relative z-10 w-full pointer-events-auto ${innerClassName}`}>
          {children}
        </div>
      </div>
    </div>
  );
}
