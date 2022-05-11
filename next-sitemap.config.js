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
      `https://orbitaterrestre.com/news-on-mars.xml`,
      `https://orbitaterrestre.com/space-x.xml`,

    ],
  },
  exclude: ["/secret"],
};

