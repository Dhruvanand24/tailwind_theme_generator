/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Required for no build errors
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "huemint.com",
      },
      {
        protocol: "https",
        hostname: "ui.aceternity.com",
      },
      {
        protocol: "https",
        hostname: "uiverse.io",
      },
      {
        protocol: "https",
        hostname: "themeforest.net",
      },
      {
        protocol: "https",
        hostname: "play-lh.googleusercontent.com"
      },
      {
        protocol: "https",
        hostname: "i.pinimg.com"
      },
      {
        protocol: "https",
        hostname: "refine.ams3.cdn.digitaloceanspaces.com"
      },
      {
        protocol: "https",
        hostname: "localo.com"
      },
      {
        protocol: "https",
        hostname: "www.pictographic.io"
      },
      {
        protocol: "https",
        hostname: "fps.cdnpk.net"
      },
      {
        protocol: "https",
        hostname: "ui.shadcn.com"
      },
      {
        protocol: "https",
        hostname: "storage.googleapis.com"
      },
      {
        protocol: "https",
        hostname: "www.browserstack.com"
      },
      {
        protocol: "https",
        hostname: "www.fontshop.com"
      },
      {
        protocol: "https",
        hostname: "img.freepik.com"
      }
    ],
  },
};

export default nextConfig;