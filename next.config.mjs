/** @type {import('next').NextConfig} */
const nextConfig = {
images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '**',
      },
      {
        protocol: 'http',
        hostname: 'googleusercontent.com', 
      },
    ],
  },
};

export default nextConfig;
