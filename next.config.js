/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "dehouse.org",
      },
      {
        protocol: "https",
        hostname: "api.dehouse.org",
      },
    ],
  },
};

module.exports = nextConfig;
