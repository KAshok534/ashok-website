'use client'

/*
 * Expertise — replaced 3 cyan boxed cards with an editorial three-column
 * specimen sheet. Each column is a vertical list, separated by hairlines.
 * Skills set as monospace items with an em-dash bullet — no pills, no chips.
 */

import { motion } from 'framer-motion'

const categories = [
  {
    title: 'Intelligence',
    subtitle: 'AI · LLM · Reasoning systems',
    skills: [
      'Agentic AI Systems',
      'RAG Architecture',
      'Large Language Models',
      'Azure OpenAI',
      'Enterprise AI Systems',
    ],
  },
  {
    title: 'Infrastructure',
    subtitle: 'Cloud · Containers · IaC',
    skills: [
      'Azure Cloud (AKS)',
      'Cloud-Native Architecture',
      'Docker & Kubernetes',
      'Bicep IaC',
      'Cloud Cost Optimization',
    ],
  },
  {
    title: 'Engineering',
    subtitle: 'Stack · Product · Leadership',
    skills: [
      '.NET Core / C#',
      'Angular',
      'SQL Server',
      'Product Engineering',
      'Engineering Leadership',
    ],
  },
]

const stagger = { visible: { transition: { staggerChildren: 0.08 } } }
const rise = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.2, 0.8, 0.2, 1] } },
}

export default function Expertise() {
  return (
    <section
      id="expertise"
      style={{
        background: 'var(--ink)',
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
          <div className="eyebrow" style={{ marginBottom: '14px' }}>§ 02 — Practice areas</div>
          <h2
            style={{
              fontSize: 'clamp(2.2rem, 5vw, 3.6rem)',
              fontWeight: 300,
              letterSpacing: '-0.025em',
              lineHeight: 1.05,
              maxWidth: '18ch',
              fontVariationSettings: '"opsz" 144, "SOFT" 30',
            }}
          >
            What I work with —
            <span style={{ fontStyle: 'italic', color: 'var(--bone-muted)', fontVariationSettings: '"opsz" 144, "SOFT" 100' }}> the toolkit.</span>
          </h2>
        </motion.div>

        <hr className="rule" style={{ marginBottom: '64px' }} />

        {/* Three-column specimen sheet */}
        <div
          className="expertise-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '0',
          }}
        >
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              variants={rise}
              style={{
                padding: '0 36px',
                borderRight: i < categories.length - 1 ? '1px solid var(--rule)' : '0',
              }}
              className="expertise-col"
            >
              {/* Roman numeral marker */}
              <div className="marginalia" style={{ marginBottom: '16px', color: 'var(--slate)' }}>
                {['I', 'II', 'III'][i]}
              </div>

              <h3
                style={{
                  fontFamily: 'var(--display)',
                  fontSize: '1.7rem',
                  fontWeight: 400,
                  color: 'var(--bone)',
                  marginBottom: '6px',
                  fontVariationSettings: '"opsz" 96',
                  letterSpacing: '-0.02em',
                }}
              >
                {cat.title}
              </h3>

              <p
                style={{
                  fontFamily: 'var(--display)',
                  fontStyle: 'italic',
                  fontSize: '0.92rem',
                  color: 'var(--bone-muted)',
                  marginBottom: '32px',
                  fontVariationSettings: '"opsz" 36, "SOFT" 100',
                }}
              >
                {cat.subtitle}
              </p>

              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {cat.skills.map((skill, j) => (
                  <li
                    key={skill}
                    style={{
                      display: 'flex',
                      gap: '14px',
                      padding: '12px 0',
                      borderTop: '1px solid var(--rule)',
                      borderBottom: j === cat.skills.length - 1 ? '1px solid var(--rule)' : '0',
                      transition: 'color 220ms ease',
                    }}
                    className="expertise-skill"
                  >
                    <span
                      className="marginalia"
                      style={{ minWidth: '20px', color: 'var(--whisper)' }}
                    >
                      {String(j + 1).padStart(2, '0')}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--body)',
                        fontSize: '0.96rem',
                        color: 'var(--bone)',
                        fontWeight: 400,
                      }}
                    >
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>

    </section>
  )
}
