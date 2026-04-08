'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { MapPin, GraduationCap, Briefcase, FlaskConical, Cpu, Network } from 'lucide-react'

const HIGHLIGHTS = [
  { icon: <Briefcase size={15} />,    color: 'cyan',    text: 'Software Engineer @ RBH Solutions' },
  { icon: <GraduationCap size={15} />, color: 'purple', text: 'PhD CS Researcher — Punjabi University' },
  { icon: <Cpu size={15} />,           color: 'blue',   text: 'SCADA/HMI Systems Developer' },
  { icon: <FlaskConical size={15} />,  color: 'emerald',text: 'AI & Machine Learning Practitioner' },
  { icon: <Network size={15} />,       color: 'amber',  text: 'Industrial Automation & Protocol Analysis' },
  { icon: <MapPin size={15} />,        color: 'rose',   text: 'Patiala, Punjab, India' },
]

const colorMap: Record<string, string> = {
  cyan:    'text-cyan-500    border-cyan-500/20    bg-cyan-500/5',
  purple:  'text-purple-500  border-purple-500/20  bg-purple-500/5',
  blue:    'text-blue-500    border-blue-500/20    bg-blue-500/5',
  emerald: 'text-emerald-500 border-emerald-500/20 bg-emerald-500/5',
  amber:   'text-amber-500   border-amber-500/20   bg-amber-500/5',
  rose:    'text-rose-500    border-rose-500/20    bg-rose-500/5',
}

export default function About() {
  return (
    <section id="about" className="relative py-24 px-4 bg-[var(--bg-alt)] subtle-grid-bg">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="section-label mb-3">01 — Profile</div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[var(--c-heading)]">About Me</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* ── Left: Avatar + quick facts ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center lg:items-start gap-8"
          >
            {/* Profile photo */}
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-cyan-500/40 via-purple-500/20 to-cyan-500/10 blur-sm" />
              <div className="relative w-56 h-72 rounded-2xl overflow-hidden border-2 border-cyan-500/40 glow-cyan">
                <Image
                  src="/myimg.jpeg"
                  alt="Harmanpreet Singh"
                  fill
                  className="object-cover object-center"
                  priority
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-alt)]/60 via-transparent to-transparent" />
                {/* Name overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 px-3 py-2.5 bg-[var(--bg-main-60)] backdrop-blur-sm">
                  <div className="text-xs font-bold text-[var(--c-heading)] leading-none">Harmanpreet Singh</div>
                  <div className="text-[10px] text-cyan-500 font-mono mt-0.5">AI & Software Engineer</div>
                </div>
                {/* corner brackets */}
                <div className="corner-tl" />
                <div className="corner-tr" />
                <div className="corner-bl" />
                <div className="corner-br" />
              </div>
              {/* Status badge */}
              <div className="absolute -bottom-3 -right-3 flex items-center gap-1.5 text-xs text-emerald-500 border border-emerald-500/30 bg-[var(--bg-main)] px-2.5 py-1 rounded-full font-mono shadow-lg">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Available
              </div>
            </div>

            {/* Quick facts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
              {HIGHLIGHTS.map(({ icon, color, text }) => (
                <div
                  key={text}
                  className={`flex items-center gap-2.5 text-xs px-3 py-2.5 rounded-lg border font-medium ${colorMap[color]}`}
                >
                  {icon}
                  <span className="leading-snug">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Right: Bio text ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-5 text-[var(--c-text3)] leading-relaxed"
          >
            <p className="text-[var(--c-text1)] text-lg font-medium leading-relaxed">
              I&apos;m a Software Engineer with a deep focus on{' '}
              <span className="text-cyan-500">SCADA/HMI systems</span>,{' '}
              <span className="text-purple-500">AI agent development</span>, and{' '}
              <span className="text-blue-500">real-time industrial platforms</span>.
            </p>

            <p>
              At <strong className="text-[var(--c-text1)]">RBH Solutions</strong>, I develop enterprise-grade SCADA software
              using Angular, ASP.NET Core, and SignalR — building live dashboards, event monitoring systems, and
              automated substation reporting workflows that run in production environments.
            </p>

            <p>
              My AI journey started with hands-on internship work in agentic systems at JJPMETA Systems, where I built
              Python-based autonomous agents using the CrewAI framework. I also have practical experience with computer
              vision (OpenCV, MediaPipe) and classical ML (Scikit-learn, TensorFlow, NLTK).
            </p>

            <p>
              I&apos;m currently pursuing a{' '}
              <span className="text-purple-500 font-medium">PhD in Computer Science</span> at Punjabi University,
              Patiala, where my research sits at the intersection of Machine Learning and intelligent systems.
              I hold an MCA from <span className="text-cyan-500 font-medium">Thapar Institute of Engineering & Technology</span>{' '}
              with a CGPA of <span className="text-emerald-500 font-bold">8.94/10</span>.
            </p>

            <p>
              I&apos;m a <span className="text-amber-500 font-medium">Winner of the Inter-College Website Design Competition 2023</span>{' '}
              and I completed my full-stack training program with a <span className="text-emerald-500 font-bold">95% score</span>.
            </p>

            {/* Core competency tags */}
            <div className="pt-2 flex flex-wrap gap-2">
              {[
                'Real-time Systems', 'SCADA/HMI', 'Agentic AI', 'Computer Vision',
                'Industrial Automation', 'Full-Stack Development', 'ML Research',
                'Database Optimization', 'Protocol Analysis',
              ].map((tag) => (
                <span key={tag} className="tech-tag">{tag}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
