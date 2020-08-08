module.exports = {
  extends: [
    '@fiahfy',
  ],
  overrides: [
    {
      files: ['*.vue'],
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
      extends: [
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'plugin:vue/recommended',
        'prettier/vue',
      ],
    },
  ],
}
