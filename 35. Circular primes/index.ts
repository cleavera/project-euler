import { $answer, $assembleDigits, $digits, $isPrime, $perf } from '../shared';

$perf(() => {
    const limit = 1e6;
    let count: number = 0;

    for (let x = 2; x < limit; x++) {
        if (!$isPrime(x)) {
            continue;
        }

        const digits = $digits(x);
        const l = digits.length;
        const operatingArray = digits.concat(digits);
        let isCircularPrime = true;

        for (let y = 0; y < l; y++) {
            const newNumber = $assembleDigits(operatingArray.slice(y, y + l));

            if (!$isPrime(newNumber)) {
                isCircularPrime = false;
                break;
            }
        }

        if (isCircularPrime) {
            count++;
        }
    }

    $answer(count);
});
