module.exports = {
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    "@semantic-release/github",
    // when using the option { pkgRoot: 'dist' }, use `@semantic-release/git` to update the source package.json
    // example: https://github.com/semantic-release/npm#examples
    // keep it after all other plugins but before `@semantic-release/git` to publish the final changes to npm
    ["@semantic-release/npm", { pkgRoot: "dist" }],

    // keep it after all other plugins to commit all changes made by other plugins
    // set assets to commit all changed files (todo: exclude .gitignore content)
    ["@semantic-release/git", { assets: ["**/*.*"] }],
  ],
  // extends: ["semantic-release-monorepo"],
};
