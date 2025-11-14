'use client'

import { motion } from 'framer-motion'
import { Cloud, CheckCircle, Server, Globe, Shield, Zap } from 'lucide-react'
import Button from '@/components/Button'

export default function CloudServices() {
  const features = [
    'Cloud Infrastructure Setup',
    'AWS, Azure, GCP Deployment',
    'CI/CD Pipeline Configuration',
    'Database Management',
    'Serverless Architecture',
    'Auto-Scaling Solutions',
    'Security & Compliance',
    '24/7 Monitoring & Support',
  ]

  const platforms = [
    { icon: Server, label: 'AWS, Azure, GCP' },
    { icon: Globe, label: 'Docker & Kubernetes' },
    { icon: Shield, label: 'Security Hardening' },
    { icon: Zap, label: 'Performance Tuning' },
  ]

  return (
    <section id="cloud-services" className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="inline-block mb-4 px-4 py-2 bg-accent/10 rounded-full text-accent font-semibold text-sm">
              Cloud & Deployment
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-6">
              Scalable Cloud Infrastructure & Deployment
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Deploy and scale your applications with confidence. We provide end-to-end cloud services including infrastructure setup, deployment automation, and ongoing maintenance to keep your business running 24/7.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {platforms.map((platform, index) => {
                const Icon = platform.icon
                return (
                  <div key={platform.label} className="flex items-center space-x-2">
                    <Icon className="text-accent flex-shrink-0" size={20} />
                    <span className="text-sm text-gray-600">{platform.label}</span>
                  </div>
                )
              })}
            </div>
            <Button href="/contact" variant="primary" size="lg">
              Deploy to Cloud
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2 bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl p-8"
          >
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle className="text-accent flex-shrink-0 mt-1" size={24} />
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

