import React from 'react';
import { motion } from 'framer-motion';
import { birthdayConfig } from '../config/birthdayConfig';
import { HandDrawnButton } from '../components/HandDrawnButton';

interface GiftOneSceneProps {
  onBack: () => void;
}

export const GiftOneScene: React.FC<GiftOneSceneProps> = ({ onBack }) => {
  return (
    <div className="relative w-full h-full min-h-screen bg-[#B9A6DA] flex items-center justify-center p-4 sm:p-6 overflow-hidden select-none">
      
      {/* Background White Calendar Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <svg viewBox="0 0 1000 700" className="w-full h-full stroke-white" strokeWidth="1.8">
          {/* Vertical grid lines */}
          <line x1="200" y1="0" x2="200" y2="700" />
          <line x1="500" y1="0" x2="500" y2="700" />
          <line x1="720" y1="0" x2="720" y2="700" />
          {/* Horizontal grid lines */}
          <line x1="0" y1="180" x2="1000" y2="180" />
          <line x1="0" y1="460" x2="1000" y2="460" />
        </svg>
      </div>

      {/* Calendar Numbers scattered in grid cells */}
      <div className="absolute top-[32%] left-[14%] font-serif-vintage text-3xl sm:text-4xl text-white/80 select-none">
        28
      </div>

      {/* The 29 with Hand-Drawn Red Heart */}
      <div className="absolute top-[16%] left-[46%] z-10 flex flex-col items-center select-none">
        <div className="relative">
          {/* Red Heart SVG circling 29 */}
          <svg viewBox="0 0 100 100" className="w-24 h-24 sm:w-28 sm:h-28 text-[#A72E42] drop-shadow-sm -rotate-6">
            <path
              d="M50 82 C20 58 5 40 15 22 C23 8 40 12 50 25 C60 12 77 8 85 22 C95 40 80 58 50 82 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center font-serif-vintage font-bold text-3xl sm:text-4xl text-[#715AC3] pt-1">
            {birthdayConfig.birthdayDateNumber}
          </span>
        </div>
      </div>

      <div className="absolute bottom-[4%] left-[23%] font-serif-vintage text-3xl sm:text-4xl text-white/80 select-none">
        4
      </div>
      <div className="absolute bottom-[20%] left-[56%] font-serif-vintage text-3xl sm:text-4xl text-white/80 select-none">
        5
      </div>

      {/* Doodles around the scene */}
      {/* 1. Heart Sunglasses Doodle (Top Left) */}
      <div className="absolute top-[8%] left-[24%] w-16 sm:w-20 text-white drop-shadow pointer-events-none -rotate-12">
        <svg viewBox="0 0 80 40" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <path d="M12 25 C5 25 2 15 8 8 C14 2 26 5 28 16 C30 5 42 2 48 8 C54 15 51 25 44 25 C36 25 29 20 28 16 C27 20 20 25 12 25 Z" />
          <path d="M48 14 L75 8" />
          <path d="M8 14 L2 18" />
        </svg>
      </div>

      {/* 2. Champagne Coupe Glass with Ribbon Doodle (Bottom Left) */}
      <div className="absolute bottom-[14%] left-[12%] w-14 sm:w-16 text-white drop-shadow pointer-events-none rotate-6">
        <svg viewBox="0 0 50 70" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <path d="M10 15 C10 32 40 32 40 15 Z" />
          <line x1="25" y1="32" x2="25" y2="58" />
          <line x1="14" y1="58" x2="36" y2="58" />
          {/* Bow on stem */}
          <path d="M18 42 C14 38 18 36 25 42 C32 36 36 38 32 42" />
        </svg>
      </div>

      {/* 3. Small Envelope Doodle (Middle Right) */}
      <div className="absolute top-[42%] left-[58%] w-12 sm:w-14 text-white drop-shadow pointer-events-none rotate-12">
        <svg viewBox="0 0 40 30" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
          <rect x="2" y="3" width="36" height="24" rx="2" />
          <path d="M2 3 L20 18 L38 3" />
          <path d="M18 17 C16 15 18 13 20 16 C22 13 24 15 22 17 L20 19 Z" fill="white" />
        </svg>
      </div>

      {/* 4. Finger Heart Doodle (Bottom Center) */}
      <div className="absolute bottom-[2%] left-[46%] w-10 sm:w-12 text-white drop-shadow pointer-events-none">
        <svg viewBox="0 0 40 50" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
          <path d="M16 28 L16 16 C16 13 20 13 20 16 L20 28" />
          <path d="M20 22 C20 18 24 18 24 22 L24 30" />
          <path d="M24 26 C24 23 28 23 28 26 L28 34" />
          <path d="M16 26 C12 24 12 36 18 42 L24 44" />
          {/* tiny heart above finger */}
          <path d="M18 9 C16 6 18 4 20 7 C22 4 24 6 22 9 L20 11 Z" fill="white" />
        </svg>
      </div>

      {/* TOP RIGHT: 'back' Button */}
      <div className="absolute top-5 right-5 sm:top-8 sm:right-8 z-30">
        <HandDrawnButton variant="back" onClick={onBack}>
          back
        </HandDrawnButton>
      </div>

      {/* MAIN CONTENT AREA */}
      <div className="relative z-20 w-full max-w-4xl flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-16 my-auto">
        
        {/* TILTED CREAM NOTE: "it's your dayyy" */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotate: -15 }}
          animate={{ opacity: 1, scale: 1, rotate: -5 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          whileHover={{ rotate: -2, scale: 1.02 }}
          className="relative w-64 sm:w-80 aspect-square bg-[#FAF5DE] p-8 rounded-2xl shadow-[0_15px_30px_rgba(60,35,100,0.25)] flex items-center justify-center border border-black/5"
        >
          {/* Subtle paper tape at top */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-white/60 backdrop-blur-sm rotate-2 shadow-sm rounded-sm" />

          {/* Casual handwritten red lettering */}
          <h2 className="font-handwritten text-5xl sm:text-6xl text-[#98263A] leading-tight text-center font-bold tracking-wide drop-shadow-sm select-none">
            it's your<br />
            dayyy
          </h2>
        </motion.div>

        {/* RIGHT: Vertically Stacked Pair of Photobooth Pictures */}
        <motion.div
          initial={{ opacity: 0, x: 40, rotate: 6 }}
          animate={{ opacity: 1, x: 0, rotate: 3 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          whileHover={{ rotate: 1, scale: 1.02 }}
          className="relative w-56 sm:w-68 lg:w-72 drop-shadow-[0_16px_35px_rgba(50,30,90,0.3)] select-none"
        >
          <img
            src={birthdayConfig.photos.giftOneFilmstrip}
            alt="Couple photobooth film strip"
            className="w-full h-auto object-contain rounded-lg pointer-events-none"
            onError={(e) => {
              // fallback to separate stacked photos
              e.currentTarget.style.display = 'none';
            }}
          />
        </motion.div>

      </div>
    </div>
  );
};
