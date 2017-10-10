import { SEARCH_NUM } from './value';
import { $perf } from '../shared';

$perf(() => {
    const numberCount = 13;

    for(let x = 9; x > 1; x--) {
        const search: RegExp = new RegExp(`[${x}-9]{${numberCount}}`, 'g');

        const matches = SEARCH_NUM.match(search);

        if (matches) {
            console.log(matches.reduce<number>((max: number, match: string) => {
                const total = match.split('').reduce((accumulator: number, num: string) => {
                    return accumulator * parseInt(num, 10);
                }, 1);

                if (total > max) {
                    return total;
                }

                return max;
            }, 0));

            return;
        }
    }

    console.log(0);
});