'use client'

import { motion } from 'framer-motion'
import { Briefcase, CheckCircle, Lightbulb, TrendingUp, Users, Target } from 'lucide-react'
import Button from '@/components/Button'

export default function Consultancy() {
  const features = [
    'IT Strategy & Planning',
    'Digital Transformation Roadmap',
    'Technology Stack Selection',
    'Architecture Review & Optimization',
    'Security Audits & Recommendations',
    'Performance Optimization',
    'Team Training & Knowledge Transfer',
    'Ongoing Advisory Support',
  ]

  const areas = [
    { icon: Lightbulb, label: 'Strategic Planning' },
    { icon: TrendingUp, label: 'Digital Transformation' },
    { icon: Users, label: 'Team Optimization' },
    { icon: Target, label: 'Goal Alignment' },
  ]

  return (
    <section id="consultancy" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block mb-4 px-4 py-2 bg-secondary/10 rounded-full text-secondary font-semibold text-sm">
              IT Consultancy
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-6">
              Expert IT Guidance & Strategic Consulting
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Make informed technology decisions with expert guidance. Our consultancy services help you navigate complex IT challenges, optimize infrastructure, and align technology with your business goals for maximum impact.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {areas.map((area, index) => {
                const Icon = area.icon
                return (
                  <div key={area.label} className="flex items-center space-x-2">
                    <Icon className="text-secondary flex-shrink-0" size={20} />
                    <span className="text-sm text-gray-600">{area.label}</span>
                  </div>
                )
              })}
            </div>
            <Button href="/contact" variant="primary" size="lg">
              Get Consultation
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-secondary/10 to-primary/10 rounded-2xl p-8"
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
                  <CheckCircle className="text-secondary flex-shrink-0 mt-1" size={24} />
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

