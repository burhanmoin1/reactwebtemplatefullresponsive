import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "penselkonst.blob.core.windows.net",
        pathname: "/**", // Allows all images from this host
      },
    ],
  },
};

export default nextConfig;