const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache');

module.exports = withPWA({
  // other next config
  images: {
    formats: ['image/avif', 'image/webp']
  },
  pwa: {
    dest: 'public',
    runtimeCaching,
    buildExcludes: [/middleware-manifest\.json$/]
  },
})