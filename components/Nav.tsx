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
        backgroundColor: scrolled ? 'rgba(255,255,255,0.8)' : 'transparent',
        backdropFilter: scrolled ? 'saturate(180%) blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'saturate(180%) blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0,0,0,0.08)' : '1px solid transparent',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '18px 40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <a
          href="/"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '20px',
            color: 'var(--color-text)',
            letterSpacing: '-0.02em',
            fontWeight: 700,
            textDecoration: 'none',
          }}
        >
          Frank Media
        </a>

        {/* Blog link */}
        <a
          href="/blog"
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 500,
            fontSize: '14px',
            letterSpacing: '-0.01em',
            color: 'var(--color-text)',
            textDecoration: 'none',
            transition: 'opacity 200ms',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.55' }}
          onMouseLeave={(e) => { e.currentTarget.style.opacity = '1' }}
        >
          Blog
        </a>

        {/* CTA — pill */}
        <a
          href="/contact"
          aria-label="Book a free audit"
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 500,
            fontSize: '14px',
            letterSpacing: '-0.01em',
            color: '#fff',
            backgroundColor: 'var(--color-accent)',
            border: 'none',
            padding: '10px 22px',
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
      </div>
    </motion.nav>
  )
}
