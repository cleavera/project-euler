import { $isPrime, $perf } from '../shared';

$perf(function() {
    const index = 10001;

    let primeCounter: number = 1;
    let lastPrime: number = 2;
    let testNumber: number = 1;

    while (primeCounter < index) {
        testNumber += 2;

        if ($isPrime(testNumber)) {
            lastPrime = testNumber;
            primeCounter++;
        }
    }

    console.log(lastPrime);
});