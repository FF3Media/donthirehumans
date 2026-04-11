'use client'

import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import ProofTicker from '@/components/ProofTicker'
import ProblemSection from '@/components/ProblemSection'
import SolutionSection from '@/components/SolutionSection'
import StatSection from '@/components/StatSection'
import HowItWorks from '@/components/HowItWorks'
import Pricing from '@/components/Pricing'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <ProofTicker />
      <ProblemSection />
      <SolutionSection />
      <StatSection />
      <HowItWorks />
      <Pricing />
      <FinalCTA />
      <Footer />
    </main>
  )
}
