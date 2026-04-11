'use client'

import { motion } from 'framer-motion'

const stats = [
  { value: '24/7', label: 'Always on' },
  { value: '$0', label: 'In salaries' },
  { value: '7 days', label: 'To go live' },
  { value: '3x', label: 'Avg. revenue lift' },
]

export default function TrustSection() {
  return (
    <section
      aria-label="Trust"
      style={{
        backgroundColor: 'var(--color-surface)',
        borderTop: '1px solid rgba(0,0,0,0.06)',
        borderBottom: '1px solid rgba(0,0,0,0.06)',
        padding: 'clamp(48px, 6vw, 72px) clamp(24px, 5vw, 80px)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Stats row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: 'clamp(24px, 4vw, 48px)',
          textAlign: 'center',
        }}>
          {stats.map((stat, i) => (
            <motion.div
              key={stat.value}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: 'clamp(36px, 4.5vw, 56px)',
                letterSpacing: '-0.04em',
                color: 'var(--color-text)',
                lineHeight: 1,
                marginBottom: '8px',
              }}>
                {stat.value}
              </div>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 400,
                fontSize: 'clamp(13px, 1.2vw, 15px)',
                color: 'var(--color-muted)',
                letterSpacing: '-0.01em',
              }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div style={{
          height: '1px',
          backgroundColor: 'rgba(0,0,0,0.07)',
          margin: 'clamp(40px, 5vw, 56px) 0',
        }} />

        {/* Trusted by label */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: 'clamp(24px, 3vw, 36px)' }}
        >
          <span style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 500,
            fontSize: '12px',
            color: 'var(--color-muted)',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
          }}>
            Built for DTC brands
          </span>
        </motion.div>

        {/* Brand category pills */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            justifyContent: 'center',
          }}
        >
          {['Apparel', 'Supplements', 'Beauty', 'Home Goods', 'Food & Beverage', 'Pet', 'Skincare', 'Fitness'].map((cat) => (
            <span
              key={cat}
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 500,
                fontSize: '13px',
                color: 'var(--color-text)',
                letterSpacing: '-0.01em',
                padding: '7px 16px',
                borderRadius: '980px',
                border: '1px solid rgba(0,0,0,0.1)',
                backgroundColor: '#fff',
              }}
            >
              {cat}
            </span>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
