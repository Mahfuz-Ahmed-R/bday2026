import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { birthdayConfig } from '../config/birthdayConfig';
import { HandDrawnButton } from '../components/HandDrawnButton';
import { triggerConfetti } from '../components/ConfettiEffect';

interface BirthdayRevealProps {
  onNext: () => void;
}

export const BirthdayReveal: React.FC<BirthdayRevealProps> = ({ onNext }) => {
  useEffect(() => {
    // Gentle celebration confetti upon reveal
    triggerConfetti(0.4);
  }, []);

  // Ransom-note styled letters for "HAPPY BIRTHDAY"
  const ransomHappy = [
    { char: 'H', bg: '#A62B3F', text: '#FFF', rot: -4 },
    { char: 'A', bg: '#FFFFFF', text: '#222', rot: 3 },
    { char: 'P', bg: '#F1A2B2', text: '#801A2F', rot: -3 },
    { char: 'P', bg: '#6FD1C9', text: '#FFF', rot: 4 },
    { char: 'Y', bg: '#F49838', text: '#FFF', rot: -2 },
  ];

  const ransomBirthday = [
    { char: 'B', bg: '#222222', text: '#FFF', rot: -3 },
    { char: 'I', bg: '#F5E6CC', text: '#6845B2', rot: 4 },
    { char: 'R', bg: '#E4A03A', text: '#FFF', rot: -5 },
    { char: 't', bg: '#9E2439', text: '#FFF', rot: 2 },
    { char: 'H', bg: '#3CA06F', text: '#FFF', rot: -4 },
    { char: 'd', bg: '#4A5568', text: '#FFF', rot: 3 },
    { char: 'A', bg: '#333333', text: '#FFF', rot: -2 },
    { char: 'Y', bg: '#D34056', text: '#FFF', rot: 5 },
  ];

  return (
    <div className="relative w-full h-full min-h-screen bg-striped-pastel flex items-center justify-center p-3 sm:p-6 overflow-hidden select-none">
      {/* Top Red Birthday Bunting Banner */}
      <div className="absolute top-0 inset-x-0 h-14 sm:h-16 flex justify-between items-start pointer-events-none z-20 overflow-hidden">
        {/* String curve with hanging triangular flags */}
        <svg viewBox="0 0 1200 80" preserveAspectRatio="none" className="w-full h-full text-[#98263A] drop-shadow-sm">
          {/* Hanging string */}
          <path d="M 0 15 Q 300 45 600 20 Q 900 45 1200 15" fill="none" stroke="#5A479F" strokeWidth="2.5" />
          {/* Triangular Pennants */}
          {[
            { x: 30, y: 17 }, { x: 90, y: 22 }, { x: 155, y: 27 }, { x: 220, y: 31 },
            { x: 290, y: 32 }, { x: 360, y: 30 }, { x: 430, y: 26 }, { x: 500, y: 23 },
            { x: 570, y: 20 }, { x: 640, y: 22 }, { x: 710, y: 26 }, { x: 780, y: 30 },
            { x: 850, y: 32 }, { x: 920, y: 30 }, { x: 990, y: 26 }, { x: 1060, y: 22 },
            { x: 1130, y: 17 }
          ].map((flag, idx) => (
            <polygon
              key={idx}
              points={`${flag.x},${flag.y} ${flag.x + 38},${flag.y + 2} ${flag.x + 19},${flag.y + 42}`}
              fill={idx % 2 === 0 ? '#98263A' : '#A92F45'}
              stroke="#7E1C2E"
              strokeWidth="0.8"
            />
          ))}
        </svg>
      </div>

      {/* Main Composition Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative z-10 w-full max-w-4xl flex items-center justify-center my-auto"
      >
        {/* Central Cream Card with thick purple wavy border */}
        <div 
          className="relative w-full bg-[#FAF5DE] rounded-[42px] p-6 sm:p-10 shadow-[0_20px_45px_rgba(70,45,110,0.22)] border-[4px] border-[#7C66B9] flex flex-col items-center justify-center min-h-[460px] sm:min-h-[500px]"
          style={{
            boxShadow: '0 20px 45px rgba(70,45,110,0.2), inset 0 0 0 2px rgba(255,255,255,0.7)',
          }}
        >
          {/* CENTER: Couple Photo with Party Hat */}
          <div className="relative my-auto flex flex-col items-center">
            {/* The Party Hat placed over the couple */}
            <motion.div
              initial={{ y: -20, rotate: -8 }}
              animate={{ y: 0, rotate: [-8, -4, -8] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              className="absolute -top-16 sm:-top-20 -left-6 sm:-left-8 w-24 sm:w-32 z-20 pointer-events-none drop-shadow-md"
            >
              <img
                src={birthdayConfig.stickers.partyHatYellow || '/assets/party-hat-yellow.png'}
                alt="Party hat"
                className="w-full h-auto object-contain"
              />
            </motion.div>

            {/* Couple Photo Container */}
            <div className="relative w-48 sm:w-60 md:w-68 aspect-[4/3] rounded-2xl overflow-hidden shadow-md border-4 border-white">
              <img
                src={birthdayConfig.photos.birthdayCouple}
                alt="Birthday couple"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* BOTTOM: Ransom / Cut-paper HAPPY BIRTHDAY */}
          <div className="relative mt-5 sm:mt-7 flex flex-col items-center gap-1.5 z-20">
            {/* Golden decorative stars on sides */}
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="text-xl sm:text-2xl text-[#D3A528] animate-bounce">★</span>
              {/* HAPPY */}
              <div className="flex items-center gap-1 sm:gap-1.5">
                {ransomHappy.map((l, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.15, rotate: 0 }}
                    style={{
                      backgroundColor: l.bg,
                      color: l.text,
                      transform: `rotate(${l.rot}deg)`,
                    }}
                    className="w-7 h-9 sm:w-9 sm:h-11 flex items-center justify-center font-serif-display font-black text-xl sm:text-2xl rounded-sm shadow-md border border-black/10 select-none"
                  >
                    {l.char}
                  </motion.div>
                ))}
              </div>
              <span className="text-xl sm:text-2xl text-[#D3A528] animate-bounce" style={{ animationDelay: '0.5s' }}>★</span>
            </div>

            {/* BIRTHDAY */}
            <div className="flex items-center gap-1 sm:gap-1.5 mt-0.5">
              {ransomBirthday.map((l, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.15, rotate: 0 }}
                  style={{
                    backgroundColor: l.bg,
                    color: l.text,
                    transform: `rotate(${l.rot}deg)`,
                  }}
                  className="w-6 h-8 sm:w-8 sm:h-10 flex items-center justify-center font-serif-display font-bold text-lg sm:text-xl rounded-sm shadow-md border border-black/10 select-none"
                >
                  {l.char}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* LEFT DECORATION: Balloons & Halftone Cat Paw */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute -left-6 sm:-left-12 lg:-left-20 bottom-0 pointer-events-none z-30 select-none"
        >
          <div className="w-32 sm:w-44 lg:w-52 drop-shadow-[0_8px_16px_rgba(60,35,100,0.25)]">
            <img
              src={birthdayConfig.stickers.catPawBalloons}
              alt="Cat holding balloons"
              className="w-full h-auto object-contain"
            />
          </div>
        </motion.div>

        {/* RIGHT DECORATION: Disco Ball, Star & Right Cat Paw */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute -right-4 sm:-right-10 lg:-right-16 top-4 sm:top-6 pointer-events-none z-30 select-none"
        >
          <div className="w-36 sm:w-48 lg:w-56 drop-shadow-[0_10px_20px_rgba(60,35,100,0.25)]">
            <img
              src={birthdayConfig.stickers.discoBall}
              alt="Disco ball"
              className="w-full h-auto object-contain"
            />
          </div>
        </motion.div>

        {/* BOTTOM RIGHT: Cat Paw wearing mini hat */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="absolute -right-3 sm:-right-8 bottom-0 pointer-events-none z-30 select-none hidden sm:block"
        >
          <div className="w-24 sm:w-32 drop-shadow-md">
            <img
              src={birthdayConfig.stickers.catPawRight}
              alt="Party cat paw"
              className="w-full h-auto object-contain"
            />
          </div>
        </motion.div>

        {/* NAVIGATION: 'next' button on right */}
        <div className="absolute right-4 sm:right-10 bottom-16 sm:bottom-20 z-30">
          <HandDrawnButton
            variant="underline"
            onClick={onNext}
            className="text-3xl sm:text-4xl text-[#715AC3] font-serif-vintage hover:text-[#5A43AE]"
          >
            {birthdayConfig.birthdayReveal.nextText}
          </HandDrawnButton>
        </div>

      </motion.div>
    </div>
  );
};
