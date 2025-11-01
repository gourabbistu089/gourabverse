/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    // Add any external domains for images you might use here
  },
  // SWC minify is enabled by default in Next.js 15
};

export default nextConfig; 