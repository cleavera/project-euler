import { $answer, $assembleDigits, $choose, $isPrime, $perf } from '../shared';

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
                $answer(number);
            }
        });

        digits.splice(0, 1);
    }
});