const withPWA = require('next-pwa')

module.exports = withPWA({
  // other next config
  pwa: {
    dest: 'public',
    register: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ['image/avif', 'image/webp']
  }
})