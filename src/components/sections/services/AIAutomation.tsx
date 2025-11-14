'use client'

import { motion } from 'framer-motion'
import { Brain, CheckCircle, Bot, Workflow, MessageCircle, Sparkles } from 'lucide-react'
import Button from '@/components/Button'

export default function AIAutomation() {
  const features = [
    'n8n Workflow Automation',
    'AI-Powered Chatbots',
    'Virtual Assistants',
    'Process Automation',
    'Data Processing & Analysis',
    'Smart Integrations',
    'Custom AI Solutions',
    '24/7 Automated Operations',
  ]

  const solutions = [
    { icon: Workflow, label: 'Workflow Automation' },
    { icon: Bot, label: 'AI Chatbots' },
    { icon: MessageCircle, label: 'Customer Support Bots' },
    { icon: Sparkles, label: 'AI-Powered Insights' },
  ]

  return (
    <section id="ai-automation" className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="inline-block mb-4 px-4 py-2 bg-accent/10 rounded-full text-accent font-semibold text-sm">
              AI & Automation
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-6">
              Intelligent Automation for Modern Businesses
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Leverage the power of AI and automation to streamline operations, reduce costs, and enhance productivity. We specialize in n8n workflows, AI assistants, and chatbots that transform how your business operates.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {solutions.map((solution, index) => {
                const Icon = solution.icon
                return (
                  <div key={solution.label} className="flex items-center space-x-2">
                    <Icon className="text-accent flex-shrink-0" size={20} />
                    <span className="text-sm text-gray-600">{solution.label}</span>
                  </div>
                )
              })}
            </div>
            <Button href="/contact" variant="primary" size="lg">
              Automate Your Business
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2 bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl p-8"
          >
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle className="text-accent flex-shrink-0 mt-1" size={24} />
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

