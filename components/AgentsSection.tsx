'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const vp = { once: true, margin: '-100px' as const }

// Geometric SVG avatars — no external images, pure CSS/SVG
function JeffAvatar() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Head */}
      <circle cx="40" cy="32" r="18" fill="#1A2422" stroke="#00E5CC" strokeWidth="1.5" />
      {/* Eyes */}
      <circle cx="33" cy="30" r="2.5" fill="#00E5CC" />
      <circle cx="47" cy="30" r="2.5" fill="#00E5CC" />
      {/* Smile */}
      <path d="M33 37 Q40 43 47 37" stroke="#00E5CC" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      {/* Headset arc */}
      <path d="M22 30 Q22 14 40 14 Q58 14 58 30" stroke="#00E5CC" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      {/* Headset earpieces */}
      <rect x="19" y="28" width="5" height="9" rx="2.5" fill="#00E5CC" />
      <rect x="56" y="28" width="5" height="9" rx="2.5" fill="#00E5CC" />
      {/* Mic arm */}
      <path d="M24 35 L20 42 L26 42" stroke="#00E5CC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* Body / shoulders */}
      <path d="M24 54 Q28 48 40 48 Q52 48 56 54 L58 68 L22 68 Z" fill="#1A2422" stroke="#1F3330" strokeWidth="1" />
      {/* Chat bubble */}
      <rect x="48" y="52" width="22" height="14" rx="3" fill="#00E5CC" />
      <path d="M50 66 L48 72 L56 66" fill="#00E5CC" />
      <circle cx="54" cy="59" r="1.5" fill="#080C0C" />
      <circle cx="59" cy="59" r="1.5" fill="#080C0C" />
      <circle cx="64" cy="59" r="1.5" fill="#080C0C" />
    </svg>
  )
}

function EmmyAvatar() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Head */}
      <circle cx="40" cy="30" r="18" fill="#1A2422" stroke="#00E5CC" strokeWidth="1.5" />
      {/* Eyes */}
      <circle cx="33" cy="28" r="2.5" fill="#00E5CC" />
      <circle cx="47" cy="28" r="2.5" fill="#00E5CC" />
      {/* Smile */}
      <path d="M34 36 Q40 41 46 36" stroke="#00E5CC" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      {/* Body */}
      <path d="M24 52 Q28 46 40 46 Q52 46 56 52 L58 72 L22 72 Z" fill="#1A2422" stroke="#1F3330" strokeWidth="1" />
      {/* Email envelope */}
      <rect x="10" y="52" width="28" height="20" rx="2" fill="#1A2422" stroke="#00E5CC" strokeWidth="1.5" />
      <path d="M10 54 L24 64 L38 54" stroke="#00E5CC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* @ symbol */}
      <circle cx="51" cy="14" r="8" fill="none" stroke="#00E5CC" strokeWidth="1.5" />
      <circle cx="51" cy="14" r="3" fill="none" stroke="#00E5CC" strokeWidth="1.5" />
      <path d="M54 11 L56 14 L54 17" stroke="#00E5CC" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      {/* Revenue arrow */}
      <path d="M44 72 L56 58 L60 64 L68 52" stroke="#00E5CC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M65 50 L70 50 L70 55" stroke="#00E5CC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  )
}

function AtlasAvatar() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Head */}
      <circle cx="40" cy="30" r="18" fill="#1A2422" stroke="#00E5CC" strokeWidth="1.5" />
      {/* Eyes — more analytical, square-ish */}
      <rect x="30" y="26" width="6" height="5" rx="1" fill="#00E5CC" />
      <rect x="44" y="26" width="6" height="5" rx="1" fill="#00E5CC" />
      {/* Straight focused line for mouth */}
      <path d="M34 37 L46 37" stroke="#00E5CC" strokeWidth="1.5" strokeLinecap="round" />
      {/* Body */}
      <path d="M24 52 Q28 46 40 46 Q52 46 56 52 L58 72 L22 72 Z" fill="#1A2422" stroke="#1F3330" strokeWidth="1" />
      {/* Globe */}
      <circle cx="62" cy="20" r="12" fill="#1A2422" stroke="#00E5CC" strokeWidth="1.5" />
      <ellipse cx="62" cy="20" rx="5" ry="12" fill="none" stroke="#00E5CC" strokeWidth="1" />
      <line x1="50" y1="20" x2="74" y2="20" stroke="#00E5CC" strokeWidth="1" />
      <line x1="52" y1="14" x2="72" y2="14" stroke="#00E5CC" strokeWidth="0.75" />
      <line x1="52" y1="26" x2="72" y2="26" stroke="#00E5CC" strokeWidth="0.75" />
      {/* Signal waves — AI search */}
      <path d="M10 58 Q14 54 18 58" stroke="#00E5CC" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M7 54 Q14 47 21 54" stroke="#00E5CC" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      <path d="M4 50 Q14 40 24 50" stroke="#00E5CC" strokeWidth="1" strokeLinecap="round" fill="none" />
      <circle cx="14" cy="61" r="2" fill="#00E5CC" />
    </svg>
  )
}

const agents = [
  {
    id: 'jeff',
    name: 'Jeff',
    role: 'Customer Service Agent',
    tagline: 'Never misses a message. Never has a bad day.',
    description: 'Jeff handles every customer inquiry, return request, and support ticket — instantly, 24/7. He knows your products, your policies, and your brand voice. He escalates the edge cases. He resolves everything else.',
    capabilities: [
      'Instant response to customer inquiries',
      'Returns, refunds, and order tracking',
      'Proactive post-purchase follow-up',
      'Escalates complex issues to you',
    ],
    stat: '< 2min',
    statLabel: 'average response time, 24/7/365',
    avatar: JeffAvatar,
    accentDetail: 'Handles 100% of tier-1 support',
  },
  {
    id: 'emmy',
    name: 'Emmy',
    role: 'Email Marketing Agent',
    tagline: 'Your best email marketer. Times ten.',
    description: 'Emmy builds, sends, and optimises your entire email programme — from welcome flows to win-back campaigns. She studies your data, segments your list, writes the copy, and drives revenue while you sleep.',
    capabilities: [
      'Automated flows and lifecycle campaigns',
      'AI-powered segmentation and personalisation',
      'A/B testing and continuous optimisation',
      'Monthly revenue attribution reporting',
    ],
    stat: '30–45%',
    statLabel: 'of DTC revenue attributed to email when Emmy is running it',
    avatar: EmmyAvatar,
    accentDetail: 'Deployed and generating revenue in 7 days',
  },
  {
    id: 'atlas',
    name: 'Atlas',
    role: 'SEO + GEO Agent',
    tagline: 'Ranked on Google. Cited by ChatGPT. Both.',
    description: "Atlas dominates traditional search AND AI search. He gets you ranking on Google while simultaneously getting your brand cited inside ChatGPT, Perplexity, and Google's AI Overviews. Most of your competitors aren't even in AI search yet.",
    capabilities: [
      'Technical SEO and content optimisation',
      'AI search (GEO) — ChatGPT, Perplexity, Gemini',
      'Keyword research and content strategy',
      'Monthly rankings and AI citation report',
    ],
    stat: '2×',
    statLabel: 'search visibility — Google + AI engines combined',
    avatar: AtlasAvatar,
    accentDetail: 'Most brands have zero AI search presence',
  },
]

function HireButton({ name }: { name: string }) {
  const [hovered, setHovered] = useState(false)
  return (
    <button
      style={{
        fontFamily: 'var(--font-dm-mono)',
        fontSize: '12px',
        letterSpacing: '0.12em',
        color: hovered ? '#000' : 'var(--color-accent)',
        border: '1px solid var(--color-accent)',
        background: hovered ? 'var(--color-accent)' : 'transparent',
        padding: '14px 28px',
        cursor: 'pointer',
        transition: 'background 200ms, color 200ms',
        width: '100%',
        textAlign: 'center',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      HIRE {name.toUpperCase()} →
    </button>
  )
}

export default function AgentsSection() {
  return (
    <section
      id="agents"
      aria-labelledby="agents-heading"
      style={{
        backgroundColor: 'var(--color-bg)',
        padding: 'clamp(80px, 10vw, 120px) clamp(24px, 5vw, 80px)',
        borderTop: '1px solid #1A2422',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 'clamp(40px, 6vw, 72px)' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
            <div style={{ width: '24px', height: '1px', backgroundColor: 'var(--color-accent)' }} />
            <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '11px', color: 'var(--color-accent)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              Your New Team
            </span>
          </div>
          <h2
            id="agents-heading"
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'clamp(36px, 5.5vw, 72px)',
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              color: 'var(--color-text)',
              marginBottom: '16px',
            }}
          >
            Three agents.<br />
            <span style={{ color: 'var(--color-accent)' }}>Zero salaries.</span>
          </h2>
          <p style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '13px', color: 'var(--color-muted)', lineHeight: 1.75, maxWidth: '520px' }}>
            Each agent is fully managed by Frank Media. We build them, run them, and optimise them. You just get the results.
          </p>
        </motion.div>

        {/* Agent cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: 'clamp(16px, 2.5vw, 24px)' }}>
          {agents.map((agent, i) => {
            const AvatarComponent = agent.avatar
            return (
              <motion.div
                key={agent.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={vp}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                style={{
                  backgroundColor: 'var(--color-surface)',
                  border: '1px solid #1F3330',
                  borderRadius: '2px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'border-color 300ms',
                }}
                whileHover={{ borderColor: 'var(--color-accent)' } as never}
              >
                {/* Card top bar */}
                <div style={{
                  backgroundColor: '#0F1A18',
                  padding: '12px clamp(20px, 3vw, 28px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottom: '1px solid #1F3330',
                }}>
                  <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '10px', color: 'var(--color-muted)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                    Agent 0{i + 1}
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <div className="pulse-dot" style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--color-accent)' }} />
                    <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '10px', color: 'var(--color-accent)', letterSpacing: '0.1em' }}>ACTIVE</span>
                  </div>
                </div>

                {/* Card body */}
                <div style={{ padding: 'clamp(24px, 3.5vw, 36px)', display: 'flex', flexDirection: 'column', gap: '20px', flex: 1 }}>
                  {/* Avatar + name */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <div style={{ flexShrink: 0 }}>
                      <AvatarComponent />
                    </div>
                    <div>
                      <h3 style={{
                        fontFamily: 'var(--font-display)',
                        fontWeight: 700,
                        fontSize: 'clamp(28px, 3.5vw, 40px)',
                        color: 'var(--color-text)',
                        lineHeight: 1,
                        letterSpacing: '-0.02em',
                        margin: 0,
                      }}>
                        {agent.name}
                      </h3>
                      <p style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '11px', color: 'var(--color-accent)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '4px' }}>
                        {agent.role}
                      </p>
                    </div>
                  </div>

                  {/* Tagline */}
                  <p style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'clamp(14px, 1.5vw, 17px)', color: 'var(--color-text)', lineHeight: 1.4, letterSpacing: '-0.01em', margin: 0 }}>
                    &ldquo;{agent.tagline}&rdquo;
                  </p>

                  {/* Description */}
                  <p style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '12px', color: 'var(--color-muted)', lineHeight: 1.75, margin: 0 }}>
                    {agent.description}
                  </p>

                  {/* Capabilities */}
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', margin: 0, padding: 0 }}>
                    {agent.capabilities.map((c) => (
                      <li key={c} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                        <span style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-dm-mono)', fontSize: '11px', flexShrink: 0, marginTop: '2px' }}>→</span>
                        <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '11px', color: 'var(--color-text)', lineHeight: 1.6 }}>{c}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Divider */}
                  <div style={{ height: '1px', backgroundColor: '#1F3330' }} />

                  {/* Stat */}
                  <div>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(40px, 5vw, 60px)', color: 'var(--color-accent)', lineHeight: 1, letterSpacing: '-0.02em' }}>
                      {agent.stat}
                    </div>
                    <p style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '11px', color: 'var(--color-muted)', lineHeight: 1.6, marginTop: '6px', maxWidth: '240px' }}>
                      {agent.statLabel}
                    </p>
                  </div>

                  {/* Accent detail */}
                  <div style={{ padding: '10px 14px', backgroundColor: 'rgba(0,229,204,0.05)', border: '1px solid rgba(0,229,204,0.15)', borderRadius: '2px' }}>
                    <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '11px', color: 'var(--color-accent)', letterSpacing: '0.06em' }}>
                      ✓ {agent.accentDetail}
                    </span>
                  </div>

                  {/* CTA */}
                  <HireButton name={agent.name} />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '11px', color: 'var(--color-muted)', textAlign: 'center', marginTop: 'clamp(24px, 4vw, 48px)', letterSpacing: '0.04em' }}
        >
          Paid Social Agent and Analytics Agent in development — Growth plan clients get early access.
        </motion.p>
      </div>
    </section>
  )
}
