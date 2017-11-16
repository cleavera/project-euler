import { $perf } from '../shared';

$perf(() => {
    const target = 200;
    const coins = [
        1,
        2,
        5,
        10,
        20,
        50,
        100,
        200
    ].reverse();

    let count: number = 0;

    check(0, 0);

    function check(coinIndex: number, total: number) {
        const newTotal = total + coins[coinIndex];

        if (newTotal < target) {
            check(coinIndex, newTotal);
        }

        if (newTotal === target) {
            count++;
        }

        if (++coinIndex < coins.length) {
            check(coinIndex, total);
        }

        return;
    }

    console.log(count);
});
