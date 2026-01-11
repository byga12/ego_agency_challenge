import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [new URL("https://challenge.egodesign.dev/media/images/**")]
  }
};

export default nextConfig;
