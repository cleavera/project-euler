/** @private **/
export function $sumNumbersUpTo(limit: number): number {
    let k: number = limit / 2;

    return (limit * k) + k;
}
