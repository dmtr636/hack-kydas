module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended",
        "prettier"
    ],
    ignorePatterns: ["build", "dist", "example", "vite.config.ts"],
    parser: "@typescript-eslint/parser",
    plugins: ["react-refresh"],
    rules: {
        "react-refresh/only-export-components": [
            "warn",
            { allowConstantExport: true }
        ],
        "@typescript-eslint/no-explicit-any": "warn"
    },
    settings: {
        react: {
            version: "detect"
        }
    }
};
