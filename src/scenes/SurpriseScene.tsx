import React from 'react';
import { motion } from 'framer-motion';
import { StarField } from '../components/StarField';
import { HandDrawnButton } from '../components/HandDrawnButton';
import { birthdayConfig } from '../config/birthdayConfig';

interface SurpriseSceneProps {
  onYes: () => void;
  onNo: () => void;
}

export const SurpriseScene: React.FC<SurpriseSceneProps> = ({ onYes, onNo }) => {
  return (
    <div className="relative w-full min-h-[100dvh] bg-[#B9A6DA] flex items-center justify-center p-3 sm:p-6 overflow-y-auto overflow-x-hidden select-none">
      <StarField />

      {/* Main Center Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative z-10 flex flex-col items-center max-w-sm sm:max-w-md md:max-w-lg w-full my-auto py-6"
      >
        {/* White Cat Peeking Over The Box */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative z-20 -mb-4 sm:-mb-5 md:-mb-6 w-28 sm:w-36 md:w-44 select-none drop-shadow-md"
        >
          <img
            src={birthdayConfig.stickers.catPeeking}
            alt="Cute peeking cat"
            className="w-full h-auto object-contain pointer-events-none"
          />
        </motion.div>

        {/* The Question Card */}
        <div 
          className="relative w-full bg-white/95 rounded-[28px] sm:rounded-[36px] p-6 sm:p-10 md:p-12 text-center shadow-[0_18px_40px_rgba(80,55,130,0.22)] border-[3px] sm:border-[3.5px] border-[#715AC3]"
          style={{
            boxShadow: '0 16px 36px rgba(85,60,135,0.2), inset 0 0 0 2px rgba(255,255,255,0.8)',
          }}
        >
          {/* Question Text */}
          <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#715AC3] leading-snug tracking-tight mb-2">
            I have little<br />
            surprise for you.<br />
            <span className="font-serif-vintage italic text-2xl sm:text-3xl md:text-4xl lg:text-5xl block mt-1">
              Wanna see it ?
            </span>
          </h2>
        </div>

        {/* YES and NO buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center justify-center gap-4 sm:gap-8 md:gap-10 mt-6 sm:mt-8 md:mt-10"
        >
          <HandDrawnButton
            variant="pill"
            onClick={onYes}
            className="min-w-[110px] sm:min-w-[130px] md:min-w-[150px] text-xl sm:text-2xl md:text-3xl py-2 sm:py-3 px-6 sm:px-8 text-[#715AC3] touch-manipulation"
          >
            YES
          </HandDrawnButton>

          <HandDrawnButton
            variant="pill"
            onClick={onNo}
            className="min-w-[110px] sm:min-w-[130px] md:min-w-[150px] text-xl sm:text-2xl md:text-3xl py-2 sm:py-3 px-6 sm:px-8 text-[#715AC3] touch-manipulation"
          >
            NO
          </HandDrawnButton>
        </motion.div>
      </motion.div>
    </div>
  );
};
