import React from 'react';
import { motion } from 'framer-motion';
import { StarField } from '../components/StarField';
import { birthdayConfig } from '../config/birthdayConfig';
import { HandDrawnButton } from '../components/HandDrawnButton';

interface LoveLetterSceneProps {
  onBack: () => void;
}

export const LoveLetterScene: React.FC<LoveLetterSceneProps> = ({ onBack }) => {
  return (
    <div className="relative w-full min-h-[100dvh] bg-[#B9A6DA] flex flex-col items-center justify-center p-3 sm:p-6 overflow-y-auto overflow-x-hidden select-none no-scrollbar">
      <StarField />

      {/* TOP RIGHT: 'back' Button */}
      <div className="fixed sm:absolute top-3 right-3 sm:top-6 sm:right-8 z-40 pt-[env(safe-area-inset-top,0px)] pr-[env(safe-area-inset-right,0px)]">
        <HandDrawnButton variant="back" onClick={onBack} className="touch-manipulation">
          back
        </HandDrawnButton>
      </div>

      {/* Main Content Layout */}
      <div className="relative z-10 w-full max-w-5xl flex flex-col md:flex-row items-center justify-center gap-6 lg:gap-10 my-auto py-14 sm:py-10 pb-16 sm:pb-10">
        
        {/* LEFT SIDE: Scrapbook Framed Couple Photo with Purple Ribbon */}
        <motion.div
          initial={{ opacity: 0, x: -30, rotate: -4 }}
          animate={{ opacity: 1, x: 0, rotate: -2 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          whileHover={{ rotate: 0, scale: 1.02 }}
          className="relative w-52 sm:w-72 md:w-80 lg:w-88 drop-shadow-[0_18px_38px_rgba(50,30,90,0.28)] select-none shrink-0"
        >
          {/* Top Decorative Purple Ribbon / Bow */}
          <div className="absolute -top-3.5 sm:-top-5 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center pointer-events-none drop-shadow-sm">
            <svg viewBox="0 0 70 34" className="w-12 sm:w-16 md:w-18 h-auto text-[#8C76B8]">
              {/* Bow Left loop */}
              <ellipse cx="22" cy="14" rx="14" ry="9" fill="currentColor" opacity="0.95" />
              {/* Bow Right loop */}
              <ellipse cx="48" cy="14" rx="14" ry="9" fill="currentColor" opacity="0.95" />
              {/* Inner loop highlights */}
              <ellipse cx="22" cy="14" rx="7" ry="4" fill="#6047A8" opacity="0.5" />
              <ellipse cx="48" cy="14" rx="7" ry="4" fill="#6047A8" opacity="0.5" />
              {/* Knot center */}
              <circle cx="35" cy="14" r="5.5" fill="#715AC3" />
              {/* Tails */}
              <path d="M31 18 Q25 28 18 31" stroke="#715AC3" strokeWidth="3" fill="none" strokeLinecap="round" />
              <path d="M39 18 Q45 28 52 31" stroke="#715AC3" strokeWidth="3" fill="none" strokeLinecap="round" />
            </svg>
          </div>

          {/* Polaroid / Scrapbook Card Container */}
          <div className="relative bg-[#FAF5DE] rounded-[20px] sm:rounded-[24px] p-2.5 sm:p-4 pb-4 sm:pb-6 border-[2.5px] sm:border-[3.5px] border-[#7C66B9] shadow-md flex flex-col items-center">
            {/* Photo Container */}
            <div className="relative w-full aspect-[16/10] rounded-lg sm:rounded-xl overflow-hidden shadow-inner border border-black/10 bg-[#E8DCF5]">
              <img
                src={birthdayConfig.photos.letterPhotoOnly}
                alt="Framed couple memory"
                className="w-full h-full object-cover object-center pointer-events-none transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Handwritten Polaroid Caption */}
            <p className="font-handwritten text-center text-base sm:text-xl text-[#98263A] mt-2 sm:mt-3 font-bold tracking-wide">
              with you, always ♥
            </p>
          </div>
        </motion.div>

        {/* RIGHT SIDE: Scalloped Postage-Stamp Letter Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="relative flex-1 max-w-sm sm:max-w-lg md:max-w-xl w-full"
        >
          {/* Card with Stamp/Scalloped Edge Effect */}
          <div 
            className="relative bg-[#FAF5DE] rounded-[26px] sm:rounded-[38px] p-4 sm:p-8 md:p-10 shadow-[0_20px_45px_rgba(75,50,120,0.22)] border-[3px] sm:border-[4px] border-[#7C66B9] flex flex-col justify-center"
            style={{
              boxShadow: '0 18px 40px rgba(70,45,110,0.2), inset 0 0 0 2px rgba(255,255,255,0.7)',
            }}
          >
            {/* Heading */}
            <h2 className="font-serif-vintage font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#98263A] text-center mb-3 sm:mb-6 leading-tight">
              {birthdayConfig.letterMessage.heading}
            </h2>

            {/* Paragraphs */}
            <div className="flex flex-col gap-2.5 sm:gap-4 font-serif-vintage text-sm sm:text-base md:text-lg lg:text-xl text-[#98263A] leading-relaxed text-center font-medium">
              {birthdayConfig.letterMessage.paragraphs.map((p, idx) => {
                const isCallout = idx === birthdayConfig.letterMessage.paragraphs.length - 1;
                return (
                  <p 
                    key={idx}
                    className={isCallout ? "font-handwritten text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#715AC3] font-bold mt-1 sm:mt-2 tracking-wide" : ""}
                  >
                    {p}
                  </p>
                );
              })}
            </div>

            {/* Bottom cute heart stamps */}
            <div className="mt-4 sm:mt-6 flex items-center justify-center gap-2 text-lg sm:text-xl text-[#98263A]">
              <span>🫶🏻</span>
              <span>🎂</span>
              <span>❤️</span>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};
