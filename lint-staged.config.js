// @ts-check

/** @type {import("lint-staged").Config} */
const config = {
  "*": "prettier --check --ignore-unknown",
  "*.ts": "lint-staged-tsc"
};

export default config;
