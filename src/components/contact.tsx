'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Send, CheckCircle2 } from 'lucide-react';
import { FaGithub, FaLinkedin, FaResearchgate } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'bhushanvenkatrajah@gmail.com', href: 'mailto:bhushanvenkatrajah@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+91 9361070326', href: 'tel:+919361070326' },
];

const socials = [
  { icon: FaGithub, url: 'https://github.com/BhushanVenkatrajah22', label: 'GitHub', color: 'hover:border-slate-350 hover:text-slate-950' },
  { icon: FaLinkedin, url: 'https://www.linkedin.com/in/bhushan-venkatrajah/', label: 'LinkedIn', color: 'hover:border-[#0077b5]/30 hover:text-[#0077b5]' },
  { icon: FaResearchgate, url: 'https://www.researchgate.net/profile/Bhushan-Venkatrajah?ev=hdr_xprf', label: 'ResearchGate', color: 'hover:border-[#00ccbb]/30 hover:text-[#00ccbb]' },
  { icon: SiLeetcode, url: 'https://leetcode.com/u/BhushanVenkatrajah/', label: 'LeetCode', color: 'hover:border-[#ffa116]/30 hover:text-[#ffa116]' },
];

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-12 sm:py-16 px-6 sm:px-12 md:px-24 border-t border-slate-100">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col gap-3 mb-8 items-center lg:items-start text-center lg:text-left">
          <span className="text-xs font-semibold font-space tracking-[0.3em] text-slate-400 uppercase">
            Connection
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-space tracking-tight text-slate-900">
            GET IN TOUCH
          </h2>
          <div className="w-12 h-[1px] bg-slate-300 mt-1" />
        </div>

        {/* Grid split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: Details (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <h3 className="text-xl sm:text-2xl font-space font-medium text-slate-800 leading-snug">
              Interested in collaborating, hiring, or discussing systems architecture? Drop a message.
            </h3>

            {/* Contact details cards */}
            <div className="flex flex-col gap-4">
              {contactInfo.map((info) => {
                const InfoIcon = info.icon;
                return (
                  <div
                    key={info.label}
                    className="p-5 rounded-xl border border-slate-200 bg-white glass-panel flex items-center gap-4 shadow-sm shadow-slate-100"
                  >
                    <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-blue-600 shadow-sm">
                      <InfoIcon className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-space text-slate-400 uppercase tracking-wider">
                        {info.label}
                      </span>
                      <a
                        href={info.href}
                        className="text-sm font-semibold font-space text-slate-700 hover:text-slate-950 transition-colors mt-0.5"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Social profiles card */}
            <div className="p-6 rounded-2xl border border-slate-200 bg-white glass-panel flex flex-col gap-5 shadow-sm shadow-slate-100">
              <h4 className="text-xs font-bold font-space tracking-widest text-slate-400 uppercase">
                Direct Platforms
              </h4>
              <div className="flex items-center gap-3">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`p-3 rounded-xl border border-slate-200 bg-white text-slate-500 shadow-sm transition-all duration-200 flex items-center justify-center ${social.color}`}
                  >
                    <social.icon className="w-4.5 h-4.5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Form (7 cols) */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="p-6 sm:p-8 rounded-2xl border border-slate-200 bg-white glass-panel flex flex-col gap-6 shadow-sm shadow-slate-100">
              
              {/* Form Input fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs font-bold font-space tracking-wider uppercase text-slate-400">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Enter your name"
                    className="px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white text-slate-900 placeholder-slate-400 font-sans text-sm focus:outline-none transition-all duration-200"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs font-bold font-space tracking-wider uppercase text-slate-400">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="name@company.com"
                    className="px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white text-slate-900 placeholder-slate-400 font-sans text-sm focus:outline-none transition-all duration-200"
                  />
                </div>
              </div>

              {/* Message field */}
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs font-bold font-space tracking-wider uppercase text-slate-400">
                  Your Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Describe your project, timeline, or request..."
                  className="px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white text-slate-900 placeholder-slate-400 font-sans text-sm resize-none focus:outline-none transition-all duration-200"
                />
              </div>

              {/* Submit CTA button */}
              <button
                type="submit"
                disabled={isSubmitting || submitted}
                className="w-full sm:w-auto self-end px-7 py-3.5 rounded-full font-space text-xs font-semibold tracking-wider uppercase bg-blue-600 border border-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-100 transition-colors duration-200 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending...
                  </>
                ) : submitted ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-white" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
