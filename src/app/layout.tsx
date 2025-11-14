import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Zotpot Digital Pvt. Ltd. | Build. Automate. Grow.',
  description: 'Empowering businesses through smart digital solutions. Web Development, Automation, AI, Cloud & Marketing — all in one agency.',
  keywords: 'web development, AI automation, digital marketing, cloud services, IT consultancy, Zotpot Digital',
  authors: [{ name: 'Zotpot Digital Pvt. Ltd.' }],
  openGraph: {
    title: 'Zotpot Digital Pvt. Ltd. | Build. Automate. Grow.',
    description: 'Empowering businesses through smart digital solutions.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/logo.svg" />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

