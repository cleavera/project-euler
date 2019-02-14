import { $answer, $perf, $sumArray } from '../shared';

$perf(() => {
    let limit: number = 100;

    let max: number = 0;

    for (let a: number = limit; a > 0; a--) {
        for (let b: number = limit; b > 0; b--) {

            let n: bigint = BigInt(a) ** BigInt(b);

            const digitArray: Array<number> = n.toString().split('').map((d: string): number => {
                return parseInt(d, 10);
            });

            if ((digitArray.length * 9) < max) {
                break;
            }

            const sum: number = $sumArray(digitArray);

            if (sum > max) {
                max = sum;
            }
        }
    }

    $answer(max);
});
