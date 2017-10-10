/** @private **/
export function $isInteger(a: number): boolean {
    return a.toString().indexOf('.') === -1;
}