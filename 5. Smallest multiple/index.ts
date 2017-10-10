import { $isFactorial, $perf } from '../shared';

$perf(function() {
    const maxNumber = 20;

    let start: number = maxNumber - 2;

    while (!checkFactors(++start * maxNumber, maxNumber)) {}

    console.log(start * maxNumber);

    function checkFactors(value: number, factor: number): boolean {
        if (factor === 1) {
            return true;
        }

        return $isFactorial(value, factor) && checkFactors(value, --factor);
    }
});
