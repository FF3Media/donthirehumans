'use client'

const items = [
  { text: 'DEPLOYED IN 7 DAYS', accent: false },
  { text: '★', accent: true },
  { text: 'NO ACCOUNT MANAGERS', accent: false },
  { text: '★', accent: true },
  { text: 'NO CONTRACTS', accent: false },
  { text: '★', accent: true },
  { text: 'STARTS AT $750/MO', accent: true },
  { text: '★', accent: true },
  { text: 'REPLACES $21,000/MO IN AGENCY COSTS', accent: false },
  { text: '★', accent: true },
  { text: 'NO HUMANS', accent: true },
  { text: '★', accent: true },
  { text: 'MEASURABLE ROI IN 30 DAYS', accent: false },
  { text: '★', accent: true },
  { text: 'BUILT FOR DTC', accent: false },
  { text: '★', accent: true },
]

export default function ProofTicker() {
  const doubled = [...items, ...items]

  return (
    <div
      style={{
        backgroundColor: 'var(--color-surface)',
        overflow: 'hidden',
        padding: '18px 0',
        borderTop: '1px solid #1F3330',
        borderBottom: '1px solid #1F3330',
      }}
    >
      <div
        className="marquee-track"
        style={{
          display: 'flex',
          whiteSpace: 'nowrap',
          width: 'max-content',
        }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            style={{
              fontFamily: 'var(--font-dm-mono)',
              fontSize: '12px',
              letterSpacing: '0.12em',
              color: item.accent ? 'var(--color-accent)' : 'var(--color-text)',
              marginRight: '24px',
            }}
          >
            {item.text}
          </span>
        ))}
      </div>
    </div>
  )
}
