/** @private **/
export function $isInteger(a: number): boolean {
    if (isNaN(a)) {
        return false;
    }

    return a.toString().indexOf('.') === -1;
}