import { Metadata } from 'next'
import PortfolioGrid from '@/components/sections/portfolio/PortfolioGrid'

export const metadata: Metadata = {
  title: 'Portfolio | Zotpot Digital Pvt. Ltd.',
  description: 'Explore our portfolio of successful projects across web development, AI automation, digital marketing, and cloud services.',
}

export default function PortfolioPage() {
  return (
    <div className="pt-20">
      <PortfolioGrid />
    </div>
  )
}

