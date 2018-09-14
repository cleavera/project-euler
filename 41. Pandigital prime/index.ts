import { $isPrime, $perf } from '../shared';
import { $assembleDigits } from '../shared/assemble-digits';
import { $choose } from '../shared/choose';

$perf(() => {
    const digits: Array<number> = [
        9,
        8,
        7,
        6,
        5,
        4,
        3,
        2,
        1
    ];

    while (digits.length) {
        $choose(digits, (reorderedArray: Array<number>) => {
            const number = $assembleDigits(reorderedArray);

            if ($isPrime(number)) {
                console.log(number);

                process.exit();
            }
        });

        digits.splice(0, 1);
    }
});