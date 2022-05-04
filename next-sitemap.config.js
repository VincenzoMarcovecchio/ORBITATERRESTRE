module.exports = {
  siteUrl: "https://orbitaterrestre.com",
  changefreq: 'daily',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", disallow: "/secret" },
      { userAgent: "*", allow: "/" },
    ],
    additionalSitemaps: [
      `${siteUrl}/news-on-mars.xml`,

    ],
  },
  exclude: ["/secret"],
};

