import { LIMIT, PRIMES } from '../.cache/primes.cache';
import { $isPrime } from './is-prime';

let cache: Array<number> = Object.keys(PRIMES).map((prime: string): number => {
    return parseInt(prime);
});

let max: number = LIMIT;

export function $getPrimesBelow(limit: number): Array<number> {
    const out: Array<number> = cache;

    if (limit < max) {
        return cache.filter((p: number) => {
            return p < limit;
        });
    }

    let n: number = max;

    while (n < limit) {
        if ($isPrime(n)) {
            out.push(n);
        }

        n++;
    }

    cache = out;
    max = limit;

    return out;
}
