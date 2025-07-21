/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true
  },
  poweredByHeader: false,
  compress: true,
  generateEtags: false
}

module.exports = nextConfig