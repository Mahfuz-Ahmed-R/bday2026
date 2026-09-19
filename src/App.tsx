import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// Scenes
import { UnlockScene } from './scenes/UnlockScene';
import { SurpriseScene } from './scenes/SurpriseScene';
import { NoScene } from './scenes/NoScene';
import { WrongPasscodeScene } from './scenes/WrongPasscodeScene';
import { BirthdayReveal } from './scenes/BirthdayReveal';
import { CakeScene } from './scenes/CakeScene';
import { GiftSelector } from './scenes/GiftSelector';
import { GiftOneScene } from './scenes/GiftOneScene';
import { EnvelopeScene } from './scenes/EnvelopeScene';
import { LoveLetterScene } from './scenes/LoveLetterScene';
import { MuseumScene } from './scenes/MuseumScene';
import { BackgroundMusic } from './components/BackgroundMusic';

type Scene =
  | 'unlock'
  | 'wrong-passcode'
  | 'surprise'
  | 'no-response'
  | 'birthday-reveal'
  | 'cake'
  | 'gift-selector'
  | 'gift-one'
  | 'envelope'
  | 'love-letter'
  | 'museum';

export const App: React.FC = () => {
  const [currentScene, setCurrentScene] = useState<Scene>('unlock');
  const [openedGifts, setOpenedGifts] = useState<number[]>([]);

  // Navigation handlers
  const handleUnlockSuccess = () => setCurrentScene('surprise');
  const handleWrongPasscode = () => setCurrentScene('wrong-passcode');
  const handleTryAgainPasscode = () => setCurrentScene('unlock');

  const handleYes = () => setCurrentScene('birthday-reveal');
  const handleNo = () => setCurrentScene('no-response');
  const handleTryAgainQuestion = () => setCurrentScene('surprise');

  const handleNextReveal = () => setCurrentScene('cake');
  const handleCandleBlown = () => setCurrentScene('gift-selector');

  const handleSelectGift = (giftNumber: 1 | 2 | 3) => {
    if (!openedGifts.includes(giftNumber)) {
      setOpenedGifts((prev) => [...prev, giftNumber]);
    }

    if (giftNumber === 1) {
      setCurrentScene('gift-one');
    } else if (giftNumber === 2) {
      setCurrentScene('envelope');
    } else if (giftNumber === 3) {
      setCurrentScene('museum');
    }
  };

  const handleBackToGifts = () => setCurrentScene('gift-selector');
  const handleEnvelopeOpened = () => setCurrentScene('love-letter');

  const handleReplayAll = () => {
    setOpenedGifts([]);
    setCurrentScene('unlock');
  };

  return (
    <div className="relative w-full min-h-[100dvh] bg-[#B9A6DA] text-[#4A3B69] select-none font-sans overflow-x-hidden">
      <BackgroundMusic />
      <AnimatePresence mode="wait">
        <motion.div
          key={currentScene}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.45, ease: 'easeInOut' }}
          className="w-full min-h-[100dvh] flex flex-col"
        >
          {currentScene === 'unlock' && (
            <UnlockScene 
              onUnlockSuccess={handleUnlockSuccess} 
              onWrongPasscode={handleWrongPasscode} 
            />
          )}

          {currentScene === 'wrong-passcode' && (
            <WrongPasscodeScene onTryAgain={handleTryAgainPasscode} />
          )}

          {currentScene === 'surprise' && (
            <SurpriseScene onYes={handleYes} onNo={handleNo} />
          )}

          {currentScene === 'no-response' && (
            <NoScene onTryAgain={handleTryAgainQuestion} />
          )}

          {currentScene === 'birthday-reveal' && (
            <BirthdayReveal onNext={handleNextReveal} />
          )}

          {currentScene === 'cake' && (
            <CakeScene onCandleBlown={handleCandleBlown} />
          )}

          {currentScene === 'gift-selector' && (
            <GiftSelector 
              onSelectGift={handleSelectGift} 
              openedGifts={openedGifts} 
            />
          )}

          {currentScene === 'gift-one' && (
            <GiftOneScene onBack={handleBackToGifts} />
          )}

          {currentScene === 'envelope' && (
            <EnvelopeScene onEnvelopeOpened={handleEnvelopeOpened} />
          )}

          {currentScene === 'love-letter' && (
            <LoveLetterScene onBack={handleBackToGifts} />
          )}

          {currentScene === 'museum' && (
            <MuseumScene 
              onReplay={handleReplayAll} 
              onBackToGifts={handleBackToGifts} 
            />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default App;
