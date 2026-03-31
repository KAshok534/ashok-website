'use client'

import { motion } from 'framer-motion'

const techTags = ['Azure AKS', 'RAG', 'Agentic AI', '.NET Core', 'Angular', 'Kubernetes', 'Azure OpenAI', 'SQL Server']

export default function CaseStudy() {
  return (
    <section
      id="work"
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
          style={{ marginBottom: '56px' }}
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
            Featured Work
          </p>
          <h2
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
              color: '#ffffff',
            }}
          >
            What I&apos;ve Built
          </h2>
        </motion.div>

        {/* Main case study card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          whileHover={{ scale: 1.01 }}
          style={{
            background: '#0a1628',
            border: '1px solid rgba(41, 182, 246, 0.2)',
            borderRadius: '16px',
            padding: '48px 48px',
            marginBottom: '24px',
            position: 'relative',
            overflow: 'hidden',
            cursor: 'default',
          }}
          className="case-card"
        >
          {/* Background accent */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '300px',
              height: '300px',
              background: 'radial-gradient(circle, rgba(41,182,246,0.05) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <span
                style={{
                  fontFamily: '"Courier New", monospace',
                  fontSize: '0.72rem',
                  letterSpacing: '0.15em',
                  color: '#546e7a',
                  textTransform: 'uppercase',
                  display: 'block',
                  marginBottom: '8px',
                }}
              >
                Enterprise Platform · 2017–Present
              </span>
              <h3
                style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: 'clamp(1.3rem, 3vw, 1.9rem)',
                  color: '#ffffff',
                  fontWeight: 700,
                  lineHeight: 1.2,
                }}
              >
                Anvesa — Enterprise AI eDiscovery Platform
              </h3>
            </div>
            <span
              style={{
                display: 'inline-block',
                padding: '6px 16px',
                background: 'rgba(41, 182, 246, 0.1)',
                border: '1px solid rgba(41, 182, 246, 0.4)',
                borderRadius: '20px',
                fontSize: '0.78rem',
                color: '#29b6f6',
                fontFamily: '"Courier New", monospace',
                letterSpacing: '0.05em',
                whiteSpace: 'nowrap',
              }}
            >
              ● Live in Production
            </span>
          </div>

          <p
            style={{
              fontSize: '1.05rem',
              color: '#90caf9',
              lineHeight: 1.8,
              marginBottom: '32px',
              maxWidth: '800px',
              fontFamily: 'system-ui, sans-serif',
            }}
          >
            Built an AI-native, Azure-powered eDiscovery platform from zero to production. Serving 15+ enterprise clients across the US, India, and Australia. Architected AKS-based distributed systems, RAG pipelines, and Agentic AI workflows that process millions of documents daily. Led every layer — from cloud infrastructure to product strategy.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {techTags.map((tag) => (
              <span
                key={tag}
                style={{
                  padding: '5px 12px',
                  background: 'rgba(41, 182, 246, 0.06)',
                  border: '1px solid rgba(41, 182, 246, 0.15)',
                  borderRadius: '6px',
                  fontSize: '0.8rem',
                  color: '#90caf9',
                  fontFamily: '"Courier New", monospace',
                  letterSpacing: '0.02em',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Placeholder row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '16px',
          }}
          className="placeholder-grid"
        >
          {['More case studies coming soon', 'Client projects under NDA'].map((label, i) => (
            <div
              key={i}
              style={{
                background: 'rgba(10, 22, 40, 0.5)',
                border: '1px dashed rgba(41, 182, 246, 0.1)',
                borderRadius: '12px',
                padding: '36px 28px',
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
              }}
            >
              <span style={{ fontSize: '1.2rem', opacity: 0.3 }}>◎</span>
              <span
                style={{
                  fontSize: '0.85rem',
                  color: '#546e7a',
                  fontFamily: 'system-ui, sans-serif',
                  fontStyle: 'italic',
                }}
              >
                {label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .case-card { padding: 28px 20px !important; }
          .placeholder-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
