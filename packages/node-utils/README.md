# Core Packages

## @xb/node-utils

> This is a very common utility node functions which can be re-used for build systems and node based projects.

**Note:** This is specifically for node server not at the browser end.

`Note: This is a private npm package and so without registry this wont get installed.`

---

## Installation

> Use any one of the following step to add this pacakge to your project.

- Using npm

```bash
npm install @xb/node-utils --registry http://localhost:4873
```

- Using yarn

```bash
yarn add @xb/node-utils --registry http://localhost:4873
```

**Note:** If your project has `.npm.rc` file already which has the above registry port as well then we dont required to pass the registry details while install/add.

- Add the following in your `dependencies` & run `npm i / yarn install` command.

```js
{
  "dependencies": {
    "@xb/node-utils": "1.0.0"
  }
}
```

---

## Usage

- add the scripts to your file

```javascript
// javacript
const { getFolderListFromPath } = require('@xb/node-utils')

// es6 (javascript)
/**
 * @note
 * you may required to install `esm` package to get the below support
 * as the node needs to understand es6+ versions
 *
 **/
import { getFolderListFromPath } from '@xb/node-utils'

// typescript
import { getFolderListFromPath } from '@xb/node-utils'
```

---
