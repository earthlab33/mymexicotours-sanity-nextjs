/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
    domains: [
      "cdn.sanity.io",
      "mymexicotours.s3.amazonaws.com",
      "via.placeholder.com",
      "d1coydiqa46lxm.cloudfront.net",
      "v5.airtableusercontent.com",
      "cdn.mymexicotours.com",
    ],
  },
};
