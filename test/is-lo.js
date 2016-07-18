'use strict'

const test = require('ava')
const isLo = require('../lib/is-lo')

test('isLo', t => {
  t.is(isLo(), false)
  t.is(isLo([]), false)


  t.is(isLo({ address: '127.0.0.1', family: 'IPv4' }), true)
  t.is(isLo({ address: '::1', family: 'IPv6' }), true)
  t.is(isLo({ address: '0:0:0:0:0:0:0:1', family: 'IPv6' }), true)

  t.is(isLo({ address: '127.0.0.1', family: 'IPv6' }), false)
  t.is(isLo({ address: '::1', family: 'IPv4' }), false)
  t.is(isLo({ address: '0:0:0:0:0:0:0:1', family: 'IPv4' }), false)

  t.is(isLo({ address: '192.168.0.1', family: 'IPv4' }), false)
  t.is(isLo({ address: 'fe00::4000:ffff:fe00:dddd', family: 'IPv6' }), false)


  t.is(isLo([ { address: '127.0.0.1', family: 'IPv4' } ]), true)
  t.is(isLo([ { address: '::1', family: 'IPv6' } ]), true)
  t.is(isLo([ { address: '0:0:0:0:0:0:0:1', family: 'IPv6' } ]), true)

  t.is(isLo([ { address: '127.0.0.1', family: 'IPv6' } ]), false)
  t.is(isLo([ { address: '::1', family: 'IPv4' } ]), false)
  t.is(isLo([ { address: '0:0:0:0:0:0:0:1', family: 'IPv4' } ]), false)

  t.is(isLo([ { address: '192.168.0.1', family: 'IPv4' } ]), false)
  t.is(isLo([ { address: 'fe00::4000:ffff:fe00:dddd', family: 'IPv6' } ]), false)


  t.is(isLo([
    { address: '127.0.0.1', family: 'IPv4' },
    { address: '::1', family: 'IPv6' },
  ]), true)
  t.is(isLo([
    { address: '127.0.0.1', family: 'IPv4' },
    { address: 'fe00::4000:ffff:fe00:dddd', family: 'IPv6' },
  ]), true)
  t.is(isLo([
    { address: '192.168.0.1', family: 'IPv4' },
    { address: '::1', family: 'IPv6' },
  ]), true)
})
