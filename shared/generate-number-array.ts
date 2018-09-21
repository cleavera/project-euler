export function $generateNumberArray(length: number, n?: number) {
    let out = [];

    for (let x = 0; x < length; x++) {
        out.push(n === undefined ? x : n);
    }

    return out;
}