import React, { useMemo } from 'react';

/**
 * MeadowWildflowers Component
 * Generates dense carpets and clusters of small, delicate wildflowers
 * (forget-me-nots, buttercups, primroses, clover blossoms, tiny chamomile daisies, violas)
 * nestled among the meadow grass and tall stems.
 */
export default function MeadowWildflowers() {
  const smallFlowers = useMemo(() => {
    // 32 small charming wildflowers distributed across the garden bottom
    const types = [
      { type: 'forgetmenot', color: '#38bdf8', core: '#fde047', petals: 5 },
      { type: 'buttercup', color: '#facc15', core: '#15803d', petals: 5 },
      { type: 'primrose', color: '#f472b6', core: '#fef08a', petals: 5 },
      { type: 'mini-daisy', color: '#ffffff', core: '#eab308', petals: 8 },
      { type: 'viola', color: '#a855f7', core: '#fde047', petals: 4 },
      { type: 'coral-sprout', color: '#fb7185', core: '#1e293b', petals: 6 },
      { type: 'lavender-sprig', color: '#c084fc', core: '#7c3aed', petals: 3 },
    ];

    return Array.from({ length: 34 }).map((_, i) => {
      const left = ((i * 3.05 + 1.2) % 98);
      const bottom = 12 + (i % 6) * 16; // nestled between 12px and 92px
      const stemHeight = 45 + (i % 5) * 18;
      const size = 20 + (i % 4) * 6; // small sizes (20px - 38px)
      const swayDuration = 2.8 + (i % 5) * 0.7;
      const delay = -((i * 0.45) % 3.5);
      const flowerMeta = types[i % types.length];
      const curve = ((i % 5) - 2) * 8;

      return {
        id: `mini-${i}`,
        left: `${left}%`,
        bottom: `${bottom}px`,
        stemHeight,
        size,
        swayDuration: `${swayDuration}s`,
        delay: `${delay}s`,
        flowerMeta,
        curve,
        zIndex: i % 2 === 0 ? 6 : 4, // weave in foreground and midground
      };
    });
  }, []);

  return (
    <div
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '240px',
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    >
      {smallFlowers.map((f) => (
        <div
          key={f.id}
          style={{
            position: 'absolute',
            left: f.left,
            bottom: f.bottom,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            transformOrigin: 'bottom center',
            animation: `mini-sway ${f.swayDuration} ease-in-out infinite alternate`,
            animationDelay: f.delay,
            zIndex: f.zIndex,
          }}
        >
          {/* Small face-forward flower head */}
          <div
            style={{
              width: `${f.size}px`,
              height: `${f.size}px`,
              marginBottom: '-4px',
              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.15))',
            }}
          >
            <svg
              viewBox="-20 -20 40 40"
              width="100%"
              height="100%"
              style={{ overflow: 'visible' }}
            >
              {/* Petals */}
              {Array.from({ length: f.flowerMeta.petals }).map((_, pIdx) => {
                const angle = (360 / f.flowerMeta.petals) * pIdx;
                return (
                  <circle
                    key={pIdx}
                    cx={Math.cos((angle * Math.PI) / 180) * 8}
                    cy={Math.sin((angle * Math.PI) / 180) * 8}
                    r={f.size * 0.24}
                    fill={f.flowerMeta.color}
                    opacity="0.94"
                  />
                );
              })}

              {/* Center pistil / eye */}
              <circle cx="0" cy="0" r={f.size * 0.18} fill={f.flowerMeta.core} />
              <circle cx="-0.8" cy="-0.8" r={f.size * 0.08} fill="#ffffff" opacity="0.6" />
            </svg>
          </div>

          {/* Tiny green stem connecting into the lawn */}
          <svg
            width="20"
            height={f.stemHeight}
            viewBox={`0 0 20 ${f.stemHeight}`}
            style={{ overflow: 'visible' }}
          >
            <path
              d={`M 10,${f.stemHeight} Q ${10 + f.curve},${f.stemHeight * 0.5} 10,0`}
              fill="none"
              stroke="#16a34a"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
            {/* Tiny leaf attached to stem */}
            <path
              d={f.curve >= 0 ? 'M 10,25 Q 2,20 0,15 Q 6,24 10,25' : 'M 10,25 Q 18,20 20,15 Q 14,24 10,25'}
              fill="#22c55e"
            />
          </svg>
        </div>
      ))}

      <style>{`
        @keyframes mini-sway {
          0% {
            transform: rotate(-3.5deg);
          }
          100% {
            transform: rotate(4.2deg);
          }
        }
      `}</style>
    </div>
  );
}
