export interface BirthdayConfig {
  passcode: string;
  recipientName: string;
  birthdayDateNumber: string;
  surpriseQuestion: {
    question: string;
    yesText: string;
    noText: string;
  };
  noResponse: {
    heading: string;
    buttonText: string;
  };
  birthdayReveal: {
    title: string;
    nextText: string;
  };
  cakeScene: {
    prompt: string;
    wishHint: string;
  };
  giftSelector: {
    title: string;
    gift1Label: string;
    gift2Label: string;
    gift3Label: string;
  };
  letterMessage: {
    heading: string;
    paragraphs: string[];
    signOff: string;
  };
  museumScene: {
    titlePrefix: string;
    titleSuffix: string;
  };
  music: {
    src: string;
    defaultVolume: number;
  };
  photos: {
    heroCouple: string;
    heroPhotoOnly: string;
    birthdayCouple: string;
    giftOneFilmstrip: string;
    giftOnePhoto1: string;
    giftOnePhoto2: string;
    letterFramedPhoto: string;
    letterPhotoOnly: string;
    cakePhoto: string;
    museum: string[];
  };
  stickers: {
    catPartyHat: string;
    partyHatYellow: string;
    catPeeking: string;
    catSunglasses: string;
    catPawBalloons: string;
    catPawRight: string;
    discoBall: string;
    bubuDuduCuddle: string;
    bubuDuduError: string;
    cake: string;
    giftBoxes: {
      left: string;
      center: string;
      right: string;
    };
    envelopeHeart: string;
    happyBirthdayLetters: string;
  };
}

export const birthdayConfig: BirthdayConfig = {
  // Configurable 4-digit PIN (default 2009 per user instruction)
  passcode: "2009",
  recipientName: "my favourite person",
  birthdayDateNumber: "29",

  surpriseQuestion: {
    question: "I have little\nsurprise for you.\nWanna see it ?",
    yesText: "YES",
    noText: "NO",
  },

  noResponse: {
    heading: "How dare you click NO !",
    buttonText: "TRY AGAIN",
  },

  birthdayReveal: {
    title: "HAPPY BIRTHDAY",
    nextText: "next",
  },

  cakeScene: {
    prompt: "blow and make a wish",
    wishHint: "tap the candle to blow it out ✨",
  },

  giftSelector: {
    title: "select any gift",
    gift1Label: "it's your dayyy",
    gift2Label: "love letter",
    gift3Label: "museum of US",
  },

  letterMessage: {
    heading: "Happy birthday to my favourite person! ❤️",
    paragraphs: [
      "I know last year was very hectic and traumatic for you, and I'm sorry for that. I really want to make you happy. Also, this year didn't change much, but I will try to make it more special than ever.",
      "I'm so lucky to have you, and I can't wait to make a million more memories with you. Here's to you, your dreams, and all the happiness you deserve.",
      "Happy birthday, my love. I love you more than you know.",
      "My Rupuuuuuuu babyyyyy!"
    ],
    signOff: "Forever & always,"
  },

  museumScene: {
    titlePrefix: "museum",
    titleSuffix: "of US",
  },

  music: {
    src: "/music/background-music.mp3",
    defaultVolume: 0.6, // 60% volume as requested
  },

  photos: {
    heroCouple: "/custom-photos/unlock-photo.jpg",
    heroPhotoOnly: "/custom-photos/unlock-photo.jpg",
    birthdayCouple: "/custom-photos/birthday-reveal-photo.jpg",
    giftOneFilmstrip: "/custom-photos/gift1-filmstrip.png",
    giftOnePhoto1: "/custom-photos/gift1-photo1.png",
    giftOnePhoto2: "/custom-photos/gift1-photo2.jpg",
    letterFramedPhoto: "/custom-photos/letter-photo.png",
    letterPhotoOnly: "/custom-photos/letter-photo.png",
    cakePhoto: "/custom-photos/cake-photo.jpg",
    museum: [
      "/custom-photos/museum-photo-1.jpg",
      "/custom-photos/museum-photo-2.jpg",
      "/custom-photos/museum-photo-3.jpg",
      "/custom-photos/museum-photo-4.jpg"
    ]
  },

  stickers: {
    catPartyHat: "/assets/cat-party-hat.png",
    partyHatYellow: "/assets/party-hat-yellow.png",
    catPeeking: "/assets/cat-peeking.png",
    catSunglasses: "/assets/cat-sunglasses.png",
    catPawBalloons: "/assets/cat-paw-balloons.png",
    catPawRight: "/assets/cat-paw-right.png",
    discoBall: "/assets/disco-ball-star.png",
    bubuDuduCuddle: "/assets/bubu-dudu-cuddle.png",
    bubuDuduError: "/assets/bubu-dudu-error.png",
    cake: "/assets/cake-full.png",
    giftBoxes: {
      left: "/assets/gift-box-left.png",
      center: "/assets/gift-box-center.png",
      right: "/assets/gift-box-right.png"
    },
    envelopeHeart: "/assets/envelope-heart-stamp.png",
    happyBirthdayLetters: "/assets/happy-birthday-letters.png"
  }
};
