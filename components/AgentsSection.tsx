'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const vp = { once: true, margin: '-80px' as const }

const agents = [
  {
    id: 'frank',
    name: 'Frank',
    role: 'SEO & GEO Agent',
    description: 'Frank dominates traditional search and AI search. He gets you ranking on Google while simultaneously getting your brand cited inside ChatGPT, Perplexity, and Google\'s AI Overviews.',
    avatar: '/Frank.png',
  },
  {
    id: 'musa',
    name: 'Musa',
    role: 'Paid Search Agent',
    description: 'Musa runs your paid search across Google and Meta. He builds the campaigns, writes the ads, manages the bids, and scales what works. No agency fees. No account managers. Just results.',
    avatar: '/Musa.png',
  },
  {
    id: 'emmy',
    name: 'Emmy',
    role: 'Email Marketing Agent',
    description: 'Emmy builds, sends, and optimises your entire email programme. From welcome flows to win-back campaigns. She studies your data, segments your list, writes the copy, and drives revenue while you sleep.',
    avatar: '/Emmy.png',
  },
  {
    id: 'clark',
    name: 'Clark',
    role: 'Customer Service Agent',
    description: 'Clark handles every inquiry, return, and support ticket instantly. He knows your products, your policies, and your brand voice. Every customer gets a fast, friendly answer. 24/7, without exception.',
    avatar: '/Clark.png',
  },
  {
    id: 'barry',
    name: 'Barry',
    role: 'Social Media Agent',
    description: 'Barry keeps your brand active and consistent across every platform. He writes the captions, schedules the posts, engages with comments, and grows your audience while you focus on the business.',
    avatar: '/Barry.png',
  },
  {
    id: 'bruce',
    name: 'Bruce',
    role: 'SMS Marketing Agent',
    description: 'Bruce runs your SMS channel from top to bottom. Abandoned cart flows, campaign blasts, VIP sequences. He writes the texts, times the sends, and drives the kind of revenue most brands leave on the table.',
    avatar: '/Bruce.png',
  },
  {
    id: 'vera',
    name: 'Vera',
    role: 'Reputation Management Agent',
    description: 'Vera monitors every review across Google, Trustpilot, and your site. She responds, flags issues, follows up after purchases, and keeps your brand reputation spotless.',
    avatar: '/Vera.png',
  },
  {
    id: 'hannah',
    name: 'Hannah',
    role: 'Content & Copy Agent',
    description: 'Hannah writes everything your brand needs to say. Product descriptions, blog posts, ad copy, landing pages. Consistent brand voice, every time, at a pace no human writer can match.',
    avatar: '/Hannah.png',
  },
  {
    id: 'eve',
    name: 'Eve',
    role: 'Conversion Rate Agent',
    description: 'Eve studies your store data, identifies where customers drop off, and fixes it. A/B tests, landing page optimisation, checkout improvements. More revenue from the traffic you already have.',
    avatar: '/Evie.png',
  },
]

export default function AgentsSection() {
  return (
    <section
      id="agents"
      aria-labelledby="agents-heading"
      style={{
        backgroundColor: 'var(--color-surface)',
        padding: 'clamp(80px, 10vw, 120px) clamp(24px, 5vw, 80px)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 'clamp(48px, 7vw, 80px)' }}
        >
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '20px',
            padding: '6px 16px',
            borderRadius: '980px',
            border: '1px solid rgba(0,0,0,0.1)',
            backgroundColor: 'rgba(0,0,0,0.04)',
          }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '11px', color: 'var(--color-muted)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
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
              letterSpacing: '-0.03em',
              color: 'var(--color-text)',
              marginBottom: '16px',
            }}
          >
            Meet the{' '}
            <span style={{ color: 'var(--color-accent)' }}>team.</span>
          </h2>
          <p style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 400,
            fontSize: 'clamp(15px, 1.5vw, 18px)',
            color: 'var(--color-muted)',
            lineHeight: 1.6,
            maxWidth: '480px',
            margin: '0 auto',
            letterSpacing: '-0.01em',
          }}>
            Fully managed by Frank Media. We build them, run them, and optimise them. You just get the results.
          </p>
        </motion.div>

        {/* Agent grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
          gap: 'clamp(24px, 3vw, 40px)',
        }}>
          {agents.map((agent, i) => (
            <motion.div
              key={agent.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                gap: '0',
              }}
            >
              {/* Large avatar */}
              <div style={{
                width: 'clamp(160px, 20vw, 220px)',
                height: 'clamp(160px, 20vw, 220px)',
                borderRadius: '28px',
                overflow: 'hidden',
                backgroundColor: '#E8E8ED',
                marginBottom: '24px',
                flexShrink: 0,
              }}>
                <Image
                  src={agent.avatar}
                  alt={agent.name}
                  width={220}
                  height={220}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', imageRendering: 'pixelated' }}
                />
              </div>

              {/* Name */}
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: 'clamp(28px, 3.5vw, 40px)',
                color: 'var(--color-text)',
                lineHeight: 1,
                letterSpacing: '-0.02em',
                margin: '0 0 8px',
              }}>
                {agent.name}
              </h3>

              {/* Role pill */}
              <div style={{
                display: 'inline-block',
                padding: '4px 14px',
                borderRadius: '980px',
                backgroundColor: 'rgba(36,138,61,0.1)',
                marginBottom: '16px',
              }}>
                <span style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '11px',
                  color: 'var(--color-accent)',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                }}>
                  {agent.role}
                </span>
              </div>

              {/* Description */}
              <p style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 400,
                fontSize: 'clamp(14px, 1.3vw, 16px)',
                color: 'var(--color-muted)',
                lineHeight: 1.65,
                letterSpacing: '-0.01em',
                maxWidth: '300px',
                margin: '0 auto',
                flex: 1,
              }}>
                {agent.description}
              </p>

              {/* CTA */}
              <motion.a
                href="#pricing"
                whileHover={{ scale: 1.02 }}
                style={{
                  marginTop: '28px',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 500,
                  fontSize: '14px',
                  letterSpacing: '-0.01em',
                  color: '#fff',
                  backgroundColor: 'var(--color-accent)',
                  border: 'none',
                  padding: '11px 24px',
                  borderRadius: '980px',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  display: 'inline-block',
                  transition: 'opacity 200ms',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = '0.85' }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = '1' }}
              >
                Hire {agent.name} →
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* Section CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ textAlign: 'center', marginTop: 'clamp(48px, 6vw, 80px)' }}
        >
          <a
            href="/contact"
            style={{
              display: 'inline-block',
              fontFamily: 'var(--font-display)',
              fontWeight: 500,
              fontSize: '16px',
              letterSpacing: '-0.01em',
              color: '#fff',
              backgroundColor: 'var(--color-accent)',
              padding: '16px 36px',
              borderRadius: '980px',
              textDecoration: 'none',
              transition: 'opacity 200ms',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.85' }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = '1' }}
          >
            Build my team →
          </a>
          <p style={{
            fontFamily: 'var(--font-display)',
            fontSize: '12px',
            color: 'var(--color-muted)',
            marginTop: '12px',
            letterSpacing: '-0.01em',
          }}>
            Every agent fully managed. You do nothing.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
