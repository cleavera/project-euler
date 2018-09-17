/** @private **/
import { LIMIT, PENTAGON_NUMBERS } from '../.cache/pentagon-numbers.cache';

export function $isPentagonNumber(a: number, useCache: boolean = true): boolean {
    if (a === 0) {
        return false;
    }

    a = Math.abs(a);

    if (useCache) {
        if (a < LIMIT) {
            return PENTAGON_NUMBERS[a];
        }
    }

    let value: number = 1;
    let x: number = 1;

    while (value < a) {
        value = (x * ((3 * x) - 1)) / 2;

        if (value === a) {
            return true;
        }

        x++;
    }

    return false;
}
