'use client'

import { motion } from 'framer-motion'
import { TrendingUp, CheckCircle, Target, BarChart3, Users, Megaphone } from 'lucide-react'
import Button from '@/components/Button'

export default function DigitalMarketing() {
  const features = [
    'SEO & Content Marketing',
    'Social Media Management',
    'Pay-Per-Click (PPC) Campaigns',
    'Email Marketing Automation',
    'Analytics & Reporting',
    'Brand Strategy & Positioning',
    'Influencer Partnerships',
    'Conversion Rate Optimization',
  ]

  const services = [
    { icon: Target, label: 'Targeted Campaigns' },
    { icon: BarChart3, label: 'Data-Driven Insights' },
    { icon: Users, label: 'Audience Growth' },
    { icon: Megaphone, label: 'Brand Awareness' },
  ]

  return (
    <section id="digital-marketing" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm">
              Digital Marketing
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-6">
              Boost Your Online Presence & Engagement
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Drive growth with data-driven marketing strategies that increase brand visibility, engagement, and conversions. Our comprehensive approach covers SEO, social media, PPC, and content marketing to maximize your ROI.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <div key={service.label} className="flex items-center space-x-2">
                    <Icon className="text-primary flex-shrink-0" size={20} />
                    <span className="text-sm text-gray-600">{service.label}</span>
                  </div>
                )
              })}
            </div>
            <Button href="/contact" variant="primary" size="lg">
              Start Marketing
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8"
          >
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle className="text-primary flex-shrink-0 mt-1" size={24} />
                  <span className="text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

