import { Github, Linkedin, Mail, Terminal } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[var(--c-border2)] bg-[var(--bg-main)] px-4 py-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">

        {/* Brand */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center text-xs font-bold text-white">
            HS
          </div>
          <div>
            <div className="text-sm font-semibold text-[var(--c-text2)]">Harmanpreet Singh</div>
            <div className="text-xs text-[var(--c-text5)] font-mono">AI & Software Engineer</div>
          </div>
        </div>

        {/* Nav links */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-1">
          {['About', 'Skills', 'Experience', 'Projects', 'Research', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xs text-[var(--c-text4)] hover:text-cyan-500 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-3">
          <a
            href="https://www.linkedin.com/in/harman-saini-2b7b98256"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg border border-[var(--c-border2)] text-[var(--c-text4)] hover:text-blue-500 hover:border-blue-500/30 transition-all"
          >
            <Linkedin size={15} />
          </a>
          <a
            href="mailto:preetharman2012003@gmail.com"
            className="p-2 rounded-lg border border-[var(--c-border2)] text-[var(--c-text4)] hover:text-cyan-500 hover:border-cyan-500/30 transition-all"
          >
            <Mail size={15} />
          </a>
        </div>
      </div>

      <div className="mt-6 text-center text-xs text-[var(--c-text5)] font-mono">
        © {year} Harmanpreet Singh · Built with Next.js & Tailwind CSS
      </div>
    </footer>
  )
}
