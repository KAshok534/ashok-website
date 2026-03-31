'use client'

import { motion } from 'framer-motion'

const entries = [
  {
    period: '2014 – 2017',
    company: 'Cognizant Technology Solutions',
    title: 'Programmer Analyst Trainee → Associate',
    body: 'Started career as Batch Topper at Cognizant\'s Learning Academy. Worked on the American Express Global Decision Engine — led Mainframe-to-.NET migration delivering change requests across US, EMEA, APAC and other global markets. Awarded for delivery quality.',
    side: 'left',
  },
  {
    period: '2017 – 2024',
    company: 'Aureus Tech Systems',
    title: 'Senior Software Engineer → Head of Technology',
    body: 'Joined as founding engineer on what became Anvesa. Built the platform from scratch across the full stack. Grew into leading the entire engineering function — architecture, R&D, QA, and production support. Led platform through the Aureus → Happiest Minds acquisition.',
    side: 'right',
  },
  {
    period: '2024 – Present',
    company: 'Anvesa (Independent Entity)',
    title: 'Head of Technology',
    body: 'Leading AI innovation and enterprise product strategy for 15+ clients across US, India, and Australia. Designing RAG pipelines, Agentic AI systems, and cloud-native architectures on Azure AKS that run in production daily.',
    side: 'left',
  },
]

export default function Timeline() {
  return (
    <section
      id="timeline"
      style={{
        background: '#070e1c',
        padding: '110px 24px',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '72px' }}
        >
          <p
            style={{
              fontFamily: '"Courier New", monospace',
              fontSize: '0.75rem',
              letterSpacing: '0.2em',
              color: '#29b6f6',
              textTransform: 'uppercase',
              marginBottom: '14px',
            }}
          >
            Career Journey
          </p>
          <h2
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
              color: '#ffffff',
            }}
          >
            13 Years. One Direction.
          </h2>
        </motion.div>

        {/* Desktop timeline */}
        <div style={{ position: 'relative' }} className="timeline-desktop">
          {/* Center line */}
          <div
            style={{
              position: 'absolute',
              left: '50%',
              top: 0,
              bottom: 0,
              width: '1px',
              background: 'linear-gradient(180deg, transparent, rgba(41,182,246,0.4) 10%, rgba(41,182,246,0.4) 90%, transparent)',
              transform: 'translateX(-50%)',
            }}
          />

          {entries.map((entry, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: entry.side === 'left' ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.65, delay: 0.1 }}
              style={{
                display: 'flex',
                justifyContent: entry.side === 'left' ? 'flex-start' : 'flex-end',
                marginBottom: i < entries.length - 1 ? '56px' : 0,
                position: 'relative',
              }}
            >
              {/* Dot */}
              <div
                style={{
                  position: 'absolute',
                  left: '50%',
                  top: '28px',
                  transform: 'translate(-50%, -50%)',
                  width: '14px',
                  height: '14px',
                  borderRadius: '50%',
                  background: '#29b6f6',
                  border: '3px solid #070e1c',
                  boxShadow: '0 0 12px rgba(41,182,246,0.5)',
                  zIndex: 2,
                }}
              />

              {/* Card */}
              <div
                style={{
                  width: 'calc(50% - 40px)',
                  background: '#0a1628',
                  border: '1px solid rgba(41,182,246,0.12)',
                  borderRadius: '12px',
                  padding: '28px 32px',
                }}
              >
                <span
                  style={{
                    fontFamily: '"Courier New", monospace',
                    fontSize: '0.75rem',
                    letterSpacing: '0.1em',
                    color: '#29b6f6',
                    textTransform: 'uppercase',
                  }}
                >
                  {entry.period}
                </span>
                <h3
                  style={{
                    fontFamily: 'Georgia, serif',
                    fontSize: '1.15rem',
                    color: '#ffffff',
                    margin: '10px 0 4px',
                    fontWeight: 700,
                  }}
                >
                  {entry.company}
                </h3>
                <p
                  style={{
                    fontSize: '0.82rem',
                    color: '#29b6f6',
                    fontFamily: '"Courier New", monospace',
                    marginBottom: '16px',
                    letterSpacing: '0.02em',
                  }}
                >
                  {entry.title}
                </p>
                <p
                  style={{
                    fontSize: '0.92rem',
                    color: '#90caf9',
                    lineHeight: 1.75,
                    fontFamily: 'system-ui, sans-serif',
                  }}
                >
                  {entry.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile timeline */}
        <div className="timeline-mobile" style={{ display: 'none' }}>
          <div style={{ position: 'relative', paddingLeft: '28px' }}>
            <div
              style={{
                position: 'absolute',
                left: '5px',
                top: 0,
                bottom: 0,
                width: '1px',
                background: 'linear-gradient(180deg, transparent, rgba(41,182,246,0.4) 5%, rgba(41,182,246,0.4) 95%, transparent)',
              }}
            />
            {entries.map((entry, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                style={{
                  position: 'relative',
                  marginBottom: i < entries.length - 1 ? '36px' : 0,
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    left: '-32px',
                    top: '24px',
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    background: '#29b6f6',
                    border: '3px solid #070e1c',
                    boxShadow: '0 0 10px rgba(41,182,246,0.5)',
                  }}
                />
                <div
                  style={{
                    background: '#0a1628',
                    border: '1px solid rgba(41,182,246,0.12)',
                    borderRadius: '12px',
                    padding: '24px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: '"Courier New", monospace',
                      fontSize: '0.72rem',
                      letterSpacing: '0.1em',
                      color: '#29b6f6',
                      textTransform: 'uppercase',
                    }}
                  >
                    {entry.period}
                  </span>
                  <h3
                    style={{
                      fontFamily: 'Georgia, serif',
                      fontSize: '1.1rem',
                      color: '#ffffff',
                      margin: '10px 0 4px',
                    }}
                  >
                    {entry.company}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.78rem',
                      color: '#29b6f6',
                      fontFamily: '"Courier New", monospace',
                      marginBottom: '14px',
                    }}
                  >
                    {entry.title}
                  </p>
                  <p
                    style={{
                      fontSize: '0.9rem',
                      color: '#90caf9',
                      lineHeight: 1.7,
                      fontFamily: 'system-ui, sans-serif',
                    }}
                  >
                    {entry.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .timeline-desktop { display: none !important; }
          .timeline-mobile { display: block !important; }
        }
      `}</style>
    </section>
  )
}
