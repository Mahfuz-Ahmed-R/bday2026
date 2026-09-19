import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { StarField } from '../components/StarField';
import { soundPlayer } from '../utils/audio';

interface EnvelopeSceneProps {
  onEnvelopeOpened: () => void;
}

export const EnvelopeScene: React.FC<EnvelopeSceneProps> = ({ onEnvelopeOpened }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenEnvelope = () => {
    if (isOpen) return;
    setIsOpen(true);
    soundPlayer.playEnvelopeRustle();

    // After flap opens and letter emerges, transition to love letter
    setTimeout(() => {
      onEnvelopeOpened();
    }, 1200);
  };

  return (
    <div className="relative w-full min-h-[100dvh] bg-[#B9A6DA] flex items-center justify-center p-3 sm:p-6 overflow-y-auto overflow-x-hidden select-none">
      <StarField />

      {/* Floating gentle heart icon */}
      <motion.div
        animate={{ y: [-5, 5, -5], scale: [1, 1.08, 1] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
        className="absolute top-6 sm:top-12 md:top-16 text-2xl sm:text-3xl md:text-4xl text-[#98263A] drop-shadow-sm select-none"
      >
        💌
      </motion.div>

      {/* Main Envelope Container */}
      <div 
        onClick={handleOpenEnvelope}
        className="relative z-10 w-full max-w-[310px] sm:max-w-md md:max-w-lg cursor-pointer group select-none my-auto py-6 touch-manipulation"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative w-full aspect-[1.4/1] bg-[#FAF5DE] rounded-xl sm:rounded-2xl shadow-[0_22px_45px_rgba(65,40,110,0.28)] border-2 border-[#EADFB7] flex items-center justify-center overflow-visible"
        >
          {/* Envelope Bottom Pocket Folds (SVG) */}
          <div className="absolute inset-0 z-10 pointer-events-none rounded-xl sm:rounded-2xl overflow-hidden">
            {/* Left triangle */}
            <svg viewBox="0 0 400 280" preserveAspectRatio="none" className="w-full h-full">
              <polygon points="0,0 200,160 0,280" fill="#F4EBC8" opacity="0.6" />
              <polygon points="400,0 200,160 400,280" fill="#F0E5C0" opacity="0.6" />
              <polygon points="0,280 200,140 400,280" fill="#FAF6DE" />
              <path d="M0,280 L200,140 L400,280" fill="none" stroke="#E6DAB0" strokeWidth="1.5" />
            </svg>
          </div>

          {/* Letter Card Peeking out during open */}
          <motion.div
            initial={{ y: 0, opacity: 0 }}
            animate={isOpen ? { y: -60, opacity: 1 } : { y: 0, opacity: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="absolute z-15 w-[84%] h-[75%] bg-white rounded-lg sm:rounded-xl shadow-md border border-[#D5C6F0] p-3 sm:p-4 flex flex-col items-center justify-center text-center"
          >
            <p className="font-serif-vintage text-base sm:text-xl text-[#715AC3] font-bold">
              Happy Birthday! ❤️
            </p>
            <p className="font-handwritten text-xs sm:text-sm text-[#98263A] mt-0.5 sm:mt-1">
              To my favourite person...
            </p>
          </motion.div>

          {/* Envelope Top Flap */}
          <motion.div
            initial={{ rotateX: 0 }}
            animate={isOpen ? { rotateX: 180, zIndex: 5 } : { rotateX: 0, zIndex: 20 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            style={{ transformOrigin: 'top center', transformStyle: 'preserve-3d' }}
            className="absolute top-0 inset-x-0 h-[55%] pointer-events-none"
          >
            <svg viewBox="0 0 400 150" preserveAspectRatio="none" className="w-full h-full drop-shadow-sm">
              <polygon points="0,0 200,140 400,0" fill="#F3E9C4" stroke="#E6DAB0" strokeWidth="1.5" />
            </svg>
          </motion.div>

          {/* Circular Golden Wax Seal with Red Heart */}
          <motion.div
            initial={{ scale: 1 }}
            animate={isOpen ? { scale: 0, opacity: 0 } : { scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute z-30 top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-[#B68516] via-[#E4B63E] to-[#F7DE7C] shadow-[0_6px_16px_rgba(140,90,10,0.4)] flex items-center justify-center border-2 border-[#DDAF35] group-hover:scale-110 active:scale-95 transition-transform"
          >
            <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full border-2 border-dashed border-[#845E0B]/50 flex items-center justify-center bg-[#DDAF35]/30">
              <span className="text-lg sm:text-2xl text-[#98263A] drop-shadow-sm animate-pulse">
                ❤️
              </span>
            </div>
          </motion.div>

        </motion.div>

        {/* Tap Prompt Hint */}
        <motion.p
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-center font-handwritten text-lg sm:text-xl text-white mt-4 sm:mt-5 drop-shadow-sm"
        >
          {!isOpen ? "tap the wax seal to open 💌" : "opening love letter..."}
        </motion.p>
      </div>

    </div>
  );
};
