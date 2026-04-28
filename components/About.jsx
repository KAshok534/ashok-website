'use client'

/*
 * About — editorial portrait spread.
 * Asymmetric grid: 5/7 split. Image stays restrained (no glow, no cyan ring).
 * Photo gets a hairline frame and a small caption underneath, like a magazine.
 * Lede sits at top in italic display serif.
 */

import { motion } from 'framer-motion'
import Image from 'next/image'

const stagger = {
  visible: { transition: { staggerChildren: 0.10, delayChildren: 0.05 } },
}
const rise = {
  hidden:  { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.2, 0.8, 0.2, 1] } },
}

export default function About() {
  return (
    <section
      id="about"
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
        {/* Section header */}
        <motion.div variants={rise} style={{ marginBottom: '72px' }}>
          <div className="eyebrow" style={{ marginBottom: '14px' }}>§ 01 — On the Practice</div>
          <h2
            style={{
              fontSize: 'clamp(2.4rem, 5.5vw, 4rem)',
              fontWeight: 300,
              letterSpacing: '-0.025em',
              lineHeight: 1.05,
              maxWidth: '14ch',
              fontVariationSettings: '"opsz" 144, "SOFT" 30',
            }}
          >
            A note on the
            <span style={{ fontStyle: 'italic', color: 'var(--gold)', fontVariationSettings: '"opsz" 144, "SOFT" 100' }}> work</span>.
          </h2>
        </motion.div>

        <hr className="rule" style={{ marginBottom: '72px', maxWidth: '480px' }} />

        {/* Asymmetric editorial spread */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '5fr 7fr',
            gap: '88px',
            alignItems: 'start',
          }}
          className="about-grid"
        >
          {/* ─── Portrait column ──────────────────────────── */}
          <motion.div variants={rise} className="about-portrait">
            <div
              style={{
                position: 'relative',
                aspectRatio: '4 / 5',
                width: '100%',
                maxWidth: '380px',
                background: 'var(--ink-deep)',
                border: '1px solid var(--rule-strong)',
                padding: '14px',
              }}
            >
              <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
                <Image
                  src="/assets/ashok.png"
                  alt="Ashok Kumar Kunchala — Head of Technology at Anvesa"
                  fill
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center 23%',
                    filter: 'grayscale(0.18) contrast(1.02) saturate(0.85)',
                  }}
                  sizes="(max-width: 860px) 90vw, 380px"
                  priority
                />
              </div>
            </div>

            {/* Caption — like magazine credits */}
            <div style={{ marginTop: '18px', maxWidth: '380px' }}>
              <p className="marginalia" style={{ marginBottom: '4px' }}>Plate № I</p>
              <p
                style={{
                  fontFamily: 'var(--display)',
                  fontStyle: 'italic',
                  fontSize: '0.92rem',
                  color: 'var(--bone-muted)',
                  lineHeight: 1.5,
                  fontVariationSettings: '"opsz" 36, "SOFT" 100',
                }}
              >
                Ashok at the practice — Hyderabad, India.
                Photographed in the architect&rsquo;s study, 2025.
              </p>
            </div>
          </motion.div>

          {/* ─── Text column ──────────────────────────────── */}
          <motion.div variants={rise}>
            <p className="lede" style={{ marginBottom: '40px' }}>
              Most people talk about AI. I build it — and then I run it in
              production for enterprise clients across the US, India, and
              Australia.
            </p>

            {[
              {
                drop: 'O',
                rest: `ver the past 13 years, I've gone from writing my first lines of .NET code at Cognizant to leading the full technology function at Anvesa — an AI-native, Azure-powered eDiscovery platform serving 15+ enterprise clients globally.`,
              },
              {
                drop: 'T',
                rest: `hat journey wasn't linear. It was a decade of making hard architectural decisions, rebuilding systems under pressure, learning to lead cross-functional teams, and figuring out what it actually takes to ship intelligent products that work — not in demos, but in production.`,
              },
              {
                drop: 'O',
                rest: `n the AI side — I'm not experimenting. I'm building Agentic AI systems, RAG architectures, and LLM-powered workflows that are live, used daily, and delivering measurable outcomes for real businesses.`,
              },
              {
                drop: 'W',
                rest: `hat drives me is the intersection of deep technical craft and real business impact. I care about unit economics, system reliability, and building things that last — not just what's trending.`,
              },
            ].map((para, i) => (
              <p
                key={i}
                style={{
                  color: 'var(--bone-muted)',
                  fontSize: '1.02rem',
                  lineHeight: 1.85,
                  marginBottom: '22px',
                  maxWidth: '62ch',
                }}
              >
                {i === 0 ? (
                  <>
                    <span
                      style={{
                        fontFamily: 'var(--display)',
                        float: 'left',
                        fontSize: '3.6rem',
                        lineHeight: 0.85,
                        marginRight: '10px',
                        marginTop: '4px',
                        color: 'var(--gold)',
                        fontWeight: 400,
                        fontVariationSettings: '"opsz" 144, "SOFT" 30',
                      }}
                    >
                      {para.drop}
                    </span>
                    {para.rest}
                  </>
                ) : (
                  para.drop + para.rest
                )}
              </p>
            ))}

            {/* Tags reborn as a hairline-bordered ledger */}
            <div
              style={{
                marginTop: '48px',
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '0',
                borderTop: '1px solid var(--rule)',
                borderBottom: '1px solid var(--rule)',
              }}
              className="about-meta"
            >
              {[
                ['Title',     'Head of Technology'],
                ['Role',      'Board Contributor'],
                ['At',        'Anvesa'],
                ['Based',     'Hyderabad, IN'],
              ].map(([label, value], i) => (
                <div
                  key={label}
                  style={{
                    padding: '20px 18px',
                    borderRight: i < 3 ? '1px solid var(--rule)' : '0',
                  }}
                >
                  <div className="marginalia" style={{ marginBottom: '8px', color: 'var(--slate)' }}>
                    {label}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--display)',
                      fontSize: '0.98rem',
                      color: 'var(--bone)',
                      fontVariationSettings: '"opsz" 36',
                    }}
                  >
                    {value}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

    </section>
  )
}
