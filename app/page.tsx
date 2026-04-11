'use client'

import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import BrandsSection from '@/components/BrandsSection'
import ReviewsSection from '@/components/ReviewsSection'
import AgentsSection from '@/components/AgentsSection'
import IndustriesSection from '@/components/IndustriesSection'
import UrgencySection from '@/components/UrgencySection'
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
      <BrandsSection />
      <ReviewsSection />
      <IndustriesSection />
      <AgentsSection />
      <UrgencySection />
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
