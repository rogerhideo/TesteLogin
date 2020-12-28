module.exports = {
  root: true,
  plugins: ['vue'],
  env: {
    node: true
  },
  extends: ["plugin:vue/essential",
          'plugin:vue/recommended',
          "eslint:recommended",
          "plugin:prettier/recommended",
          "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off"
    //"eslint-disable-next-line"
  }
};
