/** @type {import('next').NextConfig} */

// next.config.js
const nextConfig = {
    images : {
        unoptimized : true
    },
    basePath : ""
    // async redirects() {
    //     return [
    //         {
    //             source: '/home',
    //             destination: '/',
    //             permanent: true,
    //         },
    //     ];
    // },
}

module.exports = nextConfig
