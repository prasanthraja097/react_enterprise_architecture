import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      'no-restricted-syntax': [
        'error',
        {
          selector: "JSXOpeningElement[name.name='button']",
          message: "Use the shared Button component (import from '@shared/components/ui') instead of raw <button>.",
        },
        {
          selector: "JSXOpeningElement[name.name='input']",
          message: "Use the shared Input component (import from '@shared/components/ui') instead of raw <input>.",
        },
        {
          selector: "JSXOpeningElement[name.name='textarea']",
          message: "Use the shared Textarea component (import from '@shared/components/ui') instead of raw <textarea>.",
        },
        {
          selector: "JSXOpeningElement[name.name='select']",
          message: "Use the shared Select component (import from '@shared/components/ui') instead of raw <select>.",
        },
        {
          selector: "JSXOpeningElement[name.name='label']",
          message: "Use the shared Label component (import from '@shared/components/ui') instead of raw <label>.",
        },
      ],
    },
  },
  // allow raw elements inside the UI implementation folder
  {
    files: ['src/shared/components/ui/**/*.{ts,tsx}'],
    rules: {
      'no-restricted-syntax': 'off',
    },
  },
])
