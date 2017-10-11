/** @private **/
import { $isInteger } from './is-integer';

export function $factors(value: number): Array<number> {
    const factors: Array<number> = [1, value];

    let testFactor: number = 1;
    let highestFactor: number = value;

    while(++testFactor < highestFactor) {
        const result = value / testFactor;

        if ($isInteger(result)) {
            factors.push(testFactor, result);
            highestFactor = result;
        }
    }

    return factors;
}