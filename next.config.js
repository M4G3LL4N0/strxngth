/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: {
      resolveAlias: {
        // Add any needed aliases here
      }
    }
  }
}

module.exports = nextConfig
