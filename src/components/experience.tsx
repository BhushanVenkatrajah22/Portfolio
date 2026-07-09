'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    role: 'Full Stack Intern',
    company: 'Ether Services',
    duration: '1 Month',
    description: 'Designed and developed modular full-stack capabilities, integrating client-side interfaces with backend microservices and databases.',
    location: 'Remote',
  },
  {
    role: 'Software Intern',
    company: 'SNS Square',
    duration: '3 Months',
    description: 'Collaborated on developing commercial enterprise software modules, writing modular backend utilities, and building responsive client interface components.',
    location: 'Coimbatore, India',
  },
  {
    role: 'Mentor (Python & Web Development)',
    company: 'B.Sc Final Year Students',
    duration: '1 Month',
    description: 'Conducted engineering project guidance, leading workshops on full-stack application development, database design, and intelligent Python scripts.',
    location: 'Academic Campus',
  },
  {
    role: 'Web Development Intern',
    company: 'InternPe',
    duration: '1 Month',
    description: 'Designed web projects utilizing HTML/CSS, JavaScript, and React, focusing on responsive UI implementation and fast load optimizations.',
    location: 'Remote',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-12 sm:py-16 px-6 sm:px-12 md:px-24 border-t border-slate-100">
      <div className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col gap-3 mb-10 items-center text-center">
          <span className="text-xs font-semibold font-space tracking-[0.3em] text-slate-400 uppercase">
            History
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-space tracking-tight text-slate-900">
            PROFESSIONAL EXPERIENCE
          </h2>
          <div className="w-12 h-[1px] bg-slate-300 mt-1" />
        </div>

        {/* Timeline Path container */}
        <div className="relative border-l border-slate-200 pl-6 sm:pl-10 ml-4 sm:ml-6 flex flex-col gap-12">
          {experiences.map((exp, idx) => (
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
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              </div>

              {/* Experience Card */}
              <div className="p-6 rounded-2xl border border-slate-200 bg-white glass-panel flex flex-col gap-4 shadow-sm shadow-slate-100">
                {/* Header detail */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-semibold font-space tracking-[0.15em] text-blue-600 uppercase flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5 text-blue-500" />
                      {exp.role}
                    </span>
                    <h3 className="text-xl font-bold font-space text-slate-900">
                      {exp.company}
                    </h3>
                  </div>
                  
                  {/* Meta stats */}
                  <div className="flex flex-col sm:items-end text-slate-500 font-space text-xs">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-1 mt-1 text-[10px]">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Description info */}
                <p className="text-slate-600 font-sans text-xs sm:text-sm leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
