import type { NetworkInterfaceInfo } from 'node:os'
import ipaddr from 'ipaddr.js'

function checkIfLoopback(info: NetworkInterfaceInfo): boolean {
    if (info.family === 'IPv4') {
        return info.address === '127.0.0.1'
    }

    if (info.family === 'IPv6') {
        if (ipaddr.IPv6.isValid(info.address)) {
            const addr = ipaddr.IPv6.parse(info.address)
            return addr.toRFC5952String() === '::1'
        }
    }

    return false
}

export function isLo(info?: NetworkInterfaceInfo|NetworkInterfaceInfo[]): boolean {
    if (Array.isArray(info)) {
        for (let i = 0; i < info.length; i++) {
            if (checkIfLoopback(info[i])) {
                return true
            }
        }
    } else if (info) {
        return checkIfLoopback(info)
    }

    return false
}
