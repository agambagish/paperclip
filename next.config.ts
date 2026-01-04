import type { NextConfig } from "next";

import "./src/env";

const nextConfig: NextConfig = {
  reactCompiler: true,
  cacheComponents: true,
};

export default nextConfig;
