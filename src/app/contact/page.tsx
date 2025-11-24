import { Metadata } from 'next'
import ContactForm from '@/components/sections/contact/ContactForm'
import ContactInfo from '@/components/sections/contact/ContactInfo'
import MapPlaceholder from '@/components/sections/contact/MapPlaceholder'

export const metadata: Metadata = {
  title: 'Contact Us | Zotpot IT Solutions',
  description: 'Get in touch with Zotpot IT Solutions for web development, AI automation, digital marketing, and cloud services. We\'re here to help transform your digital presence.',
}

export default function ContactPage() {
  return (
    <div className="pt-20">
      <ContactForm />
      <ContactInfo />
      <MapPlaceholder />
    </div>
  )
}

