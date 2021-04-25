const withPlugins = require("next-compose-plugins");

const optimizedImages = require("next-optimized-images");

module.exports = withPlugins([
  optimizedImages,
  {
    domains: ["mars.nasa.gov", "www.nasaspaceflight.com"],
  },
]);
// next.config.js
// module.exports = {
//   images: {
//     domains: ["localhost:3000"],
//   },
// };
