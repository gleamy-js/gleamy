module.exports = {
  env: {
    browser: true,
    es6: true,
    es2022: true,
  },
  extends: [
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
    ecmaVersion: '2022',
  },
  plugins: [
    'eslint-plugin-jsdoc',
    'eslint-plugin-react',
    'eslint-plugin-prefer-arrow',
    '@typescript-eslint',
  ],
  root: true
};
