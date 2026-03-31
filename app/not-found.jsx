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
        background: '#050d1a',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 24px',
        textAlign: 'center',
      }}
    >
      <div style={{ maxWidth: '480px' }}>
        <p
          style={{
            fontFamily: '"Courier New", monospace',
            fontSize: '0.75rem',
            letterSpacing: '0.2em',
            color: '#29b6f6',
            textTransform: 'uppercase',
            marginBottom: '20px',
          }}
        >
          404
        </p>
        <h1
          style={{
            fontFamily: 'Georgia, serif',
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            color: '#ffffff',
            marginBottom: '16px',
            lineHeight: 1.2,
          }}
        >
          Page not found.
        </h1>
        <p
          style={{
            fontSize: '1rem',
            color: '#546e7a',
            fontFamily: 'system-ui, sans-serif',
            lineHeight: 1.7,
            marginBottom: '40px',
          }}
        >
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          style={{
            display: 'inline-block',
            padding: '12px 28px',
            background: '#29b6f6',
            color: '#050d1a',
            fontWeight: 700,
            fontSize: '0.9rem',
            borderRadius: '6px',
            textDecoration: 'none',
            fontFamily: 'system-ui, sans-serif',
          }}
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}
