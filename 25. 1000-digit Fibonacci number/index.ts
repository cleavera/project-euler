import { $BigNum, $perf } from '../shared';

$perf(() => {
    const targetDigitCount = 1000;

    let a: $BigNum = new $BigNum();
    let b: $BigNum = new $BigNum();
    let index: number = 2;

    while (b.digitArray.length < targetDigitCount) {
        let c = b.clone();
        b.add(a);

        a = c;

        index++;
    }

    console.log(index, b.digitArray.reverse().join(''));
});