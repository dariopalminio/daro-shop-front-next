/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  swcMinify: true,
  basePath: '',
  distDir: "build",
  env: {
    customKey: 'my-value',
  },
}

module.exports = nextConfig
