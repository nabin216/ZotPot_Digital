/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
    unoptimized: true,
  },
  basePath: '/ZotPot_Digital',
  assetPrefix: '/ZotPot_Digital/',
}

module.exports = nextConfig

