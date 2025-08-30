import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    output: 'export', // This is crucial for static export
    images: {
        unoptimized: true, // Required for static export
    },
    distDir: 'docs',
};

export default nextConfig;
