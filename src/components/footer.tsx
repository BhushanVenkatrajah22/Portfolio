'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaResearchgate } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const socialLinks = [
  { icon: FaGithub, url: 'https://github.com', label: 'GitHub', color: '#fff' },
  { icon: FaLinkedin, url: 'https://linkedin.com', label: 'LinkedIn', color: '#0077b5' },
  { icon: FaResearchgate, url: 'https://researchgate.net', label: 'ResearchGate', color: '#00ccbb' },
  { icon: SiLeetcode, url: 'https://leetcode.com', label: 'LeetCode', color: '#ffa116' },
];

export default function Footer() {
  const handleSocialClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="w-full relative z-10 py-12 px-6 sm:px-8 mt-24 border-t border-white/5 bg-black/40 backdrop-blur-md overflow-hidden">
      {/* Glow Line divider */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-cyan/50 to-transparent shadow-[0_0_10px_rgba(0,242,254,0.3)]" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo and Credits */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
          <span className="font-space text-lg font-bold tracking-wider text-soft-white">
            BHUSHAN V
          </span>
          <p className="text-xs text-neutral-500 font-sans">
            AI Engineer & Software Developer. Transforming ideas into intelligent systems.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          {socialLinks.map((social) => (
            <motion.button
              key={social.label}
              onClick={() => handleSocialClick(social.url)}
              aria-label={social.label}
              className="p-3 rounded-full bg-white/[0.02] border border-white/5 hover:border-white/15 text-neutral-400 hover:text-soft-white cursor-none flex items-center justify-center transition-all duration-300"
              whileHover={{ 
                scale: 1.1,
                boxShadow: `0 0 15px rgba(255,255,255,0.08)`,
                backgroundColor: 'rgba(255,255,255,0.04)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              <social.icon className="w-4.5 h-4.5" />
            </motion.button>
          ))}
        </div>

        {/* Legal/Copyright */}
        <div className="text-center md:text-right">
          <p className="text-[10px] font-space tracking-wider uppercase text-neutral-600">
            © {new Date().getFullYear()} • Handcrafted with Next.js & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
