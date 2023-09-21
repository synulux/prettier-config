# `@synulux/prettier-config`

This package provides a shareable configuration for Prettier, a popular code formatter. It includes the default conventions used by Synulux (Sandy Stone).

## Installation

To use this configuration, you must have Prettier installed (check the [official documentation](https://prettier.io/docs/en/) for detailed information on how to install Prettier).

Then, create (or edit) an `.npmrc` file at the root of your project and add the following line:

```ini
@synulux:registry=https://npm.pkg.github.com/
```

Finally, you can now add the package to your project:

```zsh
pnpm add --save-dev @synulux/prettier-config
```

```zsh
npm install --save-dev @synulux/prettier-config
```

## Usage

After installing the package, you can reference it in your Prettier configuration file. It is recommended to use a valid configuration file name ending with `.js` (preferable, `prettier.config.js`). An example configuration file can be:

```js
// @ts-check

import { defineConfig } from "@synulux/prettier-config";

/** @type {import("prettier").Options} */
export default defineConfig();
```

You can add an object argument to the `defineConfig` function to override the configuration options you need, for example:

```js
// @ts-check

import { defineConfig } from "@synulux/prettier-config";

/** @type {import("prettier").Options} */
export default defineConfig({
  printWidth: 80,
  tabWidth: 4,
  useTabs: true
});
```

For more information on how to use shareable configurations with Prettier, please refer to the [official documentation](https://prettier.io/docs/en/configuration#sharing-configurations).

## License

> Copyright 2023 Sandy Stone
>
> Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at
>
> http://www.apache.org/licenses/LICENSE-2.0
>
> Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
