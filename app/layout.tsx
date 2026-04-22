import type { Metadata } from 'next'
import { Inter, DM_Mono } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const dmMono = DM_Mono({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  variable: '--font-dm-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "AI Agents that power your business. | Frank Media",
  description:
    'AI marketing agents that replace your entire marketing department. Email and SEO agents for DTC brands. Starts at $1,200/mo. No contracts. Fully managed.',
  openGraph: {
    title: "AI Agents that power your business. | Frank Media",
    description:
      'AI marketing agents that replace your entire marketing department. Email and SEO agents for DTC brands. Starts at $1,200/mo. No contracts. Fully managed.',
    url: 'https://frankmedia.co',
    siteName: 'Frank Media',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "AI Agents that power your business. | Frank Media",
    description:
      'AI marketing agents that replace your entire marketing department. Email and SEO agents for DTC brands. Starts at $1,200/mo.',
  },
  metadataBase: new URL('https://frankmedia.co'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${dmMono.variable}`}>
      <body>{children}</body>
    </html>
  )
}
