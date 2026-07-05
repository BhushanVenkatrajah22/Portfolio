'use client';

import { motion } from 'framer-motion';
import { Trophy, Star, ShieldCheck, Milestone } from 'lucide-react';

const achievements = [
  {
    title: 'First Prize',
    competition: 'National Level Paper Presentation',
    org: 'PSG Institute of Technology',
    icon: Trophy,
    description: 'Awarded for presenting pioneering research in automated control systems and bio-sustainable innovations, evaluated by industry researchers.'
  },
  {
    title: 'Top 10 Global',
    competition: 'AI Agent Hackathon',
    org: 'Swafinix Technologies',
    icon: Star,
    description: 'Ranked in the top 10 globally among hundreds of teams, designing autonomous multi-agent planning frameworks running edge API scripts.'
  },
  {
    title: 'First Prize',
    competition: 'SNS BootCamp Challenge',
    org: 'SNS College of Engineering',
    icon: ShieldCheck,
    description: 'Secured the first position for conceptualizing and developing an IoT-integrated mobile prototype for elderly health management.'
  },
  {
    title: 'Top 10 Finalist',
    competition: 'MobilityX 2.0',
    org: 'Future Transport Initiative',
    icon: Milestone,
    description: 'Shortlisted among key innovators for building battery telemetry and routing optimization blueprints for next-generation electric vehicles.'
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-12 sm:py-16 px-6 sm:px-12 md:px-24 border-t border-slate-100">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col gap-3 mb-8 items-center lg:items-start text-center lg:text-left">
          <span className="text-xs font-semibold font-space tracking-[0.3em] text-slate-400 uppercase">
            Milestones
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-space tracking-tight text-slate-900">
            HONORS & AWARDS
          </h2>
          <div className="w-12 h-[1px] bg-slate-300 mt-1" />
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((ach, idx) => {
            const AchIcon = ach.icon;
            return (
              <motion.div
                key={idx}
                className="p-6 rounded-2xl border border-slate-200 bg-white glass-panel flex items-start gap-5 shadow-sm shadow-slate-100"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
              >
                {/* Trophy node */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-blue-600 shadow-sm">
                  <AchIcon className="w-5 h-5" />
                </div>

                {/* Details */}
                <div className="flex flex-col gap-2">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                    <span className="text-base sm:text-lg font-bold font-space text-slate-900">
                      {ach.title}
                    </span>
                    <span className="text-[10px] text-slate-400 font-space tracking-wider uppercase">
                      • {ach.org}
                    </span>
                  </div>
                  
                  <span className="text-xs font-semibold font-space tracking-wider uppercase text-indigo-600">
                    {ach.competition}
                  </span>

                  <p className="text-slate-600 font-sans text-xs sm:text-sm leading-relaxed mt-1">
                    {ach.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
