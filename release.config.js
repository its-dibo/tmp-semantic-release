module.exports = {
  branches: ["release-github"],
  plugins: [
    "@semantic-release/commit-analyzer",
    ["@semantic-release/github", { assets: ["dist"], addReleases: "top" }],
  ],
  // extends: ["semantic-release-monorepo"],
};
