'use client'

/*
 * Services — three offerings as numbered editorial entries, not card grid.
 * Each: large numeral, italic kicker, prose body, hairline rule, ghost CTA.
 */

import { motion } from 'framer-motion'

const services = [
  {
    number: '01',
    kicker: 'Architecture & Build',
    title: 'AI systems, designed and shipped to production.',
    description:
      'Design and build production-grade RAG pipelines, Agentic AI workflows, and LLM-powered enterprise applications on Azure. From architecture to deployment — the whole stack, hand-led.',
    cta: 'Discuss a project',
  },
  {
    number: '02',
    kicker: 'Audit & Improvement',
    title: 'Already-running systems, made faster, cheaper, more reliable.',
    description:
      'Audit, optimize, and scale existing AI infrastructure. Performance bottlenecks. Cost overruns. Reliability gaps. Brought from "works in demo" to "holds up under enterprise load."',
    cta: 'Request an audit',
  },
  {
    number: '03',
    kicker: 'Advisory',
    title: 'Strategic counsel for technology leaders.',
    description:
      'For CTOs and engineering leaders adopting enterprise AI — architecture reviews, team guidance, and roadmap planning. Pragmatic, board-aware, grounded in production reality.',
    cta: 'Begin a conversation',
  },
]

const stagger = { visible: { transition: { staggerChildren: 0.10 } } }
const rise = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.2, 0.8, 0.2, 1] } },
}

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
        <motion.div variants={rise} style={{ marginBottom: '24px' }}>
          <div className="eyebrow" style={{ marginBottom: '14px' }}>§ 05 — Working together</div>
          <h2
            style={{
              fontSize: 'clamp(2.2rem, 5vw, 3.6rem)',
              fontWeight: 300,
              letterSpacing: '-0.025em',
              lineHeight: 1.05,
              maxWidth: '20ch',
              fontVariationSettings: '"opsz" 144, "SOFT" 30',
              marginBottom: '14px',
            }}
          >
            Three ways to{' '}
            <span style={{ fontStyle: 'italic', color: 'var(--gold)', fontVariationSettings: '"opsz" 144, "SOFT" 100' }}>
              work with me.
            </span>
          </h2>
          <p
            style={{
              fontSize: '1.02rem',
              color: 'var(--bone-muted)',
              maxWidth: '54ch',
              marginBottom: '64px',
            }}
          >
            Available for select consulting and advisory engagements globally.
            Scope and rate are negotiated per engagement — let&rsquo;s talk first.
          </p>
        </motion.div>

        <hr className="rule" />

        {/* Three editorial entries — full width, hairline-separated */}
        <div>
          {services.map((svc) => (
            <motion.div
              key={svc.number}
              variants={rise}
              className="service-row"
              style={{
                display: 'grid',
                gridTemplateColumns: '120px 1fr 220px',
                gap: '40px',
                padding: '48px 0',
                borderBottom: '1px solid var(--rule)',
                alignItems: 'start',
              }}
            >
              {/* Numeral */}
              <div
                style={{
                  fontFamily: 'var(--display)',
                  fontSize: 'clamp(2.6rem, 5vw, 4rem)',
                  fontWeight: 300,
                  color: 'var(--gold)',
                  lineHeight: 1,
                  letterSpacing: '-0.04em',
                  fontVariationSettings: '"opsz" 144, "SOFT" 30',
                }}
              >
                {svc.number}
              </div>

              {/* Body */}
              <div>
                <p
                  className="marginalia"
                  style={{ color: 'var(--slate)', marginBottom: '12px' }}
                >
                  {svc.kicker}
                </p>
                <h3
                  style={{
                    fontFamily: 'var(--display)',
                    fontSize: 'clamp(1.4rem, 2.6vw, 1.85rem)',
                    fontWeight: 400,
                    color: 'var(--bone)',
                    lineHeight: 1.2,
                    marginBottom: '18px',
                    fontVariationSettings: '"opsz" 96',
                    letterSpacing: '-0.018em',
                    maxWidth: '24ch',
                  }}
                >
                  {svc.title}
                </h3>
                <p
                  style={{
                    fontSize: '1rem',
                    color: 'var(--bone-muted)',
                    lineHeight: 1.8,
                    maxWidth: '56ch',
                  }}
                >
                  {svc.description}
                </p>
              </div>

              {/* CTA */}
              <div className="service-cta">
                <button
                  onClick={scrollToContact}
                  className="btn-ghost"
                  style={{ fontSize: '0.78rem' }}
                >
                  <span>{svc.cta}</span>
                  <span className="arrow" style={{ display: 'inline-block', transition: 'transform 240ms ease' }}>→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

    </section>
  )
}
