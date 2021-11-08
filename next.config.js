const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache');

module.exports = withPWA({
  // other next config
  swcMinify: true,
  images: {
    formats: ['image/avif', 'image/webp']
  },
  pwa: {
    disable: process.env.NODE_ENV === 'development',
    dest: 'public',
    runtimeCaching
  },
})