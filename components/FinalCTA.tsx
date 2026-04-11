'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const auditItems = [
  'We review your current email flows and identify revenue gaps',
  'We audit your SEO and AI search (GEO) visibility vs. competitors',
  'We show you exactly what an agent would do — with specifics, not slides',
  'You decide if you want to move forward. No pressure. No follow-up spam.',
]

export default function FinalCTA() {
  const [hovered, setHovered] = useState(false)

  return (
    <section
      aria-labelledby="final-cta-heading"
      style={{
        minHeight: '100vh',
        backgroundColor: 'var(--color-bg)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(80px, 10vw, 120px) clamp(24px, 5vw, 80px)',
        textAlign: 'center',
        borderTop: '1px solid #1A2422',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'clamp(20px, 3vw, 32px)', maxWidth: '700px' }}
      >
        <h2
          id="final-cta-heading"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(64px, 10vw, 140px)',
            letterSpacing: '0.02em',
            color: 'var(--color-text)',
            textTransform: 'uppercase',
            lineHeight: 0.95,
            margin: 0,
          }}
        >
          READY TO FIRE
          <br />
          YOUR AGENCY?
        </h2>

        <p
          style={{
            fontFamily: 'var(--font-dm-mono)',
            fontSize: '14px',
            color: 'var(--color-muted)',
            maxWidth: '480px',
            lineHeight: 1.7,
          }}
        >
          Book a free 15-minute audit. Here&apos;s exactly what happens on the call:
        </p>

        {/* Audit breakdown */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%', maxWidth: '520px', textAlign: 'left' }}>
          {auditItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
              style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}
            >
              <span style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-dm-mono)', fontSize: '12px', flexShrink: 0, marginTop: '2px' }}>→</span>
              <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '12px', color: 'var(--color-text)', lineHeight: 1.65 }}>{item}</span>
            </motion.div>
          ))}
        </div>

        <a
          href="mailto:audit@frankmedia.ai"
          aria-label="Book a free 15-minute audit"
          style={{
            fontFamily: 'var(--font-dm-mono)',
            fontSize: '13px',
            letterSpacing: '0.1em',
            color: hovered ? '#000' : 'var(--color-accent)',
            border: '1px solid var(--color-accent)',
            background: hovered ? 'var(--color-accent)' : 'transparent',
            padding: '16px 40px',
            cursor: 'pointer',
            textDecoration: 'none',
            transition: 'background 200ms, color 200ms',
            display: 'inline-block',
            marginTop: '8px',
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          BOOK A FREE 15-MINUTE AUDIT →
        </a>

        <p
          style={{
            fontFamily: 'var(--font-dm-mono)',
            fontSize: '11px',
            color: 'var(--color-muted)',
            letterSpacing: '0.05em',
          }}
        >
          Booked by an AI. Audited by an AI. Delivered by an AI.
        </p>
      </motion.div>
    </section>
  )
}
