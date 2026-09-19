import React from 'react';
import { motion } from 'framer-motion';
import { birthdayConfig } from '../config/birthdayConfig';
import { soundPlayer } from '../utils/audio';

interface GiftSelectorProps {
  onSelectGift: (giftNumber: 1 | 2 | 3) => void;
  openedGifts: number[];
}

export const GiftSelector: React.FC<GiftSelectorProps> = ({ onSelectGift, openedGifts }) => {
  const gifts = [
    { id: 1 as const, img: birthdayConfig.stickers.giftBoxes.left, label: birthdayConfig.giftSelector.gift1Label, rot: -3 },
    { id: 2 as const, img: birthdayConfig.stickers.giftBoxes.center, label: birthdayConfig.giftSelector.gift2Label, rot: 1 },
    { id: 3 as const, img: birthdayConfig.stickers.giftBoxes.right, label: birthdayConfig.giftSelector.gift3Label, rot: 3 },
  ];

  return (
    <div className="relative w-full h-full min-h-screen bg-[#B9A6DA] flex items-center justify-center p-4 sm:p-6 overflow-hidden select-none">
      
      {/* Background Doodles & Starbursts */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Yellow Starbursts & Squiggles */}
        <div className="absolute top-10 left-12 text-[#F5ECB8] opacity-60 text-5xl">✦</div>
        <div className="absolute bottom-12 right-12 text-[#F5ECB8] opacity-60 text-6xl">✦</div>
        <div className="absolute top-20 right-20 text-[#F5ECB8] opacity-50 text-4xl">★</div>
        <div className="absolute bottom-24 left-16 text-[#F5ECB8] opacity-50 text-4xl">★</div>

        {/* Hand drawn squiggle lines SVG around borders */}
        <svg viewBox="0 0 1000 700" className="w-full h-full text-[#F5ECB8]/40">
          <path d="M 50 120 Q 80 80 120 120 T 180 120" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <path d="M 850 550 Q 880 500 920 540 T 960 520" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <path d="M 900 120 Q 940 160 920 200" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M 80 560 Q 60 600 100 620" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </div>

      {/* Main Container Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative z-10 w-full max-w-4xl"
      >
        {/* Central Cream Card with thick purple wavy border */}
        <div 
          className="relative w-full bg-[#FAF6DE] rounded-[42px] px-6 py-10 sm:px-12 sm:py-12 shadow-[0_20px_45px_rgba(75,50,120,0.22)] border-[4px] border-[#7C66B9] flex flex-col items-center justify-center min-h-[460px] sm:min-h-[500px]"
          style={{
            boxShadow: '0 20px 45px rgba(75,50,120,0.2), inset 0 0 0 2px rgba(255,255,255,0.7)',
          }}
        >
          {/* Top Hanging Sign: 'select any gift' */}
          <div className="relative mb-8 sm:mb-12">
            {/* Hanging dots & string */}
            <div className="absolute -top-3 left-4 w-2 h-2 rounded-full bg-[#E5B53D]" />
            <div className="absolute -top-3 right-4 w-2 h-2 rounded-full bg-[#E5B53D]" />
            
            {/* The paper sign banner */}
            <div className="px-8 py-2 bg-[#FCEFBA]/90 rounded-md border border-[#E2BC57] shadow-sm flex items-center justify-center">
              <h2 className="font-script-romantic italic text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#98263A] tracking-wider drop-shadow-sm">
                {birthdayConfig.giftSelector.title}
              </h2>
            </div>
          </div>

          {/* Three Gift Boxes */}
          <div className="w-full grid grid-cols-3 gap-4 sm:gap-8 lg:gap-12 items-center justify-items-center max-w-3xl">
            {gifts.map((gift) => {
              const isOpened = openedGifts.includes(gift.id);
              return (
                <motion.div
                  key={gift.id}
                  whileHover={{ scale: 1.1, y: -8, rotate: gift.rot }}
                  whileTap={{ scale: 0.94 }}
                  onClick={() => {
                    soundPlayer.playKeyTap();
                    onSelectGift(gift.id);
                  }}
                  className="relative flex flex-col items-center cursor-pointer group"
                >
                  {/* Gift Box Image */}
                  <div className="relative w-28 sm:w-44 lg:w-52 aspect-square flex items-center justify-center drop-shadow-[0_12px_24px_rgba(100,30,50,0.28)] transition-all">
                    <img
                      src={gift.img}
                      alt={`Gift option ${gift.id}`}
                      className="w-full h-full object-contain pointer-events-none select-none transition-transform group-hover:scale-105"
                    />

                    {/* Opened / Sparkle indicator badge */}
                    {isOpened && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute -top-2 -right-2 bg-[#FCEFBA] text-[#98263A] text-xs sm:text-sm font-handwritten px-2 py-0.5 rounded-full border border-[#D3A528] shadow-md flex items-center gap-1"
                      >
                        <span>✓</span> opened
                      </motion.div>
                    )}
                  </div>

                  {/* Gentle hover shimmer text */}
                  <span className="mt-2 font-handwritten text-base sm:text-lg text-[#7C66B9] opacity-80 group-hover:opacity-100 group-hover:text-[#5A479F] transition-opacity">
                    gift {gift.id} ✨
                  </span>
                </motion.div>
              );
            })}
          </div>

        </div>
      </motion.div>
    </div>
  );
};
