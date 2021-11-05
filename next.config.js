const withPWA = require('next-pwa')

module.exports = withPWA({
  // other next config
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ['image/avif', 'image/webp']
  }
})