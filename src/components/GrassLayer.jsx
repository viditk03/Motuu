import React, { useMemo } from 'react';

/**
 * Natural organic grass meadow layer with individual swaying grass blades and clovers.
 * @param {string} layer - 'foreground' or 'background'
 */
export default function GrassLayer({ layer = 'foreground' }) {
  const isFg = layer === 'foreground';
  const bladeCount = isFg ? 38 : 28;
  const heightBase = isFg ? 130 : 90;

  const blades = useMemo(() => {
    return Array.from({ length: bladeCount }).map((_, i) => {
      const left = (i / (bladeCount - 1)) * 102 - 1; // spread evenly from -1% to 101%
      const height = heightBase + ((i * 37) % 55) - 20;
      const width = isFg ? 8 + (i % 4) * 2 : 6 + (i % 3) * 2;
      const animType = `grass-blade-${(i % 3) + 1}`;
      const delay = `${-((i * 0.45) % 4.5)}s`;
      const lean = ((i % 5) - 2) * 6; // natural random lean
      const greenShade = isFg
        ? ['#15803d', '#16a34a', '#22c55e', '#14532d'][i % 4]
        : ['#14532d', '#166534', '#15803d', '#1e3a24'][i % 4];

      return {
        id: i,
        left,
        height,
        width,
        animType,
        delay,
        lean,
        greenShade,
      };
    });
  }, [bladeCount, heightBase, isFg]);

  return (
    <div
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: `${heightBase + 60}px`,
        pointerEvents: 'none',
        zIndex: isFg ? 6 : 2,
        overflow: 'hidden',
      }}
    >
      {/* Base ground gradient strip */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: isFg ? '42px' : '30px',
          background: isFg
            ? 'linear-gradient(180deg, rgba(20, 83, 45, 0.4) 0%, #14532d 100%)'
            : 'linear-gradient(180deg, rgba(15, 56, 32, 0.6) 0%, #0f3820 100%)',
          zIndex: 1,
        }}
      />

      {/* Individual grass blades */}
      {blades.map((b) => (
        <div
          key={b.id}
          className={b.animType}
          style={{
            position: 'absolute',
            bottom: 0,
            left: `${b.left}%`,
            width: `${b.width}px`,
            height: `${b.height}px`,
            animationDelay: b.delay,
            transformOrigin: 'bottom center',
            transform: `rotate(${b.lean}deg)`,
          }}
        >
          <svg
            viewBox="0 0 20 120"
            width="100%"
            height="100%"
            preserveAspectRatio="none"
            style={{ overflow: 'visible' }}
          >
            <path
              d={
                b.lean >= 0
                  ? 'M 2,120 Q 8,50 18,0 Q 12,50 10,120 Z'
                  : 'M 10,120 Q 12,50 2,0 Q 8,50 18,120 Z'
              }
              fill={b.greenShade}
              opacity={isFg ? 0.95 : 0.75}
            />
          </svg>
        </div>
      ))}
    </div>
  );
}
