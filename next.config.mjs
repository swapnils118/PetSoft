/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bytegrad.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  webpack: (config) => {
    // ignore formidable warnings
    config.ignoreWarnings = [
      { module: /node_modules\/formidable\/src\/Formidable\.js/ },
      { file: /node_modules\/formidable\/src\/index\.js/ },
    ];

    return config;
  },
};

export default nextConfig;
