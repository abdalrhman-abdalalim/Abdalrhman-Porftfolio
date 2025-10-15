/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "images.unsplash.com",
      "plus.unsplash.com", // if you use premium Unsplash
      "source.unsplash.com", // if you use source.unsplash.com
    ],
    // Optional: Configure image optimization
    formats: ["image/webp", "image/avif"],
    // Optional: Set device sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // Optional: Set image sizes
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};

module.exports = nextConfig;
