'use strict'

const normalize = require('ipv6-normalize')

module.exports = function (addrs) {
  if (!Array.isArray(addrs)) {
    if (!addrs) {
      return false
    }
    addrs = [ addrs ]
  }

  for (let addr of addrs) {
    if (addr.family === 'IPv4' && addr.address === '127.0.0.1') {
      return true
    } else if (addr.family === 'IPv6' && normalize(addr.address) === '::1') {
      return true
    }
  }

  return false
}
