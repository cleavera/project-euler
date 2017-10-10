/** @private **/
export function $series(cb: (n: number) => number, limit: number, start: number = 0): number {
    let sum: number = 0;

    for (let n = start; n <= limit; n++) {
        sum += cb(n);
    }

    return sum;
}
