'use client'

import { motion } from 'framer-motion'

const agentColors = ['#E8F5E9','#E3F2FD','#FFF3E0','#FCE4EC','#F3E5F5','#E0F7FA','#FFF8E1','#F1F8E9','#EDE7F6']
const agentLabels = ['Frank','Musa','Emmy','Clark','Barry','Bruce','Vera','Hannah','Eve']

const positions = [
  { x: '4%',  y: '15%' }, { x: '88%', y: '10%' }, { x: '15%', y: '62%' },
  { x: '79%', y: '56%' }, { x: '46%', y: '4%'  }, { x: '30%', y: '74%' },
  { x: '61%', y: '71%' }, { x: '2%',  y: '44%' }, { x: '91%', y: '38%' },
]

function FloatingAgent({ x, y, delay, color, label }: { x: string; y: string; delay: number; color: string; label: string }) {
  return (
    <motion.div
      animate={{ y: ['0px', '-14px', '0px'] }}
      transition={{ duration: 3.5 + delay * 0.4, repeat: Infinity, ease: 'easeInOut', delay }}
      style={{ position: 'absolute', left: x, top: y, textAlign: 'center', zIndex: 1 }}
    >
      <div style={{
        width: '52px',
        height: '52px',
        borderRadius: '14px',
        backgroundColor: color,
        border: '1px solid rgba(0,0,0,0.08)',
        marginBottom: '4px',
      }} />
      <span style={{
        fontFamily: 'var(--font-display)',
        fontSize: '10px',
        color: 'var(--color-muted)',
        fontWeight: 500,
      }}>{label}</span>
    </motion.div>
  )
}

export default function Hero() {
  return (
    <section
      aria-label="Hero"
      style={{
        minHeight: '100vh',
        backgroundColor: 'var(--color-surface)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: 'clamp(120px, 12vw, 160px) clamp(24px, 5vw, 80px) clamp(80px, 10vw, 120px)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Floating agents */}
      {positions.map((p, i) => (
        <FloatingAgent
          key={i}
          x={p.x}
          y={p.y}
          delay={i * 0.3}
          color={agentColors[i]}
          label={agentLabels[i]}
        />
      ))}

      {/* Headline */}
      <h1 style={{ margin: 0, maxWidth: '960px', position: 'relative', zIndex: 2 }}>
        {['AI Agents that power', 'your business.'].map((line, i) => (
          <motion.div
            key={line}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 + i * 0.1 }}
            style={{
              display: 'block',
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 'clamp(52px, 8.5vw, 120px)',
              lineHeight: 1.0,
              letterSpacing: '-0.04em',
              color: i === 1 ? 'var(--color-accent)' : 'var(--color-text)',
            }}
          >
            {line}
          </motion.div>
        ))}
      </h1>

      {/* Zero salaries tag */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.38 }}
        style={{ marginTop: '16px', position: 'relative', zIndex: 2 }}
      >
        <span style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 600,
          fontSize: 'clamp(18px, 2.5vw, 28px)',
          color: 'var(--color-muted)',
          letterSpacing: '-0.02em',
        }}>
          Zero salaries.
        </span>
      </motion.div>

      {/* Subline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.5 }}
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 400,
          fontSize: 'clamp(16px, 1.6vw, 20px)',
          color: 'var(--color-muted)',
          maxWidth: '540px',
          lineHeight: 1.6,
          marginTop: 'clamp(16px, 2.5vw, 28px)',
          letterSpacing: '-0.01em',
          position: 'relative',
          zIndex: 2,
        }}
      >
        AI Agents that work 24/7. No sick days. No holidays. No slack messages. Fully managed by Frank Media. You do nothing.
      </motion.p>

      {/* CTA row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.56 }}
        style={{
          marginTop: 'clamp(28px, 4vw, 44px)',
          display: 'flex',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          justifyContent: 'center',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <a
          href="/contact"
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 500,
            fontSize: '16px',
            letterSpacing: '-0.01em',
            color: '#fff',
            backgroundColor: 'var(--color-accent)',
            border: 'none',
            padding: '16px 32px',
            borderRadius: '980px',
            cursor: 'pointer',
            textDecoration: 'none',
            transition: 'opacity 200ms',
            display: 'inline-block',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.85' }}
          onMouseLeave={(e) => { e.currentTarget.style.opacity = '1' }}
        >
          Book Free Audit
        </a>
        <a
          href="#agents"
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 500,
            fontSize: '16px',
            letterSpacing: '-0.01em',
            color: 'var(--color-text)',
            backgroundColor: 'rgba(0,0,0,0.06)',
            border: 'none',
            padding: '16px 32px',
            borderRadius: '980px',
            cursor: 'pointer',
            textDecoration: 'none',
            transition: 'background 200ms',
            display: 'inline-block',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.1)' }}
          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.06)' }}
        >
          Meet the Agents
        </a>
      </motion.div>

      {/* Social proof */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.72 }}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '28px',
          flexWrap: 'wrap',
          justifyContent: 'center',
          marginTop: '24px',
          position: 'relative',
          zIndex: 2,
        }}
      >
        {['Starts at $750/mo', 'Live in 7 days', 'Cancel anytime'].map((item, i) => (
          <span key={i} style={{ fontFamily: 'var(--font-display)', fontSize: '12px', color: 'var(--color-muted)', letterSpacing: '0.02em' }}>
            {item}
          </span>
        ))}
      </motion.div>
    </section>
  )
}
