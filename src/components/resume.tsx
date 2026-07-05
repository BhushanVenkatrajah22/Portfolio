'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, Check, AlertCircle } from 'lucide-react';

export default function Resume() {
  const [downloadState, setDownloadState] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleDownload = () => {
    setDownloadState('loading');
    
    // Simulate check and trigger download of the official PDF resume
    setTimeout(() => {
      try {
        const link = document.createElement('a');
        link.href = '/Bhushan_V_Resume.pdf';
        link.download = 'Bhushan_V_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        setDownloadState('success');
        setTimeout(() => setDownloadState('idle'), 2000);
      } catch (err) {
        setDownloadState('idle');
      }
    }, 1200);
  };

  return (
    <section id="resume" className="relative py-12 sm:py-16 px-6 sm:px-12 md:px-24 border-t border-slate-100">
      <div className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col gap-3 mb-8 items-center text-center">
          <span className="text-xs font-semibold font-space tracking-[0.3em] text-slate-400 uppercase">
            Curriculum
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-space tracking-tight text-slate-900">
            RESUME OVERVIEW
          </h2>
          <div className="w-12 h-[1px] bg-slate-300 mt-1" />
        </div>

        {/* Resume Preview Box and CTA */}
        <div className="flex flex-col gap-8 items-center">
          
          {/* Document Mockup */}
          <motion.div
            className="w-full rounded-2xl border border-slate-200 bg-white glass-panel p-6 sm:p-10 shadow-2xl shadow-slate-100/50 relative overflow-hidden flex flex-col gap-8 select-none"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Header info */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-100 pb-6">
              <div className="flex flex-col gap-1">
                <h3 className="text-2xl font-bold font-space text-slate-900 tracking-tight">
                  BHUSHAN V
                </h3>
                <span className="text-xs font-space tracking-wider uppercase text-blue-600 font-semibold">
                  AI Engineer & Software Developer
                </span>
              </div>
              <div className="text-left sm:text-right text-[10px] font-space text-slate-400 uppercase tracking-widest leading-relaxed">
                Coimbatore, Tamil Nadu, India <br />
                github.com/BhushanVenkatrajah22 • linkedin.com/in/bhushan-venkatrajah/
              </div>
            </div>

            {/* Resume Summary highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs sm:text-sm font-sans text-slate-600">
              {/* Left Side: Summary & Education */}
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <h4 className="font-space font-semibold uppercase tracking-wider text-slate-800 border-b border-slate-100 pb-1">
                    Profile
                  </h4>
                  <p className="leading-relaxed">
                    Dedicated Computer Science student creating intelligent algorithms, IoT systems, and deep learning analytics. Expert in EV battery management diagnostics and bio-sustainable engineering.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="font-space font-semibold uppercase tracking-wider text-slate-800 border-b border-slate-100 pb-1">
                    Education
                  </h4>
                  <div className="flex flex-col gap-2.5">
                    <div>
                      <p className="font-semibold text-slate-800">SNS College of Engineering</p>
                      <p className="text-[11px] text-slate-400 font-space">B.E. Computer Science • CGPA 8.22 • 2024 - 2028</p>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">CMS Vidya Mandir</p>
                      <p className="text-[11px] text-slate-400 font-space">HSC • 70% | SSLC • 80%</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side: Key Core Competencies */}
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <h4 className="font-space font-semibold uppercase tracking-wider text-slate-800 border-b border-slate-100 pb-1">
                    Research & Patents
                  </h4>
                  <ul className="flex flex-col gap-2 list-disc pl-4 text-slate-600 font-sans">
                    <li>
                      <a 
                        href="https://www.researchgate.net/publication/386324562_SYNERGISTIC_DRUGS_COATED_TITANIUM_DENTAL_IMPLANTS_AGAINST_BACTERIAL_PATHOGENS" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:underline text-indigo-600 dark:text-indigo-400 font-medium"
                      >
                        Titanium Dental Implants drug coating research
                      </a>.
                    </li>
                    <li>Pleurotus mycelium-based bio-leather mycofabrication.</li>
                    <li>IoT Smart Water Bottle for elderly patient monitoring (Patent).</li>
                  </ul>
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="font-space font-semibold uppercase tracking-wider text-slate-800 border-b border-slate-100 pb-1">
                    Experience Highlights
                  </h4>
                  <ul className="flex flex-col gap-2 list-disc pl-4 text-slate-600 font-sans">
                    <li>Developed responsive logic modules during SNS Square Internship.</li>
                    <li>Mentored academic candidates on Python programming algorithms.</li>
                    <li>Built interactive frontend portals at InternPe.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Subtle bottom fade */}
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none" />
          </motion.div>

          {/* Download button */}
          <button
            onClick={handleDownload}
            disabled={downloadState === 'loading'}
            className={`px-8 py-3.5 rounded-full font-space text-xs font-semibold tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2.5 border min-w-[200px] ${
              downloadState === 'success'
                ? 'bg-emerald-50 border-emerald-200 text-emerald-700 shadow-sm shadow-emerald-50'
                : 'bg-blue-600 border-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-100'
            }`}
          >
            {downloadState === 'idle' && (
              <>
                <Download className="w-4 h-4" />
                Download Resume
              </>
            )}
            {downloadState === 'loading' && (
              <>
                <svg className="animate-spin h-4 w-4 text-current" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Compiling...
              </>
            )}
            {downloadState === 'success' && (
              <>
                <Check className="w-4 h-4" />
                Downloaded!
              </>
            )}
          </button>

        </div>
      </div>
    </section>
  );
}
