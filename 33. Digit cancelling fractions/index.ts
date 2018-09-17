import { $answer, $digits, $multiplyFraction, $perf } from '../shared';

$perf(() => {
    let product: [number, number] = [1, 1];

    for (let numerator = 10; numerator < 100; numerator++) {
        for (let denominator = numerator + 1; denominator < 100; denominator++) {
            const fraction = numerator / denominator;

            const numeratorDigits = $digits(numerator);
            const denominatorDigits = $digits(denominator);

            if (
                (fraction === numeratorDigits[0] / denominatorDigits[1] && numeratorDigits[1] === denominatorDigits[0])
                || (fraction === numeratorDigits[1] / denominatorDigits[0] && numeratorDigits[0] === denominatorDigits[1])
                || (fraction === numeratorDigits[1] / denominatorDigits[1] && numeratorDigits[0] === denominatorDigits[0])
            ) {
                product = $multiplyFraction(product, [numerator, denominator]);
            }
        }
    }

    $answer(product[1]);
});
