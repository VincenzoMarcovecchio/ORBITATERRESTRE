module.exports = {
  siteUrl: "https://firststepintospace.com",
  changefreq: 'daily',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", disallow: "/secret" },
      { userAgent: "*", allow: "/" },
    ],
    additionalSitemaps: [
      `https://firststepintospace.com/news-on-mars.xml`,
      `https://firststepintospace.com/space-x.xml`,

    ],
  },
  exclude: ["/secret"],
};

