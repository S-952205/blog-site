/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cdn.sanity.io',
            port: '',
            pathname: '**',
          },
        ],
      },
      env: {
        NEXT_PUBLIC_SANITY_PROJECT_ID: '6y7sxknz', // Hardcode project ID here
        NEXT_PUBLIC_SANITY_DATASET: 'production',  // Hardcode dataset here
      },
};

export default nextConfig;
