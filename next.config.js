const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: isProd ? '/nextjs-github-pages' : '',
  assetPrefix: isProd ? '/nextjs-github-pages/' :  '',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
