'use client';

import { motion } from 'framer-motion';
import { Award, FileText, Cpu, ShieldCheck } from 'lucide-react';

const stats = [
  { value: '10+', label: 'Projects Completed', icon: Cpu },
  { value: '3', label: 'Internships Done', icon: Award },
  { value: '2', label: 'Research Journals', icon: FileText },
  { value: '1', label: 'Patent Published', icon: ShieldCheck },
];

export default function About() {
  return (
    <section id="about" className="relative py-12 sm:py-16 px-6 sm:px-12 md:px-24 border-t border-slate-100">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col gap-3 mb-8 items-center lg:items-start text-center lg:text-left">
          <span className="text-xs font-semibold font-space tracking-[0.3em] text-slate-400 uppercase">
            Discovery
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-space tracking-tight text-slate-900">
            ABOUT ME
          </h2>
          <div className="w-12 h-[1px] bg-slate-300 mt-1" />
        </div>

        {/* Core Layout Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Human-made System Schematic (Clean Vector Blueprint) */}
          <motion.div 
            className="lg:col-span-5 flex justify-center order-2 lg:order-1"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-full max-w-[360px] aspect-square rounded-2xl border border-slate-200 bg-white glass-panel p-6 flex items-center justify-center shadow-sm shadow-slate-100">
              
              {/* Clean Schematic Diagram */}
              <svg className="w-full h-full text-slate-400" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Structural Grid lines */}
                <line x1="20" y1="100" x2="180" y2="100" stroke="rgba(0,0,0,0.02)" strokeWidth="1" />
                <line x1="100" y1="20" x2="100" y2="180" stroke="rgba(0,0,0,0.02)" strokeWidth="1" />
                
                {/* Core Module Box */}
                <rect x="75" y="75" width="50" height="50" rx="6" stroke="rgba(0,0,0,0.1)" strokeWidth="1" fill="rgba(0,0,0,0.005)" />
                <text x="100" y="104" fill="rgba(0,0,0,0.45)" fontSize="8" fontFamily="monospace" textAnchor="middle">CORE.V1</text>
                
                {/* Connected peripheral nodes */}
                {/* AI Node */}
                <rect x="25" y="40" width="30" height="24" rx="4" stroke="rgba(0,0,0,0.08)" strokeWidth="1" fill="rgba(0,0,0,0.003)" />
                <text x="40" y="55" fill="rgba(0,0,0,0.35)" fontSize="6" fontFamily="monospace" textAnchor="middle">AI_ENG</text>
                <path d="M55,52 L75,85" stroke="rgba(0,0,0,0.08)" strokeWidth="1" strokeDasharray="3 3" />

                {/* IoT Node */}
                <rect x="145" y="40" width="30" height="24" rx="4" stroke="rgba(0,0,0,0.08)" strokeWidth="1" fill="rgba(0,0,0,0.003)" />
                <text x="160" y="55" fill="rgba(0,0,0,0.35)" fontSize="6" fontFamily="monospace" textAnchor="middle">IoT_SYS</text>
                <path d="M145,52 L125,85" stroke="rgba(0,0,0,0.08)" strokeWidth="1" strokeDasharray="3 3" />

                {/* Mobility Node */}
                <rect x="80" y="145" width="40" height="24" rx="4" stroke="rgba(0,0,0,0.08)" strokeWidth="1" fill="rgba(0,0,0,0.003)" />
                <text x="100" y="160" fill="rgba(0,0,0,0.35)" fontSize="6" fontFamily="monospace" textAnchor="middle">MOBILITY</text>
                <path d="M100,145 L100,125" stroke="rgba(0,0,0,0.08)" strokeWidth="1" strokeDasharray="3 3" />
              </svg>

              {/* Layout labels */}
              <div className="absolute top-4 left-6 font-space text-[10px] text-slate-400 uppercase tracking-widest">
                SYSTEM SCHEMATIC
              </div>
              <div className="absolute bottom-4 right-6 font-space text-[10px] text-slate-400 uppercase tracking-widest">
                V0.1.6 // DEV
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio & Stats Grid */}
          <div className="lg:col-span-7 flex flex-col gap-6 order-1 lg:order-2">
            <motion.div
              className="flex flex-col gap-4"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-xl sm:text-2xl font-space font-medium text-slate-800 leading-snug">
                Pioneering the intersection of artificial intelligence, future mobility, and sustainable software solutions.
              </h3>
              <p className="text-slate-600 font-sans text-sm sm:text-base leading-relaxed">
                Passionate Computer Science Engineering student committed to transforming innovative ideas into impactful technological solutions. Experienced in AI-driven applications, software development, research publications, patents, and intelligent systems. Interested in AI, Sustainability, Electric Vehicles, IoT, and Research.
              </p>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3">
              {stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  className="p-4 rounded-xl border border-slate-200 bg-white glass-panel flex flex-col gap-1.5 shadow-sm shadow-slate-100"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-3xl sm:text-4xl font-extrabold font-space tracking-tight text-slate-900">
                      {stat.value}
                    </span>
                    <stat.icon className="w-5 h-5 text-slate-400" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-slate-500 font-space uppercase tracking-wider">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
