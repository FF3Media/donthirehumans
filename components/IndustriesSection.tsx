'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const industries = [
  {
    id: 'real-estate',
    label: 'Real Estate',
    heading: 'Close more deals.',
    headingAccent: 'Zero overhead.',
    subtext: 'AI agents that handle your leads, listings, and client communication around the clock.',
    agents: [
      {
        name: 'Maya',
        role: 'Lead Nurture Agent',
        description: 'Maya follows up with every inbound lead instantly. She qualifies, nurtures, and books viewings while you focus on closing.',
        avatar: '/maya.png',
      },
      {
        name: 'Leo',
        role: 'Listing Agent',
        description: 'Leo writes compelling listing descriptions, optimises for search, and keeps your property pages performing 24/7.',
        avatar: '/leo.png',
      },
      {
        name: 'Nina',
        role: 'Client Comms Agent',
        description: 'Nina handles every buyer and seller inquiry, sends updates, and keeps clients informed at every stage of the process.',
        avatar: '/nina.png',
      },
    ],
  },
  {
    id: 'skilled-trades',
    label: 'Skilled Trades',
    heading: 'More jobs booked.',
    headingAccent: 'Zero missed calls.',
    subtext: 'AI agents built for plumbers, electricians, HVAC, and contractors. Never lose a job to a missed inquiry again.',
    agents: [
      {
        name: 'Dex',
        role: 'Receptionist & Booking Agent',
        description: 'Dex answers every call, text, and form submission instantly. He qualifies the job, gives an estimate range, and books it straight into your calendar. No missed leads. Ever.',
        avatar: '/dex.png',
      },
      {
        name: 'Vera',
        role: 'Reputation Management Agent',
        description: 'Vera monitors your reviews across Google, Yelp, and Facebook. She follows up after every job, drives 5-star reviews, and responds to negative ones professionally before they cost you work.',
        avatar: '/vera.png',
      },
      {
        name: 'Rex',
        role: 'Follow-up & Retention Agent',
        description: 'Rex keeps past customers warm with seasonal reminders, service check-ins, and upsell offers. More repeat jobs, more referrals, more revenue from the customers you already have.',
        avatar: '/rex.png',
      },
    ],
  },
  {
    id: 'dtc',
    label: 'DTC Brands',
    heading: 'Scale your brand.',
    headingAccent: 'Not your payroll.',
    subtext: 'A full-stack AI team for direct-to-consumer brands. Email, SEO, paid, social, SMS, and customer service — all covered.',
    agents: [
      {
        name: 'Emmy',
        role: 'Email Marketing Agent',
        description: 'Emmy builds, sends, and optimises your entire email programme. From welcome flows to win-back campaigns. Revenue while you sleep.',
        avatar: '/emmy.png',
      },
      {
        name: 'Frank',
        role: 'SEO & GEO Agent',
        description: 'Frank dominates traditional search and AI search. Ranking on Google while getting your brand cited in ChatGPT and Perplexity.',
        avatar: '/frank.png',
      },
      {
        name: 'Musa',
        role: 'Paid Search Agent',
        description: 'Musa runs your paid search across Google and Meta. Builds campaigns, writes ads, manages bids, and scales what works.',
        avatar: '/musa.png',
      },
    ],
  },
]

export default function IndustriesSection() {
  const [active, setActive] = useState('real-estate')
  const current = industries.find(i => i.id === active)!

  return (
    <section
      aria-label="Industries"
      style={{
        backgroundColor: '#0A0A0A',
        padding: 'clamp(80px, 10vw, 120px) clamp(24px, 5vw, 80px)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle glow */}
      <div style={{
        position: 'absolute',
        top: '30%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '800px',
        height: '500px',
        background: 'radial-gradient(ellipse, rgba(36,138,61,0.1) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>

        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 500,
            fontSize: '12px',
            color: 'var(--color-accent)',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            textAlign: 'center',
            marginBottom: '40px',
          }}
        >
          Built for your business
        </motion.p>

        {/* Tab switcher */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '8px',
            marginBottom: 'clamp(48px, 6vw, 72px)',
            flexWrap: 'wrap',
          }}
        >
          {industries.map(ind => (
            <button
              key={ind.id}
              onClick={() => setActive(ind.id)}
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 500,
                fontSize: '15px',
                letterSpacing: '-0.01em',
                padding: '10px 22px',
                borderRadius: '980px',
                border: active === ind.id ? 'none' : '1px solid rgba(255,255,255,0.15)',
                backgroundColor: active === ind.id ? 'var(--color-accent)' : 'transparent',
                color: active === ind.id ? '#fff' : 'rgba(255,255,255,0.5)',
                cursor: 'pointer',
                transition: 'all 200ms ease',
              }}
            >
              {ind.label}
            </button>
          ))}
        </motion.div>

        {/* Content panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
          >
            {/* Heading */}
            <div style={{ textAlign: 'center', marginBottom: 'clamp(40px, 5vw, 64px)' }}>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: 'clamp(32px, 5vw, 64px)',
                letterSpacing: '-0.04em',
                lineHeight: 1.05,
                color: '#fff',
                marginBottom: '16px',
              }}>
                {current.heading}{' '}
                <span style={{ color: 'var(--color-accent)' }}>{current.headingAccent}</span>
              </h2>
              <p style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 400,
                fontSize: 'clamp(15px, 1.5vw, 18px)',
                color: 'rgba(255,255,255,0.5)',
                lineHeight: 1.6,
                letterSpacing: '-0.01em',
                maxWidth: '520px',
                margin: '0 auto',
              }}>
                {current.subtext}
              </p>
            </div>

            {/* Agent cards */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: 'clamp(20px, 3vw, 36px)',
            }}>
              {current.agents.map((agent, i) => (
                <motion.div
                  key={agent.name}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    borderRadius: '24px',
                    border: '1px solid rgba(255,255,255,0.08)',
                    padding: 'clamp(24px, 3vw, 36px)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                  }}
                >
                  {/* Avatar */}
                  <div style={{
                    width: 'clamp(100px, 14vw, 140px)',
                    height: 'clamp(100px, 14vw, 140px)',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    backgroundColor: '#E8E8ED',
                    marginBottom: '20px',
                    flexShrink: 0,
                  }}>
                    <Image
                      src={agent.avatar}
                      alt={agent.name}
                      width={140}
                      height={140}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', imageRendering: 'pixelated' }}
                    />
                  </div>

                  {/* Name */}
                  <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: 'clamp(22px, 2.5vw, 30px)',
                    color: '#fff',
                    letterSpacing: '-0.02em',
                    margin: '0 0 6px',
                  }}>
                    {agent.name}
                  </h3>

                  {/* Role pill */}
                  <div style={{
                    display: 'inline-block',
                    padding: '4px 14px',
                    borderRadius: '980px',
                    backgroundColor: 'rgba(36,138,61,0.1)',
                    marginBottom: '14px',
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
                    fontSize: 'clamp(13px, 1.2vw, 15px)',
                    color: 'rgba(255,255,255,0.45)',
                    lineHeight: 1.65,
                    letterSpacing: '-0.01em',
                    flex: 1,
                  }}>
                    {agent.description}
                  </p>
                </motion.div>
              ))}
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  )
}
