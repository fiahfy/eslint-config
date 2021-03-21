module.exports = {
  extends: ["@fiahfy"],
  overrides: [
    {
      files: ["*.vue"],
      parserOptions: {
        parser: "@typescript-eslint/parser",
      },
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:vue/recommended",
      ],
    },
  ],
};
