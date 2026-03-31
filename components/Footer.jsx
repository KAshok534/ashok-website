'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer
      style={{
        background: '#050d1a',
        borderTop: '1px solid rgba(41, 182, 246, 0.08)',
        padding: '40px 24px',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '20px',
        }}
      >
        <div>
          <p
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: '0.9rem',
              color: '#546e7a',
            }}
          >
            © 2026 Ashok Kumar Kunchala
          </p>
          <p
            style={{
              fontFamily: '"Courier New", monospace',
              fontSize: '0.72rem',
              color: '#546e7a',
              letterSpacing: '0.05em',
              marginTop: '4px',
            }}
          >
            Technology Leader &amp; Enterprise AI Architect
          </p>
        </div>

        <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
          <a
            href="https://linkedin.com/in/ashok-kumar-kunchala"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#546e7a',
              textDecoration: 'none',
              fontSize: '0.85rem',
              fontFamily: 'system-ui, sans-serif',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.target.style.color = '#29b6f6')}
            onMouseLeave={(e) => (e.target.style.color = '#546e7a')}
          >
            LinkedIn
          </a>
          <Link
            href="/blog"
            style={{
              color: '#546e7a',
              textDecoration: 'none',
              fontSize: '0.85rem',
              fontFamily: 'system-ui, sans-serif',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.target.style.color = '#29b6f6')}
            onMouseLeave={(e) => (e.target.style.color = '#546e7a')}
          >
            Blog
          </Link>
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            style={{
              color: '#546e7a',
              textDecoration: 'none',
              fontSize: '0.85rem',
              fontFamily: 'system-ui, sans-serif',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.target.style.color = '#29b6f6')}
            onMouseLeave={(e) => (e.target.style.color = '#546e7a')}
          >
            ↑ Top
          </a>
        </div>
      </div>
    </footer>
  )
}
