'use client'

import { motion } from 'framer-motion'
import { Code2, Globe, Database, BrainCircuit, Wrench, Activity } from 'lucide-react'

type SkillCategory = {
  title: string
  subtitle: string
  icon: React.ReactNode
  accent: string
  skills: { name: string; level?: number }[]
}

const CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming Languages',
    subtitle: 'Core coding proficiency',
    icon: <Code2 size={18} />,
    accent: 'cyan',
    skills: [
      { name: 'JavaScript', level: 88 },
      { name: 'Python',     level: 85 },
      { name: 'C++',        level: 72 },
      { name: 'C',          level: 70 },
      { name: 'Java',       level: 65 },
    ],
  },
  {
    title: 'Web & Backend',
    subtitle: 'Framework & API expertise',
    icon: <Globe size={18} />,
    accent: 'blue',
    skills: [
      { name: 'Angular (Material UI)', level: 90 },
      { name: 'ASP.NET Web API',        level: 85 },
      { name: 'SignalR',                 level: 88 },
      { name: 'JWT Auth',                level: 82 },
      { name: 'REST APIs',               level: 87 },
    ],
  },
  {
    title: 'Databases',
    subtitle: 'Storage & query design',
    icon: <Database size={18} />,
    accent: 'emerald',
    skills: [
      { name: 'PostgreSQL',              level: 85 },
      { name: 'Oracle DB',               level: 72 },
      { name: 'CouchDB (Map-Reduce)',     level: 78 },
    ],
  },
  {
    title: 'AI & Machine Learning',
    subtitle: 'Models, vision & NLP',
    icon: <BrainCircuit size={18} />,
    accent: 'purple',
    skills: [
      { name: 'TensorFlow',   level: 75 },
      { name: 'Scikit-learn', level: 78 },
      { name: 'OpenCV',       level: 80 },
      { name: 'MediaPipe',    level: 80 },
      { name: 'NLTK',         level: 68 },
      { name: 'CrewAI',       level: 72 },
    ],
  },
  {
    title: 'Tools & DevOps',
    subtitle: 'Development workflow',
    icon: <Wrench size={18} />,
    accent: 'amber',
    skills: [
      { name: 'Git / GitHub',   level: 88 },
      { name: 'Visual Studio',  level: 85 },
      { name: 'Wireshark',      level: 72 },
      { name: 'CrewAI Framework', level: 72 },
    ],
  },
  {
    title: 'Industrial & SCADA',
    subtitle: 'Domain-specific systems',
    icon: <Activity size={18} />,
    accent: 'rose',
    skills: [
      { name: 'SCADA/HMI Design',         level: 82 },
      { name: 'Real-time Dashboards',     level: 88 },
      { name: 'Protocol Analysis',        level: 72 },
      { name: 'Substation Automation',    level: 75 },
      { name: 'Industrial Data Pipelines',level: 78 },
    ],
  },
]

const accentMap: Record<string, { text: string; bar: string; border: string; bg: string; icon: string }> = {
  cyan:    { text: 'text-cyan-600 dark:text-cyan-400',    bar: 'bg-cyan-500',    border: 'border-cyan-500/20',    bg: 'bg-cyan-500/5',    icon: 'bg-cyan-500/15' },
  blue:    { text: 'text-blue-600 dark:text-blue-400',    bar: 'bg-blue-500',    border: 'border-blue-500/20',    bg: 'bg-blue-500/5',    icon: 'bg-blue-500/15' },
  emerald: { text: 'text-emerald-600 dark:text-emerald-400', bar: 'bg-emerald-500', border: 'border-emerald-500/20', bg: 'bg-emerald-500/5', icon: 'bg-emerald-500/15' },
  purple:  { text: 'text-purple-600 dark:text-purple-400',  bar: 'bg-purple-500',  border: 'border-purple-500/20',  bg: 'bg-purple-500/5',  icon: 'bg-purple-500/15' },
  amber:   { text: 'text-amber-600 dark:text-amber-400',   bar: 'bg-amber-500',   border: 'border-amber-500/20',   bg: 'bg-amber-500/5',   icon: 'bg-amber-500/15' },
  rose:    { text: 'text-rose-600 dark:text-rose-400',    bar: 'bg-rose-500',    border: 'border-rose-500/20',    bg: 'bg-rose-500/5',    icon: 'bg-rose-500/15' },
}

function SkillBar({ name, level, barClass }: { name: string; level?: number; barClass: string }) {
  if (!level) return (
    <div className="text-sm text-[var(--c-text2)] py-1 border-b border-[var(--c-border-faint)]">{name}</div>
  )
  return (
    <div>
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm text-[var(--c-text2)]">{name}</span>
        <span className="text-xs text-[var(--c-text4)] font-mono">{level}%</span>
      </div>
      <div className="h-1.5 bg-[var(--c-border2)] rounded-full overflow-hidden">
        <motion.div
          className={`h-full rounded-full ${barClass}`}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 px-4 bg-[var(--bg-main)]">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="section-label mb-3">02 — Arsenal</div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[var(--c-heading)] mb-3">Skills & Technologies</h2>
          <p className="text-[var(--c-text4)] max-w-xl mx-auto">
            Technologies I work with daily — from industrial real-time systems to AI and full-stack development.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
          {CATEGORIES.map((cat, ci) => {
            const a = accentMap[cat.accent]
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: ci * 0.08 }}
                className={`relative rounded-xl border ${a.border} ${a.bg} p-5 card-hover`}
              >
                {/* Card header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg ${a.icon} ${a.text}`}>
                    {cat.icon}
                  </div>
                  <div>
                    <div className={`text-sm font-semibold ${a.text}`}>{cat.title}</div>
                    <div className="text-xs text-[var(--c-text5)]">{cat.subtitle}</div>
                  </div>
                </div>

                {/* Skill bars */}
                <div className="space-y-3">
                  {cat.skills.map((s) => (
                    <SkillBar key={s.name} name={s.name} level={s.level} barClass={a.bar} />
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* All tech chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="section-label mb-4">Full Tech Stack</div>
          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            {[
              'JavaScript','Python','C','C++','Java',
              'Angular','ASP.NET Core','SignalR','JWT',
              'PostgreSQL','Oracle DB','CouchDB',
              'TensorFlow','Scikit-learn','OpenCV','MediaPipe','NLTK',
              'CrewAI','Git','GitHub','Wireshark','Visual Studio',
              'SCADA','HMI','REST API','Real-time Systems',
            ].map((t) => (
              <span key={t} className="tech-tag">{t}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
