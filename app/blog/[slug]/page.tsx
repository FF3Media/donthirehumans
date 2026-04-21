import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { getPostBySlug, getAllSlugs, posts } from '@/lib/posts'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  if (!post) return {}
  return {
    title: `${post.title} | Frank Media`,
    description: post.excerpt,
  }
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 2)

  return (
    <>
      <Nav />
      <main style={{
        minHeight: '100vh',
        backgroundColor: 'var(--color-bg)',
        paddingTop: 'clamp(100px, 10vw, 140px)',
        paddingBottom: 'clamp(80px, 10vw, 120px)',
      }}>
        <div style={{ maxWidth: '720px', margin: '0 auto', padding: '0 clamp(24px, 5vw, 48px)' }}>

          {/* Back */}
          <Link href="/blog" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            fontFamily: 'var(--font-display)',
            fontSize: '13px',
            color: 'var(--color-muted)',
            textDecoration: 'none',
            marginBottom: '40px',
            transition: 'color 200ms',
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--color-text)' }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--color-muted)' }}
          >
            ← Blog
          </Link>

          {/* Meta */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px', flexWrap: 'wrap' }}>
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
              {post.category}
            </span>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '12px', color: 'var(--color-muted)' }}>
              {post.date} · {post.readTime}
            </span>
          </div>

          {/* Title */}
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: 'clamp(28px, 5vw, 52px)',
            letterSpacing: '-0.04em',
            lineHeight: 1.05,
            color: 'var(--color-text)',
            marginBottom: 'clamp(24px, 4vw, 40px)',
          }}>
            {post.title}
          </h1>

          {/* Divider */}
          <div style={{ height: '1px', backgroundColor: 'rgba(0,0,0,0.08)', marginBottom: 'clamp(32px, 4vw, 48px)' }} />

          {/* Body */}
          <div
            className="prose"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(15px, 1.5vw, 17px)',
              lineHeight: 1.75,
              color: 'var(--color-text)',
              letterSpacing: '-0.01em',
            }}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* CTA */}
          <div style={{
            marginTop: 'clamp(48px, 6vw, 72px)',
            padding: 'clamp(28px, 4vw, 40px)',
            backgroundColor: 'var(--color-surface)',
            borderRadius: '20px',
            border: '1px solid rgba(0,0,0,0.07)',
            textAlign: 'center',
          }}>
            <p style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'clamp(18px, 2.5vw, 24px)',
              letterSpacing: '-0.03em',
              color: 'var(--color-text)',
              marginBottom: '10px',
            }}>
              Want this done for your brand?
            </p>
            <p style={{
              fontFamily: 'var(--font-display)',
              fontSize: '14px',
              color: 'var(--color-muted)',
              lineHeight: 1.6,
              marginBottom: '24px',
            }}>
              Book a free 15-minute audit. We&apos;ll show you exactly where the opportunity is.
            </p>
            <a
              href="/contact"
              style={{
                display: 'inline-block',
                fontFamily: 'var(--font-display)',
                fontWeight: 500,
                fontSize: '15px',
                color: '#fff',
                backgroundColor: 'var(--color-accent)',
                padding: '14px 32px',
                borderRadius: '980px',
                textDecoration: 'none',
                transition: 'opacity 200ms',
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = '0.85' }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = '1' }}
            >
              Book free audit →
            </a>
          </div>

          {/* Related */}
          {related.length > 0 && (
            <div style={{ marginTop: 'clamp(48px, 6vw, 72px)' }}>
              <p style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '14px',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: 'var(--color-muted)',
                marginBottom: '24px',
              }}>
                More from Frank Media
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {related.map((r) => (
                  <Link key={r.slug} href={`/blog/${r.slug}`} style={{ textDecoration: 'none' }}>
                    <div style={{
                      padding: '20px 24px',
                      backgroundColor: 'var(--color-surface)',
                      borderRadius: '14px',
                      border: '1px solid rgba(0,0,0,0.07)',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: '16px',
                      transition: 'border-color 200ms',
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(36,138,61,0.35)' }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,0,0,0.07)' }}
                    >
                      <div>
                        <p style={{
                          fontFamily: 'var(--font-display)',
                          fontWeight: 700,
                          fontSize: '15px',
                          letterSpacing: '-0.02em',
                          color: 'var(--color-text)',
                          marginBottom: '4px',
                        }}>
                          {r.title}
                        </p>
                        <p style={{ fontFamily: 'var(--font-display)', fontSize: '11px', color: 'var(--color-muted)' }}>
                          {r.date} · {r.readTime}
                        </p>
                      </div>
                      <span style={{ color: 'var(--color-accent)', fontSize: '18px', flexShrink: 0 }}>→</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

        </div>
      </main>
      <Footer />
    </>
  )
}
