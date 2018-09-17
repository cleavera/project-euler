import { $answer, $perf } from '../shared';

$perf(() => {
    const power = 5;

    let num: number = 9;
    let sum: number = num ** power;

    while (sum > num) {
        num = num * 10 + 9;
        sum = calculateSum(num);
    }

    const limit = sum;
    const out: Array<number> = [];

    for (let x: number = 2; x < limit; x++) {
        if (x === calculateSum(x)) {
            out.push(x);
        }
    }

    console.log(out.join(', '));
    $answer(out.reduce((acc: number, value: number) => {
        return acc + value;
    }, 0));

    function calculateSum(num: number) {
        const digits = num.toString(10).split('');

        return digits.reduce((acc: number, digit: string) => {
            return acc + parseInt(digit, 10) ** power;
        }, 0);
    }
});
