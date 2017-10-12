import { $perf } from '../shared';
import { DIGITS, ORDERS, TEENS, TENS } from './map';

$perf(() => {
    const limit = 1000;

    function numberToText(n: number): string {
        const s = n.toString(10).split('').reverse().map<number>((c: string): number => {
            return parseInt(c);
        });

        let out: string = '';
        let addAnd: boolean = false;

        for (let x: number = 0; x < s.length; x += 3) {
            let part: string = '';
            const digit = s[x];
            const ten = s[x + 1];
            const hundred = s[x + 2];
            const addThousandAnd = addAnd;
            addAnd = false;

            if (hundred) {
                part += DIGITS[hundred] + ORDERS[0];

                addAnd = true;
            }

            if (ten === 1) {
                if (addAnd) {
                    part += 'and';
                    addAnd = false;
                } else {
                    addAnd = true;
                }

                part += TEENS[digit];
            } else if (TENS[ten || 0].length || DIGITS[digit].length) {
                if (addAnd) {
                    part += 'and';
                    addAnd = false;
                } else {
                    addAnd = true;
                }

                part += TENS[ten || 0];
                part += DIGITS[digit];
            } else {
                addAnd = false;
            }

            if (x > 1) {
                let order = x / 3;

                part += ORDERS[order];

                if (addThousandAnd) {
                    part += 'and';
                }
            }

            out = part + out;
        }

        return out;
    }

    let totalLetters: number = 0;

    for (let x: number = 0; x <= limit; x++) {
        totalLetters += numberToText(x).length;
    }

    console.log(totalLetters);
});
