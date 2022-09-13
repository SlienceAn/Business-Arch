/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir:"build",
  assetPrefix: ".",
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
