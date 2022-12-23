import type {
    NetworkInterfaceInfoIPv4,
    NetworkInterfaceInfoIPv6,
} from 'node:os'
import { isLo } from './index'

function ipv4(address: string): NetworkInterfaceInfoIPv4 {
    return {
        family: 'IPv4',
        address,
        netmask: '',
        mac: '',
        internal: true,
        cidr: null,
    }
}

function ipv6(address: string): NetworkInterfaceInfoIPv6 {
    return {
        family: 'IPv6',
        scopeid: 0,
        address,
        netmask: '',
        mac: '',
        internal: true,
        cidr: null,
    }
}

test('empty', () => {
    expect(isLo()).toBe(false)
    expect(isLo([])).toBe(false)
})

test('object', () => {
    expect(isLo(ipv4('127.0.0.1'))).toBe(true)
    expect(isLo(ipv6('::1'))).toBe(true)
    expect(isLo(ipv6('0:0:0:0:0:0:0:1'))).toBe(true)

    expect(isLo(ipv6('127.0.0.1'))).toBe(false)
    expect(isLo(ipv4('::1'))).toBe(false)
    expect(isLo(ipv4('0:0:0:0:0:0:0:1'))).toBe(false)

    expect(isLo(ipv4('192.168.0.1'))).toBe(false)
    expect(isLo(ipv6('fe00::4000:ffff:fe00:dddd'))).toBe(false)
})

test('array with a single element', () => {
    expect(isLo([ ipv4('127.0.0.1') ])).toBe(true)
    expect(isLo([ ipv6('::1') ])).toBe(true)
    expect(isLo([ ipv6('0:0:0:0:0:0:0:1') ])).toBe(true)

    expect(isLo([ ipv6('127.0.0.1') ])).toBe(false)
    expect(isLo([ ipv4('::1') ])).toBe(false)
    expect(isLo([ ipv4('0:0:0:0:0:0:0:1') ])).toBe(false)

    expect(isLo([ ipv4('192.168.0.1') ])).toBe(false)
    expect(isLo([ ipv6('fe00::4000:ffff:fe00:dddd') ])).toBe(false)
})

test('array with multiple elements', () => {
    expect(isLo([ ipv4('127.0.0.1'), ipv6('::1') ])).toBe(true)
    expect(isLo([ ipv4('127.0.0.1'), ipv6('fe00::4000:ffff:fe00:dddd') ])).toBe(true)
    expect(isLo([ ipv4('192.168.0.1'), ipv6('::1') ])).toBe(true)

    expect(isLo([ ipv4('192.168.0.1'), ipv6('fe00::4000:ffff:fe00:dddd') ])).toBe(false)
})
