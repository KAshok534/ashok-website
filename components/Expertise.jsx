'use client'

import { motion } from 'framer-motion'

const categories = [
  {
    title: 'AI & Intelligence',
    icon: '◈',
    skills: [
      'Agentic AI Systems',
      'RAG Architecture',
      'Large Language Models',
      'Azure OpenAI',
      'Enterprise AI Systems',
    ],
  },
  {
    title: 'Cloud & Infrastructure',
    icon: '◉',
    skills: [
      'Azure Cloud (AKS)',
      'Cloud-Native Architecture',
      'Docker & Kubernetes',
      'Bicep IaC',
      'Cloud Cost Optimization',
    ],
  },
  {
    title: 'Engineering & Product',
    icon: '◎',
    skills: [
      '.NET Core / C#',
      'Angular',
      'SQL Server',
      'Product Engineering',
      'Engineering Leadership',
    ],
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: 'easeOut' },
  }),
}

export default function Expertise() {
  return (
    <section
      id="expertise"
      style={{
        background: '#050d1a',
        padding: '110px 24px',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '64px' }}
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
            Skills & Stack
          </p>
          <h2
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
              color: '#ffffff',
              lineHeight: 1.2,
            }}
          >
            What I Work With
          </h2>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
          }}
          className="expertise-grid"
        >
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              style={{
                background: '#0a1628',
                border: '1px solid rgba(41, 182, 246, 0.12)',
                borderRadius: '12px',
                padding: '32px 28px',
                cursor: 'default',
                transition: 'border-color 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(41, 182, 246, 0.35)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(41, 182, 246, 0.12)'
              }}
            >
              <div
                style={{
                  fontSize: '1.4rem',
                  color: '#29b6f6',
                  marginBottom: '8px',
                  fontFamily: 'Georgia, serif',
                }}
              >
                {cat.icon}
              </div>
              <h3
                style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: '1.1rem',
                  color: '#ffffff',
                  marginBottom: '24px',
                  fontWeight: 700,
                }}
              >
                {cat.title}
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      display: 'inline-block',
                      padding: '7px 14px',
                      background: 'rgba(41, 182, 246, 0.06)',
                      border: '1px solid rgba(41, 182, 246, 0.15)',
                      borderRadius: '6px',
                      fontSize: '0.85rem',
                      color: '#90caf9',
                      fontFamily: 'system-ui, sans-serif',
                      transition: 'all 0.2s',
                      cursor: 'default',
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = 'rgba(41,182,246,0.12)'
                      e.target.style.color = '#ffffff'
                      e.target.style.borderColor = 'rgba(41,182,246,0.35)'
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'rgba(41, 182, 246, 0.06)'
                      e.target.style.color = '#90caf9'
                      e.target.style.borderColor = 'rgba(41, 182, 246, 0.15)'
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .expertise-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 600px) and (max-width: 900px) {
          .expertise-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  )
}
