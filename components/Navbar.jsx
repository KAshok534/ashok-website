'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    const id = href.replace('#', '')
    if (pathname === '/') {
      // Already on home — smooth scroll
      const target = document.getElementById(id)
      if (target) {
        const top = target.getBoundingClientRect().top + window.scrollY - 80
        window.scrollTo({ top, behavior: 'smooth' })
      }
    } else {
      // On another page — navigate to home then scroll
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
          transition: 'all 0.3s ease',
          padding: scrolled ? '14px 0' : '22px 0',
          background: scrolled
            ? 'rgba(5, 13, 26, 0.97)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(41, 182, 246, 0.08)' : 'none',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <Link
            href="/"
            style={{
              fontFamily: 'Georgia, serif',
              fontWeight: 700,
              fontSize: '1.25rem',
              color: '#ffffff',
              textDecoration: 'none',
              letterSpacing: '-0.02em',
            }}
          >
            Ashok Kunchala
          </Link>

          {/* Desktop links */}
          <ul style={{ display: 'flex', gap: '36px', listStyle: 'none', alignItems: 'center', margin: 0, padding: 0 }} className="desktop-nav">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  style={{
                    color: '#90caf9',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    letterSpacing: '0.01em',
                    transition: 'color 0.2s',
                    fontFamily: 'system-ui, sans-serif',
                  }}
                  onMouseEnter={(e) => (e.target.style.color = '#29b6f6')}
                  onMouseLeave={(e) => (e.target.style.color = '#90caf9')}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <Link
                href="/blog"
                style={{
                  color: '#90caf9',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  letterSpacing: '0.01em',
                  transition: 'color 0.2s',
                  fontFamily: 'system-ui, sans-serif',
                }}
                onMouseEnter={(e) => (e.target.style.color = '#29b6f6')}
                onMouseLeave={(e) => (e.target.style.color = '#90caf9')}
              >
                Blog
              </Link>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                style={{
                  display: 'inline-block',
                  padding: '8px 20px',
                  background: '#29b6f6',
                  color: '#050d1a',
                  fontWeight: 700,
                  fontSize: '0.875rem',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  fontFamily: 'system-ui, sans-serif',
                  letterSpacing: '0.01em',
                  transition: 'background 0.2s, transform 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = '#0090d4'
                  e.target.style.transform = 'translateY(-1px)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = '#29b6f6'
                  e.target.style.transform = 'translateY(0)'
                }}
              >
                Let&apos;s Connect
              </a>
            </li>
          </ul>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="hamburger"
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '4px',
              flexDirection: 'column',
              gap: '5px',
            }}
          >
            <span style={{ display: 'block', width: '22px', height: '2px', background: '#29b6f6', transition: 'all 0.3s', transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
            <span style={{ display: 'block', width: '22px', height: '2px', background: '#29b6f6', transition: 'all 0.3s', opacity: menuOpen ? 0 : 1 }} />
            <span style={{ display: 'block', width: '22px', height: '2px', background: '#29b6f6', transition: 'all 0.3s', transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 999,
            background: 'rgba(5, 13, 26, 0.98)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '36px',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              style={{
                color: '#ffffff',
                textDecoration: 'none',
                fontSize: '1.75rem',
                fontFamily: 'Georgia, serif',
                fontWeight: 700,
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.target.style.color = '#29b6f6')}
              onMouseLeave={(e) => (e.target.style.color = '#ffffff')}
            >
              {link.label}
            </a>
          ))}
          <Link
            href="/blog"
            onClick={() => setMenuOpen(false)}
            style={{
              color: '#ffffff',
              textDecoration: 'none',
              fontSize: '1.75rem',
              fontFamily: 'Georgia, serif',
              fontWeight: 700,
            }}
          >
            Blog
          </Link>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            style={{
              display: 'inline-block',
              padding: '12px 36px',
              background: '#29b6f6',
              color: '#050d1a',
              fontWeight: 700,
              fontSize: '1rem',
              borderRadius: '6px',
              textDecoration: 'none',
              marginTop: '12px',
            }}
          >
            Let&apos;s Connect
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </>
  )
}
