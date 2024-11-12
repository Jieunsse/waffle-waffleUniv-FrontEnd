import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';

export default [
  eslint.configs.recommended, // eslint 의 권장 config 사용
  ...tseslint.configs.recommended, // ts-eslint 의 권장 config spread
  {
    files: ['**/*.@(js|ts|jsx|tsx)'],
    plugins: {
      import: importPlugin,
    },
    rules: {
      eqeqeq: ['error', 'always'],
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
];

// import globals from 'globals';
// import pluginJs from '@eslint/js';
// import tseslint from 'typescript-eslint';
// import prettier from 'eslint-config-prettier';
//
// /** @type {import('eslint').Linter.Config[]} */
// export default [
//   { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
//   { languageOptions: { globals: globals.browser } },
//   pluginJs.configs.recommended,
//   prettier,
//   ...tseslint.configs.recommended,
//   {
//     rules: {
//       'react/react-in-jsx-scope': 'off',
//     },
//   },
// ];
