module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/vue3-essential',
        '@vue/standard',
        '@vue/typescript/recommended'
    ],
    parserOptions: {
        ecmaVersion: 2020
    },
    rules: {
        quotes: "off",
        eqeqeq: "off", // 使用 === 替代 ==
        "@typescript-eslint/camelcase": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "no-return-assign": "off",
        "one-var": "off",
        "no-useless-escape": "off",
        "space-before-function-paren": "off",
        "no-tabs": "off",
        indent: ["error", 4, { SwitchCase: 1 }],
        semi: ["error", "always"],
        "no-unused-expressions": "off",
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off"
    },
    overrides: [
        {
            files: [
                '**/__tests__/*.{j,t}s?(x)',
                '**/tests/unit/**/*.spec.{j,t}s?(x)'
            ],
            env: {
                mocha: true
            }
        }
    ]
};
