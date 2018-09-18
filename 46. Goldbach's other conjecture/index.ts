import { $answer, $forEach, $getPrimesBelow, $isPrime, $isSquareNumber, $perf } from '../shared';

$perf(() => {
    let x = 1;

    while (true) {
        x += 2;

        if ($isPrime(x)) {
            continue;
        }

        let primes: Array<number> = $getPrimesBelow(x);
        let hasMatch: boolean = false;

        $forEach(primes, (prime: number) => {
            let n: number = (x - prime) / 2;

            if ($isSquareNumber(n)) {
                hasMatch = true;
            }
        });

        if (!hasMatch) {
            $answer(x);

            break;
        }
    }
});
