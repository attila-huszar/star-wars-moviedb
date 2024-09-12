import eslint from '@eslint/js'
import react from 'eslint-plugin-react'
import reactRefresh from 'eslint-plugin-react-refresh'
import importX from 'eslint-plugin-import-x'
import globals from 'globals'
import prettier from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'

export default [
  eslint.configs.recommended,
  importX.flatConfigs.recommended,
  react.configs.flat.recommended,
  prettierConfig,
  {
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
    plugins: {
      react: react,
      'react-refresh': reactRefresh,
      prettier: prettier,
    },
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'import-x/no-unresolved': ['error', { ignore: ['.svg?'] }],
      'import-x/namespace': ['error', { allowComputed: true }],
      'prettier/prettier': 'warn',
    },
  },
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: 'warn',
    },
  },
  { ignores: ['dist', 'src/test'] },
]
