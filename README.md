is-lo
-----

[![Greenkeeper badge](https://badges.greenkeeper.io/pine/is-lo.svg)](https://greenkeeper.io/)

[![NPM](https://nodei.co/npm/is-lo.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/is-lo/)

[![npm](https://img.shields.io/npm/v/is-lo.svg?style=flat-square)](https://www.npmjs.org/package/is-lo)
[![Build Status](https://img.shields.io/travis/pine/is-lo/master.svg?style=flat-square)](https://travis-ci.org/pine/is-lo)
[![Build Status](https://img.shields.io/appveyor/ci/pine/is-lo/master.svg?style=flat-square&maxAge=2592000)](https://ci.appveyor.com/project/pine/is-lo/branch/master)
[![Dependency Status](https://img.shields.io/david/pine/is-lo.svg?style=flat-square)](https://david-dm.org/pine/is-lo)
[![devDependency Status](https://img.shields.io/david/dev/pine/is-lo.svg?style=flat-square)](https://david-dm.org/pine/is-lo#info=devDependencies)

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
MIT &copy; Pine Mizune
