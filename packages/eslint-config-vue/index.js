module.exports = {
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  extends: [
    '@fiahfy',
    'plugin:vue/recommended',
    'prettier/vue',
  ],
  overrides: [
    {
      files: ['*.vue'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
      ],
    },
  ],
}
