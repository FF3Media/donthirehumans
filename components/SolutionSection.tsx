'use client'

import { motion } from 'framer-motion'

const vp = { once: true, margin: '-100px' as const }

function AgentCard({
  number,
  headline,
  body,
  geoNote,
  stat,
  statLabel,
  delay,
}: {
  number: string
  headline: string
  body: string
  geoNote?: string
  stat: string
  statLabel: string
  delay: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={vp}
      transition={{ duration: 0.6, delay }}
      whileHover={{ borderColor: 'var(--color-accent)' } as never}
      style={{
        backgroundColor: 'var(--color-surface)',
        border: '1px solid #1F3330',
        padding: 'clamp(28px, 4vw, 40px)',
        borderRadius: '2px',
        transition: 'border-color 300ms',
        flex: '1',
        minWidth: 'min(100%, 320px)',
        display: 'flex',
        flexDirection: 'column',
        gap: '0',
      }}
    >
      {/* Top row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
        <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '11px', color: 'var(--color-accent)', letterSpacing: '0.1em' }}>
          {number}
        </span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <div className="pulse-dot" style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--color-accent)', flexShrink: 0 }} />
          <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '10px', color: 'var(--color-muted)', letterSpacing: '0.08em' }}>ACTIVE</span>
        </div>
      </div>

      {/* Fully managed badge */}
      <div style={{ marginBottom: '16px' }}>
        <span style={{
          fontFamily: 'var(--font-dm-mono)',
          fontSize: '9px',
          letterSpacing: '0.12em',
          color: '#000',
          backgroundColor: 'var(--color-accent)',
          padding: '3px 8px',
          textTransform: 'uppercase',
        }}>
          FULLY MANAGED — YOU DO NOTHING
        </span>
      </div>

      {/* Headline */}
      <h3 style={{
        fontFamily: 'var(--font-bebas)',
        fontSize: 'clamp(36px, 4vw, 48px)',
        letterSpacing: '0.02em',
        color: 'var(--color-text)',
        textTransform: 'uppercase',
        marginBottom: '16px',
        lineHeight: 1,
      }}>
        {headline}
      </h3>

      {/* Body */}
      <p style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '13px', color: 'var(--color-muted)', lineHeight: 1.7, marginBottom: geoNote ? '12px' : '32px', flex: 1 }}>
        {body}
      </p>

      {/* GEO explanation note */}
      {geoNote && (
        <div style={{
          padding: '12px 14px',
          backgroundColor: 'rgba(0, 229, 204, 0.06)',
          border: '1px solid rgba(0, 229, 204, 0.15)',
          marginBottom: '32px',
          borderRadius: '2px',
        }}>
          <p style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '11px', color: 'var(--color-accent)', lineHeight: 1.65, margin: 0 }}>
            <strong>What is GEO?</strong> Generative Engine Optimization — getting your brand cited when buyers search inside ChatGPT, Perplexity, and Google AI Overviews. The new search. Most brands aren&apos;t in it yet.
          </p>
        </div>
      )}

      {/* Stat */}
      <div style={{ fontFamily: 'var(--font-bebas)', fontSize: 'clamp(64px, 8vw, 96px)', color: 'var(--color-accent)', lineHeight: 1, letterSpacing: '0.02em' }}>
        {stat}
      </div>
      <div style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '11px', color: 'var(--color-muted)', lineHeight: 1.6, marginTop: '8px', maxWidth: '260px' }}>
        {statLabel}
      </div>
    </motion.div>
  )
}

export default function SolutionSection() {
  return (
    <section
      id="solution"
      aria-labelledby="solution-heading"
      style={{
        backgroundColor: 'var(--color-bg)',
        padding: 'clamp(80px, 10vw, 120px) clamp(24px, 5vw, 80px)',
        borderTop: '1px solid #1A2422',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 'clamp(40px, 6vw, 64px)' }}
        >
          <h2
            id="solution-heading"
            style={{
              fontFamily: 'var(--font-bebas)',
              fontSize: 'clamp(36px, 5.5vw, 80px)',
              letterSpacing: '0.02em',
              color: 'var(--color-text)',
              textTransform: 'uppercase',
              lineHeight: 1,
              marginBottom: '16px',
            }}
          >
            MEET YOUR NEW MARKETING DEPARTMENT.
          </h2>
          <p style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '13px', color: 'var(--color-muted)', lineHeight: 1.7, marginBottom: '8px' }}>
            Two AI agents. Fully managed. Results in 30 days.
          </p>
          <p style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '12px', color: 'var(--color-accent)', letterSpacing: '0.08em' }}>
            We handle everything. You approve nothing.
          </p>
        </motion.div>

        {/* Cards */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(16px, 3vw, 32px)' }}>
          <AgentCard
            number="AGENT 01"
            headline="EMAIL AGENT"
            body="Automated flows, campaigns, and sequences engineered for DTC revenue. Replaces your email manager and your agency. Deployed and generating revenue in 7 days."
            stat="30–45%"
            statLabel="of DTC revenue attributed to email when done right"
            delay={0}
          />
          <AgentCard
            number="AGENT 02"
            headline="SEO + GEO AGENT"
            body="Ranks on Google and gets your brand cited inside ChatGPT, Perplexity, and Google AI Overviews. Replaces your SEO agency. Visible in both worlds."
            geoNote="GEO explained"
            stat="2×"
            statLabel="search visibility — traditional + AI search combined"
            delay={0.1}
          />
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '12px', color: 'var(--color-muted)', textAlign: 'center', marginTop: 'clamp(24px, 4vw, 48px)' }}
        >
          Paid Social Agent and Analytics Agent in development — Growth plan clients get early access.
        </motion.p>
      </div>
    </section>
  )
}
