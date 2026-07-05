'use client';

import { motion } from 'framer-motion';
import { UserCheck, Compass, Sliders, Users } from 'lucide-react';

const extensions = [
  {
    title: 'School Band - Troop Performer',
    detail: 'Earned 3 District level certificates for outstanding musical performance in school band activities.',
  },
  {
    title: 'Design Thinking Bootcamp Leader',
    detail: 'Conducted interactive workshops and bootcamps on Design Thinking methodologies for school students.',
  },
  {
    title: 'LeetCode Mentor',
    detail: 'Served as an algorithmic programming mentor, guiding 3rd-year arts students in coding basics.',
  },
];

const softwares = [
  'Microsoft PowerPoint',
  'Microsoft Word',
  'Wondershare Filmora',
  'Adobe Premiere Pro',
  'Corel Draw',
  'Bioinformatics (Clustal X & Mega)',
];

const references = [
  {
    name: 'Dr. G. Daniel',
    role: 'Principal',
    institution: 'CMS Vidya Mandir Matric Higher Secondary School',
  },
  {
    name: 'Dr. K. Periyakarupan',
    role: 'HOD, CSE Department',
    institution: 'SNS College of Engineering',
  },
  {
    name: 'Dr. B. Venkatrajah',
    role: 'Associate Professor',
    institution: 'CMS College of Arts and Science',
  },
];

export default function AdditionalInfo() {
  return (
    <section id="additional" className="relative py-12 sm:py-16 px-6 sm:px-12 md:px-24 border-t border-slate-100">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col gap-3 mb-8 items-center lg:items-start text-center lg:text-left">
          <span className="text-xs font-semibold font-space tracking-[0.3em] text-slate-400 uppercase">
            Affiliations
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-space tracking-tight text-slate-900">
            ADDITIONAL DETAILS
          </h2>
          <div className="w-12 h-[1px] bg-slate-300 mt-1" />
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Block: Extension & Automotive Interests (7 columns) */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            
            {/* Areas of Interest Card */}
            <motion.div
              className="p-6 rounded-2xl border border-slate-200 bg-white glass-panel flex flex-col gap-4 shadow-sm shadow-slate-100"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-lg font-bold font-space text-slate-900 flex items-center gap-2">
                <Compass className="w-5 h-5 text-slate-500" />
                AUTOMOTIVE INTERESTS
              </h3>
              <div className="flex flex-col gap-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                <p>
                  Passionate automotive enthusiast with in-depth knowledge of vehicle mechanics, systems, and technologies, with a keen interest in staying updated on industry trends and innovations.
                </p>
                <p>
                  Skilled in vehicle maintenance, repair, and customization, with a strong understanding of automotive principles, including engine performance, transmission, and suspension systems.
                </p>
              </div>
            </motion.div>

            {/* Extension Activities */}
            <motion.div
              className="p-6 rounded-2xl border border-slate-200 bg-white glass-panel flex flex-col gap-5 shadow-sm shadow-slate-100"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              <h3 className="text-lg font-bold font-space text-slate-900 flex items-center gap-2">
                <Users className="w-5 h-5 text-slate-500" />
                EXTENSION ACTIVITIES
              </h3>
              <div className="flex flex-col gap-4">
                {extensions.map((ext, idx) => (
                  <div key={idx} className="flex flex-col gap-1 border-l border-slate-200 pl-4 py-0.5">
                    <h4 className="text-xs sm:text-sm font-semibold font-space text-slate-900">
                      {ext.title}
                    </h4>
                    <p className="text-xs text-slate-600 font-sans leading-relaxed">
                      {ext.detail}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>

          {/* Right Block: Softwares & References (5 columns) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            
            {/* Software Tools */}
            <motion.div
              className="p-6 rounded-2xl border border-slate-200 bg-white glass-panel flex flex-col gap-4 shadow-sm shadow-slate-100"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-lg font-bold font-space text-slate-900 flex items-center gap-2">
                <Sliders className="w-5 h-5 text-slate-500" />
                SOFTWARE EXPERIENCE
              </h3>
              <div className="flex flex-wrap gap-2">
                {softwares.map((sw) => (
                  <span
                    key={sw}
                    className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold font-space tracking-wide uppercase text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors duration-200 shadow-sm"
                  >
                    {sw}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Academic References */}
            <motion.div
              className="p-6 rounded-2xl border border-slate-200 bg-white glass-panel flex flex-col gap-4 shadow-sm shadow-slate-100"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <h3 className="text-lg font-bold font-space text-slate-900 flex items-center gap-2">
                <UserCheck className="w-5 h-5 text-slate-500" />
                ACADEMIC REFERENCES
              </h3>
              <div className="flex flex-col gap-3">
                {references.map((ref, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col shadow-sm">
                    <span className="text-xs sm:text-sm font-bold font-space text-slate-900">
                      {ref.name}
                    </span>
                    <span className="text-[10px] font-space text-slate-500 uppercase tracking-wide mt-1">
                      {ref.role}
                    </span>
                    <span className="text-[10px] font-sans text-slate-400 mt-0.5">
                      {ref.institution}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
