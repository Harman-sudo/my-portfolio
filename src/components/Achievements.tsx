'use client'

import { motion } from 'framer-motion'
import { Trophy, Star, Shield } from 'lucide-react'

const ACHIEVEMENTS = [
  {
    icon: <Trophy size={24} />,
    title: 'Inter-College Website Design Competition',
    subtitle: '1st Place Winner',
    year: '2023',
    description:
      'Won the inter-college website design competition, demonstrating excellence in UI/UX design, frontend development, and full-stack implementation.',
    accent: 'blue',
    badge: '🏆 Winner',
  },
  {
    icon: <Star size={24} />,
    title: 'Full-Stack Training Excellence',
    subtitle: '95% Score — Top Performer',
    year: '2025',
    description:
      'Completed intensive full-stack training at RBH Solutions covering Angular, ASP.NET Core, PostgreSQL, and real-time systems with a 95% assessment score.',
    accent: 'blue',
    badge: '⭐ 95% Score',
  },
  {
    icon: <Shield size={24} />,
    title: 'Enterprise SCADA Deployment',
    subtitle: 'Production Contribution',
    year: '2025',
    description:
      'Contributed key modules to SCADA systems that were deployed in live enterprise production environments, processing real industrial operational data.',
    accent: 'indigo',
    badge: '🚀 Production',
  },
]

const colorMap: Record<string, { text: string; border: string; bg: string; icon: string; badgeBg: string }> = {
  blue:   { text: 'text-blue-600 dark:text-blue-400',   border: 'border-blue-500/25',   bg: 'bg-blue-500/5',   icon: 'bg-blue-500/12',   badgeBg: 'bg-blue-500/10 border-blue-500/30 text-blue-700 dark:text-blue-300' },
  indigo: { text: 'text-indigo-600 dark:text-indigo-400', border: 'border-indigo-500/25', bg: 'bg-indigo-500/5', icon: 'bg-indigo-500/12', badgeBg: 'bg-indigo-500/10 border-indigo-500/30 text-indigo-700 dark:text-indigo-300' },
}

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-24 px-4 bg-[var(--bg-main)]">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="section-label mb-3">06 — Wins</div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[var(--c-heading)] mb-3">Achievements</h2>
          <p className="text-[var(--c-text4)] max-w-lg mx-auto">
            Recognitions, milestones, and production contributions across academic and professional domains.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map((ach, i) => {
            const c = colorMap[ach.accent]
            return (
              <motion.div
                key={ach.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className={`relative rounded-xl border ${c.border} ${c.bg} p-6 card-hover flex flex-col`}
              >
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${c.icon} ${c.text} mb-4`}>
                  {ach.icon}
                </div>

                {/* Badge */}
                <span className={`text-xs px-2.5 py-1 rounded-full border font-mono mb-3 self-start ${c.badgeBg}`}>
                  {ach.badge}
                </span>

                <h3 className={`font-bold text-sm ${c.text} mb-1`}>{ach.title}</h3>
                <p className="text-[var(--c-text2)] text-xs font-medium mb-3">{ach.subtitle}</p>
                <p className="text-[var(--c-text4)] text-xs leading-relaxed flex-1">{ach.description}</p>

                <div className={`mt-4 pt-3 border-t border-[var(--c-border-faint)] text-xs font-mono ${c.text} opacity-60`}>
                  {ach.year}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          {[
            { value: '8.94', label: 'MCA CGPA',        color: 'text-blue-600 dark:text-blue-400' },
            { value: '8.2',  label: 'BCA CGPA',         color: 'text-blue-600 dark:text-blue-400' },
            { value: '95%',  label: 'Training Score',   color: 'text-blue-600 dark:text-blue-400' },
            { value: '#1',   label: 'Web Design Award', color: 'text-indigo-600 dark:text-indigo-400' },
          ].map(({ value, label, color }) => (
            <div
              key={label}
              className="text-center p-5 rounded-xl border border-[var(--c-border2)] bg-[var(--bg-card-stat)]"
            >
              <div className={`text-3xl font-extrabold ${color} mb-1`}>{value}</div>
              <div className="text-xs text-[var(--c-text4)] font-mono uppercase tracking-wider">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
