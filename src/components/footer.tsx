'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaResearchgate } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const socialLinks = [
  { icon: FaGithub, url: 'https://github.com/BhushanVenkatrajah22', label: 'GitHub' },
  { icon: FaLinkedin, url: 'https://www.linkedin.com/in/bhushan-venkatrajah/', label: 'LinkedIn' },
  { icon: FaResearchgate, url: 'https://www.researchgate.net/profile/Bhushan-Venkatrajah?ev=hdr_xprf', label: 'ResearchGate' },
  { icon: SiLeetcode, url: 'https://leetcode.com/u/BhushanVenkatrajah/', label: 'LeetCode' },
];

export default function Footer() {
  const handleSocialClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="w-full relative z-10 py-8 px-6 sm:px-8 mt-12 border-t border-slate-200 bg-white/50 backdrop-blur-md overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Logo and Credits */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
          <span className="font-space text-lg font-bold tracking-wider text-slate-900">
            BHUSHAN V
          </span>
          <p className="text-xs text-slate-500 font-sans">
            AI Engineer & Software Developer. Transforming ideas into intelligent systems.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-3">
          {socialLinks.map((social) => (
            <motion.button
              key={social.label}
              onClick={() => handleSocialClick(social.url)}
              aria-label={social.label}
              className="p-3 rounded-xl bg-white border border-slate-200 hover:border-slate-350 text-slate-500 hover:text-slate-900 flex items-center justify-center transition-all duration-200 shadow-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <social.icon className="w-4.5 h-4.5" />
            </motion.button>
          ))}
        </div>

        {/* Legal/Copyright */}
        <div className="text-center md:text-right">
          <p className="text-[10px] font-space tracking-wider uppercase text-slate-400">
            © {new Date().getFullYear()} • Handcrafted with Next.js & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
