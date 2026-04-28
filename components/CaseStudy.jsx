'use client'

/*
 * CaseStudy — featured Anvesa case as a single editorial spread.
 * Kicker → display headline → italic synopsis → marginalia stats → tech ledger.
 * No rounded card. Borders are hairlines on top/bottom only.
 */

import { motion } from 'framer-motion'

const techTags = [
  'Azure AKS',
  'RAG',
  'Agentic AI',
  '.NET Core',
  'Angular',
  'Kubernetes',
  'Azure OpenAI',
  'SQL Server',
]

const stagger = { visible: { transition: { staggerChildren: 0.08 } } }
const rise = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.2, 0.8, 0.2, 1] } },
}

export default function CaseStudy() {
  return (
    <section
      id="work"
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
          <div className="eyebrow" style={{ marginBottom: '14px' }}>§ 04 — Featured work</div>
          <h2
            style={{
              fontSize: 'clamp(2.2rem, 5vw, 3.6rem)',
              fontWeight: 300,
              letterSpacing: '-0.025em',
              lineHeight: 1.05,
              maxWidth: '14ch',
              fontVariationSettings: '"opsz" 144, "SOFT" 30',
            }}
          >
            What I&rsquo;ve{' '}
            <span style={{ fontStyle: 'italic', color: 'var(--gold)', fontVariationSettings: '"opsz" 144, "SOFT" 100' }}>
              built.
            </span>
          </h2>
        </motion.div>

        <hr className="rule" style={{ marginBottom: '64px' }} />

        {/* Anvesa spread */}
        <motion.article
          variants={rise}
          className="case-spread"
          style={{
            display: 'grid',
            gridTemplateColumns: '180px 1fr',
            gap: '48px',
            paddingBottom: '64px',
            borderBottom: '1px solid var(--rule)',
            marginBottom: '40px',
          }}
        >
          {/* Marginalia rail */}
          <aside className="case-rail">
            <div className="marginalia" style={{ marginBottom: '8px', color: 'var(--slate)' }}>
              Project № 01
            </div>
            <div
              style={{
                fontFamily: 'var(--display)',
                fontSize: '1.4rem',
                fontWeight: 300,
                color: 'var(--bone)',
                lineHeight: 1.15,
                marginBottom: '32px',
                fontVariationSettings: '"opsz" 72',
              }}
            >
              2017 —
              <br />
              <span style={{ fontStyle: 'italic', color: 'var(--gold)' }}>now.</span>
            </div>

            <div className="marginalia" style={{ marginBottom: '6px' }}>Status</div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontFamily: 'var(--mono)',
                fontSize: '0.74rem',
                color: 'var(--bone)',
                letterSpacing: '0.06em',
                marginBottom: '24px',
              }}
            >
              <span
                aria-hidden
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: 'var(--gold)',
                  boxShadow: '0 0 8px var(--gold)',
                }}
              />
              In production
            </div>

            <div className="marginalia" style={{ marginBottom: '6px' }}>Reach</div>
            <div
              style={{
                fontFamily: 'var(--body)',
                fontSize: '0.9rem',
                color: 'var(--bone-muted)',
                lineHeight: 1.6,
              }}
            >
              15+ enterprise clients
              <br />
              US · India · Australia
            </div>
          </aside>

          {/* Body */}
          <div>
            <p className="marginalia" style={{ color: 'var(--slate)', marginBottom: '14px' }}>
              Enterprise AI Platform · eDiscovery
            </p>

            <h3
              style={{
                fontFamily: 'var(--display)',
                fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                fontWeight: 400,
                lineHeight: 1.1,
                letterSpacing: '-0.022em',
                marginBottom: '28px',
                color: 'var(--bone)',
                fontVariationSettings: '"opsz" 144, "SOFT" 30',
                maxWidth: '24ch',
              }}
            >
              Anvesa — an{' '}
              <span style={{ fontStyle: 'italic', color: 'var(--gold)', fontVariationSettings: '"opsz" 144, "SOFT" 100' }}>
                AI-native
              </span>{' '}
              eDiscovery platform, built ground-up.
            </h3>

            <p className="lede" style={{ fontSize: '1.18rem', marginBottom: '28px', maxWidth: '54ch' }}>
              Built from zero to production over seven years. Now serves
              fifteen enterprise clients across three continents, processing
              millions of documents daily.
            </p>

            <p
              style={{
                fontSize: '1.02rem',
                color: 'var(--bone-muted)',
                lineHeight: 1.85,
                marginBottom: '36px',
                maxWidth: '64ch',
              }}
            >
              Architected AKS-based distributed systems, RAG pipelines, and
              Agentic AI workflows. Led every layer — from the cloud
              infrastructure that holds it up, to the product strategy that
              decides where it&rsquo;s going next.
            </p>

            {/* Tech ledger */}
            <div className="marginalia" style={{ marginBottom: '14px', color: 'var(--slate)' }}>
              Stack
            </div>
            <ul
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0',
                listStyle: 'none',
                padding: 0,
                margin: 0,
                borderTop: '1px solid var(--rule)',
                borderBottom: '1px solid var(--rule)',
              }}
            >
              {techTags.map((tag, i) => (
                <li
                  key={tag}
                  style={{
                    flex: '1 0 auto',
                    padding: '12px 18px 12px 0',
                    marginRight: '24px',
                    fontFamily: 'var(--mono)',
                    fontSize: '0.78rem',
                    color: 'var(--bone)',
                    letterSpacing: '0.04em',
                    borderRight: i < techTags.length - 1 ? '1px solid var(--rule)' : '0',
                    paddingRight: '24px',
                  }}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </motion.article>

        {/* More work — placeholder row, also editorial */}
        <motion.div
          variants={rise}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '0',
            borderTop: '1px solid var(--rule)',
            borderBottom: '1px solid var(--rule)',
          }}
          className="placeholder-grid"
        >
          {[
            { num: '02', label: 'More case studies coming soon' },
            { num: '03', label: 'Client projects under NDA' },
          ].map((it, i) => (
            <div
              key={it.num}
              style={{
                padding: '32px 28px',
                borderRight: i === 0 ? '1px solid var(--rule)' : '0',
                display: 'flex',
                alignItems: 'baseline',
                gap: '20px',
              }}
            >
              <span className="marginalia" style={{ color: 'var(--whisper)', fontSize: '0.78rem' }}>
                № {it.num}
              </span>
              <span
                style={{
                  fontFamily: 'var(--display)',
                  fontStyle: 'italic',
                  fontSize: '1.05rem',
                  color: 'var(--bone-muted)',
                  fontVariationSettings: '"opsz" 60, "SOFT" 100',
                }}
              >
                {it.label}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>

    </section>
  )
}
