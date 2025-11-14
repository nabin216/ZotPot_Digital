'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'contact@zotpotdigital.com',
    href: 'mailto:contact@zotpotdigital.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (234) 567-890',
    href: 'tel:+1234567890',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: '123 Digital Street, Tech City, TC 12345',
    href: '#',
  },
  {
    icon: Clock,
    label: 'Business Hours',
    value: 'Mon - Fri: 9:00 AM - 6:00 PM',
    href: '#',
  },
]

export default function ContactInfo() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {contactInfo.map((info, index) => {
            const Icon = info.icon
            const content = (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-primary" size={24} />
                </div>
                <h3 className="text-sm font-semibold text-gray-500 mb-2">{info.label}</h3>
                {info.href !== '#' ? (
                  <a
                    href={info.href}
                    className="text-secondary font-medium hover:text-primary transition-colors"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-secondary font-medium">{info.value}</p>
                )}
              </motion.div>
            )

            if (info.href && info.href !== '#') {
              return (
                <a key={info.label} href={info.href}>
                  {content}
                </a>
              )
            }

            return <div key={info.label}>{content}</div>
          })}
        </div>
      </div>
    </section>
  )
}

