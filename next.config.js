const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache');

module.exports = withPWA({
  // other next config
  swcMinify: true,
  images: {
    formats: ['image/avif', 'image/webp']
  },
  pwa: {
    dest: 'public',
    runtimeCaching
  },
})