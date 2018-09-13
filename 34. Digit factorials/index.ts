import { $factorial, $perf } from '../shared';
import { $digits } from '../shared/digits';

$perf(() => {
    const limit = 1e7;
    let total: number = 0;

    for (let x = 10; x < limit; x++) {
        const digits: Array<number> = $digits(x);

        const sum = digits.reduce((total: number, digit: number): number => {
            return total + $factorial(digit);
        }, 0);

        if (sum === x) {
            console.log(`Match: ${x}`);
            total += x;
        }
    }

    console.log(total);
});