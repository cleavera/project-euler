import { $perf, $squareNumbers } from '../shared';

$perf(() => {
    const target = 1000;

    const squareNumberMap = $squareNumbers(target);
    const squareNumbers = Object.keys(squareNumberMap);

    for (let x: number = 0; x < target; x++) {
        const aa = parseInt(squareNumbers[x]);

        for (let y: number = x + 1; y < target; y++) {
            const bb = parseInt(squareNumbers[y], 10);
            const cc = aa + bb;

            const c = squareNumberMap[cc];

            if (c) {
                const a = squareNumberMap[aa];
                const b = squareNumberMap[bb];

                if ((a + b + c) === target) {
                    console.log(a, b, c, a * b * c);

                    return;
                }
            }
        }
    }
});