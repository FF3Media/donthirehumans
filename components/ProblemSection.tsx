'use client'

import { motion } from 'framer-motion'

const vp = { once: true, margin: '-100px' as const }

export default function ProblemSection() {
  return (
    <section
      aria-labelledby="problem-heading"
      style={{
        backgroundColor: 'var(--color-bg)',
        padding: 'clamp(80px, 10vw, 120px) clamp(24px, 5vw, 80px)',
      }}
    >
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))',
          gap: 'clamp(40px, 6vw, 80px)',
          alignItems: 'start',
        }}
      >
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.6 }}
        >
          <h2
            id="problem-heading"
            style={{
              fontFamily: 'var(--font-bebas)',
              fontSize: 'clamp(40px, 6vw, 80px)',
              lineHeight: 1,
              letterSpacing: '0.02em',
              color: 'var(--color-text)',
              textTransform: 'uppercase',
            }}
          >
            THE OLD WAY IS BLEEDING YOU DRY.
          </h2>
        </motion.div>

        {/* Right */}
        <div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {[
              '$8,000–$25,000/mo agency retainers. Average results.',
              '6–8 person marketing team just to stay competitive.',
              'Weekly calls. Endless approvals. Slow execution.',
            ].map((text, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={vp}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                style={{
                  fontFamily: 'var(--font-dm-mono)',
                  fontSize: '13px',
                  color: 'var(--color-text)',
                  lineHeight: 1.7,
                  display: 'flex',
                  gap: '12px',
                }}
              >
                <span style={{ color: 'var(--color-accent)', flexShrink: 0 }}>→</span>
                <span>{text}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.6, delay: 0.35 }}
            style={{
              width: '100%',
              height: '1px',
              backgroundColor: 'var(--color-accent)',
              marginTop: '40px',
            }}
          />
        </div>
      </div>
    </section>
  )
}
