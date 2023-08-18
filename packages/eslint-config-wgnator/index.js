module.exports = {
  extends: ["next", "turbo", "prettier"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "no-param-reassign": ["error", { props: false }],
    "eol-last": ["error", "always"],
    "@typescript-eslint/no-redeclare": "off",
    "react/prop-types": "off",
    "react/jsx-uses-react": "off",
    "react-hooks/exhaustive-deps": [
      "error",
      {
        additionalHooks: "(useTargetSellerEffect)",
      },
    ],
    "react/function-component-definition": "off",
    "react/react-in-jsx-scope": "off",
    "react/require-default-props": "off",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-filename-extension": [
      2,
      { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    ],
    "import/no-extraneous-dependencies": "off",
    "import/prefer-default-export": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "": "never",
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "max-len": [1, { code: 80 }],
  },
  parserOptions: {
    babelOptions: {
      presets: [require.resolve("next/babel")],
    },
  },
};
