'use client';

import { useEffect } from 'react';

const AnimatedBackground = () => {
  useEffect(() => {
    const handleResize = () => {
      // Handle resize if needed
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#000000]">
      {/* LAYER 1: Static Conic Mesh Gradient Base - NO ANIMATION */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background: 'conic-gradient(from 180deg at 50% 50%, #4648d4 0deg, #6063ee 90deg, #904900 180deg, #b55d00 270deg, #4648d4 360deg)',
          filter: 'blur(120px)',
        }}
      />

      {/* LAYER 2: Static Aurora Gradient - NO ANIMATION */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          background: 'linear-gradient(45deg, rgba(70, 72, 212, 0.3) 0%, rgba(96, 99, 238, 0.2) 25%, rgba(144, 73, 0, 0.3) 50%, rgba(181, 93, 0, 0.2) 75%, rgba(70, 72, 212, 0.3) 100%)',
          filter: 'blur(80px)',
        }}
      />

      {/* LAYER 3: Static Hero Gradient Orbs - NO ANIMATION */}
      <div
        className="absolute w-[900px] h-[900px] rounded-full opacity-25 md:opacity-30 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, #4648d4 0%, #6063ee 25%, #904900 75%, #b55d00 100%)',
          filter: 'blur(140px)',
          right: '-20%',
          top: '-10%',
        }}
      />

      <div
        className="absolute w-[800px] h-[800px] rounded-full opacity-20 md:opacity-25 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, #6063ee 0%, #904900 50%, #b55d00 100%)',
          filter: 'blur(120px)',
          left: '-15%',
          bottom: '-15%',
        }}
      />

      <div
        className="absolute w-[700px] h-[700px] rounded-full opacity-15 md:opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #904900 0%, #b55d00 40%, transparent 70%)',
          filter: 'blur(100px)',
          left: '50%',
          top: '30%',
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* LAYER 4: Simplified Grid Overlay - NO ANIMATION */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none">
        <defs>
          <pattern
            id="premium-grid"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="rgba(255, 255, 255, 0.6)"
              strokeWidth="0.5"
            />
          </pattern>
          <linearGradient id="grid-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4648d4" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#6063ee" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#904900" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#premium-grid)" />
        <rect width="100%" height="100%" fill="url(#grid-gradient)" />
      </svg>

      {/* Removed all orbital decorative elements and mouse-following effects for performance */}
    </div>
  );
};

export default AnimatedBackground;
