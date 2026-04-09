'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronDown, Activity, Cpu, GitBranch, Zap } from 'lucide-react'

const ROLES = [
  'AI & Software Engineer',
  'SCADA Systems Developer',
  'ML Researcher',
  'Full-Stack Engineer',
  'Industrial Systems Architect',
]

const STATS = [
  { value: '1+',  label: 'Year Professional XP' },
  { value: '4',   label: 'Key Projects' },
  { value: '15+', label: 'Technologies' },
  { value: 'PhD', label: 'CS Researcher' },
]

export default function Hero() {
  const [roleIdx, setRoleIdx]   = useState(0)
  const [text, setText]         = useState('')
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    const target = ROLES[roleIdx]
    if (isTyping) {
      if (text.length < target.length) {
        const t = setTimeout(() => setText(target.slice(0, text.length + 1)), 65)
        return () => clearTimeout(t)
      } else {
        const t = setTimeout(() => setIsTyping(false), 2200)
        return () => clearTimeout(t)
      }
    } else {
      if (text.length > 0) {
        const t = setTimeout(() => setText(text.slice(0, -1)), 28)
        return () => clearTimeout(t)
      } else {
        setRoleIdx((i) => (i + 1) % ROLES.length)
        setIsTyping(true)
      }
    }
  }, [text, isTyping, roleIdx])

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-[var(--bg-main)]">

      {/* ── Circuit grid ── */}
      <div className="absolute inset-0 hero-grid-bg" />

      {/* ── Radial gradient overlays ── */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_-10%,rgba(37,99,235,0.12),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_80%_80%,rgba(99,102,241,0.08),transparent)]" />

      {/* ── Ambient orbs ── */}
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-indigo-600/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />

      {/* ── Corner decorations ── */}
      <div className="absolute top-20 left-6 w-14 h-14 border-l-2 border-t-2 border-blue-600/20" />
      <div className="absolute top-20 right-6 w-14 h-14 border-r-2 border-t-2 border-blue-600/20" />
      <div className="absolute bottom-20 left-6 w-14 h-14 border-l-2 border-b-2 border-indigo-500/15" />
      <div className="absolute bottom-20 right-6 w-14 h-14 border-r-2 border-b-2 border-indigo-500/15" />

      {/* ── Main two-column layout ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">

          {/* ── LEFT: Text content ── */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">

            {/* Status pill */}
            <div className="inline-flex items-center gap-2.5 text-xs text-blue-700 dark:text-blue-300 border border-blue-500/30 bg-blue-500/5 px-4 py-1.5 rounded-full mb-7 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Open to AI & Industrial Engineering Roles
              <Zap size={11} className="text-blue-500" />
            </div>

            {/* Name */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 leading-[1.05]">
              <span className="text-[var(--c-heading)]">Harman</span><span className="gradient-text">preet</span>
              <br />
              <span className="text-[var(--c-text2)] text-4xl sm:text-5xl lg:text-6xl font-bold">Singh</span>
            </h1>

            {/* Typing role */}
            <div className="h-9 flex items-center justify-center lg:justify-start mb-5">
              <span className="text-lg sm:text-xl text-blue-600 dark:text-blue-400 font-mono tracking-wide">
                {text}
                <span className="cursor-blink ml-0.5 inline-block w-0.5 h-5 bg-blue-600 dark:bg-blue-400 align-middle" />
              </span>
            </div>

            {/* Bio */}
            <p className="text-[var(--c-text3)] text-base leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              Building enterprise SCADA/HMI systems, real-time industrial platforms, and autonomous AI agents.
              Currently pursuing a{' '}
              <span className="text-indigo-500 dark:text-indigo-400 font-medium">PhD in Computer Science</span> with a focus on Machine Learning.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-8 mb-9">
              {STATS.map(({ value, label }) => (
                <div key={label} className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-bold gradient-text leading-none">{value}</div>
                  <div className="text-[10px] text-[var(--c-text4)] mt-1 font-mono uppercase tracking-wider">{label}</div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a
                href="#projects"
                className="relative px-7 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-all duration-200 hover:shadow-[0_0_25px_rgba(37,99,235,0.45)] overflow-hidden group text-sm"
              >
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-blue-500 translate-y-full group-hover:translate-y-0 transition-transform duration-200" />
              </a>
              <a
                href="#contact"
                className="px-7 py-3 border border-blue-600/50 text-blue-600 dark:text-blue-400 hover:bg-blue-600/10 hover:border-blue-600 rounded-lg transition-all duration-200 text-sm"
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* ── RIGHT: Profile photo — hidden on mobile, shown on lg+ ── */}
          <div className="relative shrink-0 hidden lg:flex items-center justify-center lg:justify-end">

            {/* Outer glow pulse ring */}
            <div className="absolute w-72 h-80 rounded-2xl bg-gradient-to-br from-blue-600/15 via-indigo-500/8 to-blue-400/5 blur-2xl animate-float" />

            {/* Status badges floating around photo */}
            <div className="absolute -top-4 -left-6 hidden lg:flex items-center gap-1.5 text-[10px] text-emerald-700 dark:text-emerald-400 border border-emerald-500/40 bg-[var(--bg-surface)] shadow-sm px-2.5 py-1.5 rounded font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              SYS_ONLINE
            </div>
            <div className="absolute -top-4 -right-6 hidden lg:flex items-center gap-1.5 text-[10px] text-indigo-700 dark:text-indigo-400 border border-indigo-500/40 bg-[var(--bg-surface)] shadow-sm px-2.5 py-1.5 rounded font-mono">
              <Cpu size={9} />
              ML_RESEARCH
            </div>
            <div className="absolute -bottom-4 -left-6 hidden lg:flex items-center gap-1.5 text-[10px] text-blue-700 dark:text-blue-400 border border-blue-500/40 bg-[var(--bg-surface)] shadow-sm px-2.5 py-1.5 rounded font-mono">
              <Activity size={9} />
              SCADA_DEV
            </div>
            <div className="absolute -bottom-4 -right-6 hidden lg:flex items-center gap-1.5 text-[10px] text-blue-700 dark:text-blue-400 border border-blue-500/40 bg-[var(--bg-surface)] shadow-sm px-2.5 py-1.5 rounded font-mono">
              <GitBranch size={9} />
              PhD_ACTIVE
            </div>

            {/* Photo frame */}
            <div className="relative w-64 h-[340px] sm:w-72 sm:h-[380px]">
              {/* Gradient border */}
              <div className="absolute -inset-[2px] rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-500/60 to-blue-400/30" />
              <div className="relative w-64 h-[340px] sm:w-72 sm:h-[380px] rounded-2xl overflow-hidden bg-[var(--bg-surface)]">
                <Image
                  src="/myimg.jpeg"
                  alt="Harmanpreet Singh"
                  fill
                  sizes="(max-width: 640px) 256px, 288px"
                  className="object-cover object-center"
                  priority
                />
                {/* Bottom gradient overlay with name */}
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[var(--bg-main)] via-[var(--bg-main-70)] to-transparent" />
                <div className="absolute bottom-0 inset-x-0 px-4 py-3">
                  <div className="text-sm font-bold text-[var(--c-heading)]">Harmanpreet Singh</div>
                  <div className="text-[11px] text-blue-600 dark:text-blue-400 font-mono">AI & Software Engineer</div>
                </div>

                {/* Corner brackets inside photo */}
                <div className="absolute top-2 left-2 w-5 h-5 border-l-2 border-t-2 border-blue-500/50" />
                <div className="absolute top-2 right-2 w-5 h-5 border-r-2 border-t-2 border-blue-500/50" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Scroll cue ── */}
      <a href="#about" className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-[var(--c-text4)] hover:text-[var(--c-text3)] transition-colors animate-bounce">
        <span className="text-[10px] font-mono tracking-widest">SCROLL</span>
        <ChevronDown size={14} />
      </a>
    </section>
  )
}
