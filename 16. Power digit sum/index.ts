import { $BigNum, $perf } from '../shared';

$perf(() => {
    const power = 1000;
    const base = 2;

    const num = new $BigNum();

    for (let x = 0; x < power; x++) {
        num.multiply(base);
    }

    console.log(num.digitArray.reduce((total: number, digit: number) => {
        return total + digit;
    }, 0));
});