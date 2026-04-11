'use client'

import { motion } from 'framer-motion'

const brands = [
  'Cuts Clothing',
  'Obvi',
  'Doe Lashes',
  'Huel',
  'Thesis',
  'Caraway',
  'Graza',
  'Jones Road',
]

export default function BrandsSection() {
  return (
    <section
      aria-label="Brands we've worked with"
      style={{
        backgroundColor: '#fff',
        borderTop: '1px solid rgba(0,0,0,0.06)',
        padding: 'clamp(48px, 6vw, 72px) clamp(24px, 5vw, 80px)',
      }}
    >
      <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 500,
            fontSize: '12px',
            color: 'var(--color-muted)',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: 'clamp(28px, 3vw, 40px)',
          }}
        >
          Brands we&apos;ve worked with
        </motion.p>

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 'clamp(24px, 4vw, 56px)',
        }}>
          {brands.map((brand, i) => (
            <motion.span
              key={brand}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: 'clamp(14px, 1.5vw, 18px)',
                color: 'rgba(0,0,0,0.18)',
                letterSpacing: '-0.02em',
                whiteSpace: 'nowrap',
              }}
            >
              {brand}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  )
}
