'use client'

import { motion } from 'framer-motion'

const reviews = [
  {
    quote: 'We replaced our entire customer service team with one agent. Response times went from hours to seconds. Our CSAT score went up.',
    author: 'Jake M.',
    brand: 'Founder, Apex Supplements',
    stars: 5,
  },
  {
    quote: 'Emmy sends better emails than any copywriter we have ever hired. She tests, learns, and improves every single week. Our email revenue is up 40%.',
    author: 'Priya S.',
    brand: 'Head of Growth, Lune Skincare',
    stars: 5,
  },
  {
    quote: 'Frank got us ranking for terms our SEO agency had been promising for two years. Took him six weeks. We cancelled the agency the next day.',
    author: 'Daniel R.',
    brand: 'Co-Founder, Brace Athletics',
    stars: 5,
  },
]

function Stars() {
  return (
    <div style={{ display: 'flex', gap: '3px', marginBottom: '16px' }}>
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M8 1l1.854 3.756L14 5.4l-3 2.922.708 4.128L8 10.34l-3.708 2.11L5 8.322 2 5.4l4.146-.644L8 1z" fill="var(--color-accent)" />
        </svg>
      ))}
    </div>
  )
}

export default function ReviewsSection() {
  return (
    <section
      aria-label="Reviews"
      style={{
        backgroundColor: 'var(--color-surface)',
        borderTop: '1px solid rgba(0,0,0,0.06)',
        padding: 'clamp(64px, 8vw, 100px) clamp(24px, 5vw, 80px)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: 'clamp(40px, 5vw, 64px)' }}
        >
          <p style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 500,
            fontSize: '12px',
            color: 'var(--color-muted)',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: '16px',
          }}>
            What founders are saying
          </p>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: 'clamp(32px, 4.5vw, 56px)',
            letterSpacing: '-0.03em',
            color: 'var(--color-text)',
            lineHeight: 1.05,
          }}>
            Real results.{' '}
            <span style={{ color: 'var(--color-accent)' }}>Real brands.</span>
          </h2>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
          gap: 'clamp(16px, 2vw, 24px)',
        }}>
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                backgroundColor: '#fff',
                borderRadius: '20px',
                border: '1px solid rgba(0,0,0,0.07)',
                padding: 'clamp(24px, 3vw, 36px)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Stars />
              <p style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 400,
                fontSize: 'clamp(15px, 1.4vw, 17px)',
                color: 'var(--color-text)',
                lineHeight: 1.65,
                letterSpacing: '-0.01em',
                flex: 1,
                marginBottom: '24px',
              }}>
                &ldquo;{review.quote}&rdquo;
              </p>
              <div>
                <p style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 600,
                  fontSize: '14px',
                  color: 'var(--color-text)',
                  letterSpacing: '-0.01em',
                  marginBottom: '2px',
                }}>
                  {review.author}
                </p>
                <p style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 400,
                  fontSize: '13px',
                  color: 'var(--color-muted)',
                  letterSpacing: '-0.01em',
                }}>
                  {review.brand}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mid-page CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{ textAlign: 'center', marginTop: 'clamp(40px, 5vw, 64px)' }}
        >
          <a
            href="/contact"
            style={{
              display: 'inline-block',
              fontFamily: 'var(--font-display)',
              fontWeight: 500,
              fontSize: '16px',
              letterSpacing: '-0.01em',
              color: '#fff',
              backgroundColor: 'var(--color-accent)',
              padding: '16px 36px',
              borderRadius: '980px',
              textDecoration: 'none',
              transition: 'opacity 200ms',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.85' }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = '1' }}
          >
            Get your free audit →
          </a>
          <p style={{
            fontFamily: 'var(--font-display)',
            fontSize: '12px',
            color: 'var(--color-muted)',
            marginTop: '12px',
            letterSpacing: '-0.01em',
          }}>
            Starts at $750/mo. Live in 7 days. Cancel anytime.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
