/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: '0.0.0.0',
                port: '8004',
                pathname: '/images/**',
            },
        ],
        domains: ['localhost', 'yourdomain.com'], // Add other domains if needed
    },
};

export default nextConfig;
