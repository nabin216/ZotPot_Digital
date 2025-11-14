'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'
import Link from 'next/link'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  href?: string
  delay?: number
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  href,
  delay = 0,
}: ServiceCardProps) {
  const content = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow h-full flex flex-col"
    >
      <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
        <Icon className="text-primary" size={28} />
      </div>
      <h3 className="text-xl md:text-2xl font-bold text-secondary mb-3">{title}</h3>
      <p className="text-gray-600 flex-grow">{description}</p>
      {href && (
        <Link
          href={href}
          className="mt-6 text-primary font-medium hover:underline inline-flex items-center"
        >
          Learn More →
        </Link>
      )}
    </motion.div>
  )

  if (href) {
    return <Link href={href}>{content}</Link>
  }

  return content
}

