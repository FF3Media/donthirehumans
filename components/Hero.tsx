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
        padding: 'clamp(100px, 10vw, 140px) clamp(24px, 5vw, 80px) clamp(60px, 8vw, 100px)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Status indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        style={{ position: 'absolute', top: 'clamp(80px, 10vw, 110px)', right: 'clamp(24px, 5vw, 80px)', textAlign: 'right' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '8px' }}>
          <div className="pulse-dot" style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: 'var(--color-accent)', flexShrink: 0 }} />
          <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '11px', color: 'var(--color-text)', letterSpacing: '0.08em' }}>3 AGENTS RUNNING</span>
        </div>
        <div style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '10px', color: 'var(--color-muted)', letterSpacing: '0.1em', marginTop: '4px' }}>SYSTEM ONLINE</div>
      </motion.div>

      {/* Eyebrow */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
        style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: 'clamp(20px, 3vw, 32px)' }}
      >
        <div style={{ width: '24px', height: '1px', backgroundColor: 'var(--color-accent)', flexShrink: 0 }} />
        <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '11px', color: 'var(--color-accent)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
          Frank Media — AI Agents for DTC Brands Doing $1M–$10M
        </span>
      </motion.div>

      {/* Headline — clear, immediate, descriptive */}
      <h1 style={{ margin: 0 }}>
        {['PUSH A BUTTON.', 'RUN YOUR BUSINESS', 'WITH AI AGENTS.'].map((line, i) => (
          <motion.div
            key={line}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.25 + i * 0.12 }}
            style={{
              display: 'block',
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'clamp(40px, 7vw, 100px)',
              lineHeight: 1.0,
              letterSpacing: '-0.02em',
              color: i === 2 ? 'var(--color-accent)' : 'var(--color-text)',
              textTransform: 'uppercase',
            }}
          >
            {line}
          </motion.div>
        ))}
      </h1>

      {/* Subline — tell them exactly what you do */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.55 }}
        style={{
          fontFamily: 'var(--font-dm-mono)',
          fontSize: 'clamp(13px, 1.3vw, 16px)',
          color: 'var(--color-text)',
          maxWidth: '600px',
          lineHeight: 1.75,
          marginTop: 'clamp(20px, 3vw, 36px)',
        }}
      >
        Stop managing people. Stop paying agencies. One click and your AI team — Jeff, Emmy, and Atlas — handles email, SEO, and customer service around the clock.
        <br />
        <span style={{ color: 'var(--color-muted)' }}>Fully managed by Frank Media. Built for DTC brands doing $1M–$10M.</span>
      </motion.p>

      {/* Done-for-you callout */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.7 }}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '10px',
          marginTop: '20px',
          padding: '10px 16px',
          border: '1px solid #1F3330',
          backgroundColor: 'var(--color-surface)',
          borderRadius: '2px',
          alignSelf: 'flex-start',
        }}
      >
        <div className="pulse-dot" style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--color-accent)', flexShrink: 0 }} />
        <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '11px', color: 'var(--color-accent)', letterSpacing: '0.1em' }}>
          WE RUN EVERYTHING. YOU DO NOTHING.
        </span>
      </motion.div>

      {/* CTA row */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.85 }}
        style={{ marginTop: 'clamp(24px, 3vw, 36px)', display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '24px' }}
      >
        <a
          href="#agents"
          aria-label="Meet the agents"
          style={{
            fontFamily: 'var(--font-dm-mono)',
            fontSize: '12px',
            letterSpacing: '0.1em',
            color: 'var(--color-accent)',
            border: '1px solid var(--color-accent)',
            background: 'transparent',
            padding: '14px 28px',
            cursor: 'pointer',
            textDecoration: 'none',
            transition: 'background 200ms, color 200ms',
            display: 'inline-block',
            flexShrink: 0,
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--color-accent)'; e.currentTarget.style.color = '#000' }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--color-accent)' }}
        >
          MEET THE AGENTS →
        </a>

        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
          {['Starts at $750/mo', 'Live in 7 days', 'Cancel anytime'].map((item, i) => (
            <span key={i} style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '11px', color: 'var(--color-muted)', letterSpacing: '0.08em', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ color: 'var(--color-accent)' }}>→</span>{item}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
