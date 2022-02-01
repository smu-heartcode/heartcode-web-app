/** @type {import('next').NextConfig} */
module.exports = {
  experimental: {
    outputStandalone: true,
  },
  webpack(config) {
    config.resolve.fallback = {
      ...config.resolve.fallback, 
      fs: false, 
    };
    return config;
  },
  reactStrictMode: true,
};
