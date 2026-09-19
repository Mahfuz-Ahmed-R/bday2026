import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { StarField } from '../components/StarField';
import { birthdayConfig } from '../config/birthdayConfig';
import { triggerConfetti } from '../components/ConfettiEffect';
import { HandDrawnButton } from '../components/HandDrawnButton';

interface MuseumSceneProps {
  onReplay: () => void;
  onBackToGifts: () => void;
}

export const MuseumScene: React.FC<MuseumSceneProps> = ({ onReplay, onBackToGifts }) => {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  useEffect(() => {
    // Soft celebration sparkle
    const timer = setTimeout(() => {
      triggerConfetti(0.3);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  // 4 polaroids positioned with irregular scrapbook placement
  const polaroids = [
    {
      id: 0,
      src: birthdayConfig.photos.museum[0],
      rot: -6,
      pos: 'top-[20%] left-[3%] sm:left-[7%] lg:left-[10%]',
      w: 'w-44 sm:w-52 lg:w-58',
      aspect: 'aspect-[4/5]',
      objectPos: 'object-[center_35%]',
      delay: 0.2,
      caption: 'Every mirror selfie with you ✨',
    },
    {
      id: 1,
      src: birthdayConfig.photos.museum[1],
      rot: 5,
      pos: 'top-[44%] left-[20%] sm:left-[25%] lg:left-[28%]',
      w: 'w-44 sm:w-52 lg:w-58',
      aspect: 'aspect-[4/5]',
      objectPos: 'object-[center_35%]',
      delay: 0.4,
      caption: 'Pure laughter & sweetest smiles 💕',
    },
    {
      id: 2,
      src: birthdayConfig.photos.museum[2],
      rot: -5,
      pos: 'top-[18%] right-[20%] sm:right-[25%] lg:right-[28%]',
      w: 'w-44 sm:w-52 lg:w-58',
      aspect: 'aspect-[4/5]',
      objectPos: 'object-[center_35%]',
      delay: 0.6,
      caption: 'The coolest duo in the world 😎',
    },
    {
      id: 3,
      src: birthdayConfig.photos.museum[3],
      rot: 6,
      pos: 'top-[42%] right-[3%] sm:right-[7%] lg:right-[10%]',
      w: 'w-48 sm:w-56 lg:w-62',
      aspect: 'aspect-[4/3]',
      objectPos: 'object-center',
      delay: 0.8,
      caption: 'Food dates & endless memories 🍽️❤️',
    },
  ];

  return (
    <div className="relative w-full min-h-[100dvh] bg-[#B9A6DA] flex flex-col items-center justify-between p-3 sm:p-6 overflow-y-auto overflow-x-hidden select-none">
      <StarField />

      {/* TOP NAVIGATION / ACTIONS: Aligned right away from top-left music player */}
      <div className="relative z-30 w-full max-w-6xl flex items-center justify-end gap-2 sm:gap-3 pt-1 sm:pt-2 px-1 sm:px-2">
        <HandDrawnButton variant="back" onClick={onBackToGifts} className="text-xs sm:text-base px-3 py-1 sm:px-4 sm:py-1.5 touch-manipulation">
          gifts
        </HandDrawnButton>

        <HandDrawnButton variant="back" onClick={onReplay} className="text-xs sm:text-base px-3 py-1 sm:px-4 sm:py-1.5 touch-manipulation">
          replay ↺
        </HandDrawnButton>
      </div>

      {/* HEADER: 'museum of US' */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-20 flex items-baseline justify-center gap-2 sm:gap-4 mt-2 sm:mt-4 select-none text-center"
      >
        <span className="font-script-romantic italic text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white drop-shadow-[0_4px_10px_rgba(80,50,130,0.3)]">
          {birthdayConfig.museumScene.titlePrefix}
        </span>
        <span className="font-serif-display font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-[#98263A] tracking-tight drop-shadow-[0_4px_10px_rgba(80,50,130,0.3)]">
          {birthdayConfig.museumScene.titleSuffix}
        </span>
      </motion.div>

      {/* CENTER STICKER: Tiny love envelope with red heart */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="relative sm:absolute sm:top-[20%] sm:left-[49%] sm:-translate-x-1/2 z-25 w-10 sm:w-16 pointer-events-none drop-shadow-md my-1 sm:my-0"
      >
        <img
          src={birthdayConfig.stickers.envelopeHeart}
          alt="Heart envelope"
          className="w-full h-auto object-contain"
        />
      </motion.div>

      {/* MOBILE SCRAPBOOK GRID (< md) */}
      <div className="md:hidden relative z-20 w-full max-w-md grid grid-cols-2 gap-3.5 sm:gap-5 my-4 px-2">
        {polaroids.map((photo) => (
          <motion.div
            key={`mobile-${photo.id}`}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: 0,
              rotate: photo.rot
            }}
            transition={{ 
              duration: 0.6, 
              delay: photo.delay * 0.7,
              ease: 'easeOut'
            }}
            whileHover={{ scale: 1.05, rotate: 0 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => setSelectedPhoto(photo.id)}
            className="w-full cursor-pointer group select-none touch-manipulation"
          >
            {/* Polaroid Frame */}
            <div className="p-2 pb-3 bg-white rounded-lg shadow-[0_8px_20px_rgba(50,30,85,0.22)] border border-black/5">
              <div className={`${photo.aspect} w-full overflow-hidden rounded-md bg-[#FAF5DE]`}>
                <img
                  src={photo.src}
                  alt={`Memory ${photo.id + 1}`}
                  className={`w-full h-full object-cover ${photo.objectPos} pointer-events-none`}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* DESKTOP SCRAPBOOK SPREAD (>= md) */}
      <div className="hidden md:block relative z-20 w-full max-w-6xl flex-1 min-h-[480px] sm:min-h-[520px] my-auto">
        {polaroids.map((photo) => (
          <motion.div
            key={`desktop-${photo.id}`}
            initial={{ opacity: 0, scale: 0.7, y: 30 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: 0,
              rotate: photo.rot
            }}
            transition={{ 
              duration: 0.7, 
              delay: photo.delay,
              ease: 'easeOut'
            }}
            whileHover={{ 
              scale: 1.12, 
              rotate: 0, 
              zIndex: 40,
              transition: { duration: 0.25 }
            }}
            whileTap={{ scale: 1.05 }}
            onClick={() => setSelectedPhoto(photo.id)}
            className={`absolute ${photo.pos} ${photo.w} cursor-pointer group select-none`}
          >
            {/* Polaroid Frame */}
            <div className="p-2 sm:p-2.5 pb-4 sm:pb-5 bg-white rounded-lg shadow-[0_12px_28px_rgba(50,30,85,0.28)] border border-black/5 transition-shadow group-hover:shadow-[0_20px_40px_rgba(50,30,85,0.38)]">
              <div className={`${photo.aspect} w-full overflow-hidden rounded-md bg-[#FAF5DE]`}>
                <img
                  src={photo.src}
                  alt={`Memory ${photo.id + 1}`}
                  className={`w-full h-full object-cover ${photo.objectPos} pointer-events-none transition-transform duration-300 group-hover:scale-105`}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* BOTTOM HINT */}
      <div className="relative z-20 pb-3 sm:pb-4 text-center">
        <p className="font-handwritten text-base sm:text-xl text-white/90 drop-shadow-sm">
          tap any photo to cherish the memory 💜
        </p>
      </div>

      {/* MODAL / LIGHTBOX FOR ZOOMED PHOTO */}
      <AnimatePresence>
        {selectedPhoto !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.8, rotate: -3 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-sm sm:max-w-md md:max-w-lg w-full p-3 sm:p-4 pb-4 sm:pb-6 bg-[#FAF5DE] rounded-2xl shadow-2xl border-2 sm:border-4 border-white flex flex-col items-center"
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute -top-2.5 -right-2.5 sm:-top-3 sm:-right-3 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#98263A] text-white flex items-center justify-center text-xs sm:text-sm font-bold shadow-md cursor-pointer hover:scale-110 active:scale-95 transition-transform z-10"
              >
                ✕
              </button>
              <div className="w-full max-h-[55vh] sm:max-h-[62vh] flex items-center justify-center rounded-lg overflow-hidden shadow-inner mb-3 sm:mb-4 bg-black/5">
                <img
                  src={polaroids[selectedPhoto].src}
                  alt="Expanded memory"
                  className="max-h-[52vh] sm:max-h-[60vh] w-auto max-w-full object-contain rounded-md"
                />
              </div>
              <p className="font-serif-vintage italic text-lg sm:text-2xl text-[#98263A] text-center font-semibold">
                {polaroids[selectedPhoto].caption}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};
