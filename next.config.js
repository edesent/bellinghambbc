/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/give/',
        destination: '/give',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
