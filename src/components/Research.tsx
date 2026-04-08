'use client'

import { motion } from 'framer-motion'
import { FlaskConical, BookOpen, BrainCircuit, Bot, Network, Lightbulb, GraduationCap } from 'lucide-react'

const RESEARCH_AREAS = [
  {
    icon: <BrainCircuit size={20} />,
    title: 'Machine Learning',
    desc: 'Supervised and unsupervised learning algorithms, model optimization, and evaluation strategies for real-world systems.',
    accent: 'cyan',
  },
  {
    icon: <Bot size={20} />,
    title: 'Agentic AI Systems',
    desc: 'Design and coordination of autonomous multi-agent architectures for complex task automation and decision-making.',
    accent: 'purple',
  },
  {
    icon: <Network size={20} />,
    title: 'Intelligent Industrial Systems',
    desc: 'Applying AI/ML techniques to industrial monitoring, predictive analytics, and SCADA system intelligence.',
    accent: 'blue',
  },
  {
    icon: <Lightbulb size={20} />,
    title: 'Computer Vision',
    desc: 'Human pose estimation, real-time video analysis, and vision-based feedback systems using OpenCV and MediaPipe.',
    accent: 'emerald',
  },
]

const colorMap: Record<string, { text: string; border: string; bg: string; icon: string }> = {
  cyan:    { text: 'text-cyan-600 dark:text-cyan-400',    border: 'border-cyan-500/20',    bg: 'bg-cyan-500/5',    icon: 'bg-cyan-500/15' },
  purple:  { text: 'text-purple-600 dark:text-purple-400',  border: 'border-purple-500/20',  bg: 'bg-purple-500/5',  icon: 'bg-purple-500/15' },
  blue:    { text: 'text-blue-600 dark:text-blue-400',    border: 'border-blue-500/20',    bg: 'bg-blue-500/5',    icon: 'bg-blue-500/15' },
  emerald: { text: 'text-emerald-600 dark:text-emerald-400', border: 'border-emerald-500/20', bg: 'bg-emerald-500/5', icon: 'bg-emerald-500/15' },
}

export default function Research() {
  return (
    <section id="research" className="relative py-24 px-4 bg-[var(--bg-alt)] subtle-grid-bg">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="section-label mb-3">05 — Academia</div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[var(--c-heading)] mb-3">Research & Education</h2>
          <p className="text-[var(--c-text4)] max-w-xl mx-auto">
            Pursuing a PhD in Computer Science while applying cutting-edge ML research to real-world systems.
          </p>
        </motion.div>

        {/* PhD Feature Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl border border-purple-500/25 bg-gradient-to-br from-purple-500/5 via-[var(--bg-surface)] to-cyan-500/5 p-8 mb-10 overflow-hidden"
        >
          {/* Background glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-600/8 rounded-full blur-2xl" />

          {/* Corner brackets */}
          <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-purple-500/40" />
          <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-purple-500/40" />
          <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-cyan-500/30" />
          <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-cyan-500/30" />

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="p-4 rounded-2xl bg-purple-500/15 border border-purple-500/25 text-purple-400 shrink-0">
              <FlaskConical size={32} />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h3 className="text-2xl font-bold text-[var(--c-heading)]">PhD in Computer Science</h3>
                <span className="text-xs px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30 font-mono animate-pulse-dot">
                  ● In Progress
                </span>
              </div>
              <div className="flex items-center gap-2 text-purple-600 dark:text-purple-300 font-medium mb-1">
                <GraduationCap size={15} />
                Punjabi University, Patiala
              </div>
              <p className="text-[var(--c-text4)] text-sm mb-3">2025 – Present &nbsp;·&nbsp; Part-Time</p>
              <p className="text-[var(--c-text3)] leading-relaxed">
                Research focused on the intersection of <span className="text-cyan-400 font-medium">Machine Learning</span>,{' '}
                <span className="text-purple-400 font-medium">Agentic AI Systems</span>, and{' '}
                <span className="text-blue-400 font-medium">Intelligent Industrial Applications</span>.
                Exploring how autonomous AI agents and advanced ML models can be applied to real-world
                industrial monitoring, decision support, and automation problems.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Research Areas Grid */}
        <div className="grid sm:grid-cols-2 gap-5 mb-12">
          {RESEARCH_AREAS.map((area, i) => {
            const c = colorMap[area.accent]
            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`flex items-start gap-4 p-5 rounded-xl border ${c.border} ${c.bg} card-hover`}
              >
                <div className={`p-2.5 rounded-lg ${c.icon} ${c.text} shrink-0 mt-0.5`}>
                  {area.icon}
                </div>
                <div>
                  <h4 className={`font-semibold mb-1.5 ${c.text}`}>{area.title}</h4>
                  <p className="text-[var(--c-text3)] text-sm leading-relaxed">{area.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Education Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="section-label mb-6">Academic Background</div>
          <div className="space-y-4">
            {[
              {
                degree: 'PhD in Computer Science (Part-Time)',
                school: 'Punjabi University, Patiala',
                period: '2025 – Present',
                gpa: null,
                color: 'purple',
                icon: '🔬',
              },
              {
                degree: 'Master of Computer Applications (MCA)',
                school: 'Thapar Institute of Engineering & Technology, Patiala',
                period: '2023 – 2025',
                gpa: '8.94 / 10',
                color: 'cyan',
                icon: '🎓',
              },
              {
                degree: 'Bachelor of Computer Applications (BCA)',
                school: 'Maharaja Ranjit Singh Punjab Technical University, Bathinda',
                period: '2020 – 2023',
                gpa: '8.2 / 10',
                color: 'blue',
                icon: '📚',
              },
            ].map((edu) => {
              const c = colorMap[edu.color]
              return (
                <div key={edu.degree} className={`flex items-center gap-4 p-4 rounded-xl border ${c.border} ${c.bg}`}>
                  <span className="text-2xl">{edu.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className={`font-semibold text-sm ${c.text}`}>{edu.degree}</div>
                    <div className="text-[var(--c-text3)] text-xs mt-0.5">{edu.school}</div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="text-xs text-[var(--c-text4)] font-mono">{edu.period}</div>
                    {edu.gpa && (
                      <div className="text-xs text-emerald-400 font-bold mt-0.5">CGPA {edu.gpa}</div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
