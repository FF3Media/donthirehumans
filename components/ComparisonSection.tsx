'use client'

import { motion } from 'framer-motion'

const vp = { once: true, margin: '-100px' as const }

const rows = [
  {
    label: 'Monthly cost',
    agency: '$8,000 – $25,000',
    diy: '$39 – $800',
    frank: '$750 – $2,000',
  },
  {
    label: 'Time to launch',
    agency: '4 – 6 weeks',
    diy: 'You figure it out',
    frank: '7 days',
  },
  {
    label: 'Who does the work',
    agency: 'Their junior team',
    diy: 'You',
    frank: 'We do. You do nothing.',
  },
  {
    label: 'Email campaigns',
    agency: '✓ Managed',
    diy: '✓ If you learn it',
    frank: '✓ Managed',
  },
  {
    label: 'SEO + GEO (AI search)',
    agency: 'Rarely',
    diy: 'Rarely supported',
    frank: '✓ Managed',
  },
  {
    label: 'Reporting',
    agency: 'Monthly slide deck',
    diy: 'Manual — on you',
    frank: 'Live dashboard',
  },
  {
    label: 'Contract',
    agency: '12-month lock-in',
    diy: 'No contract',
    frank: 'Cancel anytime',
  },
  {
    label: 'Account manager',
    agency: 'Yes (billed to you)',
    diy: 'No',
    frank: 'No — just results',
  },
]

export default function ComparisonSection() {
  return (
    <section
      aria-labelledby="comparison-heading"
      style={{
        backgroundColor: 'var(--color-surface)',
        padding: 'clamp(80px, 10vw, 120px) clamp(24px, 5vw, 80px)',
        borderTop: '1px solid #222222',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 'clamp(32px, 5vw, 56px)' }}
        >
          <h2
            id="comparison-heading"
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'clamp(36px, 5vw, 64px)',
              letterSpacing: '-0.03em',
              color: 'var(--color-text)',
              lineHeight: 1.05,
              marginBottom: '12px',
            }}
          >
            WHY NOT JUST USE A $39/MO AI TOOL?
          </h2>
          <p style={{ fontFamily: 'var(--font-display)', fontSize: '13px', color: 'var(--color-muted)', lineHeight: 1.7, maxWidth: '560px' }}>
            Tools give you software and a tutorial. We give you done. The difference is who logs in.
          </p>
        </motion.div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ overflowX: 'auto' }}
        >
          <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '600px' }}>
            {/* Column headers */}
            <thead>
              <tr>
                <th style={{ padding: '0 0 20px', textAlign: 'left', width: '22%' }} />
                <th style={{ padding: '0 16px 20px', textAlign: 'center', width: '26%' }}>
                  <div style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '11px',
                    color: 'var(--color-muted)',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    padding: '10px 16px',
                    border: '1px solid #222222',
                  }}>
                    Traditional Agency
                  </div>
                </th>
                <th style={{ padding: '0 16px 20px', textAlign: 'center', width: '26%' }}>
                  <div style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '11px',
                    color: 'var(--color-muted)',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    padding: '10px 16px',
                    border: '1px solid #222222',
                  }}>
                    DIY AI Tools
                  </div>
                </th>
                <th style={{ padding: '0 0 20px', textAlign: 'center', width: '26%' }}>
                  <div style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '11px',
                    color: '#000',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    padding: '10px 16px',
                    backgroundColor: 'var(--color-accent)',
                  }}>
                    Frank Media
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <motion.tr
                  key={row.label}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={vp}
                  transition={{ duration: 0.4, delay: 0.15 + i * 0.05 }}
                  style={{ borderTop: '1px solid #222222' }}
                >
                  {/* Row label */}
                  <td style={{ padding: '16px 0', fontFamily: 'var(--font-display)', fontSize: '11px', color: 'var(--color-muted)', letterSpacing: '0.06em', textTransform: 'uppercase', verticalAlign: 'middle' }}>
                    {row.label}
                  </td>
                  {/* Agency */}
                  <td style={{ padding: '16px', textAlign: 'center', fontFamily: 'var(--font-display)', fontSize: '12px', color: 'var(--color-muted)', verticalAlign: 'middle' }}>
                    {row.agency}
                  </td>
                  {/* DIY */}
                  <td style={{ padding: '16px', textAlign: 'center', fontFamily: 'var(--font-display)', fontSize: '12px', color: 'var(--color-muted)', verticalAlign: 'middle' }}>
                    {row.diy}
                  </td>
                  {/* Frank Media — highlighted */}
                  <td style={{
                    padding: '16px',
                    textAlign: 'center',
                    fontFamily: 'var(--font-display)',
                    fontSize: '12px',
                    color: 'var(--color-accent)',
                    verticalAlign: 'middle',
                    borderLeft: '1px solid rgba(36,138,61,0.2)',
                    borderRight: '1px solid rgba(36,138,61,0.2)',
                    backgroundColor: 'rgba(36,138,61,0.04)',
                  }}>
                    {row.frank}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Footnote */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.5, delay: 0.5 }}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '11px',
            color: 'var(--color-muted)',
            marginTop: '24px',
            letterSpacing: '0.04em',
          }}
        >
          * DIY AI tools (Enrich Labs, Raleon, etc.) are powerful products. You still have to run them. We run them for you.
        </motion.p>
      </div>
    </section>
  )
}
