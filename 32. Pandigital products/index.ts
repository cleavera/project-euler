import { $perf } from '../shared';
import { $choose } from '../shared/choose';
import { UniqueArray } from '../shared/unique-array';

$perf(() => {
    const numbers = [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        '&',
        '&'
    ];

    const products: UniqueArray<number> = new UniqueArray();

    $choose(numbers, (reordered: Array<number>) => {
        const parts: Array<number> = reordered.join('').split('&').map((x: string): number => {
            return parseInt(x, 10);
        });

        if (isNaN(parts[0]) || isNaN(parts[1]) || isNaN(parts[2])) {
            return;
        }

        if ((parts[0] * parts[1]) === parts[2]) {
            products.push(parts[2]);
        }
    });

    console.log(products.reduce((total: number, product: number): number => {
        return total + product;
    }, 0));
});
