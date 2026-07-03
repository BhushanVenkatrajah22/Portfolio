'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [count, setCount] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Fast numerical counter
    const duration = 1800; // 1.8 seconds loading experience
    const intervalTime = 15;
    const steps = duration / intervalTime;
    const increment = 100 / steps;
    
    let currentCount = 0;
    const timer = setInterval(() => {
      currentCount += increment;
      if (currentCount >= 100) {
        currentCount = 100;
        clearInterval(timer);
        setTimeout(() => {
          setIsLoaded(true);
          setTimeout(onComplete, 800); // Allow fade animation to complete
        }, 300);
      }
      setCount(Math.floor(currentCount));
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          className="fixed inset-0 bg-[#050505] z-[99999] flex flex-col items-center justify-center overflow-hidden"
          exit={{ 
            opacity: 0,
            scale: 1.05,
            filter: 'blur(10px)',
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
          }}
        >
          {/* Cyber Grid Background inside Loader */}
          <div className="absolute inset-0 cyber-grid cyber-grid-radial opacity-20 pointer-events-none" />

          {/* Centered Graphic and Rings */}
          <div className="relative flex items-center justify-center w-64 h-64">
            {/* Outermost Pulsing Ring */}
            <motion.div
              className="absolute w-56 h-56 rounded-full border border-electric-blue/20"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            />
            {/* Middle Segmented Ring */}
            <motion.div
              className="absolute w-44 h-44 rounded-full border-2 border-t-neon-cyan border-r-transparent border-b-neon-purple border-l-transparent"
              animate={{ rotate: -360 }}
              transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
            />
            {/* Innermost Ring */}
            <motion.div
              className="absolute w-32 h-32 rounded-full border border-soft-white/10"
              animate={{ scale: [0.95, 1.05, 0.95] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* Glowing Logo Icon */}
            <motion.div
              className="z-10 flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              {/* Custom Sci-fi Vector Logo */}
              <svg className="w-16 h-16 text-neon-cyan drop-shadow-[0_0_15px_rgba(0,242,254,0.6)]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Hexagonal shape */}
                <polygon points="50,5 93,30 93,80 50,95 7,80 7,30" stroke="currentColor" strokeWidth="2" fill="none" />
                {/* Inner triangles */}
                <polygon points="50,20 80,38 80,72 50,80 20,72 20,38" stroke="url(#logoGrad)" strokeWidth="1.5" fill="none" />
                <path d="M50,20 L50,80" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
                <path d="M20,38 L80,72" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
                <path d="M80,38 L20,72" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
                
                <defs>
                  <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0066ff" />
                    <stop offset="100%" stopColor="#9d4edd" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>
          </div>

          {/* Numerical percentage loader */}
          <div className="absolute bottom-24 flex flex-col items-center">
            <motion.span
              className="text-4xl font-light font-space tracking-[0.2em] text-soft-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              {count}%
            </motion.span>
            <span className="text-[10px] font-space tracking-[0.4em] text-neutral-500 uppercase mt-2">
              System Initialization
            </span>
          </div>

          {/* Futuristic bottom scanline bar */}
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-neutral-900 overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-to-r from-electric-blue via-neon-cyan to-neon-purple"
              style={{ width: `${count}%` }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
