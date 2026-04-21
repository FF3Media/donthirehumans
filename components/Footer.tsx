'use client'

export default function Footer() {
  return (
    <footer
      aria-label="Site footer"
      style={{
        backgroundColor: 'var(--color-bg)',
        borderTop: '1px solid #222222',
        padding: 'clamp(48px, 6vw, 80px) clamp(24px, 5vw, 80px) clamp(32px, 4vw, 48px)',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Columns */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))',
            gap: 'clamp(32px, 4vw, 48px)',
            marginBottom: 'clamp(32px, 4vw, 48px)',
          }}
        >
          {/* Col 1 — Brand */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '13px',
                color: 'var(--color-accent)',
                letterSpacing: '0.08em',
                marginBottom: '6px',
              }}
            >
              FRANK MEDIA
            </div>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '11px',
                color: 'var(--color-muted)',
                letterSpacing: '0.05em',
              }}
            >
              frankmedia.co
            </div>
          </div>

          {/* Col 2 — Services */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '11px',
                color: 'var(--color-muted)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '16px',
              }}
            >
              SERVICES
            </div>
            {['Email Agent', 'SEO + GEO Agent', 'Growth Bundle'].map((item) => (
              <div
                key={item}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '11px',
                  color: 'var(--color-text)',
                  letterSpacing: '0.05em',
                  marginBottom: '8px',
                  lineHeight: 1.6,
                }}
              >
                {item}
              </div>
            ))}
          </div>

          {/* Col 3 — Company */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '11px',
                color: 'var(--color-muted)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '16px',
              }}
            >
              COMPANY
            </div>
            {[
              { label: 'How It Works', href: '/#how-it-works' },
              { label: 'Pricing', href: '/#pricing' },
              { label: 'Blog', href: '/blog' },
              { label: 'Book an Audit', href: '/contact' },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-display)',
                  fontSize: '11px',
                  color: 'var(--color-text)',
                  letterSpacing: '0.05em',
                  marginBottom: '8px',
                  lineHeight: 1.6,
                  textDecoration: 'none',
                  transition: 'color 200ms',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-accent)' }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--color-text)' }}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Col 4 — Location */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '11px',
                color: 'var(--color-muted)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '16px',
              }}
            >
              LOCATION
            </div>
            {['Ottawa, Canada', 'Serving DTC brands globally'].map((item) => (
              <div
                key={item}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '11px',
                  color: 'var(--color-text)',
                  letterSpacing: '0.05em',
                  marginBottom: '8px',
                  lineHeight: 1.6,
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid #222222',
            paddingTop: '24px',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '10px',
              color: 'var(--color-muted)',
              letterSpacing: '0.05em',
              lineHeight: 1.7,
            }}
          >
            © 2026 Frank Media. No humans were employed in the making of this website.
          </p>
        </div>
      </div>
    </footer>
  )
}
