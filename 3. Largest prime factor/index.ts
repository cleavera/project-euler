import { $perf, $primeFactorials } from '../shared';

$perf(function() {
    const num = 600851475143;

    console.log($primeFactorials(num).sort((a: number, b: number) => {
        if (a < b) {
            return -1;
        }

        if (a > b) {
            return 1;
        }

        return 0;
    }));
});
