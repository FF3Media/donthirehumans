'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    num: '01',
    label: 'STEP 01',
    title: 'BRIEF US',
    body: "30-minute onboarding. We learn your brand, stack, and revenue goals. That's it.",
  },
  {
    num: '02',
    label: 'STEP 02',
    title: 'AGENTS LAUNCH',
    body: 'Email and SEO agents go live within 7 days. No hand-holding. No check-ins required.',
  },
  {
    num: '03',
    label: 'STEP 03',
    title: 'RESULTS REPORT',
    body: 'Monthly dashboard. Revenue, rankings, AI citations. Numbers only. No fluff.',
  },
]

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-heading"
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
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          style={{ marginBottom: 'clamp(40px, 6vw, 80px)' }}
        >
          <h2
            id="how-heading"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(48px, 7vw, 100px)',
              letterSpacing: '0.02em',
              color: 'var(--color-text)',
              textTransform: 'uppercase',
              lineHeight: 1,
              marginBottom: '16px',
            }}
          >
            DEPLOYED IN 7 DAYS.
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '13px',
              color: 'var(--color-muted)',
              lineHeight: 1.7,
            }}
          >
            No onboarding marathons. No 12-week ramp.
          </p>
        </motion.div>

        {/* Steps */}
        <div style={{ position: 'relative' }}>
          {/* Connector line — desktop only, hidden via CSS in globals */}
          <div
            aria-hidden="true"
            className="step-connector-line"
            style={{
              position: 'absolute',
              top: '40px',
              left: '0',
              right: '0',
              height: '1px',
              backgroundColor: 'var(--color-accent)',
              zIndex: 0,
            }}
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
              gap: 'clamp(32px, 4vw, 48px)',
              position: 'relative',
              zIndex: 1,
            }}
          >
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.1 }}
                style={{ backgroundColor: 'var(--color-bg)', paddingTop: '8px' }}
              >
                {/* Decorative number */}
                <div
                  aria-hidden="true"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '80px',
                    color: 'var(--color-accent)',
                    opacity: 0.2,
                    lineHeight: 1,
                    letterSpacing: '0.02em',
                    marginBottom: '4px',
                  }}
                >
                  {step.num}
                </div>

                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '11px',
                    color: 'var(--color-accent)',
                    letterSpacing: '0.1em',
                    marginBottom: '8px',
                    textTransform: 'uppercase',
                  }}
                >
                  {step.label}
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '32px',
                    letterSpacing: '0.02em',
                    color: 'var(--color-text)',
                    textTransform: 'uppercase',
                    lineHeight: 1,
                    marginBottom: '12px',
                  }}
                >
                  {step.title}
                </h3>

                <p
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '12px',
                    color: 'var(--color-muted)',
                    lineHeight: 1.7,
                    maxWidth: '240px',
                  }}
                >
                  {step.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}
