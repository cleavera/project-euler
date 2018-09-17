import { $answer, $isInteger, $perf } from '../shared';

$perf(() => {
    const limit = 1000;
    let recordCount = 0;
    let record = 0;

    for (let p = 0; p < limit; p++) {
        let solutionCount = 0;

        for (let a = 0; a < p; a++) {
            if (checkMatches(p, a)) {
                solutionCount++;
            }
        }

        if (solutionCount > recordCount) {
            record = p;
            recordCount = solutionCount;
        }
    }

    $answer(`${record} with ${recordCount} solutions`);

    function checkMatches(p: number, a: number): boolean {
        const b: number = ((2 * p * a) - (p ** 2)) / ((2 * a) - (2 * p));

        return $isInteger(b);
    }
});
