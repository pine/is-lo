# is-lo &nbsp;[![npm](https://img.shields.io/npm/v/is-lo.svg)](https://www.npmjs.org/package/is-lo) [![build](https://github.com/pine/is-lo/actions/workflows/build.yml/badge.svg)](https://github.com/pine/is-lo/actions/workflows/build.yml) [![License](https://img.shields.io/github/license/emoji-gen/clone-into.svg)](LICENSE)

:repeat: Check if it is a loopback network interface or not
<br>
<br>

## Getting Started

```sh
$ npm install --save is-lo # for npm users
$ yarn add is-lo           # for yarn users
```

## Breaking Changes

There are breaking changes in v1.0.0.
See [the v1.0.0 release note](https://github.com/pine/is-lo/releases/tag/v1.0.0) for more details.

## Features

- Supports TypeScript
- Supports both CommonJS and ESModules

## Usage

```js
import os from 'node:os'
import { isLo } from 'is-lo'

const interfaces = os.networkInterfaces()
const names = Object.keys(interfaces)

console.log(isLo(interfaces[names[0]])) // true or false
```

## Reference
### `isLo({ family: 'IPv4', address: '127.0.0.1' })`
### `isLo([ { family: 'IPv4', address: '127.0.0.1' }, ... ])`
- `family` (string): `'IPv4'` or `'IPv6'`
- `address` (string): IP address
- **Result** (bool): true if it is loopback network interface

## Development
### Test

```
$ yarn test
```

### Publish

```
$ yarn publish
```

## License
MIT &copy; [Pine Mizune](https://profile.pine.moe)
