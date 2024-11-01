/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  transpilePackages: [
    "@cloudscape-design/components",
    "@cloudscape-design/component-toolkit",
  ],
  compiler: {
    removeConsole: process.env.DEPLOYMENT === "main",
  },

 

  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;