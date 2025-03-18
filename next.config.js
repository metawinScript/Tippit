/** @type {import('next').NextConfig} */
const debug = process.env.NODE_ENV !== "production";
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
    };
    return config;
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // output: "export",
  // basePath: "/Tippit",
  // assetPrefix: '/Tippit/',
  images: {
    unoptimized: true,
  },
  exportPathMap: function () {
    // /Next-React-Components
    return {
      "/": { page: "/" },
    };
  },
};

module.exports = nextConfig;
