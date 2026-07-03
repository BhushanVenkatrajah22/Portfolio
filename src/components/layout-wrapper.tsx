'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LoadingScreen from './loading-screen';
import CustomCursor from './custom-cursor';
import BackgroundCanvas from './background-canvas';
import Navbar from './navbar';
import Footer from './footer';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <LoadingScreen onComplete={() => setIsLoading(false)} />
      
      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="relative min-h-screen flex flex-col justify-between"
        >
          {/* Custom Cursor */}
          <CustomCursor />

          {/* Interactive Particle and Mesh Background */}
          <BackgroundCanvas />

          {/* Floating Navigation Menu */}
          <Navbar />

          {/* Main Section Content Wrapper */}
          <main className="flex-grow pt-24">
            {children}
          </main>

          {/* Footer */}
          <Footer />
        </motion.div>
      )}
    </>
  );
}
