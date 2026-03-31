'use client'

import { motion } from 'framer-motion'

const services = [
  {
    number: '01',
    title: 'AI System Architecture & Build',
    description:
      'Design and build production-grade RAG pipelines, Agentic AI workflows, and LLM-powered enterprise applications on Azure. From architecture to deployment.',
    cta: 'Discuss Project',
  },
  {
    number: '02',
    title: 'AI System Audit & Improvement',
    description:
      'Audit, optimize, and scale your existing AI infrastructure. Fix performance bottlenecks, reduce costs, and improve reliability for systems already in production.',
    cta: 'Get an Audit',
  },
  {
    number: '03',
    title: 'Advisory & Strategic Consulting',
    description:
      'Strategic advisory for CTOs and engineering leaders adopting enterprise AI — architecture reviews, team guidance, and AI roadmap planning.',
    cta: 'Start a Conversation',
  },
]

export default function Services() {
  const scrollToContact = () => {
    const el = document.querySelector('#contact')
    if (!el) return
    const top = el.getBoundingClientRect().top + window.scrollY - 80
    window.scrollTo({ top, behavior: 'smooth' })
  }

  return (
    <section
      id="services"
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
          style={{ marginBottom: '16px' }}
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
            Consulting & Advisory
          </p>
          <h2
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
              color: '#ffffff',
              marginBottom: '14px',
            }}
          >
            Work With Me
          </h2>
          <p
            style={{
              fontSize: '1rem',
              color: '#546e7a',
              fontFamily: 'system-ui, sans-serif',
              marginBottom: '56px',
            }}
          >
            Available for select consulting and advisory engagements globally.
          </p>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px',
          }}
          className="services-grid"
        >
          {services.map((svc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              style={{
                background: '#0a1628',
                border: '1px solid rgba(41, 182, 246, 0.12)',
                borderRadius: '12px',
                padding: '36px 28px',
                display: 'flex',
                flexDirection: 'column',
                transition: 'border-color 0.2s',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(41, 182, 246, 0.3)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(41, 182, 246, 0.12)'
              }}
            >
              <span
                style={{
                  fontFamily: '"Courier New", monospace',
                  fontSize: '0.75rem',
                  color: '#29b6f6',
                  letterSpacing: '0.1em',
                  marginBottom: '20px',
                  display: 'block',
                }}
              >
                {svc.number}
              </span>
              <h3
                style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: '1.2rem',
                  color: '#ffffff',
                  marginBottom: '16px',
                  fontWeight: 700,
                  lineHeight: 1.3,
                }}
              >
                {svc.title}
              </h3>
              <p
                style={{
                  fontSize: '0.9rem',
                  color: '#90caf9',
                  lineHeight: 1.75,
                  fontFamily: 'system-ui, sans-serif',
                  flex: 1,
                  marginBottom: '28px',
                }}
              >
                {svc.description}
              </p>

              <button
                onClick={scrollToContact}
                style={{
                  padding: '10px 20px',
                  background: 'transparent',
                  border: '1px solid #29b6f6',
                  borderRadius: '6px',
                  color: '#29b6f6',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  fontFamily: 'system-ui, sans-serif',
                  transition: 'all 0.2s',
                  textAlign: 'center',
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = '#29b6f6'
                  e.target.style.color = '#050d1a'
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'transparent'
                  e.target.style.color = '#29b6f6'
                }}
              >
                {svc.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .services-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 600px) and (max-width: 900px) {
          .services-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  )
}
