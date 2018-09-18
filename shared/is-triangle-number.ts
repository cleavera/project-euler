/** @private **/
import { LIMIT, TRIANGLE_NUMBERS } from '../.cache/triangle-numbers.cache';
import { $isInteger } from './index';

export function $isTriangleNumber(a: number, useCache: boolean = true): boolean {
    if (a === 0) {
        return false;
    }

    a = Math.abs(a);

    if (useCache) {
        if (a < LIMIT) {
            return !!TRIANGLE_NUMBERS[a];
        }
    }

    return $isInteger((Math.sqrt((8 * a) + 1) - 1) / 2);
}