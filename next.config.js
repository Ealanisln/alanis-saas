/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) config.resolve.fallback.fs = false;
    return config;
  },
  i18n: {
    locales: ['en-US', 'es-MX'],
    defaultLocale: 'en-US',
  },
};

module.exports = nextConfig;
