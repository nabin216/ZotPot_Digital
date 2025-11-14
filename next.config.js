/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
  },
}

// Only add export configuration for production builds
if (process.env.NODE_ENV === 'production') {
  nextConfig.output = 'export';
  nextConfig.trailingSlash = true;
  nextConfig.images.unoptimized = true;
  nextConfig.basePath = '/ZotPot_Digital';
  nextConfig.assetPrefix = '/ZotPot_Digital/';
}

module.exports = nextConfig

