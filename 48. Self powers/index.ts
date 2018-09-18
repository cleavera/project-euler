import { $answer, $BigNum, $perf } from '../shared';

$perf(() => {
    const limit = 1000;
    const total = new $BigNum([0]);

    for (let x: number = 1; x <= limit; x++) {
        console.log(x);
        const runningValue: $BigNum = $BigNum.fromNumber(x);

        for (let y: number = 1; y < x; y++) {
            runningValue.multiply(x);
        }

        total.add(runningValue);
    }

    $answer(total.digitArray.slice(total.digitArray.length - 10, total.digitArray.length));
});