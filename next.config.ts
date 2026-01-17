import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'takemykeys.fr' },
      { protocol: 'https', hostname: 'locary.fr' },
      { protocol: 'https', hostname: 'getjudia.com' },
    ],
  },
};

export default withNextIntl(nextConfig);
