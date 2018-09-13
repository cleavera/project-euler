import { $isEven, $isPrime, $perf } from '../shared';

$perf(() => {
    const limit = 1000;
    let record = 0;
    let recordA = 0;
    let recordB = 0;

    for (let b = -limit; b <= limit; b++) {
        if (b !== 2 && $isEven(b)) {
            continue;
        }

        for (let a = -limit; a < limit; a++) {
            if ($isEven(a)) {
                continue;
            }

            let n: number = 0;

            while($isPrime(quadraticFormula(n, a, b))) {
                if (n > record) {
                    record = n;
                    recordA = a;
                    recordB = b;
                }

                n++;
            }
        }
    }

    console.log(`Record: ${record}`);
    console.log(`     a: ${recordA}`);
    console.log(`     b: ${recordB}`);

    console.log(`Result: ${recordA * recordB}`);

    function quadraticFormula(n: number, a: number, b: number) {
        return (n * n) + (a * n) + b;
    }
});
