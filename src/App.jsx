import React, { useState, useEffect } from 'react';
import Garden from './components/Garden';
import GardenControls from './components/GardenControls';
import LetterModal from './components/LetterModal';

export default function App() {
  const [theme, setTheme] = useState('dawn');
  const [isLetterOpen, setIsLetterOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <main
      style={{
        width: '100vw',
        height: '100vh',
        height: '100dvh',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ambient header controls (Themes, Sound & Note for Motuu) */}
      <GardenControls
        theme={theme}
        setTheme={setTheme}
        onOpenLetter={() => setIsLetterOpen(true)}
      />

      {/* Main Fullscreen Animated Garden Scene */}
      <Garden theme={theme} />

      {/* Dedicated Handwritten Note Modal for Motuu */}
      <LetterModal
        isOpen={isLetterOpen}
        onClose={() => setIsLetterOpen(false)}
      />
    </main>
  );
}
