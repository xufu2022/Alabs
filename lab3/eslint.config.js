const js = require("@eslint/js");

module.exports = [
  js.configs.recommended,
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "commonjs",
      globals: {
        console: "readonly",
        module: "readonly",
        process: "readonly",
        require: "readonly",
        describe: "readonly",
        expect: "readonly",
        test: "readonly",
      },
    },
    rules: {
      "no-unused-vars": "error",
      eqeqeq: "error",
    },
  },
  {
    ignores: ["node_modules/**"],
  },
];
