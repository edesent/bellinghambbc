import type { NextConfig } from "next";
import { fileURLToPath } from "node:url";

const nextConfig: NextConfig = {
  outputFileTracingRoot: fileURLToPath(new URL(".", import.meta.url)),
  async redirects() {
    return [
      {
        source: "/bbbc/kids-5.jpg",
        destination: "/bbbc/Congregation.jpeg",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
