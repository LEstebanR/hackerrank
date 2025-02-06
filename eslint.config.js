// eslint.config.js
import js from "@eslint/js";
import ts from "typescript-eslint";

export default [
  js.configs.recommended, // Reglas recomendadas para JS
  ts.configs.recommended, // Reglas para TypeScript
];
