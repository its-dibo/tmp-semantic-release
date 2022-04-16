module.exports = {
  branches: ["release-github"],
  plugins: [
    "@semantic-release/commit-analyzer",
    [
      "@semantic-release/github",
      { assets: [{ path: "dist", label: "dist-1" }], addReleases: "top" },
    ],
  ],
  // extends: ["semantic-release-monorepo"],
};
