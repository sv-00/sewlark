import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: false,
  output: "standalone",

  // Allow dev access from reverse-proxied domain
  allowedDevOrigins: ["sewlark-v.dopolabs.com"],

  // Security headers
  headers: async () => [
    {
      source: "/(.*)",
      headers: [
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "X-Frame-Options", value: "DENY" },
        { key: "X-XSS-Protection", value: "0" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        {
          key: "Permissions-Policy",
          value: "camera=(), microphone=(), geolocation=()",
        },
      ],
    },
  ],

  // Image optimization
  images: {
    remotePatterns: [
      // Add your image CDN domains here
      // { protocol: "https", hostname: "your-cdn.com" },
    ],
  },
};

export default nextConfig;
