import React from 'react';
import Leaf from './Leaf';

/**
 * Organic curved stem component with attached leaves and natural botanical taper.
 * @param {number} height - total pixel height of stem
 * @param {number} curve - curve offset in pixels (-25 to +25 for organic bend)
 * @param {string} stemColor - base color
 * @param {Array} leaves - leaf configuration array
 */
export default function Stem({
  height = 280,
  curve = 10,
  stemColor = '#16a34a',
  leaves = [
    { side: 'left', top: 38, size: 45, angle: 30 },
    { side: 'right', top: 62, size: 50, angle: 25 },
  ],
}) {
  // Stem SVG coordinate math:
  // Base at bottom center (x=40, y=height), Flower neck at top (x=40+curve, y=0)
  const width = 80;
  const startX = 40;
  const startY = height;
  const endX = 40 + curve;
  const endY = 0;
  const midY = height * 0.5;
  const ctrlX = 40 + curve * 0.7;

  // Path from bottom to top with slight thickness taper (6px at base, 3.5px at top)
  const pathD = `M ${startX} ${startY} Q ${ctrlX} ${midY} ${endX} ${endY}`;

  return (
    <div
      style={{
        position: 'relative',
        width: `${width}px`,
        height: `${height}px`,
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <svg
        viewBox={`0 0 ${width} ${height}`}
        width={width}
        height={height}
        style={{ overflow: 'visible' }}
      >
        <defs>
          <linearGradient id={`stemGrad-${curve}-${height}`} x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#14532d" />
            <stop offset="50%" stopColor={stemColor} />
            <stop offset="100%" stopColor="#4ade80" />
          </linearGradient>
        </defs>

        {/* Stem stroke with gradient */}
        <path
          d={pathD}
          fill="none"
          stroke={`url(#stemGrad-${curve}-${height})`}
          strokeWidth="4.5"
          strokeLinecap="round"
        />

        {/* Soft highlight highlight on stem for dimension */}
        <path
          d={pathD}
          fill="none"
          stroke="#86efac"
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.45"
          transform="translate(-0.8, 0)"
        />
      </svg>

      {/* Leaves branching off the stem */}
      {leaves.map((leaf, index) => (
        <Leaf
          key={index}
          side={leaf.side}
          top={leaf.top}
          size={leaf.size}
          angle={leaf.angle}
          shade={stemColor}
        />
      ))}
    </div>
  );
}
