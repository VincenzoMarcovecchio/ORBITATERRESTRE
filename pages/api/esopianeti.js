const cheerio = require("cheerio"); // 1

export default async (req, res) => {
  // 2
  if (req.method === "GET") {
    // 3

    try {
      // 4
      const response = await fetch(
        `https://en.wikipedia.org/wiki/List_of_exoplanet_search_projects`
      );
      const htmlString = await response.text();
      const $ = cheerio.load(htmlString);
      console.log(htmlString);
      console.log($);

      res.statusCode = 200;
      return res.json({});
    } catch (e) {
      // 5
      res.statusCode = 404;
      return res.json({
        error: ` not found. Tip: Double check the spelling.`,
      });
    }
  }
};
