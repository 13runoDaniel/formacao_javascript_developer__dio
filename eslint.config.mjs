import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig( [
  js.configs.recommended,

  {
    files: [ "**/*.{js,mjs,cjs}" ],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    rules: {
      "space-before-function-paren": [ "error", {
        anonymous: "always",
        named: "never",
        asyncArrow: "always"
      } ],
      "space-in-parens": [ "error", "always" ],
      "space-before-blocks": [ "error", "always" ],
      "semi": [ "error", "always" ],
      "func-call-spacing": [ "error", "never" ],
      "array-bracket-spacing": [ "error", "always" ],
      "space-infix-ops": [ "error", { int32Hint: false } ],
      "object-curly-spacing": [ "error", "always" ],
      "no-extra-semi": [ "error" ],
      "no-whitespace-before-property": [ "error" ],
      "max-len": [ "error", { 
        code: 90, 
        ignoreComments: true, 
        ignoreStrings: true, 
        ignoreTemplateLiterals: true 
      } ]
    }
  }
] );