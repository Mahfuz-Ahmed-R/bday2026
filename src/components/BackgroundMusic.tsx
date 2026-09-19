import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { birthdayConfig } from '../config/birthdayConfig';

export const BackgroundMusic: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio(birthdayConfig.music.src);
    audio.loop = true;
    audio.volume = birthdayConfig.music.defaultVolume; // exactly 60% (0.6)
    audioRef.current = audio;

    const startAudio = () => {
      audio.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        // Autoplay blocked by browser policy until user interaction
        setIsPlaying(false);
      });
    };

    // Attempt automatic playback immediately
    startAudio();

    // Fallback: If browser blocks audio on page load, start upon first interaction anywhere
    const handleFirstInteraction = () => {
      if (audioRef.current && audioRef.current.paused) {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {});
      }
      // Remove listeners once interacted
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
      window.removeEventListener('keydown', handleFirstInteraction);
    };

    window.addEventListener('click', handleFirstInteraction);
    window.addEventListener('touchstart', handleFirstInteraction);
    window.addEventListener('keydown', handleFirstInteraction);

    return () => {
      audio.pause();
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
      window.removeEventListener('keydown', handleFirstInteraction);
    };
  }, []);

  const toggleMute = () => {
    if (!audioRef.current) return;

    if (isMuted) {
      audioRef.current.muted = false;
      setIsMuted(false);
      if (audioRef.current.paused) {
        audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
      }
    } else {
      audioRef.current.muted = true;
      setIsMuted(true);
    }
  };

  return (
    <div className="fixed top-3 left-3 sm:top-4 sm:left-4 z-50 select-none pt-[env(safe-area-inset-top,0px)] pl-[env(safe-area-inset-left,0px)]">
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        onClick={toggleMute}
        className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1 sm:py-1.5 bg-[#FAF6DE]/90 backdrop-blur-md rounded-full shadow-[0_4px_14px_rgba(75,50,120,0.18)] border border-[#C4B4E3] text-[#715AC3] cursor-pointer transition-all hover:bg-white touch-manipulation"
        title={isMuted ? "Unmute music" : "Mute music (60% volume)"}
      >
        {/* Animated Music Note / Disc */}
        <div className="relative w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center">
          {isMuted ? (
            <span className="text-xs sm:text-sm text-[#98263A]">🔇</span>
          ) : (
            <motion.span 
              animate={isPlaying ? { rotate: [0, 10, -10, 0] } : {}}
              transition={{ repeat: Infinity, duration: 1.8 }}
              className="text-xs sm:text-sm"
            >
              🎵
            </motion.span>
          )}
        </div>

        {/* Small Text & Equalizer waves when playing */}
        <div className="flex items-center gap-1 sm:gap-1.5 font-serif-vintage text-[11px] sm:text-xs font-semibold tracking-wide">
          <span>{isMuted ? "muted" : "music 60%"}</span>
          {!isMuted && isPlaying && (
            <div className="flex items-end gap-0.5 h-2.5 sm:h-3">
              <motion.span 
                animate={{ height: ['30%', '100%', '40%'] }} 
                transition={{ repeat: Infinity, duration: 0.6 }} 
                className="w-0.5 bg-[#715AC3] rounded-full" 
              />
              <motion.span 
                animate={{ height: ['70%', '30%', '90%'] }} 
                transition={{ repeat: Infinity, duration: 0.7, delay: 0.1 }} 
                className="w-0.5 bg-[#715AC3] rounded-full" 
              />
              <motion.span 
                animate={{ height: ['40%', '80%', '20%'] }} 
                transition={{ repeat: Infinity, duration: 0.5, delay: 0.2 }} 
                className="w-0.5 bg-[#715AC3] rounded-full" 
              />
            </div>
          )}
        </div>
      </motion.button>
    </div>
  );
};
