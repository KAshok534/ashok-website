'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const stats = [
  { value: '13+', label: 'Years Experience' },
  { value: '15+', label: 'Enterprise Clients' },
  { value: '3', label: 'Countries' },
  { value: '1', label: 'Product Built from Zero' },
]

export default function Hero() {
  const canvasRef = useRef(null)
  const animRef = useRef(null)
  const particlesRef = useRef([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    function initParticles() {
      const count = Math.min(70, Math.floor((canvas.width * canvas.height) / 18000))
      particlesRef.current = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.4 + 0.4,
      }))
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const particles = particlesRef.current
      const maxDist = 140

      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(41, 182, 246, 0.55)'
        ctx.fill()
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < maxDist) {
            const alpha = 0.12 * (1 - dist / maxDist)
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(41, 182, 246, ${alpha})`
            ctx.lineWidth = 0.6
            ctx.stroke()
          }
        }
      }

      animRef.current = requestAnimationFrame(animate)
    }

    resize()
    animate()

    window.addEventListener('resize', resize)
    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animRef.current)
    }
  }, [])

  const scrollTo = (id) => {
    const el = document.querySelector(id)
    if (!el) return
    const navH = 80
    const top = el.getBoundingClientRect().top + window.scrollY - navH
    window.scrollTo({ top, behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: '#050d1a',
        padding: '120px 24px 80px',
      }}
    >
      {/* Canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          opacity: 0.65,
        }}
      />

      {/* Radial gradient overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at center top, rgba(41,182,246,0.06) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '820px',
          textAlign: 'center',
          width: '100%',
        }}
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontFamily: '"Courier New", monospace',
            fontSize: '0.8rem',
            letterSpacing: '0.2em',
            color: '#29b6f6',
            textTransform: 'uppercase',
            marginBottom: '20px',
          }}
        >
          Technology Leader &nbsp;·&nbsp; Enterprise AI Architect
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            fontFamily: 'Georgia, serif',
            fontSize: 'clamp(2.6rem, 7vw, 5rem)',
            fontWeight: 700,
            color: '#ffffff',
            marginBottom: '24px',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
          }}
        >
          Ashok Kumar Kunchala
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          style={{
            fontSize: 'clamp(1.1rem, 3vw, 1.45rem)',
            color: '#90caf9',
            fontFamily: 'Georgia, serif',
            fontStyle: 'italic',
            marginBottom: '16px',
            lineHeight: 1.4,
          }}
        >
          Building Production-Ready AI Systems for Enterprise
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{
            fontSize: '0.95rem',
            color: '#546e7a',
            fontFamily: '"Courier New", monospace',
            letterSpacing: '0.05em',
            marginBottom: '44px',
          }}
        >
          13+ years &nbsp;·&nbsp; 15+ enterprise clients &nbsp;·&nbsp; US · India · Australia
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <button
            onClick={() => scrollTo('#work')}
            style={{
              padding: '13px 32px',
              background: '#29b6f6',
              color: '#050d1a',
              border: 'none',
              borderRadius: '6px',
              fontWeight: 700,
              fontSize: '0.95rem',
              cursor: 'pointer',
              fontFamily: 'system-ui, sans-serif',
              letterSpacing: '0.01em',
              transition: 'background 0.2s, transform 0.2s',
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#0090d4'
              e.target.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
              e.target.style.background = '#29b6f6'
              e.target.style.transform = 'translateY(0)'
            }}
          >
            View My Work
          </button>
          <button
            onClick={() => scrollTo('#contact')}
            style={{
              padding: '13px 32px',
              background: 'transparent',
              color: '#29b6f6',
              border: '1px solid #29b6f6',
              borderRadius: '6px',
              fontWeight: 600,
              fontSize: '0.95rem',
              cursor: 'pointer',
              fontFamily: 'system-ui, sans-serif',
              letterSpacing: '0.01em',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(41,182,246,0.08)'
              e.target.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'transparent'
              e.target.style.transform = 'translateY(0)'
            }}
          >
            Let&apos;s Connect
          </button>
        </motion.div>
      </div>

      {/* Stats row */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.85 }}
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1px',
          width: '100%',
          maxWidth: '820px',
          marginTop: '80px',
          background: 'rgba(41, 182, 246, 0.08)',
          border: '1px solid rgba(41, 182, 246, 0.12)',
          borderRadius: '12px',
          overflow: 'hidden',
        }}
        className="stats-grid"
      >
        {stats.map((stat, i) => (
          <div
            key={i}
            style={{
              padding: '28px 20px',
              textAlign: 'center',
              background: 'rgba(10, 22, 40, 0.6)',
              borderRight: i < stats.length - 1 ? '1px solid rgba(41,182,246,0.1)' : 'none',
            }}
          >
            <div
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: '2rem',
                fontWeight: 700,
                color: '#29b6f6',
                marginBottom: '4px',
                lineHeight: 1,
              }}
            >
              {stat.value}
            </div>
            <div
              style={{
                fontSize: '0.78rem',
                color: '#546e7a',
                fontFamily: '"Courier New", monospace',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
              }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </motion.div>

      <style>{`
        @media (max-width: 600px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  )
}
