'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function PasswordPage() {
  const [value, setValue] = useState('')
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError(false)

    const res = await fetch('/api/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password: value }),
    })

    if (res.ok) {
      router.push('/')
      router.refresh()
    } else {
      setError(true)
      setLoading(false)
    }
  }

  return (
    <main style={{
      minHeight: '100vh',
      backgroundColor: '#0A0A0A',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px',
    }}>
      <div style={{ width: '100%', maxWidth: '360px', textAlign: 'center' }}>

        <p style={{
          fontFamily: 'system-ui, -apple-system, sans-serif',
          fontWeight: 700,
          fontSize: '20px',
          letterSpacing: '-0.02em',
          color: '#fff',
          marginBottom: '8px',
        }}>
          Frank Media
        </p>

        <p style={{
          fontFamily: 'system-ui, -apple-system, sans-serif',
          fontSize: '14px',
          color: 'rgba(255,255,255,0.4)',
          marginBottom: '32px',
          letterSpacing: '-0.01em',
        }}>
          This site is password protected.
        </p>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <input
            type="password"
            placeholder="Enter password"
            value={value}
            onChange={e => setValue(e.target.value)}
            autoFocus
            style={{
              fontFamily: 'system-ui, -apple-system, sans-serif',
              fontSize: '15px',
              color: '#fff',
              backgroundColor: 'rgba(255,255,255,0.07)',
              border: error ? '1px solid rgba(255,80,80,0.6)' : '1px solid rgba(255,255,255,0.1)',
              borderRadius: '12px',
              padding: '14px 16px',
              outline: 'none',
              width: '100%',
              boxSizing: 'border-box',
              letterSpacing: '0.05em',
            }}
          />
          {error && (
            <p style={{
              fontFamily: 'system-ui, -apple-system, sans-serif',
              fontSize: '13px',
              color: 'rgba(255,80,80,0.9)',
              letterSpacing: '-0.01em',
            }}>
              Incorrect password. Try again.
            </p>
          )}
          <button
            type="submit"
            disabled={loading || !value}
            style={{
              fontFamily: 'system-ui, -apple-system, sans-serif',
              fontWeight: 600,
              fontSize: '15px',
              color: '#fff',
              backgroundColor: '#1A7A35',
              border: 'none',
              borderRadius: '980px',
              padding: '14px',
              cursor: loading || !value ? 'not-allowed' : 'pointer',
              opacity: loading || !value ? 0.5 : 1,
              transition: 'opacity 200ms',
            }}
          >
            {loading ? 'Checking...' : 'Enter'}
          </button>
        </form>

      </div>
    </main>
  )
}
