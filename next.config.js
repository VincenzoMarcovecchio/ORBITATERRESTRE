const withPlugins = require("next-compose-plugins");

const optimizedImages = require("next-optimized-images");

// const nextConfig = {

//     webpack: (config, { isServer }) => {
//       if (isServer) {
//         require("./scripts/sitemap-common");
//       }

//       return config;
//     },

// }
module.exports = withPlugins(

  [
    optimizedImages,
    {
      domains: ["mars.nasa.gov", "www.nasaspaceflight.com"],
    },
  ],


);
