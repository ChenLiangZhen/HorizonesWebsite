/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images : {
    domains : ["i.dummyjson.com", "localhost"] // <== Domain name
  }
}

module.exports = nextConfig
