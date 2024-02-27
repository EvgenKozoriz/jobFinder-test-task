/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'upload.wikimedia.org',
            port: '',
            pathname: '/wikipedia/commons/thumb/4/4b/Charles_Schwab_Corporation_logo.svg/1200px-Charles_Schwab_Corporation_logo.svg.png',
          },
        ],
      },
};

export default nextConfig;
