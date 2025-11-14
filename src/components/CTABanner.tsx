'use client'

import { motion } from 'framer-motion'
import Button from './Button'

export default function CTABanner() {
  return (
    <section className="section-padding bg-gradient-to-r from-primary to-accent">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-white"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Let's build something amazing together. Get a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="secondary" size="lg">
              Get a Quote
            </Button>
            <Button href="/services" variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary">
              View Services
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

