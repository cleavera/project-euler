export function $sumArray(arr: Array<number>): number {
    return arr.reduce((total: number, item: number): number => {
        return total + item;
    }, 0)
}
