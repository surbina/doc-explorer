module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'react-app',
    'plugin:prettier/recommended',
    'plugin:import/typescript',
  ],
  plugins: ['@typescript-eslint', 'react', 'import'],
  rules: {
    'arrow-body-style': 'error',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
        },
      },
    ],
    'import/newline-after-import': 'error',
  },
  overrides: [
    {
      files: ['*.test.*'],
      rules: {
        // it is fine to turn off these rules for tests/stories
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
  ],
};
