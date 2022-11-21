/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.SITE_URL || "https://app.detra.me",
  generateRobotsTxt: true, // (optional)
  // ...other options
};
