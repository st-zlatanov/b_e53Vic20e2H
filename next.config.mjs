/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ['be53vic204136.builtwithrocket.new'],
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
