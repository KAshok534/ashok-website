'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

export default function About() {
  return (
    <section
      id="about"
      style={{
        background: '#070e1c',
        padding: '110px 24px',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{
            fontFamily: 'Georgia, serif',
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
            color: '#ffffff',
            marginBottom: '60px',
            textAlign: 'center',
          }}
        >
          About Me
        </motion.h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.6fr',
            gap: '64px',
            alignItems: 'center',
          }}
          className="about-grid"
        >
          {/* Photo */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <div
              style={{
                position: 'relative',
                width: '280px',
                height: '280px',
                borderRadius: '50%',
                boxShadow: '0 0 0 3px rgba(41,182,246,0.4), 0 0 40px rgba(41,182,246,0.15)',
                overflow: 'hidden',
                background: '#0a1628',
                flexShrink: 0,
              }}
            >
              <Image
                src="/assets/ashok.png"
                alt="Ashok Kumar Kunchala — Head of Technology at Anvesa"
                fill
                style={{ objectFit: 'cover' }}
                sizes="280px"
                priority
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            <p
              style={{
                fontSize: '1.2rem',
                color: '#29b6f6',
                fontFamily: 'Georgia, serif',
                fontStyle: 'italic',
                marginBottom: '28px',
                lineHeight: 1.5,
              }}
            >
              Most people talk about AI. I build it — and then I run it in production for enterprise clients across the US, India, and Australia.
            </p>

            {[
              `Over the past 13 years, I've gone from writing my first lines of .NET code at Cognizant to leading the full technology function at Anvesa — an AI-native, Azure-powered eDiscovery platform serving 15+ enterprise clients globally.`,
              `That journey wasn't linear. It was a decade of making hard architectural decisions, rebuilding systems under pressure, learning to lead cross-functional teams, and figuring out what it actually takes to ship intelligent products that work — not in demos, but in production.`,
              `On the AI side — I'm not experimenting. I'm building Agentic AI systems, RAG architectures, and LLM-powered workflows that are live, used daily, and delivering measurable outcomes for real businesses.`,
              `What drives me is the intersection of deep technical craft and real business impact. I care about unit economics, system reliability, and building things that last — not just what's trending.`,
            ].map((para, i) => (
              <p
                key={i}
                style={{
                  color: '#90caf9',
                  fontSize: '1rem',
                  lineHeight: 1.85,
                  marginBottom: '20px',
                  fontFamily: 'system-ui, sans-serif',
                }}
              >
                {para}
              </p>
            ))}

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '32px' }}>
              {['Head of Technology', 'Board Contributor', 'Anvesa', 'Hyderabad, India'].map((tag) => (
                <span
                  key={tag}
                  style={{
                    padding: '6px 14px',
                    border: '1px solid rgba(41,182,246,0.25)',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    color: '#90caf9',
                    fontFamily: '"Courier New", monospace',
                    letterSpacing: '0.03em',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  )
}
