module.exports = {
  branches: ["release-github"],
  plugins: [
    "@semantic-release/commit-analyzer",
    [
      "@semantic-release/github",
      { assets: [{ path: "dist/**/*.*", label: "dist assets" }] },
    ],
  ],
  // extends: ["semantic-release-monorepo"],
};
