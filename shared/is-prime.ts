/** @private **/
import { $isInteger } from './is-integer';

export function $isPrime(a: number): boolean {
    a = Math.abs(a);
    for (let factor: number = 2, value: number = a; factor <= value; factor++) {
        value = a / factor;

        if (value !== 1 && $isInteger(value)) {
            return false;
        }
    }

    return true;
}