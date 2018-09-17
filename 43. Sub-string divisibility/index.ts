import { $answer, $assembleDigits, $choose, $isFactorial, $perf } from '../shared';

$perf(() => {
    const digits: Array<number> = [
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

    let sum = 0;

    $choose(digits, (d: Array<number>) => {
        if (
            $isFactorial($assembleDigits([d[1], d[2], d[3]]), 2)
            && $isFactorial($assembleDigits([d[2], d[3], d[4]]), 3)
            && $isFactorial($assembleDigits([d[3], d[4], d[5]]), 5)
            && $isFactorial($assembleDigits([d[4], d[5], d[6]]), 7)
            && $isFactorial($assembleDigits([d[5], d[6], d[7]]), 11)
            && $isFactorial($assembleDigits([d[6], d[7], d[8]]), 13)
            && $isFactorial($assembleDigits([d[7], d[8], d[9]]), 17)
        ) {
            sum += $assembleDigits(d);
        }
    });

    $answer(sum);
});