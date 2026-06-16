import { ImageResponse } from 'next/og'

export const runtime = 'nodejs'
export const alt =
  'Ashok Kumar Kunchala — Technology Leader & Enterprise AI Architect'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

// On-brand share card: warm ink background, gold accent, editorial layout.
// Uses the platform default font (no remote fetch) so the build stays robust.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#0e0d0b',
          padding: '72px 80px',
          color: '#ebe5d8',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: 24,
            letterSpacing: 4,
            textTransform: 'uppercase',
            color: '#c9a86a',
          }}
        >
          <span>ashokkunchala.com</span>
          <span style={{ color: '#75716a' }}>§ Enterprise AI</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 80, lineHeight: 1.05, fontWeight: 700 }}>
            Ashok Kumar
          </div>
          <div
            style={{
              fontSize: 80,
              lineHeight: 1.05,
              fontWeight: 700,
              fontStyle: 'italic',
              color: '#c9a86a',
            }}
          >
            Kunchala
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 34,
              color: '#b8b1a3',
              maxWidth: 900,
            }}
          >
            Technology Leader &amp; Enterprise AI Architect · Head of
            Technology at Anvesa
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            gap: 40,
            fontSize: 24,
            color: '#75716a',
            borderTop: '1px solid rgba(235,229,216,0.18)',
            paddingTop: 28,
          }}
        >
          <span>13+ years</span>
          <span>15+ global clients</span>
          <span>RAG · Agentic AI · Azure</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
