/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true
  },
  images: {
    domains: ['ishonchdew.pythonanywhere.com/api/v1/products']
  }
}

module.exports = nextConfig
