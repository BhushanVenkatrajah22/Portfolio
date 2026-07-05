'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Mail, Briefcase, FileText } from 'lucide-react';
import { FaGithub, FaLinkedin, FaResearchgate } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import Image from 'next/image';

const socials = [
  { icon: FaGithub, url: 'https://github.com/BhushanVenkatrajah22', label: 'GitHub' },
  { icon: FaLinkedin, url: 'https://www.linkedin.com/in/bhushan-venkatrajah/', label: 'LinkedIn' },
  { icon: FaResearchgate, url: 'https://www.researchgate.net/profile/Bhushan-Venkatrajah?ev=hdr_xprf', label: 'ResearchGate' },
  { icon: SiLeetcode, url: 'https://leetcode.com/u/BhushanVenkatrajah/', label: 'LeetCode' },
];

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center py-16 px-6 sm:px-12 md:px-24 overflow-hidden">
      {/* Background Subtle Tech Grid (Futuristic ambiance) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.03)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      {/* Two-column container on desktop, vertical stack on mobile */}
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Left Column: Name, Title & Details */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
          
          {/* Status Pill Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-200/80 bg-slate-50 text-xs font-medium font-space tracking-wide text-slate-600 mb-4 shadow-sm shadow-slate-100 dark:bg-slate-900/60 dark:border-slate-800/80 dark:text-slate-400"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]" />
            Available for Opportunities
          </motion.div>

          {/* Title Name with Cyber Gradient */}
          <motion.h1
            className="text-5xl sm:text-7xl md:text-8xl font-bold font-space tracking-tight bg-gradient-to-r from-electric-blue via-neon-cyan to-neon-purple bg-clip-text text-transparent mb-3 leading-none"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            BHUSHAN V
          </motion.h1>

          {/* Role Statement */}
          <motion.h2
            className="text-lg sm:text-2xl md:text-3xl font-space font-medium text-slate-700 dark:text-slate-300 mb-4 tracking-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            AI Engineer & Software Developer
          </motion.h2>

          {/* Short Statement */}
          <motion.p
            className="max-w-2xl text-slate-500 dark:text-slate-400 font-sans text-sm sm:text-base leading-relaxed mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Designing, developing, and researching state-of-the-art AI systems, EV battery diagnostics, and intelligent hardware-software interfaces. Committed to sustainable engineering and architectural excellence.
          </motion.p>

          {/* CTA Actions */}
          <motion.div
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {/* Projects Link */}
            <button
              onClick={() => handleScrollTo('projects')}
              className="w-full sm:w-auto px-7 py-3 rounded-full font-space text-xs font-semibold tracking-wider uppercase bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-100 hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 border border-blue-600 cursor-pointer"
            >
              <Briefcase className="w-4 h-4" />
              View Projects
            </button>

            {/* Resume Link */}
            <button
              onClick={() => handleScrollTo('resume')}
              className="w-full sm:w-auto px-7 py-3 rounded-full font-space text-xs font-semibold tracking-wider uppercase bg-white border border-slate-200 hover:border-slate-300 text-slate-700 hover:bg-slate-50 shadow-sm transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer dark:bg-slate-900 dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-800/50"
            >
              <FileText className="w-4 h-4 text-slate-400" />
              Get Resume
            </button>

            {/* Contact Link */}
            <button
              onClick={() => handleScrollTo('contact')}
              className="w-full sm:w-auto px-7 py-3 rounded-full font-space text-xs font-semibold tracking-wider uppercase bg-transparent text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Mail className="w-4 h-4 text-slate-400" />
              Contact
            </button>
          </motion.div>

          {/* Social Icons row */}
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-2.5 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-500 hover:text-slate-800 shadow-sm transition-all duration-200 flex items-center justify-center dark:bg-slate-900 dark:border-slate-800 dark:text-slate-400 dark:hover:text-slate-200"
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </motion.div>

        </div>

        {/* Right Column: Profile Image with Futuristic HUD Animations */}
        <motion.div 
          className="lg:col-span-5 flex justify-center items-center order-1 lg:order-2 w-full"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[350px] aspect-[4/5] flex items-center justify-center">
            
            {/* 1. Outer Rotating Tech Circle/Ring */}
            <motion.div 
              className="absolute inset-[-15px] rounded-full border border-dashed border-blue-500/20 dark:border-blue-400/30 pointer-events-none"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            />
            
            {/* 2. Secondary Glowing Ambient Tech Ring */}
            <motion.div 
              className="absolute inset-[-5px] rounded-full border border-double border-cyan-500/15 dark:border-cyan-400/20 pointer-events-none"
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
            />

            {/* 3. Floating Ambient Glow Background */}
            <motion.div 
              className="absolute -inset-4 bg-gradient-to-tr from-blue-500/10 via-cyan-500/10 to-purple-500/10 rounded-[2.5rem] blur-2xl pointer-events-none"
              animate={{ 
                scale: [1, 1.04, 1],
                opacity: [0.5, 0.75, 0.5]
              }}
              transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
            />

            {/* 4. Main Photo Container with Floating & Hover Motion */}
            <motion.div
              className="relative w-full h-full rounded-2xl overflow-hidden border border-slate-200/60 shadow-2xl flex items-center justify-center bg-white/40 dark:bg-slate-900/40 p-2 z-10 dark:border-slate-800/60 backdrop-blur-md"
              animate={{ 
                y: [-8, 8, -8],
              }}
              transition={{ 
                repeat: Infinity,
                duration: 6,
                ease: "easeInOut"
              }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
                transition: { duration: 0.3 }
              }}
            >
              {/* Image element wrapper */}
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-950">
                <Image 
                  src="/profile.jpg"
                  alt="Bhushan V"
                  fill
                  priority
                  className="object-cover object-top filter grayscale-[10%] hover:grayscale-0 contrast-[1.03] transition-all duration-700 ease-out scale-100 hover:scale-105"
                  sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, 350px"
                />

                {/* Cyber Scanline Laser Effect */}
                <motion.div 
                  className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_8px_rgba(34,211,238,0.8)] z-20 pointer-events-none"
                  animate={{ 
                    top: ["0%", "100%", "0%"]
                  }}
                  transition={{ 
                    repeat: Infinity,
                    duration: 5,
                    ease: "easeInOut"
                  }}
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* 5. Holographic Corner Brackets (HUD overlay) */}
              <span className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-cyan-500/70 z-20 rounded-tl-sm pointer-events-none" />
              <span className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-cyan-500/70 z-20 rounded-tr-sm pointer-events-none" />
              <span className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-cyan-500/70 z-20 rounded-bl-sm pointer-events-none" />
              <span className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-cyan-500/70 z-20 rounded-br-sm pointer-events-none" />

              {/* 6. Scientific HUD Text Indicators inside frame */}
              <div className="absolute bottom-5 left-5 z-20 font-space text-[9px] tracking-wider text-cyan-500 bg-slate-950/80 px-2 py-0.5 rounded border border-cyan-500/30 backdrop-blur-sm flex items-center gap-1.5 uppercase font-medium select-none pointer-events-none">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span>SYS_STAT: ACTIVE</span>
              </div>

              <div className="absolute top-5 right-5 z-20 font-space text-[9px] tracking-wider text-slate-300 bg-slate-950/80 px-2 py-0.5 rounded border border-slate-500/30 backdrop-blur-sm uppercase font-medium select-none pointer-events-none">
                LOC: IND
              </div>
            </motion.div>

            {/* Extra Outer Tech HUD Accent lines */}
            <div className="absolute -top-3 -left-3 w-8 h-[1px] bg-gradient-to-r from-cyan-500/40 to-transparent pointer-events-none" />
            <div className="absolute -top-3 -left-3 w-[1px] h-8 bg-gradient-to-b from-cyan-500/40 to-transparent pointer-events-none" />
            <div className="absolute -bottom-3 -right-3 w-8 h-[1px] bg-gradient-to-l from-purple-500/40 to-transparent pointer-events-none" />
            <div className="absolute -bottom-3 -right-3 w-[1px] h-8 bg-gradient-to-t from-purple-500/40 to-transparent pointer-events-none" />

          </div>
        </motion.div>

      </div>

      {/* Scroll down indicator absolute centered at bottom */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <button
          onClick={() => handleScrollTo('about')}
          className="p-2 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-400 hover:text-slate-600 shadow-sm transition-colors cursor-pointer dark:bg-slate-900 dark:border-slate-800 dark:text-slate-500 dark:hover:text-slate-300"
          aria-label="Scroll to About Section"
        >
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </button>
      </motion.div>
    </section>
  );
}
