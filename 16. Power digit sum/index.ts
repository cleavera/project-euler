import { $perf } from '../shared';

$perf(() => {
    const power = 1000;
    const base = 2;

    const digitArray: Array<number> = [1];

    for (let x = 0; x < power; x++) {
        const finalCarry: number = digitArray.reduce<number>((carry: number, digit: number, index: number) => {
            const product = (digit * base) + carry;

            const [newCarry, newDigit] = (product / 10).toString().split('.');

            digitArray[index] = parseInt(newDigit || '0', 10);

            return parseInt(newCarry || '0', 10);
        }, 0);

        if (finalCarry) {
            digitArray.push(finalCarry);
        }
    }

    console.log(digitArray.reduce((total: number, digit: number) => {
        return total + digit;
    }, 0));
});