'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Terminal, Sun, Moon } from 'lucide-react'
import { useTheme } from './ThemeProvider'

const NAV_LINKS = [
  { label: 'About',       href: '#about' },
  { label: 'Skills',      href: '#skills' },
  { label: 'Experience',  href: '#experience' },
  { label: 'Projects',    href: '#projects' },
  { label: 'Research',    href: '#research' },
  { label: 'Contact',     href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { theme, toggleTheme }      = useTheme()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[var(--bg-overlay)] backdrop-blur-xl border-b border-cyan-500/10 shadow-lg shadow-black/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

        {/* ── Logo ── */}
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="relative w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center font-bold text-white text-sm overflow-hidden">
            <span className="relative z-10">HS</span>
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <span className="hidden sm:block text-[var(--c-text2)] font-semibold text-sm group-hover:text-cyan-500 transition-colors">
            Harmanpreet Singh
          </span>
        </a>

        {/* ── Desktop nav links ── */}
        <div className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-[var(--c-text3)] hover:text-cyan-500 text-sm transition-colors duration-200 relative group"
            >
              {label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-cyan-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* ── Right controls ── */}
        <div className="flex items-center gap-3">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-lg border border-[var(--c-border1)] text-[var(--c-text3)] hover:text-cyan-500 hover:border-cyan-500/40 transition-all duration-200"
          >
            {theme === 'light' ? <Moon size={15} /> : <Sun size={15} />}
          </button>

          <a
            href="mailto:preetharman2012003@gmail.com"
            className="hidden md:flex items-center gap-1.5 text-xs px-3.5 py-1.5 border border-cyan-500/40 text-cyan-500 rounded-md hover:bg-cyan-500/10 hover:border-cyan-500/70 transition-all duration-200"
          >
            <Terminal size={12} />
            Hire Me
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-1.5 text-[var(--c-text3)] hover:text-cyan-500 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      {mobileOpen && (
        <div className="md:hidden bg-[var(--bg-mobile)] backdrop-blur-xl border-t border-cyan-500/10 px-5 py-5">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="text-[var(--c-text3)] hover:text-cyan-500 text-sm transition-colors py-1 border-b border-[var(--c-border2)] last:border-0"
              >
                {label}
              </a>
            ))}
            <a
              href="mailto:preetharman2012003@gmail.com"
              className="mt-2 flex items-center gap-2 text-sm text-cyan-500 border border-cyan-500/30 rounded-md px-4 py-2 w-fit"
            >
              <Terminal size={14} /> Get In Touch
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
