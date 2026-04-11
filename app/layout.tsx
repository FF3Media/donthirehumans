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
  title: "Don't Hire Humans. | Frank Media",
  description:
    'AI marketing agents that replace your entire marketing department. Email and SEO agents for DTC ecommerce brands. Starts at $750/mo. No contracts. No humans.',
  openGraph: {
    title: "Don't Hire Humans. | Frank Media",
    description:
      'AI marketing agents that replace your entire marketing department. Email and SEO agents for DTC ecommerce brands. Starts at $750/mo. No contracts. No humans.',
    url: 'https://donthirehumans.ai',
    siteName: 'Frank Media',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Don't Hire Humans. | Frank Media",
    description:
      'AI marketing agents that replace your entire marketing department. Email and SEO agents for DTC ecommerce brands. Starts at $750/mo.',
  },
  metadataBase: new URL('https://donthirehumans.ai'),
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
