'use client'

import { motion } from 'framer-motion'

export default function CompanyIntro() {
  return (
    <section className="section-padding pt-32 bg-gradient-to-br from-background via-white to-primary/5">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-6">
            About Zotpot IT Solutions
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
            Zotpot IT Solutions is a leading multi-service digital agency dedicated to empowering businesses through innovative technology solutions. Founded with a vision to bridge the gap between complex digital technologies and business success, we specialize in building, automating, and growing businesses of all sizes.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our team of experts combines technical excellence with business acumen to deliver solutions that not only meet but exceed our clients' expectations. From startups to enterprise-level organizations, we've helped numerous businesses transform their digital presence and achieve remarkable growth.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

