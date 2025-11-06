import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingIncludes: {
    "/": ["./node_modules/.prisma/client"],
  },
  /* config options here */
};

export default nextConfig;
