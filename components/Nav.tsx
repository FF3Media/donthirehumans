'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on route change / scroll
  useEffect(() => {
    if (menuOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const navLinks = [
    { label: 'Blog', href: '/blog' },
    { label: 'How It Works', href: '/#how-it-works' },
    { label: 'Pricing', href: '/#pricing' },
  ]

  return (
    <>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled || menuOpen ? 'rgba(255,255,255,0.95)' : 'transparent',
          backdropFilter: scrolled || menuOpen ? 'saturate(180%) blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled || menuOpen ? 'saturate(180%) blur(20px)' : 'none',
          borderBottom: scrolled || menuOpen ? '1px solid rgba(0,0,0,0.08)' : '1px solid transparent',
        }}
      >
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '18px clamp(20px, 4vw, 40px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
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

          {/* Desktop links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="nav-desktop">
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
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
                {link.label}
              </a>
            ))}
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

          {/* Mobile right side — CTA + hamburger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }} className="nav-mobile">
            <a
              href="/contact"
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 500,
                fontSize: '13px',
                color: '#fff',
                backgroundColor: 'var(--color-accent)',
                padding: '8px 16px',
                borderRadius: '980px',
                textDecoration: 'none',
              }}
            >
              Book Audit
            </a>
            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '4px',
                display: 'flex',
                flexDirection: 'column',
                gap: '5px',
                width: '28px',
              }}
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                style={{ display: 'block', height: '2px', backgroundColor: 'var(--color-text)', borderRadius: '2px', transformOrigin: 'center' }}
              />
              <motion.span
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                style={{ display: 'block', height: '2px', backgroundColor: 'var(--color-text)', borderRadius: '2px' }}
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                style={{ display: 'block', height: '2px', backgroundColor: 'var(--color-text)', borderRadius: '2px', transformOrigin: 'center' }}
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed',
              top: '61px',
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: '#fff',
              zIndex: 49,
              padding: '32px clamp(20px, 4vw, 40px)',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
            }}
            className="nav-mobile"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: '28px',
                  letterSpacing: '-0.03em',
                  color: 'var(--color-text)',
                  textDecoration: 'none',
                  padding: '12px 0',
                  borderBottom: '1px solid rgba(0,0,0,0.06)',
                }}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="/contact"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'inline-block',
                marginTop: '24px',
                fontFamily: 'var(--font-display)',
                fontWeight: 600,
                fontSize: '16px',
                color: '#fff',
                backgroundColor: 'var(--color-accent)',
                padding: '16px 32px',
                borderRadius: '980px',
                textDecoration: 'none',
                textAlign: 'center',
              }}
            >
              Book Free Audit →
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .nav-desktop { display: flex; }
        .nav-mobile { display: none; }
        @media (max-width: 680px) {
          .nav-desktop { display: none !important; }
          .nav-mobile { display: flex !important; }
        }
      `}</style>
    </>
  )
}
