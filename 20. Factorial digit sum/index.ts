import { $BigNum, $perf } from '../shared';

$perf(() => {
    const target = 100;

    const num = new $BigNum();

    for (let x = target; x > 0; x--) {
        num.multiply(x);
    }

    console.log(num.digitArray.reduce((total: number, digit: number): number => {
        return total + digit;
    }, 0));
});
