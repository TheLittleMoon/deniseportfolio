'use client';

import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { useState, useEffect } from 'react';

interface Bubble {
  id: number;
  size: number;
  x: number;
  y: number;
}

interface BubbleProps {
  bubble: Bubble;
  onPop: (id: number) => void;
}

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100" />

      {/* Floating Bubbles */}
      <FloatingElements />

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center min-h-screen px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">
            Designing the Future,<br />One Pixel at a Time
          </h1>
          <motion.a
            href="/portfolio"
            className="inline-block px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-pink-500 to-purple-500 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore My Work
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}

function FloatingElements() {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return;

    const newBubbles: Bubble[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      size: Math.random() * 100 + 50,
      x: Math.random() * dimensions.width,
      y: Math.random() * dimensions.height,
    }));
    setBubbles(newBubbles);
  }, [dimensions]);

  const handlePop = (id: number) => {
    setBubbles((prev) => prev.filter((bubble) => bubble.id !== id));
  };

  return (
    <div className="absolute inset-0 overflow-hidden">
      <AnimatePresence>
        {bubbles.map((bubble) => (
          <BubbleComponent key={bubble.id} bubble={bubble} onPop={handlePop} />
        ))}
      </AnimatePresence>
    </div>
  );
}

function BubbleComponent({ bubble, onPop }: BubbleProps) {
  const controls = useAnimation();
  const [isPopped, setIsPopped] = useState(false);

  // Floating animation
  useEffect(() => {
    if (!isPopped) {
      controls.start({
        x: [
          bubble.x,
          bubble.x + Math.random() * 100 - 50,
          bubble.x + Math.random() * 100 - 50,
          bubble.x,
        ],
        y: [
          bubble.y,
          bubble.y - Math.random() * 100,
          bubble.y - Math.random() * 200,
          bubble.y - Math.random() * 300,
        ],
        scale: 1,
        transition: {
          duration: 10 + Math.random() * 20,
          times: [0, 0.3, 0.6, 1],
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        },
      });
    }
  }, [controls, bubble, isPopped]);

  // Handle click to "pop" the bubble
  const handleClick = () => {
    setIsPopped(true);
    controls.start({
      scale: 0, // Shrink to zero
      opacity: 0, // Fade out
      transition: { duration: 0.5 }, // Smooth shrinking animation
    });
    setTimeout(() => {
      onPop(bubble.id); // Remove bubble from state
    }, 500);
  };

  return (
    <motion.div
      className="absolute rounded-full cursor-pointer"
      initial={{ scale: 0, x: bubble.x, y: bubble.y }}
      animate={controls}
      exit={{
        scale: 0,
        opacity: 0,
        transition: { duration: 0.4 },
      }}
      onClick={handleClick} // Add click handler
      style={{
        width: bubble.size,
        height: bubble.size,
        background: isPopped
          ? `radial-gradient(circle at center, rgba(255, 0, 0, 0.8), rgba(255, 0, 0, 0.2))` // Change color on pop
          : `radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.1))`,
        boxShadow: `
          inset 0 0 20px rgba(255, 255, 255, 0.5),
          inset 10px 0 20px rgba(255, 255, 255, 0.3),
          inset -10px 0 20px rgba(255, 255, 255, 0.3),
          inset 10px 0 50px rgba(255, 255, 255, 0.2),
          inset -10px 0 50px rgba(255, 255, 255, 0.2),
          0 0 20px rgba(255, 255, 255, 0.5)
        `,
        border: '1px solid rgba(255, 255, 255, 0.3)',
      }}
    >
      <div
        className="absolute rounded-full"
        style={{
          top: '10%',
          left: '15%',
          width: '20%',
          height: '20%',
          background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0))',
          filter: 'blur(1px)',
        }}
      />
    </motion.div>
  );
}