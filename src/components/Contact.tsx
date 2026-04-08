'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Linkedin, Send, CheckCircle, Terminal, MapPin } from 'lucide-react'

export default function Contact() {
  const [form, setForm]     = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent]     = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Compose mailto link with form data
    const mailtoLink = `mailto:preetharman2012003@gmail.com?subject=${encodeURIComponent(
      form.subject || `Portfolio Contact from ${form.name}`
    )}&body=${encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )}`
    window.location.href = mailtoLink
    setTimeout(() => {
      setLoading(false)
      setSent(true)
      setTimeout(() => setSent(false), 4000)
    }, 800)
  }

  const CONTACT_ITEMS = [
    {
      icon: <Mail size={18} />,
      label: 'Email',
      value: 'preetharman2012003@gmail.com',
      href: 'mailto:preetharman2012003@gmail.com',
      accent: 'cyan',
    },
    {
      icon: <Phone size={18} />,
      label: 'Phone',
      value: '+91-7626970357',
      href: 'tel:+917626970357',
      accent: 'emerald',
    },
    {
      icon: <Linkedin size={18} />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/harman-saini-2b7b98256',
      href: 'https://www.linkedin.com/in/harman-saini-2b7b98256',
      accent: 'blue',
    },
    {
      icon: <MapPin size={18} />,
      label: 'Location',
      value: 'Patiala, Punjab, India',
      href: null,
      accent: 'purple',
    },
  ]

  const accentMap: Record<string, string> = {
    cyan:    'text-cyan-600 dark:text-cyan-400    border-cyan-500/30    bg-cyan-500/5',
    emerald: 'text-emerald-600 dark:text-emerald-400 border-emerald-500/30 bg-emerald-500/5',
    blue:    'text-blue-600 dark:text-blue-400    border-blue-500/30    bg-blue-500/5',
    purple:  'text-purple-600 dark:text-purple-400  border-purple-500/30  bg-purple-500/5',
  }

  return (
    <section id="contact" className="relative py-24 px-4 bg-[var(--bg-alt)] subtle-grid-bg">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="section-label mb-3">07 — Connect</div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[var(--c-heading)] mb-3">Get In Touch</h2>
          <p className="text-[var(--c-text4)] max-w-lg mx-auto">
            Open to AI engineering roles, industrial software positions, and research collaborations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* ── Left: Contact info ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <div>
              <h3 className="text-xl font-bold text-[var(--c-heading)] mb-2">Let&apos;s build something great.</h3>
              <p className="text-[var(--c-text3)] leading-relaxed">
                Whether you&apos;re looking for a developer to join your team, exploring collaboration
                on AI or industrial systems research, or just want to connect — I&apos;d love to hear from you.
              </p>
            </div>

            <div className="space-y-3">
              {CONTACT_ITEMS.map(({ icon, label, value, href, accent }) => (
                <div
                  key={label}
                  className={`flex items-center gap-3 p-3.5 rounded-xl border ${accentMap[accent]}`}
                >
                  <div className="shrink-0">{icon}</div>
                  <div className="min-w-0">
                    <div className="text-xs text-[var(--c-text4)] font-mono mb-0.5">{label}</div>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        className="text-sm text-[var(--c-text2)] hover:text-[var(--c-heading)] transition-colors truncate block"
                      >
                        {value}
                      </a>
                    ) : (
                      <span className="text-sm text-[var(--c-text2)]">{value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Availability badge */}
            <div className="flex items-center gap-2.5 text-sm text-emerald-400 border border-emerald-500/20 bg-emerald-500/5 px-4 py-3 rounded-xl">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-dot" />
              <span>Currently available for new opportunities</span>
            </div>
          </motion.div>

          {/* ── Right: Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-[var(--c-text4)] font-mono mb-1.5">Name</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full bg-[var(--bg-input)] border border-[var(--c-border1)] text-[var(--c-text1)] rounded-lg px-4 py-2.5 text-sm placeholder:text-[var(--c-text5)] focus:outline-none focus:border-cyan-500/60 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs text-[var(--c-text4)] font-mono mb-1.5">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="you@company.com"
                    className="w-full bg-[var(--bg-input)] border border-[var(--c-border1)] text-[var(--c-text1)] rounded-lg px-4 py-2.5 text-sm placeholder:text-[var(--c-text5)] focus:outline-none focus:border-cyan-500/60 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-[var(--c-text4)] font-mono mb-1.5">Subject</label>
                <input
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Job Opportunity / Collaboration / Research"
                  className="w-full bg-[var(--bg-input)] border border-[var(--c-border1)] text-[var(--c-text1)] rounded-lg px-4 py-2.5 text-sm placeholder:text-[var(--c-text5)] focus:outline-none focus:border-cyan-500/60 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs text-[var(--c-text4)] font-mono mb-1.5">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about the opportunity or project..."
                  className="w-full bg-[#0a0f1e] border border-slate-700 text-slate-200 rounded-lg px-4 py-2.5 text-sm placeholder-slate-600 focus:outline-none focus:border-cyan-500/60 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading || sent}
                className="w-full flex items-center justify-center gap-2 py-3 bg-cyan-500 hover:bg-cyan-400 disabled:opacity-60 text-black font-semibold rounded-lg transition-all duration-200 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]"
              >
                {sent ? (
                  <>
                    <CheckCircle size={16} /> Message Sent!
                  </>
                ) : loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} /> Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
