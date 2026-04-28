'use client'

/*
 * Timeline — replaced the dual-rail card timeline with a CV-style
 * editorial register. Each entry: left rail with year, right column
 * with company / title / body. Clean. Confident. No glow dots.
 */

import { motion } from 'framer-motion'

const entries = [
  {
    period: '2024 —',
    yearStart: '2024',
    yearEnd: 'now',
    company: 'Anvesa',
    location: 'Independent Entity · Hyderabad',
    title: 'Head of Technology',
    body: 'Leading AI innovation and enterprise product strategy for 15+ clients across the US, India, and Australia. Designing RAG pipelines, Agentic AI systems, and cloud-native architectures on Azure AKS that run in production daily.',
  },
  {
    period: '2017 — 2024',
    yearStart: '2017',
    yearEnd: '2024',
    company: 'Aureus Tech Systems',
    location: '→ Happiest Minds (acquisition)',
    title: 'Senior Software Engineer → Head of Technology',
    body: 'Joined as founding engineer on what became Anvesa. Built the platform from scratch across the full stack. Grew into leading the entire engineering function — architecture, R&D, QA, and production support. Led platform through the Aureus → Happiest Minds acquisition.',
  },
  {
    period: '2014 — 2017',
    yearStart: '2014',
    yearEnd: '2017',
    company: 'Cognizant Technology Solutions',
    location: 'American Express · Global Decision Engine',
    title: 'Programmer Analyst → Associate',
    body: 'Started career as Batch Topper at Cognizant\'s Learning Academy. Worked on the American Express Global Decision Engine — led Mainframe-to-.NET migration delivering change requests across US, EMEA, APAC and other global markets. Awarded for delivery quality.',
  },
]

const stagger = { visible: { transition: { staggerChildren: 0.10 } } }
const rise = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.2, 0.8, 0.2, 1] } },
}

export default function Timeline() {
  return (
    <section
      id="timeline"
      style={{
        background: 'var(--ink-warm)',
        padding: 'var(--section-y) var(--section-x)',
      }}
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        style={{ maxWidth: '1240px', margin: '0 auto' }}
      >
        <motion.div variants={rise} style={{ marginBottom: '56px' }}>
          <div className="eyebrow" style={{ marginBottom: '14px' }}>§ 03 — Career register</div>
          <h2
            style={{
              fontSize: 'clamp(2.2rem, 5vw, 3.6rem)',
              fontWeight: 300,
              letterSpacing: '-0.025em',
              lineHeight: 1.05,
              maxWidth: '20ch',
              fontVariationSettings: '"opsz" 144, "SOFT" 30',
            }}
          >
            Thirteen years.{' '}
            <span style={{ fontStyle: 'italic', color: 'var(--gold)', fontVariationSettings: '"opsz" 144, "SOFT" 100' }}>
              One direction.
            </span>
          </h2>
        </motion.div>

        <hr className="rule" style={{ marginBottom: '32px' }} />

        {/* CV register */}
        <div>
          {entries.map((entry, i) => (
            <motion.article
              key={entry.company}
              variants={rise}
              className="cv-row"
              style={{
                display: 'grid',
                gridTemplateColumns: '180px 1fr',
                gap: '48px',
                padding: '40px 0',
                borderBottom: '1px solid var(--rule)',
              }}
            >
              {/* Year rail */}
              <div className="cv-year">
                <div className="marginalia" style={{ marginBottom: '8px', color: 'var(--slate)' }}>
                  Period
                </div>
                <div
                  style={{
                    fontFamily: 'var(--display)',
                    fontSize: '1.6rem',
                    fontWeight: 300,
                    color: 'var(--bone)',
                    lineHeight: 1.1,
                    fontVariationSettings: '"opsz" 96',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {entry.yearStart}
                  <span style={{ color: 'var(--whisper)', margin: '0 8px' }}>—</span>
                  <span style={{ fontStyle: entry.yearEnd === 'now' ? 'italic' : 'normal', color: entry.yearEnd === 'now' ? 'var(--gold)' : 'var(--bone)' }}>
                    {entry.yearEnd}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--display)',
                    fontSize: 'clamp(1.5rem, 3vw, 2.1rem)',
                    fontWeight: 400,
                    color: 'var(--bone)',
                    lineHeight: 1.15,
                    marginBottom: '6px',
                    fontVariationSettings: '"opsz" 96',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {entry.company}
                </h3>
                <p
                  className="marginalia"
                  style={{ color: 'var(--slate)', marginBottom: '12px' }}
                >
                  {entry.location}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--display)',
                    fontStyle: 'italic',
                    fontSize: '1.05rem',
                    color: 'var(--gold)',
                    marginBottom: '20px',
                    fontVariationSettings: '"opsz" 36, "SOFT" 100',
                  }}
                >
                  {entry.title}
                </p>
                <p
                  style={{
                    color: 'var(--bone-muted)',
                    fontSize: '1rem',
                    lineHeight: 1.8,
                    maxWidth: '64ch',
                  }}
                >
                  {entry.body}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>

    </section>
  )
}
