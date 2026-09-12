import React, { useId } from 'react';
import Stem from './Stem';

/**
 * Comprehensive Botanical Flower Library (Facing Forward toward the viewer)
 * Features large hero blooms, medium garden flowers, and delicate small wildflowers.
 */

// 1. Sunburst Daisy (Golden yellow / orange radiant petals)
function SunburstBloom({ size = 110, id }) {
  const petalCount = 14;
  return (
    <svg width={size} height={size} viewBox="-60 -60 120 120" style={{ overflow: 'visible' }}>
      <defs>
        <radialGradient id={`sunCore-${id}`} cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="50%" stopColor="#d97706" />
          <stop offset="90%" stopColor="#78350f" />
          <stop offset="100%" stopColor="#451a03" />
        </radialGradient>
        <linearGradient id={`sunPetalBack-${id}`} x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#ea580c" />
          <stop offset="60%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#fde047" />
        </linearGradient>
        <linearGradient id={`sunPetalFront-${id}`} x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="70%" stopColor="#facc15" />
          <stop offset="100%" stopColor="#fef08a" />
        </linearGradient>
      </defs>

      {/* Outer petal tier */}
      {Array.from({ length: petalCount }).map((_, i) => {
        const angle = (360 / petalCount) * i;
        return (
          <path
            key={`back-${i}`}
            d="M -7,0 C -11,-22 -7,-48 0,-54 C 7,-48 11,-22 7,0 Z"
            fill={`url(#sunPetalBack-${id})`}
            transform={`rotate(${angle})`}
            opacity="0.92"
          />
        );
      })}

      {/* Inner offset petal tier */}
      {Array.from({ length: petalCount }).map((_, i) => {
        const angle = (360 / petalCount) * i + (360 / petalCount / 2);
        return (
          <path
            key={`front-${i}`}
            d="M -6,0 C -9,-18 -6,-42 0,-47 C 6,-42 9,-18 6,0 Z"
            fill={`url(#sunPetalFront-${id})`}
            transform={`rotate(${angle})`}
            opacity="0.96"
          />
        );
      })}

      {/* Radiant stamen ring */}
      {Array.from({ length: 18 }).map((_, i) => (
        <circle
          key={`stamen-${i}`}
          cx="0"
          cy="-18"
          r="1.8"
          fill="#fef08a"
          transform={`rotate(${(360 / 18) * i})`}
          opacity="0.95"
        />
      ))}

      {/* Center disk */}
      <circle cx="0" cy="0" r="16" fill={`url(#sunCore-${id})`} />
      <circle cx="0" cy="0" r="12" fill="#92400e" opacity="0.6" stroke="#fbbf24" strokeWidth="1" strokeDasharray="2,2" />
      <circle cx="-2" cy="-3" r="3" fill="#fde047" opacity="0.4" />
    </svg>
  );
}

// 2. Velvet Peony / English Rose (Rich layered magenta & rose)
function PeonyBloom({ size = 115, id }) {
  return (
    <svg width={size} height={size} viewBox="-60 -60 120 120" style={{ overflow: 'visible' }}>
      <defs>
        <linearGradient id={`peonyOuter-${id}`} x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#9f1239" />
          <stop offset="60%" stopColor="#e11d48" />
          <stop offset="100%" stopColor="#fb7185" />
        </linearGradient>
        <linearGradient id={`peonyMid-${id}`} x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#be123c" />
          <stop offset="50%" stopColor="#f43f5e" />
          <stop offset="100%" stopColor="#fda4af" />
        </linearGradient>
        <radialGradient id={`peonyCore-${id}`} cx="40%" cy="40%" r="50%">
          <stop offset="0%" stopColor="#fde047" />
          <stop offset="60%" stopColor="#e11d48" />
          <stop offset="100%" stopColor="#881337" />
        </radialGradient>
      </defs>

      {/* Outermost scalloped petals */}
      {Array.from({ length: 10 }).map((_, i) => (
        <path
          key={`tier1-${i}`}
          d="M -16,0 C -22,-25 -14,-50 0,-52 C 14,-50 22,-25 16,0 Z"
          fill={`url(#peonyOuter-${id})`}
          transform={`rotate(${36 * i})`}
          opacity="0.94"
        />
      ))}

      {/* Mid tier layered petals */}
      {Array.from({ length: 10 }).map((_, i) => (
        <path
          key={`tier2-${i}`}
          d="M -14,0 C -18,-20 -10,-40 0,-42 C 10,-40 18,-20 14,0 Z"
          fill={`url(#peonyMid-${id})`}
          transform={`rotate(${36 * i + 18})`}
          opacity="0.96"
        />
      ))}

      {/* Inner cup petals */}
      {Array.from({ length: 8 }).map((_, i) => (
        <path
          key={`tier3-${i}`}
          d="M -10,0 C -14,-15 -8,-28 0,-30 C 8,-28 14,-15 10,0 Z"
          fill="#f43f5e"
          transform={`rotate(${45 * i + 12})`}
        />
      ))}

      <circle cx="0" cy="0" r="14" fill={`url(#peonyCore-${id})`} />
      <circle cx="-1" cy="-2" r="7" fill="#fb7185" opacity="0.8" />
      <circle cx="3" cy="-4" r="1.5" fill="#fef08a" />
      <circle cx="-4" cy="2" r="1.5" fill="#fde047" />
    </svg>
  );
}

// 3. Cosmic Lavender Coneflower / Cosmos
function CosmosBloom({ size = 105, id }) {
  const petals = 8;
  return (
    <svg width={size} height={size} viewBox="-55 -55 110 110" style={{ overflow: 'visible' }}>
      <defs>
        <linearGradient id={`cosmosPetal-${id}`} x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#7c3aed" />
          <stop offset="50%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#e9d5ff" />
        </linearGradient>
        <radialGradient id={`cosmosCore-${id}`} cx="35%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="40%" stopColor="#b45309" />
          <stop offset="85%" stopColor="#451a03" />
          <stop offset="100%" stopColor="#1e1b4b" />
        </radialGradient>
      </defs>

      {Array.from({ length: petals }).map((_, i) => (
        <g key={`petal-${i}`} transform={`rotate(${(360 / petals) * i})`}>
          <path
            d="M -12,0 C -16,-22 -14,-46 0,-50 C 14,-46 16,-22 12,0 Z"
            fill={`url(#cosmosPetal-${id})`}
            opacity="0.94"
          />
          <line x1="0" y1="0" x2="0" y2="-44" stroke="#c084fc" strokeWidth="1" opacity="0.65" />
        </g>
      ))}

      <circle cx="0" cy="0" r="15" fill={`url(#cosmosCore-${id})`} />
      {Array.from({ length: 12 }).map((_, i) => (
        <circle
          key={`core-dot-${i}`}
          cx={Math.cos((i * Math.PI) / 6) * 10}
          cy={Math.sin((i * Math.PI) / 6) * 10}
          r="1.6"
          fill="#fbbf24"
        />
      ))}
      <circle cx="0" cy="0" r="5" fill="#fde047" opacity="0.8" />
    </svg>
  );
}

// 4. Celestial Sky Anemone
function AnemoneBloom({ size = 100, id }) {
  const petals = 6;
  return (
    <svg width={size} height={size} viewBox="-50 -50 100 100" style={{ overflow: 'visible' }}>
      <defs>
        <linearGradient id={`anemonePetal-${id}`} x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#1d4ed8" />
          <stop offset="55%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#93c5fd" />
        </linearGradient>
        <radialGradient id={`anemoneCore-${id}`} cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#1e293b" />
          <stop offset="70%" stopColor="#090d16" />
          <stop offset="100%" stopColor="#020617" />
        </radialGradient>
      </defs>

      {Array.from({ length: petals }).map((_, i) => (
        <path
          key={`p1-${i}`}
          d="M -18,0 C -24,-18 -18,-42 0,-44 C 18,-42 24,-18 18,0 Z"
          fill={`url(#anemonePetal-${id})`}
          transform={`rotate(${60 * i})`}
          opacity="0.92"
        />
      ))}

      {Array.from({ length: petals }).map((_, i) => (
        <path
          key={`p2-${i}`}
          d="M -15,0 C -20,-16 -14,-38 0,-40 C 14,-38 20,-16 15,0 Z"
          fill={`url(#anemonePetal-${id})`}
          transform={`rotate(${60 * i + 30})`}
          opacity="0.96"
        />
      ))}

      <circle cx="0" cy="0" r="14" fill={`url(#anemoneCore-${id})`} />
      {Array.from({ length: 14 }).map((_, i) => (
        <circle
          key={`an-stamen-${i}`}
          cx={Math.cos((i * Math.PI) / 7) * 11}
          cy={Math.sin((i * Math.PI) / 7) * 11}
          r="1.4"
          fill="#fef08a"
        />
      ))}
      <circle cx="0" cy="0" r="6" fill="#0284c7" opacity="0.6" />
    </svg>
  );
}

// 5. Chamomile / White Pearl Daisy
function ChamomileBloom({ size = 95, id }) {
  const petals = 16;
  return (
    <svg width={size} height={size} viewBox="-50 -50 100 100" style={{ overflow: 'visible' }}>
      <defs>
        <linearGradient id={`chamPetal-${id}`} x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#f1f5f9" />
          <stop offset="60%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#f8fafc" />
        </linearGradient>
        <radialGradient id={`chamCore-${id}`} cx="35%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="40%" stopColor="#facc15" />
          <stop offset="85%" stopColor="#eab308" />
          <stop offset="100%" stopColor="#ca8a04" />
        </radialGradient>
      </defs>

      {Array.from({ length: petals }).map((_, i) => (
        <path
          key={`petal-${i}`}
          d="M -4,0 C -7,-15 -5,-38 0,-42 C 5,-38 7,-15 4,0 Z"
          fill={`url(#chamPetal-${id})`}
          stroke="#cbd5e1"
          strokeWidth="0.5"
          transform={`rotate(${(360 / petals) * i})`}
          opacity="0.97"
        />
      ))}

      <circle cx="0" cy="0" r="15" fill={`url(#chamCore-${id})`} stroke="#a16207" strokeWidth="0.8" />
      <circle cx="-3" cy="-3" r="4" fill="#ffffff" opacity="0.4" />
    </svg>
  );
}

// 6. Coral Poppy
function PoppyBloom({ size = 110, id }) {
  return (
    <svg width={size} height={size} viewBox="-55 -55 110 110" style={{ overflow: 'visible' }}>
      <defs>
        <linearGradient id={`poppyPetal-${id}`} x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#e11d48" />
          <stop offset="50%" stopColor="#fb7185" />
          <stop offset="100%" stopColor="#ffedd5" />
        </linearGradient>
        <radialGradient id={`poppyCenter-${id}`} cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#15803d" />
          <stop offset="60%" stopColor="#166534" />
          <stop offset="100%" stopColor="#0f172a" />
        </radialGradient>
      </defs>

      {Array.from({ length: 4 }).map((_, i) => (
        <path
          key={`poppy-outer-${i}`}
          d="M -22,0 C -34,-20 -20,-48 0,-48 C 20,-48 34,-20 22,0 Z"
          fill={`url(#poppyPetal-${id})`}
          transform={`rotate(${90 * i})`}
          opacity="0.9"
        />
      ))}

      {Array.from({ length: 4 }).map((_, i) => (
        <path
          key={`poppy-inner-${i}`}
          d="M -18,0 C -26,-16 -16,-38 0,-40 C 16,-38 26,-16 18,0 Z"
          fill={`url(#poppyPetal-${id})`}
          transform={`rotate(${90 * i + 45})`}
          opacity="0.95"
        />
      ))}

      <circle cx="0" cy="0" r="13" fill="#1e1b4b" />
      <circle cx="0" cy="0" r="9" fill={`url(#poppyCenter-${id})`} />
      {Array.from({ length: 16 }).map((_, i) => (
        <circle
          key={`p-stamen-${i}`}
          cx={Math.cos((i * Math.PI) / 8) * 11}
          cy={Math.sin((i * Math.PI) / 8) * 11}
          r="1.2"
          fill="#fde047"
        />
      ))}
    </svg>
  );
}

// 7. Small Wildflower: Forget-Me-Not (Sky-blue 5 rounded petals, golden center)
function ForgetMeNotBloom({ size = 52, id }) {
  return (
    <svg width={size} height={size} viewBox="-30 -30 60 60" style={{ overflow: 'visible' }}>
      <defs>
        <radialGradient id={`fmnGrad-${id}`} cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#7dd3fc" />
          <stop offset="70%" stopColor="#0284c7" />
          <stop offset="100%" stopColor="#0369a1" />
        </radialGradient>
      </defs>
      {/* 5 rounded sky-blue petals */}
      {Array.from({ length: 5 }).map((_, i) => (
        <circle
          key={i}
          cx="0"
          cy="-14"
          r="8.5"
          fill={`url(#fmnGrad-${id})`}
          transform={`rotate(${72 * i})`}
        />
      ))}
      {/* White inner ring */}
      <circle cx="0" cy="0" r="6" fill="#f8fafc" />
      {/* Golden center */}
      <circle cx="0" cy="0" r="4" fill="#facc15" stroke="#b45309" strokeWidth="0.8" />
    </svg>
  );
}

// 8. Small Wildflower: Buttercup (Bright golden-yellow cupped petals)
function ButtercupBloom({ size = 56, id }) {
  return (
    <svg width={size} height={size} viewBox="-30 -30 60 60" style={{ overflow: 'visible' }}>
      <defs>
        <linearGradient id={`bcupGrad-${id}`} x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#eab308" />
          <stop offset="65%" stopColor="#fde047" />
          <stop offset="100%" stopColor="#fef08a" />
        </linearGradient>
      </defs>
      {Array.from({ length: 5 }).map((_, i) => (
        <path
          key={i}
          d="M -8,0 C -12,-12 -8,-22 0,-24 C 8,-22 12,-12 8,0 Z"
          fill={`url(#bcupGrad-${id})`}
          transform={`rotate(${72 * i})`}
        />
      ))}
      <circle cx="0" cy="0" r="6.5" fill="#15803d" opacity="0.85" />
      {Array.from({ length: 10 }).map((_, i) => (
        <circle
          key={`bc-stamen-${i}`}
          cx={Math.cos((i * Math.PI) / 5) * 5.5}
          cy={Math.sin((i * Math.PI) / 5) * 5.5}
          r="1"
          fill="#facc15"
        />
      ))}
    </svg>
  );
}

// 9. Marigold (Fluffy layered orange/saffron garden bloom)
function MarigoldBloom({ size = 80, id }) {
  return (
    <svg width={size} height={size} viewBox="-45 -45 90 90" style={{ overflow: 'visible' }}>
      <defs>
        <linearGradient id={`marigoldGrad-${id}`} x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#c2410c" />
          <stop offset="50%" stopColor="#ea580c" />
          <stop offset="100%" stopColor="#fbbf24" />
        </linearGradient>
      </defs>
      {/* 3 tiers of dense ruffles */}
      {Array.from({ length: 12 }).map((_, i) => (
        <circle
          key={`mg-1-${i}`}
          cx={Math.cos((i * Math.PI) / 6) * 22}
          cy={Math.sin((i * Math.PI) / 6) * 22}
          r="9"
          fill={`url(#marigoldGrad-${id})`}
          opacity="0.9"
        />
      ))}
      {Array.from({ length: 10 }).map((_, i) => (
        <circle
          key={`mg-2-${i}`}
          cx={Math.cos((i * Math.PI) / 5) * 14}
          cy={Math.sin((i * Math.PI) / 5) * 14}
          r="8"
          fill="#f97316"
          opacity="0.95"
        />
      ))}
      <circle cx="0" cy="0" r="10" fill="#d97706" />
      <circle cx="0" cy="0" r="6" fill="#facc15" />
    </svg>
  );
}

// 10. Pansy / Viola (Velvety violet and sunny yellow face with whiskers)
function PansyBloom({ size = 68, id }) {
  return (
    <svg width={size} height={size} viewBox="-35 -35 70 70" style={{ overflow: 'visible' }}>
      <defs>
        <linearGradient id={`pansyTop-${id}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#581c87" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
        <linearGradient id={`pansyBot-${id}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#facc15" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
      </defs>
      {/* 2 Top dark purple petals */}
      <circle cx="-9" cy="-14" r="11" fill={`url(#pansyTop-${id})`} />
      <circle cx="9" cy="-14" r="11" fill={`url(#pansyTop-${id})`} />
      {/* 2 Side violet petals */}
      <circle cx="-14" cy="0" r="10" fill="#6d28d9" opacity="0.95" />
      <circle cx="14" cy="0" r="10" fill="#6d28d9" opacity="0.95" />
      {/* 1 Large bottom bright yellow petal */}
      <circle cx="0" cy="11" r="13" fill={`url(#pansyBot-${id})`} />
      {/* Dark violet heart ink blotches */}
      <ellipse cx="0" cy="4" rx="6" ry="4" fill="#312e81" />
      <circle cx="0" cy="1" r="2.2" fill="#ffffff" />
      {/* Whisker lines */}
      <line x1="-3" y1="2" x2="-8" y2="4" stroke="#1e1b4b" strokeWidth="0.8" />
      <line x1="3" y1="2" x2="8" y2="4" stroke="#1e1b4b" strokeWidth="0.8" />
      <line x1="0" y1="5" x2="0" y2="10" stroke="#1e1b4b" strokeWidth="0.8" />
    </svg>
  );
}

// 11. Primrose / Wild Rose (Soft pink/fuchsia notched petals with golden star)
function PrimroseBloom({ size = 62, id }) {
  return (
    <svg width={size} height={size} viewBox="-32 -32 64 64" style={{ overflow: 'visible' }}>
      <defs>
        <linearGradient id={`primGrad-${id}`} x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#db2777" />
          <stop offset="60%" stopColor="#f472b6" />
          <stop offset="100%" stopColor="#fbcfe8" />
        </linearGradient>
      </defs>
      {Array.from({ length: 5 }).map((_, i) => (
        <path
          key={i}
          d="M -7,0 C -12,-10 -9,-24 -3,-24 C 0,-21 0,-21 3,-24 C 9,-24 12,-10 7,0 Z"
          fill={`url(#primGrad-${id})`}
          transform={`rotate(${72 * i})`}
        />
      ))}
      <circle cx="0" cy="0" r="7" fill="#facc15" />
      <circle cx="0" cy="0" r="3" fill="#ca8a04" />
    </svg>
  );
}

// 12. Tulip (Facing goblet blossom in brilliant scarlet & yellow)
function TulipBloom({ size = 86, id }) {
  return (
    <svg width={size} height={size} viewBox="-40 -40 80 80" style={{ overflow: 'visible' }}>
      <defs>
        <linearGradient id={`tulipGrad-${id}`} x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#b91c1c" />
          <stop offset="50%" stopColor="#ef4444" />
          <stop offset="100%" stopColor="#facc15" />
        </linearGradient>
      </defs>
      {/* 6 symmetric curved tulip petals facing forward */}
      {Array.from({ length: 6 }).map((_, i) => (
        <path
          key={i}
          d="M -12,0 C -18,-18 -10,-36 0,-38 C 10,-36 18,-18 12,0 Z"
          fill={`url(#tulipGrad-${id})`}
          transform={`rotate(${60 * i})`}
          opacity="0.94"
        />
      ))}
      <circle cx="0" cy="0" r="10" fill="#1e1b4b" />
      {Array.from({ length: 6 }).map((_, i) => (
        <circle
          key={i}
          cx={Math.cos((i * Math.PI) / 3) * 7}
          cy={Math.sin((i * Math.PI) / 3) * 7}
          r="1.8"
          fill="#fef08a"
        />
      ))}
      <circle cx="0" cy="0" r="3.5" fill="#facc15" />
    </svg>
  );
}

// 13. Baby's Breath / Gypsophila (Delicate spray cluster of tiny white starlets)
function BabysBreathBloom({ size = 60, id }) {
  const stars = [
    { x: 0, y: -18, r: 4.5 },
    { x: -14, y: -10, r: 4 },
    { x: 14, y: -10, r: 4 },
    { x: -10, y: 8, r: 3.8 },
    { x: 10, y: 8, r: 3.8 },
    { x: 0, y: 2, r: 4.2 },
    { x: -18, y: 2, r: 3.2 },
    { x: 18, y: 2, r: 3.2 },
  ];
  return (
    <svg width={size} height={size} viewBox="-30 -30 60 60" style={{ overflow: 'visible' }}>
      {/* Branching delicate green twigs */}
      {stars.map((s, i) => (
        <line
          key={`twig-${i}`}
          x1="0"
          y1="18"
          x2={s.x}
          y2={s.y}
          stroke="#4ade80"
          strokeWidth="0.9"
          opacity="0.75"
        />
      ))}
      {/* Tiny white pom-poms */}
      {stars.map((s, i) => (
        <g key={`star-${i}`} transform={`translate(${s.x}, ${s.y})`}>
          <circle cx="0" cy="0" r={s.r} fill="#ffffff" stroke="#e2e8f0" strokeWidth="0.5" />
          <circle cx="0" cy="0" r={s.r * 0.35} fill="#fef08a" />
        </g>
      ))}
    </svg>
  );
}

// 14. Lavender Spire (Vertical spire with multiple stacked purple florets)
function LavenderBloom({ size = 70, id }) {
  const florets = [
    { y: -38, r: 4 },
    { y: -30, r: 5 },
    { y: -22, r: 6 },
    { y: -14, r: 6.5 },
    { y: -6, r: 6 },
    { y: 2, r: 5.5 },
  ];
  return (
    <svg width={size} height={size * 1.2} viewBox="-25 -45 50 60" style={{ overflow: 'visible' }}>
      {/* Central spike */}
      <line x1="0" y1="15" x2="0" y2="-42" stroke="#166534" strokeWidth="2.5" strokeLinecap="round" />
      {/* Stacked purple floret pairs */}
      {florets.map((f, i) => (
        <g key={i} transform={`translate(0, ${f.y})`}>
          <ellipse cx="-5" cy="0" rx={f.r * 0.9} ry={f.r * 0.65} fill="#8b5cf6" transform="rotate(-15)" />
          <ellipse cx="5" cy="0" rx={f.r * 0.9} ry={f.r * 0.65} fill="#7c3aed" transform="rotate(15)" />
          <circle cx="0" cy="0" r={f.r * 0.55} fill="#c084fc" />
          <circle cx="0" cy="0" r={f.r * 0.25} fill="#f5d0fe" />
        </g>
      ))}
    </svg>
  );
}

/**
 * Master Flower Plant Component
 * Connects the face-forward flower head, organic curved stem, and leaves.
 */
export default function Flower({
  type = 'sunburst',
  size = 110,
  stemHeight = 280,
  stemCurve = 10,
  left = 50,
  bottom = 0,
  scale = 1,
  swayClass = 'sway-gentle-1',
  nodClass = 'head-nod-1',
  swayDelay = '0s',
  leaves = [
    { side: 'left', top: 40, size: 45, angle: 30 },
    { side: 'right', top: 65, size: 48, angle: 25 },
  ],
  zIndex = 3,
  onClick,
}) {
  const flowerId = useId().replace(/:/g, '');

  const renderBloom = () => {
    switch (type) {
      case 'peony':
        return <PeonyBloom size={size} id={flowerId} />;
      case 'cosmos':
        return <CosmosBloom size={size} id={flowerId} />;
      case 'anemone':
        return <AnemoneBloom size={size} id={flowerId} />;
      case 'chamomile':
        return <ChamomileBloom size={size} id={flowerId} />;
      case 'poppy':
        return <PoppyBloom size={size} id={flowerId} />;
      case 'forgetmenot':
        return <ForgetMeNotBloom size={size} id={flowerId} />;
      case 'buttercup':
        return <ButtercupBloom size={size} id={flowerId} />;
      case 'marigold':
        return <MarigoldBloom size={size} id={flowerId} />;
      case 'pansy':
        return <PansyBloom size={size} id={flowerId} />;
      case 'primrose':
        return <PrimroseBloom size={size} id={flowerId} />;
      case 'tulip':
        return <TulipBloom size={size} id={flowerId} />;
      case 'babysbreath':
        return <BabysBreathBloom size={size} id={flowerId} />;
      case 'lavender':
        return <LavenderBloom size={size} id={flowerId} />;
      case 'sunburst':
      default:
        return <SunburstBloom size={size} id={flowerId} />;
    }
  };

  return (
    <div
      className={`plant-unit ${swayClass}`}
      style={{
        left: `${left}%`,
        bottom: `${bottom}px`,
        transform: `scale(${scale})`,
        animationDelay: swayDelay,
        zIndex,
      }}
      onClick={onClick}
      title={`${type.charAt(0).toUpperCase() + type.slice(1)} — Click to interact`}
    >
      <div
        className={`flower-bloom ${nodClass}`}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          marginBottom: '-14px',
          animationDelay: swayDelay,
        }}
      >
        {renderBloom()}
      </div>

      <Stem
        height={stemHeight}
        curve={stemCurve}
        stemColor="#15803d"
        leaves={leaves}
      />
    </div>
  );
}
