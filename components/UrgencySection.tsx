'use client'

import { motion } from 'framer-motion'

const stats = [
  { value: '68%', label: 'of DTC brands are already using AI in operations' },
  { value: '3x', label: 'faster execution than a human team' },
  { value: '$0', label: 'in overhead while your competitors cut costs' },
]

export default function UrgencySection() {
  return (
    <section
      aria-label="Urgency"
      style={{
        backgroundColor: '#0A0A0A',
        padding: 'clamp(80px, 10vw, 120px) clamp(24px, 5vw, 80px)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle green glow */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '700px',
        height: '400px',
        background: 'radial-gradient(ellipse, rgba(36,138,61,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative' }}>

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: 'clamp(32px, 4vw, 48px)' }}
        >
          <span style={{
            display: 'inline-block',
            fontFamily: 'var(--font-display)',
            fontWeight: 500,
            fontSize: '12px',
            color: 'var(--color-accent)',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: '24px',
          }}>
            The shift is already happening
          </span>

          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: 'clamp(36px, 6vw, 80px)',
            letterSpacing: '-0.04em',
            lineHeight: 1,
            color: '#fff',
            marginBottom: '24px',
          }}>
            AI is making your competitors{' '}
            <span style={{ color: 'var(--color-accent)' }}>lethally lean.</span>
          </h2>

          <p style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 400,
            fontSize: 'clamp(16px, 1.6vw, 20px)',
            color: 'rgba(255,255,255,0.5)',
            lineHeight: 1.6,
            letterSpacing: '-0.01em',
            maxWidth: '600px',
            margin: '0 auto',
          }}>
            While you manage a team, pay salaries, and deal with turnover, the brand next to you is running leaner, faster, and cheaper. Every day you wait is a day they pull ahead.
          </p>
        </motion.div>

        {/* Stats */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 'clamp(16px, 2vw, 24px)',
          marginBottom: 'clamp(48px, 6vw, 72px)',
        }}>
          {stats.map((stat, i) => (
            <motion.div
              key={stat.value}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                backgroundColor: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '16px',
                padding: 'clamp(20px, 2.5vw, 32px)',
                textAlign: 'center',
              }}
            >
              <div style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: 'clamp(36px, 4vw, 52px)',
                letterSpacing: '-0.04em',
                color: 'var(--color-accent)',
                lineHeight: 1,
                marginBottom: '10px',
              }}>
                {stat.value}
              </div>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 400,
                fontSize: 'clamp(12px, 1.1vw, 14px)',
                color: 'rgba(255,255,255,0.45)',
                letterSpacing: '-0.01em',
                lineHeight: 1.4,
              }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{ textAlign: 'center' }}
        >
          <a
            href="#pricing"
            style={{
              display: 'inline-block',
              fontFamily: 'var(--font-display)',
              fontWeight: 600,
              fontSize: '16px',
              letterSpacing: '-0.01em',
              color: '#fff',
              backgroundColor: 'var(--color-accent)',
              padding: '16px 36px',
              borderRadius: '980px',
              textDecoration: 'none',
            }}
          >
            Get your agents today
          </a>
          <p style={{
            fontFamily: 'var(--font-display)',
            fontSize: '13px',
            color: 'rgba(255,255,255,0.3)',
            marginTop: '14px',
            letterSpacing: '-0.01em',
          }}>
            Starts at $1,200/mo. Live in 7 days.
          </p>
        </motion.div>

      </div>
    </section>
  )
}
