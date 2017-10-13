import { $perf } from '../shared';
import { $factors } from '../shared/factors';

$perf(() => {
    const limit = 10000;

    const map: {[sum: number]: number} = {};
    const amicableNumbers: Array<number> = [];

    for (let x: number = 2; x < limit; x++) {
        const factors = $factors(x);

        const sum = factors.reduce((total: number, factor: number) => {
            return total + (factor === x ? 0 : factor);
        }, 0);

        if (map[x] === sum) {
            amicableNumbers.push(sum);
            amicableNumbers.push(x);
        }

        map[sum] = x;
    }

    console.log(amicableNumbers, amicableNumbers.reduce((total: number, num: number) => {
        return total + num;
    }, 0));
});
