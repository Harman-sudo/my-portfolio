import type { Metadata } from 'next'
import './globals.css'
import ThemeProvider from '@/components/ThemeProvider'

export const metadata: Metadata = {
  title: 'Harmanpreet Singh — AI & Software Engineer',
  description:
    'Portfolio of Harmanpreet Singh — AI & Software Engineer specializing in SCADA systems, industrial automation, and machine learning research.',
  keywords: [
    'SCADA', 'AI Engineer', 'Software Engineer', 'Angular', 'ASP.NET',
    'Machine Learning', 'SignalR', 'Industrial Automation', 'PhD Computer Science',
  ],
  authors: [{ name: 'Harmanpreet Singh' }],
  openGraph: {
    title: 'Harmanpreet Singh — AI & Software Engineer',
    description: 'SCADA Systems | AI Research | Full-Stack Development',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Prevent dark-mode flash on reload */}
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{var s=localStorage.getItem('theme');if(s!=='light')document.documentElement.classList.add('dark');}catch(e){document.documentElement.classList.add('dark');}})();` }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-[var(--bg-main)] text-[var(--c-text1)] antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
