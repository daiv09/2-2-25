import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    domains: ['images.unsplash.com', 'assets.aceternity.com'],
  },
};

export default nextConfig;
