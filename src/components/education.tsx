'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const education = [
  {
    institution: 'SNS College of Engineering',
    degree: 'B.E. Computer Science & Engineering',
    duration: '2024 - 2028 (Expected)',
    result: 'CGPA 8.22',
    description: 'Specializing in artificial intelligence, software engineering methodology, data structures, analysis of algorithms, and IoT edge devices. Active member of technical clubs and patent teams.',
  },
  {
    institution: 'CMS Vidya Mandir',
    degree: 'Higher Secondary Certificate (HSC)',
    duration: '2022 - 2024',
    result: 'Score: 70%',
    description: 'Focused on Computer Science, Mathematics, Physics, and Chemistry. Developed early scripts and algorithmic basics.',
  },
  {
    institution: 'CMS Vidya Mandir',
    degree: 'Secondary School Leaving Certificate (SSLC)',
    duration: '2022',
    result: 'Score: 80%',
    description: 'General Science, Mathematics, and Languages. Graduated with first-class honors.',
  },
];

export default function Education() {
  return (
    <section id="education" className="relative py-12 sm:py-16 px-6 sm:px-12 md:px-24 border-t border-slate-100">
      <div className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col gap-3 mb-10 items-center text-center">
          <span className="text-xs font-semibold font-space tracking-[0.3em] text-slate-400 uppercase">
            Academics
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-space tracking-tight text-slate-900">
            EDUCATION PATHWAY
          </h2>
          <div className="w-12 h-[1px] bg-slate-300 mt-1" />
        </div>

        {/* Timeline Path container */}
        <div className="relative border-l border-slate-200 pl-6 sm:pl-10 ml-4 sm:ml-6 flex flex-col gap-12">
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              className="relative"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
            >
              {/* Timeline dot node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-slate-100 border border-slate-400 flex items-center justify-center shadow-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
              </div>

              {/* Education Card */}
              <div className="p-6 rounded-2xl border border-slate-200 bg-white glass-panel flex flex-col gap-4 shadow-sm shadow-slate-100">
                {/* Header detail */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-semibold font-space tracking-[0.15em] text-indigo-600 uppercase flex items-center gap-1.5">
                      <GraduationCap className="w-3.5 h-3.5 text-indigo-500" />
                      {edu.degree}
                    </span>
                    <h3 className="text-xl font-bold font-space text-slate-900">
                      {edu.institution}
                    </h3>
                  </div>
                  
                  {/* Meta stats */}
                  <div className="flex flex-col sm:items-end text-slate-500 font-space text-xs">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {edu.duration}
                    </span>
                    <span className="flex items-center gap-1 mt-1 text-[10px] text-blue-600 font-bold uppercase tracking-wider">
                      <Award className="w-3.5 h-3.5 text-blue-500" />
                      {edu.result}
                    </span>
                  </div>
                </div>

                {/* Description info */}
                <p className="text-slate-600 font-sans text-xs sm:text-sm leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
