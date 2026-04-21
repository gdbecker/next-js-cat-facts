/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: [
    process.env.REPLIT_DEV_DOMAIN,
  ].filter(Boolean),
}

module.exports = nextConfig
