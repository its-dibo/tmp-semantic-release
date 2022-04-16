module.exports = {
  branches: ["release-github"],
  plugins: [
    "@semantic-release/commit-analyzer",
    [
      "@semantic-release/github",
      { assets: [{ path: "dist", label: "distribution assets" }, "package"] },
    ],
  ],
  // extends: ["semantic-release-monorepo"],
};
