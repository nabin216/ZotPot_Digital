'use client'

import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'

export default function MapPlaceholder() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          <div className="relative h-96 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="text-primary mx-auto mb-4" size={64} />
              <p className="text-xl font-semibold text-secondary mb-2">123 Digital Street</p>
              <p className="text-gray-600">Tech City, TC 12345</p>
              <p className="text-sm text-gray-500 mt-4">
                Google Maps integration can be added here
              </p>
            </div>
            {/* Uncomment below and add your Google Maps API key to enable maps */}
            {/* 
            <iframe
              src="https://www.google.com/maps/embed?pb=YOUR_EMBED_URL"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            */}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

