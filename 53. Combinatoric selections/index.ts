import { $answer, $factorial, $perf } from '../shared';

$perf(() => {
    const limit = 100;
    const target = 1e6;

    let count = 0;

    for (let n: number = 0; n <= limit; n++){
        for (let r: number = 0; r < n; r++) {
            if (combinatoric(r, n) > target) {
                count++;
            }
        }
    }

    $answer(count);

    function combinatoric(r: number, n: number): number {
        return ($factorial(n)) / ($factorial(r) * $factorial(n - r));
    }
});
