module.exports = {
  extends: [
    '@fiahfy',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['*.tsx'],
      extends: ['plugin:@typescript-eslint/recommended', 'prettier'],
    },
  ],
}
