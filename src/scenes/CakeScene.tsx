import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { StarField } from '../components/StarField';
import { birthdayConfig } from '../config/birthdayConfig';
import { soundPlayer } from '../utils/audio';
import { triggerConfetti } from '../components/ConfettiEffect';

interface CakeSceneProps {
  onCandleBlown: () => void;
}

export const CakeScene: React.FC<CakeSceneProps> = ({ onCandleBlown }) => {
  const [isBlown, setIsBlown] = useState<boolean>(false);
  const [hasInteracted, setHasInteracted] = useState<boolean>(false);

  const handleBlowCandle = () => {
    if (hasInteracted) return;
    setHasInteracted(true);
    soundPlayer.playCandleBlow();

    // Small delay for flame flicker then extinguish
    setTimeout(() => {
      setIsBlown(true);
      triggerConfetti(0.45);

      // Auto transition to Gift Selector after celebration
      setTimeout(() => {
        onCandleBlown();
      }, 1600);
    }, 250);
  };

  return (
    <div className="relative w-full min-h-[100dvh] bg-[#B9A6DA] flex items-center justify-center p-3 sm:p-6 overflow-y-auto overflow-x-hidden select-none">
      <StarField />

      {/* Main Container Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative z-10 w-full max-w-sm sm:max-w-xl md:max-w-3xl lg:max-w-4xl my-auto py-6"
      >
        {/* Central Cream Card with Purple Wavy Border */}
        <div 
          className="relative w-full bg-[#FAF5DE] rounded-[28px] sm:rounded-[38px] md:rounded-[42px] px-4 py-6 sm:px-10 sm:py-10 shadow-[0_20px_45px_rgba(75,50,120,0.22)] border-[3px] sm:border-[4px] border-[#7C66B9] flex flex-col items-center justify-center"
          style={{
            boxShadow: '0 20px 45px rgba(75,50,120,0.2), inset 0 0 0 2px rgba(255,255,255,0.7)',
          }}
        >
          {/* Top Elegant Script Title: 'blow and make a wish' */}
          <motion.div 
            initial={{ y: -15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-3 sm:mb-6"
          >
            <h2 className="font-script-romantic italic text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#715AC3] tracking-wide drop-shadow-sm">
              {birthdayConfig.cakeScene.prompt}
            </h2>
            <p className="font-handwritten text-base sm:text-lg md:text-xl text-[#8E78CA] mt-0.5 sm:mt-1">
              {!isBlown ? birthdayConfig.cakeScene.wishHint : "wish granted! 💖"}
            </p>
          </motion.div>

          {/* Interactive Birthday Cake Container */}
          <div 
            onClick={handleBlowCandle}
            className="relative cursor-pointer group select-none my-2 sm:my-4 touch-manipulation"
            title="Click to blow out the candle!"
          >
            {/* The Cake Image */}
            <div className="relative w-44 sm:w-60 md:w-68 lg:w-76 drop-shadow-[0_12px_24px_rgba(70,40,110,0.2)] transition-transform duration-300 group-hover:scale-105 active:scale-95">
              <img
                src={birthdayConfig.stickers.cake}
                alt="Birthday Cake"
                className="w-full h-auto object-contain pointer-events-none"
              />

              {/* Animated Flame Element over the Candle */}
              <AnimatePresence>
                {!isBlown && (
                  <motion.div
                    initial={{ opacity: 1, scale: 1 }}
                    animate={{
                      scale: [1, 1.15, 0.95, 1.1, 1],
                      opacity: [0.95, 1, 0.9, 1, 0.95],
                      rotate: [-2, 2, -1, 1, -2],
                    }}
                    exit={{
                      opacity: 0,
                      scale: [1, 1.4, 0.2],
                      y: -15,
                      transition: { duration: 0.3 }
                    }}
                    transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }}
                    className="absolute top-[16%] left-[46.5%] -translate-x-1/2 w-6 h-9 sm:w-8 sm:h-12 pointer-events-none"
                  >
                    {/* Glowing Candle Flame SVG */}
                    <div className="relative w-full h-full flex items-center justify-center">
                      <div className="absolute w-6 h-8 sm:w-8 sm:h-10 bg-yellow-300/40 rounded-full blur-sm animate-pulse" />
                      <div className="relative w-4 h-6 sm:w-5 sm:h-8 bg-gradient-to-t from-orange-500 via-amber-400 to-yellow-200 rounded-full shadow-[0_0_12px_rgba(255,200,50,0.8)]" />
                      <div className="absolute bottom-1 w-1.5 h-2 sm:w-2 sm:h-3 bg-blue-400 rounded-full opacity-80" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Smoke Rising Effect when candle is blown */}
              <AnimatePresence>
                {isBlown && (
                  <motion.div
                    initial={{ opacity: 0, y: 0, scale: 0.6 }}
                    animate={{ opacity: [0, 0.8, 0], y: -45, scale: [0.8, 1.3, 1.8], x: [0, 8, -6, 4] }}
                    transition={{ duration: 1.4, ease: 'easeOut' }}
                    className="absolute top-[14%] left-[47%] -translate-x-1/2 pointer-events-none"
                  >
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gray-400/40 blur-sm" />
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gray-300/30 blur-md -mt-2 -ml-1" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* RIGHT SIDE: Cute photo in place of the cat */}
          <motion.div
            initial={{ opacity: 0, x: 25, rotate: 8 }}
            animate={{ opacity: 1, x: 0, rotate: 5 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute -right-2 sm:-right-5 md:-right-7 -bottom-3 sm:-bottom-5 md:-bottom-6 select-none z-20 pointer-events-none sm:pointer-events-auto"
          >
            {/* Polaroid Frame with subtle shadow and border */}
            <div className="relative w-24 sm:w-36 md:w-46 lg:w-52 p-1.5 sm:p-2.5 pb-2.5 sm:pb-5 bg-white rounded-xl sm:rounded-2xl shadow-[0_14px_32px_rgba(50,30,85,0.28)] border-1.5 sm:border-2 border-white/90 drop-shadow-md">
              {/* Mini Party Hat on top corner */}
              <div className="absolute -top-3 sm:-top-6 md:-top-7 -left-2 sm:-left-3 md:-left-4 w-7 sm:w-11 md:w-14 pointer-events-none drop-shadow-sm -rotate-12 z-10">
                <img
                  src={birthdayConfig.stickers.partyHatYellow || '/assets/party-hat-yellow.png'}
                  alt="Party hat"
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Photo */}
              <div className="aspect-[4/5] w-full overflow-hidden rounded-lg sm:rounded-xl bg-[#FAF5DE] shadow-inner">
                <img
                  src={birthdayConfig.photos.cakePhoto}
                  alt="Birthday boy"
                  className="w-full h-full object-cover object-[center_18%] pointer-events-none"
                />
              </div>

              {/* Cute Handwritten Caption */}
              <p className="font-handwritten text-center text-[10px] sm:text-xs md:text-sm text-[#98263A] font-bold mt-1 sm:mt-2 tracking-wide">
                your baby ✨
              </p>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </div>
  );
};
