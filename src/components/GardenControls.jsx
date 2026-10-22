import React, { useState, useEffect, useRef } from 'react';

/**
 * Minimalist, elegant ambient controls customized for Motuu:
 * - Brand badge: "For Motuu ✨" • "A garden that blooms forever, just for you"
 * - Letter for Motuu 💌 button
 * - Theme switcher (Dawn, Sun, Sunset, Twilight)
 * - Soothing Web Audio ambient chimes & gentle breeze sound
 */
export default function GardenControls({
  theme,
  setTheme,
  onOpenLetter,
}) {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const audioCtxRef = useRef(null);
  const intervalRef = useRef(null);

  const toggleAudio = () => {
    if (isPlayingAudio) {
      if (audioCtxRef.current) {
        audioCtxRef.current.close();
        audioCtxRef.current = null;
      }
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      setIsPlayingAudio(false);
      return;
    }

    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;

      // Soft wind noise generator
      const bufferSize = ctx.sampleRate * 2;
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }

      const whiteNoise = ctx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;
      whiteNoise.loop = true;

      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(320, ctx.currentTime);

      const gainNode = ctx.createGain();
      gainNode.gain.setValueAtTime(0.035, ctx.currentTime);

      whiteNoise.connect(filter);
      filter.connect(gainNode);
      gainNode.connect(ctx.destination);
      whiteNoise.start();

      // Pentatonic warm bell chimes
      const notes = [261.63, 293.66, 329.63, 392.0, 440.0, 523.25, 659.25];

      const playRandomChime = () => {
        if (!audioCtxRef.current || audioCtxRef.current.state === 'closed') return;
        const now = audioCtxRef.current.currentTime;
        const osc = audioCtxRef.current.createOscillator();
        const chimeGain = audioCtxRef.current.createGain();

        const freq = notes[Math.floor(Math.random() * notes.length)];
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now);

        chimeGain.gain.setValueAtTime(0.001, now);
        chimeGain.gain.exponentialRampToValueAtTime(0.035, now + 0.08);
        chimeGain.gain.exponentialRampToValueAtTime(0.0001, now + 3.2);

        osc.connect(chimeGain);
        chimeGain.connect(audioCtxRef.current.destination);

        osc.start(now);
        osc.stop(now + 3.3);
      };

      intervalRef.current = setInterval(playRandomChime, 3400);
      playRandomChime();
      setIsPlayingAudio(true);
    } catch {
      // audio error handling
    }
  };

  useEffect(() => {
    return () => {
      if (audioCtxRef.current) audioCtxRef.current.close();
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const themes = [
    { id: 'dawn', label: 'Dawn Glow', icon: '🌅' },
    { id: 'day', label: 'Bright Sun', icon: '☀️' },
    { id: 'sunset', label: 'Warm Sunset', icon: '🌇' },
    { id: 'twilight', label: 'Twilight Moon', icon: '🌙' },
  ];

  return (
    <header className="header-overlay">
      <div className="brand-badge">
        <div>
          <h1 className="brand-title">For Motuu ✨</h1>
          <p className="brand-subtitle">A garden that blooms forever, just for you</p>
        </div>
      </div>

      <nav className="controls-bar" aria-label="Garden Atmosphere Controls">
        {/* Special letter button for Motuu */}
        <button
          className="control-btn letter-btn"
          style={{
            background: 'linear-gradient(135deg, rgba(244, 63, 94, 0.28), rgba(251, 191, 36, 0.28))',
            border: '1px solid rgba(244, 63, 94, 0.45)',
            color: 'var(--ui-text)',
            fontWeight: 600,
          }}
          onClick={onOpenLetter}
          title="Open letter for Motuu"
        >
          <span>💌</span>
          <span className="btn-label-full">A Note For Motuu</span>
          <span className="btn-label-short">Note</span>
        </button>

        {/* Time of Day options */}
        {themes.map((t) => (
          <button
            key={t.id}
            className={`control-btn theme-btn ${theme === t.id ? 'active' : ''}`}
            onClick={() => setTheme(t.id)}
            aria-pressed={theme === t.id}
            title={t.label}
          >
            <span>{t.icon}</span>
            <span className="btn-label-full">{t.label}</span>
          </button>
        ))}

        {/* Ambient garden chimes toggle */}
        <button
          className={`control-btn sound-btn ${isPlayingAudio ? 'active' : ''}`}
          onClick={toggleAudio}
          title={isPlayingAudio ? 'Mute ambient sound' : 'Play peaceful garden chimes & wind'}
          aria-label="Toggle ambient garden sounds"
        >
          <span>{isPlayingAudio ? '🔔' : '🔕'}</span>
          <span className="btn-label-full">{isPlayingAudio ? 'Sound On' : 'Play Sound'}</span>
          <span className="btn-label-short">{isPlayingAudio ? 'On' : 'Mute'}</span>
        </button>
      </nav>
    </header>
  );
}
