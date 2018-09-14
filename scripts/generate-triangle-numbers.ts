import * as yargs from 'yargs';
import { writeFileSync } from 'fs';
import { join } from 'path';
import { $perf } from '../shared';

$perf(() => {
    const limit: number = yargs.argv.limit;
    const numbers: Array<number> = [];
    let x = 1;
    let t = 0;

    while (t < limit) {
        numbers.push(t);
        x++;
        t = (x * (x - 1)) / 2;
    }

    const out: string = `export const TRIANGLE_NUMBERS: {[n: string]: boolean} = ${JSON.stringify(numbers.reduce((obj: any, n: number) => {
        obj[n] = true;
        
        return obj
    }, {}))};export const LIMIT = ${limit.toString(10)};`;

    writeFileSync(join(__dirname, '../', '.cache', 'triangle-numbers.cache.ts'), out, { encoding: 'utf-8' });
});
