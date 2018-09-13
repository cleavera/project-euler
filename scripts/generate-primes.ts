import * as yargs from 'yargs';
import { writeFileSync } from 'fs';
import { join } from 'path';
import { $isPrime, $perf } from '../shared';

$perf(() => {
    const limit: number = yargs.argv.limit;
    const primes: Array<number> = [];

    for (let x = 0; x < limit; x++) {
        if ($isPrime(x, false)) {
            primes.push(x);
        }
    }

    const out: string = `export const LIMIT = ${limit.toString(10)};export const PRIMES: {[n: string]: boolean} = ${JSON.stringify(primes.reduce((obj: any, prime: number) => {
        obj[prime] = true;

        return obj
    }, {}))};`;

    writeFileSync(join(__dirname, '../', '.cache', 'primes.cache.ts'), out, { encoding: 'utf-8' });
});
