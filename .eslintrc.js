module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
    project: './tsconfig.json',
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  ignorePatterns: ['node_modules', '.eslintrc.js', 'config-overrides.js'],
  extends: [
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    curly: ['error', 'all'],
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars-experimental': 'warn',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'semi-style': ['error', 'last'],
    '@typescript-eslint/explicit-function-return-type': ['warn'],
    quotes: [2, 'single', { avoidEscape: true }],
    'jsx-quotes': ['error', 'prefer-double'],
    'no-underscore-dangle': 'off',
    'import/prefer-default-export': 'off',
    'no-fallthrough': 'off',
    'react/jsx-props-no-spreading': 'off',
    radix: 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-a11y/control-has-associated-label': 'off',
    'default-case': 'off',
    'react/button-has-type': 'off',
    'no-plusplus': 'off',
    'react/require-default-props': 'off',
    'react/prop-types': 'off',
  }
};
