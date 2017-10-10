import { $isPrime, $perf } from '../shared';

$perf(() => {
    const limit = 2E6;

    let total: number = 2;

    let x: number = 1;

    while (x + 1 < limit) {
        x += 2;

        if ($isPrime(x)) {
            total += x;
        }
    }

    console.log(total);
});