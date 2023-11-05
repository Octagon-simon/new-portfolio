/** @type {import('next').NextConfig} */

// next.config.js
const nextConfig = {
    output: 'export',
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
