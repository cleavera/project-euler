import { $isFactorial, $perf } from '../shared/index';

$perf(function() {
    const limit: number = 4E6;

    let sum = 0;

    for(let x = 0, y = 1, z = 0; y < limit; z = x + y, x = y, y = z) {
        if ($isFactorial(z,2)) {
            sum += z;
        }
    }

    console.log(sum);
});
