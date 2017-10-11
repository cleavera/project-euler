import { $perf } from '../shared';
import { $factors } from '../shared/factors';

$perf(() => {
    const divisorCount = 500;

    let x: number = 0;
    let total: number = 0;

    while(true) {
        x++;
        total += x;

        const factorCount = $factors(total).length;

        if (factorCount > divisorCount) {
            console.log(x, total, factorCount);

            return;
        }
    }
});
