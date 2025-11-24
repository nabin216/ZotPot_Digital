'use client'

import { motion } from 'framer-motion'
import { Linkedin, Mail } from 'lucide-react'

const teamMembers = [
  {
    name: 'Alex Johnson',
    role: 'Chief Technology Officer',
    description: 'Alex leads our tech team with over 15 years of experience in software development and project management.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
  },
  {
    name: 'Samantha Lee',
    role: 'Creative Director',
    description: 'Samantha drives our creative vision, ensuring impactful designs and brand storytelling.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
  },
  {
    name: 'Michael Davis',
    role: 'Marketing Strategist',
    description: 'Michael crafts dynamic marketing strategies that drive engagement and growth.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
  },
]

export default function TeamSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-4">
            Meet Our Team
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            The talented individuals who make Zotpot IT Solutions exceptional
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background rounded-2xl p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 ring-4 ring-primary/20">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-2">{member.name}</h3>
              <p className="text-primary font-semibold mb-4">{member.role}</p>
              <p className="text-gray-600 mb-6">{member.description}</p>
              <div className="flex justify-center space-x-4">
                <a
                  href="#"
                  aria-label={`${member.name} LinkedIn`}
                  className="w-10 h-10 bg-secondary hover:bg-primary rounded-full flex items-center justify-center text-white transition-colors"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="#"
                  aria-label={`Email ${member.name}`}
                  className="w-10 h-10 bg-secondary hover:bg-primary rounded-full flex items-center justify-center text-white transition-colors"
                >
                  <Mail size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

