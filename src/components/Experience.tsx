'use client'

import { motion } from 'framer-motion'
import { Briefcase, MapPin, Calendar, ExternalLink } from 'lucide-react'

const EXPERIENCES = [
  {
    role: 'Software Engineer',
    company: 'RBH Solutions Pvt. Limited',
    location: 'Patiala, Punjab',
    period: 'April 2025 – Present',
    type: 'Full-Time',
    status: 'current',
    accent: 'cyan',
    summary: 'Building enterprise SCADA/HMI systems for real-time industrial operations monitoring and automation.',
    bullets: [
      'Developing SCADA/HMI systems using Angular, ASP.NET Core, and SignalR for real-time operations monitoring',
      'Creating dashboards and event views with live data streaming via SignalR hubs',
      'Designing efficient PostgreSQL queries, triggers, and data models for system performance',
      'Building CouchDB Map-Reduce views for operational data retrieval and reporting',
      'Using Wireshark and protocol analyzers to debug real-time industrial communication',
      'Automating substation reporting workflows using backend data extraction and processing',
      'Contributing to UI/UX screens, backend services, and industrial field device integration',
    ],
    tags: ['Angular', 'ASP.NET Core', 'SignalR', 'PostgreSQL', 'CouchDB', 'Wireshark'],
  },
  {
    role: 'Associate Trainee',
    company: 'RBH Solutions Pvt. Limited',
    location: 'Patiala, Punjab',
    period: 'January 2025 – March 2025',
    type: 'Training',
    status: 'completed',
    accent: 'blue',
    summary: 'Intensive full-stack training on SCADA development stack with hands-on module contributions.',
    bullets: [
      'Completed full-stack training focused on Angular, ASP.NET Core, PostgreSQL, and real-time systems',
      'Assisted in developing small modules for SCADA dashboards and live data visualization',
      'Participated in team code reviews and agile sprint workflows',
    ],
    tags: ['Angular', 'ASP.NET Core', 'PostgreSQL', 'Agile'],
  },
  {
    role: 'AI Development Intern',
    company: 'JJPMETA Systems',
    location: 'Bathinda, Punjab',
    period: 'June 2024 – July 2024',
    type: 'Internship',
    status: 'completed',
    accent: 'purple',
    summary: 'Hands-on exploration of agentic AI, autonomous Python agents, and multi-agent coordination.',
    bullets: [
      'Explored agentic AI fundamentals and developed Python-based autonomous agents',
      'Created lightweight task-oriented agents for automation of routine workflows',
      'Integrated REST APIs into agent pipelines for data processing',
      'Explored multi-agent coordination patterns and task assignment strategies',
    ],
    tags: ['Python', 'CrewAI', 'REST APIs', 'Agentic AI'],
  },
]

const accentMap: Record<string, { dot: string; border: string; bg: string; text: string; badge: string }> = {
  cyan:   { dot: 'bg-cyan-500',    border: 'border-cyan-500/30',   bg: 'bg-cyan-500/5',   text: 'text-cyan-600 dark:text-cyan-400',   badge: 'bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border-cyan-500/30' },
  blue:   { dot: 'bg-blue-500',    border: 'border-blue-500/30',   bg: 'bg-blue-500/5',   text: 'text-blue-600 dark:text-blue-400',   badge: 'bg-blue-500/10  text-blue-700 dark:text-blue-300  border-blue-500/30' },
  purple: { dot: 'bg-purple-500',  border: 'border-purple-500/30', bg: 'bg-purple-500/5', text: 'text-purple-600 dark:text-purple-400', badge: 'bg-purple-500/10 text-purple-700 dark:text-purple-300 border-purple-500/30' },
}

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 px-4 bg-[var(--bg-alt)] subtle-grid-bg">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="section-label mb-3">03 — Career</div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[var(--c-heading)] mb-3">Experience</h2>
          <p className="text-[var(--c-text4)] max-w-xl mx-auto">
            Professional journey from AI intern to SCADA systems engineer.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative pl-8 timeline-line space-y-8">
          {EXPERIENCES.map((exp, i) => {
            const a = accentMap[exp.accent]
            return (
              <motion.div
                key={exp.role + exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className={`absolute -left-[37px] top-5 w-3 h-3 rounded-full ${a.dot} ring-2 ring-[var(--bg-alt)]`} style={{ boxShadow: `0 0 10px currentColor` }} />

                {/* Card */}
                <div className={`rounded-xl border ${a.border} ${a.bg} p-6 card-hover`}>
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">

                    {/* Role info */}
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className={`text-lg font-bold ${a.text}`}>{exp.role}</h3>
                        {exp.status === 'current' && (
                          <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30 font-mono">
                            Current
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-1.5 text-[var(--c-text2)] font-medium text-sm mb-1">
                        <Briefcase size={13} />
                        {exp.company}
                      </div>
                      <div className="flex flex-wrap gap-3 text-xs text-[var(--c-text4)]">
                        <span className="flex items-center gap-1"><MapPin size={11} />{exp.location}</span>
                        <span className="flex items-center gap-1"><Calendar size={11} />{exp.period}</span>
                      </div>
                    </div>

                    {/* Type badge */}
                    <span className={`text-xs px-3 py-1 rounded-md border font-mono self-start ${a.badge}`}>
                      {exp.type}
                    </span>
                  </div>

                  <p className="text-[var(--c-text3)] text-sm mb-4 italic leading-relaxed">{exp.summary}</p>

                  <ul className="space-y-1.5 mb-4">
                    {exp.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-[var(--c-text3)]">
                        <span className={`mt-1.5 w-1 h-1 rounded-full ${a.dot} shrink-0`} />
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="tech-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
