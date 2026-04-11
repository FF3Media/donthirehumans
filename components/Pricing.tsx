'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

function CTAButton({
  children,
  filled = false,
}: {
  children: React.ReactNode
  filled?: boolean
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <button
      style={{
        width: '100%',
        fontFamily: 'var(--font-display)',
        fontSize: '12px',
        letterSpacing: '0.1em',
        padding: '14px 20px',
        border: '1px solid var(--color-accent)',
        background: filled ? (hovered ? 'transparent' : 'var(--color-accent)') : hovered ? 'var(--color-accent)' : 'transparent',
        color: filled ? (hovered ? 'var(--color-accent)' : '#000') : hovered ? '#000' : 'var(--color-accent)',
        cursor: 'pointer',
        transition: 'background 200ms, color 200ms',
        borderRadius: '2px',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </button>
  )
}

const plans = [
  {
    id: 'plan-01',
    label: 'PLAN 01',
    name: 'REVENUE',
    price: '$750',
    period: '/mo',
    features: [
      'Email Agent fully managed',
      'Automated flows + campaigns',
      'Monthly revenue report',
      'Cancel anytime',
    ],
    highlighted: false,
    cta: 'START HERE →',
    filled: false,
  },
  {
    id: 'plan-02',
    label: 'PLAN 02',
    name: 'VISIBILITY',
    price: '$1,000',
    period: '/mo',
    features: [
      'SEO + GEO Agent fully managed',
      'Google + AI search optimization',
      'Monthly rankings + citations report',
      'Cancel anytime',
    ],
    highlighted: true,
    tag: 'MOST POPULAR',
    cta: 'START HERE →',
    filled: true,
  },
  {
    id: 'plan-03',
    label: 'PLAN 03',
    name: 'GROWTH',
    price: '$2,000',
    period: '/mo',
    features: [
      'Email Agent + SEO/GEO Agent',
      'Full revenue + visibility stack',
      'Priority onboarding (48hrs)',
      'Dedicated results dashboard',
      'Cancel anytime',
    ],
    highlighted: false,
    cta: 'START HERE →',
    filled: false,
  },
]

export default function Pricing() {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
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
          style={{ marginBottom: 'clamp(40px, 6vw, 64px)' }}
        >
          <h2
            id="pricing-heading"
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
            TRANSPARENT PRICING.
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '13px',
              color: 'var(--color-muted)',
              lineHeight: 1.7,
            }}
          >
            No discovery calls to get a number. No custom quotes. Pick a plan.
          </p>
        </motion.div>

        {/* Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: 'clamp(16px, 2.5vw, 24px)',
          }}
        >
          {plans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.1 }}
              style={{
                backgroundColor: 'var(--color-surface)',
                border: plan.highlighted
                  ? '1px solid var(--color-accent)'
                  : '1px solid #222222',
                padding: 'clamp(24px, 3.5vw, 40px)',
                borderRadius: '2px',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
              }}
            >
              {/* Most popular tag */}
              {plan.tag && (
                <div
                  style={{
                    position: 'absolute',
                    top: '0',
                    right: '0',
                    fontFamily: 'var(--font-display)',
                    fontSize: '9px',
                    letterSpacing: '0.1em',
                    backgroundColor: 'var(--color-accent)',
                    color: '#000',
                    padding: '4px 8px',
                    fontWeight: 500,
                  }}
                >
                  {plan.tag}
                </div>
              )}

              {/* Label */}
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '11px',
                  color: 'var(--color-accent)',
                  letterSpacing: '0.1em',
                }}
              >
                {plan.label}
              </div>

              {/* Name */}
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '40px',
                  letterSpacing: '0.02em',
                  color: 'var(--color-text)',
                  textTransform: 'uppercase',
                  lineHeight: 1,
                  margin: 0,
                }}
              >
                {plan.name}
              </h3>

              {/* Price */}
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '64px',
                    color: 'var(--color-accent)',
                    lineHeight: 1,
                    letterSpacing: '0.02em',
                  }}
                >
                  {plan.price}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '14px',
                    color: 'var(--color-muted)',
                  }}
                >
                  {plan.period}
                </span>
              </div>

              {/* Divider */}
              <div style={{ height: '1px', backgroundColor: 'var(--color-accent)', opacity: 0.4 }} />

              {/* Features */}
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
                {plan.features.map((f) => (
                  <li
                    key={f}
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '12px',
                      color: 'var(--color-text)',
                      display: 'flex',
                      gap: '10px',
                      lineHeight: 1.6,
                    }}
                  >
                    <span style={{ color: 'var(--color-accent)', flexShrink: 0 }}>→</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <CTAButton filled={plan.filled}>{plan.cta}</CTAButton>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '11px',
            color: 'var(--color-muted)',
            textAlign: 'center',
            marginTop: 'clamp(24px, 4vw, 48px)',
            lineHeight: 1.7,
          }}
        >
          First 30 days guaranteed. If we don&apos;t deliver measurable results, you don&apos;t pay.
          <br />
          No contracts. No lock-in. Cancel anytime with 30 days notice.
        </motion.p>
      </div>
    </section>
  )
}
