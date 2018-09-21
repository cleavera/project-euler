export function $forEach<T = any>(arr: Array<T>, cb: (item: T) => void) {
    let l = arr.length;

    for (let x = 0; x < l; x++) {
        if (cb(arr[x])) {
            break;
        }
    }
}
