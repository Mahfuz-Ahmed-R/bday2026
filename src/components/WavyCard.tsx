import React from 'react';

interface WavyCardProps {
  children: React.ReactNode;
  className?: string;
  borderColor?: string;
  bgColor?: string;
}

export const WavyCard: React.FC<WavyCardProps> = ({
  children,
  className = '',
  borderColor = '#7C67B6',
  bgColor = '#FAF6DF',
}) => {
  return (
    <div className={`relative p-6 md:p-8 rounded-[32px] shadow-[0_12px_28px_rgba(80,55,120,0.18)] ${className}`}
      style={{
        backgroundColor: bgColor,
        border: `4px solid ${borderColor}`,
        boxShadow: '0 12px 30px rgba(90, 70, 140, 0.16), inset 0 0 0 2px rgba(255,255,255,0.4)',
      }}
    >
      {/* Decorative wavy outer outline effect */}
      <div 
        className="absolute -inset-[8px] rounded-[38px] pointer-events-none opacity-30"
        style={{
          border: `2px dashed ${borderColor}`,
        }}
      />
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
        {children}
      </div>
    </div>
  );
};
