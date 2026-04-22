'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const agents = [
  { label: 'Frank',  avatar: '/Frank.png'  },
  { label: 'Emmy',   avatar: '/Emmy.png'   },
  { label: 'Musa',   avatar: '/Musa.png'   },
  { label: 'Barry',  avatar: '/Barry.png'  },
  { label: 'Clark',  avatar: '/Clark.png'  },
  { label: 'Hannah', avatar: '/Hannah.png' },
  { label: 'Bruce',  avatar: '/Bruce.png'  },
  { label: 'Vera',   avatar: '/Vera.png'   },
  { label: 'Eve',    avatar: '/Evie.png'   },
]

export default function Hero() {
  return (
    <section
      aria-label="Hero"
      style={{
        minHeight: '100vh',
        backgroundColor: 'var(--color-bg)',
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
      {/* Subtle glow */}
      <div style={{
        position: 'absolute',
        top: '40%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '700px',
        height: '700px',
        background: 'radial-gradient(circle, rgba(36,138,61,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

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

      {/* Zero salaries */}
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
          Push a button, run your business.
        </span>
      </motion.div>

      {/* CTA row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
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

      {/* Overlapping avatar row */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.65 }}
        style={{
          marginTop: 'clamp(32px, 5vw, 52px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '14px',
          position: 'relative',
          zIndex: 2,
        }}
      >
        {/* Avatars */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {agents.map((agent, i) => (
            <div
              key={agent.label}
              title={agent.label}
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '2.5px solid var(--color-bg)',
                backgroundColor: '#E8E8ED',
                marginLeft: i === 0 ? 0 : '-12px',
                position: 'relative',
                zIndex: agents.length - i,
                transition: 'transform 200ms, z-index 0ms',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px) scale(1.1)'
                ;(e.currentTarget as HTMLElement).style.zIndex = '99'
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0) scale(1)'
                ;(e.currentTarget as HTMLElement).style.zIndex = String(agents.length - i)
              }}
            >
              <Image
                src={agent.avatar}
                alt={agent.label}
                width={44}
                height={44}
                style={{ width: '100%', height: '100%', objectFit: 'cover', imageRendering: 'pixelated' }}
              />
            </div>
          ))}
        </div>

        {/* Label */}
        <p style={{
          fontFamily: 'var(--font-display)',
          fontSize: '13px',
          color: 'var(--color-muted)',
          letterSpacing: '-0.01em',
          margin: 0,
        }}>
          9 agents. Fully managed. Starts at{' '}
          <span style={{ color: 'var(--color-text)', fontWeight: 600 }}>$1,200/mo</span>
        </p>
      </motion.div>
    </section>
  )
}
