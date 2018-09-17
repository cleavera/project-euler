import { $answer, $perf } from '../shared';

$perf(() => {
    const limit = 1e6;
    let concat: string = '.';
    let x: number = 0;

    while (concat.length <= limit) {
        concat += ++x;
    }

    let index = 1;
    let product = 1;

    while (index <= limit) {
        product *= parseInt(concat[index]);
        index *= 10;
    }

    $answer(product);
});
