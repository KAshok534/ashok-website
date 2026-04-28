'use client'

/*
 * Footer — colophon-style. Editorial credit line at left, links at right.
 * Hairline border on top, no cyan, no rounded chips.
 */

import Link from 'next/link'

export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--ink-deep)',
        borderTop: '1px solid var(--rule)',
        padding: '52px var(--section-x) 44px',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <div
        style={{
          maxWidth: '1240px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          gap: '32px',
          alignItems: 'end',
        }}
        className="footer-grid"
      >
        {/* Colophon */}
        <div>
          <div
            style={{
              display: 'flex',
              alignItems: 'baseline',
              gap: '14px',
              marginBottom: '10px',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--display)',
                fontStyle: 'italic',
                fontSize: '1.6rem',
                fontWeight: 500,
                color: 'var(--gold)',
                letterSpacing: '-0.04em',
                lineHeight: 1,
                fontVariationSettings: '"opsz" 60, "SOFT" 100',
              }}
            >
              ak
            </span>
            <span
              style={{
                fontFamily: 'var(--display)',
                fontSize: '0.98rem',
                color: 'var(--bone)',
                letterSpacing: '-0.01em',
                fontVariationSettings: '"opsz" 36',
              }}
            >
              Ashok Kumar Kunchala
            </span>
          </div>
          <p
            className="marginalia"
            style={{ color: 'var(--slate)', maxWidth: '52ch', lineHeight: 1.7 }}
          >
            Technology Leader · Enterprise AI Architect · Practising from
            Hyderabad. Set in Fraunces & Inter Tight, on a warm-ink ground.
          </p>
          <p
            className="marginalia"
            style={{ color: 'var(--whisper)', marginTop: '14px' }}
          >
            © 2026 — All rights reserved.
          </p>
        </div>

        {/* Links */}
        <nav
          style={{
            display: 'flex',
            gap: '32px',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
          className="footer-links"
        >
          <a
            href="https://linkedin.com/in/ashok-kumar-kunchala"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            LinkedIn
          </a>
          <a
            href="mailto:ashok@ashokkunchala.com"
            className="footer-link"
          >
            Email
          </a>
          <Link href="/blog" className="footer-link">Journal</Link>
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="footer-link"
          >
            ↑ Top
          </a>
        </nav>
      </div>

    </footer>
  )
}
