import { $factorial, $perf } from '../shared';

$perf(() => {
    const targetPermutation = 1E6;
    const digitLimit = 9;

    const indexes: Array<number> = [];
    let remainingLimit: number = targetPermutation - 1;

    for (let x = digitLimit; x > 0; x--) {
        const permutations = $factorial(x);

        indexes.push(Math.floor(remainingLimit / permutations));
        remainingLimit = remainingLimit % permutations;
    }

    indexes.push(0);

    const numbers: Array<number> = [];

    for (let x = 0; x <= digitLimit; x++) {
        numbers.push(x);
    }

    console.log(indexes.reduce<string>((acc: string, index: number): string => {
        return acc + numbers.splice(index, 1);
    }, ''));
});
