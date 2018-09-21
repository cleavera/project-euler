import { $answer, $assembleDigits, $choose, $digits, $forEach, $generateNumberArray, $getPrimesBelow, $isPrime, $perf, $status } from '../shared';

$perf(() => {
    const target = 8;
    const cacheLimit = 1e6;
    const primes = $getPrimesBelow(cacheLimit);
    let finished: boolean = false;

    $forEach(primes, (prime: number): boolean | void => {
        finished = check(prime);

        if (finished) {
            return true;
        }
    });

    if (finished) {
        return;
    }

    console.log('Not found in cached primes');

    let x: number = cacheLimit;

    while (!finished) {
        if ($isPrime(++x)) {
            finished = check(x);
        }

        if ((x % 10000) === 0) {
            $status(x.toString(10));
        }
    }

    function check(prime: number): boolean {
        let end: boolean = false;

        const digits = $digits(prime);

        if (digits.length === 1) {
            return false;
        }

        const indexes = $generateNumberArray(digits.length);

        for (let x = 1; x < digits.length; x++) {
            $choose(indexes, (digitsToReplace: Array<number>) => {
                let count: number = 0;
                let lowestInsertedNumber: number | null = null;

                for (let z = 0; z <= 9; z++) {
                    if (digitsToReplace[0] === 0 && z == 0) {
                        continue;
                    }

                    const clone = digits.slice();

                    $forEach(digitsToReplace, (digit: number) => {
                        clone[digit] = z;
                    });

                    const number = $assembleDigits(clone);

                    if ($isPrime(number)) {
                        count++;

                        if (!lowestInsertedNumber) {
                            lowestInsertedNumber = number;
                        }
                    }

                    if (count === 0 && z > (z - target)) {
                        break;
                    }
                }

                if (count >= target) {
                    $answer(lowestInsertedNumber);
                    end = true;
                }
            }, x, false);

            if (end) {
                break;
            }
        }

        return end;
    }
});
