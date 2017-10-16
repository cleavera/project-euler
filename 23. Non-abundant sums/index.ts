import { $perf } from '../shared';
import { $factors } from '../shared/factors';

$perf(() => {
    const limit = 28123;

    const abundantNumbersMap: { [index: number]: number } = {};
    const abundantNumbers: Array<number> = [];

    let total: number = 0;

    for (let x: number = 1; x < limit; x++) {
        const factorSum = $factors(x).reduce((total: number, factor: number) => {
            if (factor === x) {
                return total;
            }

            return total + factor;
        }, 0);

        if (factorSum > x) {
            abundantNumbers.push(x);
            abundantNumbersMap[x] = factorSum;
        }

        const match = abundantNumbers.reduce((match: boolean, num: number): boolean => {
            if (abundantNumbersMap[x - num]) {
                return true;
            }

            return match;
        }, false);

        if (!match) {
            total += x;
        }
    }

    console.log(total);
});