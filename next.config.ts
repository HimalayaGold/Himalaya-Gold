import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 90],
  },
  allowedDevOrigins: ["10.118.169.204"],
};

export default nextConfig;