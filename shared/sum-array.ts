import { $forEach } from './for-each';

export function $sumArray(items: Array<number>): number {
    let total = 0;

    $forEach(items, (item) => {
        total += item;
    });

    return total;
}
