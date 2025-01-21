/** @type {import('next').NextConfig} */
module.exports = {
  output : 'standalone'
  ,
  webpack(config) {
    config.resolve.fallback = {
      ...config.resolve.fallback, 
      fs: false, 
    };
    return config;
  },
  reactStrictMode: true,
  compress: false,
};
