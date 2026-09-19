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
      "I hope this year brings you everything you've been wishing for and so much more. Thank you for making my days happier, my bad days easier, and my life a little more beautiful just by being in it. 🥹💖",
      "I'm so lucky to have you, and I can't wait to make a million more memories with you. Here's to you, your dreams, and all the happiness you deserve.",
      "Happy birthday, my love. I love you more than you know. 🫶🏻🎂❤️"
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
    birthdayCouple: "/custom-photos/birthday-reveal-photo.png",
    giftOneFilmstrip: "/custom-photos/gift1-filmstrip.png",
    giftOnePhoto1: "/assets/filmstrip-photo1.png",
    giftOnePhoto2: "/assets/filmstrip-photo2.png",
    letterFramedPhoto: "/custom-photos/letter-photo.png",
    letterPhotoOnly: "/custom-photos/letter-photo.png",
    museum: [
      "/custom-photos/museum-photo-1.png",
      "/custom-photos/museum-photo-2.png",
      "/custom-photos/museum-photo-3.png",
      "/custom-photos/museum-photo-4.png",
      "/custom-photos/museum-photo-5.png"
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
