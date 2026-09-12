import React, { useMemo } from 'react';

/**
 * Atmospheric background with horizon hills, ambient sun glow, and gentle pollen particles.
 */
export default function Background({ theme = 'dawn' }) {
  // Generate a fixed set of ambient pollen motes
  const pollenMotes = useMemo(() => {
    return Array.from({ length: 24 }).map((_, i) => ({
      id: i,
      left: `${(i * 4.3 + 7) % 96}%`,
      top: `${35 + (i * 13) % 55}%`,
      size: 3 + (i % 4) * 2,
      duration: `${7 + (i % 6) * 2.2}s`,
      delay: `${-(i * 0.9)}s`,
      opacity: 0.35 + (i % 5) * 0.12,
    }));
  }, []);

  return (
    <div className="layer-bg">
      {/* Soft atmospheric sun glow */}
      <div className="atmospheric-sun" />

      {/* Distant soft rolling hills silhouette */}
      <svg
        className="distant-hills"
        viewBox="0 0 1440 260"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="hillFarGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="var(--hill-far)" stopOpacity="0.75" />
            <stop offset="100%" stopColor="var(--ground-dark)" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="hillMidGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="var(--hill-mid)" stopOpacity="0.85" />
            <stop offset="100%" stopColor="var(--ground-dark)" stopOpacity="0.8" />
          </linearGradient>
        </defs>

        {/* Far mountain/hill line */}
        <path
          d="M0,160 C240,110 420,180 720,130 C980,90 1200,160 1440,120 L1440,260 L0,260 Z"
          fill="url(#hillFarGrad)"
        />

        {/* Near rolling meadow ridge */}
        <path
          d="M0,190 C180,140 380,210 680,175 C940,145 1160,200 1440,160 L1440,260 L0,260 Z"
          fill="url(#hillMidGrad)"
        />

        {/* Soft horizon mist overlay */}
        <ellipse cx="720" cy="210" rx="800" ry="60" fill="var(--mist-color)" filter="blur(20px)" />
      </svg>

      {/* Floating golden pollen motes */}
      {pollenMotes.map((mote) => (
        <div
          key={mote.id}
          className="pollen-orb"
          style={{
            left: mote.left,
            top: mote.top,
            width: `${mote.size}px`,
            height: `${mote.size}px`,
            animationDuration: mote.duration,
            animationDelay: mote.delay,
            opacity: mote.opacity,
          }}
        />
      ))}
    </div>
  );
}
