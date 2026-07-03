'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Position of the cursor dot
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth springs for the trailing ring
  const springConfig = { damping: 40, stiffness: 400, mass: 0.4 };
  const ringX = useSpring(cursorX, springConfig);
  const ringY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Hide custom cursor on touch/mobile devices
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    setIsVisible(true);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if target is interactive
      const isClickable = 
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.closest('a') || 
        target.closest('button') || 
        target.closest('.interactive-card') || 
        target.closest('input') || 
        target.closest('textarea') ||
        target.classList.contains('clickable');
      
      setIsHovered(!!isClickable);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-neon-cyan rounded-full pointer-events-none z-[10000] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
        style={{ x: cursorX, y: cursorY }}
      />
      {/* Outer Glow Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-electric-blue/40 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
        style={{ x: ringX, y: ringY }}
        animate={{
          scale: isHovered ? 1.8 : 1,
          backgroundColor: isHovered ? 'rgba(0, 102, 255, 0.1)' : 'rgba(0, 0, 0, 0)',
          borderColor: isHovered ? '#00f2fe' : 'rgba(0, 102, 255, 0.4)',
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 250 }}
      >
        {/* Floating pulse point inside when hovered */}
        {isHovered && (
          <motion.div
            className="w-1.5 h-1.5 bg-neon-purple rounded-full"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
          />
        )}
      </motion.div>
    </>
  );
}
