'use client'

import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import ProofTicker from '@/components/ProofTicker'
import ProblemSection from '@/components/ProblemSection'
import SolutionSection from '@/components/SolutionSection'
import ComparisonSection from '@/components/ComparisonSection'
import StatSection from '@/components/StatSection'
import ProofSection from '@/components/ProofSection'
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
      <ComparisonSection />
      <StatSection />
      <ProofSection />
      <HowItWorks />
      <Pricing />
      <FinalCTA />
      <Footer />
    </main>
  )
}
