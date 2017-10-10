import { $isPrime, $perf } from '../shared';

$perf(() => {
    const limit = 2E6;

    let total: number = 2;

    let x: number = 1;

    while (x <= limit) {
        x += 2;

        if ($isPrime(x)) {
            total += x;
        }
    }

    console.log(total);
});