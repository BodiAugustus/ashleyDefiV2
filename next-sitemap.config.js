// next-sitemap.config.js
/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: "https://ashleydefi.com", // Replace with your website's URL
  generateRobotsTxt: true, // (optional) Generate a robots.txt file
  exclude: ["/server-sitemap.xml"], // (optional) Exclude specific paths from the sitemap
  robotsTxtOptions: {
    additionalSitemaps: [
      "https://ashleydefi.com/server-sitemap.xml", // Add additional sitemaps if any
    ],
  },
};

module.exports = config;
