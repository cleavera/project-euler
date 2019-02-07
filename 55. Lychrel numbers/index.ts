import { $answer, $isPalindrome, $perf, $reverseInt } from '../shared';

$perf(() => {
    const limit = 10000;
    const maxIterations = 50;
    let count = 0;

    for (let x: number = 0; x <= limit; x++) {
        let n: number | null = x;

        for (let y: number = 0; y <= maxIterations; y++) {
            n = n + $reverseInt(n);

            if ($isPalindrome(n.toString(10))) {
                n = null;
                break;
            }
        }

        if (n !== null) {
            count++;
        }
    }

    $answer(count);
});
