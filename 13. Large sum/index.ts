import { $perf } from '../shared';
import { NUMBERS } from './numbers';

/**
 * Not Guaranteed to give the correct result but incorrect result is extremely unlikely
 */

$perf(() => {
    const targetDigits = 10;

    const numbers = NUMBERS.split('\n');

    console.log(numbers.reduce<number>((total: number, number: string): number => {
        total += parseInt(number.substr(0, targetDigits + 1), 10);

        return total;
    }, 0).toString().substr(0, targetDigits));
});
