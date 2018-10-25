/** @private **/
import { $isInteger } from './is-integer';
import { LIMIT, PRIMES } from '../.cache/primes.cache';

export function $isPrime(a: number, useCache: boolean = true): boolean {
    if (a === 0 || a === 1) {
        return false;
    }

    a = Math.abs(a);

    if (useCache) {
        if (a < LIMIT) {
            return PRIMES[a];
        }
    }

    for (let factor: number = 2, value: number = Math.sqrt(a); factor <= value; factor++) {
        value = a / factor;

        if (value !== 1 && $isInteger(value)) {
            return false;
        }
    }

    return true;
}
