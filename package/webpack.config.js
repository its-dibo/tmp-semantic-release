let { resolve } = require("path");

module.exports = {
  mode: "development",
  entry: {
    out: "./index.js",
  },
  output: {
    path: resolve(__dirname, "dist"),
  },
};
