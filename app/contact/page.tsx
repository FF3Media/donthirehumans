'use client'

import { useState } from 'react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', brand: '', revenue: '', message: '' })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <Nav />
      <main style={{
        minHeight: '100vh',
        backgroundColor: 'var(--color-bg)',
        padding: 'clamp(120px, 12vw, 160px) clamp(24px, 5vw, 80px) clamp(80px, 10vw, 120px)',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
      }}>
        <div style={{ maxWidth: '560px', width: '100%' }}>

          {!submitted ? (
            <>
              <div style={{ marginBottom: 'clamp(32px, 4vw, 48px)' }}>
                <p style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 500,
                  fontSize: '12px',
                  color: 'var(--color-muted)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  marginBottom: '16px',
                }}>
                  Free Audit
                </p>
                <h1 style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: 'clamp(36px, 5vw, 56px)',
                  letterSpacing: '-0.04em',
                  lineHeight: 1.05,
                  color: 'var(--color-text)',
                  marginBottom: '16px',
                }}>
                  Let&apos;s see what your brand is leaving on the table.
                </h1>
                <p style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 400,
                  fontSize: 'clamp(15px, 1.5vw, 17px)',
                  color: 'var(--color-muted)',
                  lineHeight: 1.6,
                  letterSpacing: '-0.01em',
                }}>
                  Fill this in and we&apos;ll be in touch right away with a tailored breakdown of where AI agents can drive the most impact for your brand.
                </p>
              </div>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

                {[
                  { name: 'name', label: 'Your name', type: 'text', placeholder: 'Your name' },
                  { name: 'email', label: 'Email address', type: 'email', placeholder: 'frank@yourbrand.com' },
                  { name: 'brand', label: 'Brand name', type: 'text', placeholder: 'Your Brand' },
                ].map(field => (
                  <div key={field.name}>
                    <label style={{
                      display: 'block',
                      fontFamily: 'var(--font-display)',
                      fontWeight: 500,
                      fontSize: '13px',
                      color: 'var(--color-text)',
                      letterSpacing: '-0.01em',
                      marginBottom: '8px',
                    }}>
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      value={form[field.name as keyof typeof form]}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        fontFamily: 'var(--font-display)',
                        fontSize: '15px',
                        color: 'var(--color-text)',
                        backgroundColor: 'var(--color-surface)',
                        border: '1px solid rgba(0,0,0,0.1)',
                        borderRadius: '12px',
                        padding: '14px 16px',
                        outline: 'none',
                        letterSpacing: '-0.01em',
                        boxSizing: 'border-box',
                      }}
                    />
                  </div>
                ))}

                <div>
                  <label style={{
                    display: 'block',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 500,
                    fontSize: '13px',
                    color: 'var(--color-text)',
                    letterSpacing: '-0.01em',
                    marginBottom: '8px',
                  }}>
                    Annual revenue range
                  </label>
                  <select
                    name="revenue"
                    value={form.revenue}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      fontFamily: 'var(--font-display)',
                      fontSize: '15px',
                      color: form.revenue ? 'var(--color-text)' : 'var(--color-muted)',
                      backgroundColor: 'var(--color-surface)',
                      border: '1px solid rgba(0,0,0,0.1)',
                      borderRadius: '12px',
                      padding: '14px 16px',
                      outline: 'none',
                      letterSpacing: '-0.01em',
                      boxSizing: 'border-box',
                      appearance: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    <option value="" disabled>Select range</option>
                    <option value="under-500k">Under $500k</option>
                    <option value="500k-1m">$500k to $1M</option>
                    <option value="1m-5m">$1M to $5M</option>
                    <option value="5m-10m">$5M to $10M</option>
                    <option value="10m+">$10M+</option>
                  </select>
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 500,
                    fontSize: '13px',
                    color: 'var(--color-text)',
                    letterSpacing: '-0.01em',
                    marginBottom: '8px',
                  }}>
                    Anything else we should know? (optional)
                  </label>
                  <textarea
                    name="message"
                    placeholder="Current team size, biggest pain points, channels you want to improve..."
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    style={{
                      width: '100%',
                      fontFamily: 'var(--font-display)',
                      fontSize: '15px',
                      color: 'var(--color-text)',
                      backgroundColor: 'var(--color-surface)',
                      border: '1px solid rgba(0,0,0,0.1)',
                      borderRadius: '12px',
                      padding: '14px 16px',
                      outline: 'none',
                      letterSpacing: '-0.01em',
                      boxSizing: 'border-box',
                      resize: 'vertical',
                    }}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    marginTop: '8px',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 600,
                    fontSize: '16px',
                    letterSpacing: '-0.01em',
                    color: '#fff',
                    backgroundColor: 'var(--color-accent)',
                    border: 'none',
                    padding: '16px 32px',
                    borderRadius: '980px',
                    cursor: 'pointer',
                    width: '100%',
                  }}
                >
                  Get my free audit
                </button>

              </form>
            </>
          ) : (
            <div style={{ textAlign: 'center', paddingTop: '48px' }}>
              <div style={{ fontSize: '48px', marginBottom: '24px' }}>✓</div>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: 'clamp(28px, 4vw, 40px)',
                letterSpacing: '-0.03em',
                color: 'var(--color-text)',
                marginBottom: '16px',
              }}>
                You&apos;re on the list.
              </h2>
              <p style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 400,
                fontSize: '17px',
                color: 'var(--color-muted)',
                lineHeight: 1.6,
                letterSpacing: '-0.01em',
              }}>
                We&apos;ll review your brand and be in touch within 24 hours with your free audit.
              </p>
            </div>
          )}

        </div>
      </main>
      <Footer />
    </>
  )
}
