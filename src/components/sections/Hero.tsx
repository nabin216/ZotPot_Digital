'use client'

import { motion } from 'framer-motion'
import Button from '@/components/Button'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-white to-primary/5 pt-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm"
            >
              Build. Automate. Grow.
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-secondary mb-6 leading-tight"
            >
              Empowering Business Through{' '}
              <span className="text-primary">Smart Digital Solutions</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Web Development, Automation, AI, Cloud & Marketing — all in one agency.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button href="/contact" variant="primary" size="lg">
                Get a Quote
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button href="/services" variant="outline" size="lg">
                View Services
              </Button>
            </motion.div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full h-[500px] lg:h-[600px] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="w-64 h-64 bg-primary/30 rounded-full blur-3xl"
                />
                <motion.div
                  animate={{
                    scale: [1.1, 1, 1.1],
                    rotate: [0, -5, 5, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute w-48 h-48 bg-accent/30 rounded-full blur-3xl"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center z-10">
                  <div className="w-32 h-32 bg-white rounded-2xl shadow-2xl flex items-center justify-center mb-4 mx-auto">
                    <span className="text-6xl font-bold text-primary">Z</span>
                  </div>
                  <p className="text-white font-semibold text-lg">Digital Excellence</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

