import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/nuestros-espacios',
        destination: '/espacios',
        permanent: true,
      },
      {
        source: '/espacios-y-eventos',
        destination: '/espacios',
        permanent: true,
      },
      {
        source: '/momentos-intimos',
        destination: '/experiencias#intimos',
        permanent: true,
      },
      {
        source: '/momentos-rebeldia',
        destination: '/experiencias#rebeldia',
        permanent: true,
      },
      {
        source: '/momentos-compartir',
        destination: '/experiencias#compartir',
        permanent: true,
      },
      {
        source: '/bar',
        destination: '/gastronomia#bar',
        permanent: true,
      },
      {
        source: '/casa-club',
        destination: '/espacios#casa-club',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
