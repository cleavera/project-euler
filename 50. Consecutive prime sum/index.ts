import { $answer, $getPrimesBelow, $isPrime, $perf, $sumArray } from '../shared';

$perf(() => {
    const limit = 1e6;
    const primes = $getPrimesBelow(limit);

    let recordLength = 0;
    let record = 0;

    for (let x = 0; x < primes.length; x++) {
        for (let y = x; y < primes.length; y++) {
            const subset = primes.slice(x, y);
            const sum = $sumArray(subset);

            if (sum > limit) {
                break;
            }

            if ($isPrime(sum)) {
                if (subset.length > recordLength) {
                    recordLength = subset.length;
                    record = sum;
                }
            }
        }
    }

    $answer(record);
});
