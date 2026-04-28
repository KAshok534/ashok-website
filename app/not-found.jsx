import Link from 'next/link'

export const metadata = {
  title: 'Page Not Found — Ashok Kumar Kunchala',
  description:
    'This page does not exist. Return to ashokkunchala.com — Technology Leader & Enterprise AI Architect, Head of Technology at Anvesa.',
}

export default function NotFound() {
  return (
    <div
      style={{
        background: 'var(--ink)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px var(--section-x)',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <div style={{ maxWidth: '560px' }}>
        <div className="eyebrow" style={{ marginBottom: '20px' }}>
          § Error 404 — Stray correspondence
        </div>
        <h1
          style={{
            fontFamily: 'var(--display)',
            fontSize: 'clamp(2.6rem, 6vw, 4rem)',
            fontWeight: 300,
            color: 'var(--bone)',
            lineHeight: 1.05,
            letterSpacing: '-0.025em',
            marginBottom: '20px',
            fontVariationSettings: '"opsz" 144, "SOFT" 30',
          }}
        >
          This page is{' '}
          <span style={{ fontStyle: 'italic', color: 'var(--gold)', fontVariationSettings: '"opsz" 144, "SOFT" 100' }}>
            not in the index.
          </span>
        </h1>
        <p
          style={{
            fontFamily: 'var(--display)',
            fontStyle: 'italic',
            fontSize: '1.18rem',
            color: 'var(--bone-muted)',
            lineHeight: 1.5,
            marginBottom: '40px',
            maxWidth: '46ch',
            fontVariationSettings: '"opsz" 60, "SOFT" 100',
          }}
        >
          The page you&apos;re looking for has either been moved, retired, or
          never existed in the first place.
        </p>
        <Link href="/" className="btn-primary" style={{ textDecoration: 'none' }}>
          <span>Return home</span>
          <span className="arrow">→</span>
        </Link>
      </div>
    </div>
  )
}
