/** @private **/
import { $isInteger } from './is-integer';

export function $primeFactorials(product: number): Array<number> {
    let result: Array<number> = [];

    getPrimeFactorial(product);

    return result;

    function getPrimeFactorial(value: number, factor: number = 2): boolean {
        if (factor >= value) {
            return true;
        }

        const newValue: number = value / factor;

        if ($isInteger(newValue)) {
            const isValuePrime: boolean = getPrimeFactorial(newValue);
            const isFactorPrime: boolean = getPrimeFactorial(factor);

            if (isFactorPrime) {
                result.push(factor);
            }

            if (isValuePrime) {
                result.push(newValue);
            }

            return false;
        }

        if (factor !== 2) {
            factor++;
        }

        return getPrimeFactorial(value, ++factor);
    }
}
