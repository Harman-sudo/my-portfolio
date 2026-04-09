'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Zap, ArrowRight, Activity, Bot, MessageSquare, Eye } from 'lucide-react'

type Project = {
  id: string
  title: string
  subtitle: string
  type: 'Professional' | 'Personal' | 'Research'
  status: 'Production' | 'Completed' | 'Active'
  year: string
  icon: React.ReactNode
  accent: string
  description: string
  architecture: string
  highlights: string[]
  tech: string[]
  liveUrl?: string
  githubUrl?: string
}

const PROJECTS: Project[] = [
  {
    id: 'posture',
    title: 'Gym Posture Correction System',
    subtitle: 'Computer Vision AI Fitness Coach',
    type: 'Personal',
    status: 'Completed',
    year: '2024',
    icon: <Eye size={22} />,
    accent: 'indigo',
    description:
      'Real-time computer vision system for exercise posture analysis using MediaPipe pose estimation. Detects incorrect posture and gives corrective feedback based on body-angle thresholds collected from real gym sessions.',
    architecture: 'Webcam Feed ──▶ OpenCV Pipeline ──▶ MediaPipe Pose ──▶ Keypoint Extraction ──▶ Angle Analyzer ──▶ Feedback Engine',
    highlights: [
      'Pre-trained MediaPipe Pose model for 33-keypoint body landmark detection',
      'Body-angle thresholds calibrated using real-world gym session data',
      'Rule-based comparison engine for instant posture correctness evaluation',
      'Optimized OpenCV pipeline for smooth 30+ FPS real-time video processing',
      'Corrective feedback overlaid directly on the video stream',
    ],
    tech: ['Python', 'OpenCV', 'MediaPipe', 'Computer Vision'],
    liveUrl: 'https://exercise-monitoring-1.onrender.com/',
    githubUrl: 'https://github.com/Harman-sudo/exercise-monitoring',
  },
  {
    id: 'scada',
    title: 'SCADA/HMI Monitoring Platform',
    subtitle: 'Enterprise Real-Time Industrial System',
    type: 'Professional',
    status: 'Production',
    year: '2025',
    icon: <Activity size={22} />,
    accent: 'blue',
    description:
      'Full-featured SCADA platform for real-time industrial operations monitoring, event management, and automated substation reporting. Deployed in enterprise environments with live field device integration.',
    architecture: 'Angular Client ──▶ SignalR Hub ──▶ ASP.NET Core API ──▶ PostgreSQL + CouchDB ──▶ Industrial Field Devices',
    highlights: [
      'Real-time dashboards with live event streaming via SignalR WebSocket hubs',
      'PostgreSQL schema with optimized triggers and stored procedures for high-throughput data',
      'CouchDB Map-Reduce views for fast operational data retrieval and reporting',
      'Wireshark-assisted protocol analysis for industrial communication debugging',
      'Automated substation reporting pipeline — zero manual intervention',
      'Angular Material UI screens with responsive industrial-grade UX',
    ],
    tech: ['Angular', 'ASP.NET Core', 'SignalR', 'PostgreSQL', 'CouchDB', 'JWT', 'Wireshark'],
  },
  {
    id: 'agents',
    title: 'Multi-Agent Task Automation System',
    subtitle: 'Autonomous AI Workflow Engine',
    type: 'Personal',
    status: 'Completed',
    year: '2024',
    icon: <Bot size={22} />,
    accent: 'indigo',
    description:
      'Autonomous multi-agent system built with CrewAI framework for automating complex multi-step workflows. Agents coordinate task assignment, sequence execution, and data retrieval through REST APIs.',
    architecture: 'CrewAI Orchestrator ──▶ Specialized Agent Pool ──▶ Task Sequencer ──▶ REST API Layer ──▶ Data Sources',
    highlights: [
      'Agent coordination logic for message handling and dynamic task sequencing',
      'Modular agent design — each agent has a defined role and tool set',
      'REST API integration for real-time data retrieval within pipelines',
      'Multi-agent communication protocols for inter-agent collaboration',
      'Supports parallel task execution across multiple autonomous agents',
    ],
    tech: ['Python', 'CrewAI', 'REST APIs', 'Agentic AI'],
  },
  {
    id: 'chat',
    title: 'Real-Time Chat Platform',
    subtitle: 'Secure WebSocket Messaging App',
    type: 'Personal',
    status: 'Completed',
    year: '2024',
    icon: <MessageSquare size={22} />,
    accent: 'blue',
    description:
      'Full-stack real-time messaging platform with JWT-based authentication, persistent message storage, and live delivery via SignalR. Clean Angular frontend with a robust ASP.NET Core backend.',
    architecture: 'Angular SPA ──▶ SignalR Hub ──▶ ASP.NET Core API ──▶ JWT Auth Middleware ──▶ PostgreSQL',
    highlights: [
      'SignalR WebSocket hub for sub-100ms message delivery',
      'JWT-based login flow with token refresh and route guards',
      'PostgreSQL schema optimized for paginated message history queries',
      'Angular reactive UI with real-time message rendering',
      'Secure message authorization — users only access their own conversations',
    ],
    tech: ['Angular', 'ASP.NET Core', 'SignalR', 'PostgreSQL', 'JWT'],
  },
]

const accentMap: Record<string, {
  border: string; bg: string; text: string; badge: string;
  typeBadge: string; archBg: string; dot: string;
}> = {
  blue:   { border: 'border-blue-500/25',   bg: 'bg-blue-500/5',   text: 'text-blue-600 dark:text-blue-400',   badge: 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border-emerald-500/30', typeBadge: 'bg-blue-500/15 text-blue-700 dark:text-blue-300 border-blue-500/30',     archBg: 'bg-blue-500/5   border-blue-500/15',   dot: 'bg-blue-600' },
  indigo: { border: 'border-indigo-500/25', bg: 'bg-indigo-500/5', text: 'text-indigo-600 dark:text-indigo-400', badge: 'bg-slate-500/15 text-slate-700 dark:text-slate-300 border-slate-500/30',      typeBadge: 'bg-indigo-500/15 text-indigo-700 dark:text-indigo-300 border-indigo-500/30', archBg: 'bg-indigo-500/5 border-indigo-500/15', dot: 'bg-indigo-500' },
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 px-4 bg-[var(--bg-main)]">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="section-label mb-3">04 — Work</div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[var(--c-heading)] mb-3">Projects</h2>
          <p className="text-[var(--c-text4)] max-w-xl mx-auto">
            From production SCADA systems to autonomous AI agents and computer vision tools.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {PROJECTS.map((p, i) => {
            const a = accentMap[p.accent]
            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className={`relative rounded-xl border ${a.border} ${a.bg} p-6 card-hover flex flex-col`}
              >
                {/* Card top */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-xl border ${a.border} ${a.text}`}>
                      {p.icon}
                    </div>
                    <div>
                      <h3 className={`font-bold text-base ${a.text}`}>{p.title}</h3>
                      <p className="text-xs text-[var(--c-text4)]">{p.subtitle}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1.5 shrink-0">
                    <span className={`text-xs px-2 py-0.5 rounded-full border font-mono ${a.badge}`}>
                      {p.status}
                    </span>
                    <span className={`text-xs px-2 py-0.5 rounded border font-mono ${a.typeBadge}`}>
                      {p.type}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-[var(--c-text3)] text-sm leading-relaxed mb-4">{p.description}</p>

                {/* Architecture diagram */}
                <div className={`rounded-lg border p-3 mb-4 font-mono text-xs text-[var(--c-text3)] leading-relaxed ${a.archBg}`}>
                  <div className={`text-[10px] uppercase tracking-widest mb-1.5 ${a.text} opacity-70`}>Architecture</div>
                  {p.architecture}
                </div>

                {/* Highlights */}
                <ul className="space-y-1.5 mb-5 flex-1">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm text-[var(--c-text3)]">
                      <span className={`mt-1.5 w-1 h-1 rounded-full ${a.dot} shrink-0`} />
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Tech tags + year */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-[var(--c-border-faint)]">
                  <div className="flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span key={t} className="tech-tag">{t}</span>
                    ))}
                  </div>
                  <span className={`text-xs font-mono ${a.text} opacity-70`}>{p.year}</span>
                </div>

                {/* Links */}
                {(p.liveUrl || p.githubUrl) && (
                  <div className="flex items-center gap-3 pt-3 mt-1">
                    {p.liveUrl && (
                      <a
                        href={p.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-1.5 text-xs ${a.text} hover:underline`}
                      >
                        <ExternalLink size={12} /> Live Demo
                      </a>
                    )}
                    {p.githubUrl && (
                      <a
                        href={p.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-1.5 text-xs ${a.text} hover:underline`}
                      >
                        <Github size={12} /> GitHub
                      </a>
                    )}
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
