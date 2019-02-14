import { $answer, $perf } from '../shared';
import { $FractionalNumber } from '../shared/fractional-number';

$perf(() => {
    const limit: number = 1000;
    let x: number = 0;
    let n: $FractionalNumber = new $FractionalNumber(1n, 2n);

    let total: number = 0;

    while (++x < limit) {
        let result: $FractionalNumber = $FractionalNumber.identity().add(n);

        if (result.numerator.toString(10).length > result.denomenator.toString(10).length) {
            total++;
        }

        n = $FractionalNumber.identity().divide($FractionalNumber.two().add(n));
    }

    $answer(total);
});
