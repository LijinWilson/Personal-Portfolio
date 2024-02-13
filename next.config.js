/** @type {import('next').NextConfig} */
const nextConfig = {
  // added due to error while adding an external link to image src
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "content.wepik.com",
      },
    ],
  },
  // experimental: {
  //   serverActions: true,
  // },
};

module.exports = nextConfig;
