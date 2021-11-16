module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  extends: ["plugin:prettier/recommended", "plugin:jest/recommended"],
  env: {
    browser: true,
    es6: true,
  },
};
