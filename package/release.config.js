module.exports = {
  plugins: [
    "@semantic-release/commit-analyzer",
    ["@semantic-release/npm", { pkgRoot: "dist" }],
  ],
  extends: ["semantic-release-monorepo"],
};
