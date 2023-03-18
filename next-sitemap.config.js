module.exports = {
  siteUrl: "https://orbitaterrestre.vercel.app/",
  changefreq: 'daily',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", disallow: "/secret" },
      { userAgent: "*", allow: "/" },
    ],

  },
  exclude: ["/secret"],
};

