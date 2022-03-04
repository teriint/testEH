module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint', 'import', 'react'],
  extends: ['plugin:import/typescript', /* 'plugin:react-hooks/recommended', */ 'prettier'],
  settings: {
    'import/extensions': ['.js', '.ts', '.tsx'],
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  rules: {
    'react/jsx-boolean-value': 'warn',
    // 'import/no-duplicates': 'error',
    'import/no-self-import': 'error',
    // 'import/no-cycle': 'warn',
    'import/no-useless-path-segments': 'error',
    'react-hooks/exhaustive-deps': 0,
    'import/order': [
      'warn',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
};
