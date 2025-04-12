/** @type {import('next').NextConfig} */

// next.config.js
const nextConfig = {
    output: 'export',
    images: {
      unoptimized: true,
    },
    basePath: "",
  
    // Uncomment and use if needed
    // async redirects() {
    //   return [
    //     {
    //       source: '/home',
    //       destination: '/',
    //       permanent: true,
    //     },
    //   ];
    // },
  };
  
  module.exports = nextConfig;  