is-lo
-----

[![NPM](https://nodei.co/npm/is-lo.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/is-lo/)

[![npm](https://img.shields.io/npm/v/is-lo.svg)](https://www.npmjs.org/package/is-lo)
[![Build Status](https://travis-ci.org/pine/is-lo.svg?branch=master)](https://travis-ci.org/pine/is-lo)
[![Build status](https://ci.appveyor.com/api/projects/status/st8aowcrawyg0ga8/branch/master?svg=true)](https://ci.appveyor.com/project/pine/is-lo/branch/master)
[![Dependency Status](https://img.shields.io/david/pine/is-lo.svg)](https://david-dm.org/pine/is-lo)
[![devDependency Status](https://img.shields.io/david/dev/pine/is-lo.svg)](https://david-dm.org/pine/is-lo#info=devDependencies)
[![Greenkeeper badge](https://badges.greenkeeper.io/pine/is-lo.svg)](https://greenkeeper.io/)

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
