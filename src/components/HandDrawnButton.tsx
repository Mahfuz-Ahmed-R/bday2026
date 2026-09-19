import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { soundPlayer } from '../utils/audio';

interface HandDrawnButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'pill' | 'underline' | 'back' | 'enter';
  children: React.ReactNode;
}

export const HandDrawnButton: React.FC<HandDrawnButtonProps> = ({
  variant = 'pill',
  children,
  onClick,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    soundPlayer.playKeyTap();
    if (onClick) onClick(e);
  };

  if (variant === 'underline') {
    return (
      <motion.button
        whileHover={{ scale: 1.08, rotate: -2 }}
        whileTap={{ scale: 0.94 }}
        onClick={handleClick}
        className={`font-serif-vintage italic text-2xl tracking-wider text-[#6653B7] underline decoration-2 decoration-[#6653B7] underline-offset-4 cursor-pointer select-none transition-colors hover:text-[#503E99] ${className}`}
        {...props}
      >
        {children}
      </motion.button>
    );
  }

  if (variant === 'back') {
    return (
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleClick}
        className={`px-4 py-1.5 bg-[#FFFDF2] text-[#6653B7] font-serif-vintage text-base font-medium rounded-full border border-[#BBA7DB] shadow-sm hover:shadow cursor-pointer select-none transition-all ${className}`}
        {...props}
      >
        {children}
      </motion.button>
    );
  }

  if (variant === 'enter') {
    return (
      <motion.button
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.94 }}
        onClick={handleClick}
        className={`w-full py-1.5 px-6 bg-[#FAF6E2] text-[#6653B7] font-serif-vintage text-xl font-medium tracking-wide rounded-full border-2 border-[#6653B7] shadow-sm hover:shadow hover:bg-[#FFF] cursor-pointer transition-all ${className}`}
        {...props}
      >
        {children}
      </motion.button>
    );
  }

  // Default 'pill' button
  return (
    <motion.button
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95, y: 1 }}
      onClick={handleClick}
      className={`relative px-8 py-2.5 bg-[#FFFDF2] text-[#6653B7] font-serif-vintage text-2xl font-bold tracking-wider rounded-full shadow-[0_4px_12px_rgba(102,83,183,0.18)] border-2 border-white/80 cursor-pointer select-none transition-all hover:bg-white active:shadow-inner ${className}`}
      {...props}
    >
      <span className="relative z-10 border-b-2 border-[#6653B7] pb-0.5 px-1">
        {children}
      </span>
    </motion.button>
  );
};
