const withImages = require("next-images");

module.exports = withImages({
  experimental: {
    fontLoaders: [
      { loader: "@next/font/google", options: { subsets: ["latin"] } },
    ],
    forceSwcTransforms: true,
  },
});
