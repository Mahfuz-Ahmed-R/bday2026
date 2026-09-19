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

  // 5 polaroids positioned with irregular scrapbook placement
  const polaroids = [
    {
      id: 0,
      src: birthdayConfig.photos.museum[0],
      rot: -7,
      pos: 'top-[26%] left-[4%] sm:left-[8%] lg:left-[12%]',
      w: 'w-44 sm:w-52 lg:w-56',
      delay: 0.2,
      caption: 'Every moment with you 💕',
    },
    {
      id: 1,
      src: birthdayConfig.photos.museum[1],
      rot: -3,
      pos: 'top-[44%] left-[18%] sm:left-[22%] lg:left-[26%]',
      w: 'w-44 sm:w-52 lg:w-56',
      delay: 0.4,
      caption: 'Pure laughter & smiles ✨',
    },
    {
      id: 2,
      src: birthdayConfig.photos.museum[2],
      rot: 2,
      pos: 'top-[28%] left-[40%] sm:left-[43%] lg:left-[45%]',
      w: 'w-44 sm:w-52 lg:w-56',
      delay: 0.6,
      caption: 'My favorite person forever 🥹',
    },
    {
      id: 3,
      src: birthdayConfig.photos.museum[3],
      rot: 6,
      pos: 'top-[42%] right-[18%] sm:right-[22%] lg:right-[25%]',
      w: 'w-48 sm:w-56 lg:w-60',
      delay: 0.8,
      caption: 'Unforgettable adventures 🌸',
    },
    {
      id: 4,
      src: birthdayConfig.photos.museum[4],
      rot: -4,
      pos: 'top-[24%] right-[4%] sm:right-[8%] lg:right-[10%]',
      w: 'w-48 sm:w-56 lg:w-60',
      delay: 1.0,
      caption: 'To endless more memories 🥂',
    },
  ];

  return (
    <div className="relative w-full h-full min-h-screen bg-[#B9A6DA] flex flex-col items-center justify-between p-4 sm:p-6 overflow-hidden select-none">
      <StarField />

      {/* TOP NAVIGATION / ACTIONS */}
      <div className="relative z-30 w-full max-w-6xl flex items-center justify-between pt-2 px-2">
        <HandDrawnButton variant="back" onClick={onBackToGifts}>
          gifts
        </HandDrawnButton>

        <HandDrawnButton variant="back" onClick={onReplay}>
          replay ↺
        </HandDrawnButton>
      </div>

      {/* HEADER: 'museum of US' */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-20 flex items-baseline justify-center gap-3 sm:gap-4 mt-2 sm:mt-4 select-none"
      >
        <span className="font-script-romantic italic text-6xl sm:text-7xl lg:text-8xl text-white drop-shadow-[0_4px_10px_rgba(80,50,130,0.3)]">
          {birthdayConfig.museumScene.titlePrefix}
        </span>
        <span className="font-serif-display font-bold text-5xl sm:text-6xl lg:text-7xl text-[#98263A] tracking-tight drop-shadow-[0_4px_10px_rgba(80,50,130,0.3)]">
          {birthdayConfig.museumScene.titleSuffix}
        </span>
      </motion.div>

      {/* CENTER STICKER: Tiny love envelope with red heart */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="absolute top-[20%] left-[49%] -translate-x-1/2 z-25 w-14 sm:w-16 pointer-events-none drop-shadow-md"
      >
        <img
          src={birthdayConfig.stickers.envelopeHeart}
          alt="Heart envelope"
          className="w-full h-auto object-contain"
        />
      </motion.div>

      {/* MAIN SCRAPBOOK PHOTO AREA */}
      <div className="relative z-20 w-full max-w-6xl flex-1 min-h-[480px] sm:min-h-[520px] my-auto">
        {polaroids.map((photo) => (
          <motion.div
            key={photo.id}
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
              <div className="aspect-[4/3] w-full overflow-hidden rounded-md bg-[#FAF5DE]">
                <img
                  src={photo.src}
                  alt={`Memory ${photo.id + 1}`}
                  className="w-full h-full object-cover pointer-events-none transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* BOTTOM HINT */}
      <div className="relative z-20 pb-4 text-center">
        <p className="font-handwritten text-lg sm:text-xl text-white/90 drop-shadow-sm">
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
            className="fixed inset-0 z-50 bg-black/65 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.8, rotate: -3 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-md w-full p-4 pb-6 bg-[#FAF5DE] rounded-2xl shadow-2xl border-4 border-white"
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#98263A] text-white flex items-center justify-center text-sm font-bold shadow-md cursor-pointer hover:scale-110 transition-transform"
              >
                ✕
              </button>
              <div className="w-full aspect-[4/3] rounded-lg overflow-hidden shadow-inner mb-4">
                <img
                  src={polaroids[selectedPhoto].src}
                  alt="Expanded memory"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-serif-vintage italic text-xl sm:text-2xl text-[#98263A] text-center font-semibold">
                {polaroids[selectedPhoto].caption}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};
