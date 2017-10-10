/** @private **/
export function $squareNumbers(limit: number): { [square: number]: number } {
    let out: { [square: number]: number } = {};

    for (let x: number = 1; x < limit; x++) {
        out[x*x] = x;
    }

    return out;
}