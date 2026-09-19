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
    <div className="relative w-full h-full min-h-screen bg-[#B9A6DA] flex items-center justify-center p-4 sm:p-6 overflow-y-auto select-none no-scrollbar">
      <StarField />

      {/* TOP RIGHT: 'back' Button */}
      <div className="absolute top-5 right-5 sm:top-8 sm:right-8 z-30">
        <HandDrawnButton variant="back" onClick={onBack}>
          back
        </HandDrawnButton>
      </div>

      {/* Main Content Layout */}
      <div className="relative z-10 w-full max-w-5xl flex flex-col md:flex-row items-center justify-center gap-6 lg:gap-10 my-auto py-8">
        
        {/* LEFT SIDE: Scrapbook Framed Couple Photo with Purple Ribbon */}
        <motion.div
          initial={{ opacity: 0, x: -30, rotate: -4 }}
          animate={{ opacity: 1, x: 0, rotate: -2 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          whileHover={{ rotate: 0, scale: 1.02 }}
          className="relative w-64 sm:w-80 lg:w-92 drop-shadow-[0_16px_35px_rgba(50,30,90,0.3)] select-none shrink-0"
        >
          <img
            src={birthdayConfig.photos.letterFramedPhoto}
            alt="Framed memory with ribbon"
            className="w-full h-auto object-contain pointer-events-none"
            onError={(e) => {
              // fallback to raw photo
              e.currentTarget.src = birthdayConfig.photos.letterPhotoOnly;
            }}
          />
        </motion.div>

        {/* RIGHT SIDE: Scalloped Postage-Stamp Letter Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="relative flex-1 max-w-xl w-full"
        >
          {/* Card with Stamp/Scalloped Edge Effect */}
          <div 
            className="relative bg-[#FAF5DE] rounded-[38px] p-6 sm:p-10 shadow-[0_20px_45px_rgba(75,50,120,0.22)] border-[4px] border-[#7C66B9] flex flex-col justify-center"
            style={{
              boxShadow: '0 18px 40px rgba(70,45,110,0.2), inset 0 0 0 2px rgba(255,255,255,0.7)',
            }}
          >
            {/* Heading */}
            <h2 className="font-serif-vintage font-bold text-2xl sm:text-3xl lg:text-4xl text-[#98263A] text-center mb-5 sm:mb-6 leading-tight">
              {birthdayConfig.letterMessage.heading}
            </h2>

            {/* Paragraphs */}
            <div className="flex flex-col gap-4 font-serif-vintage text-base sm:text-lg lg:text-xl text-[#98263A] leading-relaxed text-center font-medium">
              {birthdayConfig.letterMessage.paragraphs.map((p, idx) => (
                <p key={idx}>
                  {p}
                </p>
              ))}
            </div>

            {/* Bottom cute heart stamps */}
            <div className="mt-6 flex items-center justify-center gap-2 text-xl text-[#98263A]">
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
