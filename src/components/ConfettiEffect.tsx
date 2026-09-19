import confetti from 'canvas-confetti';

export const triggerConfetti = (originY = 0.6) => {
  // Soft pastel colors matching theme
  const colors = ['#C9B8E5', '#F7F1D6', '#E498A6', '#D3A528', '#8F75BD', '#FFFFFF'];

  // Left burst
  confetti({
    particleCount: 45,
    angle: 60,
    spread: 55,
    origin: { x: 0.1, y: originY },
    colors,
    ticks: 200,
    gravity: 0.9,
    scalar: 1.1,
  });

  // Right burst
  confetti({
    particleCount: 45,
    angle: 120,
    spread: 55,
    origin: { x: 0.9, y: originY },
    colors,
    ticks: 200,
    gravity: 0.9,
    scalar: 1.1,
  });

  // Center star burst
  confetti({
    particleCount: 30,
    spread: 80,
    origin: { x: 0.5, y: originY - 0.1 },
    colors,
    shapes: ['star', 'circle'],
    ticks: 240,
    gravity: 0.7,
    scalar: 1.2,
  });
};
