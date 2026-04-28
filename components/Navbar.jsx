'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

const navLinks = [
  { num: '01', label: 'About',     href: '#about' },
  { num: '02', label: 'Practice',  href: '#expertise' },
  { num: '03', label: 'Career',    href: '#work' },
  { num: '04', label: 'Services',  href: '#services' },
  { num: '05', label: 'Journal',   href: '/blog', external: true },
  { num: '06', label: 'Contact',   href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleAnchor = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    const id = href.replace('#', '')
    if (pathname === '/') {
      const target = document.getElementById(id)
      if (target) {
        const top = target.getBoundingClientRect().top + window.scrollY - 80
        window.scrollTo({ top, behavior: 'smooth' })
      }
    } else {
      router.push(`/#${id}`)
    }
  }

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: scrolled ? '14px 0' : '22px 0',
          background: scrolled ? 'rgba(14, 13, 11, 0.86)' : 'transparent',
          backdropFilter: scrolled ? 'blur(14px) saturate(120%)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(14px) saturate(120%)' : 'none',
          borderBottom: scrolled ? '1px solid var(--rule)' : '1px solid transparent',
          transition: 'padding 280ms ease, background 280ms ease, border-color 280ms ease',
        }}
      >
        <div
          style={{
            maxWidth: '1240px',
            margin: '0 auto',
            padding: '0 var(--section-x)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '32px',
          }}
        >
          {/* Wordmark — italic ak monogram + full name set in mono caps */}
          <Link
            href="/"
            style={{
              display: 'flex',
              alignItems: 'baseline',
              gap: '12px',
              textDecoration: 'none',
              color: 'var(--bone)',
            }}
            aria-label="Home — Ashok Kumar Kunchala"
          >
            <span
              style={{
                fontFamily: 'var(--display)',
                fontStyle: 'italic',
                fontSize: '1.45rem',
                fontWeight: 500,
                letterSpacing: '-0.04em',
                color: 'var(--gold)',
                fontVariationSettings: '"opsz" 60, "SOFT" 100',
              }}
            >
              ak
            </span>
            <span
              style={{
                fontFamily: 'var(--mono)',
                fontSize: '0.7rem',
                fontWeight: 500,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--bone-muted)',
              }}
              className="wordmark-name"
            >
              Ashok&nbsp;Kunchala
            </span>
          </Link>

          {/* Desktop links — numbered, mono, hairline underline on hover */}
          <ul
            className="desktop-nav"
            style={{
              display: 'flex',
              gap: '34px',
              listStyle: 'none',
              alignItems: 'center',
              margin: 0,
              padding: 0,
            }}
          >
            {navLinks.map((link) => (
              <li key={link.label}>
                {link.external ? (
                  <Link href={link.href} className="nav-link">
                    <span className="nav-num">{link.num}</span>
                    <span>{link.label}</span>
                  </Link>
                ) : (
                  <a
                    href={link.href}
                    onClick={(e) => handleAnchor(e, link.href)}
                    className="nav-link"
                  >
                    <span className="nav-num">{link.num}</span>
                    <span>{link.label}</span>
                  </a>
                )}
              </li>
            ))}
          </ul>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="hamburger"
            style={{
              display: 'none',
              background: 'none',
              border: 0,
              cursor: 'pointer',
              padding: '6px 0',
              flexDirection: 'column',
              gap: '6px',
              width: '28px',
            }}
          >
            <span style={{ display: 'block', width: '100%', height: '1px', background: 'var(--bone)', transition: 'all 280ms ease', transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
            <span style={{ display: 'block', width: '100%', height: '1px', background: 'var(--bone)', transition: 'all 280ms ease', opacity: menuOpen ? 0 : 1 }} />
            <span style={{ display: 'block', width: '100%', height: '1px', background: 'var(--bone)', transition: 'all 280ms ease', transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
          </button>
        </div>
      </nav>

      {/* Mobile overlay — full-bleed editorial menu */}
      {menuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 999,
            background: 'var(--ink)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '0 var(--section-x)',
            gap: 0,
          }}
        >
          <div className="eyebrow" style={{ marginBottom: '36px', color: 'var(--slate)' }}>
            § Index
          </div>
          {navLinks.map((link) => (
            link.external ? (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="mobile-link"
              >
                <span className="mobile-num">{link.num}</span>
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleAnchor(e, link.href)}
                className="mobile-link"
              >
                <span className="mobile-num">{link.num}</span>
                {link.label}
              </a>
            )
          ))}
        </div>
      )}

    </>
  )
}
