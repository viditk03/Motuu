import React from 'react';

/**
 * A beautiful, elegant handwritten-style letter modal for Motuu.
 */
export default function LetterModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(15, 23, 42, 0.65)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        padding: '20px',
        animation: 'modalFadeIn 0.35s ease-out',
      }}
      onClick={onClose}
    >
      <div
        style={{
          position: 'relative',
          maxWidth: '480px',
          width: '100%',
          maxHeight: '88vh',
          maxHeight: '88dvh',
          overflowY: 'auto',
          background: 'linear-gradient(145deg, #fffbf5, #fef7ee)',
          borderRadius: '24px',
          padding: 'clamp(20px, 5vw, 36px) clamp(16px, 5vw, 32px)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(251, 191, 36, 0.2)',
          border: '1px solid rgba(254, 215, 170, 0.6)',
          textAlign: 'center',
          color: '#451a03',
          fontFamily: "'Playfair Display', Georgia, serif",
          animation: 'cardSlideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Decorative corner florals */}
        <div style={{ fontSize: '1.8rem', marginBottom: '8px' }}>🌸 ✨ 🌸</div>

        <h2
          style={{
            fontSize: '1.75rem',
            fontWeight: 600,
            marginBottom: '18px',
            color: '#9a3412',
            letterSpacing: '0.02em',
          }}
        >
          Dear Motuu,
        </h2>

        <p
          style={{
            fontSize: '1.05rem',
            lineHeight: 1.85,
            color: '#78350f',
            fontStyle: 'italic',
            marginBottom: '18px',
          }}
        >
          Earthly blossoms wither with time, but in my heart, you never do.
          So I wove this sanctuary under the open sky just for you — where every petal dances
          to your rhythm, glows under the starlight, and blooms without end.
        </p>

        <p
          style={{
            fontSize: '1rem',
            lineHeight: 1.8,
            color: '#92400e',
            marginBottom: '20px',
          }}
        >
          Whenever the world feels overwhelming or quiet, close your eyes and remember:
          you are the softest light, the sweetest laughter, and my favorite reason to smile.
          Every petal here carries a secret wish made only for you. ✨
        </p>

        <div
          style={{
            fontSize: '1.05rem',
            lineHeight: 1.7,
            fontWeight: 600,
            color: '#b45309',
            fontFamily: "'Playfair Display', Georgia, serif",
            borderTop: '1px dashed #fed7aa',
            paddingTop: '18px',
            marginBottom: '24px',
          }}
        >
          <span style={{ display: 'block', fontSize: '1.15rem', color: '#be123c', marginBottom: '8px' }}>
            Forever your soft place to land. 🌸💫
          </span>
          No matter where tomorrow takes us, every flower here will keep whispering your name.
          <br /><br />
          <span style={{ fontStyle: 'italic', color: '#9a3412', fontSize: '1.1rem' }}>
            With endless love & warmth, always,
          </span>
          <br />
          <span style={{ fontSize: '1.25rem', color: '#e11d48', fontWeight: 700 }}>
            Yours always, Motuu's forever 💖
          </span>
        </div>

        <button
          onClick={onClose}
          style={{
            border: 'none',
            background: 'linear-gradient(135deg, #f59e0b, #ea580c)',
            color: '#ffffff',
            padding: '10px 28px',
            borderRadius: '9999px',
            fontSize: '0.95rem',
            fontWeight: 600,
            fontFamily: "'Outfit', sans-serif",
            cursor: 'pointer',
            boxShadow: '0 8px 16px rgba(234, 88, 12, 0.25)',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          Close & Enjoy The Garden 🌿
        </button>
      </div>

      <style>{`
        @keyframes modalFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes cardSlideUp {
          from { transform: translateY(30px) scale(0.95); opacity: 0; }
          to { transform: translateY(0) scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
