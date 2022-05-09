module.exports = {
  plugins: [
    "@semantic-release/commit-analyzer",
    ["@semantic-release/npm", { pkgRoot: "dist" }],
    "@semantic-release/git",
  ],
  extends: ["semantic-release-monorepo"],
};
