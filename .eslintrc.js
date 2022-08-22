/** @type {import('@typescript-eslint/experimental-utils').TSESLint.Linter.Config} */
module.exports = {
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
  rules: {
    'react/jsx-no-target-blank': 'off',
  },
  settings: {
    react: {
      version: '18.2.0',
    },
  },
  overrides: [
    {
      files: ['src/**/*'],
      extends: ['brad/react'],
    },
    {
      files: ['scripts/**/*', 'typings/**/*'],
      extends: ['brad'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
  ],
};
