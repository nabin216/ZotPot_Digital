'use client'

import { Code, Zap, TrendingUp, Cloud, Brain, Megaphone } from 'lucide-react'
import ServiceCard from '@/components/ServiceCard'

const services = [
  {
    icon: Code,
    title: 'Web & App Development',
    description: 'Custom web and mobile applications built with cutting-edge technologies for optimal performance and user experience.',
    href: '/services#web-development',
  },
  {
    icon: Brain,
    title: 'AI & Automation',
    description: 'Intelligent automation solutions using n8n, AI assistants, and chatbots to streamline your business processes.',
    href: '/services#ai-automation',
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    description: 'Data-driven marketing strategies to boost your brand visibility, engagement, and conversion rates.',
    href: '/services#digital-marketing',
  },
  {
    icon: Cloud,
    title: 'Cloud & Deployment',
    description: 'Scalable cloud infrastructure and seamless deployment solutions to keep your business running 24/7.',
    href: '/services#cloud-services',
  },
  {
    icon: TrendingUp,
    title: 'IT Consultancy',
    description: 'Expert guidance to transform your IT infrastructure, optimize performance, and drive digital transformation.',
    href: '/services#consultancy',
  },
  {
    icon: Zap,
    title: 'Business Automation',
    description: 'End-to-end automation solutions that reduce manual work and increase operational efficiency.',
    href: '/services#automation',
  },
]

export default function ServicesOverview() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-4">
            Our Services
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              href={service.href}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

