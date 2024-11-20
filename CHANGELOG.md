# @synulux/prettier-config

## 1.11.4

### Patch Changes

- [#37](https://github.com/synulux/old-prettier-config/pull/37) [`27e8274`](https://github.com/synulux/old-prettier-config/commit/27e8274a720265bbc53e005528045b594ab24fa3) Thanks [@dependabot](https://github.com/apps/dependabot)! - Bump prettier-plugin-packagejson from 2.0.0 to 2.4.6

## 1.11.3

### Patch Changes

- [#32](https://github.com/synulux/prettier-config/pull/32) [`eaec2ff`](https://github.com/synulux/prettier-config/commit/eaec2ff3829513190aa9882b51709f768491f59a) Thanks [@dependabot](https://github.com/apps/dependabot)! - Update dependency `lint-staged` from version `14.0.0` to version `14.0.1`

- [#35](https://github.com/synulux/prettier-config/pull/35) [`9643341`](https://github.com/synulux/prettier-config/commit/964334154c3223b7a9664c3da366287350b29799) Thanks [@dependabot](https://github.com/apps/dependabot)! - Update dependency `actions/checkout` from version `3` to version `4`

## 1.11.2

### Patch Changes

- [#29](https://github.com/synulux/prettier-config/pull/29) [`9071e48`](https://github.com/synulux/prettier-config/commit/9071e482ec43fab962b9450a3fa13b1e896c8d4c) Thanks [@dependabot](https://github.com/apps/dependabot)! - Update dependency `@swc/core` from version `1.3.93` to version `1.3.94`

- [#30](https://github.com/synulux/prettier-config/pull/30) [`2a51629`](https://github.com/synulux/prettier-config/commit/2a51629b1b67ed7dc35aaf92f0a5ff7d05c92052) Thanks [@dependabot](https://github.com/apps/dependabot)! - Update dependency `lint-staged` from version `14.0.1` to version `15.0.2`

## 1.11.1

### Patch Changes

- [#26](https://github.com/synulux/prettier-config/pull/26) [`5cd9601`](https://github.com/synulux/prettier-config/commit/5cd9601e21de0a6c644c3e52c1990e1ad666b8d0) Thanks [@dependabot](https://github.com/apps/dependabot)! - Update dependency `lint-staged` from version `15.0.1` to version `15.0.2`

- [#25](https://github.com/synulux/prettier-config/pull/25) [`49c6453`](https://github.com/synulux/prettier-config/commit/49c6453c52b68dfaee1e0590c3ad810e04c45969) Thanks [@dependabot](https://github.com/apps/dependabot)! - Update dependency `@types/lint-staged` from version `13.2.0` to version `13.2.1`

## 1.8.0

### Minor Changes

- [#17](https://github.com/synulux/prettier-config/pull/17) [`1a41ea2`](https://github.com/synulux/prettier-config/commit/1a41ea2bb2e5a8728c3b111c8a866b913e7015b4) Thanks [@synulux](https://github.com/synulux)! - Add back duplicate dependencies (related to peer dependencies) in `package.json` to avoid confusion (this will not affect how these duplicated dependencies were installed); and change the peer dependencies version to be exactly as their equivalent dependency (development or production) to avoid issues that may arise in the future.

## 1.7.0

### Minor Changes

- [#15](https://github.com/synulux/prettier-config/pull/15) [`b1b6c86`](https://github.com/synulux/prettier-config/commit/b1b6c86f157ad3099f78906b4da3a6e3c294a9c4) Thanks [@synulux](https://github.com/synulux)! - Remove duplicate dependencies in `package.json` that get installed automatically.

## 1.6.0

### Minor Changes

- [#13](https://github.com/synulux/prettier-config/pull/13) [`dbc404f`](https://github.com/synulux/prettier-config/commit/dbc404fe2b996588053807f579e64702d5dc3898) Thanks [@synulux](https://github.com/synulux)! - Remove `access` field in `.changeset/config.json` because it's not needed.

## 1.5.0

### Minor Changes

- [#11](https://github.com/synulux/prettier-config/pull/11) [`5637a48`](https://github.com/synulux/prettier-config/commit/5637a48e036dd0d8127bcc3a7fa0dfb41c273b3c) Thanks [@synulux](https://github.com/synulux)! - Format some website links in the `package.json` file to fit file paths style.

- [#11](https://github.com/synulux/prettier-config/pull/11) [`e1950e2`](https://github.com/synulux/prettier-config/commit/e1950e25b6e0ce6018ded042d51cf29d2c12f469) Thanks [@synulux](https://github.com/synulux)! - To prevent authentication issues with GitHub Packages, all workflows that install dependencies should authenticate with GitHub Packages first (therefore, a composite action was created to reuse the authentication process); change the workflows file extension to be `.yml` and not `.yaml` for simplicity; and reduce the waiting time to five seconds for the `lint.yml` workflow to finish in the `publish.yml` workflow.

- [#11](https://github.com/synulux/prettier-config/pull/11) [`345d063`](https://github.com/synulux/prettier-config/commit/345d06310b25bd68ef489607294f04d411b60081) Thanks [@synulux](https://github.com/synulux)! - Add default value for `token` input in the `auth-github-packages` action.

## 1.4.0

### Minor Changes

- [#9](https://github.com/synulux/prettier-config/pull/9) [`9c04431`](https://github.com/synulux/prettier-config/commit/9c0443134e0b482441a5ea211bb08fcd6e92ec43) Thanks [@synulux](https://github.com/synulux)! - Modify `package.json` `author` field to be an object for simplicity.

## 1.3.0

### Minor Changes

- [#7](https://github.com/synulux/prettier-config/pull/7) [`adefef7`](https://github.com/synulux/prettier-config/commit/adefef7ad4b1a0c3441dc4516dd2fd8c61f7f661) Thanks [@synulux](https://github.com/synulux)! - Add `.prettierignore` to ignore files that don't need formatting; modify the `lint.yaml` workflow name; and fix `pnpm-lock.yaml` as it was affected by formatting.

## 1.2.0

### Minor Changes

- [#5](https://github.com/synulux/prettier-config/pull/5) [`4360f73`](https://github.com/synulux/prettier-config/commit/4360f73b069eba6a07d362bd9eddd29df5b53d15) Thanks [@synulux](https://github.com/synulux)! - Add `prettier` to format the codebase with the same default configuration values of this package, and adapt the configurations for `lint-staged` and `husky` (including also scripts in the `package.json` file) for it to work correctly.

- [#5](https://github.com/synulux/prettier-config/pull/5) [`3653c01`](https://github.com/synulux/prettier-config/commit/3653c011d23d5f1921b0e2d18f1b680dce6377ad) Thanks [@synulux](https://github.com/synulux)! - Add Visual Studio Code configurations for collaboration (settings and recommended extensions)

## 1.1.0

### Minor Changes

- [#3](https://github.com/synulux/prettier-config/pull/3) [`050858c`](https://github.com/synulux/prettier-config/commit/050858c322d02477e48319fe3d14453adfd8268f) Thanks [@synulux](https://github.com/synulux)! - Make the `overrides` parameter optional.

## 1.0.0

### Major Changes

- [#1](https://github.com/synulux/prettier-config/pull/1) [`68e859d`](https://github.com/synulux/prettier-config/commit/68e859db2e11e5a94efb4963ad9144d935784cad) Thanks [@synulux](https://github.com/synulux)! - This major release indicates that the package is now ready to be used. This was released along with the commit to initialize the package structure (source files, build configurations, and others).
