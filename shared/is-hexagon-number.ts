/** @private **/
import { LIMIT, HEXAGON_NUMBERS } from '../.cache/hexagon-numbers.cache';

export function $isHexagonNumber(a: number, useCache: boolean = true): boolean {
    if (a === 0) {
        return false;
    }

    a = Math.abs(a);

    if (useCache) {
        if (a < LIMIT) {
            return HEXAGON_NUMBERS[a];
        }
    }

    let value: number = 1;
    let x: number = 1;

    while (value < a) {
        value = (x * ((2 * x) - 1));

        if (value === a) {
            return true;
        }

        x++;
    }

    return false;
}
