import Hero from '@/components/sections/Hero'
import ServicesOverview from '@/components/sections/ServicesOverview'
import AboutPreview from '@/components/sections/AboutPreview'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import CTABanner from '@/components/CTABanner'

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <AboutPreview />
      <WhyChooseUs />
      <CTABanner />
    </>
  )
}

