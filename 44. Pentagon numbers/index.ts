import { $answer, $perf } from '../shared';
import { $isPentagonNumber } from '../shared/is-pentagon-number';

$perf(() => {
    let record: number = Number.MAX_SAFE_INTEGER;
    let diff: number = 0;
    let n = 1;

    while (record > diff) {
        const x = pentagonNumber(n);

        for (let i = 1; i < n; i++) {
            const y = pentagonNumber(i);
            diff = x - y;

            if ($isPentagonNumber(x + y) && $isPentagonNumber(diff)) {
                console.log(n, x, i, y, diff, record);
                if (diff < record) {
                    record = diff;
                }
            }
        }

        if (record !== Number.MAX_SAFE_INTEGER && !(n % 1000)) {
            console.log(n, diff, record);
        }

        n++;
    }

    $answer(record);

    function pentagonNumber(n: number): number {
        return (n * ((3 * n) - 1))/2;
    }
});
