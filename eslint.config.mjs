// import { dirname } from "path";
// import { fileURLToPath } from "url";

// import { FlatCompat } from "@eslint/eslintrc";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const compat = new FlatCompat({
//     baseDirectory: __dirname,
// });

// const eslintConfig = [
//     ...compat.extends("next/core-web-vitals", "next/typescript"),
//     {
//         rules: {
//             "semi": "off",
//             // "quotes": ["error", "double", "single"],
//             // "comma-dangle": ["error", "always-multiline"],
//             "indent": ["error", 4],
//             // "no-unused-vars": ["error", { "argsIgnorePattern": "^_", "varsIgnorePattern": "^_" }],
//             // "no-console": ["warn", { allow: ["warn", "error","log"] }],
//             "no-debugger": "error",
//             "react/prop-types": "off",
//             "react/react-in-jsx-scope": "off",
//             "react/display-name": "off",
//             "react/no-unescaped-entities": "off",
//             "react-hooks/rules-of-hooks": "error",
//             "react-hooks/exhaustive-deps": "warn",
//             "jsx-a11y/alt-text": "error",
//             "jsx-a11y/aria-props": "error",
//             "jsx-a11y/aria-role": "error",
//             "import/order": [
//                 "error",
//                 {
//                     "groups": ["builtin", "external", "internal", "parent", "sibling", "index"],
//                     "newlines-between": "always",
//                     "alphabetize": { "order": "asc", "caseInsensitive": true },
//                 },
//             ],
//             "import/no-duplicates": "error",
//             "@typescript-eslint/explicit-function-return-type": "off",
//             "@typescript-eslint/explicit-member-accessibility": "off",
//             "@typescript-eslint/no-explicit-any": "off",
//             "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_", "varsIgnorePattern": "^_" }],
//         },
//         ignores: [
//             // Ignore shadcn/ui components
//             "src/components/ui/**/*",

//             // Build output directories
//             ".next/**/*",
//             "out/**/*",
//             "build/**/*",
//             "dist/**/*",

//             // Node modules
//             "node_modules/**/*",

//             // Environment files
//             ".env*.local",

//             // Public assets
//             "public/**/*",

//             // Generated files
//             "**/*.generated.ts",
//             "**/*.generated.tsx",

//             // Third-party code or libraries
//             "src/lib/third-party/**/*",

//             // Test files
//             "**/*.test.ts",
//             "**/*.test.tsx",
//             "**/*.spec.ts",
//             "**/*.spec.tsx",

//             // Temporary files that might cause conflicts
//             "**/.git/**",
//             "**/.husky/**",
//         ],
//     },
// ];

// export default eslintConfig;
