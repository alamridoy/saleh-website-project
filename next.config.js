/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // <-- enables static HTML export
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.icons8.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.material-tailwind.com",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
