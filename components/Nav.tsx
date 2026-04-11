'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'rgba(8,12,12,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(8px)' : 'none',
        borderBottom: scrolled ? '1px solid #1A2422' : '1px solid transparent',
      }}
    >
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '20px 40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <div>
          <div
            style={{
              fontFamily: 'var(--font-dm-mono)',
              fontSize: '12px',
              color: 'var(--color-accent)',
              letterSpacing: '0.1em',
              fontWeight: 500,
            }}
          >
            FRANK MEDIA
          </div>
          <div
            style={{
              fontFamily: 'var(--font-dm-mono)',
              fontSize: '10px',
              color: 'var(--color-muted)',
              letterSpacing: '0.05em',
              marginTop: '2px',
            }}
          >
            donthirehumans.ai
          </div>
        </div>

        {/* CTA */}
        <a
          href="#pricing"
          aria-label="Book a free audit"
          style={{
            fontFamily: 'var(--font-dm-mono)',
            fontSize: '11px',
            letterSpacing: '0.1em',
            color: 'var(--color-accent)',
            border: '1px solid var(--color-accent)',
            background: 'transparent',
            padding: '10px 20px',
            cursor: 'pointer',
            textDecoration: 'none',
            transition: 'background 200ms, color 200ms',
            display: 'inline-block',
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget
            el.style.background = 'var(--color-accent)'
            el.style.color = '#000'
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget
            el.style.background = 'transparent'
            el.style.color = 'var(--color-accent)'
          }}
        >
          BOOK A FREE AUDIT →
        </a>
      </div>
    </motion.nav>
  )
}
