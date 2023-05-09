/* eslint-disable no-undef */
module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'array-bracket-spacing': 'error',
    'jsx-quotes': ['error', 'prefer-double'],
    'key-spacing': ['error', { 'mode': 'strict', 'beforeColon': false, 'afterColon': true }],
    'react-refresh/only-export-components': 'warn',
    'semi': 'error',
    'indent': ['error', 2, { 'SwitchCase': 1 }],
    'react/prop-types': 'off'
  },
};
