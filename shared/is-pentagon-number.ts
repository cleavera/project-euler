/** @private **/
import { LIMIT, PENTAGON_NUMBERS } from '../.cache/pentagon-numbers.cache';
import { $isInteger } from './index';

export function $isPentagonNumber(a: number, useCache: boolean = true): boolean {
    if (a === 0) {
        return false;
    }

    a = Math.abs(a);

    if (useCache) {
        if (a < LIMIT) {
            return !!PENTAGON_NUMBERS[a];
        }
    }

    return $isInteger((Math.sqrt(1 + 24 * a) + 1) / 6)
}
