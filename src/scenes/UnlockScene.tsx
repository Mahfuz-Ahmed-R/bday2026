import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { birthdayConfig } from '../config/birthdayConfig';
import { soundPlayer } from '../utils/audio';
import { triggerConfetti } from '../components/ConfettiEffect';

interface UnlockSceneProps {
  onUnlockSuccess: () => void;
  onWrongPasscode?: () => void;
}

export const UnlockScene: React.FC<UnlockSceneProps> = ({ onUnlockSuccess, onWrongPasscode }) => {
  const [pin, setPin] = useState<string>('');
  const [isShaking, setIsShaking] = useState<boolean>(false);
  const [wrongCount, setWrongCount] = useState<number>(0);

  const handleDigit = (digit: string) => {
    if (pin.length < 4) {
      soundPlayer.playKeyTap();
      setPin((prev) => prev + digit);
    }
  };

  const handleBackspace = () => {
    soundPlayer.playKeyTap();
    setPin((prev) => prev.slice(0, -1));
  };

  const handleEnter = () => {
    if (pin === birthdayConfig.passcode) {
      soundPlayer.playUnlockSuccess();
      triggerConfetti(0.5);
      setTimeout(() => {
        onUnlockSuccess();
      }, 500);
    } else {
      soundPlayer.playError();
      setIsShaking(true);
      const nextWrong = wrongCount + 1;
      setWrongCount(nextWrong);
      setTimeout(() => {
        setIsShaking(false);
        setPin('');
        if (nextWrong >= 2 && onWrongPasscode) {
          onWrongPasscode();
        }
      }, 600);
    }
  };

  // Allow physical keyboard typing
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (/^[0-9]$/.test(e.key)) {
        handleDigit(e.key);
      } else if (e.key === 'Backspace') {
        handleBackspace();
      } else if (e.key === 'Enter') {
        handleEnter();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [pin]);

  const keypadKeys = [
    '1', '2', '3',
    '4', '5', '6',
    '7', '8', '9',
    '#', '0', '*'
  ];

  return (
    <div className="relative w-full min-h-[100dvh] bg-striped-pastel flex items-center justify-center p-3 sm:p-6 md:p-8 overflow-y-auto overflow-x-hidden">
      {/* Background subtle vintage vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/15 via-transparent to-[#8C76B8]/20 pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-5xl flex flex-col md:flex-row items-center justify-center md:justify-between gap-5 sm:gap-6 lg:gap-12 py-6 my-auto">
        
        {/* LEFT COLUMN: Title + Scalloped Couple Photo */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex-1 flex flex-col items-center md:items-start text-center md:text-left shrink-0"
        >
          {/* Title: 'unlock' with overlapping 'for surprise' */}
          <div className="relative mb-2 sm:mb-4 md:mb-6 select-none">
            <h1 className="font-serif-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#715AC3] drop-shadow-sm leading-none">
              unlock
            </h1>
            <span className="block font-script-romantic italic text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#9278D9] -mt-2 sm:-mt-3 md:-mt-5 ml-4 sm:ml-8 md:ml-12 drop-shadow-sm">
              for surprise
            </span>
          </div>

          {/* Scallop framed photo */}
          <div className="relative mt-1 sm:mt-2 group">
            {/* Scalloped decorative border */}
            <div className="relative w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60 lg:w-72 lg:h-72 flex items-center justify-center">
              {/* SVG Scallop Petal Background */}
              <svg 
                viewBox="0 0 200 200" 
                className="absolute inset-0 w-full h-full text-[#9B84D3] drop-shadow-[0_8px_20px_rgba(110,85,170,0.3)] animate-[spin_60s_linear_infinite]"
                style={{ filter: 'drop-shadow(0 6px 12px rgba(80,50,130,0.25))' }}
              >
                {/* 12-lobed flower scallop */}
                <path 
                  fill="currentColor" 
                  d="M100 10 C108 10 114 17 122 18 C130 20 137 18 144 22 C151 26 155 33 162 38 C168 44 175 48 178 55 C182 62 180 70 182 78 C184 86 190 92 190 100 C190 108 184 114 182 122 C180 130 182 138 178 145 C175 152 168 156 162 162 C155 167 151 174 144 178 C137 182 130 180 122 182 C114 183 108 190 100 190 C92 190 86 183 78 182 C70 180 63 182 56 178 C49 174 45 167 38 162 C32 156 25 152 22 145 C18 138 20 130 18 122 C16 114 10 108 10 100 C10 92 16 86 18 78 C20 70 18 62 22 55 C25 48 32 44 38 38 C45 33 49 26 56 22 C63 18 70 20 78 18 C86 17 92 10 100 10 Z" 
                />
              </svg>

              {/* Inner cream circle frame */}
              <div className="relative z-10 w-32 h-32 sm:w-42 sm:h-42 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full p-1.5 sm:p-2 bg-[#FAF5DC] shadow-inner overflow-hidden flex items-center justify-center">
                <img
                  src={birthdayConfig.photos.heroPhotoOnly}
                  alt="Couple memories"
                  className="w-full h-full object-cover rounded-full pointer-events-none select-none transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback to hero couple extracted asset
                    e.currentTarget.src = birthdayConfig.photos.heroCouple;
                  }}
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* CENTER / LOWER CENTER: Funny cat in birthday hat (visible on larger screens) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:flex flex-col items-center justify-center select-none"
        >
          <motion.div
            whileHover={{ scale: 1.06, rotate: 3 }}
            className="w-36 lg:w-44 drop-shadow-[0_12px_20px_rgba(80,50,130,0.25)]"
          >
            <img
              src={birthdayConfig.stickers.catPartyHat}
              alt="Party cat"
              className="w-full h-auto object-contain pointer-events-none"
            />
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN: Keypad Panel */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ 
            opacity: 1, 
            x: isShaking ? [-8, 8, -6, 6, -3, 3, 0] : 0 
          }}
          transition={{ 
            duration: isShaking ? 0.5 : 0.8,
            ease: 'easeOut'
          }}
          className="w-full max-w-[290px] sm:max-w-[320px] md:max-w-xs lg:w-92 shrink-0"
        >
          {/* Cream Decorative Card with wavy purple border */}
          <div 
            className="relative bg-[#FAF6DE] rounded-[28px] sm:rounded-[36px] p-4 sm:p-6 md:p-7 shadow-[0_16px_36px_rgba(75,50,120,0.22)] border-[3px] sm:border-[3.5px] border-[#7C66B9]"
            style={{
              boxShadow: '0 16px 36px rgba(75,50,120,0.2), inset 0 0 0 1.5px rgba(255,255,255,0.7)',
            }}
          >
            {/* Header */}
            <div className="flex flex-col items-center mb-2.5 sm:mb-4">
              {/* Small Lock Icon */}
              <div className="w-4 h-4 sm:w-5 sm:h-5 mb-0.5 sm:mb-1 text-[#9B84D3]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </div>
              <p className="font-serif-vintage text-lg sm:text-xl font-medium tracking-wide text-[#715AC3]">
                Enter passcode
              </p>
            </div>

            {/* Passcode Slots */}
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              {[0, 1, 2, 3].map((index) => {
                const isFilled = pin.length > index;
                return (
                  <motion.div
                    key={index}
                    animate={{ scale: isFilled ? [1, 1.15, 1] : 1 }}
                    transition={{ duration: 0.15 }}
                    className={`w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-lg border-2 transition-all duration-200 flex items-center justify-center ${
                      isFilled
                        ? 'bg-[#8F75BD] border-[#715AC3] shadow-inner'
                        : 'bg-[#EDE7C8]/70 border-[#C4B7E0]'
                    }`}
                  >
                    {isFilled && (
                      <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-white/90 shadow-sm" />
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Keypad Grid */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-3 sm:mb-4">
              {keypadKeys.map((key) => (
                <motion.button
                  key={key}
                  whileHover={{ scale: 1.06, backgroundColor: '#FFFFFF' }}
                  whileTap={{ scale: 0.92, backgroundColor: '#EFE7C4' }}
                  onClick={() => {
                    if (key === '#') {
                      handleBackspace();
                    } else if (key === '*') {
                      setPin('');
                      soundPlayer.playKeyTap();
                    } else {
                      handleDigit(key);
                    }
                  }}
                  className="w-full aspect-square max-w-[48px] sm:max-w-[56px] md:max-w-[62px] mx-auto rounded-full bg-white/95 text-[#6653B7] font-serif-vintage text-xl sm:text-2xl md:text-3xl font-bold flex flex-col items-center justify-center shadow-[0_2px_8px_rgba(110,85,170,0.12)] border border-[#D8CDEC] cursor-pointer select-none transition-all active:shadow-inner touch-manipulation"
                >
                  <span>{key}</span>
                  {/* Subtle decorative underline matching reference */}
                  <span className="w-3.5 sm:w-4 h-[1.5px] bg-[#9C85CF] -mt-0.5 sm:-mt-1 rounded-full opacity-60" />
                </motion.button>
              ))}
            </div>

            {/* Enter Button */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleEnter}
              className="w-full py-1.5 sm:py-2 bg-[#FAF5DC] text-[#715AC3] font-serif-vintage text-xl sm:text-2xl font-bold tracking-wider rounded-full border-2 border-[#7C66B9] shadow-sm hover:bg-white cursor-pointer select-none transition-all mt-0.5 sm:mt-1 touch-manipulation"
            >
              enter
            </motion.button>
          </div>
        </motion.div>

      </div>
    </div>
  );
};
