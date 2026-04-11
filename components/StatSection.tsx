'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
}

function useCountUp(target: number, duration: number, start: boolean) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!start) return
    let startTime: number | null = null
    let raf: number
    function step(timestamp: number) {
      if (!startTime) startTime = timestamp
      const elapsed = timestamp - startTime
      const progress = Math.min(elapsed / duration, 1)
      setValue(Math.round(easeOutExpo(progress) * target))
      if (progress < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [start, target, duration])
  return value
}

const breakdown = [
  { label: 'Head of Marketing / CMO (fractional)', cost: 12000 },
  { label: 'Email Marketing Manager', cost: 6000 },
  { label: 'SEO Agency Retainer', cost: 5500 },
  { label: 'Klaviyo Partner Agency', cost: 4500 },
  { label: 'Content Team (freelance)', cost: 7500 },
  { label: 'Paid Social Manager', cost: 5500 },
  { label: 'Analytics & Reporting', cost: 3000 },
  { label: 'Tools & Software Stack', cost: 3000 },
]

const vp = { once: true, margin: '-100px' as const }

export default function StatSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const count = useCountUp(47000, 2500, inView)

  return (
    <section
      ref={ref}
      aria-label="Cost comparison"
      style={{
        width: '100%',
        backgroundColor: 'var(--color-bg)',
        padding: 'clamp(80px, 12vw, 140px) clamp(24px, 5vw, 80px)',
        borderTop: '1px solid #222222',
        borderBottom: '1px solid #222222',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.6 }}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '11px',
            color: 'var(--color-muted)',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            marginBottom: 'clamp(16px, 3vw, 32px)',
            textAlign: 'center',
          }}
        >
          Average monthly cost of the marketing team we replaced
        </motion.p>

        {/* Big number */}
        <div
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(100px, 20vw, 260px)',
            lineHeight: 0.9,
            letterSpacing: '0.01em',
            color: 'var(--color-text)',
            textAlign: 'center',
          }}
          aria-label={`$${count.toLocaleString()}`}
        >
          ${count.toLocaleString()}
        </div>

        {/* Breakdown table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            maxWidth: '640px',
            margin: 'clamp(32px, 5vw, 56px) auto 0',
            borderTop: '1px solid #222222',
          }}
        >
          {breakdown.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={vp}
              transition={{ duration: 0.4, delay: 0.35 + i * 0.06 }}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '12px 0',
                borderBottom: '1px solid #222222',
              }}
            >
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '12px', color: 'var(--color-muted)', letterSpacing: '0.04em' }}>
                {item.label}
              </span>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '12px', color: 'var(--color-text)', letterSpacing: '0.06em', flexShrink: 0, marginLeft: '24px' }}>
                ${item.cost.toLocaleString()}/mo
              </span>
            </motion.div>
          ))}

          {/* Total row */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 0 0' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '12px', color: 'var(--color-accent)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Total
            </span>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '36px', color: 'var(--color-accent)', letterSpacing: '0.04em' }}>
              $47,000/mo
            </span>
          </div>
        </motion.div>

        {/* Comparison line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.6, delay: 0.8 }}
          style={{ textAlign: 'center', marginTop: 'clamp(32px, 5vw, 56px)' }}
        >
          <p style={{ fontFamily: 'var(--font-display)', fontSize: '13px', color: 'var(--color-accent)', letterSpacing: '0.05em' }}>
            Our agents start at $750/mo.
          </p>
          <p style={{ fontFamily: 'var(--font-display)', fontSize: '11px', color: 'var(--color-muted)', marginTop: '10px', letterSpacing: '0.05em' }}>
            No retainer. No headcount. No bullshit.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
