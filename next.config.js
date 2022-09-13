/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: ".",
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
