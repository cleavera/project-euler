/** @private **/
import { $reverseString } from './reverse-string';

export function $reverseInt(i: number): number {
    return parseInt($reverseString(i.toString(10)), 10);
}
