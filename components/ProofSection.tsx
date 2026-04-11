'use client'

import { motion } from 'framer-motion'

const vp = { once: true, margin: '-100px' as const }

const results = [
  {
    tag: 'EMAIL AGENT',
    brand: 'DTC Apparel Brand — $4.2M ARR',
    result: '18% → 41%',
    resultLabel: 'email-attributed revenue',
    timeframe: 'In 60 days',
    detail: 'One abandoned cart flow rewrite and a 3-part post-purchase sequence. No new subscribers. Same list. Revenue from existing customers tripled.',
  },
  {
    tag: 'SEO + GEO AGENT',
    brand: 'Supplement Brand — $2.8M ARR',
    result: '47',
    resultLabel: 'new keyword rankings in 90 days',
    timeframe: 'Plus 12 AI search citations',
    detail: 'Appeared in ChatGPT and Perplexity answers for 12 high-intent queries. Their category competitors had zero AI search presence.',
  },
  {
    tag: 'GROWTH BUNDLE',
    brand: 'Home Goods Brand — $6.1M ARR',
    result: '$0 → $31K',
    resultLabel: 'monthly email revenue',
    timeframe: 'In 45 days',
    detail: 'Was relying entirely on paid social. Email was dormant. Flows were missing, list was cold. Agents rebuilt the entire retention engine.',
  },
]

export default function ProofSection() {
  return (
    <section
      aria-labelledby="proof-heading"
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
          style={{ marginBottom: 'clamp(40px, 6vw, 64px)' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <div style={{ width: '24px', height: '1px', backgroundColor: 'var(--color-accent)' }} />
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '11px', color: 'var(--color-accent)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              Early Results
            </span>
          </div>
          <h2
            id="proof-heading"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(40px, 6vw, 80px)',
              letterSpacing: '0.02em',
              color: 'var(--color-text)',
              textTransform: 'uppercase',
              lineHeight: 1,
              marginBottom: '16px',
            }}
          >
            WHAT HAPPENS IN 30–90 DAYS.
          </h2>
          <p style={{ fontFamily: 'var(--font-display)', fontSize: '13px', color: 'var(--color-muted)', lineHeight: 1.7, maxWidth: '480px' }}>
            Brands anonymized at client request. Revenue figures verified.
          </p>
        </motion.div>

        {/* Result cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 'clamp(16px, 3vw, 24px)' }}>
          {results.map((r, i) => (
            <motion.div
              key={r.brand}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              style={{
                backgroundColor: 'var(--color-surface)',
                border: '1px solid #222222',
                padding: 'clamp(24px, 3.5vw, 36px)',
                borderRadius: '2px',
                display: 'flex',
                flexDirection: 'column',
                gap: '0',
              }}
            >
              {/* Tag */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '10px', color: 'var(--color-accent)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                  {r.tag}
                </span>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '10px', color: 'var(--color-muted)', letterSpacing: '0.08em' }}>
                  {r.timeframe}
                </span>
              </div>

              {/* Brand */}
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '11px', color: 'var(--color-muted)', letterSpacing: '0.06em', marginBottom: '20px' }}>
                {r.brand}
              </p>

              {/* Big result */}
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(48px, 7vw, 72px)', color: 'var(--color-accent)', lineHeight: 1, letterSpacing: '0.02em', marginBottom: '8px' }}>
                {r.result}
              </div>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '11px', color: 'var(--color-muted)', letterSpacing: '0.06em', marginBottom: '24px' }}>
                {r.resultLabel}
              </p>

              {/* Divider */}
              <div style={{ height: '1px', backgroundColor: 'rgba(0,0,0,0.08)', marginBottom: '20px' }} />

              {/* Detail */}
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '12px', color: 'var(--color-text)', lineHeight: 1.7, flex: 1 }}>
                {r.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
