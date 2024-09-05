/** @type {import('next').NextConfig} */
const withPwa = require('next-pwa')
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = withPwa({
  reactStrictMode: true,
  pwa: {
    dest: 'public',
    disable: !isProd 
  }
})

module.exports = nextConfig
