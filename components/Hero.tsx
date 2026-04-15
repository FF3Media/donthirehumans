'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section
      aria-label="Hero"
      style={{
        minHeight: '100vh',
        backgroundColor: 'var(--color-bg)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: 'clamp(120px, 12vw, 160px) clamp(24px, 5vw, 80px) clamp(80px, 10vw, 120px)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle glow — light mode */}
      <div style={{
        position: 'absolute',
        top: '40%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '700px',
        height: '700px',
        background: 'radial-gradient(circle, rgba(36,138,61,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Headline */}
      <h1 style={{ margin: 0, maxWidth: '960px' }}>
        {['AI Agents that power', 'your business.'].map((line, i) => (
          <motion.div
            key={line}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 + i * 0.1 }}
            style={{
              display: 'block',
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 'clamp(52px, 8.5vw, 120px)',
              lineHeight: 1.0,
              letterSpacing: '-0.04em',
              color: i === 1 ? 'var(--color-accent)' : 'var(--color-text)',
            }}
          >
            {line}
          </motion.div>
        ))}
      </h1>

      {/* Zero salaries tag */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.38 }}
        style={{ marginTop: '16px' }}
      >
        <span style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 600,
          fontSize: 'clamp(18px, 2.5vw, 28px)',
          color: 'var(--color-muted)',
          letterSpacing: '-0.02em',
        }}>
          Zero salaries.
        </span>
      </motion.div>

      {/* Subline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.5 }}
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 400,
          fontSize: 'clamp(16px, 1.6vw, 20px)',
          color: 'var(--color-muted)',
          maxWidth: '540px',
          lineHeight: 1.6,
          marginTop: 'clamp(16px, 2.5vw, 28px)',
          letterSpacing: '-0.01em',
        }}
      >
        AI Agents that work 24/7. No sick days. No holidays. No slack messages. Fully managed by Frank Media. You do nothing.
      </motion.p>

      {/* CTA row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.56 }}
        style={{ marginTop: 'clamp(28px, 4vw, 44px)', display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}
      >
        <a
          href="#agents"
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 500,
            fontSize: '16px',
            letterSpacing: '-0.01em',
            color: '#fff',
            backgroundColor: 'var(--color-accent)',
            border: 'none',
            padding: '16px 32px',
            borderRadius: '980px',
            cursor: 'pointer',
            textDecoration: 'none',
            transition: 'opacity 200ms',
            display: 'inline-block',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.85' }}
          onMouseLeave={(e) => { e.currentTarget.style.opacity = '1' }}
        >
          Meet the Agents
        </a>
        <a
          href="/contact"
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 500,
            fontSize: '16px',
            letterSpacing: '-0.01em',
            color: 'var(--color-text)',
            backgroundColor: 'rgba(0,0,0,0.06)',
            border: 'none',
            padding: '16px 32px',
            borderRadius: '980px',
            cursor: 'pointer',
            textDecoration: 'none',
            transition: 'background 200ms',
            display: 'inline-block',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.1)' }}
          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.06)' }}
        >
          Book Free Audit
        </a>
      </motion.div>

      {/* Social proof */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.72 }}
        style={{ display: 'flex', alignItems: 'center', gap: '28px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '24px' }}
      >
        {['Starts at $750/mo', 'Live in 7 days', 'Cancel anytime'].map((item, i) => (
          <span key={i} style={{ fontFamily: 'var(--font-display)', fontSize: '12px', color: 'var(--color-muted)', letterSpacing: '0.02em' }}>
            {item}
          </span>
        ))}
      </motion.div>
    </section>
  )
}
