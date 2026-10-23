import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      // Case studies are offline for now; keep old links landing somewhere useful.
      { source: "/case-studies", destination: "/#reviews", permanent: false },
      { source: "/case-studies/:slug*", destination: "/#reviews", permanent: false },
    ];
  },
};

export default nextConfig;
