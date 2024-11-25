import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["denise-assets.s3.eu-central-1.amazonaws.com"], // Add your S3 bucket domain here
  },
};

export default nextConfig;