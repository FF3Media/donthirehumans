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
        style={{
          position: 'absolute',
          top: 'clamp(80px, 10vw, 110px)',
          right: 'clamp(24px, 5vw, 80px)',
          textAlign: 'right',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '8px' }}>
          <div
            className="pulse-dot"
            style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: 'var(--color-accent)', flexShrink: 0 }}
          />
          <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '11px', color: 'var(--color-text)', letterSpacing: '0.08em' }}>
            2 AGENTS RUNNING
          </span>
        </div>
        <div style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '10px', color: 'var(--color-muted)', letterSpacing: '0.1em', marginTop: '4px' }}>
          SYSTEM ONLINE
        </div>
      </motion.div>

      {/* Eyebrow */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
        style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: 'clamp(16px, 2.5vw, 28px)' }}
      >
        <div style={{ width: '24px', height: '1px', backgroundColor: 'var(--color-accent)', flexShrink: 0 }} />
        <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '11px', color: 'var(--color-accent)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
          AI Marketing Agents — For DTC Brands Doing $1M–$10M
        </span>
      </motion.div>

      {/* Headline */}
      <h1 style={{ margin: 0 }}>
        {["DON'T HIRE", 'HUMANS.'].map((line, i) => (
          <motion.div
            key={line}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.25 + i * 0.15 }}
            style={{
              display: 'block',
              fontFamily: 'var(--font-bebas)',
              fontSize: 'clamp(72px, 20vw, 280px)',
              lineHeight: 0.9,
              letterSpacing: '0.02em',
              color: 'var(--color-text)',
              textTransform: 'uppercase',
            }}
          >
            {line}
          </motion.div>
        ))}
      </h1>

      {/* Subline */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.65 }}
        style={{
          fontFamily: 'var(--font-dm-mono)',
          fontSize: 'clamp(13px, 1.2vw, 16px)',
          color: 'var(--color-text)',
          maxWidth: '520px',
          lineHeight: 1.75,
          marginTop: 'clamp(24px, 3vw, 40px)',
        }}
      >
        Your entire marketing department — replaced by AI agents.
        <br />
        Built for DTC brands doing $1M–$10M. No retainers. No humans.
      </motion.p>

      {/* Done-for-you callout */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.78 }}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '10px',
          marginTop: '16px',
          padding: '10px 16px',
          border: '1px solid #1F3330',
          backgroundColor: 'var(--color-surface)',
          borderRadius: '2px',
          alignSelf: 'flex-start',
        }}
      >
        <div
          className="pulse-dot"
          style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--color-accent)', flexShrink: 0 }}
        />
        <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '11px', color: 'var(--color-accent)', letterSpacing: '0.1em' }}>
          WE RUN THE AGENTS. YOU NEVER LOG IN.
        </span>
      </motion.div>

      {/* CTA row */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.9 }}
        style={{ marginTop: 'clamp(24px, 3vw, 36px)', display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '24px' }}
      >
        <a
          href="#pricing"
          aria-label="Book a free 15-minute audit"
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
          BOOK A FREE AUDIT →
        </a>

        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
          {['Starts at $750/mo', 'Deployed in 7 days', 'No contracts'].map((item, i) => (
            <span key={i} style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '11px', color: 'var(--color-muted)', letterSpacing: '0.08em', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ color: 'var(--color-accent)' }}>→</span>
              {item}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
