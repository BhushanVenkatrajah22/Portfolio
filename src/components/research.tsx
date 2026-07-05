'use client';

import { motion } from 'framer-motion';
import { BookOpen, Award, ChevronRight } from 'lucide-react';

const researchItems = [
  {
    type: 'Journal Publication',
    title: 'Synergistic Drugs Coated Titanium Dental Implants Against Bacterial Pathogens',
    publisher: 'International Scientific Journal',
    summary: 'Investigates nanotechnology-driven drug coating applications on titanium dental implants. Optimizes dual-drug delivery mechanisms to synergistically eradicate localized bacterial pathogens and improve implant integration.',
    tags: ['Biomaterials', 'Nanotechnology', 'Pathology Control'],
    url: 'https://www.researchgate.net/publication/386324562_SYNERGISTIC_DRUGS_COATED_TITANIUM_DENTAL_IMPLANTS_AGAINST_BACTERIAL_PATHOGENS',
  },
  {
    type: 'Journal Publication',
    title: 'Mycofabrication of Mycelium-Based Leather using Pleurotus Florida and Pleurotus Ostreatus',
    publisher: 'Bio-materials & Sustainability Journal',
    summary: 'Examines mycelium cultivation methods utilizing agricultural waste substrates. Fabricates sustainable leather alternatives with high tensile strength, investigating properties of P. Florida and P. Ostreatus species.',
    tags: ['Mycology', 'Sustainable Design', 'Green Materials'],
  },
  {
    type: 'Patent Published',
    title: 'Smart Water Bottle with Integrated Medical Box for Elderly Care',
    publisher: 'Patent Office of India',
    summary: 'A physical IoT computing device monitoring daily water intake and alerting elderly users to scheduled medication times. Combines load-cell sensors, alarm triggers, and visual display widgets.',
    tags: ['IoT', 'Geriatric Health', 'Edge Hardware'],
  },
];

export default function Research() {
  return (
    <section id="research" className="relative py-12 sm:py-16 px-6 sm:px-12 md:px-24 border-t border-slate-100">
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col gap-3 mb-8 items-center text-center">
          <span className="text-xs font-semibold font-space tracking-[0.3em] text-slate-400 uppercase">
            Scholarly
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-space tracking-tight text-slate-900">
            RESEARCH & PATENTS
          </h2>
          <div className="w-12 h-[1px] bg-slate-300 mt-1" />
        </div>

        {/* Research Items Grid */}
        <div className="flex flex-col gap-6">
          {researchItems.map((item, idx) => (
            <motion.div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl border border-slate-200 bg-white glass-panel flex flex-col md:flex-row gap-6 items-start justify-between shadow-sm shadow-slate-100"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
            >
              {/* Left Column: Details */}
              <div className="flex-grow flex flex-col gap-4 max-w-3xl">
                {/* Badge Type */}
                <div className="flex items-center gap-3">
                  {item.type.includes('Patent') ? (
                    <span className="px-3 py-1 text-[10px] font-space font-bold tracking-wider text-indigo-600 bg-indigo-50 border border-indigo-100 rounded-md flex items-center gap-1.5 uppercase">
                      <Award className="w-3.5 h-3.5 text-indigo-500" />
                      {item.type}
                    </span>
                  ) : (
                    <span className="px-3 py-1 text-[10px] font-space font-bold tracking-wider text-blue-600 bg-blue-50 border border-blue-100 rounded-md flex items-center gap-1.5 uppercase">
                      <BookOpen className="w-3.5 h-3.5 text-blue-500" />
                      {item.type}
                    </span>
                  )}
                  <span className="text-[10px] font-space text-slate-400 uppercase tracking-widest">
                    {item.publisher}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold font-space text-slate-900 transition-colors duration-200 tracking-tight leading-snug">
                  {item.url ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      {item.title}
                    </a>
                  ) : (
                    item.title
                  )}
                </h3>

                {/* Summary */}
                <p className="text-slate-600 font-sans text-xs sm:text-sm leading-relaxed">
                  {item.summary}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 text-[9px] font-space tracking-wider uppercase text-slate-500 bg-slate-100/70 border border-slate-200 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: Action link */}
              <div className="flex items-center justify-end w-full md:w-auto mt-4 md:mt-0">
                {item.url ? (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-slate-50 border border-slate-200 hover:bg-slate-100 hover:border-slate-300 text-slate-400 hover:text-slate-700 transition-all duration-200 flex items-center justify-center shadow-sm dark:bg-slate-900 dark:border-slate-800 dark:text-slate-400 dark:hover:text-slate-200 cursor-pointer"
                    aria-label={`View publisher resource for ${item.title}`}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </a>
                ) : (
                  <button
                    className="p-3 rounded-full bg-slate-50 border border-slate-200 text-slate-300 transition-all duration-200 flex items-center justify-center shadow-sm cursor-not-allowed opacity-40 dark:bg-slate-900/40 dark:border-slate-800/40 dark:text-slate-700"
                    aria-label="No resource link available"
                    disabled
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
