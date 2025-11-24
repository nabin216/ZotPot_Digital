import { Metadata } from 'next'
import CompanyIntro from '@/components/sections/about/CompanyIntro'
import MissionVision from '@/components/sections/about/MissionVision'
import WhatMakesUsUnique from '@/components/sections/about/WhatMakesUsUnique'
import TeamSection from '@/components/sections/about/TeamSection'

export const metadata: Metadata = {
  title: 'About Us | Zotpot IT Solutions',
  description: 'Learn about Zotpot IT Solutions - a forward-thinking digital agency specializing in building, automating, and growing businesses through innovative technology solutions.',
}

export default function AboutPage() {
  return (
    <>
      <CompanyIntro />
      <MissionVision />
      <WhatMakesUsUnique />
      <TeamSection />
    </>
  )
}

