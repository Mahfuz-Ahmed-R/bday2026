import React from 'react';

export const StarField: React.FC = () => {
  // Predefined positions for soft starry scrapbook background
  const stars = [
    { top: '8%', left: '12%', size: 'w-4 h-4', opacity: 'opacity-40', delay: '0s' },
    { top: '15%', left: '88%', size: 'w-5 h-5', opacity: 'opacity-50', delay: '1s' },
    { top: '22%', left: '4%', size: 'w-3 h-3', opacity: 'opacity-35', delay: '0.5s' },
    { top: '35%', left: '94%', size: 'w-4 h-4', opacity: 'opacity-45', delay: '1.5s' },
    { top: '48%', left: '7%', size: 'w-5 h-5', opacity: 'opacity-40', delay: '2s' },
    { top: '65%', left: '91%', size: 'w-3 h-3', opacity: 'opacity-50', delay: '0.8s' },
    { top: '78%', left: '15%', size: 'w-5 h-5', opacity: 'opacity-35', delay: '1.2s' },
    { top: '85%', left: '82%', size: 'w-4 h-4', opacity: 'opacity-45', delay: '2.5s' },
    { top: '12%', left: '45%', size: 'w-3 h-3', opacity: 'opacity-30', delay: '1.8s' },
    { top: '92%', left: '48%', size: 'w-4 h-4', opacity: 'opacity-40', delay: '0.3s' },
    { top: '55%', left: '3%', size: 'w-4 h-4', opacity: 'opacity-40', delay: '2.2s' },
    { top: '3%', left: '75%', size: 'w-3 h-3', opacity: 'opacity-35', delay: '1.1s' },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {stars.map((s, idx) => (
        <div
          key={idx}
          style={{
            top: s.top,
            left: s.left,
            animationDelay: s.delay,
          }}
          className={`absolute ${s.size} ${s.opacity} transition-opacity duration-1000 animate-pulse text-white`}
        >
          {/* 4-point/5-point cute star SVG */}
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full drop-shadow-sm">
            <path d="M12 1.5L14.7 8.5L22 10.2L16.5 15.1L18.2 22.5L12 18.7L5.8 22.5L7.5 15.1L2 10.2L9.3 8.5L12 1.5Z" />
          </svg>
        </div>
      ))}
      {/* Subtle tiny sparkles */}
      <div className="absolute top-[18%] left-[28%] w-1.5 h-1.5 rounded-full bg-white/40 animate-ping" />
      <div className="absolute top-[72%] left-[76%] w-2 h-2 rounded-full bg-white/50 animate-pulse" />
      <div className="absolute top-[40%] left-[84%] w-1.5 h-1.5 rounded-full bg-white/30 animate-pulse" />
      <div className="absolute top-[82%] left-[34%] w-1.5 h-1.5 rounded-full bg-white/40 animate-ping" />
    </div>
  );
};
