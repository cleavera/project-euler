import { isFactorial } from '../shared/index';

(function() {
    const target = 1000;
    const multiples = [3, 5];

    let sum: number = 0;

    for (let x = 1; x < target; x++) {
        const isMultiple: boolean = multiples.reduce<boolean>((isMultiple: boolean, multiple: number): boolean => {
            return isMultiple || isFactorial(x, multiple);
        }, false);

        if (isMultiple) {
            sum += x;
        }
    }

    console.log(sum);
})();
