let { resolve } = require("path");

module.exports = {
  mode: "development",
  entry: {
    outroot: "./index.js",
  },
  output: {
    path: resolve(__dirname, "dist"),
  },
};
