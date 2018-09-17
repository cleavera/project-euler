import { $answer, $BigNum, $perf } from '../shared';

$perf(() => {
    const limit = 100;

    const store: { [key: string]: boolean} = {};

    for(let x = 2; x <= limit; x++) {
        let sum: $BigNum = new $BigNum();
        sum.multiply(x);

        for(let y = 2; y <= limit; y++) {
            sum.multiply(x);
            store[sum.toString()] = true;
        }
    }

    $answer(Object.keys(store).length);
});