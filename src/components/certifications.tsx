'use client';

import { motion } from 'framer-motion';
import { Award, FileCheck, CheckCircle } from 'lucide-react';

const certifications = [
  {
    name: 'Design Thinking Course Certification',
    issuer: 'AICTE',
    date: 'Verified',
    credentialId: 'ACT-DT-99',
  },
  {
    name: 'JAVA and C Language Certifications',
    issuer: 'Stanford University',
    date: 'Verified',
    credentialId: 'SU-JC-21',
  },
  {
    name: 'Leadership Certification',
    issuer: 'LearnTube',
    date: 'Verified',
    credentialId: 'LT-LC-77',
  },
  {
    name: 'Python 101 in Data Science',
    issuer: 'IBM',
    date: 'Verified',
    credentialId: 'IBM-DS-101',
  },
  {
    name: 'SQL Analytics and AI/Bi for Data Analysts',
    issuer: 'Databricks',
    date: 'Verified',
    credentialId: 'DB-SQL-AI',
  },
  {
    name: 'Python Certification',
    issuer: 'ByteXL',
    date: 'Verified',
    credentialId: 'BX-PY-56',
  },
  {
    name: 'DSA Certification',
    issuer: 'ByteXL',
    date: 'Verified',
    credentialId: 'BX-DS-45',
  },
  {
    name: '20+ AI Certification',
    issuer: 'Analytics Vidhya',
    date: 'Verified',
    credentialId: 'AV-AI-20',
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-12 sm:py-16 px-6 sm:px-12 md:px-24 border-t border-slate-100">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col gap-3 mb-8 items-center lg:items-start text-center lg:text-left">
          <span className="text-xs font-semibold font-space tracking-[0.3em] text-slate-400 uppercase">
            Credentials
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-space tracking-tight text-slate-900">
            CERTIFICATIONS
          </h2>
          <div className="w-12 h-[1px] bg-slate-300 mt-1" />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              className="p-6 rounded-2xl border border-slate-200 bg-white glass-panel flex flex-col justify-between h-[210px] shadow-sm shadow-slate-100"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
            >
              {/* Badge Icon */}
              <div className="flex justify-between items-start">
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-blue-600 shadow-sm">
                  <Award className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-space text-slate-400 uppercase tracking-widest">
                  {cert.date}
                </span>
              </div>

              {/* Certificate Details */}
              <div className="flex flex-col gap-1 mt-4">
                <h3 className="text-sm font-bold font-space text-slate-900 tracking-tight leading-snug">
                  {cert.name}
                </h3>
                <span className="text-xs text-slate-500 font-sans">
                  {cert.issuer}
                </span>
              </div>

              {/* Footer Credentials */}
              <div className="border-t border-slate-100 pt-3 mt-4 flex items-center justify-between text-[9px] font-space tracking-wider uppercase text-slate-500">
                <span className="flex items-center gap-1">
                  <FileCheck className="w-3.5 h-3.5 text-slate-400" />
                  ID: {cert.credentialId}
                </span>
                <span className="flex items-center gap-1 text-emerald-600 font-semibold">
                  <CheckCircle className="w-3 h-3 text-emerald-500" />
                  Verified
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
