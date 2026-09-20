import React from 'react';

/**
 * A beautiful, elegant handwritten-style letter modal for Kshitija.
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
          background: 'linear-gradient(145deg, #fffbf5, #fef7ee)',
          borderRadius: '24px',
          padding: '36px 32px',
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
          Dear Kshitija,
        </h2>

        <p
          style={{
            fontSize: '1.05rem',
            lineHeight: 1.8,
            color: '#78350f',
            fontStyle: 'italic',
            marginBottom: '20px',
          }}
        >
          Real flowers eventually fade, so I built this garden for you.
          Every petal here is coded to bloom perpetually — dancing with the breeze,
          facing you with warmth, and never withering.
        </p>

        <p
          style={{
            fontSize: '1rem',
            lineHeight: 1.7,
            color: '#92400e',
            marginBottom: '26px',
          }}
        >
          Whenever you need a moment of peace, a quiet breath, or a reminder of how
          cherished you are, this little sanctuary is always here for you. ✨
        </p>

        <div
          style={{
            fontSize: '1.1rem',
            fontWeight: 600,
            color: '#b45309',
            fontFamily: "'Playfair Display', Georgia, serif",
            borderTop: '1px dashed #fed7aa',
            paddingTop: '18px',
            marginBottom: '24px',
          }}
        >
          A garden that blooms forever, just for you. 💖
          <br /><br />
          Goodbye, Kshitija.
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
