import js from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsparser from "@typescript-eslint/parser";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";
import globals from "globals";
import { globalIgnores } from "eslint/config";
import pluginReact from "eslint-plugin-react";
import eslintPluginSecurity from "eslint-plugin-security";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
  // global settings
  js.configs.recommended,
  globalIgnores([
    "**/dist/**",
    "**/build/**",
    "**/node_modules/**",
    "**/public/**",
    "**/.env/**",
    ".husky/**",
    ".cache",
  ]),

  // backend lint config
  {
    files: ["backend/**/*.{ts,js}"],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaVersion: "ES2022",
        sourceType: "module",
      },
      globals: {
        ...globals.node,
        ...globals.es2022,
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
      prettier: prettierPlugin,
      security: eslintPluginSecurity,
    },
    rules: {
      "max-lines": [
        "warn",
        { max: 300, skipComments: true, skipBlankLines: true },
      ],
      "@typescript-eslint/no-unused-vars": "warn",
      // "no-console": "warn", // uncomment if you dont want logs on your backend
      "prettier/prettier": [
        "error",
        {
          endOfLine: "auto",
        },
      ],
      semi: ["error", "always"],
      quotes: ["error", "double"],
      ...tseslint.configs.recommended.rules,
      ...prettierConfig.rules,
      ...eslintPluginSecurity.configs.recommended.rules,
      // "security/detect-object-injection": "off", // uncomment if you want to be extra careful
    },
  },

  // frontend lint config
  {
    files: ["frontend/**/*.{ts,tsx}"],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaVersion: "ES2022",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.es2022,
        RequestInit: true,
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      prettier: prettierPlugin,
      security: eslintPluginSecurity,
      react: pluginReact,
    },
    rules: {
      "max-lines": [
        "warn",
        { max: 300, skipComments: true, skipBlankLines: true },
      ],
      "no-empty-pattern": "warn",
      "no-console": "warn",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-empty-object-type": "warn",
      "@typescript-eslint/no-namespace": "warn",
      "prettier/prettier": [
        "error",
        {
          endOfLine: "auto",
        },
      ],
      "react-refresh/only-export-components": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      semi: ["error", "always"],
      quotes: ["error", "double"],
      ...tseslint.configs.recommended.rules,
      ...pluginReact.configs.recommended.rules,
      ...prettierConfig.rules,
      ...eslintPluginSecurity.configs.recommended.rules,
      "react/react-in-jsx-scope": "off",
      "security/detect-object-injection": "off", // enable if you want to be extra careful
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
