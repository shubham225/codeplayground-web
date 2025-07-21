import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.googleusercontent.com",
        port: "",
        search: "",
      },
      {
        protocol: "https",
        hostname: "**.githubusercontent.com",
        port: "",
        search: "",
      },
      {
        protocol: "https",
        hostname: "**.twimg.com",
        port: "",
        search: "",
      },
    ],
  },
};

export default nextConfig;
