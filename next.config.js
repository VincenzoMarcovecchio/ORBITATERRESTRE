const withPlugins = require("next-compose-plugins");

const optimizedImages = require("next-optimized-images");
const dev = process.env.NODE_ENV !== 'production';

export const server = dev ? 'http://localhost:3000' : 'https://orbitaterrestre.com';
const nextConfig = {
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
    {
      domains: ["mars.nasa.gov", "www.nasaspaceflight.com"],
    },
  ],

  nextConfig
);
