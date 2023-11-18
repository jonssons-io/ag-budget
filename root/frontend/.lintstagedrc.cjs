module.exports = {
  "*.{js,jsx,ts,tsx}": ["eslint --fix", "prettier --write"],
  "*.{tsx,ts,json}": () => "pnpm check:types",
};
