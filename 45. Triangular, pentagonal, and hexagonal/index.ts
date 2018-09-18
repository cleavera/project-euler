import { $answer, $isPentagonNumber, $isTriangleNumber, $perf } from '../shared';
import { $isHexagonNumber } from '../shared/is-hexagon-number';

$perf(() => {
    const start = 286;
    let x: number = start;
    let n: number;

    do {
        n = triangleNumber(++x);
    } while (!($isTriangleNumber(n) && $isPentagonNumber(n) && $isHexagonNumber(n)));

    $answer(n);

    function triangleNumber(x: number): number {
        return (x * (x - 1)) / 2;
    }
});
