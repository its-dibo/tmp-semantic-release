module.exports = {
  plugins: [
    "@semantic-release/commit-analyzer",
    ["@semantic-release/npm", { pkgRoot: "dist" }],
    [
      "@semantic-release/git",
      {
        assets: ["package.json", "npm-shrinkwrap.json"],
      },
    ],
  ],
  extends: ["semantic-release-monorepo"],
};
