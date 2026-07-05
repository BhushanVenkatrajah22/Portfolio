'use client';

import BackgroundCanvas from './background-canvas';
import Navbar from './navbar';
import Footer from './footer';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen flex flex-col justify-between">
      {/* Static Ambient Background */}
      <BackgroundCanvas />

      {/* Navigation Menu */}
      <Navbar />

      {/* Viewport Content */}
      <main className="flex-grow pt-24">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
