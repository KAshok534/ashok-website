'use client'

/*
 * Hero — Editorial Executive direction.
 * No particle canvas. The hero IS the typography.
 * Asymmetric grid with marginalia on left, primary type column on right.
 * One opening reveal — staggered, then everything settles.
 */

import { motion } from 'framer-motion'

const stats = [
  { value: '13+', label: 'Years in practice' },
  { value: '15+', label: 'Enterprise clients' },
  { value: '03',  label: 'Continents served' },
  { value: '01',  label: 'Platform built ground-up' },
]

const stagger = {
  visible: { transition: { staggerChildren: 0.10, delayChildren: 0.05 } },
}
const rise = {
  hidden:  { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.2, 0.8, 0.2, 1] } },
}
const drawRule = {
  hidden:  { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 1.1, ease: [0.7, 0, 0.3, 1], delay: 0.2 } },
}

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.querySelector(id)
    if (!el) return
    const top = el.getBoundingClientRect().top + window.scrollY - 80
    window.scrollTo({ top, behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '100vh',
        background: 'var(--ink)',
        padding: 'calc(var(--section-y) + 60px) var(--section-x) var(--section-y)',
        overflow: 'hidden',
      }}
    >
      {/* Soft warm aurora — barely there, replaces particle canvas */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: '-30%',
          left: '-10%',
          width: '70%',
          height: '90%',
          background: 'radial-gradient(ellipse at center, rgba(201,168,106,0.07), transparent 60%)',
          filter: 'blur(40px)',
          pointerEvents: 'none',
        }}
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        style={{
          position: 'relative',
          maxWidth: '1240px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '180px 1fr',
          gap: '48px',
          alignItems: 'start',
        }}
        className="hero-grid"
      >
        {/* ─── Marginalia column ─────────────────────────────────── */}
        <motion.aside
          variants={rise}
          style={{ paddingTop: '14px' }}
          className="hero-marginalia"
        >
          <div className="eyebrow" style={{ marginBottom: '14px' }}>§ 00 · Index</div>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[
              ['I',   'Practice'],
              ['II',  'Career'],
              ['III', 'Anvesa'],
              ['IV',  'Method'],
              ['V',   'Correspondence'],
            ].map(([num, label]) => (
              <li key={num} className="marginalia" style={{ display: 'flex', gap: '12px' }}>
                <span style={{ color: 'var(--whisper)', minWidth: '20px' }}>{num}</span>
                <span>{label}</span>
              </li>
            ))}
          </ul>
        </motion.aside>

        {/* ─── Primary type column ───────────────────────────────── */}
        <div>
          <motion.div variants={rise} className="eyebrow" style={{ marginBottom: '36px' }}>
            Hyderabad · Practising globally · Est. 2013
          </motion.div>

          {/* Name — anchored, restrained weight, soft optical axis */}
          <motion.h1
            variants={rise}
            style={{
              fontSize: 'clamp(3rem, 8.5vw, 7.4rem)',
              fontWeight: 300,
              lineHeight: 0.94,
              letterSpacing: '-0.035em',
              color: 'var(--bone)',
              marginBottom: '8px',
              fontVariationSettings: '"opsz" 144, "SOFT" 30',
            }}
          >
            Ashok&nbsp;Kumar
            <br />
            <span
              style={{
                fontStyle: 'italic',
                fontWeight: 350,
                color: 'var(--bone-muted)',
                fontVariationSettings: '"opsz" 144, "SOFT" 100',
              }}
            >
              Kunchala.
            </span>
          </motion.h1>

          {/* Animated hairline */}
          <motion.div
            variants={drawRule}
            style={{
              transformOrigin: 'left center',
              height: '1px',
              background: 'var(--rule-strong)',
              margin: '40px 0 36px',
              maxWidth: '480px',
            }}
          />

          {/* Lede — what he does, in editorial voice */}
          <motion.p
            variants={rise}
            className="lede"
            style={{ maxWidth: '680px', marginBottom: '32px' }}
          >
            Technology leader, enterprise AI architect — building
            <span style={{ color: 'var(--gold)', fontStyle: 'normal' }}> production </span>
            systems that hold up under real load, not just demos.
          </motion.p>

          {/* Supporting — tags-as-prose */}
          <motion.p
            variants={rise}
            style={{
              fontFamily: 'var(--mono)',
              fontSize: '0.78rem',
              letterSpacing: '0.08em',
              color: 'var(--slate)',
              marginBottom: '54px',
              textTransform: 'uppercase',
            }}
          >
            Head of Technology, Anvesa &nbsp;·&nbsp; Board contributor &nbsp;·&nbsp; 13 yrs in practice
          </motion.p>

          {/* CTAs — ghost & primary, not solid blocks */}
          <motion.div variants={rise} style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', marginBottom: '90px' }}>
            <button onClick={() => scrollTo('#work')} className="btn-primary">
              <span>Read the work</span>
              <span className="arrow">→</span>
            </button>
            <button onClick={() => scrollTo('#contact')} className="btn-ghost">
              <span>· Begin a conversation</span>
            </button>
          </motion.div>

          {/* Stats — set as a tabular figure ledger, no card boxes */}
          <motion.dl
            variants={rise}
            className="hero-stats"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '0',
              borderTop: '1px solid var(--rule)',
              borderBottom: '1px solid var(--rule)',
            }}
          >
            {stats.map((s, i) => (
              <div
                key={s.label}
                style={{
                  padding: '24px 20px 22px',
                  borderRight: i < stats.length - 1 ? '1px solid var(--rule)' : '0',
                }}
              >
                <dt
                  className="marginalia"
                  style={{ marginBottom: '12px', color: 'var(--slate)' }}
                >
                  № {String(i + 1).padStart(2, '0')}
                </dt>
                <dd
                  style={{
                    fontFamily: 'var(--display)',
                    fontWeight: 300,
                    fontSize: 'clamp(1.8rem, 3.2vw, 2.4rem)',
                    color: 'var(--bone)',
                    lineHeight: 1,
                    marginBottom: '8px',
                    fontVariationSettings: '"opsz" 96',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {s.value}
                </dd>
                <dd
                  style={{
                    fontFamily: 'var(--body)',
                    fontSize: '0.82rem',
                    color: 'var(--bone-muted)',
                    fontWeight: 400,
                    letterSpacing: '0.005em',
                  }}
                >
                  {s.label}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </motion.div>

    </section>
  )
}
