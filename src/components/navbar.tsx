'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const navLinks = [
  { id: 'hero', name: 'Home' },
  { id: 'about', name: 'About' },
  { id: 'skills', name: 'Skills' },
  { id: 'projects', name: 'Projects' },
  { id: 'experience', name: 'Timeline' },
  { id: 'research', name: 'Research' },
  { id: 'achievements', name: 'Achievements' },
  { id: 'contact', name: 'Contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Set scrolled state
      setIsScrolled(window.scrollY > 20);

      // Scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Set up intersection observer for active sections
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px', // Trigger when section is in active viewing area
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navLinks.forEach((link) => {
      const section = document.getElementById(link.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; // height of navbar
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-[3px] bg-neutral-900/30 z-[9999]">
        <motion.div
          className="h-full bg-gradient-to-r from-electric-blue via-neon-cyan to-neon-purple shadow-[0_0_8px_rgba(0,242,254,0.6)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Glass Navbar Wrapper */}
      <div className="fixed top-4 left-0 w-full z-[9990] px-4 sm:px-6 md:px-8">
        <motion.header
          className={`max-w-7xl mx-auto rounded-full transition-all duration-500 ease-in-out ${
            isScrolled
              ? 'glass-panel backdrop-blur-md bg-black/40 py-3 px-6 border-white/5 shadow-2xl'
              : 'bg-transparent py-5 px-4 border-transparent'
          }`}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a 
              href="#hero" 
              onClick={(e) => handleNavClick(e, 'hero')}
              className="flex items-center gap-2 group cursor-none"
            >
              <span className="text-xl font-bold font-space tracking-wider text-soft-white flex items-center gap-1.5">
                BHUSHAN
                <span className="w-2 h-2 rounded-full bg-neon-cyan group-hover:bg-neon-purple transition-colors duration-300" />
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 text-sm font-medium font-sans">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`relative px-4 py-2 rounded-full transition-colors duration-300 cursor-none ${
                    activeSection === link.id
                      ? 'text-neon-cyan'
                      : 'text-neutral-400 hover:text-soft-white'
                  }`}
                >
                  <span className="relative z-10">{link.name}</span>
                  {activeSection === link.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-white/[0.04] border border-white/5 rounded-full z-0"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              ))}
            </nav>

            {/* Action CTA Button */}
            <div className="hidden lg:block">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, 'contact')}
                className="relative inline-flex items-center justify-center gap-1.5 px-5 py-2 text-xs font-semibold font-space tracking-wide uppercase rounded-full border border-white/10 hover:border-neon-cyan/50 bg-white/[0.02] text-soft-white transition-all duration-300 group hover:shadow-[0_0_15px_rgba(0,242,254,0.2)] cursor-none"
              >
                Hire Me
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-neutral-400 hover:text-soft-white focus:outline-none cursor-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </motion.header>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black/95 z-[9980] flex flex-col justify-center px-8 lg:hidden"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.4 }}
          >
            {/* Background pattern inside drawer */}
            <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />

            <div className="flex flex-col gap-6 font-space text-2xl font-semibold">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`transition-colors py-2 border-b border-white/5 ${
                    activeSection === link.id
                      ? 'text-neon-cyan'
                      : 'text-neutral-400'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  {link.name}
                </motion.a>
              ))}
              
              <motion.a
                href="#contact"
                onClick={(e) => handleNavClick(e, 'contact')}
                className="mt-4 py-3 text-center text-sm font-semibold tracking-wider uppercase rounded-full bg-gradient-to-r from-electric-blue to-neon-cyan text-white shadow-lg shadow-electric-blue/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
              >
                Hire Me
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
