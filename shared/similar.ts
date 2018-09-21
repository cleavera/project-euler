export function $similar<T = any>(a: Array<T>, b: Array<T>): boolean {
    return a.sort().join(',') === b.sort().join(',');
}
