/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        ignoreBuildErrors: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'website-static-files.s3.ir-thr-at1.arvanstorage.ir',
            },
        ],
    },
}

module.exports = nextConfig
