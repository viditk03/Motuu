import React, { useMemo } from 'react';
import Flower from './Flower';
import GrassLayer from './GrassLayer';
import Background from './Background';
import Butterflies from './Butterflies';
import PetalParticles from './PetalParticles';
import MeadowWildflowers from './MeadowWildflowers';

/**
 * Orchestrated Garden Component
 * Arranges large, medium, and small flowers facing the viewer across multi-layered depth.
 * Features 14 distinct flower species with organic heights, curves, and non-synchronous sway.
 */
export default function Garden({ theme = 'dawn' }) {
  const gardenLayout = useMemo(() => {
    return [
      // ==========================================
      // --- BACKGROUND LAYER (z-index 3) ---
      // ==========================================
      {
        id: 'bg-lav-1',
        type: 'lavender',
        left: 3,
        stemHeight: 280,
        stemCurve: -6,
        size: 65,
        scale: 0.82,
        bottom: 45,
        swayClass: 'sway-gentle-1',
        nodClass: 'head-nod-2',
        swayDelay: '-0.9s',
        zIndex: 3,
      },
      {
        id: 'bg-cham-1',
        type: 'chamomile',
        left: 10,
        stemHeight: 290,
        stemCurve: -8,
        size: 85,
        scale: 0.8,
        bottom: 35,
        swayClass: 'sway-slow-1',
        nodClass: 'head-nod-2',
        swayDelay: '-1.4s',
        zIndex: 3,
      },
      {
        id: 'bg-cos-1',
        type: 'cosmos',
        left: 19,
        stemHeight: 310,
        stemCurve: 10,
        size: 92,
        scale: 0.85,
        bottom: 40,
        swayClass: 'sway-gentle-2',
        nodClass: 'head-nod-1',
        swayDelay: '-3.2s',
        zIndex: 3,
      },
      {
        id: 'bg-bb-1',
        type: 'babysbreath',
        left: 28,
        stemHeight: 260,
        stemCurve: -10,
        size: 70,
        scale: 0.8,
        bottom: 30,
        swayClass: 'sway-slow-2',
        nodClass: 'head-nod-3',
        swayDelay: '-2.1s',
        zIndex: 3,
      },
      {
        id: 'bg-sun-1',
        type: 'sunburst',
        left: 37,
        stemHeight: 330,
        stemCurve: -14,
        size: 95,
        scale: 0.85,
        bottom: 42,
        swayClass: 'sway-slow-2',
        nodClass: 'head-nod-3',
        swayDelay: '-0.8s',
        zIndex: 3,
      },
      {
        id: 'bg-tul-1',
        type: 'tulip',
        left: 47,
        stemHeight: 295,
        stemCurve: 9,
        size: 78,
        scale: 0.82,
        bottom: 36,
        swayClass: 'sway-gentle-1',
        nodClass: 'head-nod-1',
        swayDelay: '-2.7s',
        zIndex: 3,
      },
      {
        id: 'bg-an-1',
        type: 'anemone',
        left: 56,
        stemHeight: 305,
        stemCurve: 10,
        size: 88,
        scale: 0.82,
        bottom: 35,
        swayClass: 'sway-gentle-1',
        nodClass: 'head-nod-2',
        swayDelay: '-4.1s',
        zIndex: 3,
      },
      {
        id: 'bg-lav-2',
        type: 'lavender',
        left: 65,
        stemHeight: 290,
        stemCurve: -8,
        size: 68,
        scale: 0.82,
        bottom: 40,
        swayClass: 'sway-slow-1',
        nodClass: 'head-nod-3',
        swayDelay: '-1.2s',
        zIndex: 3,
      },
      {
        id: 'bg-cham-2',
        type: 'chamomile',
        left: 74,
        stemHeight: 300,
        stemCurve: -11,
        size: 88,
        scale: 0.82,
        bottom: 38,
        swayClass: 'sway-slow-1',
        nodClass: 'head-nod-1',
        swayDelay: '-2.5s',
        zIndex: 3,
      },
      {
        id: 'bg-bb-2',
        type: 'babysbreath',
        left: 83,
        stemHeight: 270,
        stemCurve: 8,
        size: 72,
        scale: 0.8,
        bottom: 32,
        swayClass: 'sway-gentle-2',
        nodClass: 'head-nod-2',
        swayDelay: '-3.8s',
        zIndex: 3,
      },
      {
        id: 'bg-pop-1',
        type: 'poppy',
        left: 92,
        stemHeight: 285,
        stemCurve: 14,
        size: 90,
        scale: 0.8,
        bottom: 34,
        swayClass: 'sway-gentle-2',
        nodClass: 'head-nod-3',
        swayDelay: '-1.9s',
        zIndex: 3,
      },

      // ==========================================
      // --- MIDGROUND LAYER (z-index 4) ---
      // ==========================================
      {
        id: 'mid-fmn-1',
        type: 'forgetmenot',
        left: 7,
        stemHeight: 230,
        stemCurve: 12,
        size: 60,
        scale: 0.95,
        bottom: 22,
        swayClass: 'sway-gentle-1',
        nodClass: 'head-nod-2',
        swayDelay: '-1.8s',
        zIndex: 4,
      },
      {
        id: 'mid-pop-1',
        type: 'poppy',
        left: 14,
        stemHeight: 320,
        stemCurve: 16,
        size: 105,
        scale: 0.98,
        bottom: 20,
        swayClass: 'sway-gentle-1',
        nodClass: 'head-nod-2',
        swayDelay: '-2.2s',
        zIndex: 4,
      },
      {
        id: 'mid-mg-1',
        type: 'marigold',
        left: 22,
        stemHeight: 250,
        stemCurve: -10,
        size: 82,
        scale: 0.96,
        bottom: 18,
        swayClass: 'sway-slow-2',
        nodClass: 'head-nod-3',
        swayDelay: '-3.4s',
        zIndex: 4,
      },
      {
        id: 'mid-peo-1',
        type: 'peony',
        left: 31,
        stemHeight: 345,
        stemCurve: -12,
        size: 110,
        scale: 1.02,
        bottom: 24,
        swayClass: 'sway-lively',
        nodClass: 'head-nod-1',
        swayDelay: '-0.5s',
        zIndex: 4,
      },
      {
        id: 'mid-bcup-1',
        type: 'buttercup',
        left: 40,
        stemHeight: 235,
        stemCurve: 8,
        size: 62,
        scale: 0.95,
        bottom: 20,
        swayClass: 'sway-gentle-2',
        nodClass: 'head-nod-1',
        swayDelay: '-2.9s',
        zIndex: 4,
      },
      {
        id: 'mid-an-1',
        type: 'anemone',
        left: 49,
        stemHeight: 340,
        stemCurve: 8,
        size: 102,
        scale: 1.0,
        bottom: 22,
        swayClass: 'sway-gentle-2',
        nodClass: 'head-nod-3',
        swayDelay: '-3.7s',
        zIndex: 4,
      },
      {
        id: 'mid-pansy-1',
        type: 'pansy',
        left: 58,
        stemHeight: 240,
        stemCurve: -12,
        size: 72,
        scale: 0.95,
        bottom: 18,
        swayClass: 'sway-slow-1',
        nodClass: 'head-nod-2',
        swayDelay: '-1.3s',
        zIndex: 4,
      },
      {
        id: 'mid-cos-1',
        type: 'cosmos',
        left: 67,
        stemHeight: 355,
        stemCurve: -15,
        size: 108,
        scale: 1.04,
        bottom: 26,
        swayClass: 'sway-slow-2',
        nodClass: 'head-nod-2',
        swayDelay: '-1.8s',
        zIndex: 4,
      },
      {
        id: 'mid-prim-1',
        type: 'primrose',
        left: 76,
        stemHeight: 245,
        stemCurve: 11,
        size: 68,
        scale: 0.95,
        bottom: 20,
        swayClass: 'sway-gentle-1',
        nodClass: 'head-nod-3',
        swayDelay: '-3.1s',
        zIndex: 4,
      },
      {
        id: 'mid-sun-1',
        type: 'sunburst',
        left: 84,
        stemHeight: 335,
        stemCurve: 13,
        size: 106,
        scale: 1.0,
        bottom: 20,
        swayClass: 'sway-slow-1',
        nodClass: 'head-nod-1',
        swayDelay: '-4.6s',
        zIndex: 4,
      },
      {
        id: 'mid-tul-1',
        type: 'tulip',
        left: 93,
        stemHeight: 280,
        stemCurve: -9,
        size: 82,
        scale: 0.96,
        bottom: 18,
        swayClass: 'sway-gentle-2',
        nodClass: 'head-nod-1',
        swayDelay: '-0.7s',
        zIndex: 4,
      },

      // ==========================================
      // --- FOREGROUND LAYER (z-index 5) ---
      // ==========================================
      {
        id: 'fg-peo-1',
        type: 'peony',
        left: 5,
        stemHeight: 390,
        stemCurve: 18,
        size: 130,
        scale: 1.25,
        bottom: 0,
        swayClass: 'sway-gentle-1',
        nodClass: 'head-nod-1',
        swayDelay: '-1.1s',
        zIndex: 5,
      },
      {
        id: 'fg-pansy-1',
        type: 'pansy',
        left: 12,
        stemHeight: 180,
        stemCurve: -8,
        size: 76,
        scale: 1.1,
        bottom: 0,
        swayClass: 'sway-slow-1',
        nodClass: 'head-nod-3',
        swayDelay: '-2.4s',
        zIndex: 5,
      },
      {
        id: 'fg-sun-1',
        type: 'sunburst',
        left: 21,
        stemHeight: 410,
        stemCurve: -15,
        size: 134,
        scale: 1.28,
        bottom: 0,
        swayClass: 'sway-lively',
        nodClass: 'head-nod-2',
        swayDelay: '-3.5s',
        zIndex: 5,
      },
      {
        id: 'fg-mg-1',
        type: 'marigold',
        left: 31,
        stemHeight: 200,
        stemCurve: 10,
        size: 88,
        scale: 1.12,
        bottom: 0,
        swayClass: 'sway-gentle-2',
        nodClass: 'head-nod-1',
        swayDelay: '-1.7s',
        zIndex: 5,
      },
      {
        id: 'fg-cham-1',
        type: 'chamomile',
        left: 41,
        stemHeight: 365,
        stemCurve: 12,
        size: 120,
        scale: 1.18,
        bottom: 0,
        swayClass: 'sway-slow-2',
        nodClass: 'head-nod-3',
        swayDelay: '-2.0s',
        zIndex: 5,
      },
      {
        id: 'fg-tul-1',
        type: 'tulip',
        left: 50,
        stemHeight: 290,
        stemCurve: -10,
        size: 92,
        scale: 1.15,
        bottom: 0,
        swayClass: 'sway-gentle-1',
        nodClass: 'head-nod-2',
        swayDelay: '-4.0s',
        zIndex: 5,
      },
      {
        id: 'fg-an-1',
        type: 'anemone',
        left: 59,
        stemHeight: 400,
        stemCurve: -16,
        size: 126,
        scale: 1.22,
        bottom: 0,
        swayClass: 'sway-gentle-2',
        nodClass: 'head-nod-1',
        swayDelay: '-4.3s',
        zIndex: 5,
      },
      {
        id: 'fg-prim-1',
        type: 'primrose',
        left: 69,
        stemHeight: 190,
        stemCurve: 9,
        size: 75,
        scale: 1.1,
        bottom: 0,
        swayClass: 'sway-slow-2',
        nodClass: 'head-nod-3',
        swayDelay: '-2.2s',
        zIndex: 5,
      },
      {
        id: 'fg-cos-1',
        type: 'cosmos',
        left: 77,
        stemHeight: 385,
        stemCurve: 15,
        size: 128,
        scale: 1.24,
        bottom: 0,
        swayClass: 'sway-slow-1',
        nodClass: 'head-nod-2',
        swayDelay: '-0.9s',
        zIndex: 5,
      },
      {
        id: 'fg-bcup-1',
        type: 'buttercup',
        left: 87,
        stemHeight: 185,
        stemCurve: -7,
        size: 70,
        scale: 1.1,
        bottom: 0,
        swayClass: 'sway-gentle-1',
        nodClass: 'head-nod-1',
        swayDelay: '-3.3s',
        zIndex: 5,
      },
      {
        id: 'fg-pop-1',
        type: 'poppy',
        left: 95,
        stemHeight: 395,
        stemCurve: -14,
        size: 130,
        scale: 1.22,
        bottom: 0,
        swayClass: 'sway-gentle-1',
        nodClass: 'head-nod-3',
        swayDelay: '-2.8s',
        zIndex: 5,
      },
    ];
  }, []);

  const [activeNote, setActiveNote] = React.useState(null);
  const [clickHearts, setClickHearts] = React.useState([]);

  const sweetNotes = useMemo(() => [
    "Like this bloom, you bring color to everything around you, Kshitija. ✨",
    "No flower in this entire meadow could ever be as radiant as your smile, Kshitija. 🌸",
    "Real flowers fade with time, but this garden blooms forever just for you. 💖",
    "You make ordinary days feel like a sunny morning in spring. ☀️",
    "Every petal here is a little reminder of how special you are, Kshitija. 🌷",
    "Just in case no one told you today: you are genuinely wonderful. 💫",
    "A thousand flowers, and my favorite view is still you. 🌹",
    "Wishing you as much peace and joy as a quiet garden at sunrise. 🌿",
    "May your days always be filled with warmth, happiness, and gentle breezes. 🌼",
  ], []);

  const handleFlowerClick = (e, plant) => {
    // Pick a random note
    const randomNote = sweetNotes[Math.floor(Math.random() * sweetNotes.length)];
    setActiveNote({
      text: randomNote,
      type: plant.type,
      left: plant.left,
    });

    // Add temporary burst of hearts
    const newHeart = {
      id: Date.now() + Math.random(),
      x: e.clientX,
      y: e.clientY,
    };
    setClickHearts((prev) => [...prev.slice(-8), newHeart]);

    // Auto-dismiss note after 5.5 seconds
    setTimeout(() => {
      setActiveNote((current) => (current?.text === randomNote ? null : current));
    }, 5500);
  };

  return (
    <div className="garden-viewport">
      {/* Background (sky gradient, rolling hills, pollen) */}
      <Background theme={theme} />

      {/* Background grass border */}
      <GrassLayer layer="background" />

      {/* Layered Flower Blooms (Large, Medium, Small) */}
      {gardenLayout.map((plant) => (
        <Flower
          key={plant.id}
          type={plant.type}
          size={plant.size}
          stemHeight={plant.stemHeight}
          stemCurve={plant.stemCurve}
          left={plant.left}
          bottom={plant.bottom}
          scale={plant.scale}
          swayClass={plant.swayClass}
          nodClass={plant.nodClass}
          swayDelay={plant.swayDelay}
          zIndex={plant.zIndex}
          onClick={(e) => handleFlowerClick(e, plant)}
        />
      ))}

      {/* Carpet of small wildflowers nestled among the lawn */}
      <MeadowWildflowers />

      {/* Foreground grass meadow */}
      <GrassLayer layer="foreground" />

      {/* Butterflies weaving among blooms */}
      <Butterflies />

      {/* Drifting petals */}
      <PetalParticles count={22} />

      {/* Sweet popup card when clicking a flower for Kshitija */}
      {activeNote && (
        <div
          style={{
            position: 'absolute',
            bottom: '160px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 40,
            background: 'rgba(255, 255, 255, 0.88)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            padding: '16px 24px',
            borderRadius: '20px',
            border: '1px solid rgba(244, 63, 94, 0.3)',
            boxShadow: '0 20px 35px -10px rgba(0, 0, 0, 0.15)',
            color: '#881337',
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: '1.05rem',
            textAlign: 'center',
            maxWidth: '90vw',
            width: '440px',
            animation: 'notePop 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
            pointerEvents: 'auto',
          }}
        >
          <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#e11d48', marginBottom: '4px', fontWeight: 600 }}>
            🌸 A Bloom For Kshitija
          </div>
          <div style={{ fontStyle: 'italic', lineHeight: 1.5 }}>
            "{activeNote.text}"
          </div>
          <button
            onClick={() => setActiveNote(null)}
            style={{
              position: 'absolute',
              top: '8px',
              right: '12px',
              background: 'transparent',
              border: 'none',
              fontSize: '1.1rem',
              color: '#9f1239',
              cursor: 'pointer',
              opacity: 0.6,
            }}
          >
            ×
          </button>
        </div>
      )}

      {/* Floating Hearts Click Particles */}
      {clickHearts.map((h) => (
        <div
          key={h.id}
          style={{
            position: 'fixed',
            left: h.x,
            top: h.y,
            pointerEvents: 'none',
            zIndex: 45,
            fontSize: '1.6rem',
            animation: 'heartFloat 1.4s ease-out forwards',
          }}
        >
          💖
        </div>
      ))}

      <style>{`
        @keyframes notePop {
          0% { transform: translate(-50%, 20px) scale(0.9); opacity: 0; }
          100% { transform: translate(-50%, 0) scale(1); opacity: 1; }
        }
        @keyframes heartFloat {
          0% { transform: translate(-50%, -50%) scale(0.6); opacity: 1; }
          100% { transform: translate(-50%, -120px) scale(1.3); opacity: 0; }
        }
      `}</style>

      {/* Bottom atmospheric title */}
      <div className="peaceful-prompt">
        A garden that blooms forever, just for Kshitija ✨ • Click any flower
      </div>
    </div>
  );
}
