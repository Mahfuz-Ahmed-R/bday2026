import React from 'react';
import { motion } from 'framer-motion';
import { StarField } from '../components/StarField';
import { HandDrawnButton } from '../components/HandDrawnButton';
import { birthdayConfig } from '../config/birthdayConfig';

interface NoSceneProps {
  onTryAgain: () => void;
}

export const NoScene: React.FC<NoSceneProps> = ({ onTryAgain }) => {
  return (
    <div className="relative w-full min-h-[100dvh] bg-[#B9A6DA] flex flex-col items-center justify-center p-3 sm:p-6 overflow-y-auto overflow-x-hidden select-none">
      <StarField />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative z-10 flex flex-col items-center text-center max-w-sm sm:max-w-xl my-auto py-6"
      >
        {/* Playful Heading */}
        <motion.h2 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-serif-vintage text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-wide drop-shadow-[0_4px_12px_rgba(80,50,130,0.3)] mb-4 sm:mb-8"
        >
          {birthdayConfig.noResponse.heading}
        </motion.h2>

        {/* TRY AGAIN Button with pixel cursor */}
        <div className="relative mb-6 sm:mb-10">
          <HandDrawnButton
            variant="pill"
            onClick={onTryAgain}
            className="text-xl sm:text-3xl py-2.5 sm:py-3 px-6 sm:px-10 text-[#715AC3] bg-white shadow-lg touch-manipulation"
          >
            {birthdayConfig.noResponse.buttonText}
          </HandDrawnButton>

          {/* Retro Pixel Cursor Arrow */}
          <motion.div
            animate={{ x: [0, 6, 0], y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            className="absolute -right-7 -top-4 w-9 h-9 pointer-events-none drop-shadow-md hidden sm:block"
          >
            <svg viewBox="0 0 24 24" fill="white" stroke="#2D224C" strokeWidth="1.5">
              <path d="M4 2L4 20L9 15L13 23L16 21L12 14L18 14L4 2Z" />
            </svg>
          </motion.div>
        </div>

        {/* Bubu & Dudu Cuddle / Hug Illustration */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-48 sm:w-72 md:w-88 select-none drop-shadow-[0_12px_24px_rgba(70,40,110,0.25)]"
        >
          <img
            src={birthdayConfig.stickers.bubuDuduCuddle}
            alt="Cute hugging characters"
            className="w-full h-auto object-contain pointer-events-none"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};
