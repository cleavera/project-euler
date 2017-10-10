import { $isInteger, $perf, $reverseString } from '../shared';

$perf(function() {
    const digits = 5;

    let numberString: string = '';

    for (let x: number = 0; x < digits; x++) {
        numberString += '9';
    }

    const maxComponentNumber = Number(numberString);
    const maxTotalNumber = maxComponentNumber * maxComponentNumber;

    let palindromeCounter: number = Number(maxTotalNumber.toString().substr(0, digits));

    while (true) {
        const palindromeNumber = Number(palindromeCounter + $reverseString(palindromeCounter.toString()));

        let x: number = maxComponentNumber;
        let factor: number = palindromeNumber / x;

        while (x > factor) {
            if ($isInteger(factor)) {
                console.log(x, factor, palindromeNumber);

                return;
            }

            factor = palindromeNumber / --x;
        }

        if (--palindromeCounter < 0) {
            throw new Error(`Cannot find factors for ${digits} digit number`);
        }
    }
});
