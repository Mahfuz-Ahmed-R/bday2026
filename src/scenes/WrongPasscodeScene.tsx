import React from 'react';
import { motion } from 'framer-motion';
import { StarField } from '../components/StarField';
import { HandDrawnButton } from '../components/HandDrawnButton';
import { birthdayConfig } from '../config/birthdayConfig';

interface WrongPasscodeSceneProps {
  onTryAgain: () => void;
}

export const WrongPasscodeScene: React.FC<WrongPasscodeSceneProps> = ({ onTryAgain }) => {
  return (
    <div className="relative w-full h-full min-h-screen bg-[#B9A6DA] flex flex-col items-center justify-center p-4 sm:p-6 overflow-hidden select-none">
      <StarField />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative z-10 flex flex-col items-center text-center max-w-lg"
      >
        {/* Pixel style heading: wrong passcode :[ */}
        <h2 className="font-mono text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-widest drop-shadow-[0_4px_10px_rgba(80,50,130,0.3)] mb-4 select-none">
          wrong passcode :[
        </h2>

        {/* ERROR Stamp */}
        <motion.div 
          initial={{ scale: 1.5, rotate: -8, opacity: 0 }}
          animate={{ scale: 1, rotate: -5, opacity: 1 }}
          transition={{ type: 'spring', damping: 12, stiffness: 200 }}
          className="my-4 px-8 py-3 rounded-2xl border-4 border-dashed border-white/80 text-white font-serif-display font-black text-4xl sm:text-5xl tracking-widest uppercase shadow-lg select-none"
        >
          ERROR
        </motion.div>

        {/* TRY AGAIN Button */}
        <div className="mt-4 mb-6">
          <HandDrawnButton
            variant="pill"
            onClick={onTryAgain}
            className="text-2xl sm:text-3xl py-2.5 px-8 text-[#715AC3] bg-white shadow-md"
          >
            TRY AGAIN
          </HandDrawnButton>
        </div>

        {/* Panda on Bear cute illustration */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-48 sm:w-60 drop-shadow-[0_12px_24px_rgba(70,40,110,0.25)] select-none"
        >
          <img
            src={birthdayConfig.stickers.bubuDuduError}
            alt="Wrong passcode reaction"
            className="w-full h-auto object-contain pointer-events-none"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};
