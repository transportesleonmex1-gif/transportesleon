import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  compress: true,
  async redirects() {
    return [
      {
        source: "/servicios/renta-con-chofer",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
