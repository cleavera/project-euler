import { $answer, $assembleDigits, $choose, $isPrime, $perf, UniqueArray } from '../shared';

$perf(() => {
    const digits = [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9
    ];

    const results: UniqueArray<number> = new UniqueArray();

    $choose(digits, (numberArray: Array<number>) => {
        const permutations: Array<number> = [];

        $choose(numberArray, (permutation: Array<number>) => {
            const n = $assembleDigits(permutation);

            if ($isPrime(n)) {
                permutations.push(n);
            }
        });

        if (permutations.length >= 3) {
            $choose(permutations, (numbers: Array<number>) => {
                const orderedNumbers = numbers.sort();

                if (orderedNumbers[0] < orderedNumbers[1] && orderedNumbers[2] === (2 * orderedNumbers[1]) - orderedNumbers[0]) {
                    results.push($assembleDigits(orderedNumbers));
                }
            }, 3);
        }
    }, 4);

    $answer(results.join('\n'));
});
