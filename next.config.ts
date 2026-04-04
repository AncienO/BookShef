import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // ESLint is run separately; this bypasses a circular-JSON bug in eslint-config-next 16.x during build
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
