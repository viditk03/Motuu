import React from 'react';

/**
 * Botanical Leaf component with realistic curve, gradient fill, and vein detail.
 * @param {string} side - 'left' or 'right'
 * @param {number} top - vertical percentage position along stem
 * @param {number} size - scale size of leaf
 * @param {number} angle - rotation angle off stem
 * @param {string} shade - primary green shade variant
 */
export default function Leaf({
  side = 'left',
  top = 40,
  size = 40,
  angle = 35,
  shade = '#22c55e',
}) {
  const isLeft = side === 'left';
  const rotation = isLeft ? -angle : angle;
  const animClass = isLeft ? 'leaf-flutter-left' : 'leaf-flutter-right';

  return (
    <div
      className={animClass}
      style={{
        position: 'absolute',
        top: `${top}%`,
        [isLeft ? 'right' : 'left']: '50%',
        width: `${size}px`,
        height: `${size * 0.55}px`,
        transformOrigin: isLeft ? 'bottom right' : 'bottom left',
        transform: `rotate(${rotation}deg)`,
        pointerEvents: 'none',
        zIndex: 1,
      }}
    >
      <svg
        viewBox="0 0 100 55"
        width="100%"
        height="100%"
        style={{ overflow: 'visible' }}
      >
        <defs>
          <linearGradient id={`leafGrad-${side}-${top}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#86efac" />
            <stop offset="60%" stopColor={shade} />
            <stop offset="100%" stopColor="#15803d" />
          </linearGradient>
        </defs>

        {/* Leaf blade body */}
        <path
          d={
            isLeft
              ? 'M100,50 C60,45 10,25 0,0 C35,5 75,20 100,50 Z'
              : 'M0,50 C40,45 90,25 100,0 C65,5 25,20 0,50 Z'
          }
          fill={`url(#leafGrad-${side}-${top})`}
          stroke="#166534"
          strokeWidth="1.2"
          opacity="0.95"
        />

        {/* Central leaf vein */}
        <path
          d={
            isLeft
              ? 'M100,50 Q60,32 5,5'
              : 'M0,50 Q40,32 95,5'
          }
          fill="none"
          stroke="#bbf7d0"
          strokeWidth="1.4"
          strokeLinecap="round"
          opacity="0.75"
        />
      </svg>
    </div>
  );
}
