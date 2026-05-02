/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: false,
  },

  images: {
    unoptimized: true,
  },

  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'autoworks-opbyyhr14-stiliyanzlatanov-3620s-projects.vercel.app',
          },
        ],
        destination: 'https://autoworksbg.com/:path*',
        permanent: true,
      },
    ]
  },
}

export default nextConfig