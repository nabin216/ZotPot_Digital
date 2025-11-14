'use client'

import { motion } from 'framer-motion'
import { Code, CheckCircle, Smartphone, Globe, Zap, Shield } from 'lucide-react'
import Button from '@/components/Button'

export default function WebDevelopment() {
  const features = [
    'Responsive & Mobile-First Design',
    'Custom Web Applications',
    'E-commerce Solutions',
    'Progressive Web Apps (PWA)',
    'API Development & Integration',
    'Performance Optimization',
    'SEO-Friendly Architecture',
    'Modern UI/UX Design',
  ]

  const techStack = [
    { icon: Globe, label: 'React, Next.js, Vue.js' },
    { icon: Smartphone, label: 'React Native, Flutter' },
    { icon: Zap, label: 'Node.js, Python, PHP' },
    { icon: Shield, label: 'Security & Best Practices' },
  ]

  return (
    <section id="web-development" className="section-padding bg-white pt-32">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm">
              Web & App Development
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-6">
              Build Powerful Web & Mobile Applications
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              From concept to deployment, we create stunning, high-performance web and mobile applications that engage users and drive business results. Our expert developers use cutting-edge technologies to build scalable, secure, and user-friendly solutions.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {techStack.map((tech, index) => {
                const Icon = tech.icon
                return (
                  <div key={tech.label} className="flex items-center space-x-2">
                    <Icon className="text-primary flex-shrink-0" size={20} />
                    <span className="text-sm text-gray-600">{tech.label}</span>
                  </div>
                )
              })}
            </div>
            <Button href="/contact" variant="primary" size="lg">
              Get Started
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

