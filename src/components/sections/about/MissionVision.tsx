'use client'

import { motion } from 'framer-motion'
import { Target, Eye } from 'lucide-react'

export default function MissionVision() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 md:p-10"
          >
            <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6">
              <Target className="text-white" size={32} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              To empower businesses of all sizes through innovative digital solutions that drive growth, efficiency, and success. We strive to make cutting-edge technology accessible and actionable for every client we serve.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl p-8 md:p-10"
          >
            <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center mb-6">
              <Eye className="text-white" size={32} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Our Vision</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              To become the global leader in digital transformation, inspiring innovation and creativity while helping businesses achieve sustainable growth in the digital age. We envision a world where technology seamlessly enables business success.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

