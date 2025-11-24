import Link from 'next/link'
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react'

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
]

const footerLinks = {
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
  ],
  services: [
    { name: 'Web Development', href: '/services#web-development' },
    { name: 'AI & Automation', href: '/services#ai-automation' },
    { name: 'Digital Marketing', href: '/services#digital-marketing' },
    { name: 'Cloud Services', href: '/services#cloud-services' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <span className="text-xl font-bold">
                Zotpot <span className="text-primary">Digital</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              {`${'Build. Automate. Grow.'} — Empowering businesses through smart digital solutions.`}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-secondary/50 hover:bg-primary rounded-lg flex items-center justify-center transition-colors"
                  >
                    <Icon size={18} />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-primary mt-1 flex-shrink-0" />
                <a
                  href="mailto:contact@zotpotdigital.com"
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  contact@zotpotdigital.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-primary mt-1 flex-shrink-0" />
                <a
                  href="tel:+1234567890"
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  (+880) 1779162551
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-primary mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  123 Digital Street, Tech City, TC 12345
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Zotpot IT Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

