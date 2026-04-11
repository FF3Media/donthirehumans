'use client'

import { motion } from 'framer-motion'

const vp = { once: true, margin: '-100px' as const }

const threats = [
  {
    stat: '85%',
    label: 'of Fortune 500 companies will have deployed AI agents by end of 2026',
    source: 'Gartner, 2025',
  },
  {
    stat: '12×',
    label: 'faster content and campaign execution for AI-powered brands vs. human teams',
    source: 'McKinsey, 2025',
  },
  {
    stat: '$4.4T',
    label: 'in annual productivity unlocked by AI — most captured by early adopters',
    source: 'Goldman Sachs, 2025',
  },
]

const bullets = [
  'Your competitor down the street just replaced their 5-person marketing team with 3 AI agents. Their costs dropped 80%.',
  'They\'re publishing 10× more content, sending better emails, and ranking for keywords you haven\'t touched.',
  'They\'re reinvesting those savings into paid acquisition — outspending you on every channel.',
  'AI doesn\'t sleep. Doesn\'t call in sick. Doesn\'t go on vacation. It just executes.',
]

export default function ProblemSection() {
  return (
    <section
      aria-labelledby="problem-heading"
      style={{
        backgroundColor: 'var(--color-bg)',
        padding: 'clamp(80px, 10vw, 120px) clamp(24px, 5vw, 80px)',
        borderTop: '1px solid #222222',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 'clamp(40px, 6vw, 64px)', maxWidth: '800px' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
            <div style={{ width: '24px', height: '1px', backgroundColor: 'var(--color-accent)' }} />
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '11px', color: 'var(--color-accent)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              The Threat Is Already Here
            </span>
          </div>
          <h2
            id="problem-heading"
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'clamp(36px, 5.5vw, 72px)',
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              color: 'var(--color-text)',
              marginBottom: '24px',
            }}
          >
            AI Is Making Your Competitors<br />
            <span style={{ color: 'var(--color-accent)' }}>Lethally Lean.</span>
          </h2>
          <p style={{ fontFamily: 'var(--font-display)', fontSize: '14px', color: 'var(--color-muted)', lineHeight: 1.75, maxWidth: '580px' }}>
            Business is changing faster than any point in history. The brands that adopt AI agents now will dominate their categories. The ones that don&apos;t will be priced out.
          </p>
        </motion.div>

        {/* Stats row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: '12px', marginBottom: 'clamp(48px, 7vw, 80px)' }}>
          {threats.map((t, i) => (
            <motion.div
              key={t.stat}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                padding: 'clamp(24px, 3.5vw, 40px)',
                borderRadius: '16px',
                backgroundColor: 'var(--color-surface)',
                border: '1px solid rgba(0,0,0,0.08)',
              }}
            >
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(48px, 5.5vw, 72px)', color: 'var(--color-accent)', lineHeight: 1, letterSpacing: '-0.03em', marginBottom: '12px' }}>
                {t.stat}
              </div>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '12px', color: 'var(--color-text)', lineHeight: 1.65, marginBottom: '10px' }}>
                {t.label}
              </p>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '10px', color: 'var(--color-muted)', letterSpacing: '0.08em' }}>
                — {t.source}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Two-col layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))',
          gap: 'clamp(40px, 6vw, 80px)',
          alignItems: 'start',
        }}>
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.6 }}
          >
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'clamp(28px, 3.5vw, 48px)',
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              color: 'var(--color-text)',
              marginBottom: '0',
            }}>
              While you&apos;re managing a team,<br />
              <span style={{ color: 'var(--color-accent)' }}>they&apos;re running agents.</span>
            </h3>
          </motion.div>

          {/* Right — bullets */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {bullets.map((text, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={vp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}
              >
                <span style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-display)', fontSize: '12px', flexShrink: 0, marginTop: '3px' }}>→</span>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '13px', color: 'var(--color-text)', lineHeight: 1.7, margin: 0 }}>
                  {text}
                </p>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.5, delay: 0.45 }}
              style={{ marginTop: '12px', padding: '16px 20px', backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-accent)', borderRadius: '2px' }}
            >
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '12px', color: 'var(--color-accent)', lineHeight: 1.65, margin: 0, letterSpacing: '0.04em' }}>
                The question isn&apos;t whether AI will change your industry.<br />
                <strong>It already has. The only question is which side you&apos;re on.</strong>
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
