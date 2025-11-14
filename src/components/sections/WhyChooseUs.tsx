'use client'

import { motion } from 'framer-motion'
import { Award, Users, Clock, Shield, Rocket, Target } from 'lucide-react'

const features = [
  {
    icon: Award,
    title: 'Expert Team',
    description: 'Certified professionals with years of industry experience',
  },
  {
    icon: Rocket,
    title: 'Fast Delivery',
    description: 'Agile methodology ensures quick turnaround times',
  },
  {
    icon: Shield,
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security for all your digital assets',
  },
  {
    icon: Target,
    title: 'Results-Driven',
    description: 'Data-backed strategies that deliver measurable outcomes',
  },
  {
    icon: Users,
    title: '24/7 Support',
    description: 'Round-the-clock assistance when you need it most',
  },
  {
    icon: Clock,
    title: 'Scalable Solutions',
    description: 'Future-proof technology that grows with your business',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-4">
            Why Choose Us
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            We combine technical expertise with business acumen to deliver exceptional results
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

