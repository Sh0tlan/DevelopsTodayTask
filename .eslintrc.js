module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "next/core-web-vitals",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended",
    "plugin:import/recommended",
  ],
  plugins: ["jsx-a11y", "prettier", "import"],
  rules: {
    "no-console": ["warn", { allow: ["warn", "error"] }],
    "prettier/prettier": "error",
    "import/no-unresolved": "error",
    "import/named": "error",
    "react/no-unescaped-entities": "off",
    "import/no-unresolved": "off",
  },
};
