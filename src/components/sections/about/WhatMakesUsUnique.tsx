'use client'

import { motion } from 'framer-motion'
import { Zap, Layers, Puzzle } from 'lucide-react'

const uniqueFeatures = [
  {
    icon: Layers,
    title: 'End-to-End Solutions',
    description: 'From initial consultation to deployment and ongoing support, we provide comprehensive services under one roof.',
  },
  {
    icon: Zap,
    title: 'Cutting-Edge Technology',
    description: 'We leverage the latest tools and technologies including AI, automation platforms like n8n, and modern cloud infrastructure.',
  },
  {
    icon: Puzzle,
    title: 'Customized Approach',
    description: 'Every business is unique. We tailor our solutions to fit your specific needs, goals, and industry requirements.',
  },
]

export default function WhatMakesUsUnique() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-4">
            What Makes Us Unique
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            We stand out through our holistic approach, technical expertise, and commitment to client success
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {uniqueFeatures.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <Icon className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

