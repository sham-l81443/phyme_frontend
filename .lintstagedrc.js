module.exports = {
    // Run ESLint on JS, TS, JSX, and TSX files
    "**/*.{js,jsx,ts,tsx}": ["eslint --fix --max-warnings=0"],
    // Run Prettier on various file types
    "**/*.{js,jsx,ts,tsx,json,css,scss,md}": ["prettier --write"],
};
