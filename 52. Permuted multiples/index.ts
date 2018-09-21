import { $answer, $digits, $perf, $similar } from '../shared';

$perf(() => {
    const multipliers = 6;
    let x: number = 1;

    while (x++) {
        const digits = $digits(x);
        let match: boolean = true;

        for (let y = 1; y <= multipliers; y++) {
            if (!$similar($digits(x * y), digits)) {
                match = false;
                break;
            }
        }

        if (match) {
            $answer(x);
            break;
        }
    }
});