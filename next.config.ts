import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.jdmagicbox.com",
      },
    ],
  },
};

export default nextConfig;
