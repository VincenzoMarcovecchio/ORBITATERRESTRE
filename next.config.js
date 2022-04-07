const withPlugins = require("next-compose-plugins");

const optimizedImages = require("next-optimized-images");

const nextConfig = {
  images: {
    domains: ["mars.nasa.gov", "spacenews.com", "apod.nasa.gov", "spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com", "nasaspaceflight.com"],
  },
  target: "serverless",
  webpack: (config, { isServer }) => {
    if (isServer) {
      require("./scripts/sitemap-common");
    }

    return config;
  },
  webpack: (config, { dev, isServer }) => {
    // Replace React with Preact only in client production build
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: "preact/compat",
        "react-dom/test-utils": "preact/test-utils",
        "react-dom": "preact/compat",
      });
    }

    return config;
  },
};

module.exports = withPlugins(
  [
    optimizedImages,

  ],

  nextConfig
);
