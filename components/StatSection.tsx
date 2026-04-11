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
      const eased = easeOutExpo(progress)
      setValue(Math.round(eased * target))
      if (progress < 1) raf = requestAnimationFrame(step)
    }

    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [start, target, duration])

  return value
}

export default function StatSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const count = useCountUp(47000, 2500, inView)

  return (
    <section
      ref={ref}
      aria-label="Cost comparison stat"
      style={{
        width: '100vw',
        backgroundColor: 'var(--color-bg)',
        padding: 'clamp(80px, 12vw, 140px) clamp(24px, 5vw, 80px)',
        textAlign: 'center',
        borderTop: '1px solid #1A2422',
        borderBottom: '1px solid #1A2422',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <p
          style={{
            fontFamily: 'var(--font-dm-mono)',
            fontSize: '11px',
            color: 'var(--color-muted)',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            marginBottom: 'clamp(16px, 3vw, 32px)',
          }}
        >
          AVERAGE MONTHLY COST OF THE TEAM WE REPLACED
        </p>

        <div
          style={{
            fontFamily: 'var(--font-bebas)',
            fontSize: 'clamp(80px, 16vw, 200px)',
            lineHeight: 1,
            letterSpacing: '0.02em',
            color: 'var(--color-text)',
          }}
          aria-label={`$${count.toLocaleString()}`}
        >
          ${count.toLocaleString()}
        </div>

        <p
          style={{
            fontFamily: 'var(--font-dm-mono)',
            fontSize: '13px',
            color: 'var(--color-accent)',
            marginTop: 'clamp(16px, 3vw, 32px)',
            letterSpacing: '0.05em',
          }}
        >
          Our agents start at $750/mo.
        </p>

        <p
          style={{
            fontFamily: 'var(--font-dm-mono)',
            fontSize: '11px',
            color: 'var(--color-muted)',
            marginTop: '12px',
            letterSpacing: '0.05em',
          }}
        >
          No retainer. No headcount. No bullshit.
        </p>
      </motion.div>
    </section>
  )
}
