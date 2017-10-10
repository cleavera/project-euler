import { $series, $sumNumbersUpTo } from '../shared';

(function() {
    const limit = 100;

    const sum = $sumNumbersUpTo(limit);
    const squareOfSum = sum * sum;

    const sumOfSquares = $series((n: number) => {
        return n * n;
    }, limit);

    console.log(sumOfSquares, squareOfSum, squareOfSum - sumOfSquares);
})();