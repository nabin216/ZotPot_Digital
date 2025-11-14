import { Metadata } from 'next'
import WebDevelopment from '@/components/sections/services/WebDevelopment'
import AIAutomation from '@/components/sections/services/AIAutomation'
import DigitalMarketing from '@/components/sections/services/DigitalMarketing'
import CloudServices from '@/components/sections/services/CloudServices'
import Consultancy from '@/components/sections/services/Consultancy'

export const metadata: Metadata = {
  title: 'Services | Zotpot Digital Pvt. Ltd.',
  description: 'Comprehensive digital solutions including Web Development, AI & Automation, Digital Marketing, Cloud Services, and IT Consultancy.',
}

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <WebDevelopment />
      <AIAutomation />
      <DigitalMarketing />
      <CloudServices />
      <Consultancy />
    </div>
  )
}

