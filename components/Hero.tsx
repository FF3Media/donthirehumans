'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const agents = [
  { label: 'Frank',  avatar: '/Frank.png'  },
  { label: 'Musa',   avatar: '/Musa.png'   },
  { label: 'Emmy',   avatar: '/Emmy.png'   },
  { label: 'Clark',  avatar: '/Clark.png'  },
  { label: 'Barry',  avatar: '/Barry.png'  },
  { label: 'Bruce',  avatar: '/Bruce.png'  },
  { label: 'Vera',   avatar: '/Vera.png'   },
  { label: 'Hannah', avatar: '/Hannah.png' },
  { label: 'Eve',    avatar: '/Evie.png'   },
]

const positions = [
  { x: '4%',  y: '15%' }, { x: '88%', y: '10%' }, { x: '15%', y: '62%' },
  { x: '79%', y: '56%' }, { x: '46%', y: '4%'  }, { x: '30%', y: '74%' },
  { x: '61%', y: '71%' }, { x: '2%',  y: '44%' }, { x: '91%', y: '38%' },
]

function FloatingAgent({ x, y, delay, avatar, label }: { x: string; y: string; delay: number; avatar: string; label: string }) {
  return (
    <motion.div
      animate={{ y: ['0px', '-14px', '0px'] }}
      transition={{ duration: 3.5 + delay * 0.4, repeat: Infinity, ease: 'easeInOut', delay }}
      style={{ position: 'absolute', left: x, top: y, textAlign: 'center', zIndex: 1 }}
    >
      <div style={{
        width: '64px',
        height: '64px',
        borderRadius: '16px',
        overflow: 'hidden',
        border: '1px solid rgba(0,0,0,0.08)',
        marginBottom: '6px',
        backgroundColor: '#F0F0F3',
      }}>
        <Image
          src={avatar}
          alt={label}
          width={64}
          height={64}
          style={{ width: '100%', height: '100%', objectFit: 'cover', imageRendering: 'pixelated' }}
        />
      </div>
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
          avatar={agents[i].avatar}
          label={agents[i].label}
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
        Push a button, run your business.
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
            backgroundColor: 'transparent',
            border: '1.5px solid rgba(0,0,0,0.18)',
            padding: '16px 32px',
            borderRadius: '980px',
            cursor: 'pointer',
            textDecoration: 'none',
            transition: 'border-color 200ms, background 200ms',
            display: 'inline-block',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.4)'; e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.04)' }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.18)'; e.currentTarget.style.backgroundColor = 'transparent' }}
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
