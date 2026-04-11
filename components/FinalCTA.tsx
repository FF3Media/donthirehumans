'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

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
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'clamp(24px, 3vw, 40px)' }}
      >
        <h2
          id="final-cta-heading"
          style={{
            fontFamily: 'var(--font-bebas)',
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
            maxWidth: '440px',
            lineHeight: 1.7,
          }}
        >
          Book a free 15-minute audit. We&apos;ll show you exactly what an AI agent would do for your DTC brand — no pitch, no pressure.
        </p>

        <a
          href="#pricing"
          aria-label="Book a free audit"
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
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          BOOK A FREE AUDIT →
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
