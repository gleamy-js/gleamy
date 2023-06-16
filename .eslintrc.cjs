module.exports = {
  env: {
    browser: true,
    es6: true,
    commonjs: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    'plugin:jest/recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'eslint-config-pretty-strict',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
    ecmaVersion: 'es2015',
  },
  plugins: [
    'eslint-plugin-jsdoc',
    'eslint-plugin-react',
    'eslint-plugin-prefer-arrow',
    '@typescript-eslint',
    'jest',
  ],
  globals: {
    JSX: 'readonly',
    'React': 'readonly',
  },
  root: true,
};
