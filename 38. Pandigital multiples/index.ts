import { $perf } from '../shared';
import { $concatenateNumbers } from '../shared/concatenate-numbers';
import { $digits } from '../shared/digits';

$perf(() => {
    const start = 98765;

    for(let x = start; x > 0; x--) {
        let length = 0;
        let num = x;
        let multiple = 1;

        while (length < 9) {
            num = $concatenateNumbers(num, ++multiple * x);
            length = num.toString(10).length;
        }

        if (length === 9) {
            if ($digits(num).sort().join('') === '123456789') {
                console.log(num);
                break;
            }
        }
    }
});
