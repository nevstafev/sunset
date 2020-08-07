module.exports = {
  globals: {
      process: true,
  },
  env: {
      browser: true,
      es6: true,
      node: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
      'eslint:recommended',
      'plugin:sonarjs/recommended',
      'plugin:@typescript-eslint/eslint-recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:@typescript-eslint/recommended-requiring-type-checking',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'plugin:prettier/recommended',
  ],
  parserOptions: {
      project: 'tsconfig.json',
      tsconfigRootDir: '.',
      extraFileExtensions: '.json',
      ecmaVersion: 2019,
      sourceType: 'module',
      ecmaFeatures: {
          jsx: true,
      },
  },
  plugins: ['react', 'react-hooks', 'sonarjs', '@typescript-eslint'],
  rules: {
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/prefer-optional-chain': ['error'],

      'sonarjs/no-duplicate-string': 'off',

      'no-shadow': ['error', { builtinGlobals: false }],
      curly: ['error', 'all'],
      'no-alert': 'warn',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-implicit-coercion': 'error',
      'no-return-await': 'error',
      'no-self-compare': 'error',
      'no-useless-concat': 'error',
      'no-useless-return': 'error',
      eqeqeq: 'error',
      'padding-line-between-statements': [
          'error',
          { blankLine: 'always', prev: ['const', 'let'], next: '*' },
          { blankLine: 'always', prev: '*', next: ['const', 'let'] },
          { blankLine: 'any', prev: ['const', 'let'], next: ['const', 'let'] },
          { blankLine: 'always', next: '*', prev: ['import', 'export'] },
          { blankLine: 'any', prev: ['import', 'export'], next: ['import', 'export'] },
          { blankLine: 'always', prev: '*', next: ['if', 'for', 'while', 'switch', 'return'] },
      ],

      'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
      'react/jsx-no-useless-fragment': 'error',
      'react/jsx-pascal-case': 'error',
      'react/prop-types': 0,
      'camelcase': 'off'
  },
  settings: {
      react: {
          version: 'detect',
      },
  },
};