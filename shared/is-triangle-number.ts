/** @private **/
import { LIMIT, TRIANGLE_NUMBERS } from '../.cache/triangle-numbers.cache';

export function $isTriangleNumber(a: number, useCache: boolean = true): boolean {
    if (a === 0) {
        return false;
    }

    a = Math.abs(a);

    if (useCache) {
        if (a < LIMIT) {
            return TRIANGLE_NUMBERS[a];
        }
    }

    let value: number = 1;
    let x: number = 1;

    while (value < a) {
        value = (x^2 + x) / 2;

        if (value === a) {
            return true;
        }

        x++;
    }

    return false;
}