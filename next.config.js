/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [{
      source: "/result/:param",
      destination: `http://localhost:3000/result/:param`
    }]
  }
}

module.exports = nextConfig
