import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { posts } from '@/lib/posts'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | Frank Media',
  description: "Insights on AI agents, email marketing, SEO, and what's actually working for DTC brands right now.",
}

export default function BlogPage() {
  const [featured, ...rest] = posts

  return (
    <>
      <Nav />
      <main style={{
        minHeight: '100vh',
        backgroundColor: 'var(--color-bg)',
        paddingTop: 'clamp(100px, 10vw, 140px)',
        paddingBottom: 'clamp(80px, 10vw, 120px)',
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 clamp(24px, 5vw, 80px)' }}>

          {/* Header */}
          <div style={{ marginBottom: 'clamp(48px, 6vw, 80px)' }}>
            <p style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 500,
              fontSize: '12px',
              color: 'var(--color-accent)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '16px',
            }}>
              Frank Media
            </p>
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 'clamp(40px, 6vw, 72px)',
              letterSpacing: '-0.04em',
              lineHeight: 1.0,
              color: 'var(--color-text)',
              marginBottom: '16px',
            }}>
              What&apos;s actually working.
            </h1>
            <p style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 400,
              fontSize: 'clamp(15px, 1.5vw, 17px)',
              color: 'var(--color-muted)',
              lineHeight: 1.6,
              maxWidth: '480px',
            }}>
              Insights on AI agents, email, SEO, and what DTC brands are doing differently right now.
            </p>
          </div>

          {/* Featured post */}
          <Link
            href={`/blog/${featured.slug}`}
            style={{ textDecoration: 'none', display: 'block', marginBottom: 'clamp(40px, 5vw, 64px)' }}
          >
            <div className="blog-card" style={{
              backgroundColor: 'var(--color-surface)',
              borderRadius: '20px',
              padding: 'clamp(32px, 5vw, 56px)',
              border: '1px solid rgba(0,0,0,0.07)',
              transition: 'border-color 200ms',
              cursor: 'pointer',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                <span style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 600,
                  fontSize: '11px',
                  color: 'var(--color-accent)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  backgroundColor: 'rgba(36,138,61,0.1)',
                  padding: '4px 10px',
                  borderRadius: '980px',
                }}>
                  {featured.category}
                </span>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '12px', color: 'var(--color-muted)' }}>
                  {featured.date} · {featured.readTime}
                </span>
              </div>

              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: 'clamp(24px, 3.5vw, 40px)',
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                color: 'var(--color-text)',
                marginBottom: '16px',
                maxWidth: '720px',
              }}>
                {featured.title}
              </h2>

              <p style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 400,
                fontSize: 'clamp(14px, 1.4vw, 16px)',
                color: 'var(--color-muted)',
                lineHeight: 1.65,
                maxWidth: '600px',
                marginBottom: '24px',
              }}>
                {featured.excerpt}
              </p>

              <span style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 600,
                fontSize: '14px',
                color: 'var(--color-accent)',
                letterSpacing: '-0.01em',
              }}>
                Read article →
              </span>
            </div>
          </Link>

          {/* Post grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))',
            gap: 'clamp(16px, 2vw, 24px)',
          }}>
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                style={{ textDecoration: 'none' }}
              >
                <div className="blog-card" style={{
                  backgroundColor: 'var(--color-surface)',
                  borderRadius: '16px',
                  padding: 'clamp(24px, 3vw, 32px)',
                  border: '1px solid rgba(0,0,0,0.07)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'border-color 200ms',
                  cursor: 'pointer',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                    <span style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 600,
                      fontSize: '10px',
                      color: 'var(--color-accent)',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      backgroundColor: 'rgba(36,138,61,0.1)',
                      padding: '3px 9px',
                      borderRadius: '980px',
                    }}>
                      {post.category}
                    </span>
                  </div>

                  <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: 'clamp(18px, 2vw, 22px)',
                    letterSpacing: '-0.03em',
                    lineHeight: 1.2,
                    color: 'var(--color-text)',
                    marginBottom: '12px',
                    flex: 1,
                  }}>
                    {post.title}
                  </h3>

                  <p style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 400,
                    fontSize: '13px',
                    color: 'var(--color-muted)',
                    lineHeight: 1.6,
                    marginBottom: '20px',
                  }}>
                    {post.excerpt}
                  </p>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: '11px', color: 'var(--color-muted)' }}>
                      {post.date} · {post.readTime}
                    </span>
                    <span style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 600,
                      fontSize: '13px',
                      color: 'var(--color-accent)',
                    }}>
                      →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
