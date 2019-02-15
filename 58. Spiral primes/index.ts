import { $answer, $isPrime, $perf } from '../shared';

$perf(() => {
    const limit: number = 0.1;
    let primeCount: number = 0;
    let sideLength: number = 1;
    let totalNumbers: number = 1;

    do {
        sideLength = sideLength + 2;
        let bottomRightCorner: number = sideLength ** 2;

        for (let y = 1; y <= 3; y++) {
            let cornerNumber: number = bottomRightCorner - (y * (sideLength - 1));

            if ($isPrime(cornerNumber)) {
                primeCount++;
            }
        }

        totalNumbers = (((sideLength - 1) / 2) * 4) + 1;
    } while ((primeCount / totalNumbers) >= limit);

    $answer(sideLength);
});
