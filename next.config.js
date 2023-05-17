/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/nextjs-github-pages',
  assetPrefix: '/nextjs-github-pages/',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
