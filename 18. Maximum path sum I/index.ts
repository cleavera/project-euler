import { $perf } from '../shared';
import { PATTERN } from './value';

$perf(() => {
    const tree = PATTERN.split('\n').map((row: string) => {
        return row.split(/\s/g).map((value: string) => {
            return parseInt(value, 10);
        })
    });

    function traverse([row, col]: [number, number]): number {
        const currentValue = tree[row][col];

        if (++row >= tree.length) {
            return currentValue;
        }

        const leftValue = traverse([row, col]);
        const rightValue = traverse([row, ++col]);

        return leftValue > rightValue ? leftValue + currentValue : rightValue + currentValue;
    }

    console.log(traverse([0, 0]));
});
