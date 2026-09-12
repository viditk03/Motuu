import React from 'react';

/**
 * Animated SVG Butterfly with flapping wings and smooth natural flight path.
 */
function Butterfly({
  startLeft = 15,
  startTop = 45,
  scale = 0.8,
  duration = 18,
  delay = 0,
  wingColor = '#f59e0b',
  wingAccent = '#fef08a',
  flightVariant = 1,
}) {
  const flightClass = `butterfly-flight-${flightVariant}`;

  return (
    <div
      className={`butterfly ${flightClass}`}
      style={{
        left: `${startLeft}%`,
        top: `${startTop}%`,
        transform: `scale(${scale})`,
        animationDuration: `${duration}s`,
        animationDelay: `${-delay}s`,
      }}
    >
      <svg
        viewBox="0 0 50 40"
        width="100%"
        height="100%"
        style={{ overflow: 'visible' }}
      >
        {/* Left Wing */}
        <g className="wing-left">
          <path
            d="M 25,20 C 18,2 4,5 2,16 C 0,26 15,34 25,24 Z"
            fill={wingColor}
            opacity="0.9"
          />
          <path
            d="M 23,20 C 16,8 8,10 6,17 C 5,23 15,28 23,22 Z"
            fill={wingAccent}
            opacity="0.75"
          />
        </g>

        {/* Right Wing */}
        <g className="wing-right">
          <path
            d="M 25,20 C 32,2 46,5 48,16 C 50,26 35,34 25,24 Z"
            fill={wingColor}
            opacity="0.9"
          />
          <path
            d="M 27,20 C 34,8 42,10 44,17 C 45,23 35,28 27,22 Z"
            fill={wingAccent}
            opacity="0.75"
          />
        </g>

        {/* Slender butterfly body & antennae */}
        <ellipse cx="25" cy="20" rx="1.8" ry="8" fill="#1e293b" />
        <path
          d="M 24,12 Q 20,6 18,4 M 26,12 Q 30,6 32,4"
          fill="none"
          stroke="#1e293b"
          strokeWidth="0.8"
        />
      </svg>
    </div>
  );
}

export default function Butterflies() {
  return (
    <>
      <style>{`
        .butterfly-flight-1 {
          animation: flightPath1 22s ease-in-out infinite;
        }
        .butterfly-flight-2 {
          animation: flightPath2 26s ease-in-out infinite;
        }
        .butterfly-flight-3 {
          animation: flightPath3 19s ease-in-out infinite;
        }

        @keyframes flightPath1 {
          0% {
            transform: translate(0vw, 0vh) scale(0.7) rotate(15deg);
          }
          25% {
            transform: translate(18vw, -12vh) scale(0.75) rotate(-10deg);
          }
          50% {
            transform: translate(32vw, 4vh) scale(0.7) rotate(20deg);
          }
          75% {
            transform: translate(12vw, 15vh) scale(0.65) rotate(-15deg);
          }
          100% {
            transform: translate(0vw, 0vh) scale(0.7) rotate(15deg);
          }
        }

        @keyframes flightPath2 {
          0% {
            transform: translate(0vw, 0vh) scale(0.65) rotate(-20deg);
          }
          30% {
            transform: translate(-22vw, 8vh) scale(0.6) rotate(15deg);
          }
          60% {
            transform: translate(-35vw, -14vh) scale(0.7) rotate(-5deg);
          }
          85% {
            transform: translate(-10vw, -6vh) scale(0.65) rotate(25deg);
          }
          100% {
            transform: translate(0vw, 0vh) scale(0.65) rotate(-20deg);
          }
        }

        @keyframes flightPath3 {
          0% {
            transform: translate(0vw, 0vh) scale(0.6) rotate(10deg);
          }
          35% {
            transform: translate(15vw, 10vh) scale(0.65) rotate(-25deg);
          }
          70% {
            transform: translate(28vw, -8vh) scale(0.6) rotate(15deg);
          }
          100% {
            transform: translate(0vw, 0vh) scale(0.6) rotate(10deg);
          }
        }
      `}</style>

      {/* Butterfly 1: Golden Amber Monarch hovering near center-left flowers */}
      <Butterfly
        startLeft={22}
        startTop={48}
        scale={0.72}
        duration={22}
        delay={0}
        wingColor="#f59e0b"
        wingAccent="#fef08a"
        flightVariant={1}
      />

      {/* Butterfly 2: Celestial Azure Blue hovering near right flowers */}
      <Butterfly
        startLeft={72}
        startTop={38}
        scale={0.68}
        duration={26}
        delay={9}
        wingColor="#38bdf8"
        wingAccent="#bae6fd"
        flightVariant={2}
      />

      {/* Butterfly 3: Soft Lavender hovering in midground */}
      <Butterfly
        startLeft={48}
        startTop={56}
        scale={0.58}
        duration={19}
        delay={5}
        wingColor="#c084fc"
        wingAccent="#f3e8ff"
        flightVariant={3}
      />
    </>
  );
}
