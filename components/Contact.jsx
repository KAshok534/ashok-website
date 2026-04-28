'use client'

/*
 * Contact — editorial correspondence form.
 * Inputs lose the rounded card look — underlined hairline fields instead.
 * Asymmetric grid: address card on left (like a letterhead), form on right.
 */

import { useState } from 'react'
import { motion } from 'framer-motion'

const contactInfo = [
  { label: 'Correspondence', value: 'ashok@ashokkunchala.com', href: 'mailto:ashok@ashokkunchala.com' },
  { label: 'Profile',         value: 'linkedin.com/in/ashok-kumar-kunchala', href: 'https://linkedin.com/in/ashok-kumar-kunchala' },
  { label: 'Practising from', value: 'Hyderabad, India · serving globally', href: null },
  { label: 'Reply within',    value: 'Twenty-four hours, typically', href: null },
]

const stagger = { visible: { transition: { staggerChildren: 0.08 } } }
const rise = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.2, 0.8, 0.2, 1] } },
}

export default function Contact() {
  const [status, setStatus] = useState('idle')
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })

  const handleChange = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://formspree.io/f/xlgonjal', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('sent')
        setForm({ name: '', email: '', company: '', message: '' })
      } else setStatus('error')
    } catch {
      setStatus('error')
    }
  }

  // Underlined hairline field
  const fieldLabelStyle = {
    display: 'block',
    fontFamily: 'var(--mono)',
    fontSize: '0.7rem',
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    color: 'var(--slate)',
    marginBottom: '10px',
  }
  const fieldStyle = {
    width: '100%',
    padding: '10px 0',
    background: 'transparent',
    border: 'none',
    borderBottom: '1px solid var(--rule-strong)',
    color: 'var(--bone)',
    fontFamily: 'var(--body)',
    fontSize: '1rem',
    outline: 'none',
    transition: 'border-color 240ms ease',
  }

  return (
    <section
      id="contact"
      style={{
        background: 'var(--ink-warm)',
        padding: 'var(--section-y) var(--section-x) calc(var(--section-y) - 30px)',
      }}
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        style={{ maxWidth: '1240px', margin: '0 auto' }}
      >
        <motion.div variants={rise} style={{ marginBottom: '64px' }}>
          <div className="eyebrow" style={{ marginBottom: '14px' }}>§ 07 — Correspondence</div>
          <h2
            style={{
              fontSize: 'clamp(2.4rem, 5.5vw, 4rem)',
              fontWeight: 300,
              letterSpacing: '-0.025em',
              lineHeight: 1.04,
              maxWidth: '14ch',
              fontVariationSettings: '"opsz" 144, "SOFT" 30',
              marginBottom: '14px',
            }}
          >
            Let&rsquo;s build{' '}
            <span style={{ fontStyle: 'italic', color: 'var(--gold)', fontVariationSettings: '"opsz" 144, "SOFT" 100' }}>
              something.
            </span>
          </h2>
          <p
            style={{
              fontSize: '1.05rem',
              color: 'var(--bone-muted)',
              maxWidth: '54ch',
            }}
          >
            Open to consulting, advisory, and strategic conversations globally.
          </p>
        </motion.div>

        <hr className="rule" style={{ marginBottom: '64px' }} />

        <div
          className="contact-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.6fr',
            gap: '88px',
            alignItems: 'start',
          }}
        >
          {/* Letterhead */}
          <motion.aside variants={rise}>
            <div className="marginalia" style={{ marginBottom: '24px', color: 'var(--slate)' }}>
              The studio
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {contactInfo.map((item) => (
                <li
                  key={item.label}
                  style={{
                    padding: '20px 0',
                    borderTop: '1px solid var(--rule)',
                  }}
                >
                  <div className="marginalia" style={{ marginBottom: '6px', color: 'var(--slate)' }}>
                    {item.label}
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="editorial-link"
                      style={{
                        fontFamily: 'var(--display)',
                        fontStyle: item.label === 'Correspondence' ? 'italic' : 'normal',
                        fontSize: '1.05rem',
                        color: 'var(--bone)',
                        fontVariationSettings: '"opsz" 36, "SOFT" 100',
                      }}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span
                      style={{
                        fontFamily: 'var(--display)',
                        fontSize: '1.05rem',
                        color: 'var(--bone)',
                        fontVariationSettings: '"opsz" 36',
                      }}
                    >
                      {item.value}
                    </span>
                  )}
                </li>
              ))}
              <li style={{ borderTop: '1px solid var(--rule)' }} />
            </ul>
          </motion.aside>

          {/* Form */}
          <motion.div variants={rise}>
            {status === 'sent' ? (
              <div
                style={{
                  padding: '48px 40px',
                  border: '1px solid var(--rule-strong)',
                  textAlign: 'left',
                }}
              >
                <div
                  className="eyebrow"
                  style={{ color: 'var(--gold)', marginBottom: '14px' }}
                >
                  Received · Thank you
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--display)',
                    fontSize: '2rem',
                    fontWeight: 300,
                    color: 'var(--bone)',
                    marginBottom: '14px',
                    fontVariationSettings: '"opsz" 96',
                    letterSpacing: '-0.02em',
                  }}
                >
                  Your message has{' '}
                  <span style={{ fontStyle: 'italic', color: 'var(--gold)' }}>arrived.</span>
                </h3>
                <p style={{ color: 'var(--bone-muted)', maxWidth: '46ch', lineHeight: 1.7 }}>
                  Thanks for reaching out. I&rsquo;ll get back to you within twenty-four
                  hours, typically sooner.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}
              >
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '32px',
                  }}
                  className="form-row"
                >
                  <div>
                    <label htmlFor="name" style={fieldLabelStyle}>
                      Name <span style={{ color: 'var(--gold)' }}>*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      style={fieldStyle}
                      onFocus={(e) => (e.target.style.borderBottomColor = 'var(--gold)')}
                      onBlur={(e) => (e.target.style.borderBottomColor = 'var(--rule-strong)')}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" style={fieldLabelStyle}>
                      Email <span style={{ color: 'var(--gold)' }}>*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="you@company.com"
                      style={fieldStyle}
                      onFocus={(e) => (e.target.style.borderBottomColor = 'var(--gold)')}
                      onBlur={(e) => (e.target.style.borderBottomColor = 'var(--rule-strong)')}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" style={fieldLabelStyle}>
                    Company <span style={{ color: 'var(--whisper)' }}>(optional)</span>
                  </label>
                  <input
                    id="company"
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Your company"
                    style={fieldStyle}
                    onFocus={(e) => (e.target.style.borderBottomColor = 'var(--gold)')}
                    onBlur={(e) => (e.target.style.borderBottomColor = 'var(--rule-strong)')}
                  />
                </div>

                <div>
                  <label htmlFor="message" style={fieldLabelStyle}>
                    Message <span style={{ color: 'var(--gold)' }}>*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell me what you&rsquo;re building, or what you&rsquo;d like to discuss…"
                    rows={5}
                    style={{ ...fieldStyle, resize: 'vertical', minHeight: '120px', lineHeight: 1.6 }}
                    onFocus={(e) => (e.target.style.borderBottomColor = 'var(--gold)')}
                    onBlur={(e) => (e.target.style.borderBottomColor = 'var(--rule-strong)')}
                  />
                </div>

                {status === 'error' && (
                  <p
                    style={{
                      fontFamily: 'var(--mono)',
                      fontSize: '0.78rem',
                      letterSpacing: '0.05em',
                      color: '#cf6e6e',
                    }}
                  >
                    Something went wrong. Please email me directly at ashok@ashokkunchala.com
                  </p>
                )}

                <div style={{ marginTop: '12px' }}>
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="btn-primary"
                    style={{
                      opacity: status === 'sending' ? 0.5 : 1,
                      cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                    }}
                  >
                    <span>{status === 'sending' ? 'Sending…' : 'Send message'}</span>
                    <span className="arrow">→</span>
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </motion.div>

    </section>
  )
}
