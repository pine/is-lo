is-lo
-----

[![npm](https://img.shields.io/npm/v/is-lo.svg)](https://www.npmjs.org/package/is-lo)

Check if it is a loopback network interface or not

## Getting Started

```
$ npm install --save is-lo
```

## Usage

```js
const os = require('os')
const isLo = require('is-lo')

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

## License
MIT &copy; [Pine Mizune](https://profile.pine.moe)
