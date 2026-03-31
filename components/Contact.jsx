'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const contactInfo = [
  {
    label: 'Email',
    value: 'ashok@ashokkunchala.com',
    href: 'mailto:ashok@ashokkunchala.com',
    icon: '✉',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/ashok-kumar-kunchala',
    href: 'https://linkedin.com/in/ashok-kumar-kunchala',
    icon: '⟶',
  },
  {
    label: 'Location',
    value: 'Hyderabad, India · Available globally',
    href: null,
    icon: '◎',
  },
  {
    label: 'Response time',
    value: 'Usually within 24 hours',
    href: null,
    icon: '◷',
  },
]

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      // TODO: Replace YOUR_FORM_ID with your Formspree form ID from https://formspree.io
      const res = await fetch('https://formspree.io/f/xlgonjal', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('sent')
        setForm({ name: '', email: '', company: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    background: 'rgba(10, 22, 40, 0.8)',
    border: '1px solid rgba(41, 182, 246, 0.15)',
    borderRadius: '8px',
    color: '#ffffff',
    fontSize: '0.95rem',
    fontFamily: 'system-ui, sans-serif',
    outline: 'none',
    transition: 'border-color 0.2s',
  }

  return (
    <section
      id="contact"
      style={{
        background: '#070e1c',
        padding: '110px 24px 80px',
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
            Get in Touch
          </p>
          <h2
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
              color: '#ffffff',
              marginBottom: '12px',
            }}
          >
            Let&apos;s Build Something
          </h2>
          <p
            style={{
              fontSize: '1rem',
              color: '#546e7a',
              fontFamily: 'system-ui, sans-serif',
            }}
          >
            Open to consulting, advisory, and strategic conversations globally.
          </p>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.4fr',
            gap: '60px',
            alignItems: 'start',
          }}
          className="contact-grid"
        >
          {/* Info column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              {contactInfo.map((item) => (
                <div key={item.label} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <span
                    style={{
                      fontSize: '1rem',
                      color: '#29b6f6',
                      width: '20px',
                      flexShrink: 0,
                      marginTop: '2px',
                    }}
                  >
                    {item.icon}
                  </span>
                  <div>
                    <div
                      style={{
                        fontFamily: '"Courier New", monospace',
                        fontSize: '0.7rem',
                        letterSpacing: '0.1em',
                        color: '#546e7a',
                        textTransform: 'uppercase',
                        marginBottom: '4px',
                      }}
                    >
                      {item.label}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        style={{
                          color: '#90caf9',
                          fontSize: '0.95rem',
                          textDecoration: 'none',
                          fontFamily: 'system-ui, sans-serif',
                          transition: 'color 0.2s',
                        }}
                        onMouseEnter={(e) => (e.target.style.color = '#29b6f6')}
                        onMouseLeave={(e) => (e.target.style.color = '#90caf9')}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span
                        style={{
                          color: '#90caf9',
                          fontSize: '0.95rem',
                          fontFamily: 'system-ui, sans-serif',
                        }}
                      >
                        {item.value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {status === 'sent' ? (
              <div
                style={{
                  background: 'rgba(41, 182, 246, 0.08)',
                  border: '1px solid rgba(41, 182, 246, 0.25)',
                  borderRadius: '12px',
                  padding: '40px',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: '2rem', marginBottom: '16px' }}>✓</div>
                <h3
                  style={{
                    fontFamily: 'Georgia, serif',
                    fontSize: '1.4rem',
                    color: '#ffffff',
                    marginBottom: '12px',
                  }}
                >
                  Message sent.
                </h3>
                <p style={{ color: '#90caf9', fontFamily: 'system-ui, sans-serif', fontSize: '0.95rem' }}>
                  Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="form-row">
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', color: '#90caf9', fontFamily: '"Courier New", monospace', letterSpacing: '0.05em', marginBottom: '8px' }}>
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = 'rgba(41,182,246,0.5)')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(41,182,246,0.15)')}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', color: '#90caf9', fontFamily: '"Courier New", monospace', letterSpacing: '0.05em', marginBottom: '8px' }}>
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = 'rgba(41,182,246,0.5)')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(41,182,246,0.15)')}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: '#90caf9', fontFamily: '"Courier New", monospace', letterSpacing: '0.05em', marginBottom: '8px' }}>
                    Company (optional)
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Your company"
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = 'rgba(41,182,246,0.5)')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(41,182,246,0.15)')}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: '#90caf9', fontFamily: '"Courier New", monospace', letterSpacing: '0.05em', marginBottom: '8px' }}>
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell me about your project or what you'd like to discuss..."
                    rows={6}
                    style={{ ...inputStyle, resize: 'vertical', minHeight: '140px' }}
                    onFocus={(e) => (e.target.style.borderColor = 'rgba(41,182,246,0.5)')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(41,182,246,0.15)')}
                  />
                </div>

                {status === 'error' && (
                  <p style={{ color: '#ef5350', fontSize: '0.85rem', fontFamily: 'system-ui, sans-serif' }}>
                    Something went wrong. Please email me directly at ashok@ashokkunchala.com
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  style={{
                    padding: '14px 28px',
                    background: status === 'sending' ? 'rgba(41,182,246,0.5)' : '#29b6f6',
                    color: '#050d1a',
                    border: 'none',
                    borderRadius: '8px',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                    fontFamily: 'system-ui, sans-serif',
                    transition: 'all 0.2s',
                    alignSelf: 'flex-start',
                  }}
                  onMouseEnter={(e) => {
                    if (status !== 'sending') e.target.style.background = '#0090d4'
                  }}
                  onMouseLeave={(e) => {
                    if (status !== 'sending') e.target.style.background = '#29b6f6'
                  }}
                >
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
