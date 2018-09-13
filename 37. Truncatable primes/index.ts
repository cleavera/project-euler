import { $isPrime, $perf } from '../shared';
import { $assembleDigits } from '../shared/assemble-digits';
import { $concatenateNumbers } from '../shared/concatenate-numbers';
import { $digits } from '../shared/digits';
import { $forEach } from '../shared/for-each';

$perf(() => {
    const limit = 11;
    let count = 0;
    let sum = 0;

    const basePrimes = [
        3,
        7
    ];

    const appendableNumbers = [
        1,
        2,
        3,
        5,
        7,
        9
    ];

    let lastStep: Array<number> = basePrimes.slice();

    while(count < limit) {
        lastStep = checkNextStep(lastStep);
    }

    console.log(sum);

    function isRightTruncatable(_prime: number): boolean {
        const digits = $digits(_prime);

        for (let x = digits.length; x >= 0; --x) {
            if (!$isPrime($assembleDigits(digits.slice(0, x)))) {
                return false;
            }
        }

        return true;
    }

    function checkNextStep(previousPrimes: Array<number>): Array<number> {
        let newPrimes: Array<number> = [];

        $forEach(appendableNumbers, (n : number): void => {
            $forEach(previousPrimes, (prime: number) => {
                const newPrime = $concatenateNumbers(n, prime);

                if ($isPrime(newPrime)) {
                    newPrimes.push(newPrime);

                    if (isRightTruncatable(newPrime) && count < limit) {
                        sum += newPrime;
                        count++;
                    }
                }
            });
        });

        return newPrimes;
    }
});
