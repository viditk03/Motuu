import React, { useMemo } from 'react';

/**
 * Floating petals drifting gently with the breeze across the garden screen.
 */
export default function PetalParticles({ count = 18 }) {
  const petals = useMemo(() => {
    const colors = [
      '#f43f5e', // rose
      '#fb7185', // pink
      '#fda4af', // soft petal pink
      '#facc15', // golden yellow
      '#f97316', // peach
      '#c084fc', // lavender
      '#ffffff', // chamomile white
    ];

    return Array.from({ length: count }).map((_, i) => {
      const left = ((i * 19 + 5) % 100);
      const size = 14 + (i % 5) * 4;
      const duration = 10 + (i % 6) * 2.5; // 10s to 22s slow peaceful drift
      const delay = -((i * 1.7) % 14); // staggered entry so screen is instantly full of petals
      const driftX = 100 + (i % 5) * 50; // horizontal drift distance
      const rotEnd = 360 + ((i % 4) * 180);
      const color = colors[i % colors.length];

      return {
        id: i,
        left: `${left}%`,
        size,
        duration: `${duration}s`,
        delay: `${delay}s`,
        driftX: `${driftX}px`,
        rotEnd: `${rotEnd}deg`,
        color,
      };
    });
  }, [count]);

  return (
    <div className="layer-effects">
      {petals.map((p) => (
        <div
          key={p.id}
          className="floating-petal"
          style={{
            left: p.left,
            top: '-20px',
            width: `${p.size}px`,
            height: `${p.size * 0.7}px`,
            animationDuration: p.duration,
            animationDelay: p.delay,
            '--drift-x': p.driftX,
            '--rot-end': p.rotEnd,
          }}
        >
          <svg
            viewBox="0 0 40 28"
            width="100%"
            height="100%"
            style={{ overflow: 'visible' }}
          >
            <path
              d="M 5,14 C 5,2 25,0 35,14 C 25,28 5,26 5,14 Z"
              fill={p.color}
              opacity="0.82"
            />
            {/* Subtle inner petal sheen */}
            <path
              d="M 12,14 Q 22,7 28,14"
              fill="none"
              stroke="#ffffff"
              strokeWidth="1"
              opacity="0.4"
            />
          </svg>
        </div>
      ))}
    </div>
  );
}
