import { $isInteger } from '../shared';

(function() {
    const num = 600851475143;

    let result: Array<number> = [];

    getPrimeFactorial(num);

    console.log(result.sort((a: number, b: number) => {
        if (a < b) {
            return -1;
        }

        if (a > b) {
            return 1;
        }

        return 0;
    }));

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
})();
