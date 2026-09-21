import js from "@eslint/js";
import globals from "globals";

export default [
  {
    ignores: ["node_modules/**"],
  },
  js.configs.recommended,
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      "no-console": "off",
      "no-unused-vars": "error",
      "no-undef": "error",
      "no-trailing-spaces": "error",
      quotes: ["error", "double"],
      semi: ["error", "always"],
    },
  },
];