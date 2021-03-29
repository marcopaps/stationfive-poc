module.exports = {
    extends: ["airbnb-typescript-prettier"],
    rules: {
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "import/prefer-default-export": "off",
        "prettier/prettier": ["error", {
           "endOfLine": "auto"
         }],
    },
};