import { $perf } from '../shared';

$perf(() => {
    const limit = 1000;

    let max = {
        length: 0,
        value: 0
    };

    for(let x = 1; x <= limit; x++) {
        const length = reptendLength(1, x);

        if (length > max.length) {
            max = {
                length,
                value: x
            }
        }
    }

    console.log(max.value, max.length);

    function reptendLength(digit: number, divisor: number, remainders: Array<number> = []): number {
        if (digit < divisor) {
            return reptendLength(digit * 10, divisor, remainders);
        } else {
            const remainder = digit % divisor;

            if (remainder === 0) {
                return 0;
            } else {
                const position = remainders.indexOf(remainder);

                if (position >= 0) {
                    return remainders.length - position;
                }

                remainders.push(remainder);

                return reptendLength(remainder * 10, divisor, remainders);
            }
        }
    }
});
